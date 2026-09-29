/* ============================================
   BioLab Interactivo v2.0 - Application Logic
   ============================================ */

// ============================================
// DATA: Organelle Information
// ============================================
const organelleData = {
  nucleo: {
    title: '🧠 Núcleo',
    color: '#3949ab',
    emoji: '🧠',
    sections: [
      {
        icon: '⚙️',
        title: 'Función Principal',
        content: 'Almacena el material genético (ADN) y coordina todas las actividades celulares: replicación, transcripción y regulación génica. Es el "centro de control" de la célula.'
      },
      {
        icon: '🏗️',
        title: 'Estructura',
        content: 'Envuelto por la <strong>envoltura nuclear</strong> (doble membrana con poros nucleares). Dentro: <strong>cromatina</strong> (ADN + proteínas) y el <strong>nucléolo</strong> (fábrica de ribosomas).'
      },
      {
        icon: '🤯',
        title: 'Dato Curioso',
        content: 'Si estiraras todo el ADN de una célula humana, mediría ~2 metros. ¡Y cabe en un espacio de 6 micras! Todos los humanos compartimos el 99.9% de nuestro ADN.'
      }
    ],
    memory: '"El núcleo es como el cerebro de la célula — sin él, no hay instrucciones para construir proteínas."'
  },
  mitocondria: {
    title: '⚡ Mitocondria',
    color: '#c62828',
    emoji: '⚡',
    sections: [
      {
        icon: '⚙️',
        title: 'Función Principal',
        content: 'Produce ATP (trifosfato de adenosina) mediante <strong>respiración celular</strong>. Es la central energética de la célula. Una célula activa puede tener miles de mitocondrias.'
      },
      {
        icon: '🏗️',
        title: 'Estructura',
        content: '<strong>Doble membrana</strong>: externa lisa, interna con <strong>crestas</strong> (cristae) que aumentan la superficie para la producción de ATP. Contiene su propio ADN circular.'
      },
      {
        icon: '🤯',
        title: 'Dato Curioso',
        content: 'Las mitocondrias tienen su propio ADN y se heredan solo de la madre. Son bacterias que un día decidieron quedarse — teoría de la endosimbiosis. ¡Son tus abuelas bacterianas!'
      }
    ],
    memory: '"Mitocondria = Mitocondrial ADN + ATP = ¡Energía! Doble membrana con crestas."'
  },
  ribosomas: {
    title: '🏭 Ribosomas',
    color: '#e65100',
    emoji: '🏭',
    sections: [
      {
        icon: '⚙️',
        title: 'Función Principal',
        content: 'Sintetizan proteínas traduciendo el ARN mensajero (ARNm). Leen el código genético y ensamblan aminoácidos en cadenas polipeptídicas. ¡Sin parar!'
      },
      {
        icon: '🏗️',
        title: 'Estructura',
        content: 'Dos subunidades (grande y pequeña) hechas de <strong>ARN ribosómico (ARNr)</strong> y proteínas. Se unen solo durante la traducción. Tamaño: ~20-30 nm.'
      },
      {
        icon: '🤯',
        title: 'Dato Curioso',
        content: 'Una célula eucariota puede tener millones de ribosomas. Producen miles de proteínas por segundo. Los ribosomas procariotas son más pequeños (70S) que los eucariotas (80S).'
      }
    ],
    memory: '"ARNm entra → Proteína sale. ¡Así de simple! Dos subunidades = una proteína."'
  },
  reticulo_rugoso: {
    title: '🕸️ Retículo Endoplásmico Rugoso',
    color: '#8e24aa',
    emoji: '🕸️',
    sections: [
      {
        icon: '⚙️',
        title: 'Función Principal',
        content: 'Síntesis y plegamiento de <strong>proteínas</strong> (gracias a los ribosomas adheridos). También modifica proteínas con azúcares (glicosilación).'
      },
      {
        icon: '🏗️',
        title: 'Estructura',
        content: 'Red de membranas interconectadas que se extiende desde el núcleo. Su superficie está cubierta de <strong>ribosomas</strong>, lo que le da apariencia "rugosa" al microscopio.'
      },
      {
        icon: '🤯',
        title: 'Dato Curioso',
        content: 'Las células que producen muchas proteínas (como las del páncreas) tienen un retículo rugoso enorme. ¡Puede ocupar más de la mitad del volumen celular!'
      }
    ],
    memory: '"Rugoso = ribosomas pegados = proteínas. Si ves puntitos naranjas, es rugoso."'
  },
  reticulo_liso: {
    title: '🧈 Retículo Endoplásmico Liso',
    color: '#ba68c8',
    emoji: '🧈',
    sections: [
      {
        icon: '⚙️',
        title: 'Función Principal',
        content: 'Síntesis de <strong>lípidos</strong> (fosfolípidos, esteroides), <strong>detoxificación</strong> de drogas y alcohol, almacenamiento de calcio (músculo).'
      },
      {
        icon: '🏗️',
        title: 'Estructura',
        content: 'Igual que el rugoso pero <strong>sin ribosomas</strong> en su superficie, por eso se ve "liso". Forma tubos en lugar de sacos aplanados.'
      },
      {
        icon: '🤯',
        title: 'Dato Curioso',
        content: 'El retículo liso del hígado desintoxica el alcohol. Tu hígado tiene su propia planta de tratamiento. Las células hepáticas tienen mucho más REL que otras células.'
      }
    ],
    memory: '"Liso = sin ribosomas = lípidos y detox. El hígado lo ama."'
  },
  golgi: {
    title: '📦 Aparato de Golgi',
    color: '#1565c0',
    emoji: '📦',
    sections: [
      {
        icon: '⚙️',
        title: 'Función Principal',
        content: 'Modifica, empaca y distribuye <strong>proteínas y lípidos</strong>. Añade etiquetas moleculares para enviar cada molécula a su destino correcto dentro o fuera de la célula.'
      },
      {
        icon: '🏗️',
        title: 'Estructura',
        content: 'Pila de <strong>4-6 cisternas</strong> (sacos aplanados) con vesículas de entrada (cis) y salida (trans). Cada cisterna tiene enzimas diferentes para modificar cargas.'
      },
      {
        icon: '🤯',
        title: 'Dato Curioso',
        content: '¡Es como Amazon celular! Recibe paquetes del retículo, les pone "etiquetas de envío" y los despacha por vesículas. Descubierto por Camillo Golgi en 1898 con una técnica de tinción especial.'
      }
    ],
    memory: '"Golgi = Correos de la célula. Cis (entra) → Modifica → Trans (sale)."'
  },
  membrana: {
    title: '🛡️ Membrana Plasmática',
    color: '#e65100',
    emoji: '🛡️',
    sections: [
      {
        icon: '⚙️',
        title: 'Función Principal',
        content: 'Barrera selectiva que controla qué entra y sale de la célula. Protege, comunica con otras células y mantiene el ambiente interno estable (homeostasis).'
      },
      {
        icon: '🏗️',
        title: 'Estructura',
        content: '<strong>Mosaico fluido</strong>: bicapa de fosfolípidos (cabeza hidrofílica afuera, colas hidrofóbicas adentro) + proteínas integrales y periféricas + carbohidratos (glucocalix).'
      },
      {
        icon: '🤯',
        title: 'Dato Curioso',
        content: 'Si juntaras toda la membrana plasmática de tu cuerpo, cubriría un campo de fútbol. ¡Y es solo 7-10 nm de grosor! Las proteínas "flotan" como icebergs en el mar de lípidos.'
      }
    ],
    memory: '"Mosaico fluido = fosfolípidos + proteínas flotantes. Selectivamente permeable."'
  },
  citoesqueleto: {
    title: '🦴 Citoesqueleto',
    color: '#455a64',
    emoji: '🦴',
    sections: [
      {
        icon: '⚙️',
        title: 'Función Principal',
        content: 'Da forma y soporte a la célula, permite movimiento (cilios, flagelos), transporta orgánulos y divide la célula durante la mitosis. Es el "esqueleto" de la célula.'
      },
      {
        icon: '🏗️',
        title: 'Estructura',
        content: 'Tres tipos: <strong>Microfilamentos</strong> (actina, 7nm), <strong>Filamentos intermedios</strong> (queratina, 10nm), <strong>Microtúbulos</strong> (tubulina, 25nm). Forman una red dinámica.'
      },
      {
        icon: '🤯',
        title: 'Dato Curioso',
        content: 'Los microtúbulos son como rieles de tren: las vesículas se desplazan sobre ellos usando motorinas (kinesina y dineína). ¡Son autopistas intracelulares a 1 µm/segundo!'
      }
    ],
    memory: '"Sin citoesqueleto, la célula sería como gelatina derretida. 3 tipos: microfilamentos, intermedios, microtúbulos."'
  },
  transporte: {
    title: '🚛 Transporte Celular',
    color: '#2e7d32',
    emoji: '🚛',
    sections: [
      {
        icon: '⚙️',
        title: 'Tipos de Transporte',
        content: '<strong>Pasivo</strong>: difusión simple, difusión facilitada (con canales), ósmosis (agua). <strong>Activo</strong>: transporte activo (contra gradiente, gasta ATP), endocitosis y exocitosis (vesículas grandes).'
      },
      {
        icon: '🏗️',
        title: 'Mecanismos',
        content: 'La membrana es <strong>semipermeable</strong>. Moléculas pequeñas y no polares pasan libremente. Iones y moléculas grandes necesitan proteínas transportadoras o vesículas.'
      },
      {
        icon: '🤯',
        title: 'Dato Curioso',
        content: 'La endocitosis es como "comerse" algo: la membrana se hunde y forma una vesícula. La fagocitosis (células come-bacterias) es un tipo de endocitosis. ¡Las células tienen boca!'
      }
    ],
    memory: '"Pasivo = sin energía (bajando la colina). Activo = con ATP (subiendo). Vesículas = endo/exocitosis."'
  },
  cloroplasto: {
    title: '🌿 Cloroplasto',
    color: '#2e7d32',
    emoji: '🌿',
    sections: [
      {
        icon: '⚙️',
        title: 'Función Principal',
        content: 'Realiza la <strong>fotosíntesis</strong>: convierte luz solar en energía química (glucosa). Absorbe CO₂ y libera O₂. Solo en células vegetales y algas.'
      },
      {
        icon: '🏗️',
        title: 'Estructura',
        content: '<strong>Doble membrana</strong> externa. Interior: <strong>estroma</strong> (líquido) y <strong>tilacoides</strong> (discos apilados en grana) con clorofila. También tiene ADN propio.'
      },
      {
        icon: '🤯',
        title: 'Dato Curioso',
        content: 'Los cloroplastos también vienen de bacterias (endosimbiosis). Una célula vegetal puede tener 50 cloroplastos. ¡Producen ~100 mil millones de toneladas de glucosa al año en la Tierra!'
      }
    ],
    memory: '"Cloroplasto = fotosíntesis = luz + CO₂ + H₂O → glucosa + O₂. Tiene tilacoides con clorofila."'
  }
};

