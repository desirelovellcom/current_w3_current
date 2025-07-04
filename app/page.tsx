import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, Zap, Globe, Users, CheckCircle, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Wallet, TrendingUp, DollarSign, PieChart, BarChart3, Coins, CreditCard, Banknote } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center">
            <Shield className="w-4 h-4 text-white" />
          </div>
          <span className="text-xl font-bold">Web3 Nodes</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#program" className="hover:text-cyan-400 transition-colors">
            Program
          </Link>
          <Link href="#validators" className="hover:text-cyan-400 transition-colors">
            Validators
          </Link>
          <Link href="#ecosystem" className="hover:text-cyan-400 transition-colors">
            Ecosystem
          </Link>
          <Button
            variant="outline"
            className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black bg-transparent"
          >
            Connect Wallet
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        {/* Background Orbital Graphics */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/4">
            <div className="relative w-96 h-96 md:w-[600px] md:h-[600px]">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border-2 border-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-30 animate-spin-slow">
                <div className="absolute top-0 left-1/2 w-4 h-4 bg-cyan-400 rounded-full transform -translate-x-1/2 -translate-y-2"></div>
                <div className="absolute bottom-0 right-1/4 w-3 h-3 bg-purple-500 rounded-full"></div>
              </div>
              {/* Middle ring */}
              <div className="absolute inset-8 rounded-full border border-cyan-400 opacity-50 animate-spin-reverse">
                <div className="absolute top-1/4 right-0 w-2 h-2 bg-pink-400 rounded-full"></div>
              </div>
              {/* Inner elements */}
              <div className="absolute inset-16 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-full blur-xl"></div>
              </div>
              {/* Floating particles */}
              <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
              <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
              <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-pink-400 rounded-full animate-pulse delay-2000"></div>
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 text-cyan-400 border-cyan-400/30">
            <Zap className="w-4 h-4 mr-2" />
            Powered by Polkadot
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Decentralized
            <br />
            Nodes
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            A Delegation Program that Supports Validators in the Polkadot Ecosystem
          </p>

          <div className="mb-12">
            <p className="text-lg text-cyan-400 mb-6 font-semibold">Applications for Cohort 4 are now open!</p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-400 to-purple-500 hover:from-cyan-500 hover:to-purple-600 text-black font-semibold px-8 py-4 text-lg"
            >
              Apply Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Program Goals Section */}
      <section id="program" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Program Goals
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">The program aims to select validators that:</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-900/50 border-gray-800 hover:border-cyan-400/50 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Technical Excellence</h3>
                <p className="text-gray-400">
                  Have the technical knowledge to run secure and reliable validator nodes with minimal downtime
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 hover:border-purple-400/50 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Globe className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Network Reliability</h3>
                <p className="text-gray-400">
                  Don't go offline, miss paravalidation duties, and maintain consistent network participation
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 hover:border-pink-400/50 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-400/20 to-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8 text-pink-400" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Emergency Response</h3>
                <p className="text-gray-400">
                  Can react to emergencies quickly and effectively to maintain network security and stability
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* DeFi Integration Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Web3 Finance Ecosystem
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Seamlessly blend traditional finance with decentralized protocols for complete financial control
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="bg-gray-900/50 border-gray-800 hover:border-green-400/50 transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Wallet className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">Self-Custodial Wallet</h3>
                <p className="text-gray-400 text-sm">
                  Full control over your assets with MetaMask and Trust Wallet integration
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 hover:border-blue-400/50 transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">DEX Trading</h3>
                <p className="text-gray-400 text-sm">Trade directly on Uniswap and other decentralized exchanges</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 hover:border-purple-400/50 transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <PieChart className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">Smart Budgeting</h3>
                <p className="text-gray-400 text-sm">Automated budget management through smart contracts</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 hover:border-yellow-400/50 transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6 text-yellow-400" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">Layer-2 Solutions</h3>
                <p className="text-gray-400 text-sm">Low-cost transactions on Polygon and Arbitrum networks</p>
              </CardContent>
            </Card>
          </div>

          {/* Featured DeFi Platforms */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-pink-500/10 to-purple-600/10 border-pink-500/30 hover:border-pink-400 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center mr-3">
                    <Coins className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">OpenFi Banking</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Web3 banking app built on DeFi protocols, offering more control over your wealth than traditional
                  banks.
                </p>
                <Button className="w-full bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white">
                  Connect to OpenFi
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-600/10 border-blue-500/30 hover:border-blue-400 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mr-3">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Uniswap DEX</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Trade cryptocurrencies directly on the world's leading decentralized exchange protocol.
                </p>
                <Button className="w-full bg-gradient-to-r from-blue-400 to-cyan-500 hover:from-blue-500 hover:to-cyan-600 text-white">
                  Trade on Uniswap
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-500/10 to-emerald-600/10 border-green-500/30 hover:border-green-400 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mr-3">
                    <DollarSign className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">DeFi Lending</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Lend, borrow, and earn interest on your crypto assets through various DeFi protocols.
                </p>
                <Button className="w-full bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 text-white">
                  Start Earning
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center mb-12">
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">1000+</div>
              <div className="text-gray-400">Active Validators</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-gray-400">Network Uptime</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-pink-400 mb-2">50M+</div>
              <div className="text-gray-400">DOT Staked</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-400">Monitoring</div>
            </div>
          </div>

          {/* DeFi Stats */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">$2.5B+</div>
              <div className="text-gray-400">Total Value Locked</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">15.2%</div>
              <div className="text-gray-400">Average APY</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">500K+</div>
              <div className="text-gray-400">DeFi Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">0.01%</div>
              <div className="text-gray-400">Transaction Fees</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Program Benefits
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Delegation Support</h3>
                  <p className="text-gray-400">
                    Receive delegation from the Web3 Foundation to boost your validator performance
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Technical Mentorship</h3>
                  <p className="text-gray-400">
                    Access to expert guidance and best practices for running validator nodes
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Community Access</h3>
                  <p className="text-gray-400">
                    Join an exclusive network of professional validators and ecosystem builders
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Performance Monitoring</h3>
                  <p className="text-gray-400">
                    Advanced tools and dashboards to track and optimize your validator performance
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-cyan-400/10 to-purple-500/10 rounded-2xl border border-gray-800 flex items-center justify-center">
                <Users className="w-24 h-24 text-cyan-400 opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Dashboard Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent">
              Comprehensive Financial Dashboard
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Monitor your traditional and crypto assets in one unified interface
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Card className="bg-gray-900/50 border-gray-800 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">Portfolio Overview</h3>
                  <BarChart3 className="w-6 h-6 text-blue-400" />
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Total Portfolio Value</span>
                    <span className="text-2xl font-bold text-green-400">$125,430</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">24h Change</span>
                    <span className="text-green-400">+5.2% (+$6,234)</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-400 to-green-400 h-2 rounded-full"
                      style={{ width: "68%" }}
                    ></div>
                  </div>
                </div>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">Smart Budget Tracker</h3>
                  <PieChart className="w-6 h-6 text-purple-400" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Monthly Budget</span>
                    <span className="text-white">$4,500 / $5,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">DeFi Earnings</span>
                    <span className="text-green-400">+$1,234</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Staking Rewards</span>
                    <span className="text-blue-400">+$567</span>
                  </div>
                </div>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">Layer-2 Savings</h3>
                  <Banknote className="w-6 h-6 text-yellow-400" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Gas Fees Saved</span>
                    <span className="text-green-400">$2,341</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Transactions This Month</span>
                    <span className="text-white">1,247</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Average Fee</span>
                    <span className="text-yellow-400">$0.02</span>
                  </div>
                </div>
              </Card>
            </div>

            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-400/10 to-green-500/10 rounded-2xl border border-gray-800 p-8">
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-2">Web3 Banking Card</h4>
                    <p className="text-gray-400 mb-8">Spend your crypto anywhere</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Available Balance</span>
                      <span className="text-xl font-bold text-white">$12,450.32</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <CreditCard className="w-8 h-8 text-blue-400" />
                      <div>
                        <div className="text-white font-mono">**** **** **** 4829</div>
                        <div className="text-gray-400 text-sm">Expires 12/27</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-cyan-400/10 to-purple-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Join the Network?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Apply now to become part of the next cohort of professional validators securing the Polkadot ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-400 to-purple-500 hover:from-cyan-500 hover:to-purple-600 text-black font-semibold px-8 py-4"
            >
              Apply for Cohort 4
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 bg-transparent"
            >
              Learn More
              <ExternalLink className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold">Web3 Nodes</span>
            </div>
            <div className="flex space-x-6 text-gray-400">
              <Link href="#" className="hover:text-cyan-400 transition-colors">
                Documentation
              </Link>
              <Link href="#" className="hover:text-cyan-400 transition-colors">
                Support
              </Link>
              <Link href="#" className="hover:text-cyan-400 transition-colors">
                Terms
              </Link>
              <Link href="#" className="hover:text-cyan-400 transition-colors">
                Privacy
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 Web3 Nodes. Built for the decentralized future.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
