// All visible text lives here. Edit this file to update the portfolio content in every language.

export type Lang = 'en' | 'pt' | 'es'

export const languages: { code: Lang; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'pt', label: 'Português' },
  { code: 'es', label: 'Español' },
]

const en = {
  meta: { title: 'Lucas Brun · Portfolio' },
  loader: { output: 'Software Engineer & Computer Science Student 👨‍💻', skip: 'click to skip' },
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
    iam: "I'm a",
    roles: ['Software Developer', 'Flutter Developer', 'Backend Builder', 'Cloud Tinkerer', 'Competitive Programmer', 'CS Student'],
    tagline:
      'Software developer at Stara and Computer Science student at UPF. I build mobile & web apps, APIs and cloud infrastructure, straight from Passo Fundo, Brazil.',
    ctaProjects: 'See my projects',
    ctaContact: "Let's talk",
    scroll: 'scroll',
    resume: 'Download resume',
  },
  about: {
    kicker: 'whoami',
    title: 'About me',
    paragraphs: [
      "I'm Lucas, a software developer from Passo Fundo, Rio Grande do Sul, in the south of Brazil. I work at Stara S/A, one of the country's leading agricultural machinery manufacturers, building telemetry solutions, and I'm pursuing a bachelor's degree in Computer Science at the University of Passo Fundo (UPF).",
      'I enjoy working across the whole stack: multiplatform apps with Flutter, APIs with Node.js and TypeScript, and cloud infrastructure on AWS with Terraform. Clean architecture and well organized code make me happy.',
      'Outside of work, I love algorithms: I competed in the SBC Programming Marathon in 2025 and 2026 and was a teaching assistant for Data Structures II at UPF.',
    ],
    code: {
      location: 'Passo Fundo, RS, Brazil',
      role: 'Software Developer',
      education: 'Computer Science @ UPF',
      focus: ['AWS', 'Node.js', 'NestJS', 'C++', 'Python', 'Flutter', 'Cloud', 'APIs'],
      hobby: 'Competitive programming 🏆',
    },
  },
  experience: {
    kicker: 'git log',
    title: 'Experience',
    current: 'Current',
    items: [
      {
        company: 'Stara S/A',
        role: 'Software Developer',
        period: '03/2025 → now',
        location: 'Rio Grande do Sul, Brazil',
        emoji: '🚜',
        current: true,
        description:
          "I work on Stara's telemetry projects, building software that turns data from agricultural machines into useful information, from web portals and apps to cloud integrations with international companies.",
        highlights: [
          {
            emoji: '📡',
            title: 'Telemetry Portal',
            text: "Development of Stara's telemetry portal, the web platform used to monitor and follow the data coming from the machines.",
          },
          {
            emoji: '📱',
            title: 'Stara apps',
            text: 'I took part in developing Stara apps such as the Telemetry app, Valor Stara, Pulverização (spraying) and Distribuição (distribution).',
            chips: ['Telemetry app', 'Valor Stara', 'Pulverização', 'Distribuição'],
          },
          {
            emoji: '🌎',
            title: 'International integrations',
            text: "I built a cloud microservice that integrates Stara's telemetry with international companies.",
          },
          {
            emoji: '⚙️',
            title: 'Microservices on AWS',
            text: 'I also built other microservices with Node.js running on AWS.',
            chips: ['Node.js', 'AWS'],
          },
        ],
        tags: ['Telemetry', 'Microservices', 'Cloud', 'Flutter', 'Node.js', 'TypeScript', 'AWS'],
      },
      {
        company: 'Stara S/A',
        role: 'Software Development Intern',
        period: '08/2023 → 03/2025',
        location: 'Rio Grande do Sul, Brazil',
        emoji: '🌱',
        current: false,
        description:
          'As an intern I worked on projects similar to the ones I build today, on a smaller scale: I developed some apps and APIs, both server based and serverless.',
        tags: ['Apps', 'APIs', 'Serverless'],
      },
      {
        company: 'UPF, University of Passo Fundo',
        role: 'Tier 1 (N1) Support Intern',
        period: '02/2023 → 08/2023',
        location: 'Passo Fundo, RS, Brazil',
        emoji: '🖥️',
        current: false,
        description: 'I solved tier 1 (N1) support issues across the UPF campus.',
        tags: ['N1 support', 'Help desk'],
      },
    ],
  },
  education: {
    kicker: 'cd ~/university',
    title: 'Academic life',
    degree: 'Bachelor of Computer Science',
    school: 'University of Passo Fundo (UPF)',
    status: 'In progress',
    description: "At UPF I'm building a solid foundation in computer science, from theory to practice.",
    learnedTitle: 'What I learned',
    subjects: [
      'Data Structures',
      'Algorithms',
      'Theory of Computation',
      'Computing Fundamentals',
      'Operating Systems',
      'Data & AI',
      '…and much more',
    ],
    marathon: {
      badge: 'Competition',
      title: 'SBC Programming Marathon',
      text: 'I competed in the Brazilian Computer Society (SBC) Programming Marathon, the Brazilian stage of the ICPC, solving algorithmic problems as a team.',
      years: ['2025', '2026'],
    },
    monitor: {
      badge: 'Teaching assistant',
      title: 'Data Structures II TA',
      text: 'I was a teaching assistant for Data Structures II, helping students with the course: explaining concepts, solving exercises together and answering their questions.',
    },
    workshops: {
      badge: 'Extracurricular',
      title: 'Workshops',
      text: 'I took part in workshops to go beyond the classroom: software testing workshops and workshops to learn new technologies in practice, such as Docker and Spring Boot.',
      chips: ['Software testing', 'Docker', 'Spring Boot'],
    },
    tcc: {
      badge: 'Capstone project',
      title: 'Platform for the DSSAT Foundation',
      text: 'My capstone project (TCC) was the development of a platform for the DSSAT Foundation, where I built the new SBuild with PyQt6. DSSAT is a crop simulation software used by researchers around the world.',
      chips: ['Python', 'PyQt6', 'DSSAT'],
    },
  },
  projects: {
    kicker: 'ls ~/projects',
    title: 'Projects',
    text: 'All my projects are available on my GitHub: mobile apps, APIs, cloud infrastructure, games and algorithm solutions.',
    cta: 'See my GitHub',
  },
  skills: {
    kicker: 'cat skills.json',
    title: 'Skills & tools',
    groups: { languages: 'Languages', frontend: 'Mobile & Web', backend: 'Backend & Data', cloud: 'Cloud & DevOps' },
  },
  contact: {
    kicker: 'ping lucas',
    title: 'Contact',
    copy: 'Copy email',
    copied: 'Copied!',
  },
  footer: {
    top: 'Back to top',
  },
}

