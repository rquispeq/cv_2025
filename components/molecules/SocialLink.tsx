import { Button } from "@/components/ui/button"
import { Icon } from "@/components/atoms/Icon"
import type { LucideIcon } from "lucide-react"
import Link from "next/link"

interface SocialLinkProps {
  href: string
  icon: LucideIcon
  label: string
  variant?: "blue" | "green" | "gray"
}

export function SocialLink({ href, icon, label, variant = "blue" }: SocialLinkProps) {
  const variantClasses = {
    blue: "hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 dark:hover:bg-blue-950 dark:hover:border-blue-700 dark:hover:text-blue-300",
    green:
      "hover:bg-green-50 hover:border-green-300 hover:text-green-700 dark:hover:bg-green-950 dark:hover:border-green-700 dark:hover:text-green-300",
    gray: "hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-100",
  }

  return (
    <Button variant="outline" size="sm" asChild className={`${variantClasses[variant]} transition-all duration-200`}>
      <Link href={href} target="_blank">
        <Icon icon={icon} size="sm" className="mr-2" />
        {label}
      </Link>
    </Button>
  )
}
