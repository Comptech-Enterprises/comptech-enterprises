"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  label: string;
  isBrand: boolean;
}

export function NetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      
      const dpr = window.devicePixelRatio || 1;
      width = parent.clientWidth;
      height = parent.clientHeight || 450;
      
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    // Initialize particles
    const nodes: Node[] = [];
    const labels = ["Dell OEM", "Cisco OEM", "HP OEM", "Lenovo", "Staging Hub", "Client DC", "AMC Support", "Edge Cloud"];
    const nodeCount = 28;

    for (let i = 0; i < nodeCount; i++) {
      const isBrand = i < labels.length;
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: isBrand ? 5 : 2.5,
        label: isBrand ? labels[i] : "",
        isBrand,
      });
    }

    const mouse = mouseRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
      mouse.active = false;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    // Animation Loop
    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw Connecting Lines (edges)
      const maxDistance = 110;
      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i];
        
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.15;
            ctx.strokeStyle = n1.isBrand || n2.isBrand 
              ? `rgba(99, 102, 241, ${alpha * 1.5})` 
              : `rgba(59, 130, 246, ${alpha})`;
            ctx.lineWidth = n1.isBrand || n2.isBrand ? 1.2 : 0.8;
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.stroke();
          }
        }

        // 2. Draw connections to mouse cursor
        if (mouse.active) {
          const mdx = n1.x - mouse.x;
          const mdy = n1.y - mouse.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mdist < 150) {
            const alpha = (1 - mdist / 150) * 0.25;
            ctx.strokeStyle = `rgba(0, 102, 255, ${alpha})`;
            ctx.lineWidth = 1.0;
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }

      // 3. Draw Nodes (vertices) & Labels
      nodes.forEach((n) => {
        // Move particle
        n.x += n.vx;
        n.y += n.vy;

        // Wall collisions
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        // Keep boundaries
        n.x = Math.max(0, Math.min(width, n.x));
        n.y = Math.max(0, Math.min(height, n.y));

        // Draw particle node
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        
        if (n.isBrand) {
          // Glow effect for brand/infrastructure nodes
          const gradient = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.radius * 2.5);
          gradient.addColorStop(0, "rgba(99, 102, 241, 1)");
          gradient.addColorStop(0.4, "rgba(59, 130, 246, 0.8)");
          gradient.addColorStop(1, "rgba(59, 130, 246, 0)");
          ctx.fillStyle = gradient;
          ctx.arc(n.x, n.y, n.radius * 2.5, 0, Math.PI * 2);
          ctx.fill();

          ctx.beginPath();
          ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
          ctx.fillStyle = "#ffffff";
          ctx.fill();

          // Render Label text
          ctx.fillStyle = "rgba(243, 244, 246, 0.85)";
          ctx.font = "bold 9px var(--font-inter, sans-serif)";
          ctx.textAlign = "center";
          ctx.fillText(n.label, n.x, n.y - n.radius - 6);
        } else {
          ctx.fillStyle = "rgba(59, 130, 246, 0.55)";
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="block w-full h-full cursor-crosshair"
    />
  );
}
