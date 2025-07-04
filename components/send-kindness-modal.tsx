"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Heart, Sparkles, Send, User, MessageCircle } from "lucide-react"

interface SendKindnessModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SendKindnessModal({ isOpen, onClose }: SendKindnessModalProps) {
  const [walletAddress, setWalletAddress] = useState("")
  const [amount, setAmount] = useState("1")
  const [isAnonymous, setIsAnonymous] = useState(true)
  const [message, setMessage] = useState("")
  const [isSending, setIsSending] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSend = async () => {
    setIsSending(true)
    // Simulate sending
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSending(false)
    setShowSuccess(true)

    // Reset after success animation
    setTimeout(() => {
      setShowSuccess(false)
      onClose()
      setWalletAddress("")
      setAmount("1")
      setMessage("")
      setIsAnonymous(true)
    }, 3000)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md bg-black/40 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden">
        {/* Holographic border effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-400/20 via-pink-400/20 to-cyan-400/20 p-[1px]">
          <div className="w-full h-full bg-black/60 rounded-3xl" />
        </div>

        <div className="relative z-10 p-6">
          <DialogHeader className="text-center mb-6">
            <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent">
              Send Kindness ✨
            </DialogTitle>
            <p className="text-gray-300 text-sm mt-2">Spread positivity with KND tokens</p>
          </DialogHeader>

          {showSuccess ? (
            <div className="text-center py-8">
              <div className="relative mb-4">
                <Heart className="w-16 h-16 text-pink-400 mx-auto animate-pulse" />
                <div className="absolute inset-0 animate-ping">
                  <Heart className="w-16 h-16 text-pink-400/50 mx-auto" />
                </div>
                {/* Floating sparkles */}
                <div className="absolute -top-2 -left-2 animate-bounce delay-100">
                  <Sparkles className="w-4 h-4 text-yellow-300" />
                </div>
                <div className="absolute -top-1 -right-3 animate-bounce delay-300">
                  <Sparkles className="w-3 h-3 text-purple-300" />
                </div>
                <div className="absolute -bottom-2 left-1 animate-bounce delay-500">
                  <Sparkles className="w-3 h-3 text-cyan-300" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Kindness Sent! 💫</h3>
              <p className="text-gray-300 text-sm">Your positive energy is spreading through the network</p>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Wallet Address */}
              <div className="space-y-2">
                <Label className="text-gray-300 text-sm font-medium">To Wallet Address</Label>
                <Input
                  value={walletAddress}
                  onChange={(e) => setWalletAddress(e.target.value)}
                  placeholder="0x... or ENS name"
                  className="bg-white/5 border-white/20 rounded-2xl text-white placeholder:text-gray-400 focus:border-purple-400/50 focus:ring-purple-400/20"
                />
              </div>

              {/* Amount */}
              <div className="space-y-2">
                <Label className="text-gray-300 text-sm font-medium">KND Amount</Label>
                <Input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  min="1"
                  className="bg-white/5 border-white/20 rounded-2xl text-white focus:border-purple-400/50 focus:ring-purple-400/20"
                />
              </div>

              {/* Ambient Toggle Switch */}
              <div className="space-y-3">
                <Label className="text-gray-300 text-sm font-medium">Sending Style</Label>
                <div className="relative">
                  {/* Toggle Container */}
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-full p-1 border border-white/20 shadow-lg">
                    {/* Holographic border effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400/30 via-pink-400/30 to-cyan-400/30 animate-pulse" />

                    {/* Sliding background */}
                    <div
                      className={`absolute top-1 bottom-1 w-1/2 bg-gradient-to-r from-purple-400/40 to-pink-400/40 rounded-full transition-all duration-300 ease-out shadow-lg ${
                        isAnonymous ? "left-1" : "left-1/2"
                      }`}
                    >
                      <div className="absolute inset-0 bg-white/10 rounded-full animate-pulse" />
                    </div>

                    {/* Toggle Options */}
                    <div className="relative flex">
                      <button
                        onClick={() => setIsAnonymous(true)}
                        className={`flex-1 px-4 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                          isAnonymous
                            ? "text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                            : "text-gray-400 hover:text-gray-200"
                        }`}
                      >
                        <User className="w-4 h-4 inline mr-2" />
                        Send Anonymously
                      </button>
                      <button
                        onClick={() => setIsAnonymous(false)}
                        className={`flex-1 px-4 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                          !isAnonymous
                            ? "text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                            : "text-gray-400 hover:text-gray-200"
                        }`}
                      >
                        <MessageCircle className="w-4 h-4 inline mr-2" />
                        Sign + Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Message Input (conditional) */}
              {!isAnonymous && (
                <div className="space-y-2 animate-in slide-in-from-top-2 duration-300">
                  <Label className="text-gray-300 text-sm font-medium">Your Message</Label>
                  <Textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Share your positive thoughts..."
                    className="bg-white/5 border-white/20 rounded-2xl text-white placeholder:text-gray-400 focus:border-purple-400/50 focus:ring-purple-400/20 min-h-[80px] resize-none"
                  />
                </div>
              )}

              {/* Send Button */}
              <Button
                onClick={handleSend}
                disabled={!walletAddress || isSending}
                className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 hover:from-purple-600 hover:via-pink-600 hover:to-cyan-600 text-white font-semibold py-3 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSending ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                    Sending Kindness...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <Send className="w-4 h-4 mr-2" />
                    Send Kindness
                  </div>
                )}
              </Button>

              {/* Info Text */}
              <p className="text-xs text-gray-400 text-center">
                💫 Kindness tokens are soulbound and represent permanent positive expressions
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