// ============================================
// DATA: Quiz Questions (20 questions)
// ============================================
const quizQuestions = [
  {
    id: 1,
    category: 'organelles',
    icon: '🧠',
    question: '¿Qué orgánulo es el "centro de control" de la célula?',
    options: ['Mitocondria', 'Núcleo', 'Ribosoma', 'Aparato de Golgi'],
    correct: 1,
    explanation: 'El núcleo almacena el ADN y coordina todas las actividades celulares. Es el centro de control.'
  },
  {
    id: 2,
    category: 'organelles',
    icon: '⚡',
    question: '¿Qué orgánulo produce ATP mediante respiración celular?',
    options: ['Núcleo', 'Ribosoma', 'Mitocondria', 'Retículo liso'],
    correct: 2,
    explanation: 'La mitocondria es la central energética. Su doble membrana interna con crestas produce ATP.'
  },
  {
    id: 3,
    category: 'organelles',
    icon: '🏭',
    question: '¿Dónde se sintetizan las proteínas en la célula?',
    options: ['En el núcleo', 'En los ribosomas', 'En el Golgi', 'En la mitocondria'],
    correct: 1,
    explanation: 'Los ribosomas traducen el ARNm y ensamblan aminoácidos en proteínas. Son las fábricas celulares.'
  },
  {
    id: 4,
    category: 'organelles',
    icon: '🕸️',
    question: '¿Qué diferencia al retículo endoplásmico rugoso del liso?',
    options: ['El rugoso tiene ribosomas', 'El liso es más grande', 'El rugoso produce lípidos', 'No hay diferencia'],
    correct: 0,
    explanation: 'El retículo rugoso tiene ribosomas adheridos (síntesis de proteínas). El liso no tiene ribosomas (lípidos y detox).'
  },
  {
    id: 5,
    category: 'organelles',
    icon: '📦',
    question: '¿Cuál es la función del Aparato de Golgi?',
    options: ['Producir ATP', 'Empacar y distribuir proteínas', 'Sintetizar ADN', 'Digestión celular'],
    correct: 1,
    explanation: 'El Golgi modifica, empaca y envía proteínas y lípidos a su destino final. Es la estación de correos.'
  },
  {
    id: 6,
    category: 'membrane',
    icon: '🛡️',
    question: '¿Cómo se llama el modelo de la membrana plasmática?',
    options: ['Modelo de capa sólida', 'Modelo de mosaico fluido', 'Modelo de doble pared', 'Modelo de membrana rígida'],
    correct: 1,
    explanation: 'Modelo de mosaico fluido: fosfolípidos forman bicapa y proteínas "flotan" como icebergs.'
  },
  {
    id: 7,
    category: 'membrane',
    icon: '💧',
    question: '¿Qué parte del fosfolípido es hidrofílica?',
    options: ['Las colas', 'La cabeza', 'Ambas', 'Ninguna'],
    correct: 1,
    explanation: 'La cabeza del fosfolípido es hidrofílica (ama el agua) y las colas son hidrofóbicas (rechazan el agua).'
  },
  {
    id: 8,
    category: 'transport',
    icon: '🚪',
    question: '¿Qué transporte NO requiere energía (ATP)?',
    options: ['Transporte activo', 'Endocitosis', 'Difusión simple', 'Bomba de sodio-potasio'],
    correct: 2,
    explanation: 'La difusión simple es pasiva: las moléculas se mueven del alto al bajo concentración sin gastar energía.'
  },
  {
    id: 9,
    category: 'transport',
    icon: '💦',
    question: '¿Qué es la ósmosis?',
    options: ['Transporte de proteínas', 'Difusión de agua a través de membrana semipermeable', 'Transporte activo de iones', 'Digestión celular'],
    correct: 1,
    explanation: 'Ósmosis = difusión de agua a través de una membrana semipermeable, del bajo al alto concentración de soluto.'
  },
  {
    id: 10,
    category: 'transport',
    icon: '🍽️',
    question: '¿Cómo ingieren las células partículas grandes?',
    options: ['Difusión simple', 'Transporte facilitado', 'Endocitosis', 'Ósmosis'],
    correct: 2,
    explanation: 'La endocitosis usa vesículas para "engullir" partículas grandes. La fagocitosis es un tipo de endocitosis.'
  },
  {
    id: 11,
    category: 'cytoskeleton',
    icon: '🦴',
    question: '¿Cuál es la función del citoesqueleto?',
    options: ['Producir energía', 'Dar forma y soporte, permitir movimiento', 'Sintetizar proteínas', 'Almacenar ADN'],
    correct: 1,
    explanation: 'El citoesqueleto es como el esqueleto de la célula: da forma, permite movimiento y transporta orgánulos.'
  },
  {
    id: 12,
    category: 'cytoskeleton',
    icon: '🛤️',
    question: '¿Qué componente del citoesqueleto actúa como "vías de tren"?',
    options: ['Microfilamentos', 'Filamentos intermedios', 'Microtúbulos', 'Actina'],
    correct: 2,
    explanation: 'Los microtúbulos (tubulina) son como rieles por donde se mueven vesículas usando motorinas (kinesina/dineína).'
  },
  {
    id: 13,
    category: 'types',
    icon: '🦠',
    question: '¿Qué característica NO tienen las células procariotas?',
    options: ['Ribosomas', 'Membrana plasmática', 'Núcleo definido', 'Citoplasma'],
    correct: 2,
    explanation: 'Las procariotas NO tienen núcleo definido. Su ADN está libre en el citoplasma (nucleoide).'
  },
  {
    id: 14,
    category: 'types',
    icon: '🧫',
    question: '¿Qué orgánulo tienen las células vegetales pero NO las animales?',
    options: ['Mitocondria', 'Núcleo', 'Cloroplasto', 'Ribosoma'],
    correct: 2,
    explanation: 'Los cloroplastos realizan fotosíntesis y solo existen en células vegetales y algas. Las animales no los tienen.'
  },
  {
    id: 15,
    category: 'types',
    icon: '📏',
    question: '¿Cuál es el tamaño típico de una célula eucariota?',
    options: ['0.1-1 µm', '1-10 µm', '10-100 µm', '1-10 mm'],
    correct: 2,
    explanation: 'Las eucariotas miden 10-100 µm. Las procariotas son más pequeñas (1-10 µm). El ovo humano es una excepción: ~100 µm.'
  },
  {
    id: 16,
    category: 'organelles',
    icon: '🧬',
    question: '¿Dónde se encuentra el nucléolo?',
    options: ['En el citoplasma', 'Dentro del núcleo', 'En la mitocondria', 'En el Golgi'],
    correct: 1,
    explanation: 'El nucléolo está DENTRO del núcleo. Es la fábrica de ribosomas: produce ARNr y ensambla subunidades ribosómicas.'
  },
  {
    id: 17,
    category: 'membrane',
    icon: '🔬',
    question: '¿Qué proteínas atraviesan completamente la membrana?',
    options: ['Proteínas periféricas', 'Proteínas integrales', 'Proteínas de adhesión', 'Proteínas de señalización'],
    correct: 1,
    explanation: 'Las proteínas integrales atraviesan toda la bicapa lipídica. Las periféricas solo se adhieren a una cara.'
  },
  {
    id: 18,
    category: 'transport',
    icon: '⚡',
    question: '¿Qué es el transporte activo?',
    options: ['Movimiento con gradiente', 'Movimiento contra gradiente gastando ATP', 'Difusión de agua', 'Transporte por canales'],
    correct: 1,
    explanation: 'Transporte activo = mover sustancias CONTRA su gradiente de concentración, gastando ATP (ej: bomba Na⁺/K⁺).'
  },
  {
    id: 19,
    category: 'organelles',
    icon: '🍷',
    question: '¿Qué orgánulo desintoxica el alcohol en el hígado?',
    options: ['Mitocondria', 'Retículo endoplásmico liso', 'Ribosoma', 'Núcleo'],
    correct: 1,
    explanation: 'El retículo endoplásmico liso (REL) del hígado contiene enzimas que descomponen drogas, toxinas y alcohol.'
  },
  {
    id: 20,
    category: 'types',
    icon: '🧱',
    question: '¿Qué tienen las células vegetales además de la membrana?',
    options: ['Cápsula', 'Pared celular', 'Flagelo', 'Cilios'],
    correct: 1,
    explanation: 'Las células vegetales tienen pared celular de celulosa ADEMÁS de la membrana plasmática. Les da rigidez y forma.'
  }
];

