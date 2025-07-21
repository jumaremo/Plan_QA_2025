/**
 * 🎯 COMPONENTE: OBJETIVOS QA
 * Archivo: js/components/objetivos-qa.js
 * Roadmap de demos e innovaciones en QA con Inteligencia Artificial
 */

window.TrainingPlan.registerComponent({
    name: "🎯 Objetivos QA",
    icon: "🎯",
    borderColor: "#ff9800",
    courses: [
        // === DEMOS PLANIFICADAS 2025-2026 ===
        {
            fuente: "Roadmap QA",
            curso: "🤖 Demo 1: Robotframework-GenAI Multi-Proveedor",
            acceso: "Disponible v1.2+ - Sistema completo",
            tiempo: "Por definir",
            expandible: true,
            subcursos: [
                {
                    nombre: "🤖 Gemini AI - Proveedor Principal",
                    enlace: "Sistema de generación de datos y análisis"
                },
                {
                    nombre: "🌟 Claude AI - Proveedor Secundario",
                    enlace: "Análisis conversacional y API"
                },
                {
                    nombre: "☁️ AWS Bedrock - Proveedor Opcional",
                    enlace: "Infraestructura en la nube"
                },
                {
                    nombre: "🔄 Sistema Multi-Proveedor",
                    enlace: "Cambio dinámico entre proveedores"
                },
                {
                    nombre: "📊 ConfigManager v1.2 Integrado",
                    enlace: "Gestión centralizada de credenciales"
                },
                {
                    nombre: "🔧 AIConfigManager",
                    enlace: "Gestión unificada de múltiples IAs"
                }
            ]
        },
        {
            fuente: "Roadmap QA",
            curso: "🤖 Demo 2: Grabador Inteligente + Autocuración",
            acceso: "Q1-Q2 2025 - Desarrollo interno",
            tiempo: "Por definir",
            expandible: true,
            subcursos: [
                {
                    nombre: "🤖 Claude AI - Grabador Inteligente (Prioridad)",
                    enlace: "Demo2-Claude.zip"
                },
                {
                    nombre: "🌟 Gemini AI - Optimización de Scripts",
                    enlace: "Demo2-Gemini.zip"
                },
                {
                    nombre: "☁️ AWS AI - Análisis de Elementos UI",
                    enlace: "Demo2-AWS.zip"
                },
                {
                    nombre: "🔗 Multi-AI - Autocuración Híbrida",
                    enlace: "Demo2-MultiAI.zip"
                }
            ]
        },
        {
            fuente: "Roadmap QA",
            curso: "📊 Demo 3: Análisis Avanzado + Dashboard",
            acceso: "Q3-Q4 2025 - Desarrollo interno",
            tiempo: "Por definir",
            expandible: true,
            subcursos: [
                {
                    nombre: "☁️ AWS AI - Análisis Predictivo (Prioridad)",
                    enlace: "Demo3-AWS.zip"
                },
                {
                    nombre: "🌟 Gemini AI - Patrones de Fallo",
                    enlace: "Demo3-Gemini.zip"
                },
                {
                    nombre: "🤖 Claude AI - Dashboard Ejecutivo",
                    enlace: "Demo3-Claude.zip"
                },
                {
                    nombre: "🔗 Multi-AI - Orquestador de Análisis",
                    enlace: "Demo3-MultiAI.zip"
                }
            ]
        },
        {
            fuente: "Roadmap QA",
            curso: "🔄 Demo 4: Agente IA de Replicación",
            acceso: "Q3-Q4 2025 - Desarrollo interno",
            tiempo: "Por definir",
            expandible: true,
            subcursos: [
                {
                    nombre: "🔗 Multi-AI - Agente Replicación (Prioridad)",
                    enlace: "Demo4-MultiAI.zip"
                },
                {
                    nombre: "🤖 Claude AI - API Conversacional",
                    enlace: "Demo4-Claude.zip"
                },
                {
                    nombre: "🌟 Gemini AI - Generación de Casos",
                    enlace: "Demo4-Gemini.zip"
                },
                {
                    nombre: "☁️ AWS AI - Base de Conocimiento",
                    enlace: "Demo4-AWS.zip"
                }
            ]
        },
        {
            fuente: "Roadmap QA",
            curso: "🌐 Demo 5: Sistema Universal",
            acceso: "2026 - Desarrollo interno",
            tiempo: "Por definir",
            expandible: true,
            subcursos: [
                {
                    nombre: "🔗 Multi-AI - Orquestador Universal (Prioridad)",
                    enlace: "Demo5-MultiAI.zip"
                },
                {
                    nombre: "🌟 Gemini AI - Cobertura Web/Móvil",
                    enlace: "Demo5-Gemini.zip"
                },
                {
                    nombre: "🤖 Claude AI - Testing Escritorio",
                    enlace: "Demo5-Claude.zip"
                },
                {
                    nombre: "☁️ AWS AI - APIs y Microservicios",
                    enlace: "Demo5-AWS.zip"
                }
            ]
        },

        // === OPORTUNIDADES FUTURAS ===
        {
            fuente: "Roadmap QA",
            curso: "🧪 Demo 6: Laboratorio de IA para QA",
            acceso: "2026+ - Investigación y desarrollo",
            tiempo: "Por definir",
            expandible: true,
            subcursos: [
                {
                    nombre: "📊 Generación de Datos Sintéticos",
                    enlace: "Creación masiva de datos de prueba realistas"
                },
                {
                    nombre: "⚡ Pruebas de Rendimiento Inteligentes",
                    enlace: "Predicción de cuellos de botella"
                },
                {
                    nombre: "♿ Testing de Accesibilidad Automatizado",
                    enlace: "Validación WCAG con IA"
                },
                {
                    nombre: "👥 Pruebas de Usabilidad",
                    enlace: "Simulación de comportamiento de usuario real"
                },
                {
                    nombre: "🔒 Testing de Seguridad",
                    enlace: "Detección automática de vulnerabilidades"
                }
            ]
        },
        {
            fuente: "Roadmap QA",
            curso: "🔄 Demo 7: Integración CI/CD Inteligente",
            acceso: "2026+ - Investigación y desarrollo",
            tiempo: "Por definir",
            expandible: true,
            subcursos: [
                {
                    nombre: "🔧 Pipeline Adaptativo",
                    enlace: "Ajuste automático de estrategia de testing"
                },
                {
                    nombre: "📈 Análisis de Impacto",
                    enlace: "Predicción de áreas afectadas por cambios"
                },
                {
                    nombre: "⚡ Testing Paralelo Optimizado",
                    enlace: "Distribución inteligente de pruebas"
                },
                {
                    nombre: "📊 Reportes en Tiempo Real",
                    enlace: "Notificaciones proactivas de problemas"
                }
            ]
        },
        {
            fuente: "Roadmap QA",
            curso: "📱 Demo 8: Testing Cross-Platform Unificado",
            acceso: "2026+ - Investigación y desarrollo",
            tiempo: "Por definir",
            expandible: true,
            subcursos: [
                {
                    nombre: "🔄 Sincronización Multi-Dispositivo",
                    enlace: "Pruebas coordinadas en múltiples plataformas"
                },
                {
                    nombre: "✅ Validación de Consistencia",
                    enlace: "Verificación de experiencia uniforme"
                },
                {
                    nombre: "🔗 Testing de APIs Inteligente",
                    enlace: "Validación automática de contratos"
                },
                {
                    nombre: "🌐 Pruebas de Integración Complejas",
                    enlace: "Validación de ecosistemas completos"
                }
            ]
        }
    ]
});

console.log('✅ Componente Objetivos QA cargado - 8 demos principales (Demo 1-8), roadmap 2025-2026+');