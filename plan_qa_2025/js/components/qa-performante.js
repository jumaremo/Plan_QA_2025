/**
 * 📦 COMPONENTE: QA PERFORMANTE - SOLO CURSOS 100% GRATUITOS
 * Archivo: js/components/qa-performante.js
 * 
 * NOTA: Cursos de pago movidos a Complementario Habilidades Técnicas:
 * - Udemy: Apache JMeter (~$50-100)
 * - Microsoft Learn: Application Performance Testing (requiere Azure)
 */

window.TrainingPlan.registerComponent({
    name: "QA Performante",
    icon: "⚡",
    borderColor: "#dc3545",
    courses: [
        {
            fuente: "BlazeMeter",
            curso: "BlazeMeter: Performance Testing Learning Plan",
            acceso: "https://university.blazemeter.com/learn/learning-plans/35/blazemeter-performance-testing-learning-plan",
            tiempo: "11h 10m"
        },
        {
            fuente: "Google Aprendizaje",
            curso: "Google Lighthouse - Programa Completo",
            acceso: "https://web.dev/learn/",
            tiempo: "22 horas",
            expandible: true,
            subcursos: [
                {
                    nombre: "Web.dev by Google - Learn Performance",
                    enlace: "https://web.dev/learn/"
                },
                {
                    nombre: "Google Developers - Lighthouse",
                    enlace: "https://developers.google.com/web/tools/lighthouse"
                },
                {
                    nombre: "Chrome DevTools Documentation",
                    enlace: "https://developer.chrome.com/docs/devtools/"
                }
            ]
        },
        {
            fuente: "Google Aprendizaje",
            curso: "Web Performance Fundamentals",
            acceso: "https://web.dev/performance/",
            tiempo: "8 horas"
        },
        {
            fuente: "Google Aprendizaje",
            curso: "Core Web Vitals",
            acceso: "https://web.dev/vitals/",
            tiempo: "4 horas"
        },
        {
            fuente: "Google Aprendizaje",
            curso: "PageSpeed Insights Optimization",
            acceso: "https://pagespeed.web.dev/",
            tiempo: "3 horas"
        },
        {
            fuente: "Google Aprendizaje",
            curso: "Web Performance Metrics",
            acceso: "https://web.dev/metrics/",
            tiempo: "3 horas"
        }
    ]
});

console.log('✅ Componente QA Performante - SOLO CURSOS GRATUITOS cargado');