// ============================================
// BIOLOGY DICTIONARY — Tooltips for key terms
// ============================================
const biologyDictionary = {
  // Ácidos nucleicos y genética
  'ADN': 'Ácido desoxirribonucleico — la molécula que contiene las instrucciones genéticas para todos los organismos vivos.',
  'ARN': 'Ácido ribonucleico — molécula esencial para la síntesis de proteínas y la expresión genética.',
  'ARNm': 'ARN mensajero — transporta información genética desde el ADN a los ribosomas para la síntesis de proteínas.',
  'ARNr': 'ARN ribosómico — un tipo de ARN que constituye el núcleo estructural de los ribosomas.',
  'cromatina': 'Un complejo de ADN y proteínas (histonas) que forma los cromosomas dentro del núcleo.',
  'nucléolo': 'Una estructura densa dentro del núcleo donde se produce el ARN ribosómico.',
  'envoltura nuclear': 'La doble membrana que rodea el núcleo, controlando lo que entra y sale.',
  'poros nucleares': 'Canales en la envoltura nuclear que permiten el intercambio de moléculas entre el núcleo y el citoplasma.',
  
  // Energía y metabolismo
  'ATP': 'Adenosín trifosfato — la principal moneda energética de la célula.',
  'respiración celular': 'El proceso mediante el cual las células descomponen la glucosa para producir ATP (energía).',
  'crestas': 'La membrana interna plegada de las mitocondrias donde ocurre la producción de ATP.',
  'endosimbiosis': 'La teoría de que las mitocondrias y los cloroplastos evolucionaron a partir de bacterias antiguas.',
  
  // Síntesis de proteínas
  'síntesis de proteínas': 'El proceso de construir proteínas a partir de aminoácidos utilizando instrucciones del ADN.',
  'traducción': 'Proceso donde los ribosomas convierten el ARNm en una cadena de aminoácidos (proteína).',
  'transcripción': 'Proceso donde se copia la información del ADN a ARNm.',
  'aminoácidos': 'Los bloques de construcción de las proteínas. Existen 20 tipos diferentes.',
  'polipéptidos': 'Cadenas de aminoácidos que se pliegan para formar proteínas funcionales.',
  
  // Retículo endoplásmico y Golgi
  'glicosilación': 'El proceso de añadir moléculas de azúcar a las proteínas o lípidos.',
  'desintoxicación': 'El proceso de eliminar sustancias tóxicas del cuerpo o de la célula.',
  'cisternas': 'Sacos aplanados delimitados por membrana que constituyen el aparato de Golgi.',
  'vesículas': 'Pequeños sacos encerrados por membrana que transportan materiales dentro de la célula.',
  'glucosa': 'Azúcar simple que las células usan como fuente principal de energía.',
  'lípidos': 'Grasas y moléculas similares que forman membranas y almacenan energía.',
  'esteroides': 'Tipo de lípido que incluye hormonas como el estrógeno y la testosterona.',
  
  // Membrana celular
  'fosfolípidos': 'Moléculas lipídicas que forman la estructura básica de las membranas celulares.',
  'modelo de mosaico fluido': 'El modelo que describe la membrana celular como una capa fluida de lípidos con proteínas incrustadas.',
  'hidrofílico': 'Ama el agua — describe moléculas que se disuelven en agua.',
  'hidrofóbico': 'Le teme al agua — describe moléculas que repelen el agua.',
  'proteínas integrales': 'Proteínas que atraviesan toda la membrana, actuando como canales o transportadores.',
  'proteínas periféricas': 'Proteínas unidas a un lado de la membrana, a menudo como enzimas o receptores.',
  'bicapa lipídica': 'Doble capa de fosfolípidos que forma la base de todas las membranas celulares.',
  'glucocálix': 'Capa de carbohidratos en la superficie externa de la membrana, importante para el reconocimiento celular.',
  'semipermeable': 'Propiedad de la membrana que permite el paso de algunas moléculas pero no de otras.',
  
  // Transporte celular
  'ósmosis': 'La difusión de agua a través de una membrana semipermeable.',
  'difusión': 'El movimiento de moléculas desde una zona de alta a baja concentración sin necesidad de energía.',
  'difusión simple': 'Paso directo de moléculas pequeñas y no polares a través de la membrana.',
  'difusión facilitada': 'Transporte de moléculas a través de proteínas transportadoras sin gasto de energía.',
  'transporte activo': 'Movimiento de moléculas en contra de su gradiente, que requiere energía ATP.',
  'endocitosis': 'El proceso de introducir materiales en la célula envolviéndolos en una vesícula.',
  'exocitosis': 'El proceso de expulsar materiales de la célula utilizando vesículas.',
  'fagocitosis': 'Tipo de endocitosis donde la célula engulle partículas grandes o bacterias.',
  'canales iónicos': 'Proteínas que forman poros en la membrana para el paso selectivo de iones.',
  'gradiente de concentración': 'Diferencia en la concentración de una sustancia entre dos áreas.',
  
  // Citoesqueleto
  'microfilamentos': 'Los filamentos más delgados del citoesqueleto hechos de proteína actina.',
  'microtúbulos': 'Los filamentos más gruesos del citoesqueleto hechos de proteína tubulina.',
  'filamentos intermedios': 'Filamentos de tamaño mediano del citoesqueleto que proporcionan resistencia mecánica.',
  'cinesina': 'Una proteína motora que camina a lo largo de los microtúbulos transportando carga celular.',
  'dineína': 'Una proteína motora que mueve la carga hacia el centro de la célula a lo largo de los microtúbulos.',
  'actina': 'Proteína que forma los microfilamentos, esencial para el movimiento y la estructura celular.',
  'tubulina': 'Proteína que forma los microtúbulos, clave en el transporte y la división celular.',
  'queratina': 'Proteína que forma los filamentos intermedios en células epiteliales.',
  'mitosis': 'Proceso de división celular que produce dos células hijas idénticas.',
  
  // Fotosíntesis
  'fotosíntesis': 'El proceso mediante el cual las plantas convierten la energía luminosa en glucosa y oxígeno.',
  'clorofila': 'El pigmento verde en los cloroplastos que captura la energía luminosa.',
  'tilacoides': 'Discos membranosos dentro de los cloroplastos donde ocurren las reacciones lumínicas.',
  'estroma': 'El espacio lleno de líquido dentro de los cloroplastos donde ocurre el ciclo de Calvin.',
  'grana': 'Apilamientos de tilacoides en los cloroplastos que aumentan la eficiencia de la fotosíntesis.',
  'ciclo de Calvin': 'Fase de la fotosíntesis donde se fija el CO₂ para producir glucosa.',
  'reacciones lumínicas': 'Fase de la fotosíntesis que depende de la luz y ocurre en los tilacoides.',
  
  // Tipos celulares
  'procariota': 'Células sin núcleo ni orgánulos delimitados por membrana (bacterias, arqueas).',
  'eucariota': 'Células con núcleo y orgánulos delimitados por membrana (animales, plantas, hongos).',
  'peptidoglicano': 'Un polímero que forma la pared celular de las bacterias.',
  'celulosa': 'Un carbohidrato complejo que forma la pared celular de las plantas.',
  'arqueas': 'Microorganismos procariotas que viven en ambientes extremos.',
  'hongos': 'Organismos eucariotas que incluyen levaduras, mohos y setas.',
  
  // Estructura celular general
  'citoplasma': 'El material gelatinoso dentro de la célula donde están suspendidos los orgánulos.',
  'orgánulo': 'Una estructura especializada dentro de una célula que realiza una función específica.',
  'enzima': 'Una proteína que acelera las reacciones químicas en la célula.',
  'homeostasis': 'El mantenimiento de un ambiente interno estable en la célula o el cuerpo.',
  'célula': 'La unidad básica de la vida, capaz de realizar todas las funciones vitales.',
  'célula animal': 'Célula eucariota sin pared celular ni cloroplastos, con centriolos.',
  'célula vegetal': 'Célula eucariota con pared celular de celulosa, cloroplastos y vacuola central.',
  'vacuola central': 'Orgánulo grande en células vegetales que almacena agua y mantiene la turgencia.',
  'pared celular': 'Capa rígida que rodea la membrana en células vegetales y bacterianas.',
  
  // Procesos celulares
  'replicación': 'Proceso de copiar el ADN antes de la división celular.',
  'regulación génica': 'Mecanismos que controlan qué genes se expresan y cuándo.',
  'señalización celular': 'Proceso de comunicación entre células mediante señales químicas.',
  'metabolismo': 'Conjunto de reacciones químicas que ocurren en la célula para mantener la vida.',
  'anabolismo': 'Procesos metabólicos que construyen moléculas complejas a partir de simples.',
  'catabolismo': 'Procesos metabólicos que descomponen moléculas para liberar energía.',
  
  // Moléculas y componentes
  'histonas': 'Proteínas alrededor de las cuales se enrolla el ADN para formar cromatina.',
  'cromosomas': 'Estructuras de ADN condensado que contienen los genes.',
  'genes': 'Segmentos de ADN que contienen instrucciones para producir proteínas.',
  'proteínas': 'Moléculas formadas por aminoácidos que realizan casi todas las funciones celulares.',
  'carbohidratos': 'Moléculas que incluyen azúcares y almidones, fuente de energía y estructura.'
};

