// Base de datos de IAs con sus links oficiales - Listado Completo
const AI_DATABASE = {
    // Asistentes Conversacionales
    'chatgpt': 'https://chat.openai.com',
    'openai': 'https://chat.openai.com',
    'gpt': 'https://chat.openai.com',
    'chat gpt': 'https://chat.openai.com',
    'claude': 'https://claude.ai',
    'anthropic': 'https://claude.ai',
    'gemini': 'https://gemini.google.com',
    'google gemini': 'https://gemini.google.com',
    'bard': 'https://gemini.google.com',
    'perplexity': 'https://www.perplexity.ai',
    'perplexity ai': 'https://www.perplexity.ai',
    'deepseek': 'https://chat.deepseek.com',
    'deep seek': 'https://chat.deepseek.com',
    'copilot': 'https://copilot.microsoft.com',
    'microsoft copilot': 'https://copilot.microsoft.com',
    'bing chat': 'https://copilot.microsoft.com',
    'poe': 'https://poe.com',
    'pi': 'https://pi.ai',
    'character ai': 'https://character.ai',
    'characterai': 'https://character.ai',
    'janitor ai': 'https://janitorai.com',
    'janitorai': 'https://janitorai.com',
    
    // Diseño y Creatividad
    'canva': 'https://www.canva.com',
    'midjourney': 'https://www.midjourney.com',
    'leonardo ai': 'https://leonardo.ai',
    'leonardo': 'https://leonardo.ai',
    'remove bg': 'https://www.remove.bg',
    'removebg': 'https://www.remove.bg',
    'runway': 'https://runwayml.com',
    'runway ml': 'https://runwayml.com',
    'gamma': 'https://gamma.app',
    'deepai': 'https://deepai.org',
    'deep ai': 'https://deepai.org',
    
    // Escritura y Texto
    'quillbot': 'https://quillbot.com',
    'deepl': 'https://www.deepl.com',
    'deep l': 'https://www.deepl.com',
    'grammarly': 'https://www.grammarly.com',
    'superhuman': 'https://superhuman.com',
    
    // Video y Audio
    'capcut': 'https://www.capcut.com',
    'cap cut': 'https://www.capcut.com',
    'suno': 'https://www.suno.ai',
    'suno ai': 'https://www.suno.ai',
    'elevenlabs': 'https://elevenlabs.io',
    'eleven labs': 'https://elevenlabs.io',
    'invideo': 'https://invideo.io',
    'in video': 'https://invideo.io',
    
    // Desarrollo y Código
    'replit': 'https://replit.com',
    'cursor': 'https://cursor.sh',
    'hugging face': 'https://huggingface.co',
    'huggingface': 'https://huggingface.co',
    'hugging chat': 'https://huggingface.co/chat',
    'google ai studio': 'https://aistudio.google.com',
    'ai studio': 'https://aistudio.google.com',
    
    // Automatización
    'zapier': 'https://zapier.com',
    'n8n': 'https://n8n.io',
    
    // Búsqueda y Investigación
    'consensus': 'https://consensus.app',
    'you': 'https://you.com',
    'you.com': 'https://you.com',
    
    // Otras plataformas
    'meta ai': 'https://www.meta.ai',
    'llama': 'https://www.meta.ai',
    'kimi': 'https://kimi.moonshot.cn',
    'kimi ai': 'https://kimi.moonshot.cn',
    'moonshot': 'https://kimi.moonshot.cn',
    'manus': 'https://www.manus.ai',
    'manus ai': 'https://www.manus.ai',
    'seedream': 'https://seedream.pro',
    'see dream': 'https://seedream.pro',
    'prompt cowboy': 'https://www.promptcowboy.ai/',
    'promptcowboy': 'https://www.promptcowboy.ai/',
    
    // 20 IAs adicionales populares
    'qwen': 'https://qwenlm.github.io',
    'qwen ai': 'https://qwenlm.github.io',
    'qwen3': 'https://qwenlm.github.io',
    'ltx': 'https://ltx.studio',
    'ltx studio': 'https://ltx.studio',
    'groq': 'https://groq.com',
    'groq ai': 'https://groq.com',
    'o1': 'https://openai.com/o1',
    'openai o1': 'https://openai.com/o1',
    'mistral': 'https://mistral.ai',
    'mistral ai': 'https://mistral.ai',
    'x ai': 'https://x.ai',
    'xai': 'https://x.ai',
    'grok': 'https://x.ai/grok',
    'notion ai': 'https://www.notion.so/product/ai',
    'notion': 'https://www.notion.so/product/ai',
    'jasper': 'https://www.jasper.ai',
    'jasper ai': 'https://www.jasper.ai',
    'copy ai': 'https://www.copy.ai',
    'copyai': 'https://www.copy.ai',
    'writesonic': 'https://writesonic.com',
    'write sonic': 'https://writesonic.com',
    'framer': 'https://www.framer.com',
    'tome': 'https://tome.app',
    'beautiful ai': 'https://www.beautiful.ai',
    'beautifulai': 'https://www.beautiful.ai',
    'pictory': 'https://pictory.ai',
    'synthesia': 'https://www.synthesia.io',
    'd-id': 'https://www.d-id.com',
    'did': 'https://www.d-id.com',
    'luma': 'https://lumalabs.ai',
    'luma labs': 'https://lumalabs.ai',
    'stability ai': 'https://stability.ai',
    'stability': 'https://stability.ai',
    'dall-e': 'https://openai.com/dall-e-3',
    'dalle': 'https://openai.com/dall-e-3',
    'ideogram': 'https://ideogram.ai',
    'firefly': 'https://firefly.adobe.com',
    'adobe firefly': 'https://firefly.adobe.com'
};

