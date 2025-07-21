/**
 * 🚀 TRAINING PLAN - SISTEMA MODULAR CORE CON FILTRO DE PRIORIDAD
 * Archivo: js/core.js
 * Descripción: Sistema principal con filtro Fundamentos/Automatización/Especialización/Vanguardia
 */

class TrainingPlan {
    constructor() {
        this.components = new Map();
        this.allSources = new Set();
        this.allPriorities = new Set(['Fundamentos', 'Automatización', 'Especialización', 'Vanguardia']);
        this.initialized = false;
        
        console.log('🎯 TrainingPlan inicializado - Esperando componentes...');
    }

    /**
     * 📦 Registrar un componente de capacitación
     */
    registerComponent(componentData) {
        const { name, icon, borderColor, courses } = componentData;
        
        this.components.set(name, {
            name,
            icon,
            borderColor,
            courses
        });

        // Recopilar fuentes únicas y prioridades
        courses.forEach(course => {
            this.allSources.add(course.fuente);
            if (course.prioridad) {
                this.allPriorities.add(course.prioridad);
            }
            if (course.expandible && course.subcursos) {
                course.subcursos.forEach(sub => {
                    if (sub.fuente) this.allSources.add(sub.fuente);
                });
            }
        });

        console.log(`✅ Componente registrado: ${name} (${courses.length} cursos)`);
        
        // Auto-renderizar si todos los componentes están listos
        this.checkAndRender();
    }

    /**
     * 🎯 Verificar si es momento de renderizar
     */
    checkAndRender() {
        // Esperar a que se registren al menos algunos componentes
        if (this.components.size >= 3 && !this.initialized) {
            setTimeout(() => this.initialize(), 500);
        }
    }

    /**
     * 🚀 Inicializar sistema completo
     */
    initialize() {
        if (this.initialized) return;
        
        console.log('🚀 Inicializando Training Plan...');
        this.initialized = true;
        
        this.generateFilterOptions();
        this.generateLegend();
        this.renderTimeline();
        this.setupEventListeners();
        this.updateStats();
        this.setupAnimations();
        
        console.log(`✅ Sistema inicializado con ${this.components.size} componentes`);
    }

    /**
     * 🏷️ Generar opciones de filtros dinámicamente
     */
    generateFilterOptions() {
        const componentFilter = document.getElementById('componentFilter');
        const sourceFilter = document.getElementById('sourceFilter');
        const priorityFilter = document.getElementById('priorityFilter');

        // Limpiar opciones existentes (mantener "Todos")
        componentFilter.innerHTML = '<option value="">Todos los Componentes</option>';
        sourceFilter.innerHTML = '<option value="">Todas las Fuentes</option>';
        priorityFilter.innerHTML = '<option value="">Todos los Niveles</option>';

        // Agregar componentes
        this.components.forEach((data, name) => {
            const option = document.createElement('option');
            option.value = this.getComponentClass(name);
            option.textContent = data.icon + ' ' + name;
            componentFilter.appendChild(option);
        });

        // Agregar fuentes ordenadas
        Array.from(this.allSources).sort().forEach(source => {
            const option = document.createElement('option');
            option.value = source;
            option.textContent = source;
            sourceFilter.appendChild(option);
        });

        // Agregar prioridades
        const priorityOrder = ['Fundamentos', 'Automatización', 'Especialización', 'Vanguardia'];
        priorityOrder.forEach(priority => {
            const option = document.createElement('option');
            option.value = priority;
            option.textContent = this.getPriorityIcon(priority) + ' ' + priority;
            priorityFilter.appendChild(option);
        });
    }

    /**
     * 🎨 Obtener icono de prioridad
     */
    getPriorityIcon(priority) {
        const icons = {
            'Fundamentos': '🏗️',
            'Automatización': '🤖',
            'Especialización': '⚡',
            'Vanguardia': '🚀'
        };
        return icons[priority] || '📚';
    }

    /**
     * 🎨 Generar leyenda dinámicamente
     */
    generateLegend() {
        const legend = document.getElementById('legend');
        legend.innerHTML = '';

        this.components.forEach((data, name) => {
            const legendItem = document.createElement('div');
            legendItem.className = 'legend-item';
            legendItem.innerHTML = [
                '<div class="legend-color" style="background: ' + data.borderColor + ';"></div>',
                '<span>' + name + '</span>'
            ].join('');
            legend.appendChild(legendItem);
        });
    }