// Function to add tooltips (only first occurrence of each term)
function addTooltips(content) {
  let result = content;
  const usedTerms = new Set();
  
  // Ordenar términos por longitud (más largos primero)
  const sortedTerms = Object.keys(biologyDictionary).sort((a, b) => b.length - a.length);
  
  for (const term of sortedTerms) {
    const escapedTerm = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const definition = biologyDictionary[term];
    const regex = new RegExp(`(?<![<])${escapedTerm}(?![^<>]*>)`, 'gi');
    
    let firstReplacement = true;
    
    result = result.replace(regex, (match) => {
      // Solo reemplazar si es la primera vez que aparece este término
      if (!firstReplacement) {
        return match;
      }
      
      // Verificar si ya está dentro de un span
      const context = result.substring(Math.max(0, result.indexOf(match) - 50), result.indexOf(match) + match.length + 50);
      if (context.includes('bio-term') || context.includes('data-tooltip')) {
        return match;
      }
      
      firstReplacement = false;
      
      const isStrong = result.substring(Math.max(0, result.indexOf(match) - 8), Math.min(result.length, result.indexOf(match) + match.length + 9)).includes('<strong>');
      
      if (isStrong) {
        return `<span class="bio-term" data-tooltip="${definition}"><strong>${match}</strong></span>`;
      }
      return `<span class="bio-term" data-tooltip="${definition}">${match}</span>`;
    });
  }
  
  return result;
}

// Cuando el usuario selecciona un orgánulo:
function showOrganelle(organelleKey) {
  // Primero, limpiar tooltips anteriores del contenido
  const organelle = organelleData[organelleKey];
  organelle.sections.forEach(section => {
    section.content = cleanContent(section.content);
  });
  if (organelle.memory) {
    organelle.memory = cleanContent(organelle.memory);
  }
  
  // Procesar con nuevos tooltips (solo primera vez en TODO el orgánulo)
  processOrganelleContent(organelleKey);
  
  // Ahora renderizar
  renderOrganelleUI(organelleKey);
}

// ============================================
// PERSISTENT PRODUCT STATE
// ============================================
const STORAGE_KEY = 'biolab-interactive-state-v3';
const ANALYTICS_CODE = window.BIOLAB_ANALYTICS_CODE || '';

let productState = {
  xp: 0,
  streak: 0,
  lastActiveDate: null,
  dailyCompletedDate: null,
  quizzesCompleted: 0,
  quizCorrect: 0,
  explored: [],
  builderCompleted: false,
  missionsCompleted: [],
  missionAttempts: {}
};

function loadProductState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
    if (saved && typeof saved === 'object') productState = { ...productState, ...saved };
  } catch (error) {
    console.warn('BioLab: no se pudo cargar el progreso local.', error);
  }
}

function saveProductState() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(productState)); } catch (_) {}
}

function todayKey() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function registerActivity() {
  const today = todayKey();
  if (productState.lastActiveDate !== today) {
    const previous = productState.lastActiveDate;
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayKey = yesterday.toISOString().slice(0, 10);
    productState.streak = previous === yesterdayKey ? productState.streak + 1 : 1;
    productState.lastActiveDate = today;
    saveProductState();
  }
}

function awardXP(amount, reason) {
  productState.xp += amount;
  registerActivity();
  saveProductState();
  updateDashboard();
  trackEvent('xp_earned', { amount, reason });
}

function trackEvent(name, data = {}) {
  // If GoatCounter is configured, it gives you aggregate visitor/event analytics
  // without requiring user accounts in BioLab.
  if (window.goatcounter && typeof window.goatcounter.count === 'function') {
    window.goatcounter.count({ path: `event/${name}`, title: name });
  }
  // Keep a tiny local event counter as a fallback for debugging.
  try {
    const key = 'biolab-event-counts';
    const events = JSON.parse(localStorage.getItem(key) || '{}');
    events[name] = (events[name] || 0) + 1;
    localStorage.setItem(key, JSON.stringify(events));
  } catch (_) {}
}

function loadAnalytics() {
  if (!ANALYTICS_CODE || ANALYTICS_CODE === 'YOUR_GOATCOUNTER_CODE') return;
  if (document.querySelector('script[data-biolab-analytics]')) return;
  const script = document.createElement('script');
  script.dataset.biolabAnalytics = 'true';
  script.src = 'https://gc.zgo.at/count.js';
  script.async = true;
  script.dataset.goatcounter = `https://${ANALYTICS_CODE}.goatcounter.com/count`;
  document.head.appendChild(script);
}

