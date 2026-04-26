import { useState } from "react";
import { BlockMath, InlineMath } from "react-katex";
import { exercises as initialExercises } from "../data/limitsData";
import { moreExercises } from "../data/moreLimits";
import { CheckCircle2 } from "lucide-react";

const exercises = [...initialExercises, ...moreExercises];

export function Exercises() {
  const [openExercise, setOpenExercise] = useState<number>(1);

  const activeExe = exercises.find((e) => e.id === openExercise);

  const renderDescription = (text: string) => {
    return text.split('$').map((part, index) => {
      // Si el índice es impar, es porque estaba entre símbolos de $
      if (index % 2 === 1) {
        return <InlineMath key={index} math={part} />;
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="border-b border-slate-200 pb-5 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold leading-7 text-slate-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Resolución Paso a Paso
          </h2>
          <p className="mt-2 text-slate-500 text-lg">
            Selecciona un límite del panel superior para visualizar su desarrollo en profundidad abajo.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 flex items-center bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold border border-indigo-100 flex-shrink-0">
          <CheckCircle2 className="w-4 h-4 mr-2" />
          {exercises.length} Ejercicios Disponibles
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {exercises.map((exe) => {
          const isOpen = openExercise === exe.id;
          return (
            <button
              key={exe.id}
              onClick={() => setOpenExercise(exe.id)}
              className={`flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all duration-300 w-full overflow-hidden focus:outline-none ${isOpen
                  ? "border-indigo-500 bg-indigo-50 shadow-md transform scale-[1.02]"
                  : "border-slate-200 bg-white hover:border-indigo-300 hover:bg-slate-50"
                }`}
            >
              <div className={`text-xs font-bold uppercase tracking-wider mb-3 ${isOpen ? "text-indigo-600" : "text-slate-400"}`}>
                Ejercicio {exe.id}
              </div>
              <div className={`w-full overflow-x-auto no-scrollbar py-2 px-1 text-center ${isOpen ? "text-indigo-900" : "text-slate-700"}`}>
                <div className="pointer-events-none whitespace-nowrap min-w-min mx-auto">
                  <InlineMath math={`\\displaystyle ${exe.expression}`} />
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {activeExe && (
        <div className="mt-10 bg-white rounded-3xl border border-indigo-100 shadow-xl overflow-hidden animate-in slide-in-from-bottom-8 duration-500">
          <div className="bg-gradient-to-r from-indigo-50 to-white px-6 py-8 sm:px-10 border-b border-indigo-50">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="w-full sm:w-auto overflow-hidden">
                <h3 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-4">Problema a Resolver</h3>
                <div className="text-lg sm:text-2xl lg:text-3xl text-slate-800 overflow-x-auto no-scrollbar py-2 w-full">
                  <BlockMath math={activeExe.expression} />
                </div>
              </div>
              <div className="flex-shrink-0 bg-white rounded-2xl p-5 shadow-sm border border-indigo-100 flex flex-col items-center min-w-[140px]">
                <div className="text-xs font-bold text-slate-400 uppercase text-center mb-3">Resultado Obtenido</div>
                <div className="text-2xl font-bold text-emerald-600 text-center"><InlineMath math={activeExe.result} /></div>
              </div>
            </div>
          </div>

          <div className="px-6 py-8 sm:px-10 bg-slate-50/50">
            <h4 className="text-base font-bold text-slate-800 tracking-wide mb-8 flex items-center">
              <span className="bg-indigo-100 px-4 py-1.5 rounded-full text-indigo-700 text-sm">Desarrollo Matemático</span>
            </h4>
            <div className="space-y-8 pl-4 sm:pl-16 relative">
              <div className="absolute left-8 top-0 bottom-0 w-px bg-indigo-100 hidden sm:block"></div>

              {activeExe.steps.map((step, idx) => (
                <div key={idx} className="relative z-10">
                  <div className="hidden sm:flex absolute -left-12 w-8 h-8 bg-white border-2 border-indigo-400 rounded-full items-center justify-center text-sm font-bold text-indigo-600 shadow-sm">
                    {idx + 1}
                  </div>
                  <p className="text-slate-700 text-base mb-4 leading-relaxed sm:-mt-1">
                    <span className="sm:hidden font-bold text-indigo-600 mr-2">{idx + 1}.</span>
                    {renderDescription(step.description)}
                  </p>
                  <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 overflow-x-auto shadow-sm ml-0">
                    <BlockMath math={step.math} />
                  </div>
                </div>
              ))}

              <div className="relative pt-6 z-10">
                <div className="hidden sm:flex absolute -left-12 w-8 h-8 bg-emerald-50 border-2 border-emerald-500 rounded-full items-center justify-center shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                </div>
                <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl flex flex-col sm:flex-row items-center sm:justify-start gap-6 text-emerald-900 shadow-sm">
                  <span className="font-bold text-emerald-700 uppercase tracking-widest text-sm">Respuesta Final:</span>
                  <div className="text-2xl p-3 bg-white rounded-xl px-12 shadow-sm border border-emerald-100 text-center text-emerald-700">
                    <InlineMath math={`L = ${activeExe.result}`} />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}
