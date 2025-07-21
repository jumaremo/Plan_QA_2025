/**
 * ⚡ COMPONENTE: QA PERFORMANTE CON PRIORIDADES
 * Archivo: js/components/qa-performante.js
 * Testing de rendimiento clasificado como especialización técnica
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
            tiempo: "11h 10m",
            prioridad: "Especialización" // ⚡ SKILL AVANZADO
        },
        {
            fuente: "Google Aprendizaje",
            curso: "Google Lighthouse - Programa Completo",
            acceso: "https://web.dev/learn/",
            tiempo: "22 horas",
            prioridad: "Especialización", // ⚡ PERFORMANCE WEB
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
            tiempo: "8 horas",
            prioridad: "Especialización" // ⚡ FUNDAMENTOS PERFORMANCE
        },
        {
            fuente: "Google Aprendizaje",
            curso: "Core Web Vitals",
            acceso: "https://web.dev/vitals/",
            tiempo: "4 horas",
            prioridad: "Especialización" // ⚡ MÉTRICAS CLAVE
        },
        {
            fuente: "Google Aprendizaje",
            curso: "PageSpeed Insights Optimization",
            acceso: "https://pagespeed.web.dev/",
            tiempo: "3 horas",
            prioridad: "Especialización" // ⚡ OPTIMIZACIÓN
        },
        {
            fuente: "Google Aprendizaje",
            curso: "Web Performance Metrics",
            acceso: "https://web.dev/metrics/",
            tiempo: "3 horas",
            prioridad: "Especialización" // ⚡ ANÁLISIS MÉTRICAS
        }
    ]
});

console.log('✅ Componente QA Performante con prioridades cargado - 6 cursos ESPECIALIZACIÓN');