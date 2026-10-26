export const EVAL_EXAM_SETS3 = [
  {
    setId: "set-pdf3-1",
    setName: "General Evaluation Set 41 (Quadratic Equations)",
    questions: [
      {
        id: "p3-1",
        question: "The roots of the quadratic equation are $1/3$ and $3/2$. What is the equation?",
        options: ["a) 6x^2 + 5x + 3 = 0", "b) 6x^2 - 7x - 3 = 0", "c) 6x^2 + 7x - 3 = 0", "d) 6x^2 + 7x + 3 = 0"],
        answer: "b) 6x^2 - 7x - 3 = 0",
        solution: "$(x - 1/3)(x - 3/2) = 0 \\rightarrow (3x - 1)(2x - 3) = 0 \\rightarrow 6x^2 - 9x - 2x + 3 = 0 \\rightarrow 6x^2 - 7x - 3 = 0$[cite: 40]."
      },
      {
        id: "p3-2",
        question: "Mr. PME covered a distance of 55 km in 4 hours by driving his car at 40 kph part of the way, and walking the remainder at 5 kph. What part of the total distance did he go by car?",
        options: ["a) 7/11", "b) 8/11", "c) 9/11", "d) 10/11"],
        answer: "b) 8/11",
        solution: "Let $t_1$ be car time and $t_2$ be walking time: $t_1 + t_2 = 4$ and $40t_1 + 5t_2 = 55$. Solving yields $t_1 = 1$ hour. Car distance $= 40(1) = 40~km$. Fraction $= 40/55 = 8/11$[cite: 40]."
      },
      {
        id: "p3-3",
        question: "The water tank can be filled by pipe A in half the time pipe B can empty it. Operating together, the tank fills in 1 hour 12 minutes. Find time for pipe A to fill alone.",
        options: ["a) 0.6", "b) 0.7", "c) 0.75", "d) 0.8"],
        answer: "a) 0.6",
        solution: "Let pipe A fill time be $x$ hrs and pipe B empty time be $2x$ hrs. Net rate: $\\frac{1}{x} - \\frac{1}{2x} = \\frac{1}{1.2} \\rightarrow \\frac{1}{2x} = \\frac{1}{1.2} \\rightarrow 2x = 1.2 \\rightarrow x = 0.6$ hours[cite: 40]."
      },
      {
        id: "p3-4",
        question: "What is the value of $k$ to make the expression $kx^2 - 3kx + 9$ a perfect square?",
        options: ["a) 2", "b) 4", "c) 3", "d) 5"],
        answer: "b) 4",
        solution: "$B^2 = 4AC \\rightarrow (-3k)^2 = 4(k)(9) \\rightarrow 9k^2 = 36k \\rightarrow k = 4$[cite: 40]."
      },
      {
        id: "p3-5",
        question: "Which of the following is the standard acceleration due to gravity in the English unit?",
        options: ["a) 980.66 fps²", "b) 32.2 fps²", "c) 9.8066 fps²", "d) 32.2 ips²"],
        answer: "b) 32.2 fps²",
        solution: "Standard acceleration due to gravity in English engineering units is $32.2~ft/s^2$[cite: 40]."
      }
    ]
  },
  {
    setId: "set-pdf3-2",
    setName: "General Evaluation Set 42 (Limits & Calculus)",
    questions: [
      {
        id: "p3-6",
        question: "What is the value of $\\lim_{x \\to \\infty} \\frac{x^2 - 1}{x^3 - 1}$?",
        options: ["a) 0", "b) 0.25", "c) 1.25", "d) Indeterminate"],
        answer: "a) 0",
        solution: "Dividing all terms by $x^3$ yields a limit of 0[cite: 40]."
      },
      {
        id: "p3-7",
        question: "Two times a mother's age is 8 more than six times her daughter's age. Ten years ago, the sum of their ages was 44. Find daughter's age.",
        options: ["a) 15 yrs old", "b) 18 yrs old", "c) 12 yrs old", "d) 16 yrs old"],
        answer: "a) 15 yrs old",
        solution: "$2y = 6x + 8 \\rightarrow y = 3x + 4$ and $(x-10) + (y-10) = 44 \\rightarrow 4x = 60 \\rightarrow x = 15$[cite: 40]."
      },
      {
        id: "p3-8",
        question: "How many terms of the sequence $-9, -6, -3, \\dots$ must be taken so that the sum is 66?",
        options: ["a) 11", "b) 6", "c) 4", "d) 9"],
        answer: "a) 11",
        solution: "$S_n = \\frac{n}{2}[2(-9) + (n-1)(3)] = 66 \\rightarrow 3n^2 - 21n - 132 = 0 \\rightarrow n = 11$[cite: 40]."
      },
      {
        id: "p3-9",
        question: "A farmer plants rice in a rectangular field 30 m by 40 m around the perimeter. How wide a strip should he plant on each side to do half the work?",
        options: ["a) 5 m", "b) 2.5 m", "c) 3 m", "d) 5.5 m"],
        answer: "a) 5 m",
        solution: "Unplanted inner area $= 0.5(30 \\times 40) = 600$. $(30 - 2x)(40 - 2x) = 600 \\rightarrow 4x^2 - 140x + 600 = 0 \\rightarrow x = 5$ m[cite: 40]."
      },
      {
        id: "p3-10",
        question: "There are 6 geometric means between 4 and 8748. Find the sum of all terms.",
        options: ["a) 12 310", "b) 12 130", "c) 13 210", "d) 13 120"],
        answer: "d) 13 120",
        solution: "Common ratio $r = (8748/4)^{1/7} = 3$. Sum $S = \\frac{4(3^8 - 1)}{3 - 1} = 13,120$[cite: 40]."
      }
    ]
  },
  {
    setId: "set-pdf3-3",
    setName: "General Evaluation Set 43 (Statistics & Averages)",
    questions: [
      {
        id: "p3-11",
        question: "Compute the arithmetic mean of the set of numbers: 18, 24, 27, 30, 35, 42, 50.",
        options: ["a) 31.82", "b) 32.29", "c) 30", "d) 29.96"],
        answer: "b) 32.29",
        solution: "Mean $= (18 + 24 + 27 + 30 + 35 + 42 + 50) / 7 = 32.29$[cite: 40]."
      },
      {
        id: "p3-12",
        question: "Find the root mean square (RMS) of 11, 23, and 35.",
        options: ["a) 25", "b) 27", "c) 26", "d) 24"],
        answer: "a) 25",
        solution: "RMS $= \\sqrt{(11^2 + 23^2 + 35^2)/3} = \\sqrt{(121 + 529 + 1225)/3} = \\sqrt{625} = 25$[cite: 40]."
      },
      {
        id: "p3-13",
        question: "Water is pouring into a pool. After $t$ hours, volume is $t + \\sqrt{t}$ gallons. At what rate in GPM is water pouring when $t = 9$ hours?",
        options: ["a) 0.0194", "b) 1.167", "c) 1.235", "d) 3.6"],
        answer: "a) 0.0194",
        solution: "$\n\\frac{dV}{dt} = 1 + \\frac{1}{2\\sqrt{t}} = 1 + \\frac{1}{6} = 1.1667 \\text{ gal/hr} = \\frac{1.1667}{60} = 0.01944 \\text{ GPM}$[cite: 40]."
      },
      {
        id: "p3-14",
        question: "Determine distance traveled between $t = 0.2$ s to $0.3$ s if velocity is $V = 12t^4 + 7/t$ cm/s.",
        options: ["a) 3.75 cm", "b) 2.84 cm", "c) 2.75 cm", "d) 3.84 cm"],
        answer: "b) 2.84 cm",
        solution: "$S = \\int_{0.2}^{0.3} (12t^4 + 7/t) dt = [2.4t^5 + 7\\ln t]_{0.2}^{0.3} = 2.84$ cm[cite: 40]."
      },
      {
        id: "p3-15",
        question: "A pole casts a shadow 15 m long when sun elevation is 61°. If the pole leans 15° from vertical toward the sun, find pole length.",
        options: ["a) 54.23 m", "b) 48.64 m", "c) 36.84 m", "d) 64.84 m"],
        answer: "a) 54.23 m",
        solution: "Using Law of Sines on triangle with angles 61°, 105°, and 14°: $\\frac{L}{\\sin 61^{\\circ}} = \\frac{15}{\\sin 14^{\\circ}} \\rightarrow L = 54.23$ m[cite: 40, 41]."
      }
    ]
  },
  {
    setId: "set-pdf3-4",
    setName: "General Evaluation Set 44 (Related Rates & Geometry)",
    questions: [
      {
        id: "p3-16",
        question: "Volume of a cube increases at $5~m^3/min$. Determine rate of surface area increase when side length is 10 m.",
        options: ["a) 2", "b) 1.75", "c) 1.5", "d) 2.25"],
        answer: "a) 2",
        solution: "$\\frac{dA}{dt} = \\frac{4}{x} \\frac{dV}{dt} = \\frac{4}{10}(5) = 2~m^2/min$[cite: 41]."
      },
      {
        id: "p3-17",
        question: "What is the supplement of an angle whose complement is 62°?",
        options: ["a) 152°", "b) 118°", "c) 28°", "d) 60°"],
        answer: "a) 152°",
        solution: "Angle $= 90^{\\circ} - 62^{\\circ} = 28^{\\circ}$. Supplement $= 180^{\\circ} - 28^{\\circ} = 152^{\\circ}$[cite: 41]."
      },
      {
        id: "p3-18",
        question: "A certain angle has a supplement five times its complement. What is the angle?",
        options: ["a) 186°", "b) 168.5°", "c) 67.5°", "d) 157.5°"],
        answer: "c) 67.5°",
        solution: "$180 - x = 5(90 - x) \\rightarrow 180 - x = 450 - 5x \\rightarrow 4x = 270 \\rightarrow x = 67.5^{\\circ}$[cite: 41]."
      },
      {
        id: "p3-19",
        question: "Determine accumulated value of P2,000 in 5 years invested at 11% compounded quarterly.",
        options: ["a) P3,440.00", "b) P3,404.00", "c) P3,044.00", "d) P4,304.00"],
        answer: "a) P3,440.00",
        solution: "$F = 2000(1 + 0.11/4)^{20} = \\text{P3,440.00}$[cite: 41]."
      },
      {
        id: "p3-20",
        question: "P15,000 deposited at 4% per annum compounded quarterly becomes P18,302.85. Determine effective annual interest rate.",
        options: ["a) 3.06%", "b) 4.06%", "c) 5.06%", "d) 6.06%"],
        answer: "b) 4.06%",
        solution: "$i_e = (1 + 0.04/4)^4 - 1 = 4.06\\%$[cite: 41]."
      }
    ]
  },
  {
    setId: "set-pdf3-5",
    setName: "General Evaluation Set 45 (Engineering Economy & Interest)",
    questions: [
      {
        id: "p3-21",
        question: "What is the effective rate equivalent of 12% compounded quarterly?",
        options: ["a) 12.55%", "b) 11.55%", "c) 12.98%", "d) 13%"],
        answer: "a) 12.55%",
        solution: "$i_e = (1 + 0.12/4)^4 - 1 = 12.55\\%$[cite: 41]."
      },
      {
        id: "p3-22",
        question: "Celestino owes P500 due in 3 yrs and P800 due in 7 yrs. Find single payment on 6th year at 14% compounded semi-annually.",
        options: ["a) P1,449.12", "b) P1,559.12", "c) P1,339.12", "d) P1,669.12"],
        answer: "a) P1,449.12",
        solution: "$F_6 = 500(1.07)^6 + 800(1.07)^{-2} = 750.37 + 698.75 = \\text{P1,449.12}$[cite: 41]."
      },
      {
        id: "p3-23",
        question: "Cleofas borrowed P2,000 from a bank for one year. The bank discounted the loan and gave P1,950 cash. Determine rate of discount.",
        options: ["a) 3.75%", "b) 3.12%", "c) 2.5%", "d) 1.2%"],
        answer: "c) 2.5%",
        solution: "$d = (2000 - 1950)/2000 = 2.5\\%$[cite: 41]."
      },
      {
        id: "p3-24",
        question: "From top of tower A, elevation of top of tower B is 46°. From foot of tower B, elevation of top of tower A is 28°. If tower B is 120 m high, find height of tower A.",
        options: ["a) 40.7 m", "b) 44.1 m", "c) 42.3 m", "d) 38.6 m"],
        answer: "a) 40.7 m",
        solution: "CD $= 120(\\sin 44^{\\circ}/\\sin 74^{\\circ}) = 86.72~m$. $h = 86.72 \\sin 28^{\\circ} = 40.7~m$[cite: 41]."
      },
      {
        id: "p3-25",
        question: "Determine the value of $\\int_{-1}^{1} (x^3 + x^5 + \\sin x) dx$.",
        options: ["a) 0", "b) 1.75", "c) 3.1416", "d) infinity"],
        answer: "a) 0",
        solution: "Symmetric integral of odd functions equals zero[cite: 41]."
      }
    ]
  },
  {
    setId: "set-pdf3-6",
    setName: "General Evaluation Set 46 (Algebra & Word Problems)",
    questions: [
      {
        id: "p3-26",
        question: "Think of a number. Double it, subtract 6, divide by 2. The quotient is 20. What is the number?",
        options: ["a) 12", "b) 20", "c) 23", "d) 32"],
        answer: "c) 23",
        solution: "$(2x - 6)/2 = 20 \\rightarrow 2x - 6 = 40 \\rightarrow x = 23$[cite: 41]."
      },
      {
        id: "p3-27",
        question: "Determine magnitude of resultant vector: $F_1 = 4i+7j+6k$, $F_2 = 9i+2j+11k$, $F_3 = 5i-3j-8k$.",
        options: ["a) 21", "b) 18", "c) 25", "d) 9"],
        answer: "a) 21",
        solution: "$R = 18i + 6j + 9k$. Magnitude $= \\sqrt{18^2 + 6^2 + 9^2} = 21$[cite: 41]."
      },
      {
        id: "p3-28",
        question: "Find voltage drop to move 2 C of charge requiring -30 Joules of energy.",
        options: ["a) -15 V", "b) +15 V", "c) -5 V", "d) +5 V"],
        answer: "a) -15 V",
        solution: "$V = -30 / 2 = -15~V$[cite: 41]."
      },
      {
        id: "p3-29",
        question: "If $z = \\sqrt{1 - \\sqrt{1 - \\sqrt{1 - \\dots}}}$, find $z$.",
        options: ["a) 0.453", "b) 0.618", "c) 0.816", "d) 0.681"],
        answer: "b) 0.618",
        solution: "$z^2 + z - 1 = 0 \\rightarrow z = 0.618$[cite: 41]."
      },
      {
        id: "p3-30",
        question: "Solve for $x$ from infinite power tower equation: $x^{x^{x^{\\dots}}} = 10$.",
        options: ["a) 1.258925", "b) 1.892525", "c) 1.85925", "d) 1.528925"],
        answer: "a) 1.258925",
        solution: "$x^{10} = 10 \\rightarrow x = 10^{1/10} = 1.258925$[cite: 41]."
      }
    ]
  },
  {
    setId: "set-pdf3-7",
    setName: "General Evaluation Set 47 (Mixtures & Concentration)",
    questions: [
      {
        id: "p3-31",
        question: "A 100-kg salt solution (4% salt) is boiled until concentration is 5% salt. How much water is evaporated?",
        options: ["a) 20", "b) 25", "c) 15", "d) 22.5"],
        answer: "a) 20",
        solution: "$0.04(100) = 0.05(100 - x) \\rightarrow x = 20~kg$[cite: 41]."
      },
      {
        id: "p3-32",
        question: "Determine diameter of circle $x^2 + y^2 - 6x + 4y - 12 = 0$.",
        options: ["a) 9 units", "b) 11 units", "c) 12 units", "d) 10 units"],
        answer: "d) 10 units",
        solution: "$(x-3)^2 + (y+2)^2 = 25 \\rightarrow r = 5 \\rightarrow d = 10$ units[cite: 41]."
      },
      {
        id: "p3-33",
        question: "What is the minimum point of $y = x + 1/x$?",
        options: ["a) (1, 2)", "b) (1.5, 2)", "c) (1, 1.5)", "d) (2, 1)"],
        answer: "a) (1, 2)",
        solution: "$y' = 1 - 1/x^2 = 0 \\rightarrow x = 1, y = 2$[cite: 41]."
      },
      {
        id: "p3-34",
        question: "A driver leaves Sta. Rosa at 6:15 PM and arrives in Lopez at 11:45 PM averaging 50 kph with 1 hr dinner stop. Find distance.",
        options: ["a) 225 km", "b) 522 km", "c) 252 km", "d) 215 km"],
        answer: "a) 225 km",
        solution: "Distance $= 50 \\times 4.5 = 225~km$[cite: 42]."
      },
      {
        id: "p3-35",
        question: "If $x$ varies directly as $y$ and inversely as $z$, and $x = 14$ when $y = 7, z = 2$, find $x$ when $z = 4, y = 16$.",
        options: ["a) 12", "b) 18", "c) 14", "d) 16"],
        answer: "d) 16",
        solution: "$k = 14(2)/7 = 4 \\rightarrow x = 4(16)/4 = 16$[cite: 42]."
      }
    ]
  },
  {
    setId: "set-pdf3-8",
    setName: "General Evaluation Set 48 (Complex Numbers)",
    questions: [
      {
        id: "p3-36",
        question: "Determine absolute value of complex number $3 + 4i$.",
        options: ["a) 4", "b) 5", "c) 8", "d) 6"],
        answer: "b) 5",
        solution: "$r = \\sqrt{3^2 + 4^2} = 5$[cite: 42]."
      },
      {
        id: "p3-37",
        question: "Simplify $i^{1997} + i^{1999}$ where $i$ is imaginary unit.",
        options: ["a) 0", "b) i", "c) 1 + i", "d) 1 - i"],
        answer: "a) 0",
        solution: "$i^{1997} + i^{1999} = i - i = 0$[cite: 42]."
      },
      {
        id: "p3-38",
        question: "If vector A is 10 units and vector B (60° from A) is 20 units, what is difference vector $A - B$?",
        options: ["a) 15.34 units", "b) 13.45 units", "c) 18.76 units", "d) 17.32 units"],
        answer: "d) 17.32 units",
        solution: "$|A - B| = \\sqrt{10^2 + 20^2 - 2(10)(20)\\cos 60^{\\circ}} = \\sqrt{300} = 17.32$ units[cite: 42]."
      },
      {
        id: "p3-39",
        question: "A ball is dropped from a height of 60 meters above ground. How long does it take to hit the ground?",
        options: ["a) 4.5 seconds", "b) 3.5 seconds", "c) 2.5 seconds", "d) 1.5 seconds"],
        answer: "b) 3.5 seconds",
        solution: "$t = \\sqrt{2(60)/9.81} = 3.5$ seconds[cite: 42]."
      },
      {
        id: "p3-40",
        question: "A change in position specified by a length and a direction is:",
        options: ["a) Displacement", "b) Acceleration", "c) Velocity", "d) Dynamic equilibrium"],
        answer: "a) Displacement",
        solution: "Displacement is a vector quantity defined by length and direction[cite: 42]."
      }
    ]
  },
  {
    setId: "set-pdf3-9",
    setName: "General Evaluation Set 49 (Chemistry & Material Science)",
    questions: [
      {
        id: "p3-41",
        question: "The process of one substance mixing with another because of molecular motion is:",
        options: ["a) Adhesion", "b) Diffusion", "c) Cohesion", "d) Confusion"],
        answer: "b) Diffusion",
        solution: "Diffusion is molecular mixing driven by random thermal movement[cite: 42]."
      },
      {
        id: "p3-42",
        question: "Costs that arise as a result of a change in operations or policy, or ratio of small increment cost to small increment output:",
        options: ["a) Increment cost", "b) Differential cost", "c) Marginal cost", "d) Promotion cost"],
        answer: "c) Marginal cost",
        solution: "Marginal cost measures incremental change in total production cost[cite: 42]."
      },
      {
        id: "p3-43",
        question: "Sum of all costs incurred by originators of project up to time promoters accept project is:",
        options: ["a) Development cost", "b) Marginal cost", "c) Construction cost", "d) Promotion cost"],
        answer: "d) Promotion cost",
        solution: "Promotion cost encompasses initial organization and promotional fees[cite: 42]."
      },
      {
        id: "p3-44",
        question: "Between 3 and 4 o'clock, in 20 minutes minute hand will be as much ahead of hour hand as it is now behind it. Time now?",
        options: ["a) 3:06.36", "b) 3:03.66", "c) 3:36.06", "d) 3:30.66"],
        answer: "a) 3:06.36",
        solution: "Solving clock angle equation yields $x = 6.36$ minutes, so 3:06.36[cite: 42]."
      },
      {
        id: "p3-45",
        question: "What is the acid test ratio?",
        options: [
          "a) Ratio of owner's equity to current liabilities",
          "b) Ratio of all assets to actual current liabilities",
          "c) Ratio of current assets (exclusive of inventory) to total current liabilities",
          "d) Ratio of gross margin to operating expenses"
        ],
        answer: "c) Ratio of current assets (exclusive of inventory) to total current liabilities",
        solution: "Acid test ratio $= (\\text{Current Assets} - \\text{Inventory}) / \\text{Current Liabilities}$[cite: 42]."
      }
    ]
  },
  {
    setId: "set-pdf3-10",
    setName: "General Evaluation Set 50 (Geometry & Polygons)",
    questions: [
      {
        id: "p3-63",
        question: "A polygon with ten sides is said to be:",
        options: ["a) Dodecagon", "b) Decagon", "c) Decahedron", "d) Dodecahedron"],
        answer: "b) Decagon",
        solution: "A decagon is a 10-sided polygon[cite: 43]."
      },
      {
        id: "p3-64",
        question: "Any number expressed in place-value notation with base 12 is known as:",
        options: ["a) Duodecimal", "b) Deontic", "c) Decile", "d) Dedekind"],
        answer: "a) Duodecimal",
        solution: "Base-12 positional notation is called duodecimal[cite: 43]."
      },
      {
        id: "p3-65",
        question: "Which of the following is true regarding minimum attractive rate of return (MARR) in proposed investments?",
        options: [
          "a) It is much smaller than discount rate",
          "b) It is frequently a policy decision made by management",
          "c) It is larger than discount rate",
          "d) It is not relevant in economy studies"
        ],
        answer: "b) It is frequently a policy decision made by management",
        solution: "MARR is an organizational policy benchmark set by management[cite: 43]."
      },
      {
        id: "p3-66",
        question: "Which situation has a conventional cash flow so that IRR can be safely calculated?",
        options: [
          "a) Mining project with land reclamation at end",
          "b) You invest in safe dividend stock and receive annual dividends",
          "c) You lease a car and pay monthly",
          "d) Heavy initial investment with major reinvestment after 2 years"
        ],
        answer: "b) You invest in safe dividend stock and receive annual dividends",
        solution: "Initial negative outflow followed strictly by positive inflows represents conventional cash flow[cite: 43]."
      },
      {
        id: "p3-67",
        question: "Which of the following is NOT an assumption of basic EOQ model with no shortages?",
        options: [
          "a) Reordering done when inventory is zero",
          "b) There is an upper bound on quantity ordered",
          "c) Entire reorder quantity delivered instantaneously",
          "d) Demand rate is uniform and constant"
        ],
        answer: "b) There is an upper bound on quantity ordered",
        solution: "Basic EOQ assumes no constraint limit on order size[cite: 43]."
      }
    ]
  },
  {
    setId: "set-pdf3-11",
    setName: "General Evaluation Set 51 (Inventory & Engineering Economy)",
    questions: [
      {
        id: "p3-68",
        question: "Which event will cause optimal lot size in classic EOQ model to increase?",
        options: ["a) Decrease in carrying cost", "b) Decrease in demand", "c) Increase in demand", "d) a or c above"],
        answer: "d) a or c above",
        solution: "$\n\\text{EOQ} = \\sqrt{2aK/h}$. Lower $h$ or higher $a$ increases EOQ[cite: 43]."
      },
      {
        id: "p3-69",
        question: "What is a borrower almost always required to do during loan repayment?",
        options: [
          "a) Pay same principal amount each payment",
          "b) Repay loan over agreed-upon amount of time",
          "c) Pay same interest amount each payment",
          "d) Pay interest only on failure"
        ],
        answer: "b) Repay loan over agreed-upon amount of time",
        solution: "Loan agreements require repayment within a designated term[cite: 43]."
      },
      {
        id: "p3-70",
        question: "How do you classify work-in-process in accounting?",
        options: ["a) A liability", "b) An expense", "c) A revenue", "d) An asset"],
        answer: "d) An asset",
        solution: "Work-in-process is a current asset inventory account[cite: 43, 44]."
      },
      {
        id: "p3-71",
        question: "What is Indirect Product Cost (IPC) spending variance?",
        options: [
          "a) IPC volume adjusted budget minus total IPC absorbed",
          "b) IPC volume adjusted budget",
          "c) Difference between actual IPC and IPC volume adjusted budget",
          "d) Difference between actual IPC and IPC absorbed"
        ],
        answer: "c) Difference between actual IPC and IPC volume adjusted budget",
        solution: "Spending variance = Actual IPC - Volume-adjusted budget[cite: 44]."
      },
      {
        id: "p3-72",
        question: "Which of the following does NOT affect owner's equity?",
        options: ["a) License expense", "b) Capital gain", "c) License to start business", "d) Dividends paid"],
        answer: "c) License to start business",
        solution: "A license document itself is an asset/operational requirement, not a direct equity component[cite: 44]."
      }
    ]
  },
  {
    setId: "set-pdf3-12",
    setName: "General Evaluation Set 52 (Engineering Economy & Depreciation)",
    questions: [
      {
        id: "p3-73",
        question: "How do you call an increase in the value of a capital asset?",
        options: ["a) Profit", "b) Capital gain", "c) Capital expenditure", "d) Capital stock"],
        answer: "b) Capital gain",
        solution: "An appreciated asset value upon realization is a capital gain[cite: 44]."
      },
      {
        id: "p3-74",
        question: "Another name for derivative is:",
        options: ["a) Differential manifold", "b) Partial derivative", "c) Differential form", "d) Differential coefficient"],
        answer: "d) Differential coefficient",
        solution: "Derivative is historically called the differential coefficient[cite: 44]."
      },
      {
        id: "p3-75",
        question: "Another term for rhombus is:",
        options: ["a) Dichotomy", "b) Diamond", "c) Cyclic quadrilateral", "d) Bi-rectangular"],
        answer: "b) Diamond",
        solution: "A rhombus is commonly termed a diamond[cite: 44]."
      },
      {
        id: "p3-76",
        question: "A polygon with twelve sides is known as:",
        options: ["a) Dodecagon", "b) Decagon", "c) Decahedron", "d) Dodecahedron"],
        answer: "a) Dodecagon",
        solution: "A 12-sided polygon is a dodecagon[cite: 44]."
      },
      {
        id: "p3-78",
        question: "The father of plane geometry:",
        options: ["a) Euclid", "b) Pythagoras", "c) Aristotle", "d) Galileo"],
        answer: "a) Euclid",
        solution: "Euclid of Alexandria is known as the father of geometry[cite: 44]."
      }
    ]
  },
  {
    setId: "set-pdf3-13",
    setName: "General Evaluation Set 53 (Strength of Materials)",
    questions: [
      {
        id: "p3-111",
        question: "Determine outside diameter of hollow steel tube carrying 500 kN tensile load at 140 MPa stress, with wall thickness $t = 0.10 D_{out}$.",
        options: ["a) 123 mm", "b) 103 mm", "c) 113 mm", "d) 93 mm"],
        answer: "c) 113 mm",
        solution: "Area $= \\pi/4 (D^2 - (0.8D)^2) = 0.09\\pi D^2$. $500,000 / (0.09\\pi D^2) = 140 \\rightarrow D = 112.5 \\approx 113$ mm[cite: 46]."
      },
      {
        id: "p3-112",
        question: "What can you say to: 'The volume of a circular cylinder is equal to product of base and altitude'?",
        options: ["a) Postulate", "b) Corollary", "c) Theorem", "d) Axiom"],
        answer: "c) Theorem",
        solution: "Proven geometric propositions are theorems[cite: 46]."
      },
      {
        id: "p3-114",
        question: "Points that lie in the same plane:",
        options: ["a) Coplanar", "b) Collinear", "c) Oblique", "d) Parallel"],
        answer: "a) Coplanar",
        solution: "Coplanar points reside in a single plane[cite: 46]."
      },
      {
        id: "p3-115",
        question: "When line $y = mx + b$ slopes downwards left to right, slope $m$ is:",
        options: ["a) Less than zero", "b) Greater than zero", "c) Equal to zero", "d) Equal to 1"],
        answer: "a) Less than zero",
        solution: "Falling lines have negative slope ($m < 0$)[cite: 46]."
      },
      {
        id: "p3-116",
        question: "Whenever net force acts on a body, it produces acceleration directly proportional to net force and inversely proportional to mass. This is:",
        options: ["a) Newton's 1st Law", "b) Newton's 2nd Law", "c) Faraday's Law", "d) Hooke's Law"],
        answer: "b) Newton's 2nd Law",
        solution: "Newton's Second Law of Motion states $F = ma$[cite: 46]."
      }
    ]
  },
  {
    setId: "set-pdf3-14",
    setName: "General Evaluation Set 54 (Dynamics & Mechanics)",
    questions: [
      {
        id: "p3-117",
        question: "Momentum is product of mass $m$ and velocity $V$. In Newton's Law, what is rate of change of momentum with respect to time?",
        options: ["a) Power", "b) Momentum", "c) Energy", "d) Force"],
        answer: "d) Force",
        solution: "$F = \\frac{dp}{dt} = m \\frac{dv}{dt} = ma$[cite: 46]."
      },
      {
        id: "p3-118",
        question: "The loss of weight of a body submerged in a fluid is:",
        options: [
          "a) Proportional to body weight",
          "b) Proportional to depth",
          "c) Equal to weight of fluid displaced",
          "d) Independent of volume"
        ],
        answer: "c) Equal to weight of fluid displaced",
        solution: "Archimedes' Principle states buoyant force equals weight of displaced fluid[cite: 46]."
      },
      {
        id: "p3-119",
        question: "Amount of company's profit board of directors decides to distribute to ordinary shareholders:",
        options: ["a) Dividend", "b) Return", "c) Share of stock", "d) Par value"],
        answer: "a) Dividend",
        solution: "Dividends represent distributed corporate profits[cite: 46]."
      },
      {
        id: "p3-121",
        question: "When a flexible cord sag freely under its own weight between two supports, what curve is formed?",
        options: ["a) Parabola", "b) Catenary", "c) Cycloid", "d) Epicycloid"],
        answer: "b) Catenary",
        solution: "A hanging flexible chain/cord forms a catenary curve[cite: 46]."
      },
      {
        id: "p3-122",
        question: "Which Commonwealth Act is known as the oldest Mechanical Engineering law in the Philippines?",
        options: ["a) CA 394", "b) CA 594", "c) CA 294", "d) CA 8394"],
        answer: "c) CA 294",
        solution: "Commonwealth Act No. 294 is the original Philippine Mechanical Engineering law[cite: 46]."
      }
    ]
  },
  {
    setId: "set-pdf3-15",
    setName: "General Evaluation Set 55 (Mechanical Engineering Law)",
    questions: [
      {
        id: "p3-124",
        question: "To be a member of the Board of Mechanical Engineering, he/she must be at least how many years old?",
        options: ["a) 25 years", "b) 30 years", "c) 35 years", "d) 40 years"],
        answer: "c) 35 years",
        solution: "Philippine ME Law requires board members to be at least 35 years old[cite: 46, 47]."
      },
      {
        id: "p3-128",
        question: "Depreciation method where a fixed sum is regularly deposited at compound interest to accumulate asset cost at end of life:",
        options: ["a) Straight line", "b) Declining balance", "c) SYD method", "d) Sinking fund method"],
        answer: "d) Sinking fund method",
        solution: "Sinking fund depreciation accumulates replacement capital via compound interest deposits[cite: 47]."
      },
      {
        id: "p3-129",
        question: "An artificial expense that spreads purchase price of an asset over a number of years:",
        options: ["a) Depreciation", "b) Amnesty", "c) Sinking fund", "d) Bond"],
        answer: "a) Depreciation",
        solution: "Depreciation allocates non-cash capital cost across useful life asset years[cite: 47]."
      },
      {
        id: "p3-130",
        question: "Interest rate specifying actual annual interest rate on principal:",
        options: ["a) Nominal rate", "b) Rate of return", "c) Exact interest rate", "d) Effective rate"],
        answer: "d) Effective rate",
        solution: "Effective rate reflects compounding yield over a full year[cite: 47]."
      },
      {
        id: "p3-133",
        question: "Sequence of numbers where succeeding term is greater than preceding term:",
        options: ["a) Dissonant series", "b) Isometric series", "c) Convergent series", "d) Divergent series"],
        answer: "d) Divergent series",
        solution: "A growing series with non-decreasing terms diverges toward infinity[cite: 47]."
      }
    ]
  },
  {
    setId: "set-pdf3-16",
    setName: "General Evaluation Set 56 (Algebra Fundamentals)",
    questions: [
      {
        id: "p3-134",
        question: "Branch of mathematics using properties of numbers and symbols/letters to represent variables and equations:",
        options: ["a) Trigonometry", "b) Algebra", "c) Geometry", "d) Calculus"],
        answer: "b) Algebra",
        solution: "Algebra generalizes arithmetic using symbolic variables[cite: 47]."
      },
      {
        id: "p3-135",
        question: "A step-by-step sequential procedure for carrying out a desired task to solve a problem:",
        options: ["a) Algorithm", "b) Hypsogram", "c) Logarithm", "d) Calculus"],
        answer: "a) Algorithm",
        solution: "An algorithm is a structured step-by-step problem-solving process[cite: 47]."
      },
      {
        id: "p3-136",
        question: "Unit of length equal to $10^{-10}$ meters used for light or UV wavelengths:",
        options: ["a) Mersenne number", "b) Midac", "c) Light year", "d) Angstrom"],
        answer: "d) Angstrom",
        solution: "1 Angstrom $(\\text{Å}) = 10^{-10}$ meters[cite: 47]."
      },
      {
        id: "p3-137",
        question: "Straight line which a curve approaches closely but never meets or touches:",
        options: ["a) Asymptote", "b) Directrix", "c) Latus rectum", "d) Line segment"],
        answer: "a) Asymptote",
        solution: "An asymptote is a limiting tangent line to a curve at infinity[cite: 47]."
      },
      {
        id: "p3-138",
        question: "Collection of numbers or letters arranged in rows and columns:",
        options: ["a) Determinant", "b) Matrix", "c) Array", "d) Equation"],
        answer: "b) Matrix",
        solution: "A matrix is a rectangular grid array of elements[cite: 47]."
      }
    ]
  },
  {
    setId: "set-pdf3-17",
    setName: "General Evaluation Set 57 (Triangle Geometry)",
    questions: [
      {
        id: "p3-140",
        question: "In any triangle, line length equal to square root of product of adjacent sides minus product of segments on 3rd side is:",
        options: ["a) Angle bisector", "b) Median", "c) Perpendicular bisector", "d) Trisector"],
        answer: "a) Angle bisector",
        solution: "Length of angle bisector $t_a = \\sqrt{bc - m n}$[cite: 47]."
      },
      {
        id: "p3-141",
        question: "'The whole is greater than any one of its parts.' This statement is known as a:",
        options: ["a) Postulate", "b) Axiom", "c) Hypothesis", "d) Theorem"],
        answer: "b) Axiom",
        solution: "Fundamental self-evident truths are axioms[cite: 47]."
      },
      {
        id: "p3-142",
        question: "Perpendicular segment from vertex of triangle to line containing opposite side:",
        options: ["a) Median", "b) Altitude", "c) Angular bisector", "d) Perpendicular bisector"],
        answer: "b) Altitude",
        solution: "An altitude drops perpendicularly from a vertex to the base line[cite: 47]."
      },
      {
        id: "p3-143",
        question: "An SI unit of area equal to 100 sq. meters:",
        options: ["a) Arc", "b) Acre", "c) Hectare", "d) Are"],
        answer: "d) Are",
        solution: "1 Are $= 100~m^2$ (1 Hectare $= 100$ Ares $= 10,000~m^2$)[cite: 47]."
      },
      {
        id: "p3-145",
        question: "In complex algebra, a diagram representing the complex plane is called:",
        options: ["a) Venn diagram", "b) Histogram", "c) Argand diagram", "d) Funicular diagram"],
        answer: "c) Argand diagram",
        solution: "Complex numbers plotted on real vs imaginary axes form an Argand diagram[cite: 48]."
      }
    ]
  },
  {
    setId: "set-pdf3-18",
    setName: "General Evaluation Set 58 (Sequences & Series)",
    questions: [
      {
        id: "p3-147",
        question: "A series where each term is derived from preceding term by adding a constant value:",
        options: ["a) Geometric sequence", "b) Arithmetic sequence", "c) Analytical sequence", "d) Differential sequence"],
        answer: "b) Arithmetic sequence",
        solution: "Arithmetic progressions add a common difference $d$ to each term[cite: 48]."
      },
      {
        id: "p3-148",
        question: "$10^{-18}$ is the value of the metric prefix:",
        options: ["a) Atto", "b) Femto", "c) Micro", "d) Pico"],
        answer: "a) Atto",
        solution: "Atto $= 10^{-18}$ (Femto $= 10^{-15}$, Pico $= 10^{-12}$)[cite: 48]."
      },
      {
        id: "p3-149",
        question: "A series of equal payments occurring at equal periods of time:",
        options: ["a) Annuity", "b) Sinking fund", "c) Cash flow", "d) Annual cost"],
        answer: "a) Annuity",
        solution: "An annuity is a uniform payment stream at regular intervals[cite: 48]."
      },
      {
        id: "p3-150",
        question: "Ratio of annual sales to average assets used in producing sales:",
        options: ["a) Inventory turnover", "b) Asset turnover", "c) Operating expense ratio", "d) Quick ratio"],
        answer: "b) Asset turnover",
        solution: "Asset turnover $= \\text{Net Sales} / \\text{Average Total Assets}$[cite: 48]."
      },
      {
        id: "p3-153",
        question: "Method of repaying a debt (principal + interest included) by a series of equal periodic payments:",
        options: ["a) Amortization", "b) Annuity", "c) Deferred annuity", "d) Preferred annuity"],
        answer: "a) Amortization",
        solution: "Amortization systematically retires debt via periodic installment payments[cite: 48]."
      }
    ]
  }
];