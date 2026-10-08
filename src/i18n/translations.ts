// All visible text lives here. Edit this file to update the portfolio content in every language.

export type Lang = 'en' | 'pt' | 'es'

export const languages: { code: Lang; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'pt', label: 'Português' },
  { code: 'es', label: 'Español' },
]

// Logo files live in public/logos.
export type Logo = 'stara' | 'upf' | 'dssat' | 'sbc' | 'cpp' | 'codeforces' | 'beecrowd' | 'telemetry' | 'flutter' | 'aws' | 'usa'

interface Highlight {
  logo: Logo
  title: string
  text: string
  chips?: string[]
}

interface Job {
  company: string
  role: string
  period: string
  location: string
  logo: Logo
  current: boolean
  description: string
  highlights?: Highlight[]
  tags: string[]
}

const en = {
  meta: { title: 'Lucas Brun · Software Developer' },
  nav: {
    about: 'About',
    experience: 'Experience',
    education: 'Education',
    projects: 'Projects',
    skills: 'Skills',
    contact: 'Contact',
    theme: 'Toggle theme',
    language: 'Change language',
    menu: 'Menu',
  },
  hero: {
    location: 'Passo Fundo, RS, Brazil',
    role: 'Software Developer at Stara',
    tagline:
      'I work on telemetry for agricultural machinery: web portals, mobile apps, microservices and infrastructure on AWS. I am also studying Computer Science at UPF.',
    ctaContact: 'Get in touch',
    resume: 'Download resume',
  },
  about: {
    title: 'About',
    paragraphs: [
      "I'm a software developer based in Passo Fundo, in the south of Brazil. Since 2023 I've been at Stara S/A, one of the country's largest agricultural machinery manufacturers, where I started as an intern and now work on the telemetry team.",
      'Day to day I move between multiplatform apps in Flutter, APIs in Node.js and TypeScript, and infrastructure on AWS with Terraform. I care about readable code and systems that are simple to maintain.',
      'Outside of work I enjoy algorithms: I competed in the SBC Programming Marathon in 2025 and 2026 and was a teaching assistant for Data Structures II at UPF.',
    ],
    facts: [
      { label: 'Location', value: 'Passo Fundo, RS, Brazil' },
      { label: 'Currently', value: 'Software Developer, Stara' },
      { label: 'Education', value: 'Computer Science, UPF' },
      { label: 'Focus', value: 'Node.js, NestJS, AWS, Flutter' },
      { label: 'Interests', value: 'Algorithms, competitive programming' },
    ],
  },
  experience: {
    title: 'Experience',
    current: 'Current',
    items: [
      {
        company: 'Stara S/A',
        role: 'Software Developer',
        period: '03/2025 → now',
        location: 'Rio Grande do Sul, Brazil',
        logo: 'stara',
        current: true,
        description:
          "I work on Stara's telemetry projects, building software that turns data from agricultural machines into useful information, from web portals and apps to cloud integrations with international companies.",
        highlights: [
          {
            logo: 'telemetry',
            title: 'Telemetry portal',
            text: "Development of Stara's telemetry portal, the web platform used to monitor the data coming from the machines.",
          },
          {
            logo: 'flutter',
            title: 'Stara apps',
            text: 'Took part in building Stara apps such as the Telemetry app, Valor Stara, Pulverização (spraying) and Distribuição (distribution).',
            chips: ['Telemetry app', 'Valor Stara', 'Pulverização', 'Distribuição'],
          },
          {
            logo: 'usa',
            title: 'International integrations',
            text: "Built a cloud microservice that integrates Stara's telemetry with international companies.",
          },
          {
            logo: 'aws',
            title: 'Microservices on AWS',
            text: 'Built other Node.js microservices running on AWS.',
          },
        ],
        tags: ['Telemetry', 'Microservices', 'Flutter', 'Node.js', 'TypeScript', 'AWS'],
      },
      {
        company: 'Stara S/A',
        role: 'Software Development Intern',
        period: '08/2023 → 03/2025',
        location: 'Rio Grande do Sul, Brazil',
        logo: 'stara',
        current: false,
        description:
          'Worked on projects similar to the ones I build today, on a smaller scale: apps and APIs, both server based and serverless.',
        tags: ['Apps', 'APIs', 'Serverless'],
      },
      {
        company: 'UPF, University of Passo Fundo',
        role: 'Tier 1 (N1) Support Intern',
        period: '02/2023 → 08/2023',
        location: 'Passo Fundo, RS, Brazil',
        logo: 'upf',
        current: false,
        description: 'Handled tier 1 (N1) support requests across the UPF campus.',
        tags: ['N1 support', 'Help desk'],
      },
    ] as Job[],
  },
  education: {
    title: 'Academic life',
    degree: 'Bachelor of Computer Science',
    school: 'University of Passo Fundo (UPF)',
    status: 'In progress',
    description: 'A solid foundation in computer science, from theory to practice.',
    subjects: ['Data Structures', 'Algorithms', 'Theory of Computation', 'Computing Fundamentals', 'Operating Systems', 'Data & AI'],
    marathon: {
      badge: 'Competition',
      title: 'SBC Programming Marathon',
      text: 'Competed in the Brazilian Computer Society (SBC) Programming Marathon, the Brazilian stage of the ICPC, solving algorithmic problems as a team.',
      years: ['2025', '2026'],
    },
    monitor: {
      badge: 'Teaching assistant',
      title: 'Data Structures II',
      text: 'Teaching assistant for Data Structures II, helping students by explaining concepts, solving exercises together and answering their questions.',
    },
    workshops: {
      badge: 'Extracurricular',
      title: 'Workshops',
      text: 'Software testing workshops and practical workshops on new technologies such as Docker and Spring Boot.',
      chips: ['Software testing', 'Docker', 'Spring Boot'],
    },
    tcc: {
      badge: 'Capstone project',
      title: 'Platform for the DSSAT Foundation',
      text: 'My capstone project (TCC) was a platform for the DSSAT Foundation, where I built the new SBuild with PyQt6. DSSAT is crop simulation software used by researchers around the world.',
      chips: ['Python', 'PyQt6', 'DSSAT'],
    },
  },
  projects: {
    title: 'Projects',
    text: 'My personal and academic projects are on GitHub: mobile apps, APIs, cloud infrastructure, games and algorithm solutions.',
    cta: 'View GitHub',
  },
  skills: {
    title: 'Skills & tools',
    groups: { languages: 'Languages', frontend: 'Mobile & Web', backend: 'Backend & Data', cloud: 'Cloud & DevOps' },
  },
  contact: {
    title: 'Contact',
    lead: 'I am open to talking about opportunities and projects. Email is the fastest way to reach me.',
    copy: 'Copy email',
    copied: 'Copied',
  },
  footer: {
    top: 'Back to top',
  },
}

