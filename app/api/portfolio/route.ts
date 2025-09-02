import { NextResponse } from "next/server"
import portfolioData from "@/data/portfolio.json"

export async function GET() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 400))

    return NextResponse.json(portfolioData)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch portfolio data" }, { status: 500 })
  }
}
