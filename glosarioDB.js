const GLOSARIO = [

    // ============================================
    //           LETRAS GRIEGAS
    // ============================================
    { categoria: "Letras griegas", nombre: "Alfa minúscula", codigo: "\\alpha", snippet: "\\alpha", editable: false },
    { categoria: "Letras griegas", nombre: "Beta minúscula", codigo: "\\beta", snippet: "\\beta", editable: false },
    { categoria: "Letras griegas", nombre: "Gamma minúscula", codigo: "\\gamma", snippet: "\\gamma", editable: false },
    { categoria: "Letras griegas", nombre: "Gamma mayúscula", codigo: "\\Gamma", snippet: "\\Gamma", editable: false },
    { categoria: "Letras griegas", nombre: "Delta minúscula", codigo: "\\delta", snippet: "\\delta", editable: false },
    { categoria: "Letras griegas", nombre: "Delta mayúscula", codigo: "\\Delta", snippet: "\\Delta", editable: false },
    { categoria: "Letras griegas", nombre: "Épsilon", codigo: "\\epsilon", snippet: "\\epsilon", editable: false },
    { categoria: "Letras griegas", nombre: "Épsilon variante", codigo: "\\varepsilon", snippet: "\\varepsilon", editable: false },
    { categoria: "Letras griegas", nombre: "Zeta", codigo: "\\zeta", snippet: "\\zeta", editable: false },
    { categoria: "Letras griegas", nombre: "Eta", codigo: "\\eta", snippet: "\\eta", editable: false },
    { categoria: "Letras griegas", nombre: "Theta", codigo: "\\theta", snippet: "\\theta", editable: false },
    { categoria: "Letras griegas", nombre: "Theta variante", codigo: "\\vartheta", snippet: "\\vartheta", editable: false },
    { categoria: "Letras griegas", nombre: "Theta mayúscula", codigo: "\\Theta", snippet: "\\Theta", editable: false },
    { categoria: "Letras griegas", nombre: "Iota", codigo: "\\iota", snippet: "\\iota", editable: false },
    { categoria: "Letras griegas", nombre: "Kappa", codigo: "\\kappa", snippet: "\\kappa", editable: false },
    { categoria: "Letras griegas", nombre: "Lambda minúscula", codigo: "\\lambda", snippet: "\\lambda", editable: false },
    { categoria: "Letras griegas", nombre: "Lambda mayúscula", codigo: "\\Lambda", snippet: "\\Lambda", editable: false },
    { categoria: "Letras griegas", nombre: "Mu", codigo: "\\mu", snippet: "\\mu", editable: false },
    { categoria: "Letras griegas", nombre: "Nu", codigo: "\\nu", snippet: "\\nu", editable: false },
    { categoria: "Letras griegas", nombre: "Xi minúscula", codigo: "\\xi", snippet: "\\xi", editable: false },
    { categoria: "Letras griegas", nombre: "Xi mayúscula", codigo: "\\Xi", snippet: "\\Xi", editable: false },
    { categoria: "Letras griegas", nombre: "Pi minúscula", codigo: "\\pi", snippet: "\\pi", editable: false },
    { categoria: "Letras griegas", nombre: "Pi mayúscula", codigo: "\\Pi", snippet: "\\Pi", editable: false },
    { categoria: "Letras griegas", nombre: "Rho", codigo: "\\rho", snippet: "\\rho", editable: false },
    { categoria: "Letras griegas", nombre: "Rho variante", codigo: "\\varrho", snippet: "\\varrho", editable: false },
    { categoria: "Letras griegas", nombre: "Sigma minúscula", codigo: "\\sigma", snippet: "\\sigma", editable: false },
    { categoria: "Letras griegas", nombre: "Sigma mayúscula", codigo: "\\Sigma", snippet: "\\Sigma", editable: false },
    { categoria: "Letras griegas", nombre: "Tau", codigo: "\\tau", snippet: "\\tau", editable: false },
    { categoria: "Letras griegas", nombre: "Upsilon minúscula", codigo: "\\upsilon", snippet: "\\upsilon", editable: false },
    { categoria: "Letras griegas", nombre: "Upsilon mayúscula", codigo: "\\Upsilon", snippet: "\\Upsilon", editable: false },
    { categoria: "Letras griegas", nombre: "Phi minúscula", codigo: "\\phi", snippet: "\\phi", editable: false },
    { categoria: "Letras griegas", nombre: "Phi variante", codigo: "\\varphi", snippet: "\\varphi", editable: false },
    { categoria: "Letras griegas", nombre: "Phi mayúscula", codigo: "\\Phi", snippet: "\\Phi", editable: false },
    { categoria: "Letras griegas", nombre: "Chi", codigo: "\\chi", snippet: "\\chi", editable: false },
    { categoria: "Letras griegas", nombre: "Psi minúscula", codigo: "\\psi", snippet: "\\psi", editable: false },
    { categoria: "Letras griegas", nombre: "Psi mayúscula", codigo: "\\Psi", snippet: "\\Psi", editable: false },
    { categoria: "Letras griegas", nombre: "Omega minúscula", codigo: "\\omega", snippet: "\\omega", editable: false },
    { categoria: "Letras griegas", nombre: "Omega mayúscula", codigo: "\\Omega", snippet: "\\Omega", editable: false },

    // ============================================
    //         SÍMBOLOS Y OPERADORES
    // ============================================
    { categoria: "Símbolos y operadores", nombre: "Más o menos", codigo: "\\pm", snippet: "\\pm", editable: false },
    { categoria: "Símbolos y operadores", nombre: "Menos o más", codigo: "\\mp", snippet: "\\mp", editable: false },
    { categoria: "Símbolos y operadores", nombre: "Por (producto)", codigo: "\\cdot", snippet: "\\cdot", editable: false },
    { categoria: "Símbolos y operadores", nombre: "Producto cruz", codigo: "\\times", snippet: "\\times", editable: false },
    { categoria: "Símbolos y operadores", nombre: "Infinito", codigo: "\\infty", snippet: "\\infty", editable: false },
    { categoria: "Símbolos y operadores", nombre: "Punto medio (dots)", codigo: "\\dots", snippet: "\\dots", editable: false },
    { categoria: "Símbolos y operadores", nombre: "Proporcional", codigo: "\\propto", snippet: "\\propto", editable: false },
    { categoria: "Símbolos y operadores", nombre: "Gradiente / Nabla", codigo: "\\nabla", snippet: "\\nabla", editable: false },
    { categoria: "Símbolos y operadores", nombre: "Equivalente", codigo: "\\equiv", snippet: "\\equiv", editable: false },
    { categoria: "Símbolos y operadores", nombre: "Definición (coloneqq)", codigo: "\\coloneqq", snippet: "\\coloneqq", editable: false },
    { categoria: "Símbolos y operadores", nombre: "Implicación", codigo: "\\implies", snippet: "\\implies", editable: false },
    { categoria: "Símbolos y operadores", nombre: "Implicado por", codigo: "\\impliedby", snippet: "\\impliedby", editable: false },
    { categoria: "Símbolos y operadores", nombre: "Flecha simple", codigo: "\\to", snippet: "\\to", editable: false },
    { categoria: "Símbolos y operadores", nombre: "Flecha doble", codigo: "\\leftrightarrow", snippet: "\\leftrightarrow", editable: false },
    { categoria: "Símbolos y operadores", nombre: "Mapsto", codigo: "\\mapsto", snippet: "\\mapsto", editable: false },
    { categoria: "Símbolos y operadores", nombre: "Mayor o igual", codigo: "\\geq", snippet: "\\geq", editable: false },
    { categoria: "Símbolos y operadores", nombre: "Menor o igual", codigo: "\\leq", snippet: "\\leq", editable: false },
    { categoria: "Símbolos y operadores", nombre: "Mucho mayor", codigo: "\\gg", snippet: "\\gg", editable: false },
    { categoria: "Símbolos y operadores", nombre: "Mucho menor", codigo: "\\ll", snippet: "\\ll", editable: false },
    { categoria: "Símbolos y operadores", nombre: "Distinto", codigo: "\\neq", snippet: "\\neq", editable: false },
    { categoria: "Símbolos y operadores", nombre: "Similar", codigo: "\\sim", snippet: "\\sim", editable: false },
    { categoria: "Símbolos y operadores", nombre: "Semejante", codigo: "\\simeq", snippet: "\\simeq", editable: false },
    { categoria: "Símbolos y operadores", nombre: "Paralelo", codigo: "\\parallel", snippet: "\\parallel", editable: false },
    { categoria: "Símbolos y operadores", nombre: "Perpendicular", codigo: "\\perp", snippet: "\\perp", editable: false },

    // ============================================
    //           TOPOLOGÍA Y CONJUNTOS
    // ============================================
    { categoria: "Topología y Conjuntos", nombre: "Pertenece", codigo: "\\in", snippet: "\\in", editable: false },
    { categoria: "Topología y Conjuntos", nombre: "No pertenece", codigo: "\\notin", snippet: "\\notin", editable: false },
    { categoria: "Topología y Conjuntos", nombre: "Subconjunto o igual", codigo: "\\subseteq", snippet: "\\subseteq", editable: false },
    { categoria: "Topología y Conjuntos", nombre: "Superconjunto o igual", codigo: "\\supseteq", snippet: "\\supseteq", editable: false },
    { categoria: "Topología y Conjuntos", nombre: "Subconjunto estricto", codigo: "\\subset", snippet: "\\subset", editable: false },
    { categoria: "Topología y Conjuntos", nombre: "Superconjunto estricto", codigo: "\\supset", snippet: "\\supset", editable: false },
    { categoria: "Topología y Conjuntos", nombre: "Intersección", codigo: "\\cap", snippet: "\\cap", editable: false },
    { categoria: "Topología y Conjuntos", nombre: "Unión", codigo: "\\cup", snippet: "\\cup", editable: false },
    { categoria: "Topología y Conjuntos", nombre: "Conjunto vacío", codigo: "\\emptyset", snippet: "\\emptyset", editable: false },
    { categoria: "Topología y Conjuntos", nombre: "Diferencia de conjuntos", codigo: "\\setminus", snippet: "\\setminus", editable: false },
    { categoria: "Topología y Conjuntos", nombre: "Existe", codigo: "\\exists", snippet: "\\exists", editable: false },
    { categoria: "Topología y Conjuntos", nombre: "Existe único", codigo: "\\exists!", snippet: "\\exists!", editable: false },
    { categoria: "Topología y Conjuntos", nombre: "Para todo", codigo: "\\forall", snippet: "\\forall", editable: false },
    { categoria: "Topología y Conjuntos", nombre: "Familia de conjuntos (A_i)", codigo: "\\{A_i\\}_{i\\in I}", snippet: "\\{A_i\\}_{i\\in I}", editable: false },

    // ============================================
    //       ÁLGEBRA Y ESTRUCTURAS
    // ============================================
    { categoria: "Álgebra y Estructuras", nombre: "Enteros", codigo: "\\mathbb{Z}", snippet: "\\mathbb{Z}", editable: false },
    { categoria: "Álgebra y Estructuras", nombre: "Naturales", codigo: "\\mathbb{N}", snippet: "\\mathbb{N}", editable: false },
    { categoria: "Álgebra y Estructuras", nombre: "Reales", codigo: "\\mathbb{R}", snippet: "\\mathbb{R}", editable: false },
    { categoria: "Álgebra y Estructuras", nombre: "Complejos", codigo: "\\mathbb{C}", snippet: "\\mathbb{C}", editable: false },
    { categoria: "Álgebra y Estructuras", nombre: "Espacio vectorial genérico", codigo: "\\mathbb{V}", snippet: "\\mathbb{V}", editable: false },
    { categoria: "Álgebra y Estructuras", nombre: "Espacio de Hilbert", codigo: "\\mathcal{H}", snippet: "\\mathcal{H}", editable: false },
    { categoria: "Álgebra y Estructuras", nombre: "Espacio de Lebesgue L^p", codigo: "L^{p}(X,\\mu)", snippet: "L^{p}(X,\\mu)", editable: false },
    { categoria: "Álgebra y Estructuras", nombre: "Espacio L^2", codigo: "L^{2}(X,\\mu)", snippet: "L^{2}(X,\\mu)", editable: false },
    { categoria: "Álgebra y Estructuras", nombre: "Álgebra de Banach A", codigo: "\\mathcal{A}", snippet: "\\mathcal{A}", editable: false },
    { categoria: "Álgebra y Estructuras", nombre: "Operadores acotados", codigo: "\\mathcal{B}(H)", snippet: "\\mathcal{B}(H)", editable: false },
    { categoria: "Álgebra y Estructuras", nombre: "Imagen de una aplicación", codigo: "\\mathrm{Im}(T)", snippet: "\\mathrm{Im}(T)", editable: false },
    { categoria: "Álgebra y Estructuras", nombre: "Núcleo de una aplicación", codigo: "\\ker(T)", snippet: "\\ker(T)", editable: false },

    // ============================================
    //              ÁLGEBRA LINEAL
    // ============================================
    { categoria: "Álgebra Lineal", nombre: "Determinante", codigo: "\\det(A)", snippet: "\\det(A)", editable: false },
    { categoria: "Álgebra Lineal", nombre: "Traza", codigo: "\\mathrm{Tr}(A)", snippet: "\\mathrm{Tr}(A)", editable: false },
    { categoria: "Álgebra Lineal", nombre: "Transpuesta", codigo: "A^{T}", snippet: "A^{T}", editable: false },
    { categoria: "Álgebra Lineal", nombre: "Adjunta (conjugada transpuesta)", codigo: "A^{*}", snippet: "A^{*}", editable: false },
    { categoria: "Álgebra Lineal", nombre: "Autovalor lambda", codigo: "\\lambda", snippet: "\\lambda", editable: false },
    { categoria: "Álgebra Lineal", nombre: "Producto interno", codigo: "\\langle x,y \\rangle", snippet: "\\langle x,y \\rangle", editable: false },
    { categoria: "Álgebra Lineal", nombre: "Norma de vector", codigo: "\\|x\\|", snippet: "\\|x\\|", editable: false },
    { categoria: "Álgebra Lineal", nombre: "Base ortonormal", codigo: "\\{e_i\\}_{i=1}^{n}", snippet: "\\{e_i\\}_{i=1}^{n}", editable: false },

    // ============================================
    //           GEOMETRÍA / VECTORES
    // ============================================
    { categoria: "Geometría / Vectores", nombre: "Vector en negritas", codigo: "\\mathbf{v}", snippet: "\\mathbf{v}", editable: false },
    { categoria: "Geometría / Vectores", nombre: "Vector con flecha", codigo: "\\vec{v}", snippet: "\\vec{v}", editable: false },
    { categoria: "Geometría / Vectores", nombre: "Producto escalar", codigo: "\\mathbf{u}\\cdot\\mathbf{v}", snippet: "\\mathbf{u}\\cdot\\mathbf{v}", editable: false },
    { categoria: "Geometría / Vectores", nombre: "Producto cruz en R^3", codigo: "\\mathbf{u}\\times\\mathbf{v}", snippet: "\\mathbf{u}\\times\\mathbf{v}", editable: false },
    { categoria: "Geometría / Vectores", nombre: "Norma euclidiana", codigo: "\\|x\\|_{2}", snippet: "\\|x\\|_{2}", editable: false },

    // ============================================
    //                 ANÁLISIS
    // ============================================
    { categoria: "Análisis", nombre: "Límite", codigo: "\\lim_{x\\to a} f(x)", snippet: "\\lim_{x\\to a} f(x)", editable: false },
    { categoria: "Análisis", nombre: "Límite al infinito", codigo: "\\lim_{x\\to\\infty} f(x)", snippet: "\\lim_{x\\to\\infty} f(x)", editable: false },
    { categoria: "Análisis", nombre: "Máximo", codigo: "\\max", snippet: "\\max", editable: false },
    { categoria: "Análisis", nombre: "Mínimo", codigo: "\\min", snippet: "\\min", editable: false },
    { categoria: "Análisis", nombre: "Supremo", codigo: "\\sup", snippet: "\\sup", editable: false },
    { categoria: "Análisis", nombre: "Ínfimo", codigo: "\\inf", snippet: "\\inf", editable: false },
    { categoria: "Análisis", nombre: "Parte real", codigo: "\\mathrm{Re}(z)", snippet: "\\mathrm{Re}(z)", editable: false },
    { categoria: "Análisis", nombre: "Parte imaginaria", codigo: "\\mathrm{Im}(z)", snippet: "\\mathrm{Im}(z)", editable: false },
    { categoria: "Análisis", nombre: "Valor absoluto", codigo: "|z|", snippet: "|z|", editable: false },
    { categoria: "Análisis", nombre: "Valor absoluto como norma", codigo: "\\lvert z\\rvert", snippet: "\\lvert z\\rvert", editable: false },

    // ============================================
    //                 CÁLCULO
    // ============================================
    { categoria: "Cálculo", nombre: "Derivada d/dx", codigo: "\\frac{d}{dx} f(x)", snippet: "\\frac{d}{dx} f(x)", editable: false },
    { categoria: "Cálculo", nombre: "Derivada parcial", codigo: "\\frac{\\partial f}{\\partial x}", snippet: "\\frac{\\partial f}{\\partial x}", editable: false },
    { categoria: "Cálculo", nombre: "Integral definida", codigo: "\\int_{a}^{b} f(x)\\,dx", snippet: "\\int_{a}^{b} f(x)\\,dx", editable: false },
    { categoria: "Cálculo", nombre: "Integral impropia (0,∞)", codigo: "\\int_{0}^{\\infty} f(x)\\,dx", snippet: "\\int_{0}^{\\infty} f(x)\\,dx", editable: false },
    { categoria: "Cálculo", nombre: "Integral doble", codigo: "\\iint_{D} f(x,y)\\,dA", snippet: "\\iint_{D} f(x,y)\\,dA", editable: false },
    { categoria: "Cálculo", nombre: "Integral triple", codigo: "\\iiint_{E} f(x,y,z)\\,dV", snippet: "\\iiint_{E} f(x,y,z)\\,dV", editable: false },
    { categoria: "Cálculo", nombre: "Integral de contorno", codigo: "\\oint_{\\gamma} f(z)\\,dz", snippet: "\\oint_{\\gamma} f(z)\\,dz", editable: false },
    { categoria: "Cálculo", nombre: "Serie de Taylor genérica", codigo: "f(x+h) = f(x) + f'(x)h + \\frac{f''(x)}{2!}h^{2} + \\dots", snippet: "f(x+h) = f(x) + f'(x)h + \\frac{f''(x)}{2!}h^{2} + \\dots", editable: false },
    { categoria: "Cálculo", nombre: "Raíz cuadrada", codigo: "\\sqrt{x}", snippet: "\\sqrt{$0}$", editable: false },
    { categoria: "Cálculo", nombre: "Fracción genérica", codigo: "\\frac{a}{b}", snippet: "\\frac{$0}{$1}$2", editable: false },

    // ============================================
    //        FUNCIONES (TRIGO / EXP / LOG)
    // ============================================
    { categoria: "Análisis", nombre: "Función seno", codigo: "\\sin x", snippet: "\\sin x", editable: false },
    { categoria: "Análisis", nombre: "Función coseno", codigo: "\\cos x", snippet: "\\cos x", editable: false },
    { categoria: "Análisis", nombre: "Función tangente", codigo: "\\tan x", snippet: "\\tan x", editable: false },
    { categoria: "Análisis", nombre: "Seno hiperbólico", codigo: "\\sinh x", snippet: "\\sinh x", editable: false },
    { categoria: "Análisis", nombre: "Coseno hiperbólico", codigo: "\\cosh x", snippet: "\\cosh x", editable: false },
    { categoria: "Análisis", nombre: "Tangente hiperbólica", codigo: "\\tanh x", snippet: "\\tanh x", editable: false },
    { categoria: "Análisis", nombre: "Exponencial", codigo: "e^{x}", snippet: "e^{x}", editable: false },
    { categoria: "Análisis", nombre: "Logaritmo natural", codigo: "\\ln x", snippet: "\\ln x", editable: false },
    { categoria: "Análisis", nombre: "Logaritmo base 10", codigo: "\\log_{10} x", snippet: "\\log_{10} x", editable: false },

    // ============================================
    //            FÍSICA MATEMÁTICA
    // ============================================
    { categoria: "Física Matemática", nombre: "Constante de Boltzmann k_B T", codigo: "k_{B}T", snippet: "k_{B}T", editable: false },
    { categoria: "Física Matemática", nombre: "Masa solar", codigo: "M_{\\odot}", snippet: "M_{\\odot}", editable: false },
    { categoria: "Física Matemática", nombre: "Operador adjunto (daga)", codigo: "A^{\\dagger}", snippet: "A^{\\dagger}", editable: false },
    { categoria: "Física Matemática", nombre: "Producto tensorial", codigo: "\\otimes", snippet: "\\otimes", editable: false },
    { categoria: "Física Matemática", nombre: "Suma directa", codigo: "\\oplus", snippet: "\\oplus", editable: false },
    { categoria: "Física Matemática", nombre: "Bra", codigo: "\\langle\\psi|", snippet: "\\langle\\psi|", editable: false },
    { categoria: "Física Matemática", nombre: "Ket", codigo: "|\\psi\\rangle", snippet: "|\\psi\\rangle", editable: false },
    { categoria: "Física Matemática", nombre: "Bra-ket", codigo: "\\langle\\phi|\\psi\\rangle", snippet: "\\langle\\phi|\\psi\\rangle", editable: false },
    { categoria: "Física Matemática", nombre: "Producto exterior", codigo: "|\\psi\\rangle\\langle\\psi|", snippet: "|\\psi\\rangle\\langle\\psi|", editable: false },

    // ============================================
    //                  QUÍMICA
    // ============================================
    { categoria: "Química", nombre: "Notación química genérica", codigo: "\\ce{H2O}", snippet: "\\ce{H2O}", editable: false },
    { categoria: "Química", nombre: "Notación de unidades", codigo: "\\pu{1.0 m}", snippet: "\\pu{1.0 m}", editable: false },
    { categoria: "Química", nombre: "Isótopo de Helio-4", codigo: "{}^{4}_{2}\\mathrm{He}", snippet: "{}^{4}_{2}\\mathrm{He}", editable: false },
    { categoria: "Química", nombre: "Isótopo de Helio-3", codigo: "{}^{3}_{2}\\mathrm{He}", snippet: "{}^{3}_{2}\\mathrm{He}", editable: false },

    // ============================================
    //              ENTORNOS LATEX
    // ============================================
    { categoria: "Entornos LaTeX", nombre: "Entorno equation", codigo: "\\begin{equation}\n  E = mc^{2}\n\\end{equation}", snippet: "\\begin{equation}\n$0\n\\end{equation}", editable: false },
    { categoria: "Entornos LaTeX", nombre: "Entorno align", codigo: "\\begin{align}\n  a &= b + c \\\\\n  d &= e - f\n\\end{align}", snippet: "\\begin{align}\n$0\n\\end{align}", editable: false },
    { categoria: "Entornos LaTeX", nombre: "Matriz (pmatrix)", codigo: "\\begin{pmatrix}a & b\\\\c & d\\end{pmatrix}", snippet: "\\begin{pmatrix}\n$0\n\\end{pmatrix}", editable: false },
    { categoria: "Entornos LaTeX", nombre: "Matriz (bmatrix)", codigo: "\\begin{bmatrix}a & b\\\\c & d\\end{bmatrix}", snippet: "\\begin{bmatrix}\n$0\n\\end{bmatrix}", editable: false },
    { categoria: "Entornos LaTeX", nombre: "Sistema de casos", codigo: "\\begin{cases}\n  a, & x>0\\\\\n  b, & x\\le 0\n\\end{cases}", snippet: "\\begin{cases}\n$0\n\\end{cases}", editable: false },

    // ============================================
    //               VISUALIZACIÓN
    // ============================================
    { categoria: "Visualización", nombre: "Underbrace (bajo llave)", codigo: "\\underbrace{x}_{a}", snippet: "\\underbrace{${VISUAL}}_{ $0 }", editable: false },
    { categoria: "Visualización", nombre: "Overbrace (sobre llave)", codigo: "\\overbrace{x}^{a}", snippet: "\\overbrace{${VISUAL}}^{ $0 }", editable: false },
    { categoria: "Visualización", nombre: "Tachado (cancel)", codigo: "\\cancel{x}", snippet: "\\cancel{${VISUAL}}", editable: false },
    { categoria: "Visualización", nombre: "Tachado a un valor", codigo: "\\cancelto{0}{x}", snippet: "\\cancelto{ $0 }{ ${VISUAL} }", editable: false },
    { categoria: "Visualización", nombre: "Promedio", codigo: "\\langle x \\rangle", snippet: "\\langle $0 \\rangle", editable: false },
    { categoria: "Visualización", nombre: "Techo (ceil)", codigo: "\\lceil x \\rceil", snippet: "\\lceil $0 \\rceil", editable: false },
    { categoria: "Visualización", nombre: "Piso (floor)", codigo: "\\lfloor x \\rfloor", snippet: "\\lfloor $0 \\rfloor", editable: false },

    // ============================================
    //      AUTOMATIZACIONES / SNIPPETS EXTRA
    // ============================================
    { categoria: "Automatizaciones / Snippets avanzados", nombre: "Matriz identidad 2x2", codigo: "\\begin{pmatrix}1 & 0\\\\0 & 1\\end{pmatrix}", snippet: "\\begin{pmatrix}1 & 0\\\\0 & 1\\end{pmatrix}", editable: false },
    { categoria: "Automatizaciones / Snippets avanzados", nombre: "Matriz identidad 3x3", codigo: "\\begin{pmatrix}1 & 0 & 0\\\\0 & 1 & 0\\\\0 & 0 & 1\\end{pmatrix}", snippet: "\\begin{pmatrix}1 & 0 & 0\\\\0 & 1 & 0\\\\0 & 0 & 1\\end{pmatrix}", editable: false }

];