// Plantillas de ejemplos de transferencia
const TRANSFERENCIA_TEMPLATES = [
    {
        title: 'Protocolo de Investigación (Marketing)',
        per: 'Actúa como experto en metodología aplicada en el campo del marketing digital.',
        t: 'Diseñar un protocolo de trabajo paso a paso para investigar y producir nuevo conocimiento sobre cómo mejorar la tasa de conversión de una página de venta de cursos online.',
        co: 'Trabajo en una pequeña empresa que vende cursos online sobre diferentes temas. Queremos entender qué factores influyen más en la tasa de conversión (textos, diseño, precios, testimonios, etc.) y cómo probar mejoras de forma sistemática.',
        f: 'Devuelve el protocolo en forma de lista numerada con fases claras (definición del problema, recolección de datos, análisis, experimentación, evaluación) y, al final, una sección titulada "CÓMO USAR ESTE PROTOCOLO CON IA GENERATIVA" explicando cómo el usuario puede volver a consultarte en cada fase.'
    },
    {
        title: 'Análisis de Documentos (Derecho)',
        per: 'Actúa como analista jurídico experto en derecho laboral.',
        t: 'Analizar, sintetizar y comparar tres documentos legales sobre contratos de prestación de servicios y luego aplicar las conclusiones a un caso concreto de una empresa que contrata freelancers.',
        co: 'Te proporcionaré resúmenes de tres documentos: una ley, una sentencia y un concepto jurídico sobre contratos de prestación de servicios. Después, te describiré el caso de una empresa que lleva años contratando freelancers y quiere saber si hay riesgos de que se considere relación laboral.',
        f: 'Devuelve tres secciones con estos títulos:\n\n1. SÍNTESIS: resumen integrado de las ideas clave de los tres documentos.\n\n2. CUADRO COMPARATIVO: coincidencias y diferencias principales entre los documentos.\n\n3. APLICACIÓN AL CASO: análisis del caso de la empresa con recomendaciones concretas y riesgos identificados.'
    },
    {
        title: 'Personificación para Decisiones (Periodismo)',
        per: 'Actúa como editor jefe de un medio de comunicación digital con amplia experiencia en periodismo de investigación.',
        t: 'Ayudarme a tomar una decisión informada sobre el enfoque editorial de un reportaje sobre corrupción en la contratación pública.',
        co: 'Soy periodista en un medio digital mediano. Tengo información sobre posibles irregularidades en contratación pública en una alcaldía, pero el tema es sensible políticamente y el tiempo de publicación es limitado. Necesito decidir si:\na) Publico un gran reportaje de investigación,\nb) Divido la historia en una serie de artículos,\nc) Empiezo con una nota más corta mientras sigo investigando.',
        f: 'Devuelve:\n\n1. Lista de opciones posibles con breve descripción.\n\n2. Análisis comparativo de riesgos, ventajas y desventajas de cada opción (incluyendo impacto en la audiencia y en la credibilidad del medio).\n\n3. Recomendación final con justificación clara y sugerencias de cómo minimizar riesgos éticos y legales.'
    },
    {
        title: 'Modelo de Cálculo (Marketing)',
        per: 'Actúa como analista de datos especializado en marketing digital.',
        t: 'Diseñar un modelo de cálculo para estimar el retorno de inversión (ROI) de una campaña de anuncios en redes sociales.',
        co: 'Trabajo en una agencia pequeña. Quiero un modelo que me permita ingresar: presupuesto invertido, número de clics, número de leads generados, número de clientes finales y valor promedio de la compra. A partir de esto, necesito calcular el costo por clic, costo por lead, tasa de conversión y ROI de la campaña.',
        f: '\n1. Define todas las variables del modelo con una explicación sencilla.\n\n2. Proporciona las fórmulas en un formato compatible con Excel o Google Sheets.\n\n3. Incluye un ejemplo numérico completo mostrando el cálculo paso a paso para que pueda replicarlo.'
    },
    {
        title: 'Entrenador de Habilidades (Copywriting)',
        per: 'Actúa como entrenador experto en redacción publicitaria (copywriting) para marketing digital.',
        t: 'Diseñar una sesión de entrenamiento con ejercicios y feedback para que mejore mi habilidad de escribir anuncios persuasivos para redes sociales.',
        co: 'Mi nivel actual es intermedio. Suelo escribir anuncios correctos, pero poco llamativos. Quiero practicar cómo escribir textos más persuasivos, claros y con llamados a la acción efectivos. Dispongo de 45 minutos para practicar hoy.',
        f: '\n1. Propón 5 ejercicios progresivos donde yo tenga que escribir o mejorar copies para anuncios en redes sociales.\n\n2. Preséntame cada ejercicio de uno en uno, pidiéndome que responda antes de mostrar el siguiente.\n\n3. Después de cada respuesta, evalúala con feedback específico (qué está bien, qué se puede mejorar, ejemplos de mejora) y recomendaciones concretas.'
    },
    {
        title: 'Diseño de Procesos (Publicidad)',
        per: 'Actúa como consultor de procesos experto en gestión de proyectos en agencias de publicidad.',
        t: 'Diseñar un flujo de trabajo claro y ordenado para gestionar una campaña publicitaria desde el brief hasta la entrega final al cliente.',
        co: 'Trabajo en una agencia pequeña con un equipo de creativos, diseñadores y un community manager. Tenemos problemas de desorden: cambios de última hora, tareas duplicadas y confusión sobre quién hace qué. Necesitamos un proceso estándar que podamos seguir en todas las campañas.',
        f: 'Devuelve:\n\n• Etapas del proceso (brief, investigación, concepto creativo, producción, revisión interna, entrega al cliente, ajustes, lanzamiento).\n\n• Tareas clave en cada etapa.\n\n• Roles responsables y colaboradores en cada tarea.\n\n• Principales riesgos habituales y sugerencias para mitigarlos (por ejemplo, falta de claridad del brief, cambios tardíos del cliente, etc.).'
    },
    {
        title: 'Mejora de Productos (Comunicación)',
        per: 'Actúa como comunicador corporativo senior con experiencia en grandes empresas.',
        t: 'Mejorar un comunicado de prensa para que sea más claro, atractivo y adecuado para medios generalistas.',
        co: 'Tengo un borrador de comunicado sobre el lanzamiento de un nuevo servicio de la empresa. El público objetivo son periodistas de medios generalistas y el público final es la ciudadanía. El tono debe ser profesional, claro y fácil de entender, sin tecnicismos innecesarios. Te pegaré el borrador del comunicado para que lo revises.',
        f: 'Devuelve:\n\n1. Una versión mejorada del comunicado lista para enviar a medios.\n\n2. Una breve explicación de los cambios principales realizados (por ejemplo: simplificación del lenguaje, mejora del titular, reordenamiento de la información, etc.).\n\n3. Opcionalmente, sugiere 2 o 3 posibles titulares alternativos más atractivos.'
    },
    {
        title: 'Estrategia de Contenidos (Marketing)',
        per: 'Actúa como estratega de marketing de contenidos con experiencia en redes sociales y blogs.',
        t: 'Diseñar una estrategia de contenidos para posicionar a un profesional independiente (freelancer) de diseño gráfico en redes sociales durante los próximos 3 meses.',
        co: 'El profesional ofrece servicios de branding, diseño de logotipos y piezas para redes sociales. Público objetivo: emprendedores y pequeñas empresas. Presupuesto limitado, pero puede dedicar tiempo a crear contenido. Plataforma principal: Instagram y, de apoyo, LinkedIn.',
        f: 'Entrega:\n\n• Objetivos específicos de la estrategia (por ejemplo, visibilidad, captación de clientes, construcción de marca personal).\n\n• Líneas de contenido (tipos de publicaciones: educativos, portfolio, detrás de cámaras, testimonios, etc.).\n\n• Propuesta de calendario de contenidos (frecuencia semanal y ejemplos de temas).\n\n• Indicadores clave para evaluar resultados (seguidores, interacción, mensajes recibidos, solicitudes de presupuesto, etc.).'
    },
    {
        title: 'KPIs y Métricas (Comunicación)',
        per: 'Actúa como especialista en métricas de comunicación digital.',
        t: 'Diseñar un conjunto de indicadores y KPIs para evaluar el impacto de la estrategia de contenidos de una marca en redes sociales.',
        co: 'La marca es una organización sin ánimo de lucro que busca visibilizar causas sociales y aumentar la participación ciudadana en sus actividades. Trabaja principalmente en Instagram, Facebook y TikTok. No solo le interesa el número de seguidores, sino la calidad de la interacción y la participación real en eventos.',
        f: 'Devuelve:\n\n1. Lista de indicadores y KPIs organizados en categorías (alcance, interacción, conversión/acción).\n\n2. Definición clara de cada indicador y cómo se calcula (fórmula o método).\n\n3. Sugerencias sobre cada cuánto tiempo medirlos y qué herramientas se pueden usar para obtener los datos.'
    },
    {
        title: 'Casos y Simulaciones (Ética)',
        per: 'Actúa como diseñador de casos de entrenamiento en ética profesional.',
        t: 'Crear un caso o escenario realista para que un estudiante de comunicación social practique la toma de decisiones éticas frente a la difusión de información sensible.',
        co: 'El estudiante trabaja en la redacción de un medio digital y recibe información no verificada sobre la vida privada de una figura pública. Hay presión por publicar rápido para ganar visitas, pero existen dudas éticas y legales. El caso debe permitir discutir veracidad, derecho a la intimidad y responsabilidad social del periodista.',
        f: 'Devuelve:\n\n• Historia del caso con contexto, personajes y situación detallada.\n\n• Dilemas o decisiones clave que el estudiante debe enfrentar.\n\n• Preguntas de reflexión para discutir en clase o de forma individual.\n\n• Una sección final con posibles enfoques de solución y sus pros y contras, presentada como guía, no como "respuesta única".'
    },
    {
        title: 'Análisis de Datos (Campañas)',
        per: 'Actúa como analista de datos especializado en campañas digitales.',
        t: 'Analizar los resultados de una campaña de anuncios en redes sociales y proponer decisiones concretas de mejora.',
        co: 'Te proporcionaré una tabla con datos básicos: impresiones, clics, costo, leads generados, conversiones y comentarios de los usuarios. El objetivo de la campaña es conseguir registros para un webinar gratuito y luego vender un curso online. Queremos saber qué anuncios funcionan mejor, qué segmentos de público responden mejor y qué ajustes hacer en la próxima campaña.',
        f: '\n1. Resume los hallazgos clave de los datos (qué funciona y qué no).\n\n2. Señala problemas u oportunidades que se detecten en las métricas.\n\n3. Propón acciones concretas de mejora (cambios en segmentación, mensajes, formatos, horarios, etc.) y ordénalas por prioridad.'
    },
    {
        title: 'Adaptación de Contenido (Comunicación)',
        per: 'Actúa como especialista en comunicación y divulgación de resultados.',
        t: 'Adaptar un informe técnico denso sobre resultados de una investigación a diferentes públicos y canales de comunicación.',
        co: 'Tengo un informe técnico extenso con lenguaje académico. Quiero:\n\n• Una versión resumida para directivos de la organización (en formato de informe ejecutivo).\n\n• Una versión adaptada para el público general (en formato de artículo o entrada de blog).\n\n• Un guion breve para un video explicativo de 2 minutos para redes sociales.',
        f: '\n1. Produce una versión resumida tipo informe ejecutivo para directivos (máximo 1 página de texto).\n\n2. Produce una versión para público general con lenguaje claro y cercano, destacando impacto y conclusiones principales.\n\n3. Produce un guion para video de 2 minutos con estructura de inicio, desarrollo y cierre, incluyendo indicaciones básicas de voz y posibles apoyos visuales.'
    }
];

