/**
 * 🛠️ COMPONENTE: HERRAMIENTAS CON PRIORIDADES
 * Archivo: js/components/herramientas.js
 * Herramientas de desarrollo, IA y productividad clasificadas por importancia
 */

window.TrainingPlan.registerComponent({
    name: "🛠️ Herramientas",
    icon: "🛠️",
    borderColor: "#17a2b8",
    courses: [
        // === FUNDAMENTOS (HERRAMIENTAS ESENCIALES) ===
        {
            fuente: "One Drive",
            curso: "📝 Markdown - Documentación Técnica",
            acceso: "https://siesa1-my.sharepoint.com/:f:/g/personal/jmreinam_siesa_com/Et6mwQMpIpZHr9sCV_s2HsgBbM1bbqtRUoyazeOb4S00jA?e=v4Y95b",
            tiempo: "4 horas",
            prioridad: "Fundamentos" // 🏗️ DOCUMENTACIÓN BÁSICA
        },
        {
            fuente: "One Drive",
            curso: "💻 Tabby Terminal - Optimización QA",
            acceso: "https://siesa1-my.sharepoint.com/:f:/g/personal/jmreinam_siesa_com/EsHbGtmj9w1MrQFM_Hg3TPwBULxkI7rnjpn5Axj08v0UyA?e=Gei2wK",
            tiempo: "4 horas",
            prioridad: "Fundamentos" // 🏗️ TERMINAL ESENCIAL
        },
        {
            fuente: "GitLab Learn",
            curso: "🦊 Control de Versiones - Programa Completo",
            acceso: "Múltiples fuentes especializadas",
            tiempo: "16 horas",
            prioridad: "Fundamentos", // 🏗️ GIT ESENCIAL
            expandible: true,
            subcursos: [
                {
                    nombre: "GitLab University - Curso Oficial",
                    enlace: "https://university.gitlab.com/"
                },
                {
                    nombre: "GitLab Docs - Tutoriales Oficiales",
                    enlace: "https://docs.gitlab.com/tutorials/"
                },
                {
                    nombre: "Git Tutorial - Documentación Oficial",
                    enlace: "https://git-scm.com/docs/gittutorial"
                },
                {
                    nombre: "TortoiseGit - Interface Gráfica",
                    enlace: "https://tortoisegit.org/docs/"
                }
            ]
        },
        {
            fuente: "Microsoft Learning",
            curso: "🔧 IDEs de Desarrollo - Herramientas Esenciales",
            acceso: "Plataformas oficiales de desarrollo",
            tiempo: "3 horas",
            prioridad: "Fundamentos", // 🏗️ IDEs BÁSICOS
            expandible: true,
            subcursos: [
                {
                    nombre: "VS Code - Getting Started",
                    enlace: "https://code.visualstudio.com/docs/introvideos/basics"
                },
                {
                    nombre: "PyCharm - Learn Basics",
                    enlace: "https://www.jetbrains.com/pycharm/learn/"
                }
            ]
        },
        {
            fuente: "Jira",
            curso: "📋 Gestión de Proyectos - Jira para Testers",
            acceso: "https://www.linkedin.com/posts/karina-n-paredes_jira-para-testers-activity-7348712595631079424-nMQI",
            tiempo: "2 horas",
            prioridad: "Fundamentos" // 🏗️ GESTIÓN PROYECTOS
        },

        // === ESPECIALIZACIÓN (IA TOOLKIT AVANZADO) ===
        {
            fuente: "Herramientas IA",
            curso: "🤖 Inteligencia Artificial - Toolkit Completo",
            acceso: "Plataformas de IA especializadas",
            tiempo: "25+ horas",
            prioridad: "Especialización", // ⚡ IA AVANZADA
            expandible: true,
            subcursos: [
                {
                    nombre: "📚 NotebookLM - Análisis de Documentos",
                    enlace: "https://notebooklm.google.com/"
                },
                {
                    nombre: "💬 ChatGPT - Automatización de Tareas",
                    enlace: "https://chat.openai.com/"
                },
                {
                    nombre: "🎨 Canva - Diseño de Presentaciones",
                    enlace: "https://www.canva.com/"
                },
                {
                    nombre: "💎 Gemini - IA de Google",
                    enlace: "https://gemini.google.com/"
                },
                {
                    nombre: "🖼️ Midjourney - Generación de Imágenes",
                    enlace: "https://www.midjourney.com/"
                },
                {
                    nombre: "🗺️ Mylens.ai - Mapas Visuales y Flujos",
                    enlace: "https://mylens.ai/"
                },
                {
                    nombre: "🤖 Claude AI - Consultas Avanzadas",
                    enlace: "https://claude.ai/"
                },
                {
                    nombre: "🔷 Copilot - Productividad Microsoft",
                    enlace: "https://copilot.microsoft.com/"
                },
                {
                    nombre: "🎵 Mureka - Creación Musical",
                    enlace: "https://www.mureka.ai/"
                },
                {
                    nombre: "🔍 DeepSeek - IA Avanzada (Por Explorar)",
                    enlace: "https://www.deepseek.com/"
                }
            ]
        }
    ]
});

console.log('✅ Componente Herramientas con prioridades cargado - 6 cursos clasificados');