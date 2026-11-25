import Image from "next/image";
import { clsx } from "clsx";

interface LogoProps {
  className?: string;
  priority?: boolean;
  /** Defaults to the brand name plus what the company does. */
  alt?: string;
}

export function Logo({ className = "w-10 h-10", priority = true, alt = "Comptech Enterprises - Enterprise IT & AI Solutions" }: LogoProps) {
  return (
    <Image
      src="/images/logo.webp"
      alt={alt}
      width={88}
      height={52}
      className={clsx(className, "object-contain")}
      priority={priority}
    />
  );
}