function updateDashboard() {
  const statXP = document.getElementById('stat-xp');
  const statStreak = document.getElementById('stat-streak');
  const statQuizzes = document.getElementById('stat-quizzes');
  const statExplored = document.getElementById('stat-explored');
  if (statXP) statXP.textContent = productState.xp;
  if (statStreak) statStreak.textContent = productState.streak;
  if (statQuizzes) statQuizzes.textContent = productState.quizzesCompleted;
  if (statExplored) statExplored.textContent = productState.explored.length;

  const dailyTitle = document.getElementById('daily-title');
  const dailySubtitle = document.getElementById('daily-subtitle');
  const dailyBtn = document.querySelector('.daily-btn');
  if (dailyTitle && dailySubtitle && dailyBtn) {
    const completed = productState.dailyCompletedDate === todayKey();
    const dailyQuestion = getDailyQuestion();
    dailyTitle.textContent = completed ? '¡Reto diario completado! ✨' : dailyQuestion.question;
    dailySubtitle.textContent = completed
      ? 'Vuelve mañana para desbloquear una nueva misión.'
      : 'Una pregunta rápida. Completa el reto y gana XP.';
    dailyBtn.textContent = completed ? 'Repasar →' : 'Comenzar →';
    dailyBtn.classList.toggle('daily-complete', completed);
  }
}

function getDailyQuestion() {
  const date = todayKey();
  const hash = [...date].reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return quizQuestions[hash % quizQuestions.length];
}

function startDailyChallenge() {
  const q = getDailyQuestion();
  const index = quizQuestions.findIndex(item => item.id === q.id);
  quizState.shuffledQuestions = [q];
  quizState.filteredQuestions = [q];
  quizState.currentIndex = 0;
  quizState.score = 0;
  quizState.streak = 0;
  quizState.answered = false;
  setMode('quiz');
  trackEvent('daily_challenge_started', { question: q.id });
}

function completeDailyChallenge() {
  const today = todayKey();
  if (productState.dailyCompletedDate !== today) {
    productState.dailyCompletedDate = today;
    awardXP(25, 'daily_challenge');
    updateDashboard();
    trackEvent('daily_challenge_completed');
  }
}

loadProductState();

// ============================================
// STATE
// ============================================
let currentMode = 'explorer';
let exploredOrganelles = new Set(productState.explored || []);
let quizState = {
  currentIndex: 0,
  score: 0,
  streak: 0,
  correct: 0,
  answered: false,
  filter: 'all',
  filteredQuestions: [],
  shuffledQuestions: []
};
let builderParts = [];
let cellType = 'animal';

// ============================================
// INIT
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  loadAnalytics();
  registerActivity();
  initQuiz();
  updateProgress();
  updateDashboard();
  renderMissions();
  trackEvent('app_open');
});

// ============================================
// SCIENTIFIC MISSIONS
// ============================================
const missions = [
  {
    id: 'energy-crisis', icon: '⚡', difficulty: 'Nivel 1', xp: 40,
    title: 'Crisis energética',
    summary: 'Una célula deja de producir suficiente ATP. Investiga qué estructura está fallando.',
    scenario: 'Tus sensores detectan una caída brusca de ATP. La síntesis de proteínas y el transporte activo comienzan a disminuir. ¿Qué estructura investigarías primero?',
    choices: [
      { text: '🧠 Núcleo', correct: false, feedback: 'El núcleo contiene el ADN y regula la expresión génica, pero no es el sitio principal de producción de ATP.' },
      { text: '⚡ Mitocondria', correct: true, feedback: 'Correcto. La mitocondria genera gran parte del ATP mediante la respiración celular.' },
      { text: '📦 Aparato de Golgi', correct: false, feedback: 'El Golgi modifica y distribuye moléculas; no es el principal productor de ATP.' }
    ]
  },
  {
    id: 'protein-factory', icon: '🧬', difficulty: 'Nivel 2', xp: 50,
    title: 'Fábrica de proteínas',
    summary: 'Una célula secretora produce muchas proteínas, pero los productos no llegan a su destino.',
    scenario: 'Una célula pancreática fabrica una proteína para secretarla fuera de la célula. La proteína se sintetiza, pero el envío falla. ¿Qué ruta deberías revisar?',
    choices: [
      { text: '🧬 Ribosoma → RER → Golgi → vesícula', correct: true, feedback: 'Exacto. Los ribosomas sintetizan la proteína, el RER participa en su procesamiento inicial y el Golgi la modifica y clasifica para su destino.' },
      { text: '⚡ Mitocondria → núcleo → membrana', correct: false, feedback: 'La mitocondria no es la ruta de empaquetado y secreción de proteínas.' },
      { text: '🌿 Cloroplasto → vacuola → Golgi', correct: false, feedback: 'Esa secuencia no corresponde a la vía secretora de una célula animal.' }
    ]
  },
  {
    id: 'membrane-defense', icon: '🛡️', difficulty: 'Nivel 3', xp: 60,
    title: 'Defensa de la membrana',
    summary: 'Una sustancia atraviesa la membrana. Determina qué mecanismo explica mejor su movimiento.',
    scenario: 'Hay mucha más concentración de una molécula pequeña y no polar fuera de la célula que dentro. No se observa gasto de ATP. ¿Cómo esperarías que se mueva?',
    choices: [
      { text: '🚪 Difusión simple hacia el interior', correct: true, feedback: 'Correcto. Una molécula pequeña y no polar puede atravesar la bicapa lipídica siguiendo su gradiente de concentración sin ATP.' },
      { text: '🔋 Transporte activo hacia el interior', correct: false, feedback: 'El transporte activo requiere energía y normalmente se utiliza para mover sustancias contra su gradiente.' },
      { text: '📦 Exocitosis', correct: false, feedback: 'La exocitosis utiliza vesículas para sacar materiales de la célula; no describe este caso.' }
    ]
  }
];

let activeMission = null;
let activeMissionAnswered = false;

function renderMissions() {
  const grid = document.getElementById('mission-grid');
  const pill = document.getElementById('mission-progress-pill');
  if (!grid) return;
  const completed = productState.missionsCompleted || [];
  if (pill) pill.textContent = `${completed.length}/${missions.length} completadas`;
  grid.innerHTML = missions.map(m => {
    const done = completed.includes(m.id);
    return `<article class="mission-card ${done ? 'completed' : ''}">
      <div class="mission-icon">${m.icon}</div>
      <h3>${m.title}</h3>
      <p>${m.summary}</p>
      <div class="mission-meta"><span>🧪 ${m.difficulty}</span><span>⚡ +${m.xp} XP</span></div>
      <button class="mission-open" onclick="openMission('${m.id}')">${done ? '↻ Repetir misión' : 'Iniciar misión →'}</button>
    </article>`;
  }).join('');
}

function openMission(id) {
  const mission = missions.find(m => m.id === id);
  if (!mission) return;
  activeMission = mission;
  activeMissionAnswered = false;
  document.getElementById('mission-grid').hidden = true;
  document.querySelector('.missions-hero').hidden = true;
  const workspace = document.getElementById('mission-workspace');
  workspace.hidden = false;
  const content = document.getElementById('mission-content');
  content.innerHTML = `<div class="mission-case">
    <div class="mission-case-header"><span class="eyebrow">🧪 MISIÓN CIENTÍFICA · ${mission.difficulty.toUpperCase()}</span><h2>${mission.icon} ${mission.title}</h2><p>Resuelve el caso con evidencia biológica.</p></div>
    <div class="mission-scenario"><h3>🔬 Caso</h3><p>${mission.scenario}</p></div>
    <div class="mission-decision"><h3>🧠 Toma una decisión</h3><div class="mission-choices">${mission.choices.map((c,i)=>`<button class="mission-choice" onclick="answerMission(${i})">${c.text}</button>`).join('')}</div><div class="mission-feedback" id="mission-feedback" hidden></div></div>
  </div>`;
  productState.missionAttempts[id] = (productState.missionAttempts[id] || 0) + 1;
  saveProductState();
  trackEvent('mission_started', { mission: id });
}