    /**
     * 🎬 Renderizar timeline completo
     */
    renderTimeline() {
        const timeline = document.getElementById('timeline');
        timeline.innerHTML = '';

        this.components.forEach((data, name) => {
            const componentSection = this.createComponentSection(name, data);
            timeline.appendChild(componentSection);
        });
    }

    /**
     * 📋 Crear sección de componente
     */
    createComponentSection(name, data) {
        const section = document.createElement('div');
        section.className = 'component-section';
        section.setAttribute('data-component', this.getComponentClass(name));

        const header = document.createElement('div');
        header.className = 'component-header';
        header.innerHTML = data.icon + ' ' + name;

        const grid = document.createElement('div');
        grid.className = 'courses-grid';

        data.courses.forEach(course => {
            const card = this.createCourseCard(course, name, data);
            grid.appendChild(card);
        });

        section.appendChild(header);
        section.appendChild(grid);
        return section;
    }

    /**
     * 🎴 Crear tarjeta de curso
     */
    createCourseCard(course, componentName, componentData) {
        const card = document.createElement('div');
        const componentClass = this.getComponentClass(componentName);
        
        card.className = 'course-card ' + componentClass;
        card.setAttribute('data-component', componentClass);
        card.setAttribute('data-source', course.fuente);
        card.setAttribute('data-priority', course.prioridad || 'Sin clasificar');
        card.style.borderLeftColor = componentData.borderColor;

        // Agregar clase de prioridad para styling
        if (course.prioridad) {
            card.classList.add('priority-' + course.prioridad.toLowerCase().replace(/\s+/g, '-'));
        }

        let accessContent = '';
        let expandibleContent = '';
        let priorityBadge = '';

        // Generar badge de prioridad
        if (course.prioridad) {
            const priorityClass = 'priority-' + course.prioridad.toLowerCase().replace(/\s+/g, '-');
            priorityBadge = '<div class="priority-badge ' + priorityClass + '">' + 
                          this.getPriorityIcon(course.prioridad) + ' ' + course.prioridad + '</div>';
        }

        // Generar enlace de acceso principal
        if (course.acceso && course.acceso !== 'Internal Siesa Resources' && course.acceso !== 'Official ISTQB Resources') {
            accessContent = '<a href="' + course.acceso + '" target="_blank" class="course-link">🔗 Acceso Principal</a>';
        }

        // Generar contenido expandible
        if (course.expandible && course.subcursos) {
            expandibleContent = this.createExpandibleContent(course);
        }

        card.innerHTML = [
            '<div class="course-header">',
                '<div class="course-title">' + componentData.icon + ' ' + course.curso + '</div>',
                '<div class="course-source">' + course.fuente + '</div>',
            '</div>',
            priorityBadge,
            '<div class="course-details">',
                '<div class="detail-row">',
                    '<span class="detail-label">Duración:</span>',
                    '<span class="detail-value">',
                        '<span class="duration-badge">' + course.tiempo + '</span>',
                    '</span>',
                '</div>',
                '<div class="detail-row">',
                    '<span class="detail-label">Componente:</span>',
                    '<span class="detail-value">' + componentName + '</span>',
                '</div>',
            '</div>',
            accessContent,
            expandibleContent
        ].join('');

        return card;
    }

    /**
     * 📁 Crear contenido expandible
     */
    createExpandibleContent(course) {
        const subcursosList = course.subcursos.map(subcurso => {
            return [
                '<div class="subcurso-item">',
                    '<a href="' + subcurso.enlace + '" target="_blank" class="subcurso-link">',
                        subcurso.nombre,
                    '</a>',
                '</div>'
            ].join('');
        }).join('');

        const headerText = this.getExpandibleHeaderText(course.curso);

        return [
            '<div class="expandible-section">',
                '<div class="expandible-header" onclick="window.TrainingPlan.toggleExpansion(this)">',
                    '📚 <strong>' + headerText + ':</strong>',
                    '<span class="expand-icon">▼</span>',
                '</div>',
                '<div class="expandible-content">',
                    subcursosList,
                '</div>',
            '</div>'
        ].join('');
    }