// Base de datos completa de IAs con descripciones de uso
const AI_DIRECTORY = [
    // ASISTENTES CONVERSACIONALES
    {
        name: 'ChatGPT',
        url: 'https://chat.openai.com',
        use: 'Asistente conversacional multiuso para chat, escritura, análisis, programación y resolución de problemas generales.',
        category: 'Asistentes Conversacionales',
        keywords: ['chatgpt', 'openai', 'gpt', 'chat gpt']
    },
    {
        name: 'Claude',
        url: 'https://claude.ai',
        use: 'Asistente conversacional de Anthropic especializado en análisis de documentos largos, razonamiento y escritura profesional.',
        category: 'Asistentes Conversacionales',
        keywords: ['claude', 'anthropic']
    },
    {
        name: 'Google Gemini',
        url: 'https://gemini.google.com',
        use: 'Chatbot y suite de IA de Google para conversación, análisis de imágenes, escritura y tareas múltiples integradas con servicios de Google.',
        category: 'Asistentes Conversacionales',
        keywords: ['gemini', 'google gemini', 'bard']
    },
    {
        name: 'Perplexity AI',
        url: 'https://www.perplexity.ai',
        use: 'Buscador conversacional con citas de fuentes. Ideal para investigación, verificación de hechos y respuestas basadas en información actual.',
        category: 'Asistentes Conversacionales',
        keywords: ['perplexity', 'perplexity ai']
    },
    {
        name: 'DeepSeek',
        url: 'https://chat.deepseek.com',
        use: 'Modelo de IA de código abierto muy popular. Excelente para programación, análisis técnico y conversación general.',
        category: 'Asistentes Conversacionales',
        keywords: ['deepseek', 'deep seek']
    },
    {
        name: 'Microsoft Copilot',
        url: 'https://copilot.microsoft.com',
        use: 'Asistente integrado en Windows y Microsoft 365. Útil para productividad, escritura, análisis y automatización en el ecosistema Microsoft.',
        category: 'Asistentes Conversacionales',
        keywords: ['copilot', 'microsoft copilot', 'bing chat']
    },
    {
        name: 'Poe',
        url: 'https://poe.com',
        use: 'Plataforma que agrupa varios chatbots y modelos en un solo lugar. Permite probar múltiples IAs y comparar respuestas.',
        category: 'Asistentes Conversacionales',
        keywords: ['poe']
    },
    {
        name: 'Character.ai',
        url: 'https://character.ai',
        use: 'Chatbots con personajes. Ideal para entretenimiento, roleplay, práctica de conversación y aprendizaje de idiomas.',
        category: 'Asistentes Conversacionales',
        keywords: ['character ai', 'characterai']
    },
    {
        name: 'Janitor AI',
        url: 'https://janitorai.com',
        use: 'Chatbots de rol y asistentes personalizados. Útil para creación de personajes y conversaciones temáticas.',
        category: 'Asistentes Conversacionales',
        keywords: ['janitor ai', 'janitorai']
    },
    {
        name: 'QWEN',
        url: 'https://qwenlm.github.io',
        use: 'Modelo de IA multilingüe avanzado. Excelente para tareas en diferentes idiomas, análisis y programación.',
        category: 'Asistentes Conversacionales',
        keywords: ['qwen', 'qwen ai', 'qwen3']
    },
    {
        name: 'LTX Studio',
        url: 'https://ltx.studio',
        use: 'Plataforma de IA para creación de contenido. Útil para generar narrativas y contenido multimedia.',
        category: 'Asistentes Conversacionales',
        keywords: ['ltx', 'ltx studio']
    },
    {
        name: 'Groq AI',
        url: 'https://groq.com',
        use: 'Plataforma de IA de alto rendimiento. Ideal para tareas que requieren velocidad y procesamiento rápido.',
        category: 'Asistentes Conversacionales',
        keywords: ['groq', 'groq ai']
    },
    {
        name: 'OpenAI O1',
        url: 'https://openai.com/o1',
        use: 'Modelo avanzado de OpenAI para razonamiento complejo, resolución de problemas matemáticos y análisis profundo.',
        category: 'Asistentes Conversacionales',
        keywords: ['o1', 'openai o1']
    },
    {
        name: 'Mistral AI',
        url: 'https://mistral.ai',
        use: 'Modelo de IA europeo eficiente. Bueno para análisis, escritura y tareas de procesamiento de lenguaje.',
        category: 'Asistentes Conversacionales',
        keywords: ['mistral', 'mistral ai']
    },
    {
        name: 'Grok (X.AI)',
        url: 'https://x.ai/grok',
        use: 'Asistente de IA de X (Twitter) con acceso a información en tiempo real de la plataforma. Ideal para análisis de tendencias.',
        category: 'Asistentes Conversacionales',
        keywords: ['grok', 'x ai', 'xai']
    },
    {
        name: 'Meta AI',
        url: 'https://www.meta.ai',
        use: 'Asistente de Meta integrado en Facebook, Instagram y WhatsApp. Útil para búsquedas y asistencia en redes sociales.',
        category: 'Asistentes Conversacionales',
        keywords: ['meta ai', 'llama']
    },
    {
        name: 'Kimi AI',
        url: 'https://kimi.moonshot.cn',
        use: 'Asistente chino con excelente manejo de contexto largo. Ideal para análisis de documentos extensos y conversación.',
        category: 'Asistentes Conversacionales',
        keywords: ['kimi', 'kimi ai', 'moonshot']
    },

    // DISEÑO Y CREATIVIDAD
    {
        name: 'Canva Magic Studio',
        url: 'https://www.canva.com',
        use: 'Diseño con IA integrado. Genera imágenes, diseña gráficos, presenta y crea contenido visual profesional con herramientas de IA.',
        category: 'Diseño y Creatividad',
        keywords: ['canva']
    },
    {
        name: 'Midjourney',
        url: 'https://www.midjourney.com',
        use: 'Generación de imágenes creativas de alta calidad. Perfecto para arte, ilustraciones, conceptos visuales y creatividad artística.',
        category: 'Diseño y Creatividad',
        keywords: ['midjourney']
    },
    {
        name: 'Leonardo AI',
        url: 'https://leonardo.ai',
        use: 'Imágenes y assets para juegos/diseño. Ideal para generación de assets, sprites, texturas y elementos visuales para proyectos.',
        category: 'Diseño y Creatividad',
        keywords: ['leonardo ai', 'leonardo']
    },
    {
        name: 'Remove.bg',
        url: 'https://www.remove.bg',
        use: 'Eliminar fondos de imágenes automáticamente. Perfecto para edición rápida de fotos y preparación de imágenes para diseño.',
        category: 'Diseño y Creatividad',
        keywords: ['remove bg', 'removebg']
    },
    {
        name: 'Runway',
        url: 'https://runwayml.com',
        use: 'Video e imagen generativa para creadores. Herramientas de IA para edición de video, generación de imágenes y efectos especiales.',
        category: 'Diseño y Creatividad',
        keywords: ['runway', 'runway ml']
    },
    {
        name: 'Gamma',
        url: 'https://gamma.app',
        use: 'Creación de presentaciones y documentos con IA. Genera presentaciones, documentos y contenido visual automáticamente.',
        category: 'Diseño y Creatividad',
        keywords: ['gamma']
    },
    {
        name: 'DeepAI',
        url: 'https://deepai.org',
        use: 'Colección de herramientas: imagen, texto, etc. Múltiples herramientas de IA para generación de imágenes, texto y procesamiento.',
        category: 'Diseño y Creatividad',
        keywords: ['deepai', 'deep ai']
    },
    {
        name: 'DALL-E',
        url: 'https://openai.com/dall-e-3',
        use: 'Generación de imágenes de alta calidad con descripción de texto. Crea imágenes realistas y artísticas desde prompts.',
        category: 'Diseño y Creatividad',
        keywords: ['dall-e', 'dalle']
    },
    {
        name: 'Ideogram',
        url: 'https://ideogram.ai',
        use: 'Generación de imágenes con excelente renderizado de texto. Ideal para crear imágenes que incluyan texto legible.',
        category: 'Diseño y Creatividad',
        keywords: ['ideogram']
    },
    {
        name: 'Adobe Firefly',
        url: 'https://firefly.adobe.com',
        use: 'Suite de IA creativa de Adobe. Genera imágenes, edita fotos y crea contenido visual integrado con herramientas Adobe.',
        category: 'Diseño y Creatividad',
        keywords: ['firefly', 'adobe firefly']
    },
    {
        name: 'Stability AI',
        url: 'https://stability.ai',
        use: 'Modelos de IA de código abierto para generación de imágenes. Stable Diffusion y herramientas avanzadas de creación visual.',
        category: 'Diseño y Creatividad',
        keywords: ['stability ai', 'stability']
    },
    {
        name: 'Framer',
        url: 'https://www.framer.com',
        use: 'Diseño web y prototipado con IA. Crea sitios web y prototipos interactivos con asistencia de IA.',
        category: 'Diseño y Creatividad',
        keywords: ['framer']
    },
    {
        name: 'Beautiful.ai',
        url: 'https://www.beautiful.ai',
        use: 'Creación automática de presentaciones profesionales. Diseña presentaciones visuales atractivas con IA.',
        category: 'Diseño y Creatividad',
        keywords: ['beautiful ai', 'beautifulai']
    },
    {
        name: 'Tome',
        url: 'https://tome.app',
        use: 'Creación de presentaciones narrativas con IA. Genera presentaciones interactivas y storytelling visual.',
        category: 'Diseño y Creatividad',
        keywords: ['tome']
    },

    // ESCRITURA Y TEXTO
    {
        name: 'QuillBot',
        url: 'https://quillbot.com',
        use: 'Paráfrasis y escritura. Reescribe textos, mejora redacción, verifica gramática y genera contenido alternativo.',
        category: 'Escritura y Texto',
        keywords: ['quillbot']
    },
    {
        name: 'DeepL',
        url: 'https://www.deepl.com',
        use: 'Traducción y redacción asistida de alta calidad. Traduce textos con precisión natural y ayuda con escritura en otros idiomas.',
        category: 'Escritura y Texto',
        keywords: ['deepl', 'deep l']
    },
    {
        name: 'Grammarly',
        url: 'https://www.grammarly.com',
        use: 'Corrección y reescritura de textos. Verifica gramática, estilo, tono y sugiere mejoras en tiempo real.',
        category: 'Escritura y Texto',
        keywords: ['grammarly']
    },
    {
        name: 'Superhuman',
        url: 'https://superhuman.com',
        use: 'Corrección y reescritura de textos avanzada. Mejora emails, documentos y comunicación escrita profesional.',
        category: 'Escritura y Texto',
        keywords: ['superhuman']
    },
    {
        name: 'Jasper AI',
        url: 'https://www.jasper.ai',
        use: 'Generación de contenido de marketing y copywriting. Crea textos publicitarios, blogs, emails y contenido comercial.',
        category: 'Escritura y Texto',
        keywords: ['jasper', 'jasper ai']
    },
    {
        name: 'Copy.ai',
        url: 'https://www.copy.ai',
        use: 'Generación de copy publicitario y contenido de marketing. Herramienta especializada en textos persuasivos y llamativos.',
        category: 'Escritura y Texto',
        keywords: ['copy ai', 'copyai']
    },
    {
        name: 'Writesonic',
        url: 'https://writesonic.com',
        use: 'Generación de contenido para blogs, ads y marketing. Crea artículos, descripciones de productos y contenido SEO optimizado.',
        category: 'Escritura y Texto',
        keywords: ['writesonic', 'write sonic']
    },
    {
        name: 'Notion AI',
        url: 'https://www.notion.so/product/ai',
        use: 'Asistente de escritura integrado en Notion. Ayuda con redacción, resúmenes, brainstorming y organización de ideas.',
        category: 'Escritura y Texto',
        keywords: ['notion ai', 'notion']
    },

    // VIDEO Y AUDIO
    {
        name: 'CapCut',
        url: 'https://www.capcut.com',
        use: 'Edición de video con IA. Edita videos, añade efectos, transcripciones automáticas y herramientas inteligentes de edición.',
        category: 'Video y Audio',
        keywords: ['capcut', 'cap cut']
    },
    {
        name: 'Suno',
        url: 'https://www.suno.ai',
        use: 'Generación de música y audio con IA. Crea canciones, música de fondo y efectos de sonido desde descripciones de texto.',
        category: 'Video y Audio',
        keywords: ['suno', 'suno ai']
    },
    {
        name: 'ElevenLabs',
        url: 'https://elevenlabs.io',
        use: 'Voz sintética y clonación de voz. Genera voces naturales, narraciones, doblajes y clonación de voces para audio.',
        category: 'Video y Audio',
        keywords: ['elevenlabs', 'eleven labs']
    },
    {
        name: 'InVideo',
        url: 'https://invideo.io',
        use: 'Creación de videos a partir de texto. Genera videos profesionales automáticamente desde guiones y descripciones.',
        category: 'Video y Audio',
        keywords: ['invideo', 'in video']
    },
    {
        name: 'Pictory',
        url: 'https://pictory.ai',
        use: 'Creación automática de videos desde scripts y artículos. Convierte texto en videos con voz y visuales automáticos.',
        category: 'Video y Audio',
        keywords: ['pictory']
    },
    {
        name: 'Synthesia',
        url: 'https://www.synthesia.io',
        use: 'Creación de videos con avatares AI. Genera videos con presentadores virtuales para training, marketing y comunicación.',
        category: 'Video y Audio',
        keywords: ['synthesia']
    },
    {
        name: 'D-ID',
        url: 'https://www.d-id.com',
        use: 'Videos con avatares hablantes animados. Crea videos donde avatares hablan cualquier texto en múltiples idiomas.',
        category: 'Video y Audio',
        keywords: ['d-id', 'did']
    },
    {
        name: 'Luma Labs',
        url: 'https://lumalabs.ai',
        use: 'Generación de videos 3D y captura. Crea modelos 3D desde imágenes y genera contenido visual tridimensional.',
        category: 'Video y Audio',
        keywords: ['luma', 'luma labs']
    },

    // DESARROLLO Y CÓDIGO
    {
        name: 'Replit',
        url: 'https://replit.com',
        use: 'Plataforma de código con asistente de IA. Programa, debug y colabora con IA integrada para desarrollo de software.',
        category: 'Desarrollo y Código',
        keywords: ['replit']
    },
    {
        name: 'Cursor',
        url: 'https://cursor.sh',
        use: 'Editor de código con copiloto de IA. Editor avanzado que usa IA para escribir, refactorizar y mejorar código automáticamente.',
        category: 'Desarrollo y Código',
        keywords: ['cursor']
    },
    {
        name: 'Hugging Face',
        url: 'https://huggingface.co',
        use: 'Ecosistema de modelos y apps de IA. Accede a miles de modelos de IA, datasets y herramientas para desarrolladores.',
        category: 'Desarrollo y Código',
        keywords: ['hugging face', 'huggingface', 'hugging chat']
    },
    {
        name: 'Google AI Studio',
        url: 'https://aistudio.google.com',
        use: 'Entorno para usar modelos Gemini/Gemma. Desarrolla aplicaciones con modelos de IA de Google y experimenta con APIs.',
        category: 'Desarrollo y Código',
        keywords: ['google ai studio', 'ai studio']
    },

    // AUTOMATIZACIÓN
    {
        name: 'Zapier',
        url: 'https://zapier.com',
        use: 'Automatización de workflows con funciones de IA. Conecta apps, automatiza tareas y añade capacidades de IA a tus procesos.',
        category: 'Automatización',
        keywords: ['zapier']
    },
    {
        name: 'n8n',
        url: 'https://n8n.io',
        use: 'Automatización de workflows con nodos e IA integrada. Plataforma open-source para crear flujos de trabajo automatizados con IA.',
        category: 'Automatización',
        keywords: ['n8n']
    },

    // BÚSQUEDA E INVESTIGACIÓN
    {
        name: 'Consensus',
        url: 'https://consensus.app',
        use: 'Búsqueda académica con IA. Encuentra y sintetiza información de papers científicos y estudios académicos.',
        category: 'Búsqueda e Investigación',
        keywords: ['consensus']
    },
    {
        name: 'You.com',
        url: 'https://you.com',
        use: 'Buscador con IA conversacional. Búsqueda mejorada con respuestas directas, síntesis de información y citas de fuentes.',
        category: 'Búsqueda e Investigación',
        keywords: ['you', 'you.com']
    },

    // OTRAS PLATAFORMAS
    {
        name: 'Manus AI',
        url: 'https://www.manus.ai',
        use: 'Plataforma de IA para diversas tareas. Herramientas especializadas para procesamiento y generación de contenido.',
        category: 'Otras Plataformas',
        keywords: ['manus', 'manus ai']
    },
    {
        name: 'SeeDream',
        url: 'https://seedream.pro',
        use: 'Plataforma de IA creativa. Herramientas para generación de contenido visual y creativo con tecnología de IA.',
        category: 'Otras Plataformas',
        keywords: ['seedream', 'see dream']
    },
    {
        name: 'Prompt Cowboy',
        url: 'https://www.promptcowboy.ai/',
        use: 'Plataforma especializada en ingeniería de prompts. Herramientas y recursos para crear prompts efectivos para IAs.',
        category: 'Otras Plataformas',
        keywords: ['prompt cowboy', 'promptcowboy']
    },
    {
        name: 'Pi',
        url: 'https://pi.ai',
        use: 'Asistente conversacional personal. IA diseñada para conversaciones naturales y asistencia en tareas diarias.',
        category: 'Otras Plataformas',
        keywords: ['pi']
    }
];

