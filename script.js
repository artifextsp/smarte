// Estado de la aplicación
let currentView = 'student';
let modules = [];
let editingModuleId = null;
let editingChapterId = null;
let editingResourceId = null;
let currentModuleId = null;
let currentChapterId = null;
let isAuthenticated = false;
const ADMIN_PASSWORD = '123456*';

// Inicialización
document.addEventListener('DOMContentLoaded', async () => {
    checkAuth(); // Solo verifica el estado, no abre modal
    setupEventListeners();
    
    // Intentar cargar desde servidor primero, si no existe usar localStorage
    try {
        const response = await fetch('data.json');
        if (response.ok) {
            const serverData = await response.json();
            if (Array.isArray(serverData) && serverData.length > 0) {
                modules = serverData;
                // Guardar en localStorage también para referencia local
                saveData();
            } else {
                loadData(); // Usar localStorage o datos iniciales
            }
        } else {
            loadData(); // Usar localStorage o datos iniciales
        }
    } catch (error) {
        // Si no existe data.json, cargar desde localStorage
        loadData();
    }
    
    checkStudentName(); // Verificar si hay nombre de estudiante guardado
    renderStudentView();
    updateAuthUI(); // Actualizar UI según estado de autenticación
    if (isAuthenticated) {
        renderAdminView();
    }
});

// Event Listeners
function setupEventListeners() {
    // Cambio de vista
    document.getElementById('viewModeBtn').addEventListener('click', () => switchView('student'));
    document.getElementById('adminModeBtn').addEventListener('click', () => {
        if (isAuthenticated) {
            switchView('admin');
        } else {
            openLoginModal();
        }
    });
    document.getElementById('logoutBtn').addEventListener('click', logout);
    
    // Login
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
    
    // Nombre del estudiante
    document.getElementById('studentNameForm').addEventListener('submit', handleStudentNameSubmit);
    document.getElementById('changeNameBtn').addEventListener('click', () => {
        openStudentNameModal();
    });
    
    // File upload para PDFs
    document.getElementById('resourceType').addEventListener('change', handleResourceTypeChange);
    document.getElementById('fileUpload').addEventListener('change', handleFileUpload);
    document.getElementById('resourceChapter').addEventListener('change', handleResourceChapterChange);

    // Exportar/Importar datos
    document.getElementById('exportDataBtn').addEventListener('click', exportData);
    document.getElementById('importDataBtn').addEventListener('click', () => {
        document.getElementById('importFileInput').click();
    });
    document.getElementById('importFileInput').addEventListener('change', handleImportFile);
    document.getElementById('loadFromServerBtn').addEventListener('click', loadDataFromServer);

    // Módulos
    document.getElementById('addModuleBtn').addEventListener('click', () => openModuleModal());
    document.getElementById('closeModuleModal').addEventListener('click', closeModuleModal);
    document.getElementById('cancelModuleBtn').addEventListener('click', closeModuleModal);
    document.getElementById('moduleForm').addEventListener('submit', handleModuleSubmit);

    // Capítulos
    document.getElementById('closeChapterModal').addEventListener('click', closeChapterModal);
    document.getElementById('cancelChapterBtn').addEventListener('click', closeChapterModal);
    document.getElementById('chapterForm').addEventListener('submit', handleChapterSubmit);

    // Recursos
    document.getElementById('closeResourceModal').addEventListener('click', closeResourceModal);
    document.getElementById('cancelResourceBtn').addEventListener('click', closeResourceModal);
    document.getElementById('resourceForm').addEventListener('submit', handleResourceSubmit);

    // Cerrar modales al hacer clic fuera (excepto el modal de nombre de estudiante)
    document.getElementById('moduleModal').addEventListener('click', (e) => {
        if (e.target.id === 'moduleModal') closeModuleModal();
    });
    document.getElementById('chapterModal').addEventListener('click', (e) => {
        if (e.target.id === 'chapterModal') closeChapterModal();
    });
    document.getElementById('resourceModal').addEventListener('click', (e) => {
        if (e.target.id === 'resourceModal') closeResourceModal();
    });
    // El modal de nombre de estudiante NO se cierra al hacer clic fuera (es obligatorio)
}

// ========== AUTENTICACIÓN ==========

function checkAuth() {
    const authStatus = sessionStorage.getItem('adminAuthenticated');
    isAuthenticated = authStatus === 'true';
    // No abrimos el modal aquí, solo verificamos el estado
    // El modal se abrirá solo cuando el usuario intente acceder a administración
}

function openLoginModal() {
    document.getElementById('loginModal').classList.add('active');
    document.getElementById('password').focus();
}

function closeLoginModal() {
    document.getElementById('loginModal').classList.remove('active');
    document.getElementById('loginForm').reset();
    document.getElementById('loginError').style.display = 'none';
}

function handleLogin(e) {
    e.preventDefault();
    const password = document.getElementById('password').value;
    const errorDiv = document.getElementById('loginError');
    
    if (password === ADMIN_PASSWORD) {
        isAuthenticated = true;
        sessionStorage.setItem('adminAuthenticated', 'true');
        closeLoginModal();
        updateAuthUI();
        switchView('admin'); // Cambiar a la vista de administración
    } else {
        errorDiv.style.display = 'flex';
        document.getElementById('password').value = '';
        document.getElementById('password').focus();
    }
}

function logout() {
    isAuthenticated = false;
    sessionStorage.removeItem('adminAuthenticated');
    switchView('student');
    updateAuthUI();
    // No abrimos el modal automáticamente al cerrar sesión
    // El modal solo se abrirá cuando el usuario intente acceder a administración nuevamente
}