    /**
     * 🏷️ Obtener texto de header expandible
     */
    getExpandibleHeaderText(curso) {
        if (curso.includes('Platzi')) return 'Cursos Platzi Especializados';
        if (curso.includes('One Drive')) return 'Sesiones QA Fundamentos';
        if (curso.includes('Python')) return 'Cursos Python Especializados';
        if (curso.includes('Microsoft')) return 'Cursos Microsoft Learning';
        if (curso.includes('Inglés')) return 'Cursos de Inglés';
        if (curso.includes('YouTube') || curso.includes('Tutorial')) return 'Tutoriales Especializados';
        if (curso.includes('Selenium XPath')) return 'Tutoriales XPath & CSS';
        if (curso.includes('Robot Framework Avanzado')) return 'Tutoriales Avanzados';
        return 'Cursos Especializados';
    }

    /**
     * 🔧 Configurar event listeners
     */
    setupEventListeners() {
        document.getElementById('componentFilter').addEventListener('change', () => this.applyFilters());
        document.getElementById('sourceFilter').addEventListener('change', () => this.applyFilters());
        document.getElementById('priorityFilter').addEventListener('change', () => this.applyFilters());
    }

    /**
     * 🎯 Aplicar filtros
     */
    applyFilters() {
        const componentFilter = document.getElementById('componentFilter').value;
        const sourceFilter = document.getElementById('sourceFilter').value;
        const priorityFilter = document.getElementById('priorityFilter').value;

        // Filtrar secciones de componentes
        const componentSections = document.querySelectorAll('.component-section');
        componentSections.forEach(section => {
            if (componentFilter === '' || section.dataset.component === componentFilter) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });

        // Filtrar tarjetas por fuente y prioridad
        const courseCards = document.querySelectorAll('.course-card');
        courseCards.forEach(card => {
            let showCard = true;

            // Filtro por fuente
            if (sourceFilter !== '' && card.dataset.source !== sourceFilter) {
                showCard = false;
            }

            // Filtro por prioridad
            if (priorityFilter !== '' && card.dataset.priority !== priorityFilter) {
                showCard = false;
            }

            card.style.display = showCard ? 'block' : 'none';
        });

        this.updateStats();
        this.updatePriorityStats();
    }

    /**
     * 📊 Actualizar estadísticas
     */
    updateStats() {
        const visibleCards = document.querySelectorAll('.course-card:not([style*="display: none"])');
        let totalCourses = visibleCards.length;
        
        // Contar subcursos para tarjetas expandibles visibles
        visibleCards.forEach(card => {
            const component = card.getAttribute('data-component');
            const source = card.getAttribute('data-source');
            
            // Buscar los datos del curso
            this.components.forEach((compData, compName) => {
                if (this.getComponentClass(compName) === component) {
                    const course = compData.courses.find(c => c.fuente === source);
                    if (course && course.expandible && course.subcursos) {
                        totalCourses += course.subcursos.length;
                    }
                }
            });
        });

        document.getElementById('totalCourses').textContent = totalCourses;
        document.getElementById('totalComponents').textContent = this.components.size;
        document.getElementById('totalSources').textContent = this.allSources.size;
    }

    /**
     * 📊 Actualizar estadísticas de prioridad
     */
    updatePriorityStats() {
        const priorityStats = {
            'Fundamentos': 0,
            'Automatización': 0,
            'Especialización': 0,
            'Vanguardia': 0
        };

        const visibleCards = document.querySelectorAll('.course-card:not([style*="display: none"])');
        visibleCards.forEach(card => {
            const priority = card.getAttribute('data-priority');
            if (priorityStats.hasOwnProperty(priority)) {
                priorityStats[priority]++;
            }
        });

        // Actualizar contadores de prioridad si existen en el DOM
        Object.keys(priorityStats).forEach(priority => {
            const element = document.getElementById('priority-' + priority.toLowerCase());
            if (element) {
                element.textContent = priorityStats[priority];
            }
        });
    }

