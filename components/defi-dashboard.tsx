"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, DollarSign, Percent, ArrowUpRight, ArrowDownRight } from "lucide-react"

interface DeFiPosition {
  protocol: string
  asset: string
  amount: number
  value: number
  apy: number
  change24h: number
  type: "lending" | "staking" | "liquidity"
}

const positions: DeFiPosition[] = [
  {
    protocol: "Aave",
    asset: "USDC",
    amount: 10000,
    value: 10000,
    apy: 4.2,
    change24h: 0.8,
    type: "lending",
  },
  {
    protocol: "Compound",
    asset: "ETH",
    amount: 5.5,
    value: 12100,
    apy: 3.8,
    change24h: -2.1,
    type: "lending",
  },
  {
    protocol: "Uniswap V3",
    asset: "ETH/USDC",
    amount: 2.8,
    value: 8400,
    apy: 12.5,
    change24h: 5.2,
    type: "liquidity",
  },
  {
    protocol: "Lido",
    asset: "stETH",
    amount: 8.2,
    value: 18040,
    apy: 5.1,
    change24h: 1.4,
    type: "staking",
  },
]

export default function DeFiDashboard() {
  const [selectedTab, setSelectedTab] = useState<"all" | "lending" | "staking" | "liquidity">("all")

  const filteredPositions = selectedTab === "all" ? positions : positions.filter((p) => p.type === selectedTab)

  const totalValue = positions.reduce((sum, pos) => sum + pos.value, 0)
  const totalChange = positions.reduce((sum, pos) => sum + (pos.value * pos.change24h) / 100, 0)
  const averageAPY = positions.reduce((sum, pos) => sum + pos.apy, 0) / positions.length

  const getTypeColor = (type: string) => {
    switch (type) {
      case "lending":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30"
      case "staking":
        return "bg-purple-500/20 text-purple-400 border-purple-500/30"
      case "liquidity":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="bg-gray-900/50 border-gray-800">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400">Total Value</span>
              <DollarSign className="w-5 h-5 text-green-400" />
            </div>
            <div className="text-2xl font-bold text-white mb-1">${totalValue.toLocaleString()}</div>
            <div className={`flex items-center text-sm ${totalChange >= 0 ? "text-green-400" : "text-red-400"}`}>
              {totalChange >= 0 ? (
                <ArrowUpRight className="w-4 h-4 mr-1" />
              ) : (
                <ArrowDownRight className="w-4 h-4 mr-1" />
              )}
              ${Math.abs(totalChange).toFixed(2)} (24h)
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900/50 border-gray-800">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400">Average APY</span>
              <Percent className="w-5 h-5 text-blue-400" />
            </div>
            <div className="text-2xl font-bold text-white mb-1">{averageAPY.toFixed(1)}%</div>
            <div className="text-sm text-gray-400">Across {positions.length} positions</div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900/50 border-gray-800">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400">Monthly Earnings</span>
              <TrendingUp className="w-5 h-5 text-purple-400" />
            </div>
            <div className="text-2xl font-bold text-white mb-1">
              ${((totalValue * averageAPY) / 100 / 12).toFixed(0)}
            </div>
            <div className="text-sm text-green-400">+12.3% vs last month</div>
          </CardContent>
        </Card>
      </div>

      {/* Filter Tabs */}
      <div className="flex space-x-2">
        {(["all", "lending", "staking", "liquidity"] as const).map((tab) => (
          <Button
            key={tab}
            variant={selectedTab === tab ? "default" : "outline"}
            onClick={() => setSelectedTab(tab)}
            className={
              selectedTab === tab
                ? "bg-gradient-to-r from-blue-400 to-purple-500 text-white"
                : "border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
            }
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </Button>
        ))}
      </div>

      {/* Positions List */}
      <Card className="bg-gray-900/50 border-gray-800">
        <CardHeader>
          <CardTitle className="text-white">DeFi Positions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredPositions.map((position, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-white">{position.protocol.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-white font-medium">{position.protocol}</span>
                      <Badge className={getTypeColor(position.type)}>{position.type}</Badge>
                    </div>
                    <div className="text-gray-400 text-sm">
                      {position.amount.toFixed(2)} {position.asset}
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-white font-medium">${position.value.toLocaleString()}</div>
                  <div className="flex items-center space-x-2 text-sm">
                    <span className="text-green-400">{position.apy}% APY</span>
                    <span className={position.change24h >= 0 ? "text-green-400" : "text-red-400"}>
                      {position.change24h >= 0 ? "+" : ""}
                      {position.change24h}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
