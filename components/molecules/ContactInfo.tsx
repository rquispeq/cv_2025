import type { LucideIcon } from "lucide-react"
import { Icon } from "@/components/atoms/Icon"

interface ContactInfoProps {
  icon: LucideIcon
  text: string
}

export function ContactInfo({ icon, text }: ContactInfoProps) {
  return (
    <div className="flex items-center">
      <Icon icon={icon} size="sm" className="mr-3 text-muted-foreground" />
      <span>{text}</span>
    </div>
  )
}
