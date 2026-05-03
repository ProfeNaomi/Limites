export type ContextExercise = {
  id: number;
  title: string;
  problem: string;
  expression: string;
  steps: {
    description: string;
    math: string;
  }[];
  result: string;
};

export const contextExercises: ContextExercise[] = [
  {
    id: 1,
    title: "Crecimiento Poblacional",
    problem: "La población de una especie de aves en una reserva natural modelada por la función logística $P(t) = \\frac{1000}{1 + 9e^{-0.1t}}$, donde $t$ es el tiempo en años. ¿Cuál será la población de aves a largo plazo (es decir, cuando $t \\to \\infty$)?",
    expression: "\\lim_{t \\to \\infty} \\frac{1000}{1 + 9e^{-0.1t}}",
    steps: [
      {
        description: "Para encontrar la población a largo plazo, calculamos el límite de $P(t)$ cuando $t$ tiende a infinito.",
        math: "\\lim_{t \\to \\infty} \\frac{1000}{1 + 9e^{-0.1t}}"
      },
      {
        description: "Sabemos que cuando $t \\to \\infty$, el exponente $-0.1t \\to -\\infty$.",
        math: "-0.1t \\xrightarrow{t \\to \\infty} -\\infty"
      },
      {
        description: "Por las propiedades de la función exponencial, $e^{-\\infty} \\to 0$. Por lo tanto, el término $9e^{-0.1t}$ tiende a $0$.",
        math: "\\lim_{t \\to \\infty} 9e^{-0.1t} = 9(0) = 0"
      },
      {
        description: "Sustituimos esto en nuestra fracción principal.",
        math: "\\frac{1000}{1 + 0} = 1000"
      }
    ],
    result: "1000"
  },
  {
    id: 2,
    title: "Ley de Enfriamiento de Newton",
    problem: "Una taza de café caliente se coloca en una habitación a $20^\\circ\\text{C}$. La temperatura del café en grados Celsius después de $t$ minutos está dada por $T(t) = 20 + 70e^{-0.05t}$. ¿Cuál será la temperatura del café después de mucho tiempo?",
    expression: "\\lim_{t \\to \\infty} (20 + 70e^{-0.05t})",
    steps: [
      {
        description: "Evaluamos el límite de la función de temperatura cuando $t \\to \\infty$.",
        math: "\\lim_{t \\to \\infty} (20 + 70e^{-0.05t})"
      },
      {
        description: "El límite de una suma es la suma de los límites.",
        math: "\\lim_{t \\to \\infty} 20 + \\lim_{t \\to \\infty} 70e^{-0.05t}"
      },
      {
        description: "El primer término es una constante, por lo que su límite es $20$. En el segundo término, la exponencial $e^{-0.05t}$ tiende a cero cuando $t$ se hace muy grande.",
        math: "20 + 70(0) = 20"
      }
    ],
    result: "20^\\circ\\text{C}"
  },
  {
    id: 3,
    title: "Concentración de un Medicamento",
    problem: "La concentración de un medicamento en el torrente sanguíneo $t$ horas después de la inyección se modela por $C(t) = \\frac{5t}{t^2 + 1}$ en mg/L. ¿Qué sucede con la concentración a medida que pasa el tiempo ($t \\to \\infty$)?",
    expression: "\\lim_{t \\to \\infty} \\frac{5t}{t^2 + 1}",
    steps: [
      {
        description: "Planteamos el límite de la concentración cuando el tiempo tiende a infinito.",
        math: "\\lim_{t \\to \\infty} \\frac{5t}{t^2 + 1}"
      },
      {
        description: "Dividimos el numerador y el denominador por la mayor potencia de $t$ en el denominador, que es $t^2$.",
        math: "\\lim_{t \\to \\infty} \\frac{\\frac{5t}{t^2}}{\\frac{t^2}{t^2} + \\frac{1}{t^2}}"
      },
      {
        description: "Simplificamos la expresión obtenida.",
        math: "\\lim_{t \\to \\infty} \\frac{\\frac{5}{t}}{1 + \\frac{1}{t^2}}"
      },
      {
        description: "Cuando $t \\to \\infty$, los términos con $t$ en el denominador tienden a cero.",
        math: "\\frac{0}{1 + 0} = 0"
      }
    ],
    result: "0\\text{ mg/L}"
  },
  {
    id: 4,
    title: "Costo Promedio de Producción",
    problem: "El costo total de producir $x$ unidades de un producto es $C(x) = 5000 + 20x$. El costo promedio por unidad es $\\overline{C}(x) = \\frac{C(x)}{x}$. ¿Hacia qué valor tiende el costo promedio a medida que el nivel de producción aumenta indefinidamente?",
    expression: "\\lim_{x \\to \\infty} \\frac{5000 + 20x}{x}",
    steps: [
      {
        description: "Escribimos el límite de la función de costo promedio cuando la cantidad de unidades $x$ tiende a infinito.",
        math: "\\lim_{x \\to \\infty} \\frac{5000 + 20x}{x}"
      },
      {
        description: "Separamos la fracción en dos términos.",
        math: "\\lim_{x \\to \\infty} \\left( \\frac{5000}{x} + \\frac{20x}{x} \\right)"
      },
      {
        description: "Simplificamos cada término.",
        math: "\\lim_{x \\to \\infty} \\left( \\frac{5000}{x} + 20 \\right)"
      },
      {
        description: "Cuando $x \\to \\infty$, el término constante $20$ se mantiene igual, y la fracción $\\frac{5000}{x}$ tiende a cero.",
        math: "0 + 20 = 20"
      }
    ],
    result: "\\$20"
  },
  {
    id: 5,
    title: "Curva de Aprendizaje",
    problem: "El número de artículos que un operario de fábrica puede ensamblar diariamente después de $t$ días de entrenamiento está modelado por la curva de aprendizaje $L(t) = 120 - 80e^{-0.3t}$. ¿Cuál es la máxima cantidad de artículos que el operario podrá ensamblar a medida que gane experiencia infinita?",
    expression: "\\lim_{t \\to \\infty} (120 - 80e^{-0.3t})",
    steps: [
      {
        description: "Evaluamos el límite de la función de aprendizaje cuando el tiempo de experiencia $t$ tiende a infinito.",
        math: "\\lim_{t \\to \\infty} (120 - 80e^{-0.3t})"
      },
      {
        description: "Aplicamos las propiedades de los límites para separar los términos.",
        math: "\\lim_{t \\to \\infty} 120 - \\lim_{t \\to \\infty} 80e^{-0.3t}"
      },
      {
        description: "Como el exponente de la base natural es negativo, al crecer $t$, el término $e^{-0.3t}$ se aproxima a cero.",
        math: "120 - 80(0) = 120"
      }
    ],
    result: "120\\text{ artículos}"
  },
  {
    id: 6,
    title: "Velocidad Terminal de un Paracaidista",
    problem: "La velocidad (en m/s) de un paracaidista en caída libre con resistencia del aire después de $t$ segundos de saltar se modela por $v(t) = 50(1 - e^{-0.2t})$. ¿A qué velocidad máxima se aproxima el paracaidista (velocidad terminal)?",
    expression: "\\lim_{t \\to \\infty} 50(1 - e^{-0.2t})",
    steps: [
      {
        description: "Calculamos el límite de la función de velocidad cuando el tiempo tiende a infinito.",
        math: "\\lim_{t \\to \\infty} 50(1 - e^{-0.2t})"
      },
      {
        description: "Sabemos que la exponencial con exponente negativo se acerca a cero a medida que el tiempo crece indefinidamente.",
        math: "\\lim_{t \\to \\infty} e^{-0.2t} = 0"
      },
      {
        description: "Sustituimos este límite en la expresión original.",
        math: "50(1 - 0) = 50(1) = 50"
      }
    ],
    result: "50\\text{ m/s}"
  },
  {
    id: 7,
    title: "Rendimiento Agrícola",
    problem: "El rendimiento agrícola (en toneladas por hectárea) para una cantidad $x$ de fertilizante (en kg) está dado por $Y(x) = \\frac{100x}{x+10}$. ¿Cuál es el rendimiento máximo posible por hectárea por más fertilizante que se agregue?",
    expression: "\\lim_{x \\to \\infty} \\frac{100x}{x+10}",
    steps: [
      {
        description: "Establecemos el límite de la función de rendimiento a medida que la cantidad de fertilizante se hace arbitrariamente grande.",
        math: "\\lim_{x \\to \\infty} \\frac{100x}{x+10}"
      },
      {
        description: "Dividimos el numerador y el denominador por la variable de mayor exponente, que en este caso es $x$.",
        math: "\\lim_{x \\to \\infty} \\frac{\\frac{100x}{x}}{\\frac{x}{x} + \\frac{10}{x}}"
      },
      {
        description: "Simplificamos la expresión resultante.",
        math: "\\lim_{x \\to \\infty} \\frac{100}{1 + \\frac{10}{x}}"
      },
      {
        description: "Sabiendo que el término $\\frac{10}{x}$ tiende a cero cuando $x \\to \\infty$, evaluamos el límite final.",
        math: "\\frac{100}{1 + 0} = 100"
      }
    ],
    result: "100\\text{ toneladas/ha}"
  },
  {
    id: 8,
    title: "Desintegración Radiactiva",
    problem: "La cantidad de masa (en gramos) de una muestra de Carbono-14 restante después de $t$ años está dada por $M(t) = 500 e^{-0.000121t}$. ¿Cuánta masa quedará de la muestra en el límite hacia un futuro infinito?",
    expression: "\\lim_{t \\to \\infty} 500 e^{-0.000121t}",
    steps: [
      {
        description: "El límite de la masa en un tiempo infinitamente grande nos indicará qué ocurre a la larga con el material radiactivo.",
        math: "\\lim_{t \\to \\infty} 500 e^{-0.000121t}"
      },
      {
        description: "Como la constante de decaimiento es negativa, el valor del exponente $-0.000121t$ tiende a $-\\infty$.",
        math: "-0.000121t \\xrightarrow{t \\to \\infty} -\\infty"
      },
      {
        description: "La función exponencial de un valor que tiende a $-\\infty$ es $0$.",
        math: "500(0) = 0"
      }
    ],
    result: "0\\text{ gramos}"
  },
  {
    id: 9,
    title: "Expansión de un Rumor",
    problem: "En una universidad de 10,000 estudiantes, la cantidad de personas que han escuchado un rumor después de $t$ horas está dada por $R(t) = \\frac{10000}{1 + 99e^{-0.8t}}$. ¿A cuántas personas llegará finalmente el rumor?",
    expression: "\\lim_{t \\to \\infty} \\frac{10000}{1 + 99e^{-0.8t}}",
    steps: [
      {
        description: "Planteamos el límite de la función logística cuando el tiempo tiende a infinito.",
        math: "\\lim_{t \\to \\infty} \\frac{10000}{1 + 99e^{-0.8t}}"
      },
      {
        description: "Observamos el término exponencial del denominador. Cuando $t \\to \\infty$, $e^{-0.8t}$ decrece rápidamente.",
        math: "\\lim_{t \\to \\infty} e^{-0.8t} = 0"
      },
      {
        description: "Reemplazando este límite en nuestra función, el término completo con la exponencial se anula.",
        math: "\\frac{10000}{1 + 99(0)}"
      },
      {
        description: "El resultado nos da la capacidad máxima poblacional para el modelo logístico (la población total).",
        math: "\\frac{10000}{1} = 10000"
      }
    ],
    result: "10000\\text{ personas}"
  },
  {
    id: 10,
    title: "Efectividad Publicitaria",
    problem: "Las ventas (en miles de dólares) obtenidas como resultado de gastar $x$ miles de dólares en publicidad se rigen por $V(x) = \\frac{200x}{x + 5}$. ¿Cuál es el tope de ventas que se puede alcanzar independientemente del presupuesto publicitario?",
    expression: "\\lim_{x \\to \\infty} \\frac{200x}{x + 5}",
    steps: [
      {
        description: "Buscamos el límite de la función de ventas cuando el gasto publicitario aumenta al infinito.",
        math: "\\lim_{x \\to \\infty} \\frac{200x}{x + 5}"
      },
      {
        description: "Dividimos los términos por $x$ (la mayor potencia en la fracción) para levantar la indeterminación $\\infty/\\infty$.",
        math: "\\lim_{x \\to \\infty} \\frac{\\frac{200x}{x}}{\\frac{x}{x} + \\frac{5}{x}}"
      },
      {
        description: "Hacemos la respectiva simplificación matemática.",
        math: "\\lim_{x \\to \\infty} \\frac{200}{1 + \\frac{5}{x}}"
      },
      {
        description: "Al aplicar el límite con $x \\to \\infty$, el término fraccionario del denominador desaparece.",
        math: "\\frac{200}{1 + 0} = 200"
      }
    ],
    result: "200\\text{ mil dólares}"
  }
];