export type Dict = typeof en

const pt: Dict = {
  meta: { title: 'Lucas Brun · Desenvolvedor de Software' },
  nav: {
    about: 'Sobre',
    experience: 'Experiência',
    education: 'Formação',
    projects: 'Projetos',
    skills: 'Skills',
    contact: 'Contato',
    theme: 'Trocar tema',
    language: 'Trocar idioma',
    menu: 'Menu',
  },
  hero: {
    location: 'Passo Fundo, RS, Brasil',
    role: 'Desenvolvedor de Software na Stara',
    tagline:
      'Trabalho com telemetria de máquinas agrícolas: portais web, apps mobile, microsserviços e infraestrutura na AWS. Também curso Ciência da Computação na UPF.',
    ctaContact: 'Entrar em contato',
    resume: 'Baixar currículo',
  },
  about: {
    title: 'Sobre',
    paragraphs: [
      'Sou desenvolvedor de software em Passo Fundo, no Rio Grande do Sul. Desde 2023 estou na Stara S/A, uma das maiores fabricantes de máquinas agrícolas do Brasil, onde comecei como estagiário e hoje atuo nos projetos de telemetria.',
      'No dia a dia transito entre apps multiplataforma em Flutter, APIs em Node.js e TypeScript e infraestrutura na AWS com Terraform. Me importo com código legível e sistemas simples de manter.',
      'Fora do trabalho gosto de algoritmos: participei da Maratona de Programação da SBC em 2025 e 2026 e fui monitor de Estruturas de Dados II na UPF.',
    ],
    facts: [
      { label: 'Localização', value: 'Passo Fundo, RS, Brasil' },
      { label: 'Atualmente', value: 'Desenvolvedor de Software, Stara' },
      { label: 'Formação', value: 'Ciência da Computação, UPF' },
      { label: 'Foco', value: 'Node.js, NestJS, AWS, Flutter' },
      { label: 'Interesses', value: 'Algoritmos, programação competitiva' },
    ],
  },
  experience: {
    title: 'Experiência',
    current: 'Atual',
    items: [
      {
        company: 'Stara S/A',
        role: 'Desenvolvedor de Software',
        period: '03/2025 → hoje',
        location: 'Rio Grande do Sul, Brasil',
        logo: 'stara',
        current: true,
        description:
          'Atuo nos projetos de telemetria da Stara, criando software que transforma os dados das máquinas agrícolas em informação útil, de portais web e apps a integrações em nuvem com empresas internacionais.',
        highlights: [
          {
            logo: 'telemetry',
            title: 'Portal de Telemetria',
            text: 'Desenvolvimento do portal de telemetria da Stara, a plataforma web para monitorar os dados vindos das máquinas.',
          },
          {
            logo: 'flutter',
            title: 'Apps da Stara',
            text: 'Participei do desenvolvimento de apps da Stara, como o App da Telemetria, o Valor Stara, o Pulverização e o Distribuição.',
            chips: ['App da Telemetria', 'Valor Stara', 'Pulverização', 'Distribuição'],
          },
          {
            logo: 'usa',
            title: 'Integrações internacionais',
            text: 'Construí um microsserviço em nuvem que integra a telemetria da Stara com empresas internacionais.',
          },
          {
            logo: 'aws',
            title: 'Microsserviços na AWS',
            text: 'Desenvolvi outros microsserviços em Node.js rodando na AWS.',
          },
        ],
        tags: ['Telemetria', 'Microsserviços', 'Flutter', 'Node.js', 'TypeScript', 'AWS'],
      },
      {
        company: 'Stara S/A',
        role: 'Estagiário de Desenvolvimento',
        period: '08/2023 → 03/2025',
        location: 'Rio Grande do Sul, Brasil',
        logo: 'stara',
        current: false,
        description:
          'Desenvolvi projetos parecidos com os que faço hoje, em uma escala menor: apps e APIs, tanto server quanto serverless.',
        tags: ['Apps', 'APIs', 'Serverless'],
      },
      {
        company: 'UPF, Universidade de Passo Fundo',
        role: 'Estagiário de Suporte N1',
        period: '02/2023 → 08/2023',
        location: 'Passo Fundo, RS, Brasil',
        logo: 'upf',
        current: false,
        description: 'Atendimento de suporte N1 dentro do campus da UPF.',
        tags: ['Suporte N1', 'Help desk'],
      },
    ],
  },
  education: {
    title: 'Vida acadêmica',
    degree: 'Bacharelado em Ciência da Computação',
    school: 'Universidade de Passo Fundo (UPF)',
    status: 'Em andamento',
    description: 'Uma base sólida em computação, da teoria à prática.',
    subjects: ['Estruturas de Dados', 'Algoritmos', 'Teoria da Computação', 'Fundamentos da Computação', 'Sistemas Operacionais', 'Dados & IA'],
    marathon: {
      badge: 'Competição',
      title: 'Maratona de Programação da SBC',
      text: 'Participei da Maratona de Programação da Sociedade Brasileira de Computação (SBC), a etapa brasileira do ICPC, resolvendo problemas de algoritmos em equipe.',
      years: ['2025', '2026'],
    },
    monitor: {
      badge: 'Monitoria',
      title: 'Estruturas de Dados II',
      text: 'Fui monitor da disciplina de Estruturas de Dados II, ajudando os alunos com a matéria: explicando conceitos, resolvendo exercícios juntos e tirando dúvidas.',
    },
    workshops: {
      badge: 'Extracurricular',
      title: 'Oficinas',
      text: 'Oficinas de testes de software e oficinas práticas de novas tecnologias, como Docker e Spring Boot.',
      chips: ['Testes de software', 'Docker', 'Spring Boot'],
    },
    tcc: {
      badge: 'TCC',
      title: 'Plataforma para a Fundação DSSAT',
      text: 'Meu TCC foi o desenvolvimento de uma plataforma para a Fundação DSSAT, onde construí o novo SBuild em PyQt6. O DSSAT é um software de simulação de culturas agrícolas usado por pesquisadores do mundo todo.',
      chips: ['Python', 'PyQt6', 'DSSAT'],
    },
  },
  projects: {
    title: 'Projetos',
    text: 'Meus projetos pessoais e acadêmicos ficam no GitHub: apps mobile, APIs, infraestrutura em nuvem, jogos e soluções de algoritmos.',
    cta: 'Ver GitHub',
  },
  skills: {
    title: 'Skills e ferramentas',
    groups: { languages: 'Linguagens', frontend: 'Mobile & Web', backend: 'Backend & Dados', cloud: 'Cloud & DevOps' },
  },
  contact: {
    title: 'Contato',
    lead: 'Estou aberto a conversar sobre oportunidades e projetos. O jeito mais rápido de falar comigo é por email.',
    copy: 'Copiar email',
    copied: 'Copiado',
  },
  footer: {
    top: 'Voltar ao topo',
  },
}

