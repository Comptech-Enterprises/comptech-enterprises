import Image from "next/image";
import { clsx } from "clsx";

interface LogoProps {
  className?: string;
}

export function Logo({ className = "w-10 h-10" }: LogoProps) {
  return (
    <Image
      src="/images/logo.webp"
      alt="Comptech Enterprises"
      width={44}
      height={44}
      className={clsx(className, "object-contain")}
      priority
    />
  );
}