function updateAuthUI() {
    const logoutBtn = document.getElementById('logoutBtn');
    if (isAuthenticated) {
        logoutBtn.style.display = 'inline-flex';
    } else {
        logoutBtn.style.display = 'none';
    }
}

// ========== GESTIÓN DE NOMBRE DEL ESTUDIANTE ==========

function checkStudentName() {
    // Pequeño delay para asegurar que el DOM esté completamente cargado
    setTimeout(() => {
        const savedName = localStorage.getItem('studentName');
        if (savedName && savedName.trim() !== '') {
            displayStudentName(savedName);
        } else {
            openStudentNameModal();
        }
    }, 100);
}

function openStudentNameModal() {
    const modal = document.getElementById('studentNameModal');
    const input = document.getElementById('studentName');
    const savedName = localStorage.getItem('studentName');
    if (savedName) {
        input.value = savedName;
    } else {
        input.value = '';
    }
    modal.classList.add('active');
    input.focus();
    input.select();
}

function handleStudentNameSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('studentName').value.trim();
    if (name) {
        localStorage.setItem('studentName', name);
        displayStudentName(name);
        document.getElementById('studentNameModal').classList.remove('active');
    }
}

function displayStudentName(name) {
    const banner = document.getElementById('studentNameBanner');
    const display = document.getElementById('studentNameDisplay');
    const changeNameBtn = document.getElementById('changeNameBtn');
    if (banner && display) {
        display.textContent = name.toUpperCase();
        banner.style.display = 'block';
    }
    if (changeNameBtn) {
        changeNameBtn.style.display = 'inline-flex';
    }
}

function clearStudentName() {
    localStorage.removeItem('studentName');
    const banner = document.getElementById('studentNameBanner');
    const changeNameBtn = document.getElementById('changeNameBtn');
    if (banner) {
        banner.style.display = 'none';
    }
    if (changeNameBtn) {
        changeNameBtn.style.display = 'none';
    }
}

// Cambio de vista
function switchView(view) {
    if (view === 'admin' && !isAuthenticated) {
        openLoginModal();
        return;
    }
    
    currentView = view;
    document.getElementById('studentView').classList.toggle('active', view === 'student');
    document.getElementById('adminView').classList.toggle('active', view === 'admin');
    
    if (view === 'student') {
        renderStudentView();
    } else {
        renderAdminView();
    }
}

// ========== GESTIÓN DE DATOS ==========

// Cargar datos desde localStorage
function loadData() {
    // Primero intentar cargar desde el servidor (data.json)
    // Si no existe, usar localStorage
    const saved = localStorage.getItem('emprendeSmartData');
    if (saved) {
        modules = JSON.parse(saved);
        // Migrar datos antiguos (módulos con resources directamente)
        let needsMigration = false;
        modules.forEach(module => {
            module.order = parseInt(module.order) || 1;
            
            // Si el módulo tiene resources directamente, migrar a capítulos
            if (module.resources && !module.chapters) {
                needsMigration = true;
                // Crear un capítulo por defecto con todos los recursos
                const defaultChapter = {
                    id: generateId(),
                    name: 'Contenido General',
                    description: '',
                    order: 1,
                    resources: module.resources.map((resource, index) => {
                        return {
                            ...resource,
                            order: parseInt(resource.order) || index + 1
                        };
                    })
                };
                module.chapters = [defaultChapter];
                delete module.resources;
            } else if (!module.chapters) {
                // Si no tiene ni resources ni chapters, crear estructura vacía
                module.chapters = [];
            }
            
            // Normalizar capítulos
            if (module.chapters) {
                module.chapters.forEach((chapter, chapterIndex) => {
                    chapter.order = parseInt(chapter.order) || chapterIndex + 1;
                    if (!chapter.resources) {
                        chapter.resources = [];
                    }
                    // Normalizar órdenes de recursos
                    chapter.resources.forEach((resource, index) => {
                        if (!resource.order || isNaN(parseInt(resource.order))) {
                            resource.order = index + 1;
                        } else {
                            resource.order = parseInt(resource.order);
                        }
                    });
                });
            }
        });
        
        if (needsMigration) {
            saveData();
        }
    } else {
        // Datos iniciales
        modules = [
            {
                id: generateId(),
                name: 'Ingeniería de Prompts',
                icon: null,
                description: 'Aprende técnicas avanzadas para crear prompts efectivos con IA',
                order: 1,
                chapters: [
                    {
                        id: generateId(),
                        name: 'Introducción',
                        description: '',
                        order: 1,
                        resources: [
                            {
                                id: generateId(),
                                title: 'Plataforma de Entrenamiento PER-T-CO-F',
                                url: 'https://artifextsp.github.io/pertcof/',
                                type: 'platform',
                                description: 'Plataforma interactiva para entrenar técnicas de prompts',
                                order: 1
                            }
                        ]
                    }
                ]
            }
        ];
        saveData();
    }
}

// Guardar datos en localStorage
function saveData() {
    localStorage.setItem('emprendeSmartData', JSON.stringify(modules));
}

// ========== EXPORTAR/IMPORTAR DATOS ==========

