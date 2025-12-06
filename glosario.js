document.addEventListener("DOMContentLoaded", () => {

    const cont = document.getElementById("contenedor");
    const buscador = document.getElementById("buscador");

    /* ======================================================
       FUNCIONES DE UTILIDAD
    ====================================================== */

    // Normalizar para búsquedas
    function normalizar(str) {
        return str
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
    }

    // Coincidencia fuzzy suave
    function coincide(sim, filtro) {
        if (!filtro) return true;

        const f = normalizar(filtro);

        const campos = [
            sim.nombre,
            sim.categoria,
            sim.codigo,
            sim.snippet
        ].map(normalizar);

        return campos.some(c =>
            c.includes(f) ||
            f.split("").every(letra => c.includes(letra))
        );
    }

    // Resaltar coincidencias
    function resaltar(texto, filtro) {
        if (!filtro) return texto;

        const tNorm = normalizar(texto);
        const fNorm = normalizar(filtro);

        const idx = tNorm.indexOf(fNorm);
        if (idx === -1) return texto;

        return (
            texto.substring(0, idx) +
            `<span class="highlight">` +
            texto.substring(idx, idx + filtro.length) +
            `</span>` +
            texto.substring(idx + filtro.length)
        );
    }

    /* ======================================================
       ID ÚNICO BASADO EN TU GLOSARIO
    ====================================================== */

    function idSimbolo(sim) {
        return "sym_" +
            normalizar(sim.categoria + "_" + sim.nombre + "_" + sim.codigo)
                .replace(/[^a-z0-9_]/g, "");
    }

    /* ======================================================
       NAVEGAR AL PRIMER RESULTADO CUANDO PRESIONAS ENTER
    ====================================================== */

    buscador.addEventListener("keydown", e => {
        if (e.key === "Enter") navegarAlPrimerResultado();
    });

    function navegarAlPrimerResultado() {
        const filtro = buscador.value.trim();
        if (!filtro) return;

        const simbolo = GLOSARIO.find(sim => coincide(sim, filtro));
        if (!simbolo) return;

        const symbolId = idSimbolo(simbolo);

        setTimeout(() => {
            const tarjeta = document.getElementById(symbolId);
            if (!tarjeta) return;

            const categoriaDiv = tarjeta.closest(".categoria");
            const content = categoriaDiv.querySelector(".categoria-content");
            const arrow = categoriaDiv.querySelector(".arrow");

            // Abrir categoría si está cerrada
            if (content.style.display !== "block") {
                content.style.display = "block";
                arrow.classList.add("open");
            }

            // Scroll suave al símbolo
            tarjeta.scrollIntoView({ behavior: "smooth", block: "center" });

            // Resaltado animado
            tarjeta.classList.add("symbol-focus");
            setTimeout(() => tarjeta.classList.remove("symbol-focus"), 1500);

        }, 200);
    }

    /* ======================================================
       CREAR UNA CATEGORÍA DESPLEGABLE
    ====================================================== */

    function crearCategoria(nombreCategoria, simbolos, filtro) {
        const wrapper = document.createElement("div");
        wrapper.className = "categoria";

        const header = document.createElement("div");
        header.className = "categoria-header";

        header.innerHTML = `
            <h2>${resaltar(nombreCategoria, filtro)}</h2>
            <span class="arrow">▶</span>
        `;

        const arrow = header.querySelector(".arrow");

        const content = document.createElement("div");
        content.className = "categoria-content";

        const grid = document.createElement("div");
        grid.className = "symbol-grid";

        simbolos.forEach(sim => {
            const div = document.createElement("div");
            div.className = "symbol-card";

            div.id = idSimbolo(sim);

            div.innerHTML = `
                <b>${resaltar(sim.nombre, filtro)}</b><br>
                <span class="symbol-code">$${sim.codigo}$</span><br>
                <span style="color:#555">Haz clic para insertar</span>
            `;

            div.onclick = () => {
                window.opener.insertarDesdeGlosario(sim.codigo);
                window.close();
            };

            grid.appendChild(div);
        });

        content.appendChild(grid);

        header.addEventListener("click", () => {
            const visible = content.style.display === "block";
            content.style.display = visible ? "none" : "block";
            arrow.classList.toggle("open", !visible);
        });

        wrapper.appendChild(header);
        wrapper.appendChild(content);

        return wrapper;
    }

    /* ======================================================
       RENDER PRINCIPAL
    ====================================================== */

    function mostrarSimbolos(filtro = "") {
        cont.innerHTML = "";

        const categorias = {};

        GLOSARIO.forEach(sim => {
            if (coincide(sim, filtro)) {
                if (!categorias[sim.categoria]) categorias[sim.categoria] = [];
                categorias[sim.categoria].push(sim);
            }
        });

        const orden = Object.keys(categorias).sort();

        orden.forEach(cat => {
            cont.appendChild(crearCategoria(cat, categorias[cat], filtro));
        });

        MathJax.typesetPromise([cont]);
    }

    mostrarSimbolos();

    buscador.addEventListener("input", e => {
        mostrarSimbolos(e.target.value);
    });

    document.getElementById("btnCerrar").onclick = () => window.close();
});
