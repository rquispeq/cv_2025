import { Badge } from "@/components/ui/badge"

interface SkillBadgeProps {
  skill: string
}

export function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <Badge variant="secondary" className="text-xs">
      {skill}
    </Badge>
  )
}