// Estado
let generatedPrompt = '';
let evaluationResult = null;

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
    renderTemplates();
    renderAIDirectory();
    setupCharacterCounters();
});

// Event Listeners
function setupEventListeners() {
    document.getElementById('evaluarBtn').addEventListener('click', evaluatePrompt);
    document.getElementById('generarBtn').addEventListener('click', generatePrompt);
    document.getElementById('copiarBtn').addEventListener('click', copyPrompt);
    document.getElementById('copiarBtnPreview').addEventListener('click', copyPromptFromPreview);
    document.getElementById('copiarBtnBottom').addEventListener('click', copyPromptFromBottom);
    document.getElementById('limpiarBtn').addEventListener('click', clearForm);
    document.getElementById('aiSearchBtn').addEventListener('click', searchAI);
    document.getElementById('aiSearchInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchAI();
        }
    });
}

// Renderizar plantillas
function renderTemplates() {
    const container = document.getElementById('templatesContainer');
    container.innerHTML = TRANSFERENCIA_TEMPLATES.map((template, index) => `
        <div class="template-card" onclick="loadTemplate(${index})">
            <h4>${template.title}</h4>
            <p>${template.per.substring(0, 80)}...</p>
        </div>
    `).join('');
}

// Cargar plantilla
window.loadTemplate = function(index) {
    const template = TRANSFERENCIA_TEMPLATES[index];
    document.getElementById('perField').value = template.per;
    document.getElementById('tField').value = template.t;
    document.getElementById('coField').value = template.co;
    document.getElementById('fField').value = template.f;
    updateCharacterCounts();
};

