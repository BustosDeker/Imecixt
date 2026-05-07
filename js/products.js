// ==========================================
// BASE DE DATOS DE PRODUCTOS
// ==========================================

const productosData = {
    extintoresPQS: {
        title: "Extintores PQS",
        description: "Extintores de polvo químico seco ABC, ideales para fuegos clase A, B y C. Disponibles en capacidades desde 1 kg hasta 50 kg.",
        icon: "fa-fire-extinguisher",
        iconColor: "icon-red",
        grid: "products-grid-3",
        productos: [
            {
                nombre: "PQS Compactos",
                descripcion: "1-4 KG: Portátiles para vehículos, oficinas y comercios pequeños.",
                icono: "fa-fire-extinguisher",
                colorIcono: "icon-red",
                imagen: "img/productos/pqs-2kg.jpg",
                detalles: {
                    caracteristicas: [
                        "Capacidades: 1, 2, 4 kg de polvo químico seco",
                        "Eficacia: 1A 5BC hasta 4A 20BC",
                        "Presión de trabajo: 195 PSI",
                        "Ideales para espacios reducidos",
                        "Certificados INDECOPI y NTP"
                    ],
                    usos: "Vehículos, oficinas pequeñas, consultorios, hogares, comercios.",
                    garantia: "1 año de garantía. Recarga y mantenimiento disponible.",
                    certificacion: "Certificados según normas INDECOPI y NTP. Incluyen manómetro."
                }
            },
            {
                nombre: "PQS Medianos",
                descripcion: "6-12 KG: Tamaño estándar para comercios, empresas e industrias medianas.",
                icono: "fa-fire-extinguisher",
                colorIcono: "icon-red",
                imagen: "img/productos/pqs-6kg.jpg",
                detalles: {
                    caracteristicas: [
                        "Capacidades: 6, 9, 12 kg de polvo químico seco",
                        "Eficacia: 6A 40BC hasta 20A 120BC",
                        "Presión de trabajo: 195 PSI",
                        "Para áreas de trabajo y comercios",
                        "Soporte técnico completo"
                    ],
                    usos: "Comercios, talleres, restaurantes, industrias medianas, almacenes.",
                    garantia: "1 año de garantía con mantenimiento preventivo incluido.",
                    certificacion: "Certificación INDECOPI vigente. Servicio técnico autorizado."
                }
            },
            {
                nombre: "PQS Industriales",
                descripcion: "15-50 KG: Alta capacidad móvil con ruedas para instalaciones industriales grandes.",
                icono: "fa-fire-extinguisher",
                colorIcono: "icon-red",
                imagen: "img/productos/pqs-25kg.jpg",
                detalles: {
                    caracteristicas: [
                        "Capacidades: 15, 25, 50 kg de polvo químico seco",
                        "Eficacia: 20A 120BC hasta 40A 240BC",
                        "Versión móvil con ruedas (todos con carro)",
                        "Máxima protección para grandes áreas",
                        "Carro rodante para fácil maniobrabilidad"
                    ],
                    usos: "Grandes instalaciones, plantas manufactureras, refinerías, puertos, aeropuertos.",
                    garantia: "1 año de garantía con inspecciones periódicas y soporte especializado.",
                    certificacion: "Incluyen certificado y tarjeta de inspección. Certificación internacional."
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
                imagen: "img/productos/co2-5lb.jpg",
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
                imagen: "img/productos/co2-10lb.jpg",
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
            },
            {
                nombre: "CO2 15 LB",
                descripcion: "Máxima capacidad para protección extensa de equipos eléctricos.",
                icono: "fa-cloud",
                colorIcono: "icon-blue",
                imagen: "img/productos/co2-15lb.jpg",
                detalles: {
                    caracteristicas: [
                        "Capacidad: 15 libras de CO2",
                        "Peso total: 19 kg aproximadamente",
                        "Altura: 65 cm",
                        "Presión de trabajo: 850 PSI",
                        "Eficacia: 15BC"
                    ],
                    usos: "Para grandes data centers, plantas industriales con equipos eléctricos sensibles y áreas de alta protección.",
                    garantia: "1 año de garantía. No deja residuos ni daña equipos.",
                    certificacion: "Incluye certificado y tarjeta de inspección"
                }
            }
        ]
    },

    extintoresAcetato: {
        title: "Extintores Acetato de Potasio",
        description: "Especialmente diseñados para cocinas industriales y comerciales. Fuegos clase K (aceites y grasas animales o vegetales).",
        icon: "fa-utensils",
        iconColor: "icon-purple",
        grid: "products-grid-2",
        productos: [
            {
                nombre: "Acetato K 6 LT",
                descripcion: "Capacidad estándar para cocinas pequeñas y medianas.",
                icono: "fa-utensils",
                colorIcono: "icon-purple",
                imagen: "img/productos/acetato-6l.jpg",
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
                    certificacion: "Certificado para fuegos clase K (aceites vegetales y grasas animales)"
                }
            },
            {
                nombre: "Acetato K 9 LT",
                descripcion: "Alta capacidad para cocinas industriales grandes.",
                icono: "fa-utensils",
                colorIcono: "icon-purple",
                imagen: "img/productos/acetato-9l.jpg",
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

    extintoresPQSUL: {
        title: "Extintores PQS-UL",
        description: "Extintores con certificación UL (Underwriters Laboratories) de marcas Buckeye, Amerex, Ansul y Badger. Garantía internacional de calidad y seguridad.",
        icon: "fa-fire-extinguisher",
        iconColor: "icon-red",
        grid: "products-grid-3",
        productos: [
            {
                nombre: "PQS-UL 10 LB",
                descripcion: "Certificación UL internacional. Ideal para oficinas y comercios.",
                icono: "fa-fire-extinguisher",
                colorIcono: "icon-red",
                imagen: "img/productos/pqsul-10lb.jpg",
                detalles: {
                    caracteristicas: [
                        "Capacidad: 10 libras de polvo químico seco",
                        "Peso total: 8 kg aproximadamente",
                        "Altura: 48 cm",
                        "Presión de trabajo: 195 PSI",
                        "Eficacia: 4A 60BC"
                    ],
                    usos: "Perfecto para oficinas, comercios, restaurantes y áreas con equipos de valor.",
                    garantia: "1 año de garantía. Marca: Buckeye, Amerex, Ansul o Badger.",
                    certificacion: "Certificación UL internacional. Incluye certificado y tarjeta de inspección."
                }
            },
            {
                nombre: "PQS-UL 20 LB",
                descripcion: "Mayor capacidad con certificación UL. Para áreas industriales.",
                icono: "fa-fire-extinguisher",
                colorIcono: "icon-red",
                imagen: "img/productos/pqsul-20lb.jpg",
                detalles: {
                    caracteristicas: [
                        "Capacidad: 20 libras de polvo químico seco",
                        "Peso total: 14 kg aproximadamente",
                        "Altura: 58 cm",
                        "Presión de trabajo: 195 PSI",
                        "Eficacia: 10A 80BC"
                    ],
                    usos: "Ideal para talleres, almacenes, plantas industriales y áreas de trabajo.",
                    garantia: "1 año de garantía. Marcas certificadas UL.",
                    certificacion: "Certificación UL internacional. Garantía de calidad auditada."
                }
            },
            {
                nombre: "PQS-UL 30 LB",
                descripcion: "Máxima capacidad con certificación UL. Protección industrial superior.",
                icono: "fa-fire-extinguisher",
                colorIcono: "icon-red",
                imagen: "img/productos/pqsul-30lb.jpg",
                detalles: {
                    caracteristicas: [
                        "Capacidad: 30 libras de polvo químico seco",
                        "Peso total: 20 kg aproximadamente",
                        "Altura: 68 cm",
                        "Presión de trabajo: 195 PSI",
                        "Eficacia: 20A 120BC"
                    ],
                    usos: "Para grandes instalaciones, plantas manufactureras, complejos industriales.",
                    garantia: "1 año de garantía. Soporte técnico especializado.",
                    certificacion: "Certificación UL internacional. Cumple normas de calidad globales."
                }
            }
        ]
    },

    conos: {
        title: "Conos de Seguridad",
        description: "Conos viales de alta visibilidad para señalización y delimitación de áreas. Disponibles en alturas desde 30 cm hasta 70 cm.",
        icon: "fa-triangle-exclamation",
        iconColor: "icon-orange",
        grid: "products-grid-3",
        productos: [
            {
                nombre: "Conos Medianos",
                descripcion: "30-45 CM: Tamaños estándar para obras y zonas de tráfico.",
                icono: "fa-triangle-exclamation",
                colorIcono: "icon-orange",
                imagen: "img/productos/cono-30cm.jpg",
                detalles: {
                    caracteristicas: [
                        "Alturas: 30 y 45 cm disponibles",
                        "Material: PVC de alta densidad e industrial",
                        "Franjas reflectivas simples y dobles",
                        "Base lastrada para estabilidad",
                        "Resistencia UV prolongada"
                    ],
                    usos: "Zonas de construcción, carreteras, mantenimiento vial, eventos masivos.",
                    garantia: "Garantía de 2 años contra deformación y decoloración.",
                    certificacion: "Cumple normas de tránsito nacional. Franjas reflectivas certificadas."
                }
            },
            {
                nombre: "Cono Grande 70 CM",
                descripcion: "70 CM: Máxima visibilidad para carreteras y autopistas.",
                icono: "fa-triangle-exclamation",
                colorIcono: "icon-orange",
                imagen: "img/productos/cono-70cm.jpg",
                detalles: {
                    caracteristicas: [
                        "Altura: 70 cm",
                        "Material: PVC premium extra resistente",
                        "Triple franja reflectiva",
                        "Base con sistema de anclaje",
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
        description: "Productos complementarios para seguridad integral: señaléticas, botiquines, luces de emergencia, gabinetes y más.",
        icon: "fa-box",
        iconColor: "icon-gray",
        grid: "products-grid-3",
        productos: [
            {
                nombre: "Señaléticas de Seguridad",
                descripcion: "Señales estándar y fotoluminiscentes para emergencias y evacuación.",
                icono: "fa-signs-post",
                colorIcono: "icon-green",
                imagen: "img/productos/senaletica.jpg",
                detalles: {
                    caracteristicas: [
                        "Material: Acrílico, PVC o aluminio",
                        "Tamaños: 20x30 cm, 30x40 cm, personalizado",
                        "Tipos: Preventivas, informativas, prohibitivas, evacuación",
                        "Acabado: Fotoluminiscente opcional",
                        "Instalación: Autoadhesivo o con perforaciones"
                    ],
                    usos: "Señalización de emergencia, rutas de evacuación, zonas de riesgo, extintores.",
                    garantia: "Material duradero para interiores y exteriores.",
                    certificacion: "Según norma NTP 399.010-1"
                }
            },
            {
                nombre: "Botiquines y Primeros Auxilios",
                descripcion: "Botiquines de madera y tipo lonchera para empresas y vehículos.",
                icono: "fa-briefcase-medical",
                colorIcono: "icon-red",
                imagen: "img/productos/botiquin.jpg",
                detalles: {
                    caracteristicas: [
                        "Tipos: Madera (20x30, 30x40, 24x34 cm)",
                        "Loncheras: Chica y grande",
                        "Material: Madera resistente y metal",
                        "Cierre: Con llave de seguridad",
                        "Contenido: Equipamiento básico incluido"
                    ],
                    usos: "Primeros auxilios en empresas, oficinas, fábricas y vehículos.",
                    garantia: "Incluye lista de contenido sugerido.",
                    certificacion: "Cumple normas de salud ocupacional"
                }
            },
            {
                nombre: "Luces de Emergencia",
                descripcion: "Luces LED Opalux y Ricers con autonomía de 2-4 horas.",
                icono: "fa-lightbulb",
                colorIcono: "icon-blue",
                imagen: "img/productos/luz-emergencia.jpg",
                detalles: {
                    caracteristicas: [
                        "Tecnología: LED de bajo consumo",
                        "Autonomía: 2-4 horas de iluminación",
                        "Batería: Recargable automática",
                        "Instalación: Empotrable o sobrepuesto",
                        "Indicador de carga incluido"
                    ],
                    usos: "Iluminación de emergencia en cortes de energía, rutas de evacuación.",
                    garantia: "1 año de garantía con mantenimiento incluido.",
                    certificacion: "Certificado según norma de emergencia"
                }
            }
        ]
    }
};