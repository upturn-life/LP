/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Trophy, 
  Zap, 
  Play,
  Activity,
  Shield,
  Layers,
  Pickaxe,
  Share2,
  Star
} from 'lucide-react';

export default function App() {
  // Reusable CTA Button Component
  const PlayButton = ({ className = "" }: { className?: string }) => (
    <a 
      href="https://t.me/festifybot" 
      target="_blank" 
      rel="noopener noreferrer"
      className={`w-full py-4 rounded-2xl bg-gradient-primary font-bold text-lg text-white flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-transform animate-pulse-glow ${className}`}
      style={{ willChange: 'transform, box-shadow' }}
    >
      <Play size={22} fill="currentColor" />
      Play on Telegram
    </a>
  );

  return (
    <div className="w-full max-w-[420px] min-h-screen bg-[#050507] text-white relative shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-x-hidden selection:bg-neon-purple/30">
      
      {/* Animated Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden max-w-[420px] mx-auto">
        <motion.div 
          animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{ willChange: 'transform, opacity' }}
          className="absolute top-[-5%] left-[-20%] w-[70%] h-[30%] rounded-full bg-neon-blue/20 blur-[100px]" 
        />
        <motion.div 
          animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          style={{ willChange: 'transform, opacity' }}
          className="absolute bottom-[10%] right-[-20%] w-[80%] h-[40%] rounded-full bg-neon-purple/20 blur-[120px]" 
        />
        
        {/* Subtle Particle Lights */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [0, -20, 0], 
              opacity: [0, 0.8, 0] 
            }}
            transition={{ 
              duration: 3 + Math.random() * 2, 
              repeat: Infinity, 
              delay: Math.random() * 2 
            }}
            style={{ willChange: 'transform, opacity' }}
            className="absolute w-1 h-1 bg-white rounded-full blur-[1px]"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${30 + Math.random() * 40}%`,
              willChange: 'transform, opacity'
            }}
          />
        ))}
      </div>

      {/* Header - Strictly Logo & Brand */}
      <header className="relative z-10 flex items-center justify-center py-5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center glow-blue">
            <Activity size={18} className="text-white" />
          </div>
          <span className="font-display font-bold text-2xl tracking-wide glow-text-blue">FESTIFY</span>
        </div>
      </header>

      <main className="relative z-10 pb-12">
        
        {/* 1. HERO SECTION (CARD) */}
        <section className="px-4 pt-2 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-[32px] p-6 relative border-white/10 shadow-2xl overflow-hidden"
          >
            {/* Inner Card Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-neon-blue/10 blur-[50px] pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center text-center">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-5 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">
                  100,000+ Players Already Competing Daily
                </span>
              </div>
              
              {/* Headline & Desc */}
              <h1 className="font-display text-4xl font-extrabold leading-[1.1] mb-3 tracking-tight">
                Build Your <br />
                <span className="text-gradient">Crypto Squad.</span><br />
                Win Real Rewards.
              </h1>
              
              <p className="text-zinc-400 text-sm mb-8 leading-relaxed px-2">
                Choose 20 tokens, compete in arenas, and climb the leaderboard.
              </p>

              {/* Crypto Squad Preview UI */}
              <div className="w-full bg-[#0a0a0f]/80 rounded-2xl p-4 mb-8 border border-white/5 shadow-inner relative overflow-hidden">
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-neon-purple/20 blur-2xl" />
                
                <div className="flex justify-between items-center mb-3 relative z-10">
                  <div className="flex items-center gap-2">
                    <Shield size={14} className="text-neon-purple" />
                    <span className="text-xs font-bold text-zinc-300">Your Squad</span>
                  </div>
                  <div className="text-[10px] font-mono text-neon-blue bg-neon-blue/10 px-2 py-0.5 rounded">
                    Power: 9,240
                  </div>
                </div>

                {/* Token Grid */}
                <div className="grid grid-cols-5 gap-2 mb-3 relative z-10">
                  {[
                    { symbol: "BTC", active: true },
                    { symbol: "ETH", active: true },
                    { symbol: "SOL", active: true, power: true },
                    { symbol: "DOGE", active: true },
                    { symbol: "BNB", active: true },
                    { symbol: "+", active: false },
                    { symbol: "+", active: false },
                    { symbol: "+", active: false },
                    { symbol: "+", active: false },
                    { symbol: "+", active: false },
                  ].map((slot, i) => (
                    <motion.div 
                      key={i}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.3 + (i * 0.05) }}
                      className={`aspect-square rounded-lg flex items-center justify-center text-[10px] font-bold relative
                        ${slot.power ? 'bg-gradient-primary glow-purple border-none text-white z-10' : 
                          slot.active ? 'bg-white/10 border border-white/20 text-white' : 
                          'bg-white/5 border border-white/5 text-zinc-600 border-dashed'}`}
                    >
                      {slot.symbol}
                      {slot.power && (
                        <motion.div 
                          animate={{ rotate: 360 }} 
                          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                          style={{ willChange: 'transform' }}
                          className="absolute -inset-1 border border-neon-purple/50 rounded-lg rounded-tl-none rounded-br-none" 
                        />
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Arena Reward Indicator */}
                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-2.5 flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-1.5">
                    <Trophy size={12} className="text-emerald-400" />
                    <span className="text-[10px] font-bold text-emerald-400 uppercase">USD Arena</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-white">$5,000 Prize Pool</span>
                </div>
              </div>

              {/* CTA 1 */}
              <PlayButton />
              
            </div>
          </motion.div>
        </section>

        {/* 2. HOW FESTIFY WORKS */}
        <section className="px-4 py-8">
          <div className="mb-6 px-2">
            <h2 className="font-display text-2xl font-bold mb-1">How It Works</h2>
            <p className="text-zinc-400 text-xs">Build, boost, and battle.</p>
          </div>

          <div className="space-y-3">
            {[
              { icon: Layers, title: "Choose 20 Tokens", desc: "Pick your lineup from over 100+ top cryptocurrencies.", color: "text-neon-blue", bg: "bg-neon-blue/10" },
              { icon: Zap, title: "Build Your Power Squad", desc: "Assign power tokens to multiply your squad's performance.", color: "text-neon-purple", bg: "bg-neon-purple/10" },
              { icon: Trophy, title: "Compete & Win", desc: "Enter arenas and earn rewards based on market moves.", color: "text-amber-400", bg: "bg-amber-400/10" }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-4 rounded-2xl flex items-center gap-4"
              >
                <div className={`w-10 h-10 rounded-xl ${step.bg} flex items-center justify-center shrink-0`}>
                  <step.icon className={step.color} size={20} />
                </div>
                <div>
                  <div className="text-[10px] text-zinc-500 font-mono mb-0.5">STEP 0{i+1}</div>
                  <h3 className="font-bold text-sm mb-0.5">{step.title}</h3>
                  <p className="text-xs text-zinc-400 leading-snug">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA 2 */}
        <div className="px-4 pb-10">
          <PlayButton />
        </div>

        {/* 3. ARENA REWARDS */}
        <section className="py-8 bg-white/[0.02] border-y border-white/[0.05]">
          <div className="mb-6 px-4">
            <h2 className="font-display text-2xl font-bold mb-1">Arena Rewards</h2>
            <p className="text-zinc-400 text-xs">Compete for massive prize pools.</p>
          </div>

          <div className="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory hide-scrollbar px-4">
            {[
              { name: "USD Arena", prize: "$5,000", color: "from-emerald-500/20 to-transparent", border: "border-emerald-500/30", text: "text-emerald-400" },
              { name: "FEST Arena", prize: "100K FEST", color: "from-neon-blue/20 to-transparent", border: "border-neon-blue/30", text: "text-neon-blue" },
              { name: "FXP Arena", prize: "500K FXP", color: "from-neon-purple/20 to-transparent", border: "border-neon-purple/30", text: "text-neon-purple" }
            ].map((arena, i) => (
              <div key={i} className={`snap-center shrink-0 w-[220px] glass-card rounded-2xl p-5 border-t bg-gradient-to-b ${arena.color} ${arena.border}`}>
                <div className="flex justify-between items-start mb-6">
                  <div className="font-display font-bold text-lg">{arena.name}</div>
                  <Trophy size={18} className={arena.text} />
                </div>
                
                <div className="space-y-1">
                  <div className="text-[10px] text-zinc-400 uppercase tracking-wider">Top Prize</div>
                  <div className={`text-2xl font-mono font-bold ${arena.text}`}>{arena.prize}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. EARN BEYOND ARENAS */}
        <section className="px-4 py-10">
          <div className="mb-6 px-2">
            <h2 className="font-display text-2xl font-bold mb-1">Earn Beyond Arenas</h2>
            <p className="text-zinc-400 text-xs">More ways to stack rewards.</p>
          </div>

          <div className="grid grid-cols-1 gap-3">
            <div className="glass-card p-5 rounded-2xl flex items-start gap-3 border-l-2 border-l-neon-blue">
              <div className="w-10 h-10 rounded-xl bg-neon-blue/10 flex items-center justify-center shrink-0 text-neon-blue">
                <Share2 size={20} />
              </div>
              <div>
                <h3 className="font-bold text-sm mb-1">Referral Pools</h3>
                <p className="text-xs text-zinc-400">Invite friends to build their squads and earn a share of the referral reward pools.</p>
              </div>
            </div>
            
            <div className="glass-card p-5 rounded-2xl flex items-start gap-3 border-l-2 border-l-neon-purple">
              <div className="w-10 h-10 rounded-xl bg-neon-purple/10 flex items-center justify-center shrink-0 text-neon-purple">
                <Pickaxe size={20} />
              </div>
              <div>
                <h3 className="font-bold text-sm mb-1">Mining Pools</h3>
                <p className="text-xs text-zinc-400">Earn platform tokens simply through engagement and daily activity in the app.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. SOCIAL PROOF / ENERGY */}
        <section className="px-4 py-8 relative">
          <div className="glass-card rounded-3xl p-6 relative border-neon-blue/20 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-neon-blue/10 to-transparent pointer-events-none" />
            
            <div className="flex items-center justify-center gap-2 mb-6 relative z-10">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">Live Ecosystem</span>
            </div>

            <div className="space-y-6 relative z-10">
              <motion.div whileHover={{ scale: 1.05 }}>
                <div className="text-3xl font-display font-bold text-white mb-0.5">100K+</div>
                <div className="text-[10px] text-zinc-400 uppercase tracking-wider font-medium">Daily Players</div>
              </motion.div>
              
              <div className="h-px w-16 mx-auto bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              
              <motion.div whileHover={{ scale: 1.05 }}>
                <div className="text-2xl font-display font-bold text-neon-blue mb-0.5">Thousands</div>
                <div className="text-[10px] text-zinc-400 uppercase tracking-wider">Of Squads Competing</div>
              </motion.div>

              <div className="h-px w-16 mx-auto bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              
              <motion.div whileHover={{ scale: 1.05 }}>
                <div className="text-2xl font-display font-bold text-neon-purple mb-0.5">Multiple</div>
                <div className="text-[10px] text-zinc-400 uppercase tracking-wider">Reward Pools Active</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 6. FINAL CTA */}
        <section className="px-4 pt-8 pb-12 text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-neon-purple/10 blur-[80px] rounded-full pointer-events-none" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="font-display text-3xl font-extrabold mb-3">Ready to Build<br/>Your Squad?</h2>
            <p className="text-zinc-400 text-sm mb-8 px-4">
              Join 100,000+ players competing in daily arenas right now.
            </p>
            
            {/* CTA 3 */}
            <PlayButton />
          </motion.div>
        </section>

      </main>

      {/* Footer */}
      <footer className="px-4 py-6 border-t border-white/5 text-center relative z-10 bg-[#050507]">
        <div className="flex items-center justify-center gap-1.5 mb-3">
          <Activity size={14} className="text-neon-blue" />
          <span className="font-display font-bold text-sm tracking-wide">FESTIFY</span>
        </div>
        <p className="text-[10px] text-zinc-600">
          © 2026 Festify. All rights reserved.<br/>
          Build your squad. Win rewards.
        </p>
      </footer>

    </div>
  );
}


