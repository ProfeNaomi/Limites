import { useState } from "react";
import { BlockMath, InlineMath } from "react-katex";
import { Layout } from "../components/Layout";

const examples = [
  { id: 'linear', name: 'Función Lineal', expression: '2x + 1', c: 2, L: 5, calculateDelta: (e: number) => e / 2, eval: (x: number) => 2*x + 1 },
  { id: 'quadratic', name: 'Función Cuadrática', expression: 'x^2', c: 2, L: 4, calculateDelta: (e: number) => Math.sqrt(4 + e) - 2, eval: (x: number) => x*x },
  { id: 'cubic', name: 'Función Cúbica', expression: 'x^3', c: 1, L: 1, calculateDelta: (e: number) => Math.cbrt(1 + e) - 1, eval: (x: number) => x*x*x },
  { id: 'exponential', name: 'Función Exponencial', expression: 'e^x', c: 0, L: 1, calculateDelta: (e: number) => Math.log(1 + e), eval: (x: number) => Math.exp(x) },
  { id: 'sin', name: 'Función Seno', expression: '\\sin(x)', c: 0, L: 0, calculateDelta: (e: number) => Math.asin(Math.min(e, 1)), eval: (x: number) => Math.sin(x) },
  { id: 'abs', name: 'Valor Absoluto', expression: '|x|', c: 0, L: 0, calculateDelta: (e: number) => e, eval: (x: number) => Math.abs(x) },
  { id: 'sqrt', name: 'Raíz Cuadrada', expression: '\\sqrt{x}', c: 4, L: 2, calculateDelta: (e: number) => 4 - Math.pow(2 - Math.min(e, 1.99), 2), eval: (x: number) => Math.sqrt(x) },
  { id: 'log', name: 'Logaritmo Natural', expression: '\\ln(x)', c: 1, L: 0, calculateDelta: (e: number) => Math.exp(e) - 1, eval: (x: number) => Math.log(x) },
  { id: 'constant', name: 'Función Constante', expression: '3', c: 2, L: 3, calculateDelta: (e: number) => 1, eval: (x: number) => 3 },
  { id: 'inverse', name: 'Función Racional', expression: '1/x', c: 1, L: 1, calculateDelta: (e: number) => 1 - 1/(1+e), eval: (x: number) => 1/x }
];

