/**
 * 🧠 COMPONENTE: TRANSVERSAL IA CON PRIORIDADES
 * Archivo: js/components/transversal-ia.js
 * Formación transversal en IA clasificada por nivel de adopción
 */

window.TrainingPlan.registerComponent({
    name: "🧠 Transversal IA",
    icon: "🧠",
    borderColor: "#ff6b6b",
    courses: [
        // === FUNDAMENTOS (IA BÁSICA PARA PRODUCTIVIDAD) ===
        {
            fuente: "Platzi",
            curso: "🤖 IA para la Productividad - Fundamentos",
            acceso: "https://platzi.com/cursos/introduccion-ai/",
            tiempo: "18 horas",
            prioridad: "Fundamentos", // 🏗️ IA BÁSICA ESENCIAL
            expandible: true,
            subcursos: [
                {
                    nombre: "🎯 Introducción a la Inteligencia Artificial",
                    enlace: "https://platzi.com/cursos/introduccion-ai/"
                },
                {
                    nombre: "💬 Prompt Engineering - Técnicas Avanzadas",
                    enlace: "https://platzi.com/cursos/prompt-engineering/"
                },
                {
                    nombre: "🤖 ChatGPT - Dominio Completo",
                    enlace: "https://platzi.com/cursos/chatgpt/"
                },
                {
                    nombre: "🧠 Claude AI - Especialización",
                    enlace: "https://platzi.com/cursos/claude/"
                },
                {
                    nombre: "📚 Fundamentos de LLMs",
                    enlace: "https://platzi.com/cursos/llms/"
                },
                {
                    nombre: "⚡ Tips y Trucos de IA",
                    enlace: "https://platzi.com/cursos/trucos-ia/"
                }
            ]
        },
        {
            fuente: "Universidad Mi Siesa",
            curso: "🎓 GEN AI Siesa University - Programa Completo",
            acceso: "https://www.miuniversidadsiesa.com/",
            tiempo: "24+ horas",
            prioridad: "Fundamentos", // 🏗️ IA CORPORATIVA
            expandible: true,
            subcursos: [
                {
                    nombre: "🥉 GEN AI NIVEL 100 - Fundamentos",
                    enlace: "https://www.miuniversidadsiesa.com/cursos/carpetas/20058"
                },
                {
                    nombre: "🥈 GEN AI NIVEL 200 - Intermedio",
                    enlace: "https://www.miuniversidadsiesa.com/cursos/carpetas/20075"
                },
                {
                    nombre: "🥇 GEN AI NIVEL 300 - Avanzado (Próximamente)",
                    enlace: "Pendiente por programar"
                }
            ]
        },

        // === ESPECIALIZACIÓN (IA APLICADA) ===
        {
            fuente: "Platzi",
            curso: "💼 IA para Negocios y Marketing",
            acceso: "https://platzi.com/cursos/ia-marketing-contenido/",
            tiempo: "5 horas",
            prioridad: "Especialización", // ⚡ IA EMPRESARIAL
            expandible: true,
            subcursos: [
                {
                    nombre: "📈 IA para Content Marketing",
                    enlace: "https://platzi.com/cursos/ia-marketing-contenido/"
                },
                {
                    nombre: "🤝 IA para Servicio al Cliente",
                    enlace: "https://platzi.com/cursos/ai-servicio-cliente/"
                },
                {
                    nombre: "💰 IA para Finanzas",
                    enlace: "https://platzi.com/cursos/ia-finanzas/"
                }
            ]
        },
        {
            fuente: "Platzi",
            curso: "📊 IA para Análisis de Datos",
            acceso: "https://platzi.com/cursos/gpt-con-google-sheets/",
            tiempo: "3 horas",
            prioridad: "Especialización", // ⚡ IA ANALÍTICA
            expandible: true,
            subcursos: [
                {
                    nombre: "📈 ChatGPT con Google Sheets",
                    enlace: "https://platzi.com/cursos/gpt-con-google-sheets/"
                },
                {
                    nombre: "📊 Herramientas IA para Equipos de Datos",
                    enlace: "https://platzi.com/cursos/data-ia-empresas/"
                }
            ]
        },

        // === VANGUARDIA (IA CREATIVA Y AVANZADA) ===
        {
            fuente: "Platzi",
            curso: "🎨 IA para Creación Visual",
            acceso: "https://platzi.com/cursos/midjourney/",
            tiempo: "5 horas",
            prioridad: "Vanguardia", // 🚀 IA CREATIVA
            expandible: true,
            subcursos: [
                {
                    nombre: "🖼️ Midjourney - Generación de Imágenes",
                    enlace: "https://platzi.com/cursos/midjourney/"
                },
                {
                    nombre: "🎨 Stable Diffusion - IA Artística",
                    enlace: "https://platzi.com/cursos/sd/"
                }
            ]
        },
        {
            fuente: "Platzi",
            curso: "⚖️ IA Ética y Comunicación",
            acceso: "https://platzi.com/cursos/ingles-ia/",
            tiempo: "3 horas",
            prioridad: "Vanguardia", // 🚀 IA ÉTICA
            expandible: true,
            subcursos: [
                {
                    nombre: "🌐 Inglés para el Uso de IA",
                    enlace: "https://platzi.com/cursos/ingles-ia/"
                },
                {
                    nombre: "⚖️ Ética y Manejo de Datos en IA",
                    enlace: "https://platzi.com/cursos/etica-ia/"
                },
                {
                    nombre: "🎨 Diseño Ético para Productos con IA",
                    enlace: "https://platzi.com/cursos/diseno-etico-ia/"
                }
            ]
        }
    ]
});

console.log('✅ Componente Transversal IA con prioridades cargado - 7 cursos clasificados');