// Exportar datos a JSON
function exportData() {
    const dataStr = JSON.stringify(modules, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'curso-emprende-smart.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    alert('✅ Datos exportados correctamente. Renombra el archivo como "data.json" y súbelo a tu repositorio de GitHub.');
}

// Importar datos desde archivo
function handleImportFile(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const importedData = JSON.parse(e.target.result);
            
            if (Array.isArray(importedData)) {
                const confirmar = confirm(
                    '⚠️ Esto reemplazará todos los datos actuales.\n\n' +
                    '¿Deseas continuar?'
                );
                
                if (confirmar) {
                    modules = importedData;
                    saveData();
                    renderStudentView();
                    renderAdminView();
                    alert('✅ Datos importados correctamente!');
                }
            } else {
                alert('❌ El archivo no tiene el formato correcto. Debe ser un array de módulos.');
            }
        } catch (error) {
            alert('❌ Error al leer el archivo. Verifica que sea un JSON válido.');
            console.error(error);
        }
    };
    reader.readAsText(file);
    event.target.value = ''; // Reset para poder seleccionar el mismo archivo otra vez
}

// Cargar datos desde servidor (data.json)
async function loadDataFromServer() {
    try {
        const response = await fetch('data.json');
        
        if (!response.ok) {
            throw new Error('Archivo no encontrado');
        }
        
        const serverData = await response.json();
        
        if (Array.isArray(serverData)) {
            const confirmar = confirm(
                '⚠️ Esto reemplazará todos los datos actuales con los del servidor.\n\n' +
                '¿Deseas continuar?'
            );
            
            if (confirmar) {
                modules = serverData;
                // Guardar también en localStorage para referencia
                saveData();
                renderStudentView();
                if (isAuthenticated) {
                    renderAdminView();
                }
                alert('✅ Datos cargados desde el servidor correctamente!');
            }
        } else {
            alert('❌ El archivo del servidor no tiene el formato correcto.');
        }
    } catch (error) {
        alert('❌ No se pudo cargar el archivo data.json del servidor.\n\n' +
              'Asegúrate de que el archivo existe en la raíz del proyecto.');
        console.error(error);
    }
}

// Generar ID único
function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// ========== VISTA DE ESTUDIANTE ==========

