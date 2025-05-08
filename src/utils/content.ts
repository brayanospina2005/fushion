interface ContentType {
  [language: string]: {
    nav: {
      mission: string;
      global: string;
      services: string;
      credentials: string;
      contact: string;
    };
    hero: {
      title: string;
      subtitle: string;
      cta: string;
    };
    mission: {
      title: string;
      missionTitle: string;
      missionText: string;
      visionTitle: string;
      visionText: string;
    };
    global: {
      title: string;
      description: string;
      countries: {
        china: string;
        turkey: string;
        panama: string;
        europe: string;
        brazil: string;
        colombia: string;
      };
      platforms: Array<{
        name: string;
        description: string;
      }>;
    };
    services: {
      title: string;
      description: string;
      categories: {
        clothing: string;
        footwear: string;
        children: string;
        leather: string;
      };
      processTitle: string;
      process: {
        step1: string;
        step2: string;
        step3: string;
        step4: string;
      };
    };
    credentials: {
      title: string;
      items: {
        fairs: {
          title: string;
          description: string;
        };
        service: {
          title: string;
          description: string;
        };
        partnerships: {
          title: string;
          description: string;
        };
      };
    };
    contact: {
      title: string;
      getInTouch: string;
      sendMessage: string;
      email: string;
      phone: string;
      address: string;
      form: {
        name: string;
        email: string;
        message: string;
        send: string;
      };
      success: string;
    };
    footer: {
      description: string;
      links: string;
      contact: string;
      rights: string;
    };
  };
}

