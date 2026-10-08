import type { Theme } from '../../context/ThemeContext'

export interface Palette {
  sky: string
  grass: string
  grassSide: string
  dirt: string
  path: string
  stone: string
  trunk: string
  leaf: string
  leafAlt: string
  rock: string
  sun: number
  ambient: number
}

// Soft, low contrast colors so the world sits quietly next to the rest of the page.
export const palettes: Record<Theme, Palette> = {
  light: {
    sky: '#e9efea',
    grass: '#a9d39f',
    grassSide: '#8cbf83',
    dirt: '#b89d80',
    path: '#efe7d4',
    stone: '#dcd8cf',
    trunk: '#8d6d52',
    leaf: '#73b57c',
    leafAlt: '#93c984',
    rock: '#c7c3bb',
    sun: 2.3,
    ambient: 1.25,
  },
  dark: {
    sky: '#121614',
    grass: '#4f8a5c',
    grassSide: '#3f7049',
    dirt: '#5e4a3a',
    path: '#9a9079',
    stone: '#77746d',
    trunk: '#5f4836',
    leaf: '#468e57',
    leafAlt: '#5aa060',
    rock: '#6b6862',
    sun: 1.5,
    ambient: 0.7,
  },
}
