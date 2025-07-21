/**
 * ⭐ COMPONENTE: MANDATORIOS SIESA
 * Archivo: js/components/mandatorios-siesa.js
 * Cursos obligatorios sobre ADN Siesa y habilidades blandas corporativas
 */

window.TrainingPlan.registerComponent({
    name: "⭐ Mandatorios Siesa",
    icon: "⭐",
    borderColor: "#e91e63",
    courses: [
        // === ADN SIESA - HABILIDADES BLANDAS CORPORATIVAS ===
        {
            fuente: "Universidad Mi Siesa",
            curso: "🧬 ADN Siesa - Programa de Habilidades Blandas Corporativas",
            acceso: "https://www.miuniversidadsiesa.com/",
            tiempo: "2 horas",
            expandible: true,
            subcursos: [
                {
                    nombre: "🔍 Descubriendo juntos el ADN Siesa",
                    enlace: "https://view.genially.com/672d42ca9e275235cf525b3e/learning-experience-didactic-unit-adn-siesa"
                },
                {
                    nombre: "🚀 Líderes Empoderados: Elevando tu Potencial",
                    enlace: "https://view.genially.com/66f8a86ff6a2b8abad784f52/interactive-content-situacion-de-aprendizaje"
                },
                {
                    nombre: "🤝 Construyendo Relaciones de Valor",
                    enlace: "https://view.genially.com/679ce05fd310da4717dbc9b1"
                },
                {
                    nombre: "💬 Desbloqueando Potencial - Comunicación que Impacta",
                    enlace: "https://view.genially.com/678e75fb199ebf09584da9e5"
                }
            ]
        }
    ]
});

console.log('✅ Componente Mandatorios Siesa cargado - 1 curso principal, 2 horas totales');