    /**
     * 🎬 Configurar animaciones
     */
    setupAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        });

        setTimeout(() => {
            const cards = document.querySelectorAll('.course-card');
            cards.forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(card);
            });
        }, 300);
    }

    /**
     * 📤 Exportar a Excel
     */
    exportToExcel() {
        try {
            const data = [];
            
            // Headers
            data.push(['Componente', 'Fuente', 'Curso', 'Tiempo', 'Prioridad', 'Acceso']);
            
            this.components.forEach((compData, compName) => {
                compData.courses.forEach(course => {
                    data.push([
                        compName,
                        course.fuente,
                        course.curso,
                        course.tiempo,
                        course.prioridad || 'Sin clasificar',
                        course.acceso || 'N/A'
                    ]);
                    
                    // Agregar subcursos si es expandible
                    if (course.expandible && course.subcursos) {
                        course.subcursos.forEach(subcurso => {
                            data.push([
                                compName + ' - Subcurso',
                                course.fuente,
                                '└── ' + subcurso.nombre,
                                'Incluido',
                                course.prioridad || 'Sin clasificar',
                                subcurso.enlace || 'N/A'
                            ]);
                        });
                    }
                });
            });
            
            // Crear workbook y worksheet
            const ws = XLSX.utils.aoa_to_sheet(data);
            const wb = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, ws, "Plan de Capacitación QA 2025");
            
            // Descargar archivo
            XLSX.writeFile(wb, "Plan_Capacitacion_QA_2025_Con_Prioridades.xlsx");
        } catch (error) {
            console.error('Error al exportar:', error);
            alert('Error al exportar. Verifique que la librería XLSX esté cargada.');
        }
    }

    /**
     * 🔧 Alternar expansión de cajones
     */
    toggleExpansion(header) {
        const content = header.nextElementSibling;
        const icon = header.querySelector('.expand-icon');
        
        if (content.classList.contains('expanded')) {
            content.classList.remove('expanded');
            header.classList.remove('expanded');
        } else {
            content.classList.add('expanded');
            header.classList.add('expanded');
        }
    }

    /**
     * 🏷️ Obtener clase CSS del componente
     */
    getComponentClass(component) {
        return component.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    }
}

// 🚀 Crear instancia global del sistema
window.TrainingPlan = new TrainingPlan();

console.log('✅ Core TrainingPlan con filtro de prioridad cargado - Listo para recibir componentes');

// 📊 SISTEMA DE BANNER DE TIEMPO DINÁMICO
// Agregar este código al final de tu archivo js/core.js

// 🎯 Configuración de tiempos por prioridad
const PRIORITY_TIME_CONFIG = {
    "Fundamentos": {
        emoji: "🏗️",
        name: "Fundamentos",
        core: {
            hours: 42,
            description: "QA Manual básico + Herramientas esenciales + IA básica"
        },
        optional: {
            hours: 0,
            description: "Sin complementarios en esta fase"
        },
        duration: "1.5 meses"
    },
    "Automatización": {
        emoji: "🤖",
        name: "Automatización",
        core: {
            hours: 89,
            description: "QA Manual + Automatizado + Herramientas básicas"
        },
        optional: {
            hours: 107,
            description: "Habilidades Técnicas Complementarias (Python, etc.)"
        },
        duration: "3-6 meses"
    },
    "Especialización": {
        emoji: "⚡",
        name: "Especialización",
        core: {
            hours: 156,
            description: "Core + Performante + Segurizado + Componentes"
        },
        optional: {
            hours: 50,
            description: "Habilidades Técnicas Avanzadas"
        },
        duration: "5-7 meses"
    },
    "Vanguardia": {
        emoji: "🚀",
        name: "Vanguardia",
        core: {
            hours: 200,
            description: "Plan completo + Objetivos QA + IA Avanzada"
        },
        optional: {
            hours: 30,
            description: "Especializaciones emergentes"
        },
        duration: "7-8 meses"
    },
    "": {
        emoji: "📊",
        name: "Plan Completo",
        core: {
            hours: 200,
            description: "Todos los componentes principales"
        },
        optional: {
            hours: 107,
            description: "Todos los complementarios disponibles"
        },
        duration: "8-10 meses"
    }
};