// Contadores de caracteres
function setupCharacterCounters() {
    const fields = ['perField', 'tField', 'coField', 'fField'];
    fields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        field.addEventListener('input', updateCharacterCounts);
    });
}

function updateCharacterCounts() {
    document.getElementById('perCount').textContent = document.getElementById('perField').value.length;
    document.getElementById('tCount').textContent = document.getElementById('tField').value.length;
    document.getElementById('coCount').textContent = document.getElementById('coField').value.length;
    document.getElementById('fCount').textContent = document.getElementById('fField').value.length;
}

// Evaluar prompt
function evaluatePrompt() {
    const per = document.getElementById('perField').value.trim();
    const t = document.getElementById('tField').value.trim();
    const co = document.getElementById('coField').value.trim();
    const f = document.getElementById('fField').value.trim();

    const panel = document.getElementById('evaluationPanel');
    const message = document.getElementById('evaluationMessage');
    const list = document.getElementById('evaluationList');

    const checks = [];
    let allPassed = true;

    // Verificar PER
    if (per.length < 30) {
        checks.push({ passed: false, text: 'PER: Muy corto. Debe tener al menos 30 caracteres para ser descriptivo.' });
        allPassed = false;
    } else if (!per.toLowerCase().includes('experto') && !per.toLowerCase().includes('especialista') && !per.toLowerCase().includes('consultor')) {
        checks.push({ passed: false, text: 'PER: Sugerencia: incluye palabras como "experto", "especialista" o "consultor" para definir mejor el perfil.' });
    } else {
        checks.push({ passed: true, text: 'PER: Bien definido con perfil de experto.' });
    }

    // Verificar T
    if (t.length < 20) {
        checks.push({ passed: false, text: 'T: Muy corto. Describe claramente la tarea específica.' });
        allPassed = false;
    } else if (!t.toLowerCase().includes('diseñar') && !t.toLowerCase().includes('crear') && !t.toLowerCase().includes('analizar') && !t.toLowerCase().includes('desarrollar')) {
        checks.push({ passed: false, text: 'T: Sugerencia: usa verbos de acción claros como "diseñar", "crear", "analizar".' });
    } else {
        checks.push({ passed: true, text: 'T: Tarea bien definida con verbos de acción.' });
    }

    // Verificar CO
    if (co.length < 30) {
        checks.push({ passed: false, text: 'CO: Muy corto. Proporciona más contexto sobre la situación real.' });
        allPassed = false;
    } else {
        checks.push({ passed: true, text: 'CO: Contexto suficiente proporcionado.' });
    }

    // Verificar F
    if (f.length < 20) {
        checks.push({ passed: false, text: 'F: Muy corto. Especifica claramente el formato de salida deseado.' });
        allPassed = false;
    } else {
        checks.push({ passed: true, text: 'F: Formato de salida especificado.' });
    }

    // Verificaciones adicionales
    if (per.length >= 30 && t.length >= 20 && co.length >= 30 && f.length >= 20) {
        checks.push({ passed: true, text: 'Todos los campos tienen contenido suficiente.' });
    }

    // Renderizar resultados
    list.innerHTML = checks.map(check => `
        <li>
            <i class="fas ${check.passed ? 'fa-check-circle' : 'fa-exclamation-circle'}" 
               style="color: ${check.passed ? '#10b981' : '#ef4444'}"></i>
            <span>${check.text}</span>
        </li>
    `).join('');

    if (allPassed) {
        panel.className = 'evaluation-panel success';
        message.innerHTML = '<strong>✓ Evaluación aprobada:</strong> Tu prompt tiene los elementos básicos de teoría CHOT. Puedes generar el prompt completo.';
    } else {
        panel.className = 'evaluation-panel warning';
        message.innerHTML = '<strong>⚠ Atención:</strong> Revisa los elementos señalados antes de generar tu prompt.';
    }

    panel.style.display = 'block';
};

