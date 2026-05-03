import { LimitExercise } from "./limitsData";

export const moreExercises: LimitExercise[] = [
  {
    id: 16,
    expression: "\\lim_{x \\to 0} \\frac{1 - \\cos^3(x)}{x \\sin(2x)}",
    steps: [
      {
        description: "Identificamos la forma indeterminada $0/0$. Aplicamos factorización de diferencia de cubos para el numerador: $A^3 - B^3 = (A-B)(A^2+AB+B^2)$.",
        math: "1 - \\cos^3(x) = (1 - \\cos x)(1 + \\cos x + \\cos^2 x)"
      },
      {
        description: "Reescribimos el límite con la expresión factorizada y luego multiplicamos numerador y denominador por el conjugado $(1 + \\cos x)$ para transformarlo.",
        math: "\\lim_{x \\to 0} \\frac{(1 - \\cos x)(1 + \\cos x + \\cos^2 x)}{x \\sin(2x)} \\cdot \\frac{1 + \\cos x}{1 + \\cos x}"
      },
      {
        description: "Sabiendo que $(1 - \\cos x)(1 + \\cos x) = 1 - \\cos^2 x = \\sin^2 x$, simplificamos:",
        math: "\\lim_{x \\to 0} \\frac{\\sin^2(x)(1 + \\cos x + \\cos^2 x)}{x \\sin(2x) (1 + \\cos x)}"
      },
      {
        description: "Aprovechamos la identidad de ángulo doble $\\sin(2x) = 2\\sin(x)\\cos(x)$ para cancelar un $\\sin(x)$ con el numerador.",
        math: "\\lim_{x \\to 0} \\frac{\\sin(x) (1 + \\cos x + \\cos^2 x)}{x (2\\sin(x)\\cos(x)) (1 + \\cos x)} = \\lim_{x \\to 0} \\frac{\\sin x}{x} \\cdot \\frac{1 + \\cos x + \\cos^2 x}{2\\cos x(1 + \\cos x)}"
      },
      {
        description: "Utilizando el límite fundamental trigonométrico $\\lim \\frac{\\sin x}{x} = 1$, evaluamos en $x = 0$ recordando que $\\cos(0) = 1$.",
        math: "1 \\cdot \\frac{1 + 1 + 1^2}{2(1)(1 + 1)} = \\frac{3}{4}"
      }
    ],
    result: "\\frac{3}{4}"
  },
  {
    id: 17,
    expression: "\\lim_{x \\to \\pi/4} \\frac{\\sin(2x) - 1}{4x - \\pi}",
    steps: [
      {
        description: "Indeterminación $0/0$. Hacemos un cambio de variable $u = 4x - \\pi$, donde $x = \\frac{u + \\pi}{4} = \\frac{u}{4} + \\frac{\\pi}{4}$. Si $x \\to \\pi/4$, entonces $u \\to 0$.",
        math: "\\lim_{u \\to 0} \\frac{\\sin\\left(2\\left(\\frac{u}{4} + \\frac{\\pi}{4}\\right)\\right) - 1}{u} = \\lim_{u \\to 0} \\frac{\\sin\\left(\\frac{u}{2} + \\frac{\\pi}{2}\\right) - 1}{u}"
      },
      {
        description: "Usamos la identidad de ángulos suplementarios: $\\sin(\\theta + \\pi/2) = \\cos(\\theta)$.",
        math: "\\lim_{u \\to 0} \\frac{\\cos(u/2) - 1}{u}"
      },
      {
        description: "Multiplicamos y dividimos por el conjugado $\\cos(u/2) + 1$ para obtener diferencia de cuadrados.",
        math: "\\lim_{u \\to 0} \\frac{\\cos^2(u/2) - 1}{u(\\cos(u/2) + 1)} = \\lim_{u \\to 0} \\frac{-\\sin^2(u/2)}{u(\\cos(u/2) + 1)}"
      },
      {
        description: "Separamos para aplicar el límite fundamental $\\lim_{w \\to 0} \\frac{\\sin w}{w} = 1$. Multiplicamos y dividimos por 2 en el denominador para formar $u/2$.",
        math: "\\lim_{u \\to 0} -\\frac{1}{2}\\left( \\frac{\\sin(u/2)}{u/2} \\right) \\cdot \\frac{\\sin(u/2)}{\\cos(u/2) + 1}"
      },
      {
        description: "Al evaluar considerando el límite de la primera parte en 1 y la evaluación directa de la segunda parte en 0:",
        math: "-\\frac{1}{2} \\cdot 1 \\cdot \\frac{0}{1 + 1} = 0"
      }
    ],
    result: "0"
  },
  {
    id: 18,
    expression: "\\lim_{x \\to 0} \\frac{\\sqrt{\\cos x} - 1}{x^2}",
    steps: [
      {
        description: "Al evaluar obtenemos $0/0$. Racionalizamos multiplicando numerador y denominador por el conjugado con signo positivo.",
        math: "\\lim_{x \\to 0} \\frac{(\\sqrt{\\cos x} - 1)(\\sqrt{\\cos x} + 1)}{x^2(\\sqrt{\\cos x} + 1)} = \\lim_{x \\to 0} \\frac{\\cos(x) - 1}{x^2(\\sqrt{\\cos x} + 1)}"
      },
      {
        description: "Ahora obtenemos una expresión de coseno. Multiplicamos de nuevo por su conjugado para llevarlo a seno cuadrado.",
        math: "\\lim_{x \\to 0} \\frac{(\\cos(x) - 1)(\\cos(x) + 1)}{x^2(\\sqrt{\\cos x} + 1)(\\cos(x) + 1)} = \\lim_{x \\to 0} \\frac{\\cos^2(x) - 1}{x^2(\\dots)}"
      },
      {
        description: "Sustituimos $1 - \\cos^2(x) = \\sin^2(x)$, por tanto $\\cos^2(x) - 1 = -\\sin^2(x)$. Agrupamos todo en torno al límite especial.",
        math: "\\lim_{x \\to 0} -\\left(\\frac{\\sin x}{x}\\right)^2 \\cdot \\frac{1}{(\\sqrt{\\cos x} + 1)(\\cos(x) + 1)}"
      },
      {
        description: "Sabiendo que el primer factor equivale a $1^2$, evaluamos el resto:",
        math: "(-1) \\cdot \\frac{1}{(\\sqrt{1} + 1)(1 + 1)} = -1 \\cdot \\frac{1}{(2)(2)} = -\\frac{1}{4}"
      }
    ],
    result: "-\\frac{1}{4}"
  },
  {
    id: 19,
    expression: "\\lim_{x \\to 1} \\frac{\\sin(2(x-1))}{x^3 - 1}",
    steps: [
      {
        description: "Al evaluar obtenemos la forma $0/0$. Ya que el denominador es una diferencia de cubos, lo factorizamos.",
        math: "x^3 - 1 = (x-1)(x^2 + x + 1)"
      },
      {
        description: "Reescribimos la expresión separando la zona racional de la expresión que conforma la identidad del problema.",
        math: "\\lim_{x \\to 1} \\frac{\\sin(2(x-1))}{x-1} \\cdot \\frac{1}{x^2 + x + 1}"
      },
      {
        description: "Multiplicamos arriba y abajo el factor del denominador del seno por $2$ para poder aplicar el límite fundamental $\\lim_{u \\to 0}\\frac{\\sin u}{u} = 1$.",
        math: "\\lim_{x \\to 1} 2\\left( \\frac{\\sin(2(x-1))}{2(x-1)} \\right) \\cdot \\frac{1}{x^2 + x + 1}"
      },
      {
        description: "Puesto que el cambio $x \\to 1$ vuelve al argumento de seno cero, lo tratamos como $1$.",
        math: "2(1) \\cdot \\frac{1}{1^2 + 1 + 1} = \\frac{2}{3}"
      }
    ],
    result: "\\frac{2}{3}"
  },
  {
    id: 20,
    expression: "\\lim_{x \\to 0} (e^x + x)^{\\frac{2}{x}}",
    steps: [
      {
        description: "Al sustituir directamente $x = 0$, resulta en la forma indeterminada $1^{\\infty}$. Usamos la propiedad $\\lim_{x \\to a} f(x)^{g(x)} = e^{\\lim_{x\\to a} g(x)(f(x) - 1)}$.",
        math: "L = e^{\\lim_{x \\to 0} \\frac{2}{x} (e^x + x - 1)}"
      },
      {
        description: "Separamos algebraicamente los términos dentro de la multiplicación en el exponente.",
        math: "L = e^{\\lim_{x \\to 0} 2 \\left( \\frac{e^x - 1}{x} + \\frac{x}{x} \\right)}"
      },
      {
        description: "Identificamos el límite especial logarítmico $\\lim_{x \\to 0} \\frac{e^x - 1}{x} = 1$ y que $\\frac{x}{x} = 1$.",
        math: "L = e^{2 \\cdot (1 + 1)} = e^4"
      }
    ],
    result: "e^4"
  },
  {
    id: 21,
    expression: "\\lim_{x \\to \\infty} \\left( \\frac{x-1}{x-4} \\right)^{2x+3}",
    steps: [
      {
        description: "Evaluamos el límite al infinito y obtenemos la forma $1^{\\infty}$. Aplicamos la fórmula del número escalar natural.",
        math: "L = e^{\\lim_{x \\to \\infty} (2x+3) \\left( \\frac{x-1}{x-4} - 1 \\right)}"
      },
      {
        description: "Encontramos factor común dentro del corchete realizando la resta de fracciones algebraicas.",
        math: "= e^{\\lim_{x \\to \\infty} (2x+3) \\left( \\frac{x-1 - (x-4)}{x-4} \\right)} = e^{\\lim_{x \\to \\infty} (2x+3) \\left( \\frac{3}{x-4} \\right)}"
      },
      {
        description: "Agrupamos en el numerador de la fracción del exponente.",
        math: "= e^{\\lim_{x \\to \\infty} \\frac{6x + 9}{x-4}}"
      },
      {
        description: "El límite de un cociente de polinomios del mismo grado tiende hacia el valor de la división de los coeficientes principales $6/1$.",
        math: "L = e^6"
      }
    ],
    result: "e^6"
  },
  {
    id: 22,
    expression: "\\lim_{x \\to 0} \\left( \\frac{x^2+1}{2x+1} \\right)^{1/x}",
    steps: [
      {
        description: "Al buscar el límite en $x = 0$ obtenemos $1^{\\infty}$. Utilizamos el postulado principal de límites en base epsilon que nos indica $\\lim f(x)^{g(x)} = e^{\\lim g(x)(f(x)-1)}$.",
        math: "L = e^{\\lim_{x \\to 0} \\frac{1}{x} \\left( \\frac{x^2+1}{2x+1} - 1 \\right)}"
      },
      {
        description: "Para desarrollar el exponente, le restamos $1$ al cociente usando mínimo común múltiplo.",
        math: "e^{\\lim_{x \\to 0} \\frac{1}{x} \\left( \\frac{x^2+1 - (2x+1)}{2x+1} \\right)} = e^{\\lim_{x \\to 0} \\frac{1}{x} \\left( \\frac{x^2 - 2x}{2x+1} \\right)}"
      },
      {
        description: "Factorizamos la $x$ del numerador del exponente para cancelarla con la que está dominando el denominador inferior.",
        math: "e^{\\lim_{x \\to 0} \\frac{x(x - 2)}{x(2x+1)}} = e^{\\lim_{x \\to 0} \\frac{x - 2}{2x+1}}"
      },
      {
        description: "Podemos realizar una evaluación directa de $x = 0$ para determinar su valor exponencial.",
        math: "e^{\\frac{-2}{1}} = e^{-2} = \\frac{1}{e^2}"
      }
    ],
    result: "e^{-2}"
  },
  {
    id: 23,
    expression: "\\lim_{x \\to \\infty} \\left( \\frac{x^2 + x - 3}{3x^2 + 2} \\right)^{2x+3}",
    steps: [
      {
        description: "Primero determinamos cuál es el estado asintótico de la base de esta expresión. Como es una cuota racional de igual grado de polinomio evaluada en el infinito, este depende de los coeficientes principales.",
        math: "\\lim_{x \\to \\infty} \\frac{x^2 + x - 3}{3x^2 + 2} = \\frac{1}{3}"
      },
      {
        description: "Evaluando también el exponente obtenemos infinito, lo cual se convierte en una base menor a uno con exponente infinito.",
        math: "L = \\left( \\frac{1}{3} \\right)^{+\\infty}"
      },
      {
        description: "Matemáticamente, cuando un valor base está fijado estrictamente entre $0$ y $1$ (abiertos) su progresión hacia el infinito positivo colapsa asintóticamente al cero.",
        math: "L = 0"
      }
    ],
    result: "0"
  },
  {
    id: 24,
    expression: "\\lim_{h \\to 0} \\frac{\\ln(x+h) + \\ln(x-h) - 2\\ln(x)}{h^2}",
    steps: [
      {
        description: "Al evaluar obtenemos $0/0$. Aplicamos propiedades de los suma de logaritmos e invirtiendo la regla escalar.",
        math: "\\ln(x+h) + \\ln(x-h) = \\ln((x+h)(x-h)) = \\ln(x^2 - h^2)"
      },
      {
        description: "Aplicamos la regla de resta de logaritmos asumiendo que $2\\ln(x) = \\ln(x^2)$.",
        math: "\\lim_{h \\to 0} \\frac{\\ln(x^2 - h^2) - \\ln(x^2)}{h^2} = \\lim_{h \\to 0} \\frac{\\ln\\left(\\frac{x^2 - h^2}{x^2}\\right)}{h^2}"
      },
      {
        description: "Convertimos la operación interna sabiendo que formamos un binomio en fracción.",
        math: "\\lim_{h \\to 0} \\frac{\\ln\\left( 1 - \\frac{h^2}{x^2} \\right)}{h^2}"
      },
      {
        description: "Definimos un cambio de variable $u = -\\frac{h^2}{x^2}$, así que evaluado $h \\to 0$, $u \\to 0$. Despejando resulta en $h^2 = -ux^2$.",
        math: "\\lim_{u \\to 0} \\frac{\\ln(1 + u)}{-u x^2} = -\\frac{1}{x^2} \\lim_{u \\to 0} \\frac{\\ln(1+u)}{u}"
      },
      {
        description: "Como el límite fundamental especial del logaritmo es $\\lim_{u \\to 0} \\frac{\\ln(1+u)}{u} = 1$, resolvemos:",
        math: "-\\frac{1}{x^2} \\cdot 1 = -\\frac{1}{x^2}"
      }
    ],
    result: "-\\frac{1}{x^2}"
  },
  {
    id: 25,
    expression: "\\lim_{x \\to \\infty} \\left( x - \\sqrt{x^2 + x} \\right)",
    steps: [
      {
        description: "Evaluando es un límite del tipo $\\infty - \\infty$. Así que procedemos a multiplicar tanto el numerador como dividir por el conjugado binomial.",
        math: "\\lim_{x \\to \\infty} \\left( x - \\sqrt{x^2 + x} \\right) \\frac{x + \\sqrt{x^2 + x}}{x + \\sqrt{x^2 + x}}"
      },
      {
        description: "Desarrollamos el numerador resolviendo el trinomio por la diferencia de cuadrados exactos e igualamos.",
        math: "\\lim_{x \\to \\infty} \\frac{x^2 - (x^2 + x)}{x + \\sqrt{x^2 + x}} = \\lim_{x \\to \\infty} \\frac{-x}{x + \\sqrt{x^2(1 + \\frac{1}{x})}}"
      },
      {
        description: "Consideramos sacar fuera de la raíz el término cuadrático $x^2$. Ya que $x \\to \\infty$, $x$ es altamente positiva ($|x| = x$).",
        math: "\\lim_{x \\to \\infty} \\frac{-x}{x + x\\sqrt{1 + \\frac{1}{x}}} = \\lim_{x \\to \\infty} \\frac{-x}{x \\left( 1 + \\sqrt{1 + \\frac{1}{x}} \\right)}"
      },
      {
        description: "Anulamos las variantes equitativas del numerador y denominador ($x$) y calculamos el límite evaluando la porción de $1/x \\to 0$.",
        math: "\\frac{-1}{1 + \\sqrt{1 + 0}} = -\\frac{1}{2}"
      }
    ],
    result: "-\\frac{1}{2}"
  },
  {
    id: 26,
    expression: "\\lim_{x \\to 1} \\frac{x+1}{x^2-5}",
    steps: [
      {
        description: "Verificamos primero si existe la discontinuidad analizando el denominador. Sustituimos con el valor principal $x = 1$.",
        math: "\\frac{1^2 - 5}{} = -4"
      },
      {
        description: "Como el denominador no arroja $0$, estamos frente a un límite determinable mediante substitución directa. Calculamos numéricamente.",
        math: "\\frac{1+1}{1^2-5} = \\frac{2}{1 - 5} = \\frac{2}{-4}"
      },
      {
        description: "Reducimos la fracción.",
        math: "-\\frac{1}{2}"
      }
    ],
    result: "-\\frac{1}{2}"
  },
  {
    id: 27,
    expression: "\\lim_{x \\to \\infty} \\frac{x^3 - 2x^5 + 7x - 3}{x^6 + 3x^5 - 2x^2 + 8x}",
    steps: [
      {
        description: "En polinomios sometidos a una expansión que tienen como destino el infinito algebraico aplicamos el concepto de grados polinómicos.",
        math: "\\lim_{x \\to \\infty} \\frac{P(x)}{Q(x)}"
      },
      {
        description: "La tendencia dominante es de primer orden y estará dictada en el denominador que en este caso tiene un grado polinómico mayor ($x^6$) sobre el numerador ($x^5$ dominando).",
        math: "\\lim_{x \\to \\infty} \\frac{-2x^5}{x^6} \\quad \\text{simplificando a} \\quad \\lim_{x \\to \\infty} \\frac{-2}{x}"
      },
      {
        description: "Un número referenciado y evaluado al infinito recíprocamente tiende permanentemente a cero.",
        math: "\\frac{-2}{\\infty} = 0"
      }
    ],
    result: "0"
  },
  {
    id: 28,
    expression: "\\lim_{x \\to 0} \\left( \\frac{1+x}{2x+1} \\right)^{\\frac{2x+3}{x}}",
    steps: [
      {
        description: "Realizando la comprobación directa obtenemos la forma $1^{\\infty}$. Convertimos la fórmula utilizando logaritmo con base neperiana (exponencial escalable).",
        math: "e^{\\lim_{x \\to 0} \\frac{2x+3}{x} \\left( \\frac{1+x}{2x+1} - 1 \\right)}"
      },
      {
        description: "Despejamos el paréntesis del exponente realizando la cruzada aritmética.",
        math: "e^{\\lim_{x \\to 0} \\frac{2x+3}{x} \\left( \\frac{1+x - (2x+1)}{2x+1} \\right)} = e^{\\lim_{x \\to 0} \\frac{2x+3}{x} \\left( \\frac{-x}{2x+1} \\right)}"
      },
      {
        description: "Cancelamos la variante $x$ expuesta en el numerador local y en el denominador adjunto.",
        math: "e^{\\lim_{x \\to 0} \\frac{-(2x+3)}{2x+1}}"
      },
      {
        description: "Evaluamos finalmente a sustitución determinable en $x=0$.",
        math: "e^{\\frac{-3}{1}} = e^{-3}"
      }
    ],
    result: "e^{-3}"
  },
  {
    id: 29,
    expression: "\\lim_{x \\to 2} \\frac{\\sqrt[3]{3x+2} - 2}{x-2}",
    steps: [
      {
        description: "La constante es $0/0$. Utilizamos la multiplicación por el factor racionalizador de tercer grado (diferencia de cubos invertida).",
        math: "(A-B)(A^2+AB+B^2) = A^3 - B^3"
      },
      {
        description: "Para nuestro caso, $A = \\sqrt[3]{3x+2}$ y $B = 2$. Expresado en la ecuación con factor conjugado:",
        math: "\\lim_{x \\to 2} \\frac{\\sqrt[3]{3x+2} - 2}{x-2} \\cdot \\frac{(\\sqrt[3]{3x+2})^2 + 2\\sqrt[3]{3x+2} + 4}{(\\sqrt[3]{3x+2})^2 + 2\\sqrt[3]{3x+2} + 4}"
      },
      {
        description: "Al elevar al cuadrado anulamos el numerador que va con los parentesis y liberamos la base radical.",
        math: "\\lim_{x \\to 2} \\frac{3x+2 - 8}{(x-2)(\\dots)} = \\lim_{x \\to 2} \\frac{3x - 6}{(x-2)((\\sqrt[3]{3x+2})^2 + 2\\sqrt[3]{3x+2} + 4)}"
      },
      {
        description: "Factorizamos la cuota del numerador separando el cociente y calculamos anulando variables dominantes idénticas.",
        math: "\\lim_{x \\to 2} \\frac{3(x-2)}{(x-2)((\\sqrt[3]{3x+2})^2 + 2\\sqrt[3]{3x+2} + 4)} = \\frac{3}{4 + 4 + 4} = \\frac{3}{12} = \\frac{1}{4}"
      }
    ],
    result: "\\frac{1}{4}"
  },
  {
    id: 30,
    expression: "\\lim_{x \\to \\infty} \\left( \\frac{2x^2+1}{2x^2+3} \\right)^{x^2+2}",
    steps: [
      {
        description: "Esta base límite convergera hacia los coeficientes $1$, con exponente infinito da lugar al caso $1^{\\infty}$. Planteamos entonces el axioma de neper convergente local.",
        math: "L = e^{\\lim_{x \\to \\infty} (x^2+2) \\left( \\frac{2x^2+1}{2x^2+3} - 1 \\right)}"
      },
      {
        description: "Resolvemos la fracción de suma y resta.",
        math: "e^{\\lim_{x \\to \\infty} (x^2+2) \\left( \\frac{2x^2+1 - 2x^2 - 3}{2x^2+3} \\right)} = e^{\\lim_{x \\to \\infty} (x^2+2) \\left( \\frac{-2}{2x^2+3} \\right)}"
      },
      {
        description: "Multiplicamos para reunir el término como cociente individual simple.",
        math: "e^{\\lim_{x \\to \\infty} \\frac{-2x^2 - 4}{2x^2+3}}"
      },
      {
        description: "Calculando la variable polinómica dividiendo los coeficientes de ambas bases iguales ($x^2$).",
        math: "e^{-2 / 2} = e^{-1} = \\frac{1}{e}"
      }
    ],
    result: "e^{-1}"
  },
  {
    id: 31,
    expression: "\\lim_{x \\to 0} \\frac{\\sqrt{x^2+4}-2}{\\sqrt{x^2+9}-3}",
    steps: [
      {
        description: "Evaluación expone indeterminación simétrica $0/0$. Debemos aplicar entonces la doble racionalización binomial para numerador y denominador simultáneamente.",
        math: "\\lim_{x \\to 0} \\frac{\\sqrt{x^2+4}-2}{\\sqrt{x^2+9}-3} \\cdot \\frac{\\sqrt{x^2+4}+2}{\\sqrt{x^2+4}+2} \\cdot \\frac{\\sqrt{x^2+9}+3}{\\sqrt{x^2+9}+3}"
      },
      {
        description: "Aplicamos diferencia de cuadrados exactos en numerador (desapareciendo cuota menor) y también en denominador, sin expandir lo demás.",
        math: "\\lim_{x \\to 0} \\frac{(x^2+4 - 4)(\\sqrt{x^2+9}+3)}{(x^2+9 - 9)(\\sqrt{x^2+4}+2)}"
      },
      {
        description: "Simplificamos reduciendo la adicción a $x^2$ y cancelando la variable predominante en cruz.",
        math: "\\lim_{x \\to 0} \\frac{x^2(\\sqrt{x^2+9}+3)}{x^2(\\sqrt{x^2+4}+2)} = \\lim_{x \\to 0} \\frac{\\sqrt{x^2+9}+3}{\\sqrt{x^2+4}+2}"
      },
      {
        description: "Hacemos una sustitución directa determinística resolviendo en bases normales evaluando $x=0$.",
        math: "\\frac{\\sqrt{9}+3}{\\sqrt{4}+2} = \\frac{3+3}{2+2} = \\frac{6}{4} = \\frac{3}{2}"
      }
    ],
    result: "\\frac{3}{2}"
  },
  {
    id: 32,
    expression: "\\lim_{x \\to \\pi/3} \\frac{1 - 2\\cos x}{\\pi - 3x}",
    steps: [
      {
        description: "En $x=\\pi/3$, $\\cos(\\pi/3)=1/2$, lo que produce estado indeterminado $0/0$. Imponemos el cambio de vector temporal posicional asumiendo $u = x - \\pi/3$. Si $x \\to \\pi/3$, conllevando a $u \\to 0$. Por lo tanto, $x = u + \\pi/3$.",
        math: "\\lim_{u \\to 0} \\frac{1 - 2\\cos(u + \\pi/3)}{\\pi - 3(u + \\pi/3)}"
      },
      {
        description: "Desenvolvemos el denominador.",
        math: "\\pi - 3u - 3(\\pi/3) = \\pi - 3u - \\pi = -3u"
      },
      {
        description: "Aplicamos la superposición del teorema e identidad tridimensional para coseno de la sumatoria: $\\cos(\\alpha+\\beta) = \\cos\\alpha \\cos\\beta - \\sin\\alpha \\sin\\beta$.",
        math: "\\lim_{u \\to 0} \\frac{1 - 2\\left( \\cos u \\cdot \\frac{1}{2} - \\sin u \\cdot \\frac{\\sqrt{3}}{2} \\right)}{-3u}"
      },
      {
        description: "Reacomodando y anulando la multiplicación coeficiente con un dos externo.",
        math: "\\lim_{u \\to 0} \\frac{1 - \\cos u + \\sqrt{3}\\sin u}{-3u}"
      },
      {
        description: "Deshacemos en fraccionabilidad dual y calculamos por separación aprovechando postulados y axiomas trigonométricos especiales elementales: $\\frac{1-\\cos u}{u} \\to 0$ y $\\frac{\\sin u}{u} \\to 1$.",
        math: "\\lim_{u \\to 0} \\frac{1 - \\cos u}{-3u} + \\lim_{u \\to 0} \\frac{\\sqrt{3}\\sin u}{-3u} = 0 + \\frac{\\sqrt{3}(1)}{-3} = -\\frac{\\sqrt{3}}{3}"
      }
    ],
    result: "-\\frac{\\sqrt{3}}{3}"
  },
  {
    id: 33,
    expression: "\\lim_{x \\to 0} \\left( \\frac{3+x}{3-x} \\right)^{1/x}",
    steps: [
      {
        description: "Iniciado por la base de convergencia determinamos la equivalencia $1^{\\infty}$. Adaptando el procedimiento logarítmico:",
        math: "e^{\\lim_{x \\to 0} \\frac{1}{x} \\left( \\frac{3+x}{3-x} - 1 \\right)}"
      },
      {
        description: "Simplificamos la reducción en un cociente general.",
        math: "e^{\\lim_{x \\to 0} \\frac{1}{x} \\left( \\frac{3+x - (3-x)}{3-x} \\right)} = e^{\\lim_{x \\to 0} \\frac{1}{x} \\left( \\frac{2x}{3-x} \\right)}"
      },
      {
        description: "Al factor común lo despejamos reduciendo por cancelamiento con el dividendo externo.",
        math: "e^{\\lim_{x \\to 0} \\frac{2}{3-x}}"
      },
      {
        description: "Proceso por valoración en cero.",
        math: "e^{2/3}"
      }
    ],
    result: "e^{2/3}"
  },
  {
    id: 34,
    expression: "\\lim_{x \\to a} \\frac{\\sqrt{x-b} - \\sqrt{a-b}}{x^2 - a^2}",
    steps: [
      {
        description: "Analizamos caso $0/0$. Aplicamos el multiplicador resolutivo del radical (conjugado) en función del numerador extendido hacia el denominador.",
        math: "\\lim_{x \\to a} \\frac{\\sqrt{x-b} - \\sqrt{a-b}}{x^2 - a^2} \\cdot \\frac{\\sqrt{x-b} + \\sqrt{a-b}}{\\sqrt{x-b} + \\sqrt{a-b}}"
      },
      {
        description: "Al desarrollar los términos binomiales en el cuadrante superior determinamos la diferencia subyacente.",
        math: "\\lim_{x \\to a} \\frac{x-b - (a-b)}{(x^2-a^2)(\\sqrt{x-b} + \\sqrt{a-b})} = \\lim_{x \\to a} \\frac{x - a}{(x-a)(x+a)(\\dots)}"
      },
      {
        description: "Como notamos una base anulable compartida ($x-a$) tanto en numerador como denominador, la simplificamos para eliminar la base indeterminada.",
        math: "\\lim_{x \\to a} \\frac{1}{(x+a)(\\sqrt{x-b} + \\sqrt{a-b})}"
      },
      {
        description: "Sabiendo que existe libertad sustitutiva, evaluamos reemplazando.",
        math: "\\frac{1}{(a+a)(\\sqrt{a-b} + \\sqrt{a-b})} = \\frac{1}{(2a)(2\\sqrt{a-b})} = \\frac{1}{4a\\sqrt{a-b}}"
      }
    ],
    result: "\\frac{1}{4a\\sqrt{a-b}}"
  },
  {
    id: 35,
    expression: "\\lim_{x \\to 0} x^2 \\sin\\left(\\frac{1}{x}\\right)",
    steps: [
      {
        description: "La evaluación directa produce una indefinición ya que el seno oscila infinitamente cerca de 0. Utilizamos el Teorema del Sándwich (o del encaje). Sabemos que el seno siempre está acotado.",
        math: "-1 \\leq \\sin\\left(\\frac{1}{x}\\right) \\leq 1"
      },
      {
        description: "Multiplicamos la inecuación completa por $x^2$. Al ser siempre $x^2 \\geq 0$, el sentido de las desigualdades se mantiene inalterado.",
        math: "-x^2 \\leq x^2 \\sin\\left(\\frac{1}{x}\\right) \\leq x^2"
      },
      {
        description: "Calculamos el límite en los extremos de la inecuación cuando $x$ tiende a 0.",
        math: "\\lim_{x \\to 0} (-x^2) = 0 \\quad \\text{y} \\quad \\lim_{x \\to 0} (x^2) = 0"
      },
      {
        description: "Dado que las dos funciones que acotan tienden a 0, por el Teorema del Sándwich, la función central obligatoriamente tiene el mismo límite.",
        math: "\\lim_{x \\to 0} x^2 \\sin\\left(\\frac{1}{x}\\right) = 0"
      }
    ],
    result: "0"
  },
  {
    id: 36,
    expression: "\\lim_{x \\to 0} \\frac{e^{5x} - 1}{x}",
    steps: [
      {
        description: "Al evaluar directamente obtenemos la indeterminación $0/0$. Identificamos el uso de un Límite Notable exponencial.",
        math: "\\lim_{u \\to 0} \\frac{e^u - 1}{u} = 1"
      },
      {
        description: "Para aplicar el límite notable, requerimos que el argumento en el denominador sea idéntico al exponente ($5x$). Multiplicamos y dividimos la expresión por 5.",
        math: "\\lim_{x \\to 0} \\frac{e^{5x} - 1}{x} \\cdot \\frac{5}{5} = \\lim_{x \\to 0} 5 \\left( \\frac{e^{5x} - 1}{5x} \\right)"
      },
      {
        description: "Consideramos un cambio de variable $u = 5x$. Ya que $x \\to 0$, consecuentemente $u \\to 0$.",
        math: "5 \\cdot \\lim_{u \\to 0} \\frac{e^u - 1}{u}"
      },
      {
        description: "Sustituimos el valor del límite notable (que es 1) y operamos la constante externa.",
        math: "5 \\cdot 1 = 5"
      }
    ],
    result: "5"
  }
];
