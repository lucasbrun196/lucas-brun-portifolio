import type { IconType } from 'react-icons'
import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi'
import { SiC, SiCplusplus, SiDart, SiDocker, SiFastify, SiFirebase, SiFlutter, SiGit, SiGooglemaps, SiHtml5, SiCss, SiJavascript, SiJupyter, SiNodedotjs, SiPostgresql, SiPython, SiReact, SiTerraform, SiTypeorm, SiTypescript, SiVercel } from 'react-icons/si'
import { FaAws, FaJava } from 'react-icons/fa6'
import { TbBrandCSharp } from 'react-icons/tb'

// Drop your photo at public/profile.jpg — until then the hero shows your initials.
export const profilePhoto = 'profile.jpg'

export const socials: { label: string; href: string; icon: IconType }[] = [
  { label: 'GitHub', href: 'https://github.com/lucasbrun196', icon: FiGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/lucas-brun-52aab3274/', icon: FiLinkedin },
  { label: 'Instagram', href: 'https://www.instagram.com/lucasbrun.196/', icon: FiInstagram },
]

export const githubUrl = 'https://github.com/lucasbrun196'

export type ProjectId =
  | 'vacation'
  | 'f1'
  | 'spaceBattle'
  | 'ubiquitous'
  | 'chat'
  | 'awsBilling'
  | 'competitive'
  | 'dataScience'
  | 'mapsFields'
  | 'podcast'
  | 'advicer'
  | 'huffman'

export type ProjectCategory = 'mobile' | 'backend' | 'cloud' | 'cs'

export interface Project {
  id: ProjectId
  emoji: string
  categories: ProjectCategory[]
  tech: string[]
  repo: string
  live?: string
  featured?: boolean
  // Two colors used for the card header gradient.
  colors: [string, string]
}

const gh = (repo: string) => `https://github.com/lucasbrun196/${repo}`

export const projects: Project[] = [
  {
    id: 'vacation',
    emoji: '🏝️',
    categories: ['mobile'],
    tech: ['Flutter', 'Dart', 'Firebase', 'Vercel'],
    repo: gh('vacation-itinerary'),
    live: 'https://vacation-itinerary-fawn.vercel.app',
    featured: true,
    colors: ['#06b6d4', '#8b5cf6'],
  },
  {
    id: 'f1',
    emoji: '🏎️',
    categories: ['backend', 'cloud'],
    tech: ['Node.js', 'TypeScript', 'Fastify', 'PostgreSQL', 'TypeORM', 'Docker'],
    repo: gh('f1_API'),
    featured: true,
    colors: ['#ef4444', '#a855f7'],
  },
  {
    id: 'spaceBattle',
    emoji: '🚀',
    categories: ['cs'],
    tech: ['C#', 'Game Dev', 'Computer Graphics'],
    repo: gh('cgrv-space-battle'),
    featured: true,
    colors: ['#6366f1', '#ec4899'],
  },
  {
    id: 'ubiquitous',
    emoji: '🛰️',
    categories: ['backend', 'cloud'],
    tech: ['Python', 'PostgreSQL', 'Docker'],
    repo: gh('ubiquitous-API-s'),
    colors: ['#3b82f6', '#a855f7'],
  },
  {
    id: 'chat',
    emoji: '💬',
    categories: ['mobile'],
    tech: ['Flutter', 'Dart', 'Real Time'],
    repo: gh('real_time_flutter_chat'),
    colors: ['#22c55e', '#8b5cf6'],
  },
  {
    id: 'awsBilling',
    emoji: '☁️',
    categories: ['cloud'],
    tech: ['AWS', 'Terraform', 'IaC'],
    repo: gh('aws_billing_monitor'),
    colors: ['#f59e0b', '#a855f7'],
  },
  {
    id: 'competitive',
    emoji: '🏆',
    categories: ['cs'],
    tech: ['C++', 'Algorithms', 'Beecrowd', 'Codeforces'],
    repo: gh('competitive-programming'),
    colors: ['#eab308', '#d946ef'],
  },
  {
    id: 'dataScience',
    emoji: '🍷',
    categories: ['cs'],
    tech: ['Python', 'Jupyter', 'Data Science'],
    repo: gh('data_science_project'),
    colors: ['#be123c', '#7c3aed'],
  },
  {
    id: 'mapsFields',
    emoji: '🗺️',
    categories: ['mobile'],
    tech: ['Flutter Web', 'Google Maps'],
    repo: gh('google-maps-create-fields-example'),
    colors: ['#10b981', '#6366f1'],
  },
  {
    id: 'podcast',
    emoji: '🎙️',
    categories: ['backend'],
    tech: ['Node.js', 'TypeScript', 'No framework'],
    repo: gh('podcast-manager-API'),
    colors: ['#f97316', '#9333ea'],
  },
  {
    id: 'advicer',
    emoji: '🔮',
    categories: ['mobile'],
    tech: ['Flutter', 'Clean Architecture', 'Firebase'],
    repo: gh('advicer-app'),
    colors: ['#8b5cf6', '#06b6d4'],
  },
  {
    id: 'huffman',
    emoji: '🌳',
    categories: ['cs'],
    tech: ['C++', 'Data Structures'],
    repo: gh('huffman-tree'),
    colors: ['#16a34a', '#a855f7'],
  },
]

export interface Skill {
  name: string
  icon: IconType
  color: string
}

export const skillGroups: { id: 'languages' | 'frontend' | 'backend' | 'cloud'; emoji: string; skills: Skill[] }[] = [
  {
    id: 'languages',
    emoji: '⌨️',
    skills: [
      { name: 'C', icon: SiC, color: '#a8b9cc' },
      { name: 'C++', icon: SiCplusplus, color: '#00599c' },
      { name: 'Dart', icon: SiDart, color: '#0175c2' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
      { name: 'Python', icon: SiPython, color: '#3776ab' },
      { name: 'Java', icon: FaJava, color: '#e76f00' },
      { name: 'C#', icon: TbBrandCSharp, color: '#9b4f96' },
    ],
  },
  {
    id: 'frontend',
    emoji: '📱',
    skills: [
      { name: 'Flutter', icon: SiFlutter, color: '#02569b' },
      { name: 'React', icon: SiReact, color: '#61dafb' },
      { name: 'HTML', icon: SiHtml5, color: '#e34f26' },
      { name: 'CSS', icon: SiCss, color: '#663399' },
      { name: 'Google Maps', icon: SiGooglemaps, color: '#4285f4' },
    ],
  },
  {
    id: 'backend',
    emoji: '🧩',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#5fa04e' },
      { name: 'Fastify', icon: SiFastify, color: '#8b5cf6' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169e1' },
      { name: 'TypeORM', icon: SiTypeorm, color: '#fe0803' },
      { name: 'Firebase', icon: SiFirebase, color: '#ffca28' },
      { name: 'Jupyter', icon: SiJupyter, color: '#f37626' },
    ],
  },
  {
    id: 'cloud',
    emoji: '☁️',
    skills: [
      { name: 'AWS', icon: FaAws, color: '#ff9900' },
      { name: 'Terraform', icon: SiTerraform, color: '#844fba' },
      { name: 'Docker', icon: SiDocker, color: '#2496ed' },
      { name: 'Git', icon: SiGit, color: '#f05032' },
      { name: 'Vercel', icon: SiVercel, color: '#a1a1aa' },
    ],
  },
]
