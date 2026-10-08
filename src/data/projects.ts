import type { Lang } from '../i18n/translations'

// Deployed front end projects shown in the 3D showcase and in the list version.
// To add one, append an item. `position` is [x, z] on the island (keep it within about 6 units
// of the center); leave it out and the project is placed automatically around the island.
export interface Project {
  name: string
  description: Record<Lang, string>
  url: string
  color: string
  position?: [number, number]
}

export const projects: Project[] = [
  {
    name: 'Lastro Contabilidade',
    description: {
      pt: 'Modelo de site para um escritório de contabilidade, com simulador de impostos, planos e perguntas frequentes.',
      en: 'Website template for an accounting firm, with a tax simulator, plans and FAQ.',
      es: 'Plantilla de sitio para un estudio contable, con simulador de impuestos, planes y preguntas frecuentes.',
    },
    url: 'https://accounting-template-two.vercel.app',
    color: '#3b6fd8',
  },
  {
    name: 'Helena Duarte',
    description: {
      pt: 'Modelo de site para uma psicóloga clínica: abordagem, formas de atendimento e agendamento.',
      en: 'Website template for a clinical psychologist: approach, session options and booking.',
      es: 'Plantilla de sitio para una psicóloga clínica: enfoque, modalidades de atención y agenda.',
    },
    url: 'https://psychologist-template-jet.vercel.app',
    color: '#c9825a',
  },
  {
    name: 'Viagem',
    description: {
      pt: 'App em Flutter para viagens em grupo: roteiro, gastos, comprovantes e mural de fotos.',
      en: 'Flutter app for group trips: itinerary, expenses, receipts and a photo wall.',
      es: 'App en Flutter para viajes en grupo: itinerario, gastos, comprobantes y muro de fotos.',
    },
    url: 'https://vacation-itinerary-fawn.vercel.app',
    color: '#1fa39a',
  },
]