function renderStudentView() {
    const container = document.getElementById('modulesContainer');
    const sortedModules = [...modules].sort((a, b) => a.order - b.order);

    if (sortedModules.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-folder-open"></i>
                <p>No hay módulos disponibles aún</p>
            </div>
        `;
        return;
    }

    const resourceIcons = {
        link: 'fas fa-link',
        video: 'fas fa-video',
        document: 'fas fa-file-alt',
        platform: 'fas fa-laptop-code',
        other: 'fas fa-paperclip'
    };

    // Función para obtener color de capítulo basado en índice
    const getChapterColorClass = (index) => {
        const colors = [
            'chapter-color-1', 'chapter-color-2', 'chapter-color-3', 
            'chapter-color-4', 'chapter-color-5', 'chapter-color-6',
            'chapter-color-7', 'chapter-color-8', 'chapter-color-9',
            'chapter-color-10'
        ];
        return colors[index % colors.length];
    };

    // Cargar recursos visitados
    const visitedResources = JSON.parse(localStorage.getItem('visitedResources') || '{}');
    
    container.innerHTML = sortedModules.map(module => {
        const sortedChapters = [...(module.chapters || [])].sort((a, b) => a.order - b.order);
        
        return `
            <div class="module-card">
                <div class="module-card-header">
                    ${module.icon ? `<div class="module-icon">${escapeHtml(module.icon)}</div>` : ''}
                    <h3 class="module-title-text">
                        <span class="module-label">NOMBRE DEL MÓDULO:</span>
                        <span class="module-name-value">${escapeHtml(module.name.toUpperCase())}</span>
                    </h3>
                    <div class="module-order">${module.order}</div>
                </div>
                ${module.description ? `<p class="module-description">${escapeHtml(module.description)}</p>` : ''}
                ${sortedChapters.map((chapter, chapterIndex) => {
                    const colorClass = getChapterColorClass(chapterIndex);
                    const sortedResources = [...(chapter.resources || [])].sort((a, b) => {
                        const orderA = parseInt(a.order) || 999;
                        const orderB = parseInt(b.order) || 999;
                        if (orderA === orderB) {
                            return a.id.localeCompare(b.id);
                        }
                        return orderA - orderB;
                    });
                    
                    return `
                        <div class="chapter-section">
                            <h4 class="chapter-title ${colorClass}">📖 ${escapeHtml(chapter.name)}</h4>
                            ${chapter.description ? `<p class="chapter-description">${escapeHtml(chapter.description)}</p>` : ''}
                            <ul class="resources-list">
                                ${sortedResources.length === 0 ? '<li class="resource-item" style="opacity: 0.6;"><em>No hay recursos en este capítulo</em></li>' : ''}
                                ${sortedResources.map(resource => {
                                    const isPDF = resource.type === 'pdf';
                                    let url = resource.url;
                                    let target = 'target="_blank" rel="noopener noreferrer"';
                                    const resourceKey = `${module.id}-${chapter.id}-${resource.id}`;
                                    const isVisited = visitedResources[resourceKey] === true;
                                    
                                    // Manejar PDFs locales
                                    if (resource.url.startsWith('local:')) {
                                        const pdfId = resource.url.replace('local:', '');
                                        const pdfs = JSON.parse(localStorage.getItem('uploadedPDFs') || '{}');
                                        if (pdfs[pdfId]) {
                                            url = pdfs[pdfId].data;
                                            target = 'download="' + pdfs[pdfId].name + '"';
                                        }
                                    } else if (isPDF && !resource.url.startsWith('http')) {
                                        // PDF relativo
                                        target = 'target="_blank"';
                                    }
                                    
                                    return `
                                    <li class="resource-item ${isVisited ? 'resource-visited' : ''}" data-resource-key="${resourceKey}">
                                        <a href="${escapeHtml(url)}" ${target} class="resource-link" onclick="markResourceAsVisited('${resourceKey}');">
                                            <i class="${resourceIcons[resource.type] || resourceIcons.other} resource-icon"></i>
                                            <div class="resource-info">
                                                <div class="resource-title">${escapeHtml(resource.title)}${isVisited ? ' <i class="fas fa-check-circle resource-visited-icon"></i>' : ''}</div>
                                                <div class="resource-type">${getResourceTypeLabel(resource.type)}</div>
                                            </div>
                                            ${!isPDF || resource.url.startsWith('http') || resource.url.startsWith('local:') ? '<i class="fas fa-download" style="color: var(--text-secondary); font-size: 0.75rem;"></i>' : '<i class="fas fa-external-link-alt" style="color: var(--text-secondary); font-size: 0.75rem;"></i>'}
                                        </a>
                                    </li>
                                `;
                                }).join('')}
                            </ul>
                        </div>
                    `;
                }).join('')}
                ${sortedChapters.length === 0 ? '<p style="text-align: center; color: var(--text-secondary); padding: 1rem;"><em>No hay capítulos en este módulo</em></p>' : ''}
            </div>
        `;
    }).join('');
}

function getResourceTypeLabel(type) {
    const labels = {
        link: 'Enlace Web',
        pdf: 'PDF',
        video: 'Video',
        document: 'Documento',
        platform: 'Plataforma',
        other: 'Recurso'
    };
    return labels[type] || 'Recurso';
}

// ========== VISTA DE ADMINISTRACIÓN ==========

function renderAdminView() {
    const container = document.getElementById('modulesAdminContainer');
    const sortedModules = [...modules].sort((a, b) => a.order - b.order);

    if (sortedModules.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-folder-open"></i>
                <p>No hay módulos. Crea el primero haciendo clic en "Nuevo Módulo"</p>
            </div>
        `;
        return;
    }

    const resourceIcons = {
        link: 'fas fa-link',
        pdf: 'fas fa-file-pdf',
        video: 'fas fa-video',
        document: 'fas fa-file-alt',
        platform: 'fas fa-laptop-code',
        other: 'fas fa-paperclip'
    };

    container.innerHTML = sortedModules.map(module => {
        const sortedChapters = [...(module.chapters || [])].sort((a, b) => a.order - b.order);
        const totalResources = sortedChapters.reduce((sum, ch) => sum + (ch.resources ? ch.resources.length : 0), 0);
        
        return `
            <div class="module-admin-item" data-module-id="${module.id}">
                <div class="module-admin-header">
                    <div class="module-admin-info">
                        <h4>${escapeHtml(module.name)}</h4>
                        <div class="module-admin-meta">
                            Orden: ${module.order} | ${sortedChapters.length} capítulo(s) | ${totalResources} recurso(s)
                            ${module.description ? ` | ${escapeHtml(module.description)}` : ''}
                        </div>
                    </div>
                    <div class="module-admin-actions">
                        <button class="btn btn-sm btn-success" onclick="openChapterModal('${module.id}')">
                            <i class="fas fa-plus"></i> Capítulo
                        </button>
                        <button class="btn btn-sm btn-primary" onclick="editModule('${module.id}')">
                            <i class="fas fa-edit"></i> Editar
                        </button>
                        <button class="btn btn-sm btn-danger" onclick="deleteModule('${module.id}')">
                            <i class="fas fa-trash"></i> Eliminar
                        </button>
                    </div>
                </div>
                <div class="chapters-admin-list">
                    ${sortedChapters.length === 0 ? `
                        <p style="color: var(--text-secondary); font-size: 0.875rem; text-align: center; padding: 1rem;">
                            No hay capítulos. Agrega el primero haciendo clic en "Capítulo"
                        </p>
                    ` : ''}
                    ${sortedChapters.map(chapter => {
                        const sortedResources = [...(chapter.resources || [])].sort((a, b) => {
                            const orderA = parseInt(a.order) || 999;
                            const orderB = parseInt(b.order) || 999;
                            if (orderA === orderB) {
                                return a.id.localeCompare(b.id);
                            }
                            return orderA - orderB;
                        });
                        
                        return `
                            <div class="chapter-admin-item" data-chapter-id="${chapter.id}">
                                <div class="chapter-admin-header">
                                    <div class="chapter-admin-info">
                                        <h5>📖 ${escapeHtml(chapter.name)}</h5>
                                        <div class="chapter-admin-meta">
                                            Orden: ${chapter.order} | ${sortedResources.length} recurso(s)
                                            ${chapter.description ? ` | ${escapeHtml(chapter.description)}` : ''}
                                        </div>
                                    </div>
                                    <div class="chapter-admin-actions">
                                        <button class="btn btn-sm btn-success" onclick="openResourceModal('${module.id}', '${chapter.id}')">
                                            <i class="fas fa-plus"></i> Recurso
                                        </button>
                                        <button class="btn btn-sm btn-primary" onclick="editChapter('${module.id}', '${chapter.id}')">
                                            <i class="fas fa-edit"></i> Editar
                                        </button>
                                        <button class="btn btn-sm btn-danger" onclick="deleteChapter('${module.id}', '${chapter.id}')">
                                            <i class="fas fa-trash"></i> Eliminar
                                        </button>
                                    </div>
                                </div>
                                <div class="resources-admin-list">
                                    ${sortedResources.length === 0 ? `
                                        <p style="color: var(--text-secondary); font-size: 0.75rem; text-align: center; padding: 0.75rem; font-style: italic;">
                                            No hay recursos en este capítulo
                                        </p>
                                    ` : ''}
                                    ${sortedResources.map(resource => {
                                        const urlDisplay = resource.url.startsWith('local:') 
                                            ? 'PDF cargado localmente' 
                                            : escapeHtml(resource.url);
                                        return `
                                        <div class="resource-admin-item" data-resource-id="${resource.id}" draggable="true">
                                            <i class="fas fa-grip-vertical drag-handle"></i>
                                            <div class="resource-admin-info">
                                                <div class="resource-admin-title">${escapeHtml(resource.title)}</div>
                                                <div class="resource-admin-url">${urlDisplay}</div>
                                            </div>
                                            <div class="resource-admin-actions">
                                                <button class="btn btn-sm btn-primary" onclick="editResource('${module.id}', '${chapter.id}', '${resource.id}')">
                                                    <i class="fas fa-edit"></i>
                                                </button>
                                                <button class="btn btn-sm btn-danger" onclick="deleteResource('${module.id}', '${chapter.id}', '${resource.id}')">
                                                    <i class="fas fa-trash"></i>
                                                </button>
                                            </div>
                                        </div>
                                    `;
                                    }).join('')}
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    }).join('');

    // Configurar drag and drop
    setupDragAndDrop();
}

