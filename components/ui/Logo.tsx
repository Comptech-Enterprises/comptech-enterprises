import Image from "next/image";
import { clsx } from "clsx";

interface LogoProps {
  className?: string;
  priority?: boolean;
}

export function Logo({ className = "w-10 h-10", priority = true }: LogoProps) {
  return (
    <Image
      src="/images/logo.webp"
      alt="Comptech Enterprises"
      width={88}
      height={52}
      className={clsx(className, "object-contain")}
      priority={priority}
    />
  );
}
