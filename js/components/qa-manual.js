/**
 * 🔍 COMPONENTE: QA MANUAL CON PRIORIDADES
 * Archivo: js/components/qa-manual.js
 * Descripción: Fundamentos de QA Manual clasificados por nivel de prioridad
 */

window.TrainingPlan.registerComponent({
    name: "QA Manual",
    icon: "🔍",
    borderColor: "#28a745",
    courses: [
        // === FUNDAMENTOS (PRIORIDAD ALTA) ===
        {
            fuente: "Platzi",
            curso: "Fundamentos QA - Platzi",
            acceso: "https://platzi.com/cursos/pruebas-software/",
            tiempo: "10 horas",
            prioridad: "Fundamentos", // 🏗️ NIVEL 1
            expandible: true,
            subcursos: [
                {
                    nombre: "Curso de Fundamentos de Pruebas de Software",
                    enlace: "https://platzi.com/cursos/pruebas-software/"
                },
                {
                    nombre: "Curso de Testing de Videojuegos", 
                    enlace: "https://platzi.com/cursos/testing-videojuegos/"
                }
            ]
        },
        {
            fuente: "ISTQB",
            curso: "Glosario ISTQB",
            acceso: "https://siesa1-my.sharepoint.com/:b:/g/personal/jmreinam_siesa_com/Ed0xpQrRlPJFtDeob0fN2DYBKRNGoiGV6jikzAH33S3eMg?e=I6YSkc",
            tiempo: "4 horas",
            prioridad: "Fundamentos" // 🏗️ NIVEL 1
        },
        {
            fuente: "ISTQB",
            curso: "Syllabus ISTQB",
            acceso: "https://siesa1-my.sharepoint.com/:b:/g/personal/jmreinam_siesa_com/EUgb-cZ7MGFOguABQAfhJKEBdq-yZcW2_ojB-MtNGbNmsw?e=KgNcg3",
            tiempo: "8 horas",
            prioridad: "Fundamentos" // 🏗️ NIVEL 1
        },

        // === FUNDAMENTOS (SESIONES AVANZADAS - RECLASIFICADO) ===
        {
            fuente: "One Drive",
            curso: "Fundamentos QA - Sesiones Avanzadas",
            acceso: "https://siesa1-my.sharepoint.com/:p:/g/personal/jmreinam_siesa_com/EeM1ECqHQGVMvISxFng1AsQB0KrEMq-Vir6oMOUOottYdQ?e=y2c4Mm",
            tiempo: "16 horas",
            prioridad: "Fundamentos", // 🏗️ NIVEL 1 - RECLASIFICADO
            expandible: true,
            subcursos: [
                {
                    nombre: "01 - Sesión Capacitación QA - Fundamentos I",
                    enlace: "https://siesa1-my.sharepoint.com/:p:/g/personal/jmreinam_siesa_com/EeM1ECqHQGVMvISxFng1AsQB0KrEMq-Vir6oMOUOottYdQ?e=y2c4Mm"
                },
                {
                    nombre: "02 - Sesión Capacitación QA - Fundamentos I",
                    enlace: "https://siesa1-my.sharepoint.com/:p:/g/personal/jmreinam_siesa_com/EX4FA33EX_9LlmRCe6LadAoB9ronljSHF1qEs_wJTg132A?e=KnhLNG"
                },
                {
                    nombre: "03 - Sesión Capacitación QA - Fundamentos II",
                    enlace: "https://siesa1-my.sharepoint.com/:p:/g/personal/jmreinam_siesa_com/EdNhPSUQhj5NpTSjvZWSJcEBWAJMt_mX1DxcoAtNzQZ-vw?e=9zP28x"
                },
                {
                    nombre: "04 - Sesión Capacitación QA - Fundamentos II",
                    enlace: "https://siesa1-my.sharepoint.com/:p:/g/personal/jmreinam_siesa_com/ERzTxrUWlv9Fvi7Bdzw2sP4ByYCF9JBZv84gtGRUoIGFow?e=GUxDFS"
                },
                {
                    nombre: "05 - Sesión Capacitación QA - Fundamentos Testing Ágil",
                    enlace: "https://siesa1-my.sharepoint.com/:p:/g/personal/jmreinam_siesa_com/EcJIp4HihBNKj1Py4dNTWyIBMdgaA4CRagNoYfevAKxavA?e=0Edh6I"
                },
                {
                    nombre: "06 - Sesión Capacitación QA - Fundamentos Pruebas No Funcionales",
                    enlace: "https://siesa1-my.sharepoint.com/:p:/g/personal/jmreinam_siesa_com/ESOXkESXMdFIvXcMlvnjHekBVZtAXIm_AQPOc80nqFEd1g?e=dpYtqZ"
                },
                {
                    nombre: "08 - Sesión Capacitación QA - Testing en un ERP",
                    enlace: "https://siesa1-my.sharepoint.com/:p:/g/personal/jmreinam_siesa_com/EZoBi6fLh_BJnATjLaL8Tt4BiJSd5k7kVLz_FaAXsbcLbg?e=CCMUt4"
                },
                {
                    nombre: "09 - Sesión Capacitación QA - Pruebas Unitarias con Xunit",
                    enlace: "https://siesa1-my.sharepoint.com/:p:/g/personal/jmreinam_siesa_com/EZTN0WpHruBNqDYZ_FeAIxQB05PtyQQl2natMkYug7M9rw?e=1BawOD"
                }
            ]
        }
    ]
});

console.log('✅ Componente QA Manual con prioridades cargado - 4 cursos clasificados');