export type Dict = typeof en

const pt: Dict = {
  meta: { title: 'Lucas Brun · Portfólio' },
  loader: { output: 'Engenheiro de Software & Estudante de Ciência da Computação 👨‍💻', skip: 'clique para pular' },
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
    iam: 'Sou',
    roles: ['Desenvolvedor de Software', 'Desenvolvedor Flutter', 'Construtor de APIs', 'Explorador de Cloud', 'Programador Competitivo', 'Estudante de CC'],
    tagline:
      'Desenvolvedor de software na Stara e estudante de Ciência da Computação na UPF. Crio apps mobile e web, APIs e infraestrutura em nuvem, direto de Passo Fundo, RS.',
    ctaProjects: 'Ver meus projetos',
    ctaContact: 'Vamos conversar',
    scroll: 'role',
    resume: 'Baixar currículo',
  },
  about: {
    kicker: 'whoami',
    title: 'Sobre mim',
    paragraphs: [
      'Sou o Lucas, desenvolvedor de software de Passo Fundo, no Rio Grande do Sul, sul do Brasil. Trabalho na Stara S/A, uma das maiores fabricantes de máquinas agrícolas do país, desenvolvendo soluções de telemetria, e curso Ciência da Computação na Universidade de Passo Fundo (UPF).',
      'Gosto de trabalhar em todas as camadas: apps multiplataforma com Flutter, APIs com Node.js e TypeScript e infraestrutura em nuvem na AWS com Terraform. Arquitetura limpa e código bem organizado me deixam feliz.',
      'Fora do trabalho, sou apaixonado por algoritmos: participei da Maratona de Programação da SBC em 2025 e 2026 e fui monitor de Estruturas de Dados II na UPF.',
    ],
    code: {
      location: 'Passo Fundo, RS, Brasil',
      role: 'Desenvolvedor de Software',
      education: 'Ciência da Computação @ UPF',
      focus: ['AWS', 'Node.js', 'NestJS', 'C++', 'Python', 'Flutter', 'Cloud', 'APIs'],
      hobby: 'Programação competitiva 🏆',
    },
  },
  experience: {
    kicker: 'git log',
    title: 'Experiência',
    current: 'Atual',
    items: [
      {
        company: 'Stara S/A',
        role: 'Desenvolvedor de Software',
        period: '03/2025 → hoje',
        location: 'Rio Grande do Sul, Brasil',
        emoji: '🚜',
        current: true,
        description:
          'Atuo nos projetos de telemetria da Stara, criando software que transforma os dados das máquinas agrícolas em informação útil, de portais web e apps a integrações em nuvem com empresas internacionais.',
        highlights: [
          {
            emoji: '📡',
            title: 'Portal de Telemetria',
            text: 'Desenvolvimento do portal de telemetria da Stara, a plataforma web para monitorar e acompanhar os dados vindos das máquinas.',
          },
          {
            emoji: '📱',
            title: 'Apps da Stara',
            text: 'Participei do desenvolvimento de apps da Stara, como o App da Telemetria, o Valor Stara, o Pulverização e o Distribuição.',
            chips: ['App da Telemetria', 'Valor Stara', 'Pulverização', 'Distribuição'],
          },
          {
            emoji: '🌎',
            title: 'Integrações internacionais',
            text: 'Construí um microsserviço em nuvem que integra a telemetria da Stara com empresas internacionais.',
          },
          {
            emoji: '⚙️',
            title: 'Microsserviços na AWS',
            text: 'Desenvolvi também outros microsserviços com Node.js rodando na AWS.',
            chips: ['Node.js', 'AWS'],
          },
        ],
        tags: ['Telemetria', 'Microsserviços', 'Cloud', 'Flutter', 'Node.js', 'TypeScript', 'AWS'],
      },
      {
        company: 'Stara S/A',
        role: 'Estagiário de Desenvolvimento',
        period: '08/2023 → 03/2025',
        location: 'Rio Grande do Sul, Brasil',
        emoji: '🌱',
        current: false,
        description:
          'Como estagiário, desenvolvi projetos parecidos com os que desenvolvo hoje, em uma escala menor: criei alguns apps e APIs, tanto server quanto serverless.',
        tags: ['Apps', 'APIs', 'Serverless'],
      },
      {
        company: 'UPF, Universidade de Passo Fundo',
        role: 'Estagiário de Suporte N1',
        period: '02/2023 → 08/2023',
        location: 'Passo Fundo, RS, Brasil',
        emoji: '🖥️',
        current: false,
        description: 'Resolvia problemas de suporte N1 dentro do campus da UPF.',
        tags: ['Suporte N1', 'Help desk'],
      },
    ],
  },
  education: {
    kicker: 'cd ~/faculdade',
    title: 'Vida acadêmica',
    degree: 'Bacharelado em Ciência da Computação',
    school: 'Universidade de Passo Fundo (UPF)',
    status: 'Em andamento',
    description: 'Na UPF estou construindo uma base sólida em computação, da teoria à prática.',
    learnedTitle: 'O que aprendi',
    subjects: [
      'Estruturas de Dados',
      'Algoritmos',
      'Teoria da Computação',
      'Fundamentos da Computação',
      'Sistemas Operacionais',
      'Dados & IA',
      '…e muito mais',
    ],
    marathon: {
      badge: 'Competição',
      title: 'Maratona de Programação da SBC',
      text: 'Participei da Maratona de Programação da Sociedade Brasileira de Computação (SBC), a etapa brasileira do ICPC, resolvendo problemas de algoritmos em equipe.',
      years: ['2025', '2026'],
    },
    monitor: {
      badge: 'Monitoria',
      title: 'Monitor de Estruturas de Dados II',
      text: 'Fui monitor da disciplina de Estruturas de Dados II, ajudando os alunos com a matéria: explicando conceitos, resolvendo exercícios juntos e tirando dúvidas.',
    },
    workshops: {
      badge: 'Extracurricular',
      title: 'Oficinas',
      text: 'Participei de oficinas para ir além da sala de aula: oficinas de testes de software e oficinas para aprender novas tecnologias na prática, como Docker e Spring Boot.',
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
    kicker: 'ls ~/projetos',
    title: 'Projetos',
    text: 'Todos os meus projetos estão disponíveis no meu GitHub: apps mobile, APIs, infraestrutura em nuvem, jogos e soluções de algoritmos.',
    cta: 'Ver meu GitHub',
  },
  skills: {
    kicker: 'cat skills.json',
    title: 'Skills e ferramentas',
    groups: { languages: 'Linguagens', frontend: 'Mobile & Web', backend: 'Backend & Dados', cloud: 'Cloud & DevOps' },
  },
  contact: {
    kicker: 'ping lucas',
    title: 'Contato',
    copy: 'Copiar email',
    copied: 'Copiado!',
  },
  footer: {
    top: 'Voltar ao topo',
  },
}