export const content: ContentType = {
  'en': {
    nav: {
      mission: 'Mission & Vision',
      global: 'Global Reach',
      services: 'Services',
      credentials: 'Credentials',
      contact: 'Contact',
    },
    hero: {
      title: 'Your Global Clothing and Footwear Import Partner',
      subtitle: 'Connecting retailers with wholesale suppliers of clothing and footwear from around the world.',
      cta: 'Learn More',
    },
    mission: {
      title: 'Mission & Vision',
      missionTitle: 'Our Mission',
      missionText: 'To facilitate the import of high-quality clothing and footwear, enabling retailers to access the best collections at competitive prices.',
      visionTitle: 'Our Vision',
      visionText: 'To be the main global bridge between clothing and footwear manufacturers and retailers worldwide.',
    },
    global: {
      title: 'Global Reach',
      description: "We connect you with clothing and footwear manufacturers in the world's main fashion hubs.",
      countries: {
        china: 'China',
        turkey: 'Turkey',
        panama: 'Panama',
        europe: 'Europe',
        brazil: 'Brazil',
        colombia: 'Colombia',
      },
      platforms: [
        {
          name: 'Fashion Connect',
          description: 'Direct access to verified clothing and footwear manufacturers',
        },
        {
          name: 'Global Fashion Market',
          description: 'Browse thousands of wholesale clothing and footwear items',
        },
        {
          name: 'Import Hub',
          description: 'Streamlined clothing and footwear import logistics',
        },
      ],
    },
    services: {
      title: 'Our Services',
      description: 'We specialize in importing high-quality clothing and footwear for wholesale distribution.',
      categories: {
        clothing: 'Clothing',
        footwear: 'Footwear',
        children: '',
        leather: '',
      },
      processTitle: 'Our Import Process',
      process: {
        step1: 'Clothing and Footwear Market Analysis',
        step2: 'Clothing and Footwear Supplier Selection',
        step3: 'Logistics Management',
        step4: 'Customs Clearance',
      },
    },
    credentials: {
      title: 'Our Credentials',
      items: {
        fairs: {
          title: 'Fashion and Footwear Fairs',
          description: 'Regular participation in international clothing and footwear fairs to source the latest trends and collections.',
        },
        service: {
          title: 'Customer Excellence',
          description: 'Personalized attention for each client, specialized in clothing and footwear.',
        },
        partnerships: {
          title: 'Strategic Partnerships',
          description: 'Strong relationships with leading clothing and footwear manufacturers and logistics providers worldwide.',
        },
      },
    },
    contact: {
      title: 'Contact Us',
      getInTouch: 'Get in Touch',
      sendMessage: 'Send Us a Message',
      email: 'Email',
      phone: 'Phone',
      address: 'Address',
      form: {
        name: 'Full Name',
        email: 'Email Address',
        message: 'Your Message',
        send: 'Send Message',
      },
      success: 'Thank you for your message! We will get back to you soon.',
    },
    footer: {
      description: 'We connect retailers with wholesale suppliers of clothing and footwear worldwide, helping you find the best collections at competitive prices.',
      links: 'Quick Links',
      contact: 'Contact Info',
      rights: 'All Rights Reserved.',
    },
  },
  'es': {
    nav: {
      mission: 'Misión y Visión',
      global: 'Alcance Global',
      services: 'Servicios',
      credentials: 'Credenciales',
      contact: 'Contacto',
    },
    hero: {
      title: 'Tu Socio Global en Importación de Ropa y Calzado',
      subtitle: 'Conectando minoristas con proveedores mayoristas de ropa y calzado de todo el mundo.',
      cta: 'Más Información',
    },
    mission: {
      title: 'Misión y Visión',
      missionTitle: 'Nuestra Misión',
      missionText: 'Facilitar la importación de ropa y calzado de alta calidad, permitiendo a los minoristas acceder a las mejores colecciones a precios competitivos.',
      visionTitle: 'Nuestra Visión',
      visionText: 'Ser el principal puente global entre fabricantes de ropa y calzado y minoristas en todo el mundo.',
    },
    global: {
      title: 'Alcance Global',
      description: 'Te conectamos con fabricantes de ropa y calzado en los principales centros de moda del mundo.',
      countries: {
        china: 'China',
        turkey: 'Turquía',
        panama: 'Panamá',
        europe: 'Europa',
        brazil: 'Brasil',
        colombia: 'Colombia',
      },
      platforms: [
        {
          name: 'Conexión Moda',
          description: 'Acceso directo a fabricantes de ropa y calzado verificados',
        },
        {
          name: 'Mercado Global de Moda',
          description: 'Explora miles de prendas y calzado mayorista',
        },
        {
          name: 'Centro de Importación',
          description: 'Logística de importación de ropa y calzado simplificada',
        },
      ],
    },
    services: {
      title: 'Nuestros Servicios',
      description: 'Nos especializamos en la importación de ropa y calzado de alta calidad para distribución mayorista.',
      categories: {
        clothing: 'Ropa',
        footwear: 'Calzado',
        children: '',
        leather: '',
      },
      processTitle: 'Nuestro Proceso de Importación',
      process: {
        step1: 'Análisis del Mercado de Ropa y Calzado',
        step2: 'Selección de Proveedores de Ropa y Calzado',
        step3: 'Gestión Logística',
        step4: 'Despacho Aduanero',
      },
    },
    credentials: {
      title: 'Nuestras Credenciales',
      items: {
        fairs: {
          title: 'Ferias de Moda y Calzado',
          description: 'Participación regular en ferias internacionales de ropa y calzado para encontrar las últimas tendencias y colecciones.',
        },
        service: {
          title: 'Excelencia al Cliente',
          description: 'Atención personalizada para cada cliente, especializada en ropa y calzado.',
        },
        partnerships: {
          title: 'Alianzas Estratégicas',
          description: 'Relaciones sólidas con fabricantes líderes de ropa y calzado y proveedores logísticos en todo el mundo.',
        },
      },
    },
    contact: {
      title: 'Contáctanos',
      getInTouch: 'Ponte en Contacto',
      sendMessage: 'Envíanos un Mensaje',
      email: 'Correo Electrónico',
      phone: 'Teléfono',
      address: 'Dirección',
      form: {
        name: 'Nombre Completo',
        email: 'Correo Electrónico',
        message: 'Tu Mensaje',
        send: 'Enviar Mensaje',
      },
      success: '¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.',
    },
    footer: {
      description: 'Conectamos minoristas con proveedores mayoristas de ropa y calzado en todo el mundo, ayudándote a encontrar las mejores colecciones a precios competitivos.',
      links: 'Enlaces Rápidos',
      contact: 'Información de Contacto',
      rights: 'Todos los Derechos Reservados.',
    },
  },
};