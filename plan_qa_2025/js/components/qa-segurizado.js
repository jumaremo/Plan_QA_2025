/**
 * 📦 COMPONENTE: QA SEGURIZADO - SOLO CURSOS 100% GRATUITOS
 * Archivo: js/components/qa-segurizado.js
 * 
 * NOTA: Cursos de pago movidos a Complementario Habilidades Técnicas:
 * - SANS: Web Application Security (~$7,000+)
 * - Microsoft: Azure Security Certifications (de pago)
 */

window.TrainingPlan.registerComponent({
    name: "QA Segurizado",
    icon: "🔐",
    borderColor: "#6610f2",
    courses: [
        {
            fuente: "Cisco",
            curso: "Fase 1 - Ciberseguridad - Cisco",
            acceso: "https://www.netacad.com/es/courses/introduction-to-cybersecurity?courseLang=es-XL",
            tiempo: "76 horas",
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
            tiempo: "6 horas"
        },
        {
            fuente: "NIST",
            curso: "Cybersecurity Framework",
            acceso: "https://www.nist.gov/cyberframework",
            tiempo: "10 horas"
        },
        {
            fuente: "PortSwigger",
            curso: "Web Security Academy",
            acceso: "https://portswigger.net/web-security",
            tiempo: "25 horas"
        },
        {
            fuente: "Mozilla",
            curso: "Web Security Guidelines",
            acceso: "https://infosec.mozilla.org/guidelines/web_security",
            tiempo: "4 horas"
        }
    ]
});

console.log('✅ Componente QA Segurizado - CON CISCO ETHICAL HACKER cargado');