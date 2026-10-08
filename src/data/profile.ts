import type { IconType } from 'react-icons'
import type { Lang, Logo } from '../i18n/translations'
import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi'
import { SiC, SiCplusplus, SiDart, SiDocker, SiFastify, SiFirebase, SiFlutter, SiGit, SiGo, SiGooglemaps, SiHtml5, SiCss, SiJavascript, SiJupyter, SiNestjs, SiNodedotjs, SiPostgresql, SiPython, SiReact, SiRedis, SiTerraform, SiTypeorm, SiTypescript, SiVercel } from 'react-icons/si'
import { FaAws, FaJava } from 'react-icons/fa6'
import { TbBrandCSharp, TbContainer, TbLambda, TbServer, TbStack2 } from 'react-icons/tb'

// Drop your photo at public/profile.jpg. Until then the hero simply shows no photo.
export const profilePhoto = 'profile.jpg'

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

// `fill` logos already carry their own background, so they cover the whole tile.
export const logos: Record<Logo, { src: string; alt: string; fill?: boolean }> = {
  stara: { src: asset('logos/stara.png'), alt: 'Stara' },
  upf: { src: asset('logos/upf.png'), alt: 'UPF' },
  dssat: { src: asset('logos/dssat.png'), alt: 'DSSAT' },
  sbc: { src: asset('logos/sbc.png'), alt: 'SBC' },
  cpp: { src: asset('logos/cpp.png'), alt: 'C++' },
  codeforces: { src: asset('logos/codeforces.png'), alt: 'Codeforces' },
  beecrowd: { src: asset('logos/beecrowd.png'), alt: 'beecrowd' },
  telemetry: { src: asset('logos/telemetry.png'), alt: 'Stara Telemetria' },
  flutter: { src: asset('logos/flutter.png'), alt: 'Flutter' },
  aws: { src: asset('logos/aws.png'), alt: 'AWS', fill: true },
  usa: { src: asset('logos/usa.png'), alt: 'USA' },
}

// Competitive programming profiles shown in the SBC Marathon card.
export const judges: { logo: Logo; href: string }[] = [
  { logo: 'codeforces', href: 'https://codeforces.com/profile/lucasBrun' },
  { logo: 'beecrowd', href: 'https://judge.beecrowd.com/en/profile/803945' },
]

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
  return { href: asset(file), file }
}

export interface Skill {
  name: string
  icon: IconType
  color: string
}

// Backend and cloud come first: that is where most of my work is.
export const skillGroups: { id: 'languages' | 'frontend' | 'backend' | 'cloud'; skills: Skill[] }[] = [
  {
    id: 'backend',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#5fa04e' },
      { name: 'NestJS', icon: SiNestjs, color: '#e0234e' },
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
    skills: [
      { name: 'AWS', icon: FaAws, color: '#ff9900' },
      { name: 'ECS', icon: TbContainer, color: '#ff9900' },
      { name: 'EC2', icon: TbServer, color: '#ff9900' },
      { name: 'Lambda', icon: TbLambda, color: '#ff9900' },
      { name: 'SQS', icon: TbStack2, color: '#ff9900' },
      { name: 'Terraform', icon: SiTerraform, color: '#844fba' },
      { name: 'Docker', icon: SiDocker, color: '#2496ed' },
      { name: 'Git', icon: SiGit, color: '#f05032' },
      { name: 'Vercel', icon: SiVercel, color: '#a1a1aa' },
    ],
  },
  {
    id: 'languages',
    skills: [
      { name: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
      { name: 'Python', icon: SiPython, color: '#3776ab' },
      { name: 'Go', icon: SiGo, color: '#00add8' },
      { name: 'C', icon: SiC, color: '#a8b9cc' },
      { name: 'C++', icon: SiCplusplus, color: '#00599c' },
      { name: 'Java', icon: FaJava, color: '#e76f00' },
      { name: 'C#', icon: TbBrandCSharp, color: '#9b4f96' },
      { name: 'Dart', icon: SiDart, color: '#0175c2' },
    ],
  },
  {
    id: 'frontend',
    skills: [
      { name: 'Flutter', icon: SiFlutter, color: '#02569b' },
      { name: 'React', icon: SiReact, color: '#61dafb' },
      { name: 'HTML', icon: SiHtml5, color: '#e34f26' },
      { name: 'CSS', icon: SiCss, color: '#663399' },
      { name: 'Google Maps', icon: SiGooglemaps, color: '#4285f4' },
    ],
  },
]