function setupDragAndDrop() {
    const resourceItems = document.querySelectorAll('.resource-admin-item');
    
    resourceItems.forEach(item => {
        item.addEventListener('dragstart', handleDragStart);
        item.addEventListener('dragover', handleDragOver);
        item.addEventListener('drop', handleDrop);
        item.addEventListener('dragend', handleDragEnd);
    });
}

let draggedElement = null;
let draggedResourceId = null;
let draggedModuleId = null;
let draggedChapterId = null;

function handleDragStart(e) {
    draggedElement = this;
    draggedResourceId = this.dataset.resourceId;
    const moduleItem = this.closest('.module-admin-item');
    const chapterItem = this.closest('.chapter-admin-item');
    draggedModuleId = moduleItem ? moduleItem.dataset.moduleId : null;
    draggedChapterId = chapterItem ? chapterItem.dataset.chapterId : null;
    this.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
}

function handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault();
    }
    e.dataTransfer.dropEffect = 'move';
    
    const target = e.target.closest('.resource-admin-item');
    if (target && target !== draggedElement && target.dataset.resourceId) {
        const rect = target.getBoundingClientRect();
        const next = (e.clientY - rect.top) / (rect.bottom - rect.top) > 0.5;
        target.parentNode.insertBefore(draggedElement, next ? target.nextSibling : target);
    }
}

function handleDrop(e) {
    if (e.stopPropagation) {
        e.stopPropagation();
    }
    
    const targetChapter = e.target.closest('.chapter-admin-item');
    if (!targetChapter) return;
    
    const targetChapterId = targetChapter.dataset.chapterId;
    const targetModuleId = e.target.closest('.module-admin-item').dataset.moduleId;
    
    // Solo permitir mover dentro del mismo módulo
    if (targetModuleId !== draggedModuleId) return;
    
    const module = modules.find(m => m.id === draggedModuleId);
    if (!module) return;
    
    // Buscar el recurso en el capítulo original
    let resource = null;
    let sourceChapter = null;
    
    for (const chapter of module.chapters || []) {
        if (chapter.id === draggedChapterId) {
            resource = chapter.resources.find(r => r.id === draggedResourceId);
            if (resource) {
                sourceChapter = chapter;
                break;
            }
        }
    }
    
    if (!resource || !sourceChapter) return;
    
    const targetChapterData = module.chapters.find(c => c.id === targetChapterId);
    if (!targetChapterData) return;
    
    // Remover del capítulo original
    sourceChapter.resources = sourceChapter.resources.filter(r => r.id !== draggedResourceId);
    
    // Agregar al capítulo destino
    if (!targetChapterData.resources) {
        targetChapterData.resources = [];
    }
    targetChapterData.resources.push(resource);
    
    // Reordenar recursos en el capítulo destino
    reorderResources(draggedModuleId, targetChapterId);
    
    saveData();
    renderAdminView();
    return false;
}

function handleDragEnd(e) {
    this.classList.remove('dragging');
    draggedElement = null;
    draggedResourceId = null;
    draggedModuleId = null;
    draggedChapterId = null;
}

function reorderResources(moduleId, chapterId) {
    const module = modules.find(m => m.id === moduleId);
    if (!module) return;
    
    const chapter = module.chapters.find(c => c.id === chapterId);
    if (!chapter) return;
    
    const resourceItems = document.querySelectorAll(`[data-chapter-id="${chapterId}"] .resource-admin-item`);
    resourceItems.forEach((item, index) => {
        const resourceId = item.dataset.resourceId;
        const resource = chapter.resources.find(r => r.id === resourceId);
        if (resource) {
            resource.order = index + 1;
        }
    });
    saveData();
}

// ========== GESTIÓN DE MÓDULOS ==========

function openModuleModal(moduleId = null) {
    editingModuleId = moduleId;
    const modal = document.getElementById('moduleModal');
    const form = document.getElementById('moduleForm');
    const title = document.getElementById('modalTitle');
    
    if (moduleId) {
        const module = modules.find(m => m.id === moduleId);
        if (module) {
            title.textContent = 'Editar Módulo';
            document.getElementById('moduleName').value = module.name;
            document.getElementById('moduleIcon').value = module.icon || '';
            document.getElementById('moduleDescription').value = module.description || '';
            document.getElementById('moduleOrder').value = module.order;
        }
    } else {
        title.textContent = 'Nuevo Módulo';
        form.reset();
        const maxOrder = modules.length > 0 ? Math.max(...modules.map(m => m.order)) : 0;
        document.getElementById('moduleOrder').value = maxOrder + 1;
    }
    
    modal.classList.add('active');
}

