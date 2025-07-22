/**
 * 🧩 COMPONENTE: COMPONENTES DE APLICACIÓN CON PRIORIDADES
 * Archivo: js/components/componentes-aplicacion.js
 * SDK y módulos específicos de Siesa Business para QA especializado
 */

window.TrainingPlan.registerComponent({
    name: "🧩 Componentes de Aplicación",
    icon: "🧩",
    borderColor: "#9c27b0",
    courses: [
        // === ESPECIALIZACIÓN (SDK SIESA) ===
        {
            fuente: "SDK Docs",
            curso: "⚙️ SDK Siesa Developer - Documentación Técnica",
            acceso: "https://sdk-docs.siesadev.com/login",
            tiempo: "Por definir",
            prioridad: "Especialización", // ⚡ ESPECÍFICO SIESA
            nota: "⚠️ Cursos por validar con Tole - Pendiente de consolidación"
        },

        // === ESPECIALIZACIÓN (MÓDULOS SIESA BUSINESS) ===
        {
            fuente: "Producto Siesa Business",
            curso: "👥 Módulos Siesa Business - Especialización Funcional",
            acceso: "https://gitlab.siesadev.com/users/sign_in",
            tiempo: "Por definir",
            prioridad: "Especialización", // ⚡ FUNCIONAL SIESA
            expandible: true,
            subcursos: [
                {
                    nombre: "👔 HCM - 8 Flujos de Gestión Humana",
                    enlace: "https://gitlab.siesadev.com/users/sign_in"
                },
                {
                    nombre: "💰 Financiero - Flujos de Contabilización",
                    enlace: "https://gitlab.siesadev.com/users/sign_in"
                },
                {
                    nombre: "💵 Nómina - Flujos de Nómina",
                    enlace: "https://gitlab.siesadev.com/users/sign_in"
                }
            ]
        }
    ]
});

console.log('✅ Componente Componentes de Aplicación con prioridades cargado - 2 cursos ESPECIALIZACIÓN');