const es: Dict = {
  meta: { title: 'Lucas Brun · Desarrollador de Software' },
  nav: {
    about: 'Sobre mí',
    experience: 'Experiencia',
    education: 'Formación',
    projects: 'Proyectos',
    skills: 'Skills',
    contact: 'Contacto',
    theme: 'Cambiar tema',
    language: 'Cambiar idioma',
    menu: 'Menú',
  },
  hero: {
    location: 'Passo Fundo, RS, Brasil',
    role: 'Desarrollador de Software en Stara',
    tagline:
      'Trabajo con telemetría de maquinaria agrícola: portales web, apps móviles, microservicios e infraestructura en AWS. También estudio Ciencias de la Computación en la UPF.',
    ctaContact: 'Contactar',
    resume: 'Descargar currículum',
  },
  about: {
    title: 'Sobre mí',
    paragraphs: [
      'Soy desarrollador de software en Passo Fundo, en el sur de Brasil. Desde 2023 estoy en Stara S/A, uno de los mayores fabricantes de maquinaria agrícola del país, donde empecé como pasante y hoy trabajo en los proyectos de telemetría.',
      'En el día a día me muevo entre apps multiplataforma en Flutter, APIs en Node.js y TypeScript e infraestructura en AWS con Terraform. Me importa el código legible y los sistemas fáciles de mantener.',
      'Fuera del trabajo me gustan los algoritmos: participé en la Maratón de Programación de la SBC en 2025 y 2026 y fui ayudante de Estructuras de Datos II en la UPF.',
    ],
    facts: [
      { label: 'Ubicación', value: 'Passo Fundo, RS, Brasil' },
      { label: 'Actualmente', value: 'Desarrollador de Software, Stara' },
      { label: 'Formación', value: 'Ciencias de la Computación, UPF' },
      { label: 'Enfoque', value: 'Node.js, NestJS, AWS, Flutter' },
      { label: 'Intereses', value: 'Algoritmos, programación competitiva' },
    ],
  },
  experience: {
    title: 'Experiencia',
    current: 'Actual',
    items: [
      {
        company: 'Stara S/A',
        role: 'Desarrollador de Software',
        period: '03/2025 → hoy',
        location: 'Rio Grande do Sul, Brasil',
        logo: 'stara',
        current: true,
        description:
          'Trabajo en los proyectos de telemetría de Stara, creando software que convierte los datos de las máquinas agrícolas en información útil, desde portales web y apps hasta integraciones en la nube con empresas internacionales.',
        highlights: [
          {
            logo: 'telemetry',
            title: 'Portal de Telemetría',
            text: 'Desarrollo del portal de telemetría de Stara, la plataforma web para monitorear los datos que llegan de las máquinas.',
          },
          {
            logo: 'flutter',
            title: 'Apps de Stara',
            text: 'Participé en el desarrollo de apps de Stara, como la App de Telemetría, Valor Stara, Pulverização (pulverización) y Distribuição (distribución).',
            chips: ['App de Telemetría', 'Valor Stara', 'Pulverização', 'Distribuição'],
          },
          {
            logo: 'usa',
            title: 'Integraciones internacionales',
            text: 'Construí un microservicio en la nube que integra la telemetría de Stara con empresas internacionales.',
          },
          {
            logo: 'aws',
            title: 'Microservicios en AWS',
            text: 'Desarrollé otros microservicios en Node.js sobre AWS.',
          },
        ],
        tags: ['Telemetría', 'Microservicios', 'Flutter', 'Node.js', 'TypeScript', 'AWS'],
      },
      {
        company: 'Stara S/A',
        role: 'Pasante de Desarrollo',
        period: '08/2023 → 03/2025',
        location: 'Rio Grande do Sul, Brasil',
        logo: 'stara',
        current: false,
        description:
          'Desarrollé proyectos parecidos a los que hago hoy, en una escala menor: apps y APIs, tanto server como serverless.',
        tags: ['Apps', 'APIs', 'Serverless'],
      },
      {
        company: 'UPF, Universidad de Passo Fundo',
        role: 'Pasante de Soporte N1',
        period: '02/2023 → 08/2023',
        location: 'Passo Fundo, RS, Brasil',
        logo: 'upf',
        current: false,
        description: 'Atención de soporte N1 dentro del campus de la UPF.',
        tags: ['Soporte N1', 'Help desk'],
      },
    ],
  },
  education: {
    title: 'Vida académica',
    degree: 'Licenciatura en Ciencias de la Computación',
    school: 'Universidad de Passo Fundo (UPF)',
    status: 'En curso',
    description: 'Una base sólida en computación, de la teoría a la práctica.',
    subjects: ['Estructuras de Datos', 'Algoritmos', 'Teoría de la Computación', 'Fundamentos de la Computación', 'Sistemas Operativos', 'Datos e IA'],
    marathon: {
      badge: 'Competición',
      title: 'Maratón de Programación de la SBC',
      text: 'Participé en la Maratón de Programación de la Sociedad Brasileña de Computación (SBC), la etapa brasileña del ICPC, resolviendo problemas de algoritmos en equipo.',
      years: ['2025', '2026'],
    },
    monitor: {
      badge: 'Ayudantía',
      title: 'Estructuras de Datos II',
      text: 'Fui ayudante (monitor) de la materia Estructuras de Datos II, apoyando a los alumnos: explicando conceptos, resolviendo ejercicios juntos y aclarando dudas.',
    },
    workshops: {
      badge: 'Extracurricular',
      title: 'Talleres',
      text: 'Talleres de pruebas de software y talleres prácticos de nuevas tecnologías, como Docker y Spring Boot.',
      chips: ['Pruebas de software', 'Docker', 'Spring Boot'],
    },
    tcc: {
      badge: 'Trabajo final',
      title: 'Plataforma para la Fundación DSSAT',
      text: 'Mi trabajo final de carrera (TCC) fue una plataforma para la Fundación DSSAT, donde construí el nuevo SBuild con PyQt6. DSSAT es un software de simulación de cultivos usado por investigadores de todo el mundo.',
      chips: ['Python', 'PyQt6', 'DSSAT'],
    },
  },
  projects: {
    title: 'Proyectos',
    text: 'Mis proyectos personales y académicos están en GitHub: apps móviles, APIs, infraestructura en la nube, juegos y soluciones de algoritmos.',
    cta: 'Ver GitHub',
  },
  skills: {
    title: 'Skills y herramientas',
    groups: { languages: 'Lenguajes', frontend: 'Móvil y Web', backend: 'Backend y Datos', cloud: 'Nube y DevOps' },
  },
  contact: {
    title: 'Contacto',
    lead: 'Estoy abierto a conversar sobre oportunidades y proyectos. El email es la forma más rápida de contactarme.',
    copy: 'Copiar email',
    copied: 'Copiado',
  },
  footer: {
    top: 'Volver arriba',
  },
}

export const translations: Record<Lang, Dict> = { en, pt, es }
