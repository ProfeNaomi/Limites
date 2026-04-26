import { lazy, ReactNode } from "react";

export type LimitExercise = {
  id: number;
  expression: string;
  steps: {
    description: string;
    math: string;
  }[];
  result: string;
};

export const exercises: LimitExercise[] = [
  {
    id: 1,
    expression: "\\lim_{x \\to 0} \\frac{\\sqrt[3]{x^3+8} - \\sqrt{x^2+4}}{x^2}",
    steps: [
      {
        description: "Al evaluar directamente en $x=0$, obtenemos la forma indeterminada $0/0$. Para resolver esto, sumamos y restamos 2 en el numerador para separar el límite en dos partes.",
        math: "\\lim_{x \\to 0} \\frac{(\\sqrt[3]{x^3+8} - 2) - (\\sqrt{x^2+4} - 2)}{x^2}",
      },
      {
        description: "Separamos en dos límites $L_1$ y $L_2$. Primero calculamos $L_1$ racionalizando la raíz cúbica multiplicando por su factor conjugado.",
        math: "L_1 = \\lim_{x \\to 0} \\frac{x^3 + 8 - 8}{x^2((\\sqrt[3]{x^3+8})^2 + 2\\sqrt[3]{x^3+8} + 4)} = \\lim_{x \\to 0} \\frac{x}{(...)} = 0",
      },
      {
        description: "Ahora calculamos $L_2$ multiplicando por el conjugado de la raíz cuadrada.",
        math: "L_2 = \\lim_{x \\to 0} \\frac{x^2 + 4 - 4}{x^2(\\sqrt{x^2+4} + 2)} = \\lim_{x \\to 0} \\frac{1}{\\sqrt{x^2+4} + 2} = \\frac{1}{4}",
      },
      {
        description: "El límite original es la diferencia de ambos resultados.",
        math: "L = L_1 - L_2 = 0 - \\frac{1}{4} = -\\frac{1}{4}",
      }
    ],
    result: "-\\frac{1}{4}"
  },
  {
    id: 2,
    expression: "\\lim_{x \\to 2} \\frac{x^2+1}{x^2-1}",
    steps: [
      {
        description: "Evaluamos el límite directamente por sustitución sustituyendo $x = 2$. Vemos que el denominador no se anula.",
        math: "\\frac{2^2+1}{2^2-1}",
      },
      {
        description: "Resolvemos las potencias y sumas.",
        math: "\\frac{4+1}{4-1} = \\frac{5}{3}",
      }
    ],
    result: "\\frac{5}{3}"
  },
  {
    id: 3,
    expression: "\\lim_{x \\to 1} \\frac{(x-1)\\sqrt{2-x}}{1-x^2}",
    steps: [
      {
        description: "La evaluación directa da $0/0$. Procedemos a factorizar el denominador usando la diferencia de cuadrados.",
        math: "1 - x^2 = (1-x)(1+x) = -(x-1)(x+1)",
      },
      {
        description: "Sustituimos el denominador en el límite y simplificamos el factor $(x-1)$ que causa la indeterminación.",
        math: "\\lim_{x \\to 1} \\frac{(x-1)\\sqrt{2-x}}{-(x-1)(x+1)} = \\lim_{x \\to 1} \\frac{\\sqrt{2-x}}{-(x+1)}",
      },
      {
        description: "Evaluamos directamente sustituyendo $x = 1$.",
        math: "\\frac{\\sqrt{2-1}}{-(1+1)} = \\frac{1}{-2} = -\\frac{1}{2}",
      }
    ],
    result: "-\\frac{1}{2}"
  },
  {
    id: 4,
    expression: "\\lim_{x \\to 1} \\left( \\frac{x+2}{x^2-5x+4} + \\frac{x-4}{3(x^2-3x+2)} \\right)",
    steps: [
      {
        description: "Evaluando directamente tenemos de la forma $\\infty - \\infty$. Factorizamos ambos denominadores.",
        math: "\\text{Denominadores: } (x-1)(x-4) \\text{ y } 3(x-1)(x-2)",
      },
      {
        description: "Reescribimos la expresión con un factor común o mínimo común múltiplo para poder sumar las fracciones. $M.C.M. = 3(x-1)(x-4)(x-2)$.",
        math: "\\frac{3(x-2)(x+2) + (x-4)(x-4)}{3(x-1)(x-4)(x-2)}",
      },
      {
        description: "Expandimos y simplificamos el numerador algebraicamente.",
        math: "3(x^2 - 4) + (x^2 - 8x + 16) = 4x^2 - 8x + 4",
      },
      {
        description: "Factorizamos el numerador obtenido y simplificamos con el denominador.",
        math: "\\lim_{x \\to 1} \\frac{4(x-1)^2}{3(x-1)(x-4)(x-2)} = \\lim_{x \\to 1} \\frac{4(x-1)}{3(x-4)(x-2)}",
      },
      {
        description: "Evaluamos el resultado sustituyendo $x = 1$.",
        math: "\\frac{4(0)}{3(1-4)(1-2)} = 0",
      }
    ],
    result: "0"
  },
  {
    id: 5,
    expression: "\\lim_{x \\to 0} \\frac{\\sqrt{1+x^2} - 1}{x}",
    steps: [
      {
        description: "Indeterminación de la forma $0/0$. Multiplicamos numerador y denominador por el binomio conjugado del numerador.",
        math: "\\lim_{x \\to 0} \\frac{\\sqrt{1+x^2} - 1}{x} \\cdot \\frac{\\sqrt{1+x^2} + 1}{\\sqrt{1+x^2} + 1}",
      },
      {
        description: "Aplicamos diferencia de cuadrados en el numerador.",
        math: "\\lim_{x \\to 0} \\frac{(\\sqrt{1+x^2})^2 - 1^2}{x(\\sqrt{1+x^2} + 1)} = \\lim_{x \\to 0} \\frac{x^2}{x(\\sqrt{1+x^2} + 1)}",
      },
      {
        description: "Simplificamos la variable $x$ y evaluamos el límite en 0.",
        math: "\\lim_{x \\to 0} \\frac{x}{\\sqrt{1+x^2} + 1} = \\frac{0}{\\sqrt{1}+1} = 0",
      }
    ],
    result: "0"
  },
  {
    id: 6,
    expression: "\\lim_{x \\to 5} \\frac{\\sqrt{x-1} - 2}{x-5}",
    steps: [
      {
        description: "Reconocemos la forma indeterminada $0/0$. Racionalizamos multiplicando por el conjugado el numerador y el denominador.",
        math: "\\lim_{x \\to 5} \\frac{\\sqrt{x-1} - 2}{x-5} \\cdot \\frac{\\sqrt{x-1} + 2}{\\sqrt{x-1} + 2}",
      },
      {
        description: "Desarrollamos el numerador (diferencia de cuadrados) y observamos que se anulan los factores $(x-5)$.",
        math: "\\lim_{x \\to 5} \\frac{(x-1) - 4}{(x-5)(\\sqrt{x-1} + 2)} = \\lim_{x \\to 5} \\frac{x-5}{(x-5)(\\sqrt{x-1} + 2)}",
      },
      {
        description: "Simplificando y evaluando con $x = 5$.",
        math: "\\lim_{x \\to 5} \\frac{1}{\\sqrt{x-1} + 2} = \\frac{1}{\\sqrt{4} + 2} = \\frac{1}{4}",
      }
    ],
    result: "\\frac{1}{4}"
  },
  {
    id: 7,
    expression: "\\lim_{x \\to 1} \\frac{\\sqrt[3]{7+x^3} - \\sqrt{3+x^2}}{x-1}",
    steps: [
      {
        description: "Indeterminación $0/0$. Restamos y sumamos 2 en el numerador para separar las raíces en diferentes fracciones.",
        math: "\\lim_{x \\to 1} \\frac{(\\sqrt[3]{7+x^3} - 2) - (\\sqrt{3+x^2} - 2)}{x-1}",
      },
      {
        description: "Tratamos el primer límite multiplicando por su factor para formar una diferencia de cubos.",
        math: "L_1 = \\lim_{x \\to 1} \\frac{7+x^3 - 8}{(x-1)(A^2+2A+4)} = \\lim_{x \\to 1} \\frac{x^3-1}{(x-1)(\\dots)} = \\lim_{x \\to 1} \\frac{x^2+x+1}{(\\dots)} = \\frac{3}{12} = \\frac{1}{4}",
      },
      {
        description: "Tratamos el segundo límite multiplicando por el conjugado cuadrático.",
        math: "L_2 = \\lim_{x \\to 1} \\frac{3+x^2 - 4}{(x-1)(\\sqrt{3+x^2}+2)} = \\lim_{x \\to 1} \\frac{x^2-1}{(x-1)(\\dots)} = \\lim_{x \\to 1} \\frac{x+1}{\\sqrt{3+x^2}+2} = \\frac{2}{4} = \\frac{1}{2}",
      },
      {
        description: "Por último restamos ambos resultados.",
        math: "L_1 - L_2 = \\frac{1}{4} - \\frac{1}{2} = -\\frac{1}{4}",
      }
    ],
    result: "-\\frac{1}{4}"
  },
  {
    id: 8,
    expression: "\\lim_{x \\to 1} \\frac{x^2-2x+1}{x^3-x}",
    steps: [
      {
        description: "El límite muestra la forma indeterminada $0/0$. Empezamos factorizando el numerador reconociendo el Trinomio Cuadrado Perfecto.",
        math: "x^2 - 2x + 1 = (x-1)^2",
      },
      {
        description: "Factorizamos el denominador sacando la constante común $x$ y el binomio como diferencia de cuadrados.",
        math: "x^3 - x = x(x^2-1) = x(x-1)(x+1)",
      },
      {
        description: "Ensamblamos el límite con las versiones modificadas simplificando $(x-1)$ y luego evaluamos el valor.",
        math: "\\lim_{x \\to 1} \\frac{(x-1)^2}{x(x-1)(x+1)} = \\lim_{x \\to 1} \\frac{x-1}{x(x+1)} = \\frac{0}{(1)(2)} = 0",
      }
    ],
    result: "0"
  },
  {
    id: 9,
    expression: "\\lim_{x \\to 0} \\frac{\\tan(3x)}{x}",
    steps: [
      {
        description: "Reescribimos la función tangente usando la identidad $\\tan(u) = \\frac{\\sin(u)}{\\cos(u)}$.",
        math: "\\lim_{x \\to 0} \\frac{\\sin(3x)}{x \\cos(3x)}",
      },
      {
        description: "Acomodamos la expresión multiplicando y dividiendo por 3 para obtener el límite trigonométrico especial $\\lim_{u \\to 0} \\frac{\\sin(u)}{u} = 1$.",
        math: "\\lim_{x \\to 0} 3 \\cdot \\frac{\\sin(3x)}{3x} \\cdot \\frac{1}{\\cos(3x)}",
      },
      {
        description: "Evaluando cada parte obtenemos el resultado.",
        math: "3 \\cdot (1) \\cdot \\frac{1}{\\cos(0)} = 3 \\cdot 1 \\cdot 1 = 3",
      }
    ],
    result: "3"
  },
  {
    id: 10,
    expression: "\\lim_{x \\to 0} \\frac{\\sin(2x) + \\sin(3x)}{\\sin(4x) + \\sin(5x)}",
    steps: [
      {
        description: "Indeterminación $0/0$. Dividimos tanto el numerador como el denominador entero por $x$.",
        math: "\\lim_{x \\to 0} \\frac{\\frac{\\sin(2x)}{x} + \\frac{\\sin(3x)}{x}}{\\frac{\\sin(4x)}{x} + \\frac{\\sin(5x)}{x}}",
      },
      {
        description: "Ajustamos los denominadores multiplicándolos por sus respectivas proporciones para aprovechar el límite fundamental del seno.",
        math: "\\lim_{x \\to 0} \\frac{2\\frac{\\sin(2x)}{2x} + 3\\frac{\\sin(3x)}{3x}}{4\\frac{\\sin(4x)}{4x} + 5\\frac{\\sin(5x)}{5x}}",
      },
      {
        description: "Concluimos el caso evaluando el límite y simplificando. Sabemos que $\\lim_{u\\to0} \\sin(u)/u=1$.",
        math: "\\frac{2(1) + 3(1)}{4(1) + 5(1)} = \\frac{5}{9}",
      }
    ],
    result: "\\frac{5}{9}"
  },
  {
    id: 11,
    expression: "\\lim_{x \\to 0^+} \\frac{\\cos x - 1}{\\sqrt{x}}",
    steps: [
      {
        description: "Multiplicamos el numerador y denominador por la conjugación de $\\cos x - 1$.",
        math: "\\lim_{x \\to 0^+} \\frac{(\\cos x - 1)(\\cos x + 1)}{\\sqrt{x}(\\cos x + 1)} = \\lim_{x \\to 0^+} \\frac{\\cos^2 x - 1}{\\sqrt{x}(\\cos x + 1)}",
      },
      {
        description: "Usamos la la identidad $\\cos^2 x - 1 = -\\sin^2 x$.",
        math: "\\lim_{x \\to 0^+} \\frac{-\\sin^2 x}{\\sqrt{x}(\\cos x + 1)}",
      },
      {
        description: "Agrupamos $\\frac{\\sin^2x}{x^2}$ para que tenga consistencia matemática y poder evaluar en límite y el resto lo dejamos intacto. Multiplicamos y dividimos por $x^2$.",
        math: "\\lim_{x \\to 0^+} -\\left(\\frac{\\sin x}{x}\\right)^2 \\cdot \\frac{x^2}{\\sqrt{x}(\\cos x + 1)} = -1^2 \\cdot \\frac{0^{3/2}}{2} = 0",
      }
    ],
    result: "0"
  },
  {
    id: 12,
    expression: "\\lim_{x \\to 4} \\frac{\\sin(\\pi x)}{(x-4)\\cos(\\pi x)}",
    steps: [
      {
        description: "Hacemos un cambio de la variables. Sea $u = x-4$, entonces $x = u+4$. Y si $x \\to 4 \\Longrightarrow u \\to 0$.",
        math: "\\lim_{u \\to 0} \\frac{\\sin(\\pi(u+4))}{u\\cos(\\pi(u+4))}",
      },
      {
        description: "Al repartir el valor, nos queda $\\sin(\\pi u + 4\\pi)$. Como es periodo par completo $\\sin(\\pi u + 4\\pi) = \\sin(\\pi u)$ y pasa lo mismo con $\\cos$.",
        math: "\\lim_{u \\to 0} \\frac{\\sin(\\pi u)}{u \\cos(\\pi u)} = \\lim_{u \\to 0} \\frac{\\tan(\\pi u)}{u}",
      },
      {
        description: "Multiplicando y dividiendo por $\\pi$ aplicamos la equivalencia.",
        math: "\\lim_{u \\to 0} \\pi \\cdot \\frac{\\tan(\\pi u)}{\\pi u} = \\pi (1) = \\pi",
      }
    ],
    result: "\\pi"
  },
  {
    id: 13,
    expression: "\\lim_{x \\to 0} \\frac{\\sin(3x) - \\sin(5x)}{\\sqrt{x+1} - 1}",
    steps: [
      {
        description: "Multiplicamos el numerador y denominador por el conjugado de la raíz. Aplicando diferencia de cuadrados.",
        math: "\\lim_{x \\to 0} \\frac{(\\sin(3x) - \\sin(5x))(\\sqrt{x+1} + 1)}{(x+1) - 1} = \\lim_{x \\to 0} \\frac{(\\sin(3x) - \\sin(5x))(\\sqrt{x+1} + 1)}{x}",
      },
      {
        description: "Podemos repartir el denominador a las identidades de la resta y separar el producto.",
        math: "\\lim_{x \\to 0} \\left( \\frac{\\sin(3x)}{x} - \\frac{\\sin(5x)}{x} \\right) (\\sqrt{x+1} + 1)",
      },
      {
        description: "Ajustamos y utilizamos los límites fundamentales $\\lim \\sin(kx)/x = k$.",
        math: "(3 - 5)(\\sqrt{0+1} + 1) = (-2)(2) = -4",
      }
    ],
    result: "-4"
  },
  {
    id: 14,
    expression: "\\lim_{x \\to \\pi} \\frac{\\sin(x)}{x-\\pi}",
    steps: [
      {
        description: "Se produce la indeterminación $0/0$. Aplicaremos un cambio de variable $u = x-\\pi$, de donde $x = u+\\pi$. Con esto, $u \\to 0$.",
        math: "\\lim_{u \\to 0} \\frac{\\sin(u+\\pi)}{u}",
      },
      {
        description: "Utilizamos la identidad del seno de la suma: $\\sin(\\theta + \\pi) = -\\sin(\\theta)$.",
        math: "\\lim_{u \\to 0} \\frac{-\\sin(u)}{u}",
      },
      {
        description: "Finalizamos evaluando el límite especial.",
        math: "-1 \\cdot \\lim_{u \\to 0} \\frac{\\sin(u)}{u} = -1(1) = -1",
      }
    ],
    result: "-1"
  },
  {
    id: 15,
    expression: "\\lim_{x \\to a} \\frac{\\sin(x) - \\sin(a)}{x-a}",
    steps: [
      {
        description: "Observamos que si aplicamos la fórmula de la transformación de resta de senos a producto, el límite se facilita.",
        math: "\\sin(A) - \\sin(B) = 2 \\cos\\left(\\frac{A+B}{2}\\right) \\sin\\left(\\frac{A-B}{2}\\right)",
      },
      {
        description: "Lo aplicamos a nuestro numerador.",
        math: "\\lim_{x \\to a} \\frac{2 \\cos\\left(\\frac{x+a}{2}\\right) \\sin\\left(\\frac{x-a}{2}\\right)}{x-a}",
      },
      {
        description: "Como el valor que se necesita es la base fraccionaría, ordenamos el divisor y preparamos para eliminar la indeterminación.",
        math: "\\lim_{x \\to a} \\cos\\left(\\frac{x+a}{2}\\right) \\cdot \\frac{\\sin\\left(\\frac{x-a}{2}\\right)}{\\frac{x-a}{2}}",
      },
      {
        description: "Al evaluar, la función seno unificada evalúa en 1, así que solo nos queda el resto.",
        math: "\\cos\\left(\\frac{a+a}{2}\\right) \\cdot (1) = \\cos\\left(a\\right)",
      }
    ],
    result: "\\cos(a)"
  }
];