// Generar prompt
function generatePrompt() {
    const per = document.getElementById('perField').value.trim();
    const t = document.getElementById('tField').value.trim();
    const co = document.getElementById('coField').value.trim();
    const f = document.getElementById('fField').value.trim();

    if (!per || !t || !co || !f) {
        alert('Por favor completa todos los campos antes de generar el prompt.');
        return;
    }

    generatedPrompt = `**PERFIL DE PERSONA EXPERTA:**
${per}

**TAREA:**
${t}

**CONTEXTO:**
${co}

**FORMATO DE SALIDA:**
${f}`;

    // Mostrar preview
    document.getElementById('promptPreview').textContent = generatedPrompt;
    document.getElementById('promptPreviewSection').style.display = 'block';
    document.getElementById('copiarBtn').style.display = 'inline-flex';

    // Scroll al preview
    document.getElementById('promptPreviewSection').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Copiar prompt desde el botón del preview (arriba)
function copyPromptFromPreview() {
    copyPromptWithFeedback('copiarBtnPreview');
}

// Copiar prompt desde el botón de abajo
function copyPromptFromBottom() {
    copyPromptWithFeedback('copiarBtnBottom');
}

// Función auxiliar para copiar con feedback visual
function copyPromptWithFeedback(buttonId) {
    if (!generatedPrompt) {
        alert('Primero genera el prompt haciendo clic en "Generar Prompt"');
        return;
    }

    navigator.clipboard.writeText(generatedPrompt).then(() => {
        const btn = document.getElementById(buttonId);
        const originalHTML = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i> ¡Copiado!';
        btn.style.background = '#10b981';
        setTimeout(() => {
            btn.innerHTML = originalHTML;
            btn.style.background = '';
        }, 2000);
    }).catch(err => {
        alert('Error al copiar. Por favor selecciona y copia manualmente.');
    });
}

// Copiar prompt
function copyPrompt() {
    if (!generatedPrompt) {
        alert('Primero genera el prompt haciendo clic en "Generar Prompt"');
        return;
    }

    navigator.clipboard.writeText(generatedPrompt).then(() => {
        const btn = document.getElementById('copiarBtn');
        const originalHTML = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i> ¡Copiado!';
        btn.style.background = '#10b981';
        setTimeout(() => {
            btn.innerHTML = originalHTML;
            btn.style.background = '';
        }, 2000);
    }).catch(err => {
        alert('Error al copiar. Por favor selecciona y copia manualmente.');
    });
}

// Limpiar formulario
function clearForm() {
    if (confirm('¿Estás seguro de que deseas limpiar todo el formulario?')) {
        document.getElementById('transferenciaForm').reset();
        document.getElementById('promptPreviewSection').style.display = 'none';
        document.getElementById('evaluationPanel').style.display = 'none';
        document.getElementById('copiarBtn').style.display = 'none';
        document.getElementById('aiSearchResults').innerHTML = '';
        generatedPrompt = '';
        updateCharacterCounts();
    }
}

// Renderizar Directorio de IAs
function renderAIDirectory() {
    const container = document.getElementById('aiDirectoryContainer');
    const categories = [...new Set(AI_DIRECTORY.map(ai => ai.category))];
    
    let html = '';
    categories.forEach(category => {
        const aisInCategory = AI_DIRECTORY.filter(ai => ai.category === category);
        html += `<div class="category-header">${category}</div>`;
        html += aisInCategory.map(ai => `
            <div class="ai-directory-card">
                <div class="ai-directory-header">
                    <div class="ai-directory-name">${ai.name}</div>
                </div>
                <div class="ai-directory-use">
                    <i class="fas fa-info-circle" style="color: var(--primary-color); margin-right: 0.5rem;"></i>
                    ${ai.use}
                </div>
                <div class="ai-directory-url">
                    <i class="fas fa-link" style="font-size: 0.7rem;"></i> ${ai.url}
                </div>
                <div class="ai-directory-action">
                    <button class="btn btn-primary btn-sm btn-block" onclick="window.open('${ai.url}', '_blank')">
                        <i class="fas fa-external-link-alt"></i> Ir a ${ai.name}
                    </button>
                </div>
            </div>
        `).join('');
    });
    
    container.innerHTML = html;
}

// Buscar IA
function searchAI() {
    const searchTerm = document.getElementById('aiSearchInput').value.trim().toLowerCase();
    
    if (!searchTerm) {
        alert('Por favor escribe el nombre de una IA');
        return;
    }

    const results = document.getElementById('aiSearchResults');
    
    // Buscar en AI_DIRECTORY por keywords
    const matches = AI_DIRECTORY.filter(ai => 
        ai.keywords.some(keyword => keyword.includes(searchTerm) || searchTerm.includes(keyword)) ||
        ai.name.toLowerCase().includes(searchTerm) ||
        ai.use.toLowerCase().includes(searchTerm)
    );

    // También buscar en AI_DATABASE por compatibilidad
    const dbMatches = Object.entries(AI_DATABASE).filter(([key, url]) => 
        key.includes(searchTerm) || searchTerm.includes(key)
    );

    // Combinar resultados
    const allMatches = [...new Set([
        ...matches.map(ai => ({ name: ai.name, url: ai.url, use: ai.use })),
        ...dbMatches.map(([name, url]) => ({ name: name.toUpperCase(), url, use: 'Herramienta de IA' }))
    ].map(item => JSON.stringify(item)))].map(item => JSON.parse(item));

    if (allMatches.length === 0) {
        results.innerHTML = `
            <div class="ai-result-item" style="border-color: #ef4444;">
                <div class="ai-result-info">
                    <div class="ai-result-name" style="color: #ef4444;">
                        <i class="fas fa-exclamation-circle"></i> IA no encontrada
                    </div>
                    <div class="ai-result-url">
                        No encontramos "${searchTerm}" en nuestra base de datos. Revisa el directorio completo más abajo.
                    </div>
                </div>
            </div>
        `;
        return;
    }

    // Si hay una coincidencia exacta, ir directamente
    const exactMatch = allMatches.find(item => 
        item.name.toLowerCase() === searchTerm || 
        item.name.toLowerCase().includes(searchTerm) && allMatches.length === 1
    );
    if (exactMatch && allMatches.length === 1) {
        window.open(exactMatch.url, '_blank');
        return;
    }

    // Mostrar resultados
    results.innerHTML = allMatches.map(item => `
        <div class="ai-result-item">
            <div class="ai-result-info">
                <div class="ai-result-name">
                    <i class="fas fa-robot"></i> ${item.name}
                </div>
                <div class="ai-result-url">
                    <small>${item.use || 'Herramienta de IA'}</small><br>
                    ${item.url}
                </div>
            </div>
            <button class="btn btn-primary btn-sm" onclick="window.open('${item.url}', '_blank')">
                <i class="fas fa-external-link-alt"></i> Ir
            </button>
        </div>
    `).join('');
}

