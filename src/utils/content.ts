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
      title: 'Your Global Clothing Import Partner',
      subtitle: 'Connecting fashion retailers with premium wholesale clothing from around the world.',
      cta: 'Learn More',
    },
    mission: {
      title: 'Mission & Vision',
      missionTitle: 'Our Mission',
      missionText: 'To build sustainable global trade relationships that empower fashion retailers to access premium wholesale clothing at competitive prices.',
      visionTitle: 'Our Vision',
      visionText: 'To become the leading global clothing import facilitator, creating a seamless bridge between clothing manufacturers and retailers worldwide.',
    },
    global: {
      title: 'Global Reach',
      description: 'We connect you with quality clothing manufacturers across major fashion hubs worldwide.',
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
          description: 'Direct access to verified clothing manufacturers',
        },
        {
          name: 'Global Fashion Market',
          description: 'Browse thousands of wholesale clothing items',
        },
        {
          name: 'Import Hub',
          description: 'Streamlined clothing import logistics and customs clearance',
        },
      ],
    },
    services: {
      title: 'Our Services',
      description: 'We specialize in importing high-quality clothing for wholesale distribution.',
      categories: {
        clothing: 'Adult Clothing',
        footwear: 'Footwear',
        children: 'Children\'s Clothing',
        leather: 'Leather Apparel',
      },
      processTitle: 'Our Import Process',
      process: {
        step1: 'Fashion Market Analysis',
        step2: 'Clothing Supplier Selection',
        step3: 'Logistics Management',
        step4: 'Customs Clearance',
      },
    },
    credentials: {
      title: 'Our Credentials',
      items: {
        fairs: {
          title: 'Global Fashion Fairs',
          description: 'Regular participation in international fashion shows to source the latest trends and collections.',
        },
        service: {
          title: 'Customer Excellence',
          description: 'Award-winning customer service with dedicated fashion consultants for each client.',
        },
        partnerships: {
          title: 'Strategic Partnerships',
          description: 'Long-standing relationships with leading clothing manufacturers and logistics providers worldwide.',
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
      description: 'We connect fashion retailers with wholesale clothing suppliers worldwide, helping you find the best clothing at competitive prices.',
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
      title: 'Tu Socio Global en Importación de Ropa',
      subtitle: 'Conectando minoristas de moda con ropa mayorista premium de todo el mundo.',
      cta: 'Más Información',
    },
    mission: {
      title: 'Misión y Visión',
      missionTitle: 'Nuestra Misión',
      missionText: 'Construir relaciones comerciales globales sostenibles que permitan a los minoristas de moda acceder a ropa mayorista premium a precios competitivos.',
      visionTitle: 'Nuestra Visión',
      visionText: 'Convertirse en el principal facilitador de importación de ropa a nivel mundial, creando un puente fluido entre fabricantes de ropa y minoristas en todo el mundo.',
    },
    global: {
      title: 'Alcance Global',
      description: 'Te conectamos con fabricantes de ropa de calidad en los principales centros de moda del mundo.',
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
          description: 'Acceso directo a fabricantes de ropa verificados',
        },
        {
          name: 'Mercado Global de Moda',
          description: 'Explora miles de prendas de ropa mayorista',
        },
        {
          name: 'Centro de Importación',
          description: 'Logística de importación de ropa y despacho aduanero simplificados',
        },
      ],
    },
    services: {
      title: 'Nuestros Servicios',
      description: 'Nos especializamos en la importación de ropa de alta calidad para distribución mayorista.',
      categories: {
        clothing: 'Ropa para Adultos',
        footwear: 'Calzado',
        children: 'Ropa Infantil',
        leather: 'Ropa de Cuero',
      },
      processTitle: 'Nuestro Proceso de Importación',
      process: {
        step1: 'Análisis del Mercado de la Moda',
        step2: 'Selección de Proveedores de Ropa',
        step3: 'Gestión Logística',
        step4: 'Despacho Aduanero',
      },
    },
    credentials: {
      title: 'Nuestras Credenciales',
      items: {
        fairs: {
          title: 'Ferias de Moda Globales',
          description: 'Participación regular en ferias internacionales de moda para encontrar las últimas tendencias y colecciones.',
        },
        service: {
          title: 'Excelencia al Cliente',
          description: 'Servicio al cliente premiado con consultores de moda dedicados para cada cliente.',
        },
        partnerships: {
          title: 'Alianzas Estratégicas',
          description: 'Relaciones de larga duración con fabricantes líderes de ropa y proveedores logísticos en todo el mundo.',
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
      description: 'Conectamos minoristas de moda con proveedores mayoristas de ropa en todo el mundo, ayudándote a encontrar la mejor ropa a precios competitivos.',
      links: 'Enlaces Rápidos',
      contact: 'Información de Contacto',
      rights: 'Todos los Derechos Reservados.',
    },
  },
};