/*******************************************************
 * GENERADOR SCORM — CON GLOSARIO LATEX INTEGRADO
 *******************************************************/
document.addEventListener("DOMContentLoaded", () => {

    const contPreguntas = document.getElementById("preguntasContainer");
    const btnAgregarPregunta = document.getElementById("btnAgregarPregunta");
    const btnGenerar = document.getElementById("btnGenerar");
    const salida = document.getElementById("salida");

    let contador = 0;

    /********************************************
     *   FUNCIONES DE PREGUNTAS
     ********************************************/
    function agregarPregunta() {
        contador++;

        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <h2>Pregunta ${contador}</h2>

            <label>Construir enunciado</label>
            <button class="btn-menu">➕ Agregar</button>

            <div class="options-menu" style="display:none; margin-top:10px;">
                <div class="option-btn op-texto">Agregar texto</div>
                <div class="option-btn op-formula">Agregar fórmula LaTeX</div>
            </div>

            <div class="editor"></div>
            <div class="preview-box">(Vista previa aparecerá aquí)</div>

            <label>Respuesta correcta</label>
            <select class="correcta">
                <option value="V">Verdadero</option>
                <option value="F">Falso</option>
            </select>

            <label>Puntos</label>
            <input type="number" class="puntos">
        `;

        contPreguntas.appendChild(card);
        inicializarPregunta(card);
    }

    btnAgregarPregunta.onclick = agregarPregunta;
    agregarPregunta();

    function inicializarPregunta(card) {
        const editor = card.querySelector(".editor");
        const preview = card.querySelector(".preview-box");
        const menuBtn = card.querySelector(".btn-menu");
        const menu = card.querySelector(".options-menu");

        menuBtn.onclick = () =>
            (menu.style.display = menu.style.display === "block" ? "none" : "block");

        menu.querySelector(".op-texto").onclick = () => {
            insertarSegmento(editor, "texto");
            menu.style.display = "none";
        };

        menu.querySelector(".op-formula").onclick = () => {
            const seg = insertarSegmento(editor, "latex");
            window.segmentoActivo = seg;
            window.open(
                "glosario.html",
                "glosario",
                "width=700,height=600,scrollbars=yes"
            );
            menu.style.display = "none";
        };

        editor.addEventListener("input", () =>
            actualizarPreview(editor, preview)
        );
    }

    /********************************************
     *   EDITOR DE SEGMENTOS
     ********************************************/
    function insertarSegmento(editor, tipo) {
        const span = document.createElement("span");
        span.className = `segment ${tipo}`;
        span.contentEditable = "true";
        span.innerHTML = tipo === "texto" ? "Texto…" : "latex";

        const remove = document.createElement("span");
        remove.className = "remove";
        remove.innerHTML = "❌";
        remove.onclick = () => span.remove();

        span.appendChild(remove);
        editor.appendChild(span);
        span.focus();
        return span;
    }

    function actualizarPreview(editor, preview) {
        let html = "";

        editor.querySelectorAll(".segment").forEach(seg => {
            let contenido = seg.textContent.replace("❌", "").trim();

            if (seg.classList.contains("latex")) {
                html += `<span>$${contenido}$</span> `;
            } else {
                html += `<span>${contenido}</span> `;
            }
        });

        preview.innerHTML = html;
        MathJax.typesetPromise([preview]);
    }

    window.insertarDesdeGlosario = function (codigo) {
        if (window.segmentoActivo) {
            const remove = window.segmentoActivo.querySelector(".remove");
            window.segmentoActivo.innerHTML = codigo + " ";
            window.segmentoActivo.appendChild(remove);

            const editor = window.segmentoActivo.closest(".editor");
            const preview =
                window.segmentoActivo.closest(".card").querySelector(".preview-box");

            actualizarPreview(editor, preview);
        }
    };

    /********************************************
     *   GENERAR ARCHIVOS AL HACER CLICK
     ********************************************/
    btnGenerar.onclick = () => {
        const titulo = document.getElementById("tituloActividad").value;
        const ident = document.getElementById("identificadorScorm").value;
        const puntosDefecto =
            parseFloat(document.getElementById("puntosDefecto").value) || 1;

        const preguntas = [];

        document.querySelectorAll(".card").forEach(card => {
            const segmentos = [];

            card.querySelectorAll(".segment").forEach(seg => {
                const tipo = seg.classList.contains("latex") ? "latex" : "texto";
                const contenido = seg.textContent.replace("❌", "").trim();
                segmentos.push({ tipo, contenido });
            });

            preguntas.push({
                segmentos,
                correcta: card.querySelector(".correcta").value,
                puntos: Number(
                    card.querySelector(".puntos").value || puntosDefecto
                )
            });
        });

        const archivos = [
            { nombre: "index.html", contenido: generarIndex(titulo) },
            { nombre: "estilos.css", contenido: generarEstilos() },
            { nombre: "scorm.js", contenido: generarScormJS(preguntas) },
            { nombre: "resultado.html", contenido: generarResultadoHTML() },
            { nombre: "imsmanifest.xml", contenido: generarManifest(ident, titulo) }
        ];

        mostrarArchivos(archivos);
    };

    /********************************************
     *   MOSTRAR ARCHIVOS PARA DESCARGA MANUAL
     ********************************************/
    function mostrarArchivos(archivos) {
        salida.innerHTML = "";

        archivos.forEach(arch => {
            const box = document.createElement("div");
            box.className = "card";

            box.innerHTML = `
                <h3>${arch.nombre}</h3>
                <textarea style="width:100%;height:200px;">${arch.contenido}</textarea>
                <button class="btn descargar">Descargar ${arch.nombre}</button>
            `;

            box.querySelector(".descargar").onclick = () =>
                descargarArchivo(arch.nombre, arch.contenido);

            salida.appendChild(box);
        });
    }

    function descargarArchivo(nombre, contenido) {
        const blob = new Blob([contenido], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");

        a.href = url;
        a.download = nombre;
        a.click();

        URL.revokeObjectURL(url);
    }
});

/*******************************************************
 * ARCHIVOS GENERADOS (FUNCIONES DE TEXTO)
 *******************************************************/
function generarIndex(titulo) {
    return `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>${titulo}</title>

<script>
window.MathJax = { tex: { inlineMath: [['$', '$']] } };
</script>
<script async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js"></script>

<link rel="stylesheet" href="estilos.css">
<script src="scorm.js"></script>
</head>

<body>
<div class="container">
    <h1 class="title">${titulo}</h1>
    <div id="contenedorPreguntas"></div>
    <button class="btn" id="btnEnviar">Enviar respuestas</button>
</div>
</body>
</html>`;
}

function generarResultadoHTML() {
    return `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>Resultado</title>
<link rel="stylesheet" href="estilos.css">
</head>

<body>
<div class="container">

    <h1 class="title">Resultado</h1>

    <p id="frase" style="font-size:20px; font-weight:600; margin-top:20px;"></p>

    <p style="font-size:18px;">
        Tu calificación es: <b id="score"></b>%
    </p>

    <button class="btn" id="btnContinuar">Continuar</button>

</div>

<script>
const FRASES = [
    "🌟 La matemática es el lenguaje en el que está escrito el universo. — Galileo",
    "📐 Una demostración vale más que mil intuiciones.",
    "🧠 Las matemáticas no mienten. — Einstein",
    "📊 Donde hay un número, hay una historia.",
    "∞ El infinito no es un número, es una idea poderosa."
];

document.getElementById("frase").innerText =
    FRASES[Math.floor(Math.random()*FRASES.length)];

document.getElementById("score").innerText =
    localStorage.getItem("scoreFinal");

document.getElementById("btnContinuar").onclick = () => {
    window.location.href = "https://suayed.fciencias.unam.mx/";
};
</script>

</body>
</html>`;
}

function generarEstilos() {
    return `
body { background:#eef2f7; font-family:Montserrat; }
.container { width:92%; max-width:900px; margin:40px auto; }
.title { text-align:center; font-size:34px; color:#14335d; font-weight:800; }

.card {
    background:#ffffff;
    padding:22px;
    border-radius:18px;
    box-shadow:6px 6px 14px rgba(0,0,0,0.08),
               -5px -5px 12px rgba(255,255,255,0.95);
    margin-bottom:24px;
}

.vf-options { margin-top:15px; display:flex; gap:20px; }

.vf-options label {
    background:#f7fbff;
    padding:10px 16px;
    border-radius:12px;
    display:flex;
    align-items:center;
    gap:8px;
    cursor:pointer;
    transition:0.2s ease-in-out;
    border:1px solid #dce7f3;
}

.vf-options label:hover {
    background:#e3f0ff;
    transform:translateY(-2px);
}

.btn {
    background:linear-gradient(145deg,#1a73e8,#125cb3);
    color:white;
    padding:14px;
    border:none;
    width:100%;
    border-radius:12px;
    cursor:pointer;
    font-size:17px;
    font-weight:600;
    box-shadow:4px 4px 10px rgba(0,0,0,0.15),
               -3px -3px 10px rgba(255,255,255,0.6);
    transition:0.25s;
}

.btn:hover {
    background:linear-gradient(145deg,#0f5cc4,#0d4a9c);
    transform:translateY(-2px);
}

#frase { text-align:center; font-size:20px; color:#0d3b66; }
#score { font-weight:800; font-size:26px; color:#14335d; }
`;
}

function generarScormJS(preguntas) {
    return `
const preguntas = ${JSON.stringify(preguntas)};

/**********************************************
 *  SCORM — ACTIVIDAD V/F
 **********************************************/

function getAPI() {
    return (
        window.API ||
        window.parent.API ||
        window.top.API ||
        null
    );
}

let api = null;

document.addEventListener("DOMContentLoaded", () => {

    api = getAPI();

    if (api) {
        try {
            api.LMSInitialize("");
        } catch (e) {
            console.log("⚠ Error al inicializar SCORM:", e);
        }
    } else {
        console.log("⚠ API SCORM no encontrada");
    }

    const cont = document.getElementById("contenedorPreguntas");

    /**********************************************
     * IMPRIMIR PREGUNTAS EN PANTALLA
     **********************************************/
    preguntas.forEach((p, idx) => {

        const card = document.createElement("div");
        card.className = "card";

        let html = "";
        p.segmentos.forEach(seg => {
            if (seg.tipo === "latex") {
                html += "<span>$" + seg.contenido + "$</span> ";
            } else {
                html += "<span>" + seg.contenido + "</span> ";
            }
        });

        card.innerHTML = html + \`
            <div class='vf-options'>
                <label><input type='radio' name='q\${idx}' value='V'> Verdadero</label>
                <label><input type='radio' name='q\${idx}' value='F'> Falso</label>
            </div>\`;

        cont.appendChild(card);
    });

    MathJax.typesetPromise();

    /**********************************************
     * BOTÓN ENVIAR RESPUESTAS (EVENTO DIRECTO)
     **********************************************/
    const btn = document.getElementById("btnEnviar");
    if (btn) {
        btn.addEventListener("click", () => {
            calificar();
        });
    }
});

/**********************************************
 * CALIFICAR ACTIVIDAD
 **********************************************/
function calificar() {

    let total = preguntas.reduce((a,p)=>a+p.puntos,0);
    let obtenido = 0;

    preguntas.forEach((p, idx) => {
        const val = document.querySelector("input[name='q"+idx+"']:checked");
        if (val && val.value === p.correcta) obtenido += p.puntos;
    });

    let score = Math.round((obtenido/total)*100);
    localStorage.setItem("scoreFinal", score);

    enviarSCORM(score);

    window.location.href = "resultado.html";
}

/**********************************************
 * ENVIAR CALIFICACIÓN A MOODLE SCORM
 **********************************************/
function enviarSCORM(score) {

    if (!api) return;

    try {
        api.LMSSetValue("cmi.core.score.raw", score);
        api.LMSSetValue("cmi.core.score.min", 0);
        api.LMSSetValue("cmi.core.score.max", 100);
        api.LMSSetValue("cmi.core.lesson_status", "completed");

        api.LMSCommit("");
        api.LMSFinish("");

        console.log("✔ SCORM enviado:", score);

    } catch (e) {
        console.log("⚠ Error enviando SCORM:", e);
    }
}
`;
}

function generarManifest(ident, titulo) {
    return `<?xml version="1.0" encoding="UTF-8"?>
<manifest identifier="${ident}"
          version="1.0"
          xmlns="http://www.imsglobal.org/xsd/imscp_v1p1"
          xmlns:adlcp="http://www.adlnet.org/xsd/adlcp_v1p3"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http://www.imsglobal.org/xsd/imscp_v1p1
                              imscp_v1p1.xsd
                              http://www.adlnet.org/xsd/adlcp_v1p3
                              adlcp_v1p3.xsd">

  <organizations default="ORG1">
    <organization identifier="ORG1">
      <title>${titulo}</title>
      <item identifier="ITEM1" identifierref="RES1">
        <title>${titulo}</title>
      </item>
    </organization>
  </organizations>

  <resources>
    <resource identifier="RES1"
              type="webcontent"
              adlcp:scormType="sco"
              href="index.html">
      <file href="index.html"/>
      <file href="estilos.css"/>
      <file href="scorm.js"/>
      <file href="resultado.html"/>
    </resource>
  </resources>
</manifest>`;
}
