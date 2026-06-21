import { SiClaude, SiAnthropic, SiClaudeHex, SiAnthropicHex } from "@icons-pack/react-simple-icons"

export { SiClaude, SiAnthropic, SiClaudeHex, SiAnthropicHex }

// Tool badge with official brand icon
interface ToolBadgeProps {
  tool: "Claude" | "Claude Code" | "Claude Cowork" | "Vercel" | "Skill" | "Q&A"
  size?: "sm" | "md"
}

const toolConfig = {
  Claude: {
    label: "Claude",
    Icon: SiClaude,
    color: `#${SiClaudeHex}`,
    wrapperClass: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  },
  "Claude Code": {
    label: "Claude Code",
    Icon: SiAnthropic,
    color: "#a78bfa",
    wrapperClass: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  },
  "Claude Cowork": {
    label: "Claude Cowork",
    Icon: SiAnthropic,
    color: "#D97757",
    wrapperClass: "bg-brand-yellow/20 text-brand-yellow border-brand-yellow/30",
  },
  Vercel: {
    label: "Vercel",
    Icon: null,
    color: "",
    wrapperClass: "bg-black/10 text-brand-warm border-black/30",
  },
  Skill: {
    label: "Skill",
    Icon: null,
    color: "",
    wrapperClass: "bg-brand-orange/20 text-brand-orange border-brand-orange/30",
  },
  "Q&A": {
    label: "Q&A",
    Icon: null,
    color: "",
    wrapperClass: "bg-black/10 text-brand-warm/60 border-black/20",
  },
} as const

export function ToolBadge({ tool, size = "sm" }: ToolBadgeProps) {
  const config = toolConfig[tool]
  const iconSize = size === "sm" ? 11 : 13
  const padding = size === "sm" ? "px-2 py-0.5 text-xs" : "px-3 py-1 text-sm"

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-body font-semibold border flex-shrink-0 ${padding} ${config.wrapperClass}`}
    >
      {config.Icon && (
        <config.Icon size={iconSize} color={config.color} />
      )}
      {config.label}
    </span>
  )
}

// Icon-only components for use in visual cards
interface BrandIconProps {
  size?: number
  color?: string
}

export function ClaudeIcon({ size = 20, color }: BrandIconProps) {
  return <SiClaude size={size} color={color ?? `#${SiClaudeHex}`} />
}

export function AnthropicIcon({ size = 20, color }: BrandIconProps) {
  return <SiAnthropic size={size} color={color ?? `#${SiAnthropicHex}`} />
}