function closeModuleModal() {
    document.getElementById('moduleModal').classList.remove('active');
    document.getElementById('moduleForm').reset();
    editingModuleId = null;
}

function handleModuleSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById('moduleName').value.trim();
    const icon = document.getElementById('moduleIcon').value.trim();
    const description = document.getElementById('moduleDescription').value.trim();
    const order = parseInt(document.getElementById('moduleOrder').value);
    
    if (editingModuleId) {
        // Editar módulo existente
        const module = modules.find(m => m.id === editingModuleId);
        if (module) {
            module.name = name;
            module.icon = icon || null;
            module.description = description;
            module.order = order;
        }
    } else {
        // Crear nuevo módulo
        const newModule = {
            id: generateId(),
            name,
            icon: icon || null,
            description,
            order,
            chapters: []
        };
        modules.push(newModule);
    }
    
    saveData();
    closeModuleModal();
    renderAdminView();
    renderStudentView();
}

function editModule(moduleId) {
    openModuleModal(moduleId);
}

function deleteModule(moduleId) {
    if (confirm('¿Estás seguro de eliminar este módulo? Se eliminarán todos sus capítulos y recursos.')) {
        modules = modules.filter(m => m.id !== moduleId);
        saveData();
        renderAdminView();
        renderStudentView();
    }
}

// ========== GESTIÓN DE CAPÍTULOS ==========

function openChapterModal(moduleId, chapterId = null) {
    currentModuleId = moduleId;
    editingChapterId = chapterId;
    const modal = document.getElementById('chapterModal');
    const form = document.getElementById('chapterForm');
    const title = document.getElementById('chapterModalTitle');
    
    document.getElementById('chapterModuleId').value = moduleId;
    
    const module = modules.find(m => m.id === moduleId);
    if (!module) return;
    
    if (chapterId) {
        const chapter = module.chapters.find(c => c.id === chapterId);
        if (chapter) {
            title.textContent = 'Editar Capítulo';
            document.getElementById('chapterName').value = chapter.name;
            document.getElementById('chapterDescription').value = chapter.description || '';
            document.getElementById('chapterOrder').value = chapter.order;
        }
    } else {
        title.textContent = 'Nuevo Capítulo';
        form.reset();
        document.getElementById('chapterModuleId').value = moduleId;
        const maxOrder = module.chapters.length > 0 
            ? Math.max(...module.chapters.map(c => c.order)) 
            : 0;
        document.getElementById('chapterOrder').value = maxOrder + 1;
    }
    
    modal.classList.add('active');
}

function closeChapterModal() {
    document.getElementById('chapterModal').classList.remove('active');
    document.getElementById('chapterForm').reset();
    editingChapterId = null;
    currentModuleId = null;
}

function handleChapterSubmit(e) {
    e.preventDefault();
    
    const moduleId = document.getElementById('chapterModuleId').value;
    const name = document.getElementById('chapterName').value.trim();
    const description = document.getElementById('chapterDescription').value.trim();
    const order = parseInt(document.getElementById('chapterOrder').value);
    
    const module = modules.find(m => m.id === moduleId);
    if (!module) return;
    
    if (!module.chapters) {
        module.chapters = [];
    }
    
    // Verificar si hay conflicto de orden y resolverlo
    const conflictingChapter = module.chapters.find(c => c.id !== editingChapterId && parseInt(c.order) === order);
    if (conflictingChapter) {
        // Si hay conflicto, desplazar los capítulos con orden >= al nuevo orden
        module.chapters.forEach(c => {
            if (c.id !== editingChapterId && parseInt(c.order) >= order) {
                c.order = parseInt(c.order) + 1;
            }
        });
    }
    
    if (editingChapterId) {
        // Editar capítulo existente
        const chapter = module.chapters.find(c => c.id === editingChapterId);
        if (chapter) {
            chapter.name = name;
            chapter.description = description;
            chapter.order = order;
        }
    } else {
        // Crear nuevo capítulo
        const newChapter = {
            id: generateId(),
            name,
            description,
            order,
            resources: []
        };
        module.chapters.push(newChapter);
    }
    
    saveData();
    closeChapterModal();
    renderAdminView();
    renderStudentView();
}

function editChapter(moduleId, chapterId) {
    openChapterModal(moduleId, chapterId);
}

function deleteChapter(moduleId, chapterId) {
    const module = modules.find(m => m.id === moduleId);
    if (!module) return;
    
    const chapter = module.chapters.find(c => c.id === chapterId);
    if (!chapter) return;
    
    const resourceCount = chapter.resources ? chapter.resources.length : 0;
    const message = resourceCount > 0
        ? `¿Estás seguro de eliminar este capítulo? Se eliminarán ${resourceCount} recurso(s).`
        : '¿Estás seguro de eliminar este capítulo?';
    
    if (confirm(message)) {
        module.chapters = module.chapters.filter(c => c.id !== chapterId);
        saveData();
        renderAdminView();
        renderStudentView();
    }
}

// ========== GESTIÓN DE RECURSOS ==========

