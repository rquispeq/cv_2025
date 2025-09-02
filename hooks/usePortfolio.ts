import { useApi } from "./useApi"
import type { PortfolioData } from "@/types"

export function usePortfolio() {
  return useApi<PortfolioData>("/api/portfolio")
}
