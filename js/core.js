/**
 * 🚀 TRAINING PLAN - SISTEMA MODULAR CORE
 * Archivo: js/core.js
 * Descripción: Sistema principal de gestión modular para el plan de capacitación QA 2025
 */

class TrainingPlan {
    constructor() {
        this.components = new Map();
        this.allSources = new Set();
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

        // Recopilar fuentes únicas
        courses.forEach(course => {
            this.allSources.add(course.fuente);
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

        // Limpiar opciones existentes (mantener "Todos")
        componentFilter.innerHTML = '<option value="">Todos los Componentes</option>';
        sourceFilter.innerHTML = '<option value="">Todas las Fuentes</option>';

        // Agregar componentes
        this.components.forEach((data, name) => {
            const option = document.createElement('option');
            option.value = this.getComponentClass(name);
            option.textContent = `${data.icon} ${name}`;
            componentFilter.appendChild(option);
        });

        // Agregar fuentes ordenadas
        Array.from(this.allSources).sort().forEach(source => {
            const option = document.createElement('option');
            option.value = source;
            option.textContent = source;
            sourceFilter.appendChild(option);
        });
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
            legendItem.innerHTML = `
                <div class="legend-color" style="background: ${data.borderColor};"></div>
                <span>${name}</span>
            `;
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
        header.innerHTML = `${data.icon} ${name}`;

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
        
        card.className = `course-card ${componentClass}`;
        card.setAttribute('data-component', componentClass);
        card.setAttribute('data-source', course.fuente);
        card.style.borderLeftColor = componentData.borderColor;

        let accessContent = '';
        let expandibleContent = '';

        // Generar enlace de acceso principal
        if (course.acceso && course.acceso !== 'Internal Siesa Resources' && course.acceso !== 'Official ISTQB Resources') {
            accessContent = `<a href="${course.acceso}" target="_blank" class="course-link">🔗 Acceso Principal</a>`;
        }

        // Generar contenido expandible
        if (course.expandible && course.subcursos) {
            expandibleContent = this.createExpandibleContent(course);
        }

        card.innerHTML = `
            <div class="course-header">
                <div class="course-title">${componentData.icon} ${course.curso}</div>
                <div class="course-source">${course.fuente}</div>
            </div>
            <div class="course-details">
                <div class="detail-row">
                    <span class="detail-label">Duración:</span>
                    <span class="detail-value">
                        <span class="duration-badge">${course.tiempo}</span>
                    </span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Componente:</span>
                    <span class="detail-value">${componentName}</span>
                </div>
            </div>
            ${accessContent}
            ${expandibleContent}
        `;

        return card;
    }

    /**
     * 📁 Crear contenido expandible
     */
    createExpandibleContent(course) {
        const subcursosList = course.subcursos.map(subcurso => `
            <div class="subcurso-item">
                <a href="${subcurso.enlace}" target="_blank" class="subcurso-link">
                    ${subcurso.nombre}
                </a>
            </div>
        `).join('');

        const headerText = this.getExpandibleHeaderText(course.curso);

        return `
            <div class="expandible-section">
                <div class="expandible-header" onclick="window.TrainingPlan.toggleExpansion(this)">
                    📚 <strong>${headerText}:</strong>
                    <span class="expand-icon">▼</span>
                </div>
                <div class="expandible-content">
                    ${subcursosList}
                </div>
            </div>
        `;
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
    }

    /**
     * 🎯 Aplicar filtros
     */
    applyFilters() {
        const componentFilter = document.getElementById('componentFilter').value;
        const sourceFilter = document.getElementById('sourceFilter').value;

        // Filtrar secciones de componentes
        const componentSections = document.querySelectorAll('.component-section');
        componentSections.forEach(section => {
            if (componentFilter === '' || section.dataset.component === componentFilter) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });

        // Filtrar tarjetas por fuente
        const courseCards = document.querySelectorAll('.course-card');
        courseCards.forEach(card => {
            if (sourceFilter === '' || card.dataset.source === sourceFilter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });

        this.updateStats();
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
            this.components.forEach(compData => {
                if (this.getComponentClass(compData.name) === component) {
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
        const data = [];
        
        // Headers
        data.push(['Componente', 'Fuente', 'Curso', 'Tiempo', 'Acceso']);
        
        this.components.forEach((compData, compName) => {
            compData.courses.forEach(course => {
                data.push([
                    compName,
                    course.fuente,
                    course.curso,
                    course.tiempo,
                    course.acceso || 'N/A'
                ]);
                
                // Agregar subcursos si es expandible
                if (course.expandible && course.subcursos) {
                    course.subcursos.forEach(subcurso => {
                        data.push([
                            `${compName} - Subcurso`,
                            course.fuente,
                            `└── ${subcurso.nombre}`,
                            'Incluido',
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
        XLSX.writeFile(wb, "Plan_Capacitacion_QA_2025_Siesa.xlsx");
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

console.log('✅ Core TrainingPlan cargado - Listo para recibir componentes');