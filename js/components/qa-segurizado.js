/**
 * 🔐 COMPONENTE: QA SEGURIZADO CON PRIORIDADES
 * Archivo: js/components/qa-segurizado.js
 * Seguridad QA clasificada por nivel de especialización
 */

window.TrainingPlan.registerComponent({
    name: "QA Segurizado",
    icon: "🔐",
    borderColor: "#6610f2",
    courses: [
        // === ESPECIALIZACIÓN (SEGURIDAD BÁSICA) ===
        {
            fuente: "Cisco",
            curso: "Fase 1 - Ciberseguridad - Cisco",
            acceso: "https://www.netacad.com/es/courses/introduction-to-cybersecurity?courseLang=es-XL",
            tiempo: "76 horas",
            prioridad: "Especialización", // ⚡ FUNDAMENTOS SECURITY
            expandible: true,
            subcursos: [
                {
                    nombre: "Introducción a Ciberseguridad",
                    enlace: "https://www.netacad.com/es/courses/introduction-to-cybersecurity?courseLang=es-XL"
                },
                {
                    nombre: "Ethical Hacker",
                    enlace: "https://www.netacad.com/es/courses/ethical-hacker?courseLang=en-US"
                }
            ]
        },
        {
            fuente: "OWASP",
            curso: "OWASP - Programa de Seguridad Completo",
            acceso: "https://owasp.org/www-project-webgoat/",
            tiempo: "33 horas",
            prioridad: "Especialización", // ⚡ SECURITY TESTING
            expandible: true,
            subcursos: [
                {
                    nombre: "OWASP WebGoat",
                    enlace: "https://owasp.org/www-project-webgoat/"
                },
                {
                    nombre: "OWASP Top 10 Training + Cheat Sheets",
                    enlace: "https://owasp.org/www-project-top-ten/"
                },
                {
                    nombre: "OWASP Security Knowledge Framework (SKF)",
                    enlace: "https://www.securityknowledgeframework.org/"
                }
            ]
        },
        {
            fuente: "Google Aprendizaje",
            curso: "Google Security Best Practices",
            acceso: "https://developers.google.com/web/fundamentals/security",
            tiempo: "6 horas",
            prioridad: "Especialización" // ⚡ BEST PRACTICES
        },
        {
            fuente: "NIST",
            curso: "Cybersecurity Framework",
            acceso: "https://www.nist.gov/cyberframework",
            tiempo: "10 horas",
            prioridad: "Especialización" // ⚡ FRAMEWORK ESTÁNDAR
        },

        // === VANGUARDIA (PENTESTING AVANZADO) ===
        {
            fuente: "PortSwigger",
            curso: "Web Security Academy",
            acceso: "https://portswigger.net/web-security",
            tiempo: "25 horas",
            prioridad: "Vanguardia" // 🚀 PENTESTING AVANZADO
        },
        {
            fuente: "Mozilla",
            curso: "Web Security Guidelines",
            acceso: "https://infosec.mozilla.org/guidelines/web_security",
            tiempo: "4 horas",
            prioridad: "Vanguardia" // 🚀 GUIDELINES AVANZADAS
        }
    ]
});

console.log('✅ Componente QA Segurizado con prioridades cargado - 6 cursos clasificados');