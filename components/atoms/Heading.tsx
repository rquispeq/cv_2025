import type React from "react"

interface HeadingProps {
  children: React.ReactNode
  level: 1 | 2 | 3 | 4 | 5 | 6
  className?: string
}

export function Heading({ children, level, className = "" }: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements

  const levelClasses = {
    1: "text-4xl font-bold",
    2: "text-3xl font-bold",
    3: "text-2xl font-semibold",
    4: "text-xl font-semibold",
    5: "text-lg font-medium",
    6: "text-base font-medium",
  }

  return <Tag className={`${levelClasses[level]} ${className}`}>{children}</Tag>
}
