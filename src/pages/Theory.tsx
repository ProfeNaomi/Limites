import { InlineMath, BlockMath } from "react-katex";

export function Theory() {
  const sections = [
    {
      title: "Indeterminaciones Comunes",
      content: "Al calcular límites por sustitución directa podemos encontrar operaciones cuyo resultado no está definido algebraicamente. Estas requieren manipulación algebraica o la regla de L'Hôpital para resolverse.",
      math: [
        "\\frac{0}{0}, \\quad \\frac{\\infty}{\\infty}, \\quad \\infty - \\infty",
        "0 \\cdot \\infty, \\quad 1^{\\infty}, \\quad 0^0, \\quad \\infty^0"
      ]
    },
    {
      title: "Límites en el Infinito",
      content: "Analizan el comportamiento de una función a medida que la variable x crece (positiva o negativamente) sin límite. Son fundamentales para determinar las asíntotas horizontales.",
      math: [
        "\\lim_{x \\to \\infty} \\frac{1}{x} = 0",
        "\\lim_{x \\to -\\infty} e^x = 0"
      ]
    },
    {
      title: "Asíntotas Verticales",
      content: "Una recta x = a es una asíntota vertical de la función f(x) si el límite cuando x tiende a 'a' por la izquierda o por la derecha es infinito. Suelen suceder en los ceros del denominador que no se cancelan.",
      math: [
        "\\lim_{x \\to a^+} f(x) = \\infty",
        "\\lim_{x \\to a^-} f(x) = -\\infty"
      ]
    },
    {
      title: "Asíntotas Horizontales",
      content: "Una recta y = L es una asíntota horizontal si el límite de la función hacia el infinito (o menos infinito) resulta en el valor constante L.",
      math: [
        "\\lim_{x \\to \\infty} f(x) = L",
        "\\text{Ejemplo: } f(x) = \\frac{2x+1}{x} \\implies y = 2"
      ]
    },
    {
      title: "Asíntotas Oblicuas",
      content: "Ocurren cuando una función racional tiene un grado en el numerador exactamente una unidad mayor que el del denominador. La asíntota es de la forma y = mx + b.",
      math: [
        "m = \\lim_{x \\to \\infty} \\frac{f(x)}{x}",
        "b = \\lim_{x \\to \\infty} (f(x) - mx)"
      ]
    },
    {
      title: "Límites Trigonométricos Fundamentales",
      content: "Existen ciertos límites trigonométricos que por geometría (teorema del emparedado) se consideran estándar y sirven de base para otras resoluciones complejas.",
      math: [
        "\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1",
        "\\lim_{x \\to 0} \\frac{1 - \\cos x}{x} = 0"
      ]
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="border-b border-slate-200 pb-5">
        <h2 className="text-2xl font-bold leading-7 text-slate-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Teoría de Límites e Excepciones
        </h2>
        <p className="mt-2 text-slate-500 text-lg">
          Conceptos fundamentales, indeterminaciones matemáticas y el análisis de asíntotas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex flex-col hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-slate-800 mb-3">{section.title}</h3>
            <p className="text-sm text-slate-600 mb-6 flex-1">{section.content}</p>
            <div className="bg-slate-50 p-4 rounded-xl space-y-3">
              {section.math.map((m, i) => (
                <div key={i} className="text-center text-indigo-700">
                  <InlineMath math={m} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 mt-8">
        <h3 className="font-semibold text-indigo-900 mb-2">Nota sobre la Continuidad</h3>
        <p className="text-indigo-800 text-sm mb-4">
          Un concepto estrechamente relacionado con los límites es la continuidad. Una función <InlineMath math="f(x)" /> es continua en un punto <InlineMath math="c" /> si cumple tres condiciones simultáneamente:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm text-indigo-800">
          <li><InlineMath math="f(c)" /> está definida.</li>
          <li>El límite <InlineMath math="\lim_{x \to c} f(x)" /> existe (por la izquierda y la derecha son congruentes).</li>
          <li><InlineMath math="\lim_{x \to c} f(x) = f(c)" />.</li>
        </ul>
      </div>
    </div>
  );
}