function answerMission(index) {
  if (!activeMission || activeMissionAnswered) return;
  const choice = activeMission.choices[index];
  const buttons = document.querySelectorAll('.mission-choice');
  buttons.forEach((b,i) => { b.disabled = true; if (i === index) b.classList.add(choice.correct ? 'correct' : 'incorrect'); if (activeMission.choices[i].correct) b.classList.add('correct'); });
  const feedback = document.getElementById('mission-feedback');
  feedback.hidden = false;
  feedback.innerHTML = `${choice.correct ? '✅' : '🧭'} <strong>${choice.correct ? 'Decisión correcta.' : 'Todavía no.'}</strong> ${choice.feedback}`;
  if (choice.correct) {
    activeMissionAnswered = true;
    const already = (productState.missionsCompleted || []).includes(activeMission.id);
    if (!already) {
      productState.missionsCompleted.push(activeMission.id);
      awardXP(activeMission.xp, `mission_${activeMission.id}`);
    } else {
      awardXP(10, 'mission_replay');
    }
    trackEvent('mission_completed', { mission: activeMission.id });
    setTimeout(() => renderMissions(), 0);
    feedback.innerHTML += `<div style="margin-top:12px;font-weight:800;color:var(--primary-dark)">🏆 +${already ? 10 : activeMission.xp} XP · Misión completada</div>`;
  } else {
    trackEvent('mission_wrong_choice', { mission: activeMission.id });
    buttons.forEach(b => b.disabled = false);
  }
}

function closeMission() {
  activeMission = null;
  document.getElementById('mission-workspace').hidden = true;
  document.getElementById('mission-grid').hidden = false;
  document.querySelector('.missions-hero').hidden = false;
  renderMissions();
}

// ============================================
// MODE SWITCHING
// ============================================
function setMode(mode) {
  currentMode = mode;

  // Update tab buttons
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === mode);
  });

  // Update sections
  document.querySelectorAll('.mode-section').forEach(section => {
    section.classList.toggle('active', section.id === 'mode-' + mode);
  });

  // Mode-specific init
  if (mode === 'quiz') {
    renderQuizQuestion();
  }
  if (mode === 'missions') {
    renderMissions();
  }
}

// ============================================
// EXPLORER MODE
// ============================================
function showInfo(key) {
  const data = organelleData[key];
  if (!data) return;

  const wasNew = !exploredOrganelles.has(key);
  exploredOrganelles.add(key);
  productState.explored = [...exploredOrganelles];
  if (wasNew) awardXP(5, 'explore_organelle'); else saveProductState();
  updateProgress();

  const panel = document.getElementById('info-panel');
  panel.style.borderLeftColor = data.color;

  let sectionsHtml = data.sections.map(s => `
    <div class="info-section">
      <h4><span>${s.icon}</span> ${s.title}</h4>
      <p>${addTooltips(s.content)}</p>
    </div>
  `).join('');

  panel.innerHTML = `
    <div class="organelle-info">
      <h3 class="info-title" style="color:${data.color}">${data.title}</h3>
      ${sectionsHtml}
      <div class="info-fact">
        <p>💡 <strong>Dato clave:</strong> ${data.sections[2].content.replace(/<[^>]*>/g, '')}</p>
      </div>
      <div class="memory-card">
        <strong>🎴 Tarjeta de memoria:</strong>
        <p>${data.memory}</p>
      </div>
    </div>
  `;
}

function setCellType(type) {
  cellType = type;

  // Update buttons
  document.querySelectorAll('.type-btn').forEach(btn => {
    btn.classList.toggle('active', btn.textContent.includes(type === 'animal' ? 'Animal' : 'Vegetal'));
  });

  // Toggle plant-only elements
  const plantElements = ['cell-wall', 'central-vacuole', 'chloroplast1', 'chloroplast2'];
  plantElements.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = type === 'plant' ? 'block' : 'none';
  });

  // Update badge
  const badge = document.querySelector('.cell-badge');
  if (badge) {
    badge.innerHTML = `
      <span class="badge-icon">${type === 'animal' ? '🐾' : '🌿'}</span>
      <span class="badge-text">Célula Eucariota ${type === 'animal' ? 'Animal' : 'Vegetal'}</span>
    `;
  }
}

function updateProgress() {
  const total = Object.keys(organelleData).length;
  const explored = exploredOrganelles.size;
  const percent = Math.round((explored / total) * 100);

  document.getElementById('progress-fill').style.width = percent + '%';
  document.getElementById('progress-text').textContent = percent + '% Explorado';
}

// ============================================
// QUIZ MODE
// ============================================
function initQuiz() {
  // Shuffle all questions
  quizState.shuffledQuestions = [...quizQuestions].sort(() => Math.random() - 0.5);
  quizState.filteredQuestions = [...quizState.shuffledQuestions];
  quizState.currentIndex = 0;
  quizState.score = 0;
  quizState.streak = 0;
  quizState.correct = 0;
}

function filterQuiz(category) {
  quizState.filter = category;

  // Update buttons
  document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.classList.toggle('active', 
      (category === 'all' && btn.textContent === 'Todos') ||
      (category === 'organelles' && btn.textContent === 'Orgánulos') ||
      (category === 'membrane' && btn.textContent === 'Membrana') ||
      (category === 'transport' && btn.textContent === 'Transporte') ||
      (category === 'cytoskeleton' && btn.textContent === 'Citoesqueleto') ||
      (category === 'types' && btn.textContent === 'Tipos de célula')
    );
  });

  // Filter questions
  if (category === 'all') {
    quizState.filteredQuestions = [...quizState.shuffledQuestions];
  } else {
    quizState.filteredQuestions = quizState.shuffledQuestions.filter(q => q.category === category);
  }

  // Reset quiz state for filtered set
  quizState.currentIndex = 0;
  quizState.score = 0;
  quizState.streak = 0;
  quizState.correct = 0;
  quizState.answered = false;

  renderQuizQuestion();
}

function renderQuizQuestion() {
  const questions = quizState.filteredQuestions;

  if (quizState.currentIndex >= questions.length) {
    showQuizResults();
    return;
  }

  const q = questions[quizState.currentIndex];
  quizState.answered = false;

  // Update header
  document.getElementById('quiz-score').textContent = quizState.score;
  document.getElementById('quiz-streak').textContent = '🔥 ' + quizState.streak;
  document.getElementById('quiz-progress').textContent = `${quizState.currentIndex + 1} / ${questions.length}`;

  // Update card
  document.getElementById('quiz-icon').textContent = q.icon;
  document.getElementById('quiz-question').textContent = q.question;
  document.getElementById('quiz-feedback').innerHTML = '';
  document.getElementById('quiz-feedback').className = 'quiz-feedback';
  document.getElementById('next-btn').disabled = true;

  // Render options
  const optionsContainer = document.getElementById('quiz-options');
  optionsContainer.innerHTML = '';

  const letters = ['A', 'B', 'C', 'D'];
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-option';
    btn.innerHTML = `<span class="opt-letter">${letters[i]}</span> ${opt}`;
    btn.onclick = () => selectAnswer(i);
    optionsContainer.appendChild(btn);
  });
}

function selectAnswer(index) {
  if (quizState.answered) return;
  quizState.answered = true;

  const q = quizState.filteredQuestions[quizState.currentIndex];
  const options = document.querySelectorAll('.quiz-option');
  const feedback = document.getElementById('quiz-feedback');
  const nextBtn = document.getElementById('next-btn');

  options.forEach((btn, i) => {
    btn.classList.add('disabled');
    if (i === q.correct) {
      btn.classList.add('correct');
    } else if (i === index && i !== q.correct) {
      btn.classList.add('incorrect');
    }
  });

  if (index === q.correct) {
    quizState.correct++;
    quizState.score += 10 + (quizState.streak * 2);
    quizState.streak++;
    feedback.innerHTML = `✅ ¡Correcto! ${q.explanation}`;
    feedback.className = 'quiz-feedback correct';
  } else {
    quizState.streak = 0;
    feedback.innerHTML = `❌ Casi... ${q.explanation}`;
    feedback.className = 'quiz-feedback incorrect';
  }

  // Update score display
  document.getElementById('quiz-score').textContent = quizState.score;
  document.getElementById('quiz-streak').textContent = '🔥 ' + quizState.streak;

  nextBtn.disabled = false;
}

function nextQuestion() {
  quizState.currentIndex++;
  renderQuizQuestion();
}

function skipQuestion() {
  quizState.streak = 0;
  quizState.currentIndex++;
  renderQuizQuestion();
}