// 🎨 Función para actualizar el banner de tiempo
function updateTimeBanner(selectedPriority = "") {
    const banner = document.getElementById('timeBanner');
    const priorityIndicator = document.getElementById('priorityIndicator');
    const coreTime = document.getElementById('coreTime');
    const optionalTime = document.getElementById('optionalTime');
    const totalTime = document.getElementById('totalTime');
    const coreDescription = document.getElementById('coreDescription');
    const optionalDescription = document.getElementById('optionalDescription');
    const totalDescription = document.getElementById('totalDescription');
    const progressCore = document.getElementById('progressCore');
    const progressOptional = document.getElementById('progressOptional');

    if (!banner) return;

    const config = PRIORITY_TIME_CONFIG[selectedPriority] || PRIORITY_TIME_CONFIG[""];
    const total = config.core.hours + config.optional.hours;
    const corePercentage = total > 0 ? (config.core.hours / total) * 100 : 50;
    const optionalPercentage = total > 0 ? (config.optional.hours / total) * 100 : 50;

    // 📊 Actualizar contenido
    if (priorityIndicator) {
        priorityIndicator.innerHTML = `
            <span class="priority-level">${config.emoji} ${config.name}</span>
        `;
    }

    if (coreTime) {
        coreTime.querySelector('.hours').textContent = config.core.hours;
    }

    if (optionalTime) {
        optionalTime.querySelector('.hours').textContent = config.optional.hours;
    }

    if (totalTime) {
        totalTime.querySelector('.hours').textContent = total;
    }

    if (coreDescription) {
        coreDescription.textContent = config.core.description;
    }

    if (optionalDescription) {
        optionalDescription.textContent = config.optional.description;
    }

    if (totalDescription) {
        const monthsEstimate = Math.ceil(total / 30); // 30 horas por mes
        totalDescription.textContent = `~${monthsEstimate} meses (30h/mes) • ${config.duration}`;
    }

    // 📈 Actualizar barras de progreso
    if (progressCore) {
        progressCore.style.width = `${corePercentage}%`;
    }

    if (progressOptional) {
        progressOptional.style.width = `${optionalPercentage}%`;
    }

    // 🎨 Actualizar clase del banner para colores
    banner.className = 'time-banner';
    if (selectedPriority) {
        banner.classList.add(`priority-${selectedPriority.toLowerCase()}`);
    }

    // 🎯 Animación de entrada
    banner.style.opacity = '0';
    banner.style.transform = 'translateY(-20px)';
    
    setTimeout(() => {
        banner.style.transition = 'all 0.5s ease';
        banner.style.opacity = '1';
        banner.style.transform = 'translateY(0)';
    }, 100);

    console.log(`⏱️ Banner actualizado para: ${config.name} (${total}h total)`);
}

// 🔄 Función para calcular tiempos dinámicamente desde los datos
function calculateDynamicTimes(courses, selectedPriority) {
    if (!courses || courses.length === 0) {
        return PRIORITY_TIME_CONFIG[selectedPriority] || PRIORITY_TIME_CONFIG[""];
    }

    let coreHours = 0;
    let optionalHours = 0;
    const coreComponents = ['QA Manual', 'QA Automatizado', 'QA Performante', 'QA Segurizado', 'Herramientas', 'Mandatorios Siesa', 'Componentes de Aplicación'];
    const optionalComponents = ['Complementario Habilidades Técnicas', 'Complementario Habilidades Blandas'];

    courses.forEach(course => {
        if (!selectedPriority || course.prioridad === selectedPriority) {
            const duration = extractHoursFromDuration(course.duracion || '0 horas');
            
            if (coreComponents.includes(course.componente)) {
                coreHours += duration;
            } else if (optionalComponents.includes(course.componente)) {
                optionalHours += duration;
            } else {
                coreHours += duration; // Por defecto, todo va a core
            }
        }
    });

    return {
        emoji: PRIORITY_TIME_CONFIG[selectedPriority]?.emoji || "📊",
        name: PRIORITY_TIME_CONFIG[selectedPriority]?.name || "Filtrado",
        core: {
            hours: coreHours,
            description: `${coreComponents.length} componentes principales seleccionados`
        },
        optional: {
            hours: optionalHours,
            description: optionalHours > 0 ? "Habilidades complementarias incluidas" : "Sin complementarios en esta selección"
        },
        duration: estimateDuration(coreHours + optionalHours)
    };
}

