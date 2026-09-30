import type { IconType } from 'react-icons'
import type { Lang } from '../i18n/translations'
import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi'
import { SiC, SiCplusplus, SiDart, SiDocker, SiFastify, SiFirebase, SiFlutter, SiGit, SiGo, SiGooglemaps, SiHtml5, SiCss, SiJavascript, SiJupyter, SiNodedotjs, SiPostgresql, SiPython, SiReact, SiRedis, SiTerraform, SiTypeorm, SiTypescript, SiVercel } from 'react-icons/si'
import { FaAws, FaJava } from 'react-icons/fa6'
import { TbBrandCSharp, TbContainer, TbServer } from 'react-icons/tb'

// Drop your photo at public/profile.jpg — until then the hero shows your initials.
export const profilePhoto = 'profile.jpg'

export const socials: { label: string; href: string; icon: IconType }[] = [
  { label: 'GitHub', href: 'https://github.com/lucasbrun196', icon: FiGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/lucas-brun-52aab3274/', icon: FiLinkedin },
  { label: 'Instagram', href: 'https://www.instagram.com/lucasbrun.196/', icon: FiInstagram },
]

export const githubUrl = 'https://github.com/lucasbrun196'

export const email = 'luucaasbrum13@gmail.com'

// Resume PDFs live in public/. Portuguese gets the PT version; English and Spanish get the EN one.
export function resumeFor(lang: Lang) {
  const file = lang === 'pt' ? 'resume_lucas_brun_pt.pdf' : 'resume_lucas_brun_en.pdf'
  return { href: `${import.meta.env.BASE_URL}${file}`, file }
}

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
      { name: 'Go', icon: SiGo, color: '#00add8' },
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
      { name: 'Redis', icon: SiRedis, color: '#ff4438' },
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
      { name: 'ECS', icon: TbContainer, color: '#ff9900' },
      { name: 'EC2', icon: TbServer, color: '#ff9900' },
      { name: 'Terraform', icon: SiTerraform, color: '#844fba' },
      { name: 'Docker', icon: SiDocker, color: '#2496ed' },
      { name: 'Git', icon: SiGit, color: '#f05032' },
      { name: 'Vercel', icon: SiVercel, color: '#a1a1aa' },
    ],
  },
]
