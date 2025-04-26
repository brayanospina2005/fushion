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
      title: 'Your Global Import Partner',
      subtitle: 'Connecting businesses with the best wholesale products from around the world.',
      cta: 'Learn More',
    },
    mission: {
      title: 'Mission & Vision',
      missionTitle: 'Our Mission',
      missionText: 'To build sustainable global trade relationships that empower businesses to access premium wholesale products at competitive prices.',
      visionTitle: 'Our Vision',
      visionText: 'To become the leading global import facilitator, creating a seamless bridge between manufacturers and retailers worldwide.',
    },
    global: {
      title: 'Global Reach',
      description: 'We connect you with quality suppliers across major manufacturing hubs worldwide.',
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
          name: 'Wholesale Connect',
          description: 'Direct access to verified manufacturers',
        },
        {
          name: 'Global Marketplace',
          description: 'Browse thousands of wholesale products',
        },
        {
          name: 'Import Hub',
          description: 'Streamlined logistics and customs clearance',
        },
      ],
    },
    services: {
      title: 'Our Services',
      description: 'We specialize in importing a wide range of high-quality products for wholesale distribution.',
      categories: {
        clothing: 'Clothing',
        footwear: 'Footwear',
        children: 'Children\'s Wear',
        leather: 'Leather Goods',
      },
      processTitle: 'Our Import Process',
      process: {
        step1: 'Market Analysis',
        step2: 'Supplier Selection',
        step3: 'Logistics Management',
        step4: 'Customs Clearance',
      },
    },
    credentials: {
      title: 'Our Credentials',
      items: {
        fairs: {
          title: 'Global Trade Fairs',
          description: 'Regular participation in international trade shows to source the latest products and trends.',
        },
        service: {
          title: 'Customer Excellence',
          description: 'Award-winning customer service with dedicated account managers for each client.',
        },
        partnerships: {
          title: 'Strategic Partnerships',
          description: 'Long-standing relationships with manufacturers and logistics providers worldwide.',
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
      description: 'We connect businesses with wholesale suppliers worldwide, helping you find the best products at competitive prices.',
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
      title: 'Tu Socio Global de Importación',
      subtitle: 'Conectando empresas con los mejores productos mayoristas de todo el mundo.',
      cta: 'Más Información',
    },
    mission: {
      title: 'Misión y Visión',
      missionTitle: 'Nuestra Misión',
      missionText: 'Construir relaciones comerciales globales sostenibles que permitan a las empresas acceder a productos mayoristas premium a precios competitivos.',
      visionTitle: 'Nuestra Visión',
      visionText: 'Convertirse en el principal facilitador de importaciones a nivel mundial, creando un puente fluido entre fabricantes y minoristas en todo el mundo.',
    },
    global: {
      title: 'Alcance Global',
      description: 'Te conectamos con proveedores de calidad en los principales centros de fabricación de todo el mundo.',
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
          name: 'Conexión Mayorista',
          description: 'Acceso directo a fabricantes verificados',
        },
        {
          name: 'Mercado Global',
          description: 'Explora miles de productos mayoristas',
        },
        {
          name: 'Centro de Importación',
          description: 'Logística y despacho aduanero simplificados',
        },
      ],
    },
    services: {
      title: 'Nuestros Servicios',
      description: 'Nos especializamos en la importación de una amplia gama de productos de alta calidad para distribución mayorista.',
      categories: {
        clothing: 'Ropa',
        footwear: 'Calzado',
        children: 'Ropa Infantil',
        leather: 'Artículos de Cuero',
      },
      processTitle: 'Nuestro Proceso de Importación',
      process: {
        step1: 'Análisis de Mercado',
        step2: 'Selección de Proveedores',
        step3: 'Gestión Logística',
        step4: 'Despacho Aduanero',
      },
    },
    credentials: {
      title: 'Nuestras Credenciales',
      items: {
        fairs: {
          title: 'Ferias Comerciales Globales',
          description: 'Participación regular en ferias internacionales para encontrar los últimos productos y tendencias.',
        },
        service: {
          title: 'Excelencia al Cliente',
          description: 'Servicio al cliente premiado con gerentes de cuenta dedicados para cada cliente.',
        },
        partnerships: {
          title: 'Alianzas Estratégicas',
          description: 'Relaciones de larga duración con fabricantes y proveedores logísticos en todo el mundo.',
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
      description: 'Conectamos empresas con proveedores mayoristas en todo el mundo, ayudándote a encontrar los mejores productos a precios competitivos.',
      links: 'Enlaces Rápidos',
      contact: 'Información de Contacto',
      rights: 'Todos los Derechos Reservados.',
    },
  },
};