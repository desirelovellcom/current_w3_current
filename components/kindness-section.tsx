"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Heart, Sparkles } from "lucide-react"
import SendKindnessModal from "./send-kindness-modal"
import KindnessWallet from "./kindness-wallet"
import LeaderboardOfLight from "./leaderboard-of-light"

export default function KindnessSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background ambient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-pink-900/10 to-cyan-900/10" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-400/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-400/5 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent">
            Kindness Network 💫
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Spread positivity through the blockchain with soulbound kindness tokens
          </p>

          {/* Send Kindness Button */}
          <Button
            onClick={() => setIsModalOpen(true)}
            className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 hover:from-purple-600 hover:via-pink-600 hover:to-cyan-600 text-white font-semibold px-8 py-4 text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] mb-12"
          >
            <Heart className="w-5 h-5 mr-2" />
            Send Kindness
            <Sparkles className="w-4 h-4 ml-2" />
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Kindness Wallet */}
          <div>
            <KindnessWallet />
          </div>

          {/* Right Column - Leaderboard */}
          <div>
            <LeaderboardOfLight />
          </div>
        </div>
      </div>

      {/* Send Kindness Modal */}
      <SendKindnessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