const es: Dict = {
  meta: { title: 'Lucas Brun · Portafolio' },
  loader: { output: 'Ingeniero de Software y Estudiante de Ciencias de la Computación 👨‍💻', skip: 'clic para saltar' },
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
    iam: 'Soy',
    roles: ['Desarrollador de Software', 'Desarrollador Flutter', 'Constructor de APIs', 'Explorador de la Nube', 'Programador Competitivo', 'Estudiante de CC'],
    tagline:
      'Desarrollador de software en Stara y estudiante de Ciencias de la Computación en la UPF. Creo apps móviles y web, APIs e infraestructura en la nube, desde Passo Fundo, Brasil.',
    ctaProjects: 'Ver mis proyectos',
    ctaContact: 'Hablemos',
    scroll: 'desliza',
    resume: 'Descargar currículum',
  },
  about: {
    kicker: 'whoami',
    title: 'Sobre mí',
    paragraphs: [
      'Soy Lucas, desarrollador de software de Passo Fundo, Rio Grande do Sul, en el sur de Brasil. Trabajo en Stara S/A, uno de los principales fabricantes de maquinaria agrícola del país, desarrollando soluciones de telemetría, y estudio Ciencias de la Computación en la Universidad de Passo Fundo (UPF).',
      'Disfruto trabajar en todo el stack: apps multiplataforma con Flutter, APIs con Node.js y TypeScript e infraestructura en la nube en AWS con Terraform. La arquitectura limpia y el código bien organizado me hacen feliz.',
      'Fuera del trabajo, me apasionan los algoritmos: participé en la Maratón de Programación de la SBC en 2025 y 2026 y fui ayudante de Estructuras de Datos II en la UPF.',
    ],
    code: {
      location: 'Passo Fundo, RS, Brasil',
      role: 'Desarrollador de Software',
      education: 'Ciencias de la Computación @ UPF',
      focus: ['AWS', 'Node.js', 'NestJS', 'C++', 'Python', 'Flutter', 'Cloud', 'APIs'],
      hobby: 'Programación competitiva 🏆',
    },
  },
  experience: {
    kicker: 'git log',
    title: 'Experiencia',
    current: 'Actual',
    items: [
      {
        company: 'Stara S/A',
        role: 'Desarrollador de Software',
        period: '03/2025 → hoy',
        location: 'Rio Grande do Sul, Brasil',
        emoji: '🚜',
        current: true,
        description:
          'Trabajo en los proyectos de telemetría de Stara, creando software que convierte los datos de las máquinas agrícolas en información útil, desde portales web y apps hasta integraciones en la nube con empresas internacionales.',
        highlights: [
          {
            emoji: '📡',
            title: 'Portal de Telemetría',
            text: 'Desarrollo del portal de telemetría de Stara, la plataforma web para monitorear y seguir los datos que llegan de las máquinas.',
          },
          {
            emoji: '📱',
            title: 'Apps de Stara',
            text: 'Participé en el desarrollo de apps de Stara, como la App de Telemetría, Valor Stara, Pulverização (pulverización) y Distribuição (distribución).',
            chips: ['App de Telemetría', 'Valor Stara', 'Pulverização', 'Distribuição'],
          },
          {
            emoji: '🌎',
            title: 'Integraciones internacionales',
            text: 'Construí un microservicio en la nube que integra la telemetría de Stara con empresas internacionales.',
          },
          {
            emoji: '⚙️',
            title: 'Microservicios en AWS',
            text: 'También desarrollé otros microservicios con Node.js en AWS.',
            chips: ['Node.js', 'AWS'],
          },
        ],
        tags: ['Telemetría', 'Microservicios', 'Cloud', 'Flutter', 'Node.js', 'TypeScript', 'AWS'],
      },
      {
        company: 'Stara S/A',
        role: 'Pasante de Desarrollo',
        period: '08/2023 → 03/2025',
        location: 'Rio Grande do Sul, Brasil',
        emoji: '🌱',
        current: false,
        description:
          'Como pasante, desarrollé proyectos parecidos a los que desarrollo hoy, en una escala menor: creé algunas apps y APIs, tanto server como serverless.',
        tags: ['Apps', 'APIs', 'Serverless'],
      },
      {
        company: 'UPF, Universidad de Passo Fundo',
        role: 'Pasante de Soporte N1',
        period: '02/2023 → 08/2023',
        location: 'Passo Fundo, RS, Brasil',
        emoji: '🖥️',
        current: false,
        description: 'Resolvía problemas de soporte N1 dentro del campus de la UPF.',
        tags: ['Soporte N1', 'Help desk'],
      },
    ],
  },
  education: {
    kicker: 'cd ~/universidad',
    title: 'Vida académica',
    degree: 'Licenciatura en Ciencias de la Computación',
    school: 'Universidad de Passo Fundo (UPF)',
    status: 'En curso',
    description: 'En la UPF estoy construyendo una base sólida en computación, de la teoría a la práctica.',
    learnedTitle: 'Lo que aprendí',
    subjects: [
      'Estructuras de Datos',
      'Algoritmos',
      'Teoría de la Computación',
      'Fundamentos de la Computación',
      'Sistemas Operativos',
      'Datos e IA',
      '…y mucho más',
    ],
    marathon: {
      badge: 'Competición',
      title: 'Maratón de Programación de la SBC',
      text: 'Participé en la Maratón de Programación de la Sociedad Brasileña de Computación (SBC), la etapa brasileña del ICPC, resolviendo problemas de algoritmos en equipo.',
      years: ['2025', '2026'],
    },
    monitor: {
      badge: 'Ayudantía',
      title: 'Ayudante de Estructuras de Datos II',
      text: 'Fui ayudante (monitor) de la materia Estructuras de Datos II, apoyando a los alumnos: explicando conceptos, resolviendo ejercicios juntos y aclarando dudas.',
    },
    workshops: {
      badge: 'Extracurricular',
      title: 'Talleres',
      text: 'Participé en talleres para ir más allá del aula: talleres de pruebas de software y talleres para aprender nuevas tecnologías en la práctica, como Docker y Spring Boot.',
      chips: ['Pruebas de software', 'Docker', 'Spring Boot'],
    },
    tcc: {
      badge: 'Trabajo final',
      title: 'Plataforma para la Fundación DSSAT',
      text: 'Mi trabajo final de carrera (TCC) fue el desarrollo de una plataforma para la Fundación DSSAT, donde construí el nuevo SBuild con PyQt6. DSSAT es un software de simulación de cultivos usado por investigadores de todo el mundo.',
      chips: ['Python', 'PyQt6', 'DSSAT'],
    },
  },
  projects: {
    kicker: 'ls ~/proyectos',
    title: 'Proyectos',
    text: 'Todos mis proyectos están disponibles en mi GitHub: apps móviles, APIs, infraestructura en la nube, juegos y soluciones de algoritmos.',
    cta: 'Ver mi GitHub',
  },
  skills: {
    kicker: 'cat skills.json',
    title: 'Skills y herramientas',
    groups: { languages: 'Lenguajes', frontend: 'Móvil y Web', backend: 'Backend y Datos', cloud: 'Nube y DevOps' },
  },
  contact: {
    kicker: 'ping lucas',
    title: 'Contacto',
    copy: 'Copiar email',
    copied: '¡Copiado!',
  },
  footer: {
    top: 'Volver arriba',
  },
}

export const translations: Record<Lang, Dict> = { en, pt, es }