function openResourceModal(moduleId, chapterId, resourceId = null) {
    currentModuleId = moduleId;
    currentChapterId = chapterId;
    editingResourceId = resourceId;
    const modal = document.getElementById('resourceModal');
    const form = document.getElementById('resourceForm');
    const title = document.getElementById('resourceModalTitle');
    const urlHelp = document.getElementById('urlHelp');
    const chapterSelect = document.getElementById('resourceChapter');
    
    document.getElementById('resourceModuleId').value = moduleId;
    document.getElementById('resourceChapterId').value = chapterId || '';
    
    const module = modules.find(m => m.id === moduleId);
    if (!module) return;
    
    // Cargar capítulos en el selector
    chapterSelect.innerHTML = '<option value="">Selecciona un capítulo</option>';
    if (module.chapters && module.chapters.length > 0) {
        const sortedChapters = [...module.chapters].sort((a, b) => a.order - b.order);
        sortedChapters.forEach(chapter => {
            const option = document.createElement('option');
            option.value = chapter.id;
            option.textContent = chapter.name;
            if (chapterId && chapter.id === chapterId) {
                option.selected = true;
            }
            chapterSelect.appendChild(option);
        });
    }
    
    if (resourceId) {
        // Buscar el recurso en todos los capítulos del módulo
        let foundResource = null;
        let foundChapter = null;
        
        for (const chapter of module.chapters || []) {
            const resource = chapter.resources.find(r => r.id === resourceId);
            if (resource) {
                foundResource = resource;
                foundChapter = chapter;
                break;
            }
        }
        
        if (foundResource && foundChapter) {
            title.textContent = 'Editar Recurso';
            document.getElementById('resourceTitle').value = foundResource.title;
            document.getElementById('resourceUrl').value = foundResource.url;
            document.getElementById('resourceType').value = foundResource.type;
            document.getElementById('resourceDescription').value = foundResource.description || '';
            document.getElementById('resourceOrder').value = foundResource.order;
            document.getElementById('resourceChapterId').value = foundChapter.id;
            chapterSelect.value = foundChapter.id;
            
            // Mostrar/ocultar file upload según el tipo
            if (foundResource.type === 'pdf') {
                document.getElementById('fileUploadGroup').style.display = 'block';
                urlHelp.textContent = 'Para PDFs: sube el archivo a la carpeta "pdfs" en GitHub y usa "pdfs/nombre.pdf" o una URL completa';
            } else {
                document.getElementById('fileUploadGroup').style.display = 'none';
                urlHelp.textContent = 'Para PDFs: sube el archivo a la carpeta "pdfs" en GitHub y usa "pdfs/nombre.pdf"';
            }
        }
    } else {
        title.textContent = 'Nuevo Recurso';
        form.reset();
        document.getElementById('resourceModuleId').value = moduleId;
        document.getElementById('resourceChapterId').value = chapterId || '';
        if (chapterId) {
            chapterSelect.value = chapterId;
        }
        document.getElementById('fileUploadGroup').style.display = 'none';
        urlHelp.textContent = 'Para PDFs: sube el archivo a la carpeta "pdfs" en GitHub y usa "pdfs/nombre.pdf"';
        urlHelp.style.color = 'var(--text-secondary)';
        
        // Calcular orden máximo del capítulo seleccionado
        const selectedChapter = module.chapters.find(c => c.id === chapterId);
        const maxOrder = selectedChapter && selectedChapter.resources && selectedChapter.resources.length > 0
            ? Math.max(...selectedChapter.resources.map(r => r.order))
            : 0;
        document.getElementById('resourceOrder').value = maxOrder + 1;
    }
    
    modal.classList.add('active');
}

function closeResourceModal() {
    document.getElementById('resourceModal').classList.remove('active');
    document.getElementById('resourceForm').reset();
    document.getElementById('fileUploadGroup').style.display = 'none';
    document.getElementById('fileUpload').value = '';
    editingResourceId = null;
    currentModuleId = null;
    currentChapterId = null;
}

function handleResourceTypeChange() {
    const type = document.getElementById('resourceType').value;
    const fileUploadGroup = document.getElementById('fileUploadGroup');
    const urlHelp = document.getElementById('urlHelp');
    
    if (type === 'pdf') {
        fileUploadGroup.style.display = 'block';
        urlHelp.textContent = 'Para PDFs: sube el archivo a la carpeta "pdfs" en GitHub y usa "pdfs/nombre.pdf" o una URL completa';
    } else {
        fileUploadGroup.style.display = 'none';
        urlHelp.textContent = 'Para PDFs: sube el archivo a la carpeta "pdfs" en GitHub y usa "pdfs/nombre.pdf"';
    }
}

function handleResourceChapterChange() {
    const chapterId = document.getElementById('resourceChapter').value;
    const moduleId = document.getElementById('resourceModuleId').value;
    
    if (!chapterId || !moduleId) return;
    
    const module = modules.find(m => m.id === moduleId);
    if (!module) return;
    
    const chapter = module.chapters.find(c => c.id === chapterId);
    if (!chapter) return;
    
    // Actualizar el orden automáticamente según el capítulo seleccionado
    const maxOrder = chapter.resources && chapter.resources.length > 0
        ? Math.max(...chapter.resources.map(r => r.order))
        : 0;
    document.getElementById('resourceOrder').value = maxOrder + 1;
    document.getElementById('resourceChapterId').value = chapterId;
}

