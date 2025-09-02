import { useApi } from "./useApi"
import type { ExperienceData } from "@/types"

export function useExperience() {
  return useApi<ExperienceData>("/api/experience")
}
