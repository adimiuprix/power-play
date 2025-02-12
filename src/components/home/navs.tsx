"use client";

import { motion } from "framer-motion";
import { X, Zap, Target, Atom, Trophy, Gift, ChartLine } from "lucide-react";
import { DailyRewardDialog } from "../dialog/daily-reward-dialog";

export function NavCards() {
  return (
    <motion.section
      className="grid grid-cols-3 gap-4 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <button className="bg-slate-800/50 bg-opacity-70 backdrop-blur-xl border border-white p-4 rounded-xl flex flex-col items-center justify-center">
        <ChartLine size={32} className="mb-2" />
        <span>Rankings</span>
      </button>
      <button className="bg-slate-800/50 bg-opacity-70 backdrop-blur-xl border border-white p-4 rounded-xl flex flex-col items-center justify-center">
        <Target size={32} className="mb-2" />
        <span>Stats</span>
      </button>
      <DailyRewardDialog />
    </motion.section>
  );
}