function handleFileUpload(e) {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
        const reader = new FileReader();
        reader.onload = function(event) {
            // Guardar el PDF como base64 en localStorage
            const pdfData = event.target.result;
            const fileName = file.name;
            
            // Guardar en localStorage con un ID único
            const pdfId = 'pdf_' + Date.now();
            if (!localStorage.getItem('uploadedPDFs')) {
                localStorage.setItem('uploadedPDFs', JSON.stringify({}));
            }
            const pdfs = JSON.parse(localStorage.getItem('uploadedPDFs'));
            pdfs[pdfId] = {
                name: fileName,
                data: pdfData,
                uploaded: new Date().toISOString()
            };
            localStorage.setItem('uploadedPDFs', JSON.stringify(pdfs));
            
            // Actualizar el campo URL con el ID
            document.getElementById('resourceUrl').value = `local:${pdfId}`;
            
            // Mostrar mensaje de éxito
            const urlHelp = document.getElementById('urlHelp');
            urlHelp.textContent = `✓ PDF "${fileName}" cargado. Se guardará localmente.`;
            urlHelp.style.color = 'var(--success-color)';
        };
        reader.readAsDataURL(file);
    }
}

function handleResourceSubmit(e) {
    e.preventDefault();
    
    const moduleId = document.getElementById('resourceModuleId').value;
    const chapterId = document.getElementById('resourceChapter').value || document.getElementById('resourceChapterId').value;
    const title = document.getElementById('resourceTitle').value.trim();
    let url = document.getElementById('resourceUrl').value.trim();
    const type = document.getElementById('resourceType').value;
    const description = document.getElementById('resourceDescription').value.trim();
    const order = parseInt(document.getElementById('resourceOrder').value);
    
    if (!chapterId) {
        alert('Por favor selecciona un capítulo');
        return;
    }
    
    const module = modules.find(m => m.id === moduleId);
    if (!module) return;
    
    const chapter = module.chapters.find(c => c.id === chapterId);
    if (!chapter) return;
    
    if (!chapter.resources) {
        chapter.resources = [];
    }
    
    // Si es un PDF local, mantener la referencia
    // Si no, normalizar la URL
    if (type === 'pdf' && !url.startsWith('http') && !url.startsWith('local:')) {
        // Asegurar que las rutas relativas empiecen con pdfs/ si no tienen ruta
        if (!url.includes('/')) {
            url = 'pdfs/' + url;
        }
    }
    
    // Verificar si hay conflicto de orden y resolverlo
    const conflictingResource = chapter.resources.find(r => r.id !== editingResourceId && parseInt(r.order) === order);
    if (conflictingResource) {
        // Si hay conflicto, desplazar los recursos con orden >= al nuevo orden
        chapter.resources.forEach(r => {
            if (r.id !== editingResourceId && parseInt(r.order) >= order) {
                r.order = parseInt(r.order) + 1;
            }
        });
    }
    
    // Si estamos editando y cambió de capítulo, remover del capítulo anterior
    if (editingResourceId) {
        // Buscar el recurso en todos los capítulos
        for (const ch of module.chapters) {
            const oldResource = ch.resources.find(r => r.id === editingResourceId);
            if (oldResource && ch.id !== chapterId) {
                // Remover del capítulo anterior
                ch.resources = ch.resources.filter(r => r.id !== editingResourceId);
                break;
            }
        }
    }
    
    if (editingResourceId) {
        // Editar recurso existente
        const resource = chapter.resources.find(r => r.id === editingResourceId);
        if (resource) {
            resource.title = title;
            resource.url = url;
            resource.type = type;
            resource.description = description;
            resource.order = order;
        } else {
            // Si no está en este capítulo, agregarlo (fue movido)
            const newResource = {
                id: editingResourceId,
                title,
                url,
                type,
                description,
                order
            };
            chapter.resources.push(newResource);
        }
    } else {
        // Crear nuevo recurso
        const newResource = {
            id: generateId(),
            title,
            url,
            type,
            description,
            order
        };
        chapter.resources.push(newResource);
    }
    
    saveData();
    closeResourceModal();
    renderAdminView();
    renderStudentView();
}

function editResource(moduleId, chapterId, resourceId) {
    openResourceModal(moduleId, chapterId, resourceId);
}

function deleteResource(moduleId, chapterId, resourceId) {
    if (confirm('¿Estás seguro de eliminar este recurso?')) {
        const module = modules.find(m => m.id === moduleId);
        if (module) {
            const chapter = module.chapters.find(c => c.id === chapterId);
            if (chapter) {
                chapter.resources = chapter.resources.filter(r => r.id !== resourceId);
                saveData();
                renderAdminView();
                renderStudentView();
            }
        }
    }
}

// ========== UTILIDADES ==========

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Hacer funciones globales para los onclick
window.editModule = editModule;
window.deleteModule = deleteModule;
window.openChapterModal = openChapterModal;
window.editChapter = editChapter;
window.deleteChapter = deleteChapter;
window.openResourceModal = openResourceModal;
window.editResource = editResource;
window.deleteResource = deleteResource;

// ========== FUNCIÓN PARA MARCAR RECURSOS COMO VISITADOS ==========
function markResourceAsVisited(resourceKey) {
    const visitedResources = JSON.parse(localStorage.getItem('visitedResources') || '{}');
    if (!visitedResources[resourceKey]) {
        visitedResources[resourceKey] = true;
        localStorage.setItem('visitedResources', JSON.stringify(visitedResources));
        
        // Actualizar visualmente el recurso
        const resourceItem = document.querySelector(`[data-resource-key="${resourceKey}"]`);
        if (resourceItem) {
            resourceItem.classList.add('resource-visited');
            const resourceTitle = resourceItem.querySelector('.resource-title');
            if (resourceTitle && !resourceTitle.querySelector('.resource-visited-icon')) {
                resourceTitle.innerHTML += ' <i class="fas fa-check-circle resource-visited-icon"></i>';
            }
        }
    }
}

window.markResourceAsVisited = markResourceAsVisited;

