// Clawd, the Claude Code mascot, drawn from its terminal sprite (each cell is a half block,
// so pixels are twice as tall as they are wide).
export default function ClawdIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={(size * 18) / 10} height={size} viewBox="0 0 18 10" aria-hidden="true" shapeRendering="crispEdges">
      <g fill="#d97757">
        <rect x="3" y="0" width="12" height="8" />
        <rect x="1" y="4" width="2" height="2" />
        <rect x="15" y="4" width="2" height="2" />
        <rect x="4" y="8" width="1" height="2" />
        <rect x="6" y="8" width="1" height="2" />
        <rect x="11" y="8" width="1" height="2" />
        <rect x="13" y="8" width="1" height="2" />
      </g>
      <g fill="#1f1e1d">
        <rect x="5" y="2" width="1" height="2" />
        <rect x="12" y="2" width="1" height="2" />
      </g>
    </svg>
  )
}