export function EpsilonDelta() {
  const [epsilon, setEpsilon] = useState(1.5);
  const [selectedExampleId, setSelectedExampleId] = useState('linear');
  
  const example = examples.find(ex => ex.id === selectedExampleId) || examples[0];
  const { L, c, expression } = example;
  const delta = example.calculateDelta(epsilon);

  // View parameters para SVG
  const width = 600;
  const height = 400;
  const scaleX = 80; // pixels per unit
  const scaleY = 40; // pixels per unit
  const originX = 100; // x-coordinate of graph origin
  const originY = 350; // y-coordinate of graph origin

  const mapX = (x: number) => originX + x * scaleX;
  const mapY = (y: number) => originY - y * scaleY;

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="border-b border-slate-200 pb-5">
        <h2 className="text-2xl font-bold leading-7 text-slate-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Visualización Épsilon-Delta
        </h2>
        <p className="mt-2 text-slate-500 text-lg">
          Comprende la definición formal del límite de manera interactiva.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <div>
            <h3 className="font-semibold text-slate-800 mb-2">Definición Formal</h3>
            <p className="text-base text-slate-600 mb-6 flex items-center flex-wrap gap-2">
              Para todo <span className="text-indigo-600 text-3xl font-bold"><InlineMath math="\epsilon > 0" /></span>, existe un <span className="text-emerald-600 text-3xl font-bold"><InlineMath math="\delta > 0" /></span> tal que:
            </p>
            <div className="bg-slate-50 rounded-lg p-3 overflow-x-auto text-sm border border-slate-100">
               <BlockMath math="0 < |x - c| < \delta \implies |f(x) - L| < \epsilon" />
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-slate-800 mb-4">Parámetros</h3>
            <div className="space-y-6">
              
              <div>
                <label htmlFor="function-select" className="block text-sm font-medium leading-6 text-slate-900 mb-2">
                  Función a Analizar
                </label>
                <select
                  id="function-select"
                  value={selectedExampleId}
                  onChange={(e) => setSelectedExampleId(e.target.value)}
                  className="w-full rounded-lg border-0 py-2.5 pl-3 pr-10 text-slate-900 ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-slate-50 cursor-pointer"
                >
                  {examples.map(ex => (
                    <option key={ex.id} value={ex.id}>{ex.name}: f(x) = {ex.expression.replace(/\\/g, '')}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="epsilon" className="flex items-center gap-2 text-sm font-medium leading-6 text-slate-900 mb-2">
                  <span>Valor de Tolerancia (</span>
                  <span className="text-indigo-600 text-xl"><InlineMath math={`\\epsilon = ${epsilon.toFixed(2)}`} /></span>
                  <span>)</span>
                </label>
                <input
                  id="epsilon"
                  type="range"
                  min="0.2"
                  max="3"
                  step="0.1"
                  value={epsilon}
                  onChange={(e) => setEpsilon(parseFloat(e.target.value))}
                  className="w-full mt-2 accent-indigo-600"
                />
                <p className="text-xs text-slate-500 mt-1">Controla la cercanía en el eje Y.</p>
              </div>

              <div className="bg-emerald-50 text-emerald-800 p-5 rounded-xl border border-emerald-200 flex flex-col sm:flex-row items-start gap-4">
                 <div className="mt-1 flex-shrink-0 bg-emerald-100 p-2 rounded-full text-emerald-600">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                 </div>
                 <div className="space-y-3 flex-1 min-w-0">
                   <div className="font-bold flex items-center flex-wrap gap-2 text-base">
                     <span>Delta Resultante:</span>
                     <span className="text-emerald-700 text-lg"><InlineMath math={`\\delta = ${delta.toFixed(3)}`} /></span>
                   </div>
                   <div className="text-sm leading-relaxed">
                     Para la función <InlineMath math={`f(x) = ${expression}`} /> con límite en <InlineMath math={`x=${c}`} />, cualquier valor de <InlineMath math="x" /> a una distancia menor de <span className="font-bold">{delta.toFixed(3)}</span> obligará a que <InlineMath math="f(x)" /> esté dentro de <InlineMath math={`\\pm ${epsilon.toFixed(2)}`} /> unidades del límite <InlineMath math={`L=${L}`} />.
                   </div>
                 </div>
              </div>

            </div>
          </div>
        </div>

        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden relative p-4 sm:p-8 flex items-center justify-center min-h-[400px]">
            
            <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`} className="font-sans max-w-full">
              <defs>
                <pattern id="grid" width={scaleX/2} height={scaleY/2} patternUnits="userSpaceOnUse">
                  <path d={`M ${scaleX/2} 0 L 0 0 0 ${scaleY/2}`} fill="none" stroke="#e2e8f0" strokeWidth="1"/>
                </pattern>
              </defs>

              <rect width="100%" height="100%" fill="url(#grid)" />
              
              {/* Ejes */}
              <line x1={originX} y1="0" x2={originX} y2={height} stroke="#cbd5e1" strokeWidth="2" />
              <line x1="0" y1={originY} x2={width} y2={originY} stroke="#cbd5e1" strokeWidth="2" />

              {/* Ticks & Labels */}
              {[1, 2, 3, 4, 5, 6].map(i => (
                <g key={`x-${i}`}>
                  <line x1={mapX(i)} y1={originY - 4} x2={mapX(i)} y2={originY + 4} stroke="#94a3b8" strokeWidth="2" />
                  <text x={mapX(i)} y={originY + 20} textAnchor="middle" fill="#64748b" fontSize="12">{i}</text>
                </g>
              ))}
              {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                <g key={`y-${i}`}>
                   <line x1={originX - 4} y1={mapY(i)} x2={originX + 4} y2={mapY(i)} stroke="#94a3b8" strokeWidth="2" />
                   <text x={originX - 10} y={mapY(i) + 4} textAnchor="end" fill="#64748b" fontSize="12">{i}</text>
                </g>
              ))}

              {/* Banda Epsilon (Y) */}
              <rect 
                x={0} 
                y={mapY(L + epsilon)} 
                width={width} 
                height={Math.max(0, mapY(L - epsilon) - mapY(L + epsilon))}
                fill="rgba(99, 102, 241, 0.1)"
              />
              <line x1={0} y1={mapY(L + epsilon)} x2={width} y2={mapY(L + epsilon)} stroke="#818cf8" strokeWidth="1" strokeDasharray="4 4" />
              <line x1={0} y1={mapY(L - epsilon)} x2={width} y2={mapY(L - epsilon)} stroke="#818cf8" strokeWidth="1" strokeDasharray="4 4" />
              <text x={20} y={mapY(L + epsilon) - 5} fill="#6366f1" fontSize="16" fontWeight="600" fontFamily="serif" fontStyle="italic">L + ε</text>
              <text x={20} y={mapY(L - epsilon) + 16} fill="#6366f1" fontSize="16" fontWeight="600" fontFamily="serif" fontStyle="italic">L - ε</text>

              {/* Banda Delta (X) */}
              <rect 
                x={mapX(c - delta)} 
                y={0} 
                width={Math.max(0, mapX(c + delta) - mapX(c - delta))} 
                height={height}
                fill="rgba(16, 185, 129, 0.1)"
              />
              <line x1={mapX(c + delta)} y1={0} x2={mapX(c + delta)} y2={height} stroke="#34d399" strokeWidth="1" strokeDasharray="4 4" />
              <line x1={mapX(c - delta)} y1={0} x2={mapX(c - delta)} y2={height} stroke="#34d399" strokeWidth="1" strokeDasharray="4 4" />
              <text x={mapX(c + delta) + 5} y={height - 20} fill="#059669" fontSize="16" fontWeight="600" fontFamily="serif" fontStyle="italic">c + δ</text>
              <text x={mapX(c - delta) - 5} y={height - 20} textAnchor="end" fill="#059669" fontSize="16" fontWeight="600" fontFamily="serif" fontStyle="italic">c - δ</text>


              {/* Function Curve */}
              <path 
                d={Array.from({length: width}).map((_, i) => {
                  const xPix = i;
                  const xVal = (xPix - originX) / scaleX;
                  const yVal = example.eval(xVal);
                  if (isNaN(yVal) || !isFinite(yVal)) return '';
                  const yPix = mapY(yVal);
                  return `${xPix} ${yPix}`;
                }).filter(p => p !== '').map((p, i) => `${i === 0 ? 'M' : 'L'} ${p}`).join(' ')} 
                stroke="#0f172a" 
                strokeWidth="3" 
                fill="none" 
              />

              {/* Indicadores en el Límite */}
              <circle cx={mapX(c)} cy={mapY(L)} r="6" fill="#f43f5e" />
              <line x1={mapX(c)} y1={mapY(L)} x2={mapX(c)} y2={originY} stroke="#f43f5e" strokeWidth="2" strokeDasharray="4 4" />
              <line x1={mapX(c)} y1={mapY(L)} x2={originX} y2={mapY(L)} stroke="#f43f5e" strokeWidth="2" strokeDasharray="4 4" />
              <text x={mapX(c) + 12} y={mapY(L) + 5} fill="#f43f5e" fontSize="14" fontWeight="bold">(c, L) = ({c}, {L})</text>

            </svg>
        </div>
      </div>
    </div>
  );
}
