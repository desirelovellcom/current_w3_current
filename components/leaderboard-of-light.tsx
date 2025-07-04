"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Crown, Heart, Sparkles, TrendingUp, Award } from "lucide-react"

interface LeaderboardUser {
  id: string
  address: string
  name?: string
  tokensGiven: number
  tokensReceived: number
  totalKindness: number
  rank: number
  badge: string
  avatar: string
}

const mockLeaderboard: LeaderboardUser[] = [
  {
    id: "1",
    address: "0x1234...5678",
    name: "KindnessKeeper",
    tokensGiven: 47,
    tokensReceived: 23,
    totalKindness: 70,
    rank: 1,
    badge: "Radiant Soul",
    avatar: "🌟",
  },
  {
    id: "2",
    address: "0x2345...6789",
    name: "LightBringer",
    tokensGiven: 38,
    tokensReceived: 19,
    totalKindness: 57,
    rank: 2,
    badge: "Kind Catalyst",
    avatar: "✨",
  },
  {
    id: "3",
    address: "0x3456...7890",
    name: "HeartWarrior",
    tokensGiven: 29,
    tokensReceived: 24,
    totalKindness: 53,
    rank: 3,
    badge: "Compassion Champion",
    avatar: "💫",
  },
  {
    id: "4",
    address: "0x4567...8901",
    name: "GentleGiant",
    tokensGiven: 22,
    tokensReceived: 18,
    totalKindness: 40,
    rank: 4,
    badge: "Gentle Guardian",
    avatar: "🌙",
  },
  {
    id: "5",
    address: "0x5678...9012",
    name: "SoulShine",
    tokensGiven: 19,
    tokensReceived: 16,
    totalKindness: 35,
    rank: 5,
    badge: "Bright Beacon",
    avatar: "🌈",
  },
]

const getBadgeColor = (rank: number) => {
  switch (rank) {
    case 1:
      return "from-yellow-400 via-orange-400 to-pink-400"
    case 2:
      return "from-purple-400 via-pink-400 to-cyan-400"
    case 3:
      return "from-green-400 via-blue-400 to-purple-400"
    default:
      return "from-gray-400 via-gray-300 to-gray-400"
  }
}

const getRankIcon = (rank: number) => {
  switch (rank) {
    case 1:
      return <Crown className="w-5 h-5 text-yellow-400" />
    case 2:
      return <Award className="w-5 h-5 text-purple-400" />
    case 3:
      return <Sparkles className="w-5 h-5 text-green-400" />
    default:
      return <TrendingUp className="w-4 h-4 text-gray-400" />
  }
}

export default function LeaderboardOfLight() {
  return (
    <Card className="bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-pink-900/20 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden">
      {/* Holographic border effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/10 via-purple-400/10 to-pink-400/10 animate-pulse" />

      <CardHeader className="relative z-10 text-center pb-6">
        <CardTitle className="text-3xl font-bold bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent mb-2">
          Leaderboard of Light 🏆
        </CardTitle>
        <p className="text-gray-300 text-sm">Celebrating the most generous souls in our community</p>
      </CardHeader>

      <CardContent className="relative z-10 space-y-4">
        {mockLeaderboard.map((user, index) => (
          <div
            key={user.id}
            className={`relative group ${
              user.rank <= 3 ? "bg-gradient-to-r from-white/10 via-white/5 to-white/10" : "bg-white/5"
            } backdrop-blur-sm rounded-2xl p-4 border transition-all duration-300 hover:scale-[1.02] ${
              user.rank <= 3 ? "border-white/30 hover:border-white/40" : "border-white/20 hover:border-white/30"
            }`}
          >
            {/* Top 3 holographic effect */}
            {user.rank <= 3 && (
              <div
                className={`absolute inset-0 bg-gradient-to-r ${getBadgeColor(user.rank)} opacity-20 rounded-2xl animate-pulse`}
              />
            )}

            <div className="relative z-10 flex items-center space-x-4">
              {/* Rank & Avatar */}
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-8 h-8">{getRankIcon(user.rank)}</div>
                <div className="text-3xl">{user.avatar}</div>
              </div>

              {/* User Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  <h3 className="text-white font-semibold text-lg truncate">{user.name || user.address}</h3>
                  <Badge
                    className={`bg-gradient-to-r ${getBadgeColor(user.rank)} text-white border-0 text-xs font-medium px-2 py-1`}
                  >
                    {user.badge}
                  </Badge>
                </div>
                <div className="text-gray-400 text-sm mb-2">{user.address}</div>

                {/* Stats */}
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <Heart className="w-4 h-4 text-pink-400" />
                    <span className="text-gray-300">{user.tokensGiven} given</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Sparkles className="w-4 h-4 text-yellow-400" />
                    <span className="text-gray-300">{user.tokensReceived} received</span>
                  </div>
                </div>
              </div>

              {/* Total Score */}
              <div className="text-right">
                <div
                  className={`text-2xl font-bold ${
                    user.rank <= 3
                      ? "bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                      : "text-white"
                  }`}
                >
                  {user.totalKindness}
                </div>
                <div className="text-gray-400 text-xs">Total Kindness</div>
              </div>
            </div>

            {/* Ambient glow for top 3 */}
            {user.rank <= 3 && (
              <div
                className={`absolute inset-0 bg-gradient-to-r ${getBadgeColor(user.rank)} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300 -z-10`}
              />
            )}
          </div>
        ))}

        {/* Footer */}
        <div className="text-center pt-4 border-t border-white/10">
          <p className="text-gray-400 text-sm">
            💫 Rankings based on kindness given and received • Updated in real-time
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
