"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Sparkles, MessageCircle, User, Calendar } from "lucide-react"

interface KindnessTransaction {
  id: string
  amount: number
  from: string
  message?: string
  timestamp: string
  isAnonymous: boolean
}

const mockTransactions: KindnessTransaction[] = [
  {
    id: "1",
    amount: 3,
    from: "0x1234...5678",
    message: "Thank you for your inspiring work! Keep shining! ✨",
    timestamp: "2024-01-15T10:30:00Z",
    isAnonymous: false,
  },
  {
    id: "2",
    amount: 1,
    from: "Anonymous",
    timestamp: "2024-01-14T15:45:00Z",
    isAnonymous: true,
  },
  {
    id: "3",
    amount: 2,
    from: "0x9876...4321",
    message: "Your kindness made my day better 💫",
    timestamp: "2024-01-13T09:15:00Z",
    isAnonymous: false,
  },
  {
    id: "4",
    amount: 1,
    from: "Anonymous",
    timestamp: "2024-01-12T18:20:00Z",
    isAnonymous: true,
  },
]

const inspirationalQuotes = [
  "Kindness is a language which the deaf can hear and the blind can see. - Mark Twain",
  "No act of kindness, no matter how small, is ever wasted. - Aesop",
  "Be kind whenever possible. It is always possible. - Dalai Lama",
  "Kindness is the sunshine in which virtue grows. - Robert Green Ingersoll",
]

export default function KindnessWallet() {
  const totalBalance = mockTransactions.reduce((sum, tx) => sum + tx.amount, 0)
  const todaysQuote = inspirationalQuotes[Math.floor(Math.random() * inspirationalQuotes.length)]

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <div className="space-y-6">
      {/* Balance Card */}
      <Card className="bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-cyan-900/20 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 via-pink-400/10 to-cyan-400/10 animate-pulse" />
        <CardHeader className="relative z-10 text-center pb-2">
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent">
            My Kindness Wallet 💫
          </CardTitle>
        </CardHeader>
        <CardContent className="relative z-10 text-center">
          <div className="mb-4">
            <div className="text-5xl font-bold text-white mb-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
              {totalBalance}
            </div>
            <div className="text-lg text-gray-300">KND Tokens Received</div>
          </div>
          <div className="flex justify-center space-x-4 text-sm text-gray-400">
            <div className="flex items-center">
              <Heart className="w-4 h-4 mr-1 text-pink-400" />
              {mockTransactions.length} acts of kindness
            </div>
            <div className="flex items-center">
              <Sparkles className="w-4 h-4 mr-1 text-yellow-400" />
              Soulbound tokens
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quote of the Day */}
      <Card className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl">
        <CardContent className="p-6">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-300 mb-2">Daily Inspiration</h3>
              <p className="text-white text-sm leading-relaxed italic">"{todaysQuote}"</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Transaction Timeline */}
      <Card className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl">
        <CardHeader>
          <CardTitle className="text-white text-lg">Kindness Timeline</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {mockTransactions.map((tx, index) => (
            <div key={tx.id} className="relative">
              {/* Timeline line */}
              {index < mockTransactions.length - 1 && (
                <div className="absolute left-6 top-12 w-0.5 h-16 bg-gradient-to-b from-purple-400/50 to-transparent" />
              )}

              <div className="flex items-start space-x-4">
                {/* Avatar/Icon */}
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full flex items-center justify-center border border-white/20">
                    {tx.isAnonymous ? (
                      <User className="w-5 h-5 text-gray-300" />
                    ) : (
                      <Heart className="w-5 h-5 text-pink-400" />
                    )}
                  </div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full animate-pulse -z-10" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-white font-medium text-sm">
                        {tx.isAnonymous ? "Anonymous Sender" : tx.from}
                      </span>
                      <Badge className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border-purple-400/30 text-xs">
                        +{tx.amount} KND
                      </Badge>
                    </div>
                    <div className="flex items-center text-xs text-gray-400">
                      <Calendar className="w-3 h-3 mr-1" />
                      {formatDate(tx.timestamp)}
                    </div>
                  </div>

                  {tx.message && (
                    <div className="bg-white/5 rounded-lg p-3 mt-2 border border-white/10">
                      <div className="flex items-start space-x-2">
                        <MessageCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-300 text-sm leading-relaxed">{tx.message}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
