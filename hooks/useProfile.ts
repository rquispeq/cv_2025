import { useApi } from "./useApi"
import type { ProfileData } from "@/types"

export function useProfile() {
  return useApi<ProfileData>("/api/profile")
}
