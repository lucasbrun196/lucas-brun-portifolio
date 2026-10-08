import { logos } from '../data/profile'

// Brand logos sit on a light tile so they read the same in both themes.
export default function LogoTile({ name, size = 'md' }: { name: keyof typeof logos; size?: 'sm' | 'md' }) {
  const { src, alt, fill } = logos[name]
  return (
    <span className={`logo-tile logo-tile-${size} ${fill ? 'logo-tile-fill' : ''}`}>
      <img src={src} alt={alt} loading="lazy" decoding="async" />
    </span>
  )
}
