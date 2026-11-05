import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "default" | "dark" | "outline" | "white" | "small";

const variantClass: Record<Variant, string> = {
  default: "btn",
  dark: "btn dark",
  outline: "btn outline",
  white: "btn white",
  small: "btn small",
};

type Common = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  full?: boolean;
};

export function Button({
  children,
  variant = "default",
  className = "",
  full,
  ...props
}: Common & ComponentProps<"button">) {
  return (
    <button
      className={`${variantClass[variant]}${full ? " full" : ""} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "default",
  className = "",
  full,
  style,
  ...props
}: Common &
  Omit<ComponentProps<typeof Link>, "href" | "className" | "children"> & {
    href: string;
  }) {
  return (
    <Link
      href={href}
      className={`${variantClass[variant]}${full ? " full" : ""} ${className}`.trim()}
      style={style}
      {...props}
    >
      {children}
    </Link>
  );
}
