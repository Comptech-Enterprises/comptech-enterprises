import Image from "next/image";
import { clsx } from "clsx";

interface LogoProps {
  className?: string;
  priority?: boolean;
  /** Empty by default: the logo always sits next to the "Comptech Enterprises" text, so a
   * repeated alt would be read twice by screen readers (Lighthouse: image-redundant-alt). */
  alt?: string;
}

export function Logo({ className = "w-10 h-10", priority = true, alt = "" }: LogoProps) {
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
