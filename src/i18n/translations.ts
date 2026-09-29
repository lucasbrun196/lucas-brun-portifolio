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
    hello: "Hey there, I'm",
    iam: "I'm a",
    roles: ['Software Developer', 'Flutter Developer', 'Backend Builder', 'Cloud Tinkerer', 'Competitive Programmer', 'CS Student'],
    tagline:
      'Software developer at Stara and Computer Science student at UPF. I build mobile & web apps, APIs and cloud infrastructure, straight from Passo Fundo, Brazil.',
    ctaProjects: 'See my projects',
    ctaContact: "Let's talk",
    scroll: 'scroll',
    photoHint: 'Hi! 👋',
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
      role: 'Software Developer @ Stara',
      education: 'Computer Science @ UPF',
      focus: ['Telemetry', 'Cloud', 'Flutter', 'APIs'],
      hobby: 'Programming marathons 🏆',
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
        period: 'Present',
        location: 'Rio Grande do Sul, Brazil',
        emoji: '🚜',
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
      badge: 'Highlight',
      title: 'SBC Programming Marathon',
      text: 'I competed in the Brazilian Computer Society (SBC) Programming Marathon, the Brazilian stage of the ICPC, solving algorithmic problems as a team, against the clock.',
      years: ['2025', '2026'],
    },
    monitor: {
      badge: 'Teaching assistant',
      title: 'Data Structures II TA',
      text: 'I was a teaching assistant for Data Structures II, helping students with the course: explaining concepts, solving exercises together and answering their questions.',
    },
  },
  projects: {
    kicker: 'ls ~/projects',
    title: 'Projects',
    filters: { all: 'All', mobile: 'Mobile & Web', backend: 'Backend', cloud: 'Cloud & DevOps', cs: 'CS & Games' },
    code: 'Code',
    live: 'Live demo',
    featured: 'Featured',
    more: 'See everything on GitHub',
    items: {
      vacation: {
        title: 'Viagem (Trip Planner)',
        description:
          'Shared travel app: itinerary, expenses, receipts and a photo wall in one place. One Flutter codebase for Web, Android and iOS, with Firebase Auth, Firestore and Storage security rules.',
      },
      f1: {
        title: 'F1 API',
        description:
          'RESTful API for Formula 1 data (drivers, teams and publications) built with Fastify and PostgreSQL following Clean Architecture, with admin routes protected by tokens and Plop scaffolding.',
      },
      spaceBattle: {
        title: 'Space Battle',
        description:
          'Space shooter made for the Computer Graphics & VR course: shoot down enemy aircraft, dodge asteroids and reach the checkpoint across three difficulty levels.',
      },
      ubiquitous: {
        title: 'Ubiquitous APIs',
        description: 'Multiple Python API instances running side by side and sharing a PostgreSQL database, orchestrated with Docker.',
      },
      chat: { title: 'Real Time Flutter Chat', description: 'Chat application with messaging in real time built with Flutter.' },
      awsBilling: {
        title: 'AWS Billing Monitor',
        description: 'Infrastructure as Code with Terraform to monitor AWS billing and keep cloud costs under control.',
      },
      competitive: {
        title: 'Competitive Programming',
        description: 'My collection of algorithmic solutions to Beecrowd and Codeforces problems, written in C++.',
      },
      dataScience: { title: 'Wine Reviews Analysis', description: 'Data science project exploring a Kaggle wine reviews dataset with Python and Jupyter.' },
      mapsFields: { title: 'Maps Field Drawing', description: 'Flutter Web example that traces polylines on Google Maps to draw and create field areas.' },
      podcast: { title: 'Podcast Manager API', description: 'An API built with pure TypeScript and Node.js, with no framework, to manage podcasts.' },
      advicer: { title: 'Advicer App', description: 'Flutter app that consumes an advice API, built with Clean Architecture and Firebase.' },
      huffman: { title: 'Huffman Tree', description: 'Huffman coding compression implemented from scratch in C++ for the Data Structures course.' },
    },
  },
  skills: {
    kicker: 'cat skills.json',
    title: 'Skills & tools',
    groups: { languages: 'Languages', frontend: 'Mobile & Web', backend: 'Backend & Data', cloud: 'Cloud & DevOps' },
  },
  contact: {
    kicker: 'ping lucas',
    title: "Let's build something cool",
    text: "Have a project, an opportunity or just want to talk about code, Flutter or F1 APIs? My inbox (and my DMs) are always open.",
    highFive: 'Give me a high five',
    highFiveCount: 'high fives received',
  },
  footer: {
    made: 'Designed & coded by Lucas Brun',
    location: 'Passo Fundo, RS, Brazil',
    love: 'Made with ☕, 💜 and std::cout',
    hint: 'psst… try the Konami code ↑ ↑ ↓ ↓ ← → ← → B A (or tap the logo 5×)',
    top: 'Back to top',
    partyOn: '🎉 Party mode unlocked!',
    partyOff: 'Party mode off. Back to work 🤓',
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
    hello: 'E aí, eu sou o',
    iam: 'Sou',
    roles: ['Desenvolvedor de Software', 'Desenvolvedor Flutter', 'Construtor de APIs', 'Explorador de Cloud', 'Programador Competitivo', 'Estudante de CC'],
    tagline:
      'Desenvolvedor de software na Stara e estudante de Ciência da Computação na UPF. Crio apps mobile e web, APIs e infraestrutura em nuvem, direto de Passo Fundo, RS.',
    ctaProjects: 'Ver meus projetos',
    ctaContact: 'Vamos conversar',
    scroll: 'role',
    photoHint: 'Oi! 👋',
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
      role: 'Desenvolvedor de Software @ Stara',
      education: 'Ciência da Computação @ UPF',
      focus: ['Telemetria', 'Cloud', 'Flutter', 'APIs'],
      hobby: 'Maratonas de programação 🏆',
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
        period: 'Atualmente',
        location: 'Rio Grande do Sul, Brasil',
        emoji: '🚜',
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
      badge: 'Destaque',
      title: 'Maratona de Programação da SBC',
      text: 'Participei da Maratona de Programação da Sociedade Brasileira de Computação (SBC), a etapa brasileira do ICPC, resolvendo problemas de algoritmos em equipe, contra o relógio.',
      years: ['2025', '2026'],
    },
    monitor: {
      badge: 'Monitoria',
      title: 'Monitor de Estruturas de Dados II',
      text: 'Fui monitor da disciplina de Estruturas de Dados II, ajudando os alunos com a matéria: explicando conceitos, resolvendo exercícios juntos e tirando dúvidas.',
    },
  },
  projects: {
    kicker: 'ls ~/projetos',
    title: 'Projetos',
    filters: { all: 'Todos', mobile: 'Mobile & Web', backend: 'Backend', cloud: 'Cloud & DevOps', cs: 'CC & Jogos' },
    code: 'Código',
    live: 'Ver online',
    featured: 'Destaque',
    more: 'Ver tudo no GitHub',
    items: {
      vacation: {
        title: 'Viagem (Planejador de Viagens)',
        description:
          'App de viagem compartilhada: roteiro, gastos, comprovantes e mural de fotos em um só lugar. Uma base Flutter para Web, Android e iOS, com Firebase Auth, Firestore e regras de segurança no Storage.',
      },
      f1: {
        title: 'F1 API',
        description:
          'API REST de dados da Fórmula 1 (pilotos, equipes e publicações) feita com Fastify e PostgreSQL seguindo Clean Architecture, com rotas de admin protegidas por token e scaffolding com Plop.',
      },
      spaceBattle: {
        title: 'Space Battle',
        description:
          'Jogo de nave feito para a disciplina de Computação Gráfica e RV: derrube aeronaves inimigas, desvie dos asteroides e chegue ao checkpoint em três níveis de dificuldade.',
      },
      ubiquitous: {
        title: 'Ubiquitous APIs',
        description: 'Várias instâncias de API em Python rodando lado a lado e compartilhando um banco PostgreSQL, orquestradas com Docker.',
      },
      chat: { title: 'Chat em Tempo Real', description: 'Aplicativo de chat com mensagens em tempo real feito com Flutter.' },
      awsBilling: {
        title: 'AWS Billing Monitor',
        description: 'Infraestrutura como código com Terraform para monitorar o faturamento da AWS e manter os custos sob controle.',
      },
      competitive: {
        title: 'Programação Competitiva',
        description: 'Minha coleção de soluções de algoritmos para problemas do Beecrowd e do Codeforces, escritas em C++.',
      },
      dataScience: { title: 'Análise de Vinhos', description: 'Projeto de ciência de dados explorando uma base de avaliações de vinhos do Kaggle com Python e Jupyter.' },
      mapsFields: { title: 'Desenho de Talhões no Maps', description: 'Exemplo em Flutter Web que traça polilinhas no Google Maps para desenhar e criar áreas de talhões.' },
      podcast: { title: 'Podcast Manager API', description: 'API feita com TypeScript e Node.js puros, sem framework, para gerenciar podcasts.' },
      advicer: { title: 'Advicer App', description: 'App Flutter que consome uma API de conselhos, feito com Clean Architecture e Firebase.' },
      huffman: { title: 'Árvore de Huffman', description: 'Compressão com codificação de Huffman implementada do zero em C++ para a disciplina de Estruturas de Dados.' },
    },
  },
  skills: {
    kicker: 'cat skills.json',
    title: 'Skills e ferramentas',
    groups: { languages: 'Linguagens', frontend: 'Mobile & Web', backend: 'Backend & Dados', cloud: 'Cloud & DevOps' },
  },
  contact: {
    kicker: 'ping lucas',
    title: 'Bora construir algo legal',
    text: 'Tem um projeto, uma oportunidade ou só quer trocar uma ideia sobre código, Flutter ou APIs de F1? Minha caixa de entrada (e minhas DMs) estão sempre abertas.',
    highFive: 'Me dá um toca aqui',
    highFiveCount: 'toca aqui recebidos',
  },
  footer: {
    made: 'Criado e codificado por Lucas Brun',
    location: 'Passo Fundo, RS, Brasil',
    love: 'Feito com ☕, 💜 e std::cout',
    hint: 'psiu… tente o código Konami ↑ ↑ ↓ ↓ ← → ← → B A (ou toque 5× no logo)',
    top: 'Voltar ao topo',
    partyOn: '🎉 Modo festa desbloqueado!',
    partyOff: 'Modo festa desligado. De volta ao trabalho 🤓',
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
    hello: '¡Hola! Soy',
    iam: 'Soy',
    roles: ['Desarrollador de Software', 'Desarrollador Flutter', 'Constructor de APIs', 'Explorador de la Nube', 'Programador Competitivo', 'Estudiante de CC'],
    tagline:
      'Desarrollador de software en Stara y estudiante de Ciencias de la Computación en la UPF. Creo apps móviles y web, APIs e infraestructura en la nube, desde Passo Fundo, Brasil.',
    ctaProjects: 'Ver mis proyectos',
    ctaContact: 'Hablemos',
    scroll: 'desliza',
    photoHint: '¡Hola! 👋',
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
      role: 'Desarrollador de Software @ Stara',
      education: 'Ciencias de la Computación @ UPF',
      focus: ['Telemetría', 'Cloud', 'Flutter', 'APIs'],
      hobby: 'Maratones de programación 🏆',
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
        period: 'Actualidad',
        location: 'Rio Grande do Sul, Brasil',
        emoji: '🚜',
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
      badge: 'Destacado',
      title: 'Maratón de Programación de la SBC',
      text: 'Participé en la Maratón de Programación de la Sociedad Brasileña de Computación (SBC), la etapa brasileña del ICPC, resolviendo problemas de algoritmos en equipo, contra el reloj.',
      years: ['2025', '2026'],
    },
    monitor: {
      badge: 'Ayudantía',
      title: 'Ayudante de Estructuras de Datos II',
      text: 'Fui ayudante (monitor) de la materia Estructuras de Datos II, apoyando a los alumnos: explicando conceptos, resolviendo ejercicios juntos y aclarando dudas.',
    },
  },
  projects: {
    kicker: 'ls ~/proyectos',
    title: 'Proyectos',
    filters: { all: 'Todos', mobile: 'Móvil y Web', backend: 'Backend', cloud: 'Nube y DevOps', cs: 'CC y Juegos' },
    code: 'Código',
    live: 'Ver demo',
    featured: 'Destacado',
    more: 'Ver todo en GitHub',
    items: {
      vacation: {
        title: 'Viagem (Planificador de Viajes)',
        description:
          'App de viajes compartidos: itinerario, gastos, comprobantes y muro de fotos en un solo lugar. Una base Flutter para Web, Android e iOS, con Firebase Auth, Firestore y reglas de seguridad en Storage.',
      },
      f1: {
        title: 'F1 API',
        description:
          'API REST de datos de Fórmula 1 (pilotos, equipos y publicaciones) hecha con Fastify y PostgreSQL siguiendo Clean Architecture, con rutas de admin protegidas por token y scaffolding con Plop.',
      },
      spaceBattle: {
        title: 'Space Battle',
        description:
          'Juego de naves hecho para la materia de Computación Gráfica y RV: derriba aeronaves enemigas, esquiva asteroides y llega al checkpoint en tres niveles de dificultad.',
      },
      ubiquitous: {
        title: 'Ubiquitous APIs',
        description: 'Varias instancias de API en Python funcionando en paralelo y compartiendo una base PostgreSQL, orquestadas con Docker.',
      },
      chat: { title: 'Chat en Tiempo Real', description: 'Aplicación de chat con mensajes en tiempo real hecha con Flutter.' },
      awsBilling: {
        title: 'AWS Billing Monitor',
        description: 'Infraestructura como código con Terraform para monitorear la facturación de AWS y mantener los costos bajo control.',
      },
      competitive: {
        title: 'Programación Competitiva',
        description: 'Mi colección de soluciones algorítmicas a problemas de Beecrowd y Codeforces, escritas en C++.',
      },
      dataScience: { title: 'Análisis de Vinos', description: 'Proyecto de ciencia de datos que explora un dataset de reseñas de vinos de Kaggle con Python y Jupyter.' },
      mapsFields: { title: 'Dibujo de Campos en Maps', description: 'Ejemplo en Flutter Web que traza polilíneas en Google Maps para dibujar y crear áreas de campo.' },
      podcast: { title: 'Podcast Manager API', description: 'API hecha con TypeScript y Node.js puros, sin framework, para gestionar podcasts.' },
      advicer: { title: 'Advicer App', description: 'App Flutter que consume una API de consejos, hecha con Clean Architecture y Firebase.' },
      huffman: { title: 'Árbol de Huffman', description: 'Compresión con codificación de Huffman implementada desde cero en C++ para la materia de Estructuras de Datos.' },
    },
  },
  skills: {
    kicker: 'cat skills.json',
    title: 'Skills y herramientas',
    groups: { languages: 'Lenguajes', frontend: 'Móvil y Web', backend: 'Backend y Datos', cloud: 'Nube y DevOps' },
  },
  contact: {
    kicker: 'ping lucas',
    title: 'Construyamos algo genial',
    text: '¿Tienes un proyecto, una oportunidad o solo quieres hablar de código, Flutter o APIs de F1? Mi bandeja de entrada (y mis DMs) siempre están abiertas.',
    highFive: 'Choca esos cinco',
    highFiveCount: 'choca esos cinco recibidos',
  },
  footer: {
    made: 'Diseñado y programado por Lucas Brun',
    location: 'Passo Fundo, RS, Brasil',
    love: 'Hecho con ☕, 💜 y std::cout',
    hint: 'psst… prueba el código Konami ↑ ↑ ↓ ↓ ← → ← → B A (o toca el logo 5×)',
    top: 'Volver arriba',
    partyOn: '🎉 ¡Modo fiesta desbloqueado!',
    partyOff: 'Modo fiesta apagado. De vuelta al trabajo 🤓',
  },
}

export const translations: Record<Lang, Dict> = { en, pt, es }