// ⏱️ Función auxiliar para extraer horas de duración
function extractHoursFromDuration(durationString) {
    const match = durationString.match(/(\d+)\s*horas?/i);
    return match ? parseInt(match[1]) : 0;
}

// 📅 Función auxiliar para estimar duración en meses
function estimateDuration(totalHours) {
    const months = Math.ceil(totalHours / 30);
    if (months <= 2) return `${months} ${months === 1 ? 'mes' : 'meses'}`;
    if (months <= 4) return `${months-1}-${months} meses`;
    if (months <= 6) return `${months-1}-${months} meses`;
    return `${months-2}-${months} meses`;
}

// 🔄 Integración con el sistema de filtros existente
function updateTimeBannerFromFilter() {
    const priorityFilter = document.getElementById('priorityFilter');
    if (!priorityFilter) return;

    const selectedPriority = priorityFilter.value;
    
    // Si hay datos de cursos disponibles, calcular dinámicamente
    if (window.allCourses && window.allCourses.length > 0) {
        const dynamicConfig = calculateDynamicTimes(window.allCourses, selectedPriority);
        updateTimeBannerWithConfig(dynamicConfig, selectedPriority);
    } else {
        // Usar configuración estática
        updateTimeBanner(selectedPriority);
    }
}

// 🎯 Función para actualizar banner con configuración custom
function updateTimeBannerWithConfig(config, selectedPriority) {
    const banner = document.getElementById('timeBanner');
    const priorityIndicator = document.getElementById('priorityIndicator');
    const coreTime = document.getElementById('coreTime');
    const optionalTime = document.getElementById('optionalTime');
    const totalTime = document.getElementById('totalTime');
    const coreDescription = document.getElementById('coreDescription');
    const optionalDescription = document.getElementById('optionalDescription');
    const totalDescription = document.getElementById('totalDescription');
    const progressCore = document.getElementById('progressCore');
    const progressOptional = document.getElementById('progressOptional');

    if (!banner) return;

    const total = config.core.hours + config.optional.hours;
    const corePercentage = total > 0 ? (config.core.hours / total) * 100 : 50;

    // Actualizar todos los elementos
    if (priorityIndicator) {
        priorityIndicator.innerHTML = `<span class="priority-level">${config.emoji} ${config.name}</span>`;
    }

    if (coreTime) {
        coreTime.querySelector('.hours').textContent = config.core.hours;
    }

    if (optionalTime) {
        optionalTime.querySelector('.hours').textContent = config.optional.hours;
    }

    if (totalTime) {
        totalTime.querySelector('.hours').textContent = total;
    }

    if (coreDescription) {
        coreDescription.textContent = config.core.description;
    }

    if (optionalDescription) {
        optionalDescription.textContent = config.optional.description;
    }

    if (totalDescription) {
        totalDescription.textContent = `~${Math.ceil(total / 30)} meses (30h/mes) • ${config.duration}`;
    }

    if (progressCore) {
        progressCore.style.width = `${corePercentage}%`;
    }

    if (progressOptional) {
        progressOptional.style.width = `${100 - corePercentage}%`;
    }

    // Actualizar clase de color
    banner.className = 'time-banner';
    if (selectedPriority) {
        banner.classList.add(`priority-${selectedPriority.toLowerCase()}`);
    }
}

// 🚀 Inicialización del banner de tiempo
function initializeTimeBanner() {
    // Agregar listener al filtro de prioridad
    const priorityFilter = document.getElementById('priorityFilter');
    if (priorityFilter) {
        priorityFilter.addEventListener('change', updateTimeBannerFromFilter);
    }

    // Actualizar banner inicial
    updateTimeBanner();
    
    console.log('🎯 Banner de tiempo dinámico inicializado');
}

// 📊 Exponer funciones globalmente
window.updateTimeBanner = updateTimeBanner;
window.updateTimeBannerFromFilter = updateTimeBannerFromFilter;
window.initializeTimeBanner = initializeTimeBanner;

// MODIFICAR la función applyFilters existente para incluir el banner
// Agregar esta línea al final de tu función applyFilters existente:
// updateTimeBannerFromFilter();

// MODIFICAR la inicialización existente para incluir el banner
// Agregar esta línea después de setupFilters() en tu inicialización existente:
// initializeTimeBanner();