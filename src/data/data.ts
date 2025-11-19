import ineaImg from '@/assets/inea.webp';
import worldRankImg from '@/assets/world-rank.webp';
import quizzImg from '@/assets/quizz.webp';
import moviesAppImg from '@/assets/movies-app.webp';
import inventarioImg from '@/assets/sistema-inventario.webp';
import portfolioImg from '@/assets/portfolio.webp';

export const cv = {
   basics: {
      name: 'Fabrizio Gutiérrez',
      level: 'Ingeniero de Sistemas',
      label: 'Frontend Web Developer',
      phone: '',
      image: 'https://avatars.githubusercontent.com/u/91578919?s=400&u=224bf569574504a79fb2e7b9cb40de788e9b0378&v=4',
      email: 'gutierrezfabrizio02@gmail.com',
      url: '',
      summary: {
         p1: 'Desarrollando aplicaciones web completas, combinando lógica backend con interfaces modernas y funcionales. ',
         p2: '+1 año de experiencia creando soluciones frontend con enfoque en rendimiento, claridad de datos y arquitectura limpia. ',
         p3: 'Mi fortaleza está en el desarrollo frontend, donde disfruto construir interfaces intuitivas, eficientes y fáciles de usar, siempre alineadas con la lógica del sistema.',
      },
      location: {
         address: '',
         postalCode: '',
         city: 'Falcón',
         countryCode: 'VE',
         country: 'Venezuela',
      },
      profiles: [
         {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/fabriziomgh/',
            icon: 'linkedin',
         },
         {
            name: 'GitHub',
            url: 'https://github.com/Fabriziomgh',
            icon: 'github',
         },
      ],
   },
   work: [
      {
         company: 'Besser Solutions',
         position: 'Programador Junior',
         url: 'https://bessersolutions.com/',
         startDate: '2024-06-20',
         endDate: null,
         description:
            'Desarrollo de APIs RESTful para la migración y sincronización entre bases de datos, utilizando Golang y el framework Gin, asegurando un flujo de información confiable y eficiente. Implementación de optimización de consultas SQL y gestión de bases de datos relacionales para mejorar el rendimiento en el manejo de datos. Colaboración en el diseño de interfaces de usuario junto a equipos de diseño mediante Figma, garantizando coherencia visual y usabilidad. Creación de landing pages para productos de la empresa empleando TailwindCSS y Astro.js, enfocadas en ofrecer interfaces modernas, rápidas y optimizadas para la conversión. Elaboración de documentación técnica detallada de código y procesos, facilitando el mantenimiento, la escalabilidad y la incorporación de nuevos desarrolladores al proyecto.',
         highlights: [
            'Programación backend (Golang)',
            'Desarrollo de APIs y consumo de servicios REST',
            'Figma',
            'PostgreSQL',
            'Astro.js',
            'Tailwind CSS',
         ],
      },
      // {
      //    company: 'MangoNetwork C.A',
      //    position: 'Analista de Soporte Técnico',
      //    url: 'https://www.mangonet.com.ve/punto-fijo',
      //    startDate: '2024-07-16',
      //    endDate: '2024-10-14',
      //    description:
      //       'Gestión proactiva de carteras de clientes en el sector de telecomunicaciones. Resolución de incidencias técnicas a través de herramientas como SmartOLT, asegurando la satisfacción del cliente y la optimización de los servicios. Configuración de equipos de internet y soporte técnico remoto, contribuyendo a la mejora continua de los procesos y la eficiencia operativa.',
      //    highlights: [
      //       'Soporte técnico',
      //       'Telecomunicaciones',
      //       'Configuración de equipos',
      //       'Mikrowisp',
      //       'SmartOLT',
      //    ],
      //    isActive: false,
      // },
      {
         company: 'Instituto Nacional de los Espacios Acuáticos',
         position: 'Programador Junior',
         url: 'https://www.inea.gob.ve/',
         startDate: '2023-10-03',
         endDate: '2024-06-24',
         description:
            'Diseñé y desarrollé un sistema de gestión de expedientes para los trabajadores de la empresa, utilizando React como framework principal para construir interfaces limpias, ágiles y fáciles de usar. Implementé una API con Node.js para la comunicación con la base de datos en MySQL, lo que permitió optimizar los procesos internos y agilizar en un 30% las tareas del área de Recursos Humanos.',
         highlights: [
            'React.js',
            'Creación de APIs con Node.js',
            'MySQL',
            'Integración frontend-backend',
            'Tailwind CSS',
         ],
      },
   ],
   volunteer: [
      {
         organization: 'Organization',
         position: 'Volunteer',
         url: 'https://organization.com/',
         startDate: '2012-01-01',
         endDate: '2013-01-01',
         summary: 'Description…',
         highlights: ["Awarded 'Volunteer of the Month'"],
      },
   ],
   education: [
      {
         institution: 'UNEFA',
         url: 'http://www.unefa.edu.ve/portal/',
         area: 'Ingeniería de Sistemas',
         studyType: 'Ingeniería',
         startDate: '2019-01-01',
         endDate: '2024-06-01',
         score: '4.0',
         courses: ['PHP', 'SQL Básico', 'JavaScript', 'SO'],
      },
   ],
   awards: [
      {
         title: 'Award',
         date: '2014-11-01',
         awarder: 'Company',
         summary: 'There is no spoon.',
      },
   ],
   certificates: [
      {
         name: 'Programación Básica',
         date: '2022-02-21',
         issuer: 'Platzi',
         url: 'https://platzi.com/p/fabrizio.miguel.gutierres/curso/1050-basico-programacion/diploma/detalle/',
      },
      {
         name: 'Master JavaScript with Node.js',
         date: '2024-11-04',
         issuer: 'Udemy',
         url: 'https://www.udemy.com/certificate/UC-20a7294e-baa2-4ae8-81c2-b6a7d6f007c3/',
      },
      {
         name: ' Tailwind CSS Start to Mastery',
         date: '2024-11-04',
         issuer: 'Udemy',
         url: 'https://www.udemy.com/certificate/UC-8413a096-07f3-4bf3-af18-6cf751c32755/',
      },
   ],
   publications: [
      {
         name: 'Publication',
         publisher: 'Company',
         releaseDate: '2014-10-01',
         url: 'https://publication.com',
         summary: 'Description…',
      },
   ],
   skills: [
      {
         name: 'JavaScript',
         icon: 'javascript',
         description:
            'Lenguaje de programación versátil para desarrollo web, habilitando interactividad en sitios web y aplicaciones.',
      },
      {
         name: 'TypeScript',
         icon: 'typescript',
         description:
            'Superset de JavaScript que añade tipado estático para desarrollo más robusto, mantenible y escalable.',
      },
      {
         name: 'React.js',
         icon: 'react',
         description:
            'Biblioteca de JavaScript para construir interfaces de usuario interactivas y componentes reutilizables.',
      },
      {
         name: 'Astro.js',
         icon: 'astro',
         description:
            'Framework de JavaScript de código abierto diseñado para construir sitios web rápidos y orientados al contenido.',
      },
      {
         name: 'Next.js',
         icon: 'nextjs',
         description:
            'Framework de React para aplicaciones web con renderizado del lado del servidor y generación estática.',
      },
      {
         name: 'CSS',
         icon: 'css',
         description:
            'Lenguaje de hojas de estilo para describir la presentación de documentos HTML, controlando diseño y apariencia.',
      },
      {
         name: 'Tailwind CSS',
         icon: 'tailwindcss',
         description:
            'Framework de CSS utility-first para crear diseños personalizados de forma rápida y eficiente.',
      },
      {
         name: 'Node.js',
         icon: 'nodejs',
         description:
            'Entorno de ejecución de JavaScript del lado del servidor que permite construir aplicaciones escalables y de alto rendimiento',
      },
      {
         name: 'PostgreSQL',
         icon: 'postgresql',
         description:
            'Sistema de gestión de bases de datos relacional avanzado, open source y con soporte para JSON.',
      },
      {
         name: 'MySQL',
         icon: 'mysql',
         description:
            'Sistema de gestión de bases de datos relacional open source ampliamente utilizado en aplicaciones web.',
      },
      {
         name: 'Git',
         icon: 'git',
         description:
            'Sistema de control de versiones distribuido para rastrear cambios en el código fuente de forma eficiente.',
      },
      {
         name: 'GitHub',
         icon: 'github',
         description:
            'Plataforma de desarrollo colaborativo basada en Git para alojar proyectos y facilitar el trabajo en equipo.',
      },
      {
         name: 'Figma',
         icon: 'figma',
         description:
            'Herramienta de diseño colaborativo en la nube para crear interfaces de usuario y prototipos interactivos.',
      },
   ],

   languages: [
      {
         language: 'Español',
         level: 'Nativo',
      },
      {
         language: 'Inglés',
         level: 'B1',
      },
   ],
   interests: [
      {
         name: 'Tecnología',
         keywords: ['Ferrets', 'Unicorns'],
      },
   ],
   references: [
      {
         name: 'Jane Doe',
         reference: 'Reference…',
      },
   ],
   projects: [
      {
         name: 'Sistema de gestión de expedientes',
         img: ineaImg,
         isActive: true,
         description:
            'Sistema enfocado en la gestion de expedientes para los trabajadores del Instituto Nacional de los Espacios Acuáticos, optimizando los procesos internos del área de Recursos Humanos',
         highlights: ['react', 'tailwind', 'nodejs', 'mysql'],
         url: null,
         github: null,
      },
      {
         name: 'World Rank',
         img: worldRankImg,
         isActive: true,
         description:
            'World Rank es una web que te permite ver todos los datos de un país en concreto, como tambien variedad de filtros para mostrar diferente información',
         highlights: ['react', 'next', 'tailwind'],
         url: 'https://world-rank-beta.vercel.app/',
         github: 'https://github.com/Fabriziomgh/world-rank',
      },
      {
         name: 'JS Quizz',
         img: quizzImg,
         isActive: true,
         description:
            'JS Quiz es una aplicación web que permite a los usuarios responder preguntas y obtener su puntuación al final del cuestionario',
         highlights: ['react', 'zustand', 'material-ui'],
         url: 'https://js-quizz.vercel.app/',
         github: 'https://github.com/Fabriziomgh/js-quizz',
      },
      {
         name: 'Movies App',
         img: moviesAppImg,
         isActive: false,
         description:
            'Una pequeña app donde puedes ver las películas más populares del momento, y buscar cualquier pelicula que desees',
         highlights: ['react native', 'expo', 'typescript'],
         url: null,
         github: 'https://github.com/Fabriziomgh/movies-app',
      },
      {
         name: 'Sistema de Inventario',
         img: inventarioImg,
         isActive: true,
         description:
            'Sistema de inventario desarrollado para gestionar productos, categorías y proveedores, optimizando el control de stock y facilitando la administración de inventarios en pequeñas empresas',
         highlights: [
            'react',
            'tailwind',
            'typescript',
            'nodejs',
            'mysql',
            'zustand',
         ],
         url: null,
         github: null,
      },
      {
         name: 'Portafolio Web',
         img: portfolioImg,
         isActive: true,
         description:
            'Portafolio web personal desarrollado para mostrar mis proyectos y habilidades, optimizando la presentación de mi trabajo y facilitando el contacto con potenciales clientes o empleadores',
         highlights: ['Astro.js', 'tailwind', 'typescript'],
         url: 'https://github.com/Fabriziomgh/portfolio-web-astro',
         github: 'https://github.com/Fabriziomgh/portfolio-web-astro',
      },
   ],
};
