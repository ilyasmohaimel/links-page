import { motion } from "framer-motion";
import { ProfileHeader } from './components/ProfileHeader';
import { LinkRow } from './components/LinkRow';
import { links } from './data/links';

// Fix arrow placement by removing it from the top
const iconMap: Record<string, string> = {
  Mail: "✉️",
  LockKeyhole: "🔒",
  Instagram: "📸",
  Github: "🐙",
  BadgeCheck: "🏆",
  MessageCircle: "💬",
  Globe: "🌐",
  X: "𝕏",
};

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-page-bg flex items-center justify-center p-4 relative overflow-hidden"
    >
      {/* Background text for desktop */}
      <div className="absolute inset-0 hidden md:flex items-center justify-center pointer-events-none">
        <h1 className="text-[20rem] font-black condensed-font text-[#CCD0CF] select-none opacity-20">
          LINKS
        </h1>
      </div>

      {/* Phone-sized card */}
      <div className="max-w-md w-full bg-card-bg/80 backdrop-blur-sm border border-border-color rounded-3xl p-6 sm:p-8 shadow-lg relative z-10">
        <ProfileHeader />
        <div className="mt-6 space-y-3">
          {links.map((link) => {
            const Icon = iconMap[link.icon];
            return (
              <LinkRow
                key={link.title}
                title={link.title}
                description={link.description}
                url={link.url}
                icon={Icon}
              />
            );
          })}
        </div>
        <footer className="mt-8 text-center text-sm text-text-secondary">
          Ilyas Mohaimel · Official Links
        </footer>
      </div>
    </motion.div>
  );
}

export default App;