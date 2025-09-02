import type React from "react"
interface TextProps {
  children: React.ReactNode
  variant?: "body" | "caption" | "muted"
  className?: string
}

export function Text({ children, variant = "body", className = "" }: TextProps) {
  const variantClasses = {
    body: "text-base",
    caption: "text-sm",
    muted: "text-sm text-muted-foreground",
  }

  return <p className={`${variantClasses[variant]} ${className}`}>{children}</p>
}
