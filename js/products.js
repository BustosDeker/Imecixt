// ==========================================
// BASE DE DATOS DE PRODUCTOS
// ==========================================

const productosData = {
    extintoresPQS: {
        title: "Extintores PQS",
        description: "Extintores de polvo químico seco, ideales para fuegos clase A, B y C. Alta efectividad en ambientes industriales y comerciales.",
        icon: "fa-fire-extinguisher",
        iconColor: "icon-red",
        grid: "products-grid",
        productos: [
            {
                nombre: "PQS 1 KG",
                descripcion: "Portátil y compacto. Ideal para vehículos y espacios pequeños.",
                icono: "fa-fire-extinguisher",
                colorIcono: "icon-red",
                imagen: "img/productos/pqs-1kg.jpg", 
                detalles: {
                    caracteristicas: [
                        "Capacidad: 1 kg de polvo químico seco",
                        "Peso total: 2.5 kg aproximadamente",
                        "Altura: 30 cm",
                        "Presión de trabajo: 195 PSI",
                        "Eficacia: 1A 5BC"
                    ],
                    usos: "Ideal para vehículos, motocicletas, embarcaciones y espacios reducidos.",
                    garantia: "1 año de garantía. Recarga y mantenimiento disponible.",
                    certificacion: "Certificado según normas INDECOPI y NTP."
                }
            },
            {
                nombre: "PQS 2 KG",
                descripcion: "Versión compacta para oficinas y hogares.",
                icono: "fa-fire-extinguisher",
                colorIcono: "icon-red",
                imagen: "img/productos/pqs-1kg.jpg", 
                detalles: {
                    caracteristicas: [
                        "Capacidad: 2 kg de polvo químico seco",
                        "Peso total: 3.8 kg aproximadamente",
                        "Altura: 35 cm",
                        "Presión de trabajo: 195 PSI",
                        "Eficacia: 2A 10BC"
                    ],
                    usos: "Perfecto para oficinas pequeñas, consultorios médicos y hogares.",
                    garantia: "1 año de garantía con servicio técnico autorizado.",
                    certificacion: "Cumple con normas NTP 350.043"
                }
            },
            {
                nombre: "PQS 4 KG",
                descripcion: "Tamaño estándar para comercios y empresas.",
                icono: "fa-fire-extinguisher",
                colorIcono: "icon-red",
                detalles: {
                    caracteristicas: [
                        "Capacidad: 4 kg de polvo químico seco",
                        "Peso total: 6.5 kg aproximadamente",
                        "Altura: 45 cm",
                        "Presión de trabajo: 195 PSI",
                        "Eficacia: 4A 20BC"
                    ],
                    usos: "Recomendado para comercios, talleres, restaurantes y oficinas medianas.",
                    garantia: "1 año de garantía. Incluye manómetro de presión.",
                    certificacion: "Certificación INDECOPI vigente"
                }
            },
            {
                nombre: "PQS 6 KG",
                descripcion: "Mayor capacidad para áreas industriales.",
                icono: "fa-fire-extinguisher",
                colorIcono: "icon-red",
                detalles: {
                    caracteristicas: [
                        "Capacidad: 6 kg de polvo químico seco",
                        "Peso total: 9 kg aproximadamente",
                        "Altura: 50 cm",
                        "Presión de trabajo: 195 PSI",
                        "Eficacia: 6A 40BC"
                    ],
                    usos: "Ideal para industrias, almacenes, fábricas y áreas de alto riesgo.",
                    garantia: "1 año de garantía con soporte técnico completo.",
                    certificacion: "Certificado por organismos nacionales de seguridad"
                }
            },
            {
                nombre: "PQS 9 KG",
                descripcion: "Alta capacidad para grandes instalaciones.",
                icono: "fa-fire-extinguisher",
                colorIcono: "icon-red",
                detalles: {
                    caracteristicas: [
                        "Capacidad: 9 kg de polvo químico seco",
                        "Peso total: 13 kg aproximadamente",
                        "Altura: 55 cm",
                        "Presión de trabajo: 195 PSI",
                        "Eficacia: 10A 60BC"
                    ],
                    usos: "Para grandes instalaciones industriales, plantas químicas y zonas de alta protección.",
                    garantia: "1 año de garantía con mantenimiento preventivo incluido.",
                    certificacion: "Cumple estándares internacionales de seguridad"
                }
            },
            {
                nombre: "PQS 12 KG",
                descripcion: "Máxima protección para zonas industriales.",
                icono: "fa-fire-extinguisher",
                colorIcono: "icon-red",
                detalles: {
                    caracteristicas: [
                        "Capacidad: 12 kg de polvo químico seco",
                        "Peso total: 18 kg aproximadamente",
                        "Altura: 60 cm",
                        "Presión de trabajo: 195 PSI",
                        "Eficacia: 20A 120BC"
                    ],
                    usos: "Máxima protección para complejos industriales, refinerías y áreas de alto riesgo.",
                    garantia: "1 año de garantía con inspecciones periódicas.",
                    certificacion: "Certificado internacional y nacional"
                }
            }
        ]
    },
    
    extintoresCO2: {
        title: "Extintores CO2",
        description: "Extintores de dióxido de carbono, perfectos para equipos eléctricos y electrónicos. No dejan residuos.",
        icon: "fa-cloud",
        iconColor: "icon-blue",
        grid: "products-grid-2",
        productos: [
            {
                nombre: "CO2 5 LB",
                descripcion: "Ideal para equipos electrónicos y salas de servidores.",
                icono: "fa-cloud",
                colorIcono: "icon-blue",
                imagen: "img/productos/C02_5L.jpg", 
                detalles: {
                    caracteristicas: [
                        "Capacidad: 5 libras de CO2",
                        "Peso total: 7 kg aproximadamente",
                        "Altura: 45 cm",
                        "Presión de trabajo: 850 PSI",
                        "Eficacia: 5BC"
                    ],
                    usos: "Perfecto para centros de cómputo, salas de servidores, equipos electrónicos delicados.",
                    garantia: "1 año de garantía. No deja residuos.",
                    certificacion: "Certificado para uso en equipos eléctricos energizados"
                }
            },
            {
                nombre: "CO2 10 LB",
                descripcion: "Mayor capacidad para protección de equipamiento eléctrico.",
                icono: "fa-cloud",
                colorIcono: "icon-blue",
                imagen: "img/productos/C02_10L.jpg", 
                detalles: {
                    caracteristicas: [
                        "Capacidad: 10 libras de CO2",
                        "Peso total: 14 kg aproximadamente",
                        "Altura: 55 cm",
                        "Presión de trabajo: 850 PSI",
                        "Eficacia: 10BC"
                    ],
                    usos: "Ideal para cuartos eléctricos, data centers, laboratorios y áreas con equipos de alto valor.",
                    garantia: "1 año de garantía con recarga certificada.",
                    certificacion: "Aprobado para fuegos clase C (eléctricos)"
                }
            }
        ]
    },
    
    extintoresAcetato: {
        title: "Extintores Acetato de Potasio",
        description: "Especialmente diseñados para cocinas industriales y comerciales. Fuegos clase K (aceites y grasas).",
        icon: "fa-utensils",
        iconColor: "icon-purple",
        grid: "products-grid-2",
        productos: [
            {
                nombre: "Acetato K 6 LT",
                descripcion: "Protección para cocinas pequeñas y medianas.",
                icono: "fa-utensils",
                colorIcono: "icon-purple",
                imagen: "img/productos/acetato_6L.jpg", 
                detalles: {
                    caracteristicas: [
                        "Capacidad: 6 litros de acetato de potasio",
                        "Peso total: 10 kg aproximadamente",
                        "Altura: 50 cm",
                        "Presión de trabajo: 100 PSI",
                        "Eficacia: 2A 1K"
                    ],
                    usos: "Especial para cocinas de restaurantes, comedores industriales y áreas de preparación de alimentos.",
                    garantia: "1 año de garantía. Agente limpio y no tóxico.",
                    certificacion: "Certificado para fuegos clase K (aceites vegetales)"
                }
            },
            {
                nombre: "Acetato K 9 LT",
                descripcion: "Alta capacidad para cocinas industriales.",
                icono: "fa-utensils",
                colorIcono: "icon-purple",
                imagen: "img/productos/acetato_9L.jpg", 
                detalles: {
                    caracteristicas: [
                        "Capacidad: 9 litros de acetato de potasio",
                        "Peso total: 15 kg aproximadamente",
                        "Altura: 60 cm",
                        "Presión de trabajo: 100 PSI",
                        "Eficacia: 2A 2K"
                    ],
                    usos: "Para cocinas industriales, hoteles, casinos y grandes restaurantes con freidoras profundas.",
                    garantia: "1 año de garantía con asesoría en instalación.",
                    certificacion: "Cumple normas UL 300 para cocinas comerciales"
                }
            }
        ]
    },
    
    conos: {
        title: "Conos de Seguridad",
        description: "Conos viales de alta visibilidad para señalización y delimitación de áreas.",
        icon: "fa-triangle-exclamation",
        iconColor: "icon-orange",
        grid: "products-grid",
        productos: [
            {
                nombre: "Cono 15 CM",
                descripcion: "Cono pequeño para señalización interna.",
                icono: "fa-triangle-exclamation",
                colorIcono: "icon-orange",
                
                detalles: {
                    caracteristicas: [
                        "Altura: 15 cm",
                        "Material: PVC flexible de alta resistencia",
                        "Color: Naranja fluorescente",
                        "Base: Cuadrada antideslizante",
                        "Peso: 200 gramos"
                    ],
                    usos: "Señalización interna, estacionamientos, eventos y áreas de trabajo ligero.",
                    garantia: "Resistente a condiciones climáticas.",
                    certificacion: "Material reflectivo opcional"
                }
            },
            {
                nombre: "Cono 30 CM",
                descripcion: "Tamaño estándar para áreas de trabajo.",
                icono: "fa-triangle-exclamation",
                colorIcono: "icon-orange",
                detalles: {
                    caracteristicas: [
                        "Altura: 30 cm",
                        "Material: PVC de alta densidad",
                        "Color: Naranja con franjas reflectivas",
                        "Base: Cuadrada con peso adicional",
                        "Peso: 500 gramos"
                    ],
                    usos: "Zonas de construcción, mantenimiento vial, eventos masivos.",
                    garantia: "Alta durabilidad y resistencia UV.",
                    certificacion: "Franjas reflectivas certificadas"
                }
            },
            {
                nombre: "Cono 45 CM",
                descripcion: "Ideal para vías y zonas de alto tráfico.",
                icono: "fa-triangle-exclamation",
                colorIcono: "icon-orange",
                detalles: {
                    caracteristicas: [
                        "Altura: 45 cm",
                        "Material: PVC industrial reforzado",
                        "Color: Naranja con doble franja reflectiva",
                        "Base: Cuadrada lastrada",
                        "Peso: 1 kg"
                    ],
                    usos: "Carreteras, autopistas, zonas de alto tráfico vehicular.",
                    garantia: "Garantía de 2 años contra deformación.",
                    certificacion: "Cumple normas de tránsito nacional"
                }
            },
            {
                nombre: "Cono 70 CM",
                descripcion: "Máxima visibilidad para carreteras.",
                icono: "fa-triangle-exclamation",
                colorIcono: "icon-orange",
                detalles: {
                    caracteristicas: [
                        "Altura: 70 cm",
                        "Material: PVC premium extra resistente",
                        "Color: Naranja con triple franja reflectiva",
                        "Base: Cuadrada con sistema de anclaje",
                        "Peso: 2 kg"
                    ],
                    usos: "Autopistas, peajes, obras viales mayores, señalización nocturna.",
                    garantia: "Garantía de 3 años. Máxima resistencia.",
                    certificacion: "Certificado para uso en carreteras nacionales"
                }
            }
        ]
    },
    
    tacosViales: {
        title: "Tacos Viales de Seguridad",
        description: "Tacos de PVC resistentes para delimitación y control de tráfico vehicular.",
        icon: "fa-road",
        iconColor: "icon-yellow",
        grid: "products-grid-3",
        productos: [
            {
                nombre: "Taco Naranja",
                descripcion: "PVC naranja con base negra, alta visibilidad.",
                icono: "fa-road",
                colorIcono: "icon-orange",
                imagen: "img/productos/taco_naranja.jpg",
                detalles: {
                    caracteristicas: [
                        "Altura: 50 cm",
                        "Material: PVC industrial flexible",
                        "Color: Naranja con base negra",
                        "Sistema: Encajable",
                        "Peso: 3 kg con base"
                    ],
                    usos: "Delimitación de carriles, zonas de construcción, estacionamientos.",
                    garantia: "Resistente a impactos y condiciones climáticas extremas.",
                    certificacion: "Base antideslizante certificada"
                }
            },
            {
                nombre: "Taco Amarillo",
                descripcion: "PVC amarillo con base negra, máxima advertencia.",
                icono: "fa-road",
                colorIcono: "icon-yellow",
                imagen: "img/productos/taco_amarillo.jpg",
                detalles: {
                    caracteristicas: [
                        "Altura: 50 cm",
                        "Material: PVC de alta resistencia",
                        "Color: Amarillo fluorescente con base negra",
                        "Sistema: Encajable y apilable",
                        "Peso: 3 kg con base"
                    ],
                    usos: "Zonas de precaución, áreas peligrosas, desvíos temporales.",
                    garantia: "Material UV resistente.",
                    certificacion: "Alta visibilidad nocturna"
                }
            },
            {
                nombre: "Taco Verde",
                descripcion: "PVC verde con base negra, señalización segura.",
                icono: "fa-road",
                colorIcono: "icon-green",
                imagen: "img/productos/taco_verde.jpg",
                detalles: {
                    caracteristicas: [
                        "Altura: 50 cm",
                        "Material: PVC premium",
                        "Color: Verde con base negra",
                        "Sistema: Modular encajable",
                        "Peso: 3 kg con base"
                    ],
                    usos: "Zonas seguras, rutas alternativas, señalización de paso libre.",
                    garantia: "Durabilidad garantizada por 2 años.",
                    certificacion: "Base de goma anti-volcamiento"
                }
            }
        ]
    },
    
    equipamientoAdicional: {
        title: "Equipamiento Adicional",
        description: "Productos complementarios para seguridad integral.",
        icon: "fa-box",
        iconColor: "icon-gray",
        grid: "products-grid-3",
        productos: [
            {
                nombre: "Señaléticas",
                descripcion: "Señales de seguridad estándar y fotoluminiscentes.",
                icono: "fa-signs-post",
                colorIcono: "icon-green",
                imagen: "img/productos/senaletica.jpg",
                detalles: {
                    caracteristicas: [
                        "Material: Acrílico, PVC o aluminio",
                        "Tamaños: 20x30 cm, 30x40 cm, personalizado",
                        "Tipos: Preventivas, informativas, prohibitivas",
                        "Acabado: Fotoluminiscente opcional",
                        "Instalación: Autoadhesivo o con perforaciones"
                    ],
                    usos: "Señalización de emergencia, rutas de evacuación, zonas de riesgo.",
                    garantia: "Material duradero para interiores y exteriores.",
                    certificacion: "Según norma NTP 399.010-1"
                }
            },
            {
                nombre: "Botiquines",
                descripcion: "Botiquines de madera y tipo lonchera (chico y grande).",
                icono: "fa-briefcase-medical",
                colorIcono: "icon-red",
                detalles: {
                    caracteristicas: [
                        "Tipos: Madera (20x30, 30x40, 24x34)",
                        "Lonchera chica y grande",
                        "Material: Madera y metal",
                        "Contenido: Equipamiento básico incluido",
                        "Cierre: Con llave de seguridad"
                    ],
                    usos: "Primeros auxilios en empresas, oficinas, fábricas y vehículos.",
                    garantia: "Incluye lista de contenido sugerido.",
                    certificacion: "Cumple normas de salud ocupacional"
                }
            },
            {
                nombre: "Kit Antiderrame",
                descripcion: "Con bandeja de acero para control de derrames.",
                icono: "fa-droplet",
                colorIcono: "icon-yellow",
                detalles: {
                    caracteristicas: [
                        "Bandeja: Acero galvanizado",
                        "Capacidad: Absorbente para 50-100 litros",
                        "Contenido: Paños, barreras, guantes, bolsas",
                        "Dimensiones: Bandeja 60x40x15 cm",
                        "Incluye: Instructivo de uso"
                    ],
                    usos: "Control de derrames de líquidos peligrosos, aceites, combustibles.",
                    garantia: "Material absorbente de alta calidad.",
                    certificacion: "Cumple normas ambientales"
                }
            },
            {
                nombre: "Luces de Emergencia",
                descripcion: "Luces Opalux y Ricers para iluminación de emergencia.",
                icono: "fa-lightbulb",
                colorIcono: "icon-blue",
                detalles: {
                    caracteristicas: [
                        "Tipos: Opalux y Ricers",
                        "Autonomía: 2-4 horas",
                        "Tecnología: LED de bajo consumo",
                        "Batería: Recargable automática",
                        "Instalación: Empotrable o sobrepuesto"
                    ],
                    usos: "Iluminación de emergencia en cortes de energía, rutas de evacuación.",
                    garantia: "1 año de garantía con mantenimiento incluido.",
                    certificacion: "Certificado según norma de emergencia"
                }
            },
            {
                nombre: "Gabinetes",
                descripcion: "Gabinetes contra incendios para equipos de emergencia.",
                icono: "fa-box",
                colorIcono: "icon-red",
                detalles: {
                    caracteristicas: [
                        "Material: Plancha metálica pintado rojo",
                        "Tamaños: Para extintores de 4-12 kg",
                        "Puerta: Con vidrio templado o acrílico",
                        "Accesorios: Soporte interno incluido",
                        "Cerradura: Con llave o cierre rápido"
                    ],
                    usos: "Almacenamiento seguro y visible de extintores en edificios.",
                    garantia: "Pintura anticorrosiva de larga duración.",
                    certificacion: "Según normas de protección contra incendios"
                }
            },
            {
                nombre: "Pedestales",
                descripcion: "Pedestales para extintores, diversos tamaños.",
                icono: "fa-box-archive",
                colorIcono: "icon-gray",
                detalles: {
                    caracteristicas: [
                        "Material: Tubo metálico de 1.5\" a 2\"",
                        "Acabado: Pintura roja horneada",
                        "Altura: 80 cm a 1.20 m",
                        "Base: Circular con pernos de anclaje",
                        "Capacidad: Para extintores de 4-12 kg"
                    ],
                    usos: "Ubicación estratégica de extintores en áreas abiertas o grandes espacios.",
                    garantia: "Estructura resistente a la intemperie.",
                    certificacion: "Base antivuelco certificada"
                }
            }
        ]
    }
};