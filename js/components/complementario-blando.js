/**
 * 💭 COMPONENTE: COMPLEMENTARIO HABILIDADES BLANDAS CON PRIORIDADES
 * Archivo: js/components/complementario-blando.js
 * Desarrollo de habilidades de liderazgo, innovación y gestión clasificadas
 */

window.TrainingPlan.registerComponent({
    name: "💭 Complementario Habilidades Blandas",
    icon: "💭",
    borderColor: "#795548",
    courses: [
        // === FUNDAMENTOS (CULTURA E INSPIRACIÓN) ===
        {
            fuente: "Platzi",
            curso: "📚 Historia de la Innovación y el Emprendimiento - Diana Uribe",
            acceso: "https://platzi.com/cursos/historia-innovacion/",
            tiempo: "2 horas",
            prioridad: "Fundamentos", // 🏗️ CULTURA INNOVACIÓN
            expandible: true,
            subcursos: [
                {
                    nombre: "🎬 Presentación de la Nueva Experiencia Educativa",
                    enlace: "https://platzi.com/cursos/historia-innovacion/platzi-te-presenta-una-nueva-experiencia-educativa/"
                },
                {
                    nombre: "📖 Las Historias que te Contaremos",
                    enlace: "https://platzi.com/cursos/historia-innovacion/las-historias-que-te-contaremos/"
                },
                {
                    nombre: "⚡ Inventores Clave en la Historia de la Electricidad",
                    enlace: "https://platzi.com/cursos/historia-innovacion/los-inventores-de-la-electricidad/"
                },
                {
                    nombre: "🎭 Walt Disney y Coco Chanel - Emprendimiento Cotidiano",
                    enlace: "https://platzi.com/cursos/historia-innovacion/emprender-para-la-vida-cotidiana-y-el-entretenimie/"
                },
                {
                    nombre: "📞 Innovación y Tragedia: Teléfono y Computador",
                    enlace: "https://platzi.com/cursos/historia-innovacion/el-emprendimiento-desde-la-diferencia/"
                },
                {
                    nombre: "💻 Historia del Computador Personal",
                    enlace: "https://platzi.com/cursos/historia-innovacion/los-inventores-de-un-mundo-ya-inventado/"
                },
                {
                    nombre: "🚀 Pioneras de la Innovación Tecnológica y Espacial",
                    enlace: "https://platzi.com/cursos/historia-innovacion/las-mujeres-que-nos-llevaron-a-las-estrellas/"
                }
            ]
        },
        {
            fuente: "Platzi",
            curso: "👥 Liderazgo para Alta Gerencia",
            acceso: "https://platzi.com/cursos/alta-gerencia/",
            tiempo: "1 hora",
            prioridad: "Fundamentos" // 🏗️ LIDERAZGO BÁSICO
        },
        {
            fuente: "Platzi",
            curso: "⚡ Motivación para Equipos de Trabajo",
            acceso: "https://platzi.com/cursos/motivacion-equipos/",
            tiempo: "1 hora",
            prioridad: "Fundamentos" // 🏗️ MOTIVACIÓN BÁSICA
        },

        // === ESPECIALIZACIÓN (LIDERAZGO AVANZADO) ===
        {
            fuente: "Platzi",
            curso: "🧠 Liderazgo Intermedio - Comportamientos",
            acceso: "https://platzi.com/cursos/liderazgo-comportamientos/",
            tiempo: "1 hora",
            prioridad: "Especialización" // ⚡ LIDERAZGO INTERMEDIO
        },
        {
            fuente: "Platzi",
            curso: "🌟 Identificación y Retención de Talento",
            acceso: "https://platzi.com/cursos/retencion-talento/",
            tiempo: "1 hora",
            prioridad: "Especialización" // ⚡ GESTIÓN TALENTO
        },
        {
            fuente: "Platzi",
            curso: "📊 Liderazgo Intermedio - Evaluación de Comportamientos",
            acceso: "https://platzi.com/cursos/liderazgo-contingencia/",
            tiempo: "1 hora",
            prioridad: "Especialización" // ⚡ EVALUACIÓN AVANZADA
        },
        {
            fuente: "Platzi",
            curso: "🤝 Liderazgo para Equipos de Trabajo",
            acceso: "https://platzi.com/cursos/liderazgo-equipos/",
            tiempo: "3 horas",
            prioridad: "Especialización" // ⚡ LIDERAZGO EQUIPOS
        }
    ]
});

console.log('✅ Componente Complementario Habilidades Blandas con prioridades cargado - 7 cursos clasificados');