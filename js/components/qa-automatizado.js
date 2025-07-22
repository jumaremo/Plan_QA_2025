/**
 * 🤖 COMPONENTE: QA AUTOMATIZADO CON PRIORIDADES
 * Archivo: js/components/qa-automatizado.js
 * Testing automatizado y frameworks clasificados por importancia
 */

window.TrainingPlan.registerComponent({
    name: "🤖 QA Automatizado",
    icon: "🤖",
    borderColor: "#ffc107",
    courses: [
        // === AUTOMATIZACIÓN (PRIORIDAD CORE) ===
        {
            fuente: "Platzi",
            curso: "🤖 QA y Automatización de Pruebas - Platzi",
            acceso: "https://platzi.com/cursos/automatizacion-pruebas/",
            tiempo: "29 horas",
            prioridad: "Automatización", // 🤖 NIVEL 2
            expandible: true,
            subcursos: [
                {
                    nombre: "Curso de Introducción a la Automatización de Pruebas",
                    enlace: "https://platzi.com/cursos/automatizacion-pruebas/"
                },
                {
                    nombre: "Curso de Introducción a Automatización de Pruebas con Puppeteer",
                    enlace: "https://platzi.com/cursos/puppeteer/"
                },
                {
                    nombre: "Curso Avanzado de Automatización de Pruebas con Puppeteer",
                    enlace: "https://platzi.com/cursos/puppeteer-avanzado/"
                },
                {
                    nombre: "Curso de Automatización de Test con Playwright",
                    enlace: "https://platzi.com/cursos/playwright/"
                },
                {
                    nombre: "Curso de Automatización de Pruebas UI con Cypress",
                    enlace: "https://platzi.com/cursos/cypress-ui/"
                },
                {
                    nombre: "Curso de Automatización de Pruebas Backend con Cypress",
                    enlace: "https://platzi.com/cursos/cypress-backend/"
                },
                {
                    nombre: "Curso Avanzado de Cypress",
                    enlace: "https://platzi.com/cursos/cypress-avanzado/"
                },
                {
                    nombre: "Curso de N8N",
                    enlace: "https://platzi.com/cursos/n8n/"
                },
                {
                    nombre: "Curso de Pruebas de Usabilidad",
                    enlace: "https://platzi.com/cursos/usabilidad-practico/"
                },
                {
                    nombre: "Curso de React Testing Library",
                    enlace: "https://platzi.com/cursos/react-testing-library/"
                }
            ]
        },
        {
            fuente: "Moodle Siesa",
            curso: "🐍 Testing Python con Robot Framework",
            acceso: "https://capacitaciones.siesa.com:8099/moodle/course/view.php?id=210",
            tiempo: "24 horas",
            prioridad: "Automatización" // 🤖 NIVEL 2
        },
        {
            fuente: "TAU",
            curso: "🔧 Introduction to Robot Framework",
            acceso: "https://testautomationu.applitools.com/robot-framework-refresh/",
            tiempo: "1 hora",
            prioridad: "Automatización" // 🤖 NIVEL 2
        },
        {
            fuente: "YouTube",
            curso: "📹 Tutorial Robot Framework - Manish Verma (Fundamentos)",
            acceso: "https://www.youtube.com/watch?v=zcT8hSipe2A&list=PLL34mf651faORDOyJrk0E6k9FM-wKgfPV&index=2",
            tiempo: "5+ horas",
            prioridad: "Automatización", // 🤖 NIVEL 2
            expandible: true,
            subcursos: [
                {
                    nombre: "Tutorial n.° 1: Instalar Python y PIP en Mac OS",
                    enlace: "https://www.youtube.com/watch?v=zcT8hSipe2A&list=PLL34mf651faORDOyJrk0E6k9FM-wKgfPV&index=2"
                },
                {
                    nombre: "Tutorial n.º 2: Introducción, instalación de RobotFramework y SeleniumLibrary",
                    enlace: "https://www.youtube.com/watch?v=qnA2P3VBkeA&list=PLL34mf651faORDOyJrk0E6k9FM-wKgfPV&index=2"
                },
                {
                    nombre: "Tutorial n.º 3: Instalación del complemento PyCharm e IntelliBot",
                    enlace: "https://www.youtube.com/watch?v=ZqqIRgNn1vM&list=PLL34mf651faORDOyJrk0E6k9FM-wKgfPV&index=3"
                },
                {
                    nombre: "Tutorial n.° 4: Crear un nuevo proyecto de automatización de Robot Framework",
                    enlace: "https://www.youtube.com/watch?v=ZV47LblOeYA&list=PLL34mf651faORDOyJrk0E6k9FM-wKgfPV&index=4"
                },
                {
                    nombre: "Tutorial n.º 5: Secciones clave del archivo de Robot Framework",
                    enlace: "https://www.youtube.com/watch?v=TPJFqFiq000&list=PLL34mf651faORDOyJrk0E6k9FM-wKgfPV&index=5"
                }
            ]
        },

        // === ROBOT FRAMEWORK ACADEMY (MOVIDO DESDE QA MANUAL) ===
        {
            fuente: "Robot Framework",
            curso: "🤖 Robot Framework Academy - 251 Lecciones Prácticas",
            acceso: "courses/robot-framework-academy/index.html",
            tiempo: "40+ horas",
            prioridad: "Automatización", // 🤖 NIVEL 2 - RECLASIFICADO
            expandible: true,
            subcursos: [
                {
                    nombre: "🏁 Getting Started with Robot Framework",
                    enlace: "courses/robot-framework-academy/index.html"
                },
                {
                    nombre: "🐍 Python for Robot Framework",
                    enlace: "courses/robot-framework-academy/index.html"
                },
                {
                    nombre: "🌐 Web Testing with Robot Framework",
                    enlace: "courses/robot-framework-academy/index.html"
                },
                {
                    nombre: "📱 Mobile Testing with Robot Framework",
                    enlace: "courses/robot-framework-academy/index.html"
                },
                {
                    nombre: "🔧 API Testing with Robot Framework",
                    enlace: "courses/robot-framework-academy/index.html"
                },
                {
                    nombre: "📊 Data-Driven Testing",
                    enlace: "courses/robot-framework-academy/index.html"
                },
                {
                    nombre: "🏗️ Creating Custom Keywords",
                    enlace: "courses/robot-framework-academy/index.html"
                },
                {
                    nombre: "🔧 Advanced Robot Framework Techniques",
                    enlace: "courses/robot-framework-academy/index.html"
                }
            ]
        },

        // === ESPECIALIZACIÓN (HERRAMIENTAS ESPECÍFICAS) ===
        {
            fuente: "YouTube",
            curso: "🎯 Tutorial Robot Framework - XPath & CSS Selectors",
            acceso: "https://www.youtube.com/watch?v=5LV4z_-91WY&list=PLL34mf651faORDOyJrk0E6k9FM-wKgfPV&index=25",
            tiempo: "4+ horas",
            prioridad: "Especialización", // ⚡ NIVEL 3
            expandible: true,
            subcursos: [
                {
                    nombre: "XPath Tutorial n.° 1: Introducción a XPath | Sintaxis básica",
                    enlace: "https://www.youtube.com/watch?v=5LV4z_-91WY&list=PLL34mf651faORDOyJrk0E6k9FM-wKgfPV&index=25"
                },
                {
                    nombre: "XPath Tutorial n.º 2: XPath relativo vs. Absoluto",
                    enlace: "https://www.youtube.com/watch?v=V5vWvs2clBw&list=PLL34mf651faORDOyJrk0E6k9FM-wKgfPV&index=26"
                },
                {
                    nombre: "CSS Selector n.º 1: Introducción a CSS y al selector CSS",
                    enlace: "https://www.youtube.com/watch?v=RUT6fZeLnGk&list=PLL34mf651faORDOyJrk0E6k9FM-wKgfPV&index=36"
                }
            ]
        },
        {
            fuente: "YouTube",
            curso: "🚀 Tutorial Robot Framework - Manish Verma (Avanzado)",
            acceso: "https://www.youtube.com/watch?v=dLhZuf0RKqQ&list=PLL34mf651faORDOyJrk0E6k9FM-wKgfPV&index=44",
            tiempo: "6+ horas",
            prioridad: "Especialización", // ⚡ NIVEL 3
            expandible: true,
            subcursos: [
                {
                    nombre: "Tutorial n.° 25: Cómo gestionar las ventanas del navegador",
                    enlace: "https://www.youtube.com/watch?v=dLhZuf0RKqQ&list=PLL34mf651faORDOyJrk0E6k9FM-wKgfPV&index=44"
                },
                {
                    nombre: "Tutorial #26: How to handle Tabbed Browser Windows",
                    enlace: "https://www.youtube.com/watch?v=D0LOql-_3-s&list=PLL34mf651faORDOyJrk0E6k9FM-wKgfPV&index=45"
                },
                {
                    nombre: "Tutorial #40: How to do Data Driven Testing",
                    enlace: "https://www.youtube.com/watch?v=I4qhmT5vEGs&list=PLL34mf651faORDOyJrk0E6k9FM-wKgfPV&index=59"
                }
            ]
        },

        // === VANGUARDIA (TÉCNICAS AVANZADAS) ===
        {
            fuente: "YouTube",
            curso: "🎨 Selenium CSS Selector Tutorial - Completo",
            acceso: "https://www.youtube.com/watch?v=xDBkWKsntdk&list=PLL34mf651faORDOyJrk0E6k9FM-wKgfPV&index=62",
            tiempo: "1h 15m",
            prioridad: "Vanguardia" // 🚀 NIVEL 4
        },
        {
            fuente: "YouTube",
            curso: "🎨 Selenium XPath Tutorial - Completo",
            acceso: "https://www.youtube.com/watch?v=U0WMFjnbb4I&list=PLL34mf651faORDOyJrk0E6k9FM-wKgfPV&index=63",
            tiempo: "1h 30m",
            prioridad: "Vanguardia" // 🚀 NIVEL 4
        }
    ]
});

console.log('✅ Componente QA Automatizado con prioridades cargado - 10 cursos clasificados');