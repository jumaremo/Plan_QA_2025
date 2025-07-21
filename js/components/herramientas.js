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
                    nombre: "PyCharm - Quick Start Guide",
                    enlace: "https://www.jetbrains.com/help/pycharm/quick-start-guide.html"
                }
            ]
        },
        {
            fuente: "Atlassian",
            curso: "📋 Jira para Testers - Programa Oficial",
            acceso: "https://university.atlassian.com/student/path/815443-jira-fundamentals",
            tiempo: "3 horas",
            prioridad: "Fundamentos", // 🏗️ GESTIÓN PROYECTOS
            expandible: true,
            subcursos: [
                {
                    nombre: "Jira Fundamentals - Atlassian University (25 min + Badge)",
                    enlace: "https://university.atlassian.com/student/path/815443-jira-fundamentals"
                },
                {
                    nombre: "Jira Workflows Guide - Documentación Oficial Actualizada",
                    enlace: "https://www.atlassian.com/software/jira/guides/workflows/overview"
                },
                {
                    nombre: "Work with Workflows - Support Documentation",
                    enlace: "https://support.atlassian.com/jira-cloud-administration/docs/work-with-issue-workflows/"
                },
                {
                    nombre: "Testing Best Practices - Top 7 Management Practices",
                    enlace: "https://community.atlassian.com/t5/Marketplace-Apps-Integrations/Top-7-best-practices-for-test-management-in-Jira/ba-p/1534476"
                },
                {
                    nombre: "Jira for Testers - Complete Feature Guide",
                    enlace: "https://community.atlassian.com/forums/Jira-articles/Exploring-Jira-features-Part-2-Jira-for-Testers/ba-p/2403466"
                },
                {
                    nombre: "Test Case Writing - 6 Best Practices",
                    enlace: "https://community.atlassian.com/t5/Agile-articles/Best-Practices-to-Write-and-Manage-Test-Cases-in-Jira/ba-p/1048283"
                }
            ]
        },
        {
            fuente: "YouTube",
            curso: "🧪 AgileTest - Test Management para Jira",
            acceso: "https://www.youtube.com/watch?time_continue=8&v=FPLP0s3pzT8&embeds_referring_euri=https%3A%2F%2Fteams.microsoft.com%2F&source_ve_path=Mjg2NjY",
            tiempo: "30 minutos",
            prioridad: "Fundamentos" // 🏗️ HERRAMIENTA DE TESTING
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

console.log('✅ Componente Herramientas con prioridades cargado - 7 cursos clasificados');