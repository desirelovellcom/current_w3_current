"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wallet, CheckCircle, AlertCircle } from "lucide-react"

interface WalletOption {
  name: string
  icon: string
  description: string
  supported: boolean
  popular?: boolean
}

const walletOptions: WalletOption[] = [
  {
    name: "MetaMask",
    icon: "🦊",
    description: "Most popular Ethereum wallet",
    supported: true,
    popular: true,
  },
  {
    name: "Trust Wallet",
    icon: "🛡️",
    description: "Mobile-first multi-chain wallet",
    supported: true,
  },
  {
    name: "Coinbase Wallet",
    icon: "🔵",
    description: "Easy-to-use wallet by Coinbase",
    supported: true,
  },
  {
    name: "WalletConnect",
    icon: "🔗",
    description: "Connect any mobile wallet",
    supported: true,
  },
  {
    name: "Ledger",
    icon: "🔐",
    description: "Hardware wallet integration",
    supported: false,
  },
]

export default function WalletConnector() {
  const [isConnecting, setIsConnecting] = useState(false)
  const [connectedWallet, setConnectedWallet] = useState<string | null>(null)

  const handleConnect = async (walletName: string) => {
    setIsConnecting(true)
    // Simulate connection process
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setConnectedWallet(walletName)
    setIsConnecting(false)
  }

  const handleDisconnect = () => {
    setConnectedWallet(null)
  }

  if (connectedWallet) {
    return (
      <Card className="bg-gray-900/50 border-green-500/30">
        <CardHeader>
          <CardTitle className="flex items-center text-green-400">
            <CheckCircle className="w-5 h-5 mr-2" />
            Wallet Connected
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <span className="text-2xl mr-3">{walletOptions.find((w) => w.name === connectedWallet)?.icon}</span>
              <div>
                <div className="text-white font-semibold">{connectedWallet}</div>
                <div className="text-gray-400 text-sm">0x1234...5678</div>
              </div>
            </div>
            <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Connected</Badge>
          </div>
          <div className="space-y-2 mb-4">
            <div className="flex justify-between">
              <span className="text-gray-400">Balance:</span>
              <span className="text-white">2.45 ETH</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Network:</span>
              <span className="text-blue-400">Ethereum Mainnet</span>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button
              onClick={handleDisconnect}
              variant="outline"
              className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
            >
              Disconnect
            </Button>
            <Button className="flex-1 bg-gradient-to-r from-blue-400 to-purple-500 hover:from-blue-500 hover:to-purple-600">
              View Portfolio
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-gray-900/50 border-gray-800">
      <CardHeader>
        <CardTitle className="flex items-center text-white">
          <Wallet className="w-5 h-5 mr-2" />
          Connect Your Wallet
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {walletOptions.map((wallet) => (
            <div
              key={wallet.name}
              className={`flex items-center justify-between p-4 rounded-lg border transition-all duration-200 ${
                wallet.supported
                  ? "border-gray-700 hover:border-blue-400/50 cursor-pointer bg-gray-800/30 hover:bg-gray-800/50"
                  : "border-gray-800 bg-gray-900/30 cursor-not-allowed opacity-50"
              }`}
              onClick={() => wallet.supported && handleConnect(wallet.name)}
            >
              <div className="flex items-center">
                <span className="text-2xl mr-3">{wallet.icon}</span>
                <div>
                  <div className="flex items-center">
                    <span className="text-white font-medium">{wallet.name}</span>
                    {wallet.popular && (
                      <Badge className="ml-2 bg-blue-500/20 text-blue-400 border-blue-500/30 text-xs">Popular</Badge>
                    )}
                  </div>
                  <div className="text-gray-400 text-sm">{wallet.description}</div>
                </div>
              </div>
              <div className="flex items-center">
                {wallet.supported ? (
                  <CheckCircle className="w-5 h-5 text-green-400" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-yellow-400" />
                )}
              </div>
            </div>
          ))}
        </div>

        {isConnecting && (
          <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
            <div className="flex items-center">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-400 mr-3"></div>
              <span className="text-blue-400">Connecting wallet...</span>
            </div>
          </div>
        )}

        <div className="mt-6 p-4 bg-gray-800/30 rounded-lg">
          <div className="flex items-start">
            <AlertCircle className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
            <div className="text-sm">
              <div className="text-yellow-400 font-medium mb-1">Security Notice</div>
              <div className="text-gray-400">
                Only connect wallets you trust. Never share your seed phrase or private keys.
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
