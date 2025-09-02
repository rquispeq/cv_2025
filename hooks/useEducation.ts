import { useApi } from "./useApi"
import type { EducationData } from "@/types"

export function useEducation() {
  return useApi<EducationData>("/api/education")
}