function showQuizResults() {
  const total = quizState.filteredQuestions.length;
  const percent = total ? Math.round((quizState.correct / total) * 100) : 0;
  productState.quizzesCompleted++;
  productState.quizCorrect += quizState.correct;
  awardXP(Math.max(10, quizState.correct * 5), 'quiz_completed');
  if (quizState.filteredQuestions.length === 1 && quizState.filteredQuestions[0].id === getDailyQuestion().id) {
    completeDailyChallenge();
  }
  saveProductState();
  trackEvent('quiz_completed', { correct: quizState.correct, total, percent });

  let icon, title, message, badges = [];

  if (percent >= 90) {
    icon = '🏆';
    title = '¡Excelente!';
    message = 'Eres un experto en biología celular. ¡Felicidades!';
    badges = ['🧬 Maestro Celular', '⚡ Experto en ATP', '🧠 Genio del Núcleo'];
  } else if (percent >= 70) {
    icon = '🌟';
    title = '¡Muy bien!';
    message = 'Tienes un buen dominio de la biología celular. ¡Sigue practicando!';
    badges = ['🔬 Científico en formación', '📚 Estudiante destacado'];
  } else if (percent >= 50) {
    icon = '👍';
    title = '¡Bien hecho!';
    message = 'Vas por buen camino. Repasa los temas que te costaron más.';
    badges = ['🌱 Principiante avanzado'];
  } else {
    icon = '💪';
    title = '¡Sigue intentando!';
    message = 'La biología celular es compleja. Usa el modo Explorador para repasar.';
    badges = ['🎯 Determinado'];
  }

  const container = document.querySelector('.quiz-container');
  container.innerHTML = `
    <div class="quiz-results">
      <div class="results-icon">${icon}</div>
      <h2 class="results-title">${title}</h2>
      <div class="results-score">${quizState.score} pts</div>
      <p class="results-message">${message}</p>
      <div class="results-badges">
        ${badges.map(b => `<span class="result-badge">${b}</span>`).join('')}
      </div>
      <button class="quiz-btn primary" onclick="restartQuiz()" style="margin-top:20px">🔄 Intentar de nuevo</button>
    </div>
  `;
}

function restartQuiz() {
  initQuiz();

  // Rebuild quiz UI
  const container = document.querySelector('.quiz-container');
  container.innerHTML = `
    <div class="quiz-header">
      <div class="quiz-score">
        <span class="score-label">Puntuación</span>
        <span class="score-value" id="quiz-score">0</span>
      </div>
      <div class="quiz-streak">
        <span class="streak-label">Racha</span>
        <span class="streak-value" id="quiz-streak">🔥 0</span>
      </div>
      <div class="quiz-progress">
        <span class="progress-label">Pregunta</span>
        <span class="progress-value" id="quiz-progress">1 / 20</span>
      </div>
    </div>
    <div class="quiz-card" id="quiz-card">
      <div class="quiz-question-icon" id="quiz-icon">🎯</div>
      <h3 class="quiz-question" id="quiz-question">Cargando pregunta...</h3>
      <div class="quiz-options" id="quiz-options"></div>
      <div class="quiz-feedback" id="quiz-feedback"></div>
    </div>
    <div class="quiz-controls">
      <button class="quiz-btn secondary" onclick="skipQuestion()">⏭️ Saltar</button>
      <button class="quiz-btn primary" id="next-btn" onclick="nextQuestion()" disabled>Siguiente →</button>
    </div>
    <div class="quiz-categories">
      <span class="cat-label">Filtrar por tema:</span>
      <button class="cat-btn active" onclick="filterQuiz('all')">Todos</button>
      <button class="cat-btn" onclick="filterQuiz('organelles')">Orgánulos</button>
      <button class="cat-btn" onclick="filterQuiz('membrane')">Membrana</button>
      <button class="cat-btn" onclick="filterQuiz('transport')">Transporte</button>
      <button class="cat-btn" onclick="filterQuiz('cytoskeleton')">Citoesqueleto</button>
      <button class="cat-btn" onclick="filterQuiz('types')">Tipos de célula</button>
    </div>
  `;

  renderQuizQuestion();
}

// ============================================
// BUILDER MODE
// ============================================
const builderData = {
  nucleo: {
    name: 'Núcleo',
    emoji: '🧠',
    color: '#3949ab',
    gradient: 'linear-gradient(135deg, #7986cb, #3949ab)',
    shape: 'circle',
    size: { w: 120, h: 100 },
    pos: { x: 190, y: 200 }
  },
  mitocondria: {
    name: 'Mitocondria',
    emoji: '⚡',
    color: '#c62828',
    gradient: 'linear-gradient(135deg, #ef5350, #c62828)',
    shape: 'ellipse',
    size: { w: 90, h: 50 },
    pos: { x: 80, y: 120 }
  },
  ribosomas: {
    name: 'Ribosomas',
    emoji: '🏭',
    color: '#e65100',
    gradient: 'linear-gradient(135deg, #ffcc80, #f57c00)',
    shape: 'dots',
    size: { w: 80, h: 60 },
    pos: { x: 320, y: 100 }
  },
  rer: {
    name: 'Ret. Rugoso',
    emoji: '🕸️',
    color: '#8e24aa',
    gradient: 'linear-gradient(135deg, #ce93d8, #8e24aa)',
    shape: 'wavy',
    size: { w: 120, h: 60 },
    pos: { x: 60, y: 280 }
  },
  ser: {
    name: 'Ret. Liso',
    emoji: '🧈',
    color: '#ba68c8',
    gradient: 'linear-gradient(135deg, #e1bee7, #ba68c8)',
    shape: 'wavy-smooth',
    size: { w: 100, h: 50 },
    pos: { x: 340, y: 300 }
  },
  golgi: {
    name: 'Aparato Golgi',
    emoji: '📦',
    color: '#1565c0',
    gradient: 'linear-gradient(135deg, #64b5f6, #1976d2)',
    shape: 'stacks',
    size: { w: 120, h: 70 },
    pos: { x: 300, y: 380 }
  },
  membrana: {
    name: 'Membrana',
    emoji: '🛡️',
    color: '#ff9800',
    gradient: 'linear-gradient(135deg, #ffcc80, #ff9800)',
    shape: 'ring',
    size: { w: 460, h: 460 },
    pos: { x: 20, y: 20 }
  },
  citoesqueleto: {
    name: 'Citoesqueleto',
    emoji: '🦴',
    color: '#78909c',
    gradient: 'repeating-linear-gradient(45deg, #78909c, #78909c 2px, transparent 2px, transparent 8px)',
    shape: 'lines',
    size: { w: 400, h: 400 },
    pos: { x: 50, y: 50 }
  }
};

