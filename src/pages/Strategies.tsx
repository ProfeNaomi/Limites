import { motion } from "motion/react";
import { BlockMath, InlineMath } from "react-katex";
import { Lightbulb, Maximize2, Repeat, Scissors, SplitSquareVertical, Table } from "lucide-react";

export function Strategies() {
    const strategies = [
        {
            id: "factorizacion",
            title: "Factorización y Racionalización",
            description: "Técnica matemática utilizada para eliminar indeterminaciones del tipo 0/0 generadas por polinomios y binomios.",
            icon: <Scissors className="w-6 h-6 text-indigo-500" />,
            content: (
                <div className="space-y-4 text-slate-700">
                    <p>
                        Cuando nos encontramos con un límite que resulta en <InlineMath math="0/0" /> y consta de polinomios,
                        podemos buscar factores comunes en numerador y denominador. Al simplificarlos, generalmente se elimina
                        la indeterminación.
                    </p>
                    <div className="bg-white p-4 border border-indigo-100 rounded-xl my-4 shadow-sm text-indigo-900 overflow-x-auto no-scrollbar">
                        <BlockMath math="\lim_{x \to a} \frac{x^2 - a^2}{x - a} = \lim_{x \to a} \frac{(x-a)(x+a)}{x-a} = \lim_{x \to a} (x+a) = 2a" />
                    </div>
                    <p>
                        La <strong>racionalización</strong> se emplea cuando hay raíces conjugadas, utilizando la multiplicación por factor inverso para habilitar una diferencia de cuadrados:
                        <InlineMath math="(A - B)(A + B) = A^2 - B^2" />.
                    </p>
                </div>
            )
        },
        {
            id: "sandwich",
            title: "Teorema del Sándwich (Encaje)",
            description: "Nos permite calcular límites acotando y atrapando a una función desconocida entre 2 funciones de límite conocido.",
            icon: <SplitSquareVertical className="w-6 h-6 text-emerald-500" />,
            content: (
                <div className="space-y-4 text-slate-700">
                    <p>
                        Dado que si <InlineMath math="f(x) \le g(x) \le h(x)" /> para toda <InlineMath math="x" /> cerca de <InlineMath math="a" /> (salvo quizás en <InlineMath math="a" />), y
                        si se cumple que <InlineMath math="\lim_{x \to a} f(x) = \lim_{x \to a} h(x) = L" />.
                    </p>
                    <p>
                        Entonces obligatoriamente el límite de la función intermedia también converge al mismo valor:
                    </p>
                    <div className="bg-emerald-50 text-emerald-900 border border-emerald-100 rounded-xl p-4 my-4 shadow-sm text-center overflow-x-auto no-scrollbar">
                        <BlockMath math="\lim_{x \to a} g(x) = L" />
                    </div>
                </div>
            )
        },
        {
            id: "cambio-variable",
            title: "Sustitución o Cambio de Variable",
            description: "Simplifica el aspecto de una indeterminación trigonométrica u algebraica desplazando la convergencia lineal a cero.",
            icon: <Repeat className="w-6 h-6 text-amber-500" />,
            content: (
                <div className="space-y-4 text-slate-700">
                    <p>
                        Muchas veces es conveniente hacer que la incógnita dependa de un entorno que va hacia un escalar idóneo, por ejemplo
                        <InlineMath math="u = x - a" /> donde si <InlineMath math="x \to a \implies u \to 0" />.
                    </p>
                    <div className="bg-amber-50 p-4 border border-amber-100 rounded-xl my-4 text-amber-900 shadow-sm overflow-x-auto no-scrollbar">
                        <BlockMath math="\lim_{x \to \pi} \frac{\sin(x)}{x - \pi} \iff \text{Sea } u = x - \pi" />
                        <BlockMath math="\implies \lim_{u \to 0} \frac{\sin(\pi + u)}{u} = \lim_{u \to 0} \frac{-\sin(u)}{u} = -1" />
                    </div>
                </div>
            )
        },
        {
            id: "exponencial",
            title: "Límites Exponenciales de Euler",
            description: "Axioma para salvaguardar indeterminaciones convergentes del estado 1 infinito.",
            icon: <Maximize2 className="w-6 h-6 text-rose-500" />,
            content: (
                <div className="space-y-4 text-slate-700">
                    <p>
                        Cualquier función que se enfrente a la discrepancia <InlineMath math="1^{\infty}" /> puede resolverse usando bases del número hiperbólico de Euler (e) mediante la fórmula maestra:
                    </p>
                    <div className="bg-rose-50 text-rose-900 border border-rose-100 rounded-xl p-4 my-4 shadow-sm overflow-x-auto no-scrollbar">
                        <BlockMath math="\lim_{x \to a} f(x)^{g(x)} = e^{\lim_{x \to a} g(x)(f(x)-1)}" />
                    </div>
                    <p>
                        Esto permite transformar una potencia indeterminada en un simple cálculo matemático convencional sobre un exponente algebraico.
                    </p>
                </div>
            )
        }
    ];

    const notableLimits = [
        { name: "Seno", math: "\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1" },
        { name: "Seno con Constante", math: "\\lim_{x \\to 0} \\frac{\\sin(kx)}{x} = k" },
        { name: "Tangente", math: "\\lim_{x \\to 0} \\frac{\\tan x}{x} = 1" },
        { name: "Coseno", math: "\\lim_{x \\to 0} \\frac{1 - \\cos x}{x} = 0" },
        { name: "Coseno Cuadrático", math: "\\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2} = \\frac{1}{2}" },
        { name: "Logaritmo Natural", math: "\\lim_{x \\to 0} \\frac{\\ln(1+x)}{x} = 1" },
        { name: "Logaritmo con Constante", math: "\\lim_{x \\to 0} \\frac{\\ln(1+kx)}{x} = k" },
        { name: "Exponencial General", math: "\\lim_{x \\to 0} \\frac{a^x - 1}{x} = \\ln a" },
        { name: "Exponencial e", math: "\\lim_{x \\to 0} \\frac{e^x - 1}{x} = 1" },
        { name: "Exponencial e con Constante", math: "\\lim_{x \\to 0} \\frac{e^{kx} - 1}{x} = k" },
        { name: "Euler Infinito", math: "\\lim_{x \\to \\pm\\infty} \\left(1 + \\frac{1}{x}\\right)^x = e" },
        { name: "Euler Cero", math: "\\lim_{x \\to 0} (1 + x)^{\\frac{1}{x}} = e" },
        { name: "Arcoseno", math: "\\lim_{x \\to 0} \\frac{\\arcsin x}{x} = 1" },
        { name: "Arcotangente", math: "\\lim_{x \\to 0} \\frac{\\arctan x}{x} = 1" },
        { name: "Potencia Generalizada", math: "\\lim_{x \\to 0} \\frac{(1+x)^k - 1}{x} = k" },
    ];

    return (
        <div className="space-y-6 animate-in fade-in duration-500 pb-16">
            <div className="border-b border-slate-200 pb-5">
                <h2 className="text-2xl font-bold leading-7 text-slate-900 sm:truncate sm:text-4xl sm:tracking-tight flex items-center">
                    <Lightbulb className="w-8 h-8 sm:w-10 sm:h-10 text-amber-500 mr-4" />
                    Estrategias de Resolución
                </h2>
                <p className="mt-4 text-slate-500 text-lg sm:text-xl">
                    Técnicas algebraicas y trigonométricas para resolver los casos de indeterminación más comunes.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
                {strategies.map((str, index) => (
                    <motion.div
                        key={str.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
                        className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col group relative"
                    >
                        <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-transparent to-transparent group-hover:from-indigo-400 group-hover:via-emerald-400 group-hover:to-amber-400 transition-all duration-500"></div>

                        <div className="bg-slate-50 p-6 lg:p-8 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center">
                            <div className="bg-white p-4 rounded-xl shadow-sm mr-5 mb-4 sm:mb-0 flex-shrink-0">
                                {str.icon}
                            </div>
                            <div>
                                <h3 className="text-xl lg:text-2xl font-bold text-slate-800">{str.title}</h3>
                                <p className="text-sm lg:text-base text-slate-500 mt-2 font-medium">{str.description}</p>
                            </div>
                        </div>
                        <div className="p-6 lg:p-8 flex-1 text-base leading-relaxed bg-white/50 relative">
                            {str.content}
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-12 bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden p-6 lg:p-8"
            >
                <div className="flex items-center mb-6">
                    <div className="bg-indigo-50 p-3 rounded-xl mr-4 flex-shrink-0">
                        <Table className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-slate-800">Tabla de Límites Notables</h3>
                        <p className="text-slate-500 text-sm mt-1">
                            Límites trigonométricos, exponenciales y logarítmicos de uso frecuente.
                        </p>
                    </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {notableLimits.map((lim, idx) => (
                        <div key={idx} className="bg-slate-50 border border-slate-100 p-4 rounded-xl flex items-center justify-center hover:bg-slate-100 transition-colors text-slate-800 shadow-sm">
                            <BlockMath math={lim.math} />
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
