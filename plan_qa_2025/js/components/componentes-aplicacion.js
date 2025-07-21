/**
 * 🧩 COMPONENTE: COMPONENTES DE APLICACIÓN
 * Archivo: js/components/componentes-aplicacion.js
 * SDK y módulos específicos de Siesa Business para QA especializado
 */

window.TrainingPlan.registerComponent({
    name: "🧩 Componentes de Aplicación",
    icon: "🧩",
    borderColor: "#9c27b0",
    courses: [
        // === SDK SIESA DEVELOPER ===
        {
            fuente: "SDK Docs",
            curso: "⚙️ SDK Siesa Developer - Documentación Técnica",
            acceso: "https://sdk-docs.siesadev.com/login",
            tiempo: "Por definir",
            nota: "⚠️ Cursos por validar con Tole - Pendiente de consolidación"
        },

        // === MÓDULOS SIESA BUSINESS ===
        {
            fuente: "Producto Siesa Business",
            curso: "👥 Módulos Siesa Business - Especialización Funcional",
            acceso: "https://gitlab.siesadev.com/",
            tiempo: "Por definir",
            expandible: true,
            subcursos: [
                {
                    nombre: "👔 HCM - 8 Flujos de Gestión Humana",
                    enlace: "Enlace GitLab pendiente por consolidar"
                },
                {
                    nombre: "💰 Financiero - Flujos de Contabilización",
                    enlace: "Enlace GitLab pendiente por consolidar"
                },
                {
                    nombre: "💵 Nómina - Flujos de Nómina",
                    enlace: "Enlace GitLab pendiente por consolidar"
                }
            ]
        }
    ]
});

console.log('✅ Componente Componentes de Aplicación cargado - 2 cursos principales (pendientes de consolidación)');