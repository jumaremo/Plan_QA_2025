/**
 * 📚 COMPONENTE: COMPLEMENTARIO HABILIDADES TÉCNICAS
 * Archivo: js/components/complementario-tecnico.js
 * Formación técnica completa: Python, Testing, Seguridad, Inglés y Certificaciones
 */

window.TrainingPlan.registerComponent({
    name: "📚 Complementario Habilidades Técnicas",
    icon: "📚",
    borderColor: "#795548",
    courses: [
        // === PYTHON - FUNDAMENTOS Y AVANZADO ===
        {
            fuente: "Platzi",
            curso: "🐍 Python - Programa Completo de Fundamentos",
            acceso: "https://platzi.com/cursos/python/",
            tiempo: "22 horas",
            expandible: true,
            subcursos: [
                {
                    nombre: "🎯 Curso de Python Básico",
                    enlace: "https://platzi.com/cursos/python/"
                },
                {
                    nombre: "🔧 Python: Comprehensions, Funciones y Manejo de Errores",
                    enlace: "https://platzi.com/cursos/python-funciones/"
                },
                {
                    nombre: "📊 Estructuras de Datos Lineales con Python",
                    enlace: "https://platzi.com/cursos/estructuras-datos-python/"
                },
                {
                    nombre: "⚡ Complejidad Algorítmica con Python",
                    enlace: "https://platzi.com/cursos/algoritmos-python/"
                },
                {
                    nombre: "🏆 21 días de Python - Challenge",
                    enlace: "https://platzi.com/cursos/python-21-dias/"
                }
            ]
        },
        {
            fuente: "Cisco",
            curso: "🐍 Python Cisco - Certificación Profesional",
            acceso: "https://www.netacad.com/es/courses/python-essentials-1",
            tiempo: "70 horas",
            expandible: true,
            subcursos: [
                {
                    nombre: "📚 Fundamentos de Python 1",
                    enlace: "https://www.netacad.com/es/courses/python-essentials-1?courseLang=es-XL"
                },
                {
                    nombre: "🚀 Fundamentos de Python 2",
                    enlace: "https://www.netacad.com/es/courses/python-essentials-2?courseLang=es-XL"
                }
            ]
        },
        {
            fuente: "Platzi",
            curso: "💻 Programación Básica - Fundamentos",
            acceso: "https://platzi.com/cursos/programacion-basica/",
            tiempo: "15 horas"
        },

        // === TESTING Y AUTOMATIZACIÓN AVANZADA ===
        {
            fuente: "TAU",
            curso: "🧪 Testing Paths - Especialización Avanzada",
            acceso: "https://testautomationu.applitools.com/learningpaths.html",
            tiempo: "40 horas",
            expandible: true,
            subcursos: [
                {
                    nombre: "🌲 Cypress Path",
                    enlace: "https://testautomationu.applitools.com/learningpaths.html?id=cypress-path"
                },
                {
                    nombre: "⚙️ C# Testing Path",
                    enlace: "https://testautomationu.applitools.com/learningpaths.html?id=csharp-web-ui-path"
                },
                {
                    nombre: "🎭 Playwright Path",
                    enlace: "https://testautomationu.applitools.com/learningpaths.html?id=playwright-path"
                }
            ]
        },
        {
            fuente: "Udemy",
            curso: "🤖 Testing Especializado - Cursos Master",
            acceso: "https://www.udemy.com/course/master-robot-framework-nivel-1-en-espanol/",
            tiempo: "41 horas",
            expandible: true,
            subcursos: [
                {
                    nombre: "🤖 Master: Robot Framework con Python QA",
                    enlace: "https://www.udemy.com/course/master-robot-framework-nivel-1-en-espanol/"
                },
                {
                    nombre: "⚡ Master: Pruebas de Rendimiento con JMeter",
                    enlace: "https://www.udemy.com/course/master-pruebas-de-rendimiento-con-apache-jmeter-espanol/"
                }
            ]
        },
        {
            fuente: "Microsoft Learning",
            curso: "🔬 Microsoft Testing - Programa Oficial",
            acceso: "https://learn.microsoft.com/en-us/shows/software-testing-fundamentals/",
            tiempo: "15 horas",
            expandible: true,
            subcursos: [
                {
                    nombre: "📚 Software Testing Fundamentals",
                    enlace: "https://learn.microsoft.com/en-us/shows/software-testing-fundamentals/"
                },
                {
                    nombre: "🧪 Introduction to Software Testing Concepts",
                    enlace: "https://learn.microsoft.com/en-us/dotnet/core/testing/"
                },
                {
                    nombre: "🤖 Introduction to Test Automation",
                    enlace: "https://learn.microsoft.com/en-us/training/modules/introduction-test-automation/"
                }
            ]
        },
        {
            fuente: "Google Aprendizaje",
            curso: "🔍 Google Testing - Learn Testing",
            acceso: "https://web.dev/learn/testing/",
            tiempo: "8 horas"
        },

        // === SEGURIDAD INFORMÁTICA COMPLETA ===
        {
            fuente: "Platzi",
            curso: "🔐 Ciberseguridad - Programa Completo",
            acceso: "https://platzi.com/cursos/intro-ciberseguridad-empresas/",
            tiempo: "47 horas",
            expandible: true,
            subcursos: [
                {
                    nombre: "🏢 Ciberseguridad y Privacidad para Empresas",
                    enlace: "https://platzi.com/cursos/intro-ciberseguridad-empresas/"
                },
                {
                    nombre: "📖 Guía para Aprender Seguridad Informática",
                    enlace: "https://platzi.com/cursos/guia-seguridad-informatica/"
                },
                {
                    nombre: "💻 Introducción a la Terminal y Línea de Comandos",
                    enlace: "https://platzi.com/cursos/terminal/"
                },
                {
                    nombre: "📋 Preparación Certificación ISO 27001",
                    enlace: "https://platzi.com/cursos/iso-27001/"
                },
                {
                    nombre: "⚙️ Seguridad Informática para Equipos Técnicos",
                    enlace: "https://platzi.com/cursos/seguridad-empresas/"
                },
                {
                    nombre: "🎭 Introducción a la Ingeniería Social",
                    enlace: "https://platzi.com/cursos/ingenieria-social/"
                },
                {
                    nombre: "🛡️ DLP: Prevención de Pérdida de Datos",
                    enlace: "https://platzi.com/cursos/dlp/"
                },
                {
                    nombre: "🌐 Redes Informáticas de Internet",
                    enlace: "https://platzi.com/cursos/redes/"
                },
                {
                    nombre: "🔧 Redes de Internet - Profesional",
                    enlace: "https://platzi.com/cursos/avanzado-redes/"
                },
                {
                    nombre: "🐧 Introducción a la Administración de Servidores Linux",
                    enlace: "https://platzi.com/cursos/linux/"
                },
                {
                    nombre: "⚙️ Administración de Servidores Linux: Recursos",
                    enlace: "https://platzi.com/cursos/servidores-linux/"
                },
                {
                    nombre: "🔍 Introducción al Pentesting",
                    enlace: "https://platzi.com/cursos/intro-pentesting/"
                },
                {
                    nombre: "🧠 Inteligencia para la Ciberseguridad",
                    enlace: "https://platzi.com/cursos/ciberseguridad/"
                },
                {
                    nombre: "📊 Escaneo Activo y Análisis de Vulnerabilidades",
                    enlace: "https://platzi.com/cursos/inteligencia-activa/"
                },
                {
                    nombre: "🌐 Pentesting a Redes",
                    enlace: "https://platzi.com/cursos/pentesting-redes/"
                },
                {
                    nombre: "💥 Hacking: Pentesting con Metasploit",
                    enlace: "https://platzi.com/cursos/metasploit/"
                },
                {
                    nombre: "🌍 Hacking de Aplicaciones Web - Server Side",
                    enlace: "https://platzi.com/cursos/hacking-aplicaciones-web-server-side/"
                },
                {
                    nombre: "🔍 Informática Forense",
                    enlace: "https://platzi.com/cursos/forense/"
                },
                {
                    nombre: "⚖️ Hacking Ético",
                    enlace: "https://platzi.com/cursos/ethical-hacking/"
                },
                {
                    nombre: "🦠 Introducción al Análisis de Malware",
                    enlace: "https://platzi.com/cursos/introduccion-malware/"
                },
                {
                    nombre: "📱 Análisis de Malware en Dispositivos Móviles",
                    enlace: "https://platzi.com/cursos/malware-moviles/"
                }
            ]
        },
        {
            fuente: "Kali Linux",
            curso: "⚔️ Pentesting Profesional - Certificaciones OffSec",
            acceso: "https://www.offsec.com/courses/pen-200/",
            tiempo: "1217 horas",
            expandible: true,
            subcursos: [
                {
                    nombre: "🎯 PEN-200 (PWK/OSCP) - 316 horas",
                    enlace: "https://www.offsec.com/courses/pen-200/"
                },
                {
                    nombre: "🌐 WEB-200 (WAWK/OSWA) - 224 horas",
                    enlace: "https://www.offsec.com/courses/web-200/"
                },
                {
                    nombre: "🚀 PEN-300 (ETBD/OSEP) - 677 horas",
                    enlace: "https://www.offsec.com/courses/pen-300/"
                }
            ]
        },

        // === INGLÉS TÉCNICO COMPLETO ===
        {
            fuente: "Platzi",
            curso: "🌍 Inglés Técnico - Especialización",
            acceso: "https://platzi.com/cursos/ingleschatgpt/",
            tiempo: "2 horas",
            expandible: true,
            subcursos: [
                {
                    nombre: "🤖 Inglés Práctico con ChatGPT",
                    enlace: "https://platzi.com/cursos/ingleschatgpt/"
                },
                {
                    nombre: "📚 Preparación para TOEFL",
                    enlace: "https://platzi.com/cursos/toefl-preparation/"
                }
            ]
        },
        {
            fuente: "SENA",
            curso: "🎓 Inglés SENA - Programa Completo (13 Niveles)",
            acceso: "https://english-level-1a.netlify.app/",
            tiempo: "Por definir",
            expandible: true,
            subcursos: [
                {
                    nombre: "📚 Level 1a Resources",
                    enlace: "https://english-level-1a.netlify.app/"
                },
                {
                    nombre: "📚 Level 1b Resources",
                    enlace: "https://english-level-1b.netlify.app/"
                },
                {
                    nombre: "📚 Level 1c Resources",
                    enlace: "https://english-level-1c.netlify.app/"
                },
                {
                    nombre: "📚 Level 2a Resources",
                    enlace: "https://english-level-2a.netlify.app/"
                },
                {
                    nombre: "📚 Level 2b Resources",
                    enlace: "https://english-level-2b.netlify.app/"
                },
                {
                    nombre: "📚 Level 2c Resources",
                    enlace: "https://english-level-2c.netlify.app/"
                },
                {
                    nombre: "📚 Level 3a Resources",
                    enlace: "https://english-level-3a.netlify.app/"
                },
                {
                    nombre: "📚 Level 3b Resources",
                    enlace: "https://english-level-3b.netlify.app/"
                },
                {
                    nombre: "📚 Level 3c Resources",
                    enlace: "https://english-level-3c.netlify.app/"
                },
                {
                    nombre: "📚 Level 4a Resources",
                    enlace: "https://english-level-4a.netlify.app/"
                },
                {
                    nombre: "📚 Level 4b Resources",
                    enlace: "https://english-level-4b.netlify.app/"
                },
                {
                    nombre: "📚 Level 4c Resources",
                    enlace: "https://english-level-4c.netlify.app/"
                },
                {
                    nombre: "📚 Level 5a Resources",
                    enlace: "https://english-level-5a.netlify.app/"
                },
                {
                    nombre: "📚 Level 5b Resources",
                    enlace: "https://english-level-5b.netlify.app/"
                },
                {
                    nombre: "📚 Level 5c Resources",
                    enlace: "https://english-level-5c.netlify.app/"
                },
                {
                    nombre: "📚 Level 6a Resources",
                    enlace: "https://english-level-6a.netlify.app/"
                },
                {
                    nombre: "📚 Level 6b Resources",
                    enlace: "https://english-level-6b.netlify.app/"
                },
                {
                    nombre: "📚 Level 7a Resources",
                    enlace: "https://english-level-7a.netlify.app/"
                },
                {
                    nombre: "📚 Level 7b Resources",
                    enlace: "https://english-level-7b.netlify.app/"
                },
                {
                    nombre: "📚 Level 7c Resources",
                    enlace: "https://english-level-7c.netlify.app/"
                },
                {
                    nombre: "📚 Level 8a Resources",
                    enlace: "https://english-level-8a.netlify.app/"
                },
                {
                    nombre: "📚 Level 8b Resources",
                    enlace: "https://english-level-8b.netlify.app/"
                },
                {
                    nombre: "📚 Level 8c Resources",
                    enlace: "https://english-level-8c.netlify.app/"
                },
                {
                    nombre: "📚 Level 9a Resources",
                    enlace: "https://english-level-9a.netlify.app/"
                },
                {
                    nombre: "📚 Level 9b Resources",
                    enlace: "https://english-level-9b.netlify.app/"
                },
                {
                    nombre: "📚 Level 9c Resources",
                    enlace: "https://english-level-9c.netlify.app/"
                },
                {
                    nombre: "📚 Level 10a Resources",
                    enlace: "https://english-level-10a.netlify.app/"
                },
                {
                    nombre: "📚 Level 10b Resources",
                    enlace: "https://english-level-10b.netlify.app/"
                },
                {
                    nombre: "📚 Level 11a Resources",
                    enlace: "https://english-level-11a.netlify.app/"
                },
                {
                    nombre: "📚 Level 11b Resources",
                    enlace: "https://english-level-11b.netlify.app/"
                },
                {
                    nombre: "📚 Level 11c Resources",
                    enlace: "https://english-level-11c.netlify.app/"
                },
                {
                    nombre: "📚 Level 12a Resources",
                    enlace: "https://english-level-12a.netlify.app/"
                },
                {
                    nombre: "📚 Level 12b Resources",
                    enlace: "https://english-level-12b.netlify.app/"
                },
                {
                    nombre: "📚 Level 13a Resources",
                    enlace: "https://english-level-13a.netlify.app/"
                },
                {
                    nombre: "📚 Level 13b Resources",
                    enlace: "https://english-level-13b.netlify.app/"
                },
                {
                    nombre: "📚 Level 13c Resources",
                    enlace: "https://english-level-13c.netlify.app/"
                }
            ]
        }
    ]
});

console.log('✅ Componente Complementario Habilidades Técnicas cargado - 11 cursos principales, 1400+ horas totales, 70+ subcursos');