function addToCell(part) {
  const canvas = document.getElementById('builder-canvas');
  const placeholder = document.getElementById('canvas-placeholder');
  const status = document.getElementById('builder-status');
  const paletteItem = document.querySelector(`[data-part="${part}"]`);

  if (placeholder) placeholder.style.display = 'none';

  if (builderParts.includes(part)) {
    status.innerHTML = `<span style="color:#c62828">⚠️ ${builderData[part].name} ya está en tu célula</span>`;
    setTimeout(() => status.innerHTML = '', 2000);
    return;
  }

  builderParts.push(part);
  paletteItem.classList.add('added');

  const data = builderData[part];
  const el = document.createElement('div');
  el.className = 'builder-part';
  el.style.left = data.pos.x + 'px';
  el.style.top = data.pos.y + 'px';
  el.style.width = data.size.w + 'px';
  el.style.height = data.size.h + 'px';
  el.title = data.name;

  // Create realistic organelle visuals
  let innerHtml = '';
  switch (data.shape) {
    case 'circle':
      innerHtml = `
        <div style="width:100%;height:100%;background:${data.gradient};border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 16px rgba(0,0,0,0.2);border:2px solid ${data.color};">
          <span style="font-size:2rem">${data.emoji}</span>
        </div>
        <div style="position:absolute;top:-8px;right:-8px;width:20px;height:20px;background:#9fa8da;border-radius:50%;opacity:0.6"></div>
        <div style="position:absolute;bottom:-5px;left:10px;width:15px;height:15px;background:#9fa8da;border-radius:50%;opacity:0.5"></div>
      `;
      break;
    case 'ellipse':
      innerHtml = `
        <div style="width:100%;height:100%;background:${data.gradient};border-radius:40%;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 16px rgba(0,0,0,0.2);border:2px solid ${data.color};transform:rotate(-20deg);">
          <div style="width:70%;height:2px;background:#ffcdd2;position:absolute;top:30%"></div>
          <div style="width:60%;height:2px;background:#ffcdd2;position:absolute;top:50%"></div>
          <span style="font-size:1.5rem;transform:rotate(20deg)">${data.emoji}</span>
        </div>
      `;
      break;
    case 'dots':
      innerHtml = `
        <div style="position:relative;width:100%;height:100%;">
          <div style="position:absolute;top:10%;left:20%;width:18px;height:18px;background:${data.gradient};border-radius:50%;border:1.5px solid ${data.color}"></div>
          <div style="position:absolute;top:30%;left:50%;width:14px;height:14px;background:${data.gradient};border-radius:50%;border:1.5px solid ${data.color}"></div>
          <div style="position:absolute;top:50%;left:10%;width:16px;height:16px;background:${data.gradient};border-radius:50%;border:1.5px solid ${data.color}"></div>
          <div style="position:absolute;top:60%;left:55%;width:12px;height:12px;background:${data.gradient};border-radius:50%;border:1.5px solid ${data.color}"></div>
          <div style="position:absolute;top:20%;left:70%;width:15px;height:15px;background:${data.gradient};border-radius:50%;border:1.5px solid ${data.color}"></div>
          <span style="position:absolute;bottom:-20px;left:50%;transform:translateX(-50%);font-size:0.75rem;font-weight:700;color:${data.color}">${data.name}</span>
        </div>
      `;
      break;
    case 'wavy':
      innerHtml = `
        <div style="position:relative;width:100%;height:100%;">
          <svg width="100%" height="100%" viewBox="0 0 120 60">
            <path d="M 5 20 Q 20 5, 35 20 T 65 20 T 95 18 T 115 22" stroke="url(#rerGrad)" fill="none" stroke-width="8" stroke-linecap="round"/>
            <path d="M 8 35 Q 23 20, 38 35 T 68 35 T 98 33" stroke="url(#rerGrad)" fill="none" stroke-width="7" stroke-linecap="round"/>
            <circle cx="20" cy="20" r="4" fill="#f57c00"/>
            <circle cx="50" cy="20" r="4" fill="#f57c00"/>
            <circle cx="80" cy="18" r="4" fill="#f57c00"/>
          </svg>
          <span style="position:absolute;bottom:-15px;left:50%;transform:translateX(-50%);font-size:0.7rem;font-weight:700;color:${data.color};white-space:nowrap">${data.name}</span>
        </div>
        <svg style="position:absolute;width:0;height:0;">
          <defs>
            <linearGradient id="rerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#ce93d8"/>
              <stop offset="100%" stop-color="#8e24aa"/>
            </linearGradient>
          </defs>
        </svg>
      `;
      break;
    case 'wavy-smooth':
      innerHtml = `
        <div style="position:relative;width:100%;height:100%;">
          <svg width="100%" height="100%" viewBox="0 0 100 50">
            <path d="M 5 18 Q 20 8, 35 18 T 65 16 T 95 20" stroke="url(#serGrad)" fill="none" stroke-width="6" stroke-linecap="round"/>
            <path d="M 8 32 Q 23 22, 38 32 T 68 30" stroke="url(#serGrad)" fill="none" stroke-width="5" stroke-linecap="round"/>
          </svg>
          <span style="position:absolute;bottom:-15px;left:50%;transform:translateX(-50%);font-size:0.7rem;font-weight:700;color:${data.color};white-space:nowrap">${data.name}</span>
        </div>
        <svg style="position:absolute;width:0;height:0;">
          <defs>
            <linearGradient id="serGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#e1bee7"/>
              <stop offset="100%" stop-color="#ba68c8"/>
            </linearGradient>
          </defs>
        </svg>
      `;
      break;
    case 'stacks':
      innerHtml = `
        <div style="position:relative;width:100%;height:100%;">
          <div style="position:absolute;top:5%;left:10%;width:80%;height:18%;background:${data.gradient};border-radius:10px;box-shadow:0 2px 6px rgba(0,0,0,0.15)"></div>
          <div style="position:absolute;top:28%;left:5%;width:90%;height:18%;background:${data.gradient};border-radius:10px;box-shadow:0 2px 6px rgba(0,0,0,0.15)"></div>
          <div style="position:absolute;top:51%;left:0%;width:100%;height:18%;background:${data.gradient};border-radius:10px;box-shadow:0 2px 6px rgba(0,0,0,0.15)"></div>
          <div style="position:absolute;top:74%;left:8%;width:84%;height:18%;background:${data.gradient};border-radius:10px;box-shadow:0 2px 6px rgba(0,0,0,0.15)"></div>
          <span style="position:absolute;bottom:-20px;left:50%;transform:translateX(-50%);font-size:0.75rem;font-weight:700;color:${data.color}">${data.name}</span>
        </div>
      `;
      break;
    case 'ring':
      innerHtml = `
        <div style="width:100%;height:100%;border:4px dashed ${data.color};border-radius:50%;opacity:0.6;position:relative;">
          <div style="position:absolute;top:20%;left:5%;width:12px;height:25px;background:${data.color};border-radius:6px;opacity:0.7"></div>
          <div style="position:absolute;top:60%;left:3%;width:12px;height:20px;background:${data.color};border-radius:6px;opacity:0.7"></div>
          <div style="position:absolute;top:40%;right:3%;width:12px;height:22px;background:${data.color};border-radius:6px;opacity:0.7"></div>
          <span style="position:absolute;bottom:10%;left:50%;transform:translateX(-50%);font-size:0.8rem;font-weight:700;color:${data.color}">${data.name}</span>
        </div>
      `;
      break;
    case 'lines':
      innerHtml = `
        <div style="position:relative;width:100%;height:100%;opacity:0.3;">
          <svg width="100%" height="100%" viewBox="0 0 400 400">
            <line x1="0" y1="0" x2="400" y2="400" stroke="#78909c" stroke-width="2" stroke-dasharray="5,10"/>
            <line x1="400" y1="0" x2="0" y2="400" stroke="#78909c" stroke-width="2" stroke-dasharray="5,10"/>
            <line x1="200" y1="0" x2="200" y2="400" stroke="#78909c" stroke-width="1.5" stroke-dasharray="3,12"/>
            <line x1="0" y1="200" x2="400" y2="200" stroke="#78909c" stroke-width="1.5" stroke-dasharray="3,12"/>
          </svg>
        </div>
      `;
      break;
  }

  el.innerHTML = innerHtml;
  canvas.appendChild(el);

  status.innerHTML = `<span style="color:${data.color}">✅ ¡${data.name} añadido! (${builderParts.length}/8)</span>`;

  if (builderParts.length === 8) {
    canvas.classList.add('complete');
    if (!productState.builderCompleted) {
      productState.builderCompleted = true;
      awardXP(50, 'builder_completed');
      trackEvent('builder_completed');
    }
    document.getElementById('builder-completion').innerHTML = `
      <div class="completion-badge">🏆 ¡Célula completa! Eres una científica estrella 🌟</div>
    `;
    status.innerHTML = '<span style="color:#2e7d32;font-size:1.1rem">🎉 ¡Felicidades! Has construido una célula eucariota completa</span>';
  }
}

function resetCell() {
  const canvas = document.getElementById('builder-canvas');
  canvas.innerHTML = `
    <div class="canvas-placeholder" id="canvas-placeholder">
      <span class="placeholder-icon">🧫</span>
      <span class="placeholder-text">Tu célula aquí</span>
      <span class="placeholder-sub">Haz clic en los orgánulos de la izquierda</span>
    </div>
  `;
  canvas.classList.remove('complete');
  builderParts = [];
  document.getElementById('builder-status').innerHTML = '';
  document.getElementById('builder-completion').innerHTML = '';

  // Reset palette
  document.querySelectorAll('.palette-item').forEach(item => item.classList.remove('added'));
}

function showBuilderHint() {
  const status = document.getElementById('builder-status');
  const missing = Object.keys(builderData).filter(p => !builderParts.includes(p));

  if (missing.length === 0) {
    status.innerHTML = '<span style="color:#2e7d32">🎉 ¡Ya tienes todos los orgánulos!</span>';
  } else {
    const next = missing[0];
    status.innerHTML = `<span style="color:#7e57c2">💡 Pista: Prueba añadiendo ${builderData[next].emoji} ${builderData[next].name}</span>`;
  }
}

// ============================================
// MODAL
// ============================================
function showAbout() {
  document.getElementById('about-modal').classList.add('active');
}

function closeAbout() {
  document.getElementById('about-modal').classList.remove('active');
}

// Close modal on outside click
document.addEventListener('click', (e) => {
  const modal = document.getElementById('about-modal');
  if (e.target === modal) {
    modal.classList.remove('active');
  }
});

window.addEventListener('beforeunload', saveProductState);
