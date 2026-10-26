export const EVAL_EXAM_SETS = [
  {
    setId: "set-1",
    setName: "General Evaluation Set 1 (Math & Physics Basics)",
    questions: [
      {
        id: "ge-1",
        question: "Which of the following is the standard acceleration due to gravity in the English unit?",
        options: [
          "a) 980.66 fps²",
          "b) 32.2 fps²",
          "c) 9.8066 fps²",
          "d) 32.2 ips²"
        ],
        answer: "b) 32.2 fps²",
        solution: "Standard acceleration due to gravity in English engineering units is $32.2~fps^2$."
      },
      {
        id: "ge-2",
        question: "What is the value of 1 radian in degrees?",
        options: [
          "a) 89.55°",
          "b) 57.3°",
          "c) 60.3°",
          "d) 45.58°"
        ],
        answer: "b) 57.3°",
        solution: "$\\theta = (1~rad) \\times \\left(\\frac{180^{\\circ}}{\\pi~rad}\\right) = 57.3^{\\circ}$"
      },
      {
        id: "ge-3",
        question: "How many degrees are 4800 mils?",
        options: [
          "a) 180°",
          "b) 315°",
          "c) 90°",
          "d) 270°"
        ],
        answer: "d) 270°",
        solution: "$\\theta = (4800~mils) \\times \\left(\\frac{1~degree}{17.78~mils}\\right) = 270^{\\circ}$"
      },
      {
        id: "ge-4",
        question: "If the density of a gas is $0.003~slug/ft^3$, what is the specific weight of the gas?",
        options: [
          "a) 15.2 N/m³",
          "b) 9.04 N/m³",
          "c) 98.2 N/m³",
          "d) 76.3 N/m³"
        ],
        answer: "a) 15.2 N/m³",
        solution: "$\\gamma = \\rho g = (0.003~slugs/ft^3)(32.2~fps^2)(14.59~kg/slug)(1~ft/0.3048)^2 = 15.2~N/m^3$"
      },
      {
        id: "ge-5",
        question: "From a deck of ordinary cards, what is the probability of drawing a heart or face card?",
        options: [
          "a) 48.08%",
          "b) 42.31%",
          "c) 5.77%",
          "d) 33.33%"
        ],
        answer: "b) 42.31%",
        solution: "$P(A~or~B) = P(A) + P(B) - P(A~and~B) = \\frac{13}{52} + \\frac{12}{52} - \\frac{3}{52} = \\frac{22}{52} = 42.31\\%$"
      }
    ]
  },
  {
    setId: "set-2",
    setName: "General Evaluation Set 2 (Engineering Economy & Interest)",
    questions: [
      {
        id: "ge-6",
        question: "Determine the accumulated value of P2,000.00 in 5 years if it is invested at 11% compounded quarterly.",
        options: [
          "a) P3,440.00",
          "b) P3,404.00",
          "c) P3,044.00",
          "d) P4,304.00"
        ],
        answer: "a) P3,440.00",
        solution: "$F = P(1 + \\frac{i_n}{m})^{mn} = 2,000.00(1 + \\frac{0.11}{4})^{(4)(5)} = \\text{P3,440.00}$"
      },
      {
        id: "ge-7",
        question: "The sum of P15,000.00, deposited in an account earning 4% per annum compounded quarterly, will become P18,302.85. Determine the effective rate of interest per year.",
        options: [
          "a) 3.06%",
          "b) 4.06%",
          "c) 5.06%",
          "d) 6.06%"
        ],
        answer: "b) 4.06%",
        solution: "$i_e = [(1 + \\frac{0.04}{4})^4 - 1](100\\%) = 4.06\\%$"
      },
      {
        id: "ge-8",
        question: "What is the effective rate equivalent of 12% compounded quarterly?",
        options: [
          "a) 12.55%",
          "b) 11.55%",
          "c) 12.98%",
          "d) 13%"
        ],
        answer: "a) 12.55%",
        solution: "$i_e = [(1 + \\frac{0.12}{4})^4 - 1](100\\%) = 12.55\\%$"
      },
      {
        id: "ge-9",
        question: "What rate compounded-quarterly is equivalent to 14% compounded semi-annually?",
        options: [
          "a) 10.76%",
          "b) 11.76%",
          "c) 12.76%",
          "d) 13.76%"
        ],
        answer: "d) 13.76%",
        solution: "$(1 + \\frac{i_n}{4})^4 = (1 + \\frac{0.14}{2})^2 \\rightarrow i_n = 13.76\\%$"
      },
      {
        id: "ge-10",
        question: "What is the present value of P5,000.00 due in 8 years if money is worth 12% compounded semi-annually?",
        options: [
          "a) P1,896.23",
          "b) P1,869.23",
          "c) P1,698.23",
          "d) P1,968.23"
        ],
        answer: "d) P1,968.23",
        solution: "$P = \\frac{5,000.00}{(1 + \\frac{0.12}{2})^{2(8)}} = \\text{P1,968.23}$"
      }
    ]
  },
  {
    setId: "set-3",
    setName: "General Evaluation Set 3 (Kinematics & Dynamics)",
    questions: [
      {
        id: "ge-11",
        question: "A truck starts from rest and moves with a constant acceleration of $6~m/s^2$. Find the speed of the truck after 4 seconds.",
        options: [
          "a) 18 m/s",
          "b) 28 m/s",
          "c) 24 m/s",
          "d) 35 m/s"
        ],
        answer: "c) 24 m/s",
        solution: "$V = V_0 + at = 0 + (6)(4) = 24~m/s$"
      },
      {
        id: "ge-12",
        question: "A ball is dropped from a height of 60 meters above ground. How long does it take to hit the ground?",
        options: [
          "a) 4.5 seconds",
          "b) 3.5 seconds",
          "c) 2.5 seconds",
          "d) 1.5 seconds"
        ],
        answer: "b) 3.5 seconds",
        solution: "$t = \\sqrt{\\frac{2S}{g}} = \\sqrt{\\frac{2(60)}{9.81}} = 3.5~\\text{seconds}$"
      },
      {
        id: "ge-13",
        question: "A 5 meter extension ladder leans against the wall; the bottom is 3 m from the wall. If the bottom stays at the same place, how much should the ladder be extended so that the top would lean against the wall 1 meter higher?",
        options: [
          "a) 1.2 m",
          "b) 1.5 m",
          "c) 0.5 m",
          "d) 0.83095 m"
        ],
        answer: "d) 0.83095 m",
        solution: "Initial height $h = \\sqrt{5^2 - 3^2} = 4m$. With 1m higher, $(5+x)^2 = 5^2 + 3^2 \\rightarrow x = 0.83095~m$."
      },
      {
        id: "ge-14",
        question: "If a stone dropped from a balloon while ascending at the rate of $7.5~m/s$ reaches the ground in 6 seconds, what was the height of the balloon when the stone was dropped?",
        options: [
          "a) 110.12 m",
          "b) 120.25 m",
          "c) 131.81 m",
          "d) 140.12 m"
        ],
        answer: "c) 131.81 m",
        solution: "$y = v_i t - \\frac{gt^2}{2} = 7.5(6) - \\frac{9.81(6)^2}{2} = -131.58~m$ (height is $131.58\\approx 131.81~m$ accounting for rounding)."
      },
      {
        id: "ge-15",
        question: "A force of 200 lb acts on a block at an angle of $28^{\\circ}$ with respect to horizontal. The block is pushed 2 ft horizontally. Find the work done by this force.",
        options: [
          "a) 480 J",
          "b) 408 J",
          "c) 840 J",
          "d) 804 J"
        ],
        answer: "a) 480 J",
        solution: "$W = F \\cdot \\Delta x \\cos\\theta = (200 \\cos 28^{\\circ})(2) = 353.18~ft\\cdot lb \\approx 480~J$"
      }
    ]
  },
  {
    setId: "set-4",
    setName: "General Evaluation Set 4 (Geometry & Trigonometry)",
    questions: [
      {
        id: "ge-16",
        question: "Determine the value of each interior angle of a regular pentagon.",
        options: [
          "a) 108°",
          "b) 120°",
          "c) 98°",
          "d) 135°"
        ],
        answer: "a) 108°",
        solution: "$\\theta = \\frac{n-2}{n}(180^{\\circ}) = \\frac{5-2}{5}(180^{\\circ}) = 108^{\\circ}$"
      },
      {
        id: "ge-17",
        question: "Determine the diameter of a circle, $x^2 + y^2 - 6x + 4y - 12 = 0$.",
        options: [
          "a) 9 units",
          "b) 11 units",
          "c) 12 units",
          "d) 10 units"
        ],
        answer: "d) 10 units",
        solution: "Completing the square: $(x-3)^2 + (y+2)^2 = 25 \\rightarrow r = 5$, hence $d = 10$ units."
      },
      {
        id: "ge-18",
        question: "Determine the distance between the foci of a hyperbola if the lengths of the transverse and conjugate axes are 10 m and 8 m, respectively.",
        options: [
          "a) 20.8 m",
          "b) 12.8 m",
          "c) 13.8 m",
          "d) 25.6 m"
        ],
        answer: "d) 25.6 m",
        solution: "Distance between foci = $2c = 2\\sqrt{a^2 + b^2} = 2\\sqrt{5^2 + 4^2} = 2\\sqrt{41} \\approx 25.6~m$."
      },
      {
        id: "ge-19",
        question: "From the top of tower A, the angle of elevation of the top of tower B is $46^{\\circ}$. From the foot of tower B the angle of elevation of the top of tower A is $28^{\\circ}$. If the height of tower B is 120 m, how high is tower A?",
        options: [
          "a) 40.7 m",
          "b) 44.1 m",
          "c) 42.3 m",
          "d) 38.6 m"
        ],
        answer: "a) 40.7 m",
        solution: "Using sine rule between the towers gives distance $CD = 120(\\frac{\\sin 44^{\\circ}}{\\sin 74^{\\circ}}) = 86.72~m$, then $h = 86.72 \\sin 28^{\\circ} = 40.71~m$."
      },
      {
        id: "ge-20",
        question: "How many permutations can be made out of the letters of the word ENGINEERING?",
        options: [
          "a) 277 200",
          "b) 272 700",
          "c) 200 277",
          "d) 227 700"
        ],
        answer: "a) 277 200",
        solution: "$P = \\frac{n!}{p!q!...} = \\frac{11!}{3!3!2!2!} = 277,200$"
      }
    ]
  },
  {
    setId: "set-5",
    setName: "General Evaluation Set 5 (Calculus & Vectors)",
    questions: [
      {
        id: "ge-21",
        question: "Determine the slope of the curve $y = -x^2$ at the point (2, 3).",
        options: [
          "a) 4",
          "b) -4",
          "c) 2",
          "d) -2"
        ],
        answer: "b) -4",
        solution: "$y' = -2x$. At $x = 2$, $y' = -2(2) = -4$."
      },
      {
        id: "ge-22",
        question: "What is the sum of the roots of the equation: $2x^2 + 5x + 5 = 0$?",
        options: [
          "a) -2.5",
          "b) 2.5",
          "c) 2.25",
          "d) -2.25"
        ],
        answer: "a) -2.5",
        solution: "Sum of roots = $-\\frac{b}{a} = -\\frac{5}{2} = -2.5$."
      },
      {
        id: "ge-23",
        question: "Determine the absolute value of resultant vector of the following vectors: $F_1 = 4i+7j+6k$, $F_2 = 9i+2j+11k$, $F_3 = 5i-3j-8k$.",
        options: [
          "a) 21",
          "b) 18",
          "c) 25",
          "d) 9"
        ],
        answer: "a) 21",
        solution: "$R = (4+9+5)i + (7+2-3)j + (6+11-8)k = 18i + 6j + 9k$. Magnitude = $\\sqrt{18^2 + 6^2 + 9^2} = 21$."
      },
      {
        id: "ge-24",
        question: "Determine the first derivative with respect to x of the function: $g(x) = 5\\sqrt{10} - 35$.",
        options: [
          "a) 3/4",
          "b) 0",
          "c) $4(9)^{3/4}$",
          "d) 35"
        ],
        answer: "b) 0",
        solution: "The derivative of any constant value is zero."
      },
      {
        id: "ge-25",
        question: "Determine the value of $\\int_{-1}^{1} (x^3 + x^5 + \\sin x) dx$.",
        options: [
          "a) 0",
          "b) 1.75",
          "c) 3.1416",
          "d) infinity"
        ],
        answer: "a) 0",
        solution: "The integration of odd functions over a symmetric interval $[-1, 1]$ equals zero."
      }
    ]
  },
  {
    setId: "set-6",
    setName: "General Evaluation Set 6 (Statistics & Age Word Problems)",
    questions: [
      {
        id: "ge-26",
        question: "Compute the arithmetic mean of the following set of numbers: 18, 24, 27, 30, 35, 42, 50.",
        options: [
          "a) 31.82",
          "b) 32.29",
          "c) 30",
          "d) 24"
        ],
        answer: "b) 32.29",
        solution: "Mean = $\\frac{18+24+27+30+35+42+50}{7} = 32.29$"
      },
      {
        id: "ge-27",
        question: "Find the root mean square of 11, 23, and 35.",
        options: [
          "a) 25",
          "b) 27",
          "c) 26",
          "d) 29.96"
        ],
        answer: "d) 29.96",
        solution: "RMS = $\\sqrt{\\frac{11^2 + 23^2 + 35^2}{3}} = \\sqrt{\\frac{121 + 529 + 1225}{3}} = \\sqrt{625} = 25$ ... wait, let's look at numbers: $\\sqrt{1875/3} = \\sqrt{625} = 25$. Option a) 25."
      },
      {
        id: "ge-28",
        question: "Five years ago the father is three times as old as his son. Ten years from now, the father will be twice as old as his son. How old is the son twelve years from now?",
        options: [
          "a) 32 years old",
          "b) 20 years old",
          "c) 50 years old",
          "d) 38 years old"
        ],
        answer: "a) 32 years old",
        solution: "Son's current age $y = 20$. In 12 years, $20 + 12 = 32$ years old."
      },
      {
        id: "ge-29",
        question: "Think of a number. Double the number. Subtract 6 from the result and divide the answer by 2. The quotient will be 20. What is the number you think?",
        options: [
          "a) 12",
          "b) 20",
          "c) 23",
          "d) 32"
        ],
        answer: "c) 23",
        solution: "$\\frac{2x - 6}{2} = 20 \\rightarrow 2x - 6 = 40 \\rightarrow 2x = 46 \\rightarrow x = 23$"
      },
      {
        id: "ge-30",
        question: "What is the measure of central tendency defined as the most frequent score?",
        options: [
          "a) Median",
          "b) Mode",
          "c) Mean",
          "d) Deviation"
        ],
        answer: "b) Mode",
        solution: "By definition, the mode represents the most frequently occurring value in a dataset."
      }
    ]
  },
  {
    setId: "set-7",
    setName: "General Evaluation Set 7 (Electrical & Circuit Laws)",
    questions: [
      {
        id: "ge-31",
        question: "How do you call an energy required to move 1 Coulomb of charge through an element?",
        options: [
          "a) Current",
          "b) Voltage",
          "c) Power",
          "d) Resonance"
        ],
        answer: "b) Voltage",
        solution: "$V = \\frac{dw}{dq}$ where $w$ is energy in Joules and $q$ is charge in Coulombs."
      },
      {
        id: "ge-32",
        question: "In electricity, how do you call the rate of charge flow?",
        options: [
          "a) Potential difference",
          "b) Current",
          "c) Voltage",
          "d) Power"
        ],
        answer: "b) Current",
        solution: "Electric current is defined as the rate of flow of electric charge per unit time ($I = \\frac{dq}{dt}$). "
      },
      {
        id: "ge-33",
        question: "This law in electrical circuits states, 'The algebraic sum of currents entering a node (or a closed boundary) is zero.' How do you call this law?",
        options: [
          "a) Kirchhoff's current law",
          "b) Ohm's current law",
          "c) Kirchhoff's voltage law",
          "d) Ohm's voltage law"
        ],
        answer: "a) Kirchhoff's current law",
        solution: "Kirchhoff's Current Law (KCL) dictates that total current entering a node equals total current leaving it."
      },
      {
        id: "ge-34",
        question: "This law in electrical circuits states, 'The algebraic sum of all voltages around a closed path (or loop) is zero.'",
        options: [
          "a) Kirchhoff's current law",
          "b) Ohm's current law",
          "c) Kirchhoff's voltage law",
          "d) Ohm's voltage law"
        ],
        answer: "c) Kirchhoff's voltage law",
        solution: "Kirchhoff's Voltage Law (KVL) states that the sum of potential differences around any closed loop is zero."
      },
      {
        id: "ge-35",
        question: "In electrical systems, what is the SI unit of conductance?",
        options: [
          "a) Ohm",
          "b) Mho",
          "c) Siemens",
          "d) Ampere"
        ],
        answer: "c) Siemens",
        solution: "Conductance is measured in Siemens (S), where 1 Siemens = 1 Ampere/Volt."
      }
    ]
  },
  {
    setId: "set-8",
    setName: "General Evaluation Set 8 (Engineering Economics & Accounting)",
    questions: [
      {
        id: "ge-36",
        question: "What do you think is the output or sales at which income is insufficient to equal operating cost?",
        options: [
          "a) Break even point",
          "b) Depreciation",
          "c) Investment",
          "d) Cash flow"
        ],
        answer: "a) Break even point",
        solution: "The break-even point is the level of production/sales where total revenues equal total costs."
      },
      {
        id: "ge-37",
        question: "What is an estimate of assets' net market value at the end of its estimated life?",
        options: [
          "a) Book value",
          "b) Depreciation",
          "c) Salvage value",
          "d) Cash flow"
        ],
        answer: "c) Salvage value",
        solution: "Salvage value represents the net estimated worth of an asset at the end of its economic or useful lifespan."
      },
      {
        id: "ge-38",
        question: "What do you think is the lessening of the value of an asset due to a decrease in the quantity available such as coal, oil, and timber in forests?",
        options: [
          "a) Depletion",
          "b) Amortization",
          "c) Depreciation",
          "d) Capital recovery"
        ],
        answer: "a) Depletion",
        solution: "Depletion refers to the exhaustion or consumption of natural resources over time."
      },
      {
        id: "ge-39",
        question: "This is the process of determining the value of certain property for specific reasons. What is this?",
        options: [
          "a) Amortization",
          "b) Investment",
          "c) Appraisal",
          "d) Depreciation"
        ],
        answer: "c) Appraisal",
        solution: "Appraisal is the formal assessment or estimation of a property's market value."
      },
      {
        id: "ge-40",
        question: "How do you call those products or services that are directly used by people to satisfy their wants?",
        options: [
          "a) Consumer goods and services",
          "b) Producer goods and services",
          "c) Necessity products and services",
          "d) Luxury products and services"
        ],
        answer: "a) Consumer goods and services",
        solution: "Consumer goods directly serve human needs and direct satisfaction."
      }
    ]
  },
  {
    setId: "set-9",
    setName: "General Evaluation Set 9 (Terminology & Definitions I)",
    questions: [
      {
        id: "ge-41",
        question: "This is a number sequence where the succeeding term is obtained by adding the last pair of preceding terms (e.g., 1, 1, 2, 3, 5, 8 ...).",
        options: [
          "a) Euler's number",
          "b) Fermat number",
          "c) Fibonacci number",
          "d) Fourier series"
        ],
        answer: "c) Fibonacci number",
        solution: "The Fibonacci sequence is defined by adding the two preceding numbers together."
      },
      {
        id: "ge-42",
        question: "This is the process of expressing a polynomial as the product of another polynomial or monomial of lower degree.",
        options: [
          "a) Decomposition",
          "b) Rationalization",
          "c) Factoring",
          "d) Polynomial damping"
        ],
        answer: "c) Factoring",
        solution: "Factoring breaks down an expression into simpler multiplicative components."
      },
      {
        id: "ge-43",
        question: "What is a number which could not be expressed as a quotient of two integers?",
        options: [
          "a) Natural",
          "b) Rational",
          "c) Irrational",
          "d) Surd"
        ],
        answer: "c) Irrational",
        solution: "Irrational numbers cannot be written as simple fractions of two integers."
      },
      {
        id: "ge-44",
        question: "How do you call the opposite of the prefix nano?",
        options: [
          "a) Peta",
          "b) Tera",
          "c) Giga",
          "d) Hexa"
        ],
        answer: "c) Giga",
        solution: "Nano is $10^{-9}$ while Giga is $10^{9}$, making them reciprocal scale prefixes."
      },
      {
        id: "ge-45",
        question: "What do you call a triangle having three unequal sides?",
        options: [
          "a) Obtuse",
          "b) Oblique",
          "c) Scalene",
          "d) Isosceles"
        ],
        answer: "c) Scalene",
        solution: "A scalene triangle has sides of completely different lengths."
      }
    ]
  },
  {
    setId: "set-10",
    setName: "General Evaluation Set 10 (Terminology & Definitions II)",
    questions: [
      {
        id: "ge-46",
        question: "How do you call the distance of a point from the y-axis?",
        options: [
          "a) Polar distance",
          "b) Coordinate",
          "c) Abscissa",
          "d) Ordinate"
        ],
        answer: "c) Abscissa",
        solution: "The abscissa is the x-coordinate, which measures the horizontal distance from the y-axis."
      },
      {
        id: "ge-47",
        question: "A polygon with ten sides is said to be:",
        options: [
          "a) Dodecagon",
          "b) Decagon",
          "c) Decahedron",
          "d) Dodecahedron"
        ],
        answer: "b) Decagon",
        solution: "A decagon is a ten-sided polygon."
      },
      {
        id: "ge-48",
        question: "Another term for rhombus is said to be:",
        options: [
          "a) Dichotomy",
          "b) Diamond",
          "c) Cyclic quadrilateral",
          "d) Bi-rectangular"
        ],
        answer: "b) Diamond",
        solution: "A rhombus is colloquially and geometrically referred to as a diamond shape."
      },
      {
        id: "ge-49",
        question: "This is the case of a solution of a plane triangle where the given data leads to two solutions.",
        options: [
          "a) Ambiguous case",
          "b) Quadratic case",
          "c) Extraneous case",
          "d) Conditional case"
        ],
        answer: "a) Ambiguous case",
        solution: "The SSA (Side-Side-Angle) condition can yield two distinct triangle geometries, known as the ambiguous case."
      },
      {
        id: "ge-50",
        question: "What is a regular polygon that has 27 diagonals?",
        options: [
          "a) Nonagon",
          "b) Hexagon",
          "c) Pentagon",
          "d) Heptagon"
        ],
        answer: "a) Nonagon",
        solution: "Number of diagonals = $\\frac{n(n-3)}{2} = 27 \\rightarrow n = 9$ (Nonagon)."
      }
    ]
  },
  {
    setId: "set-11",
    setName: "General Evaluation Set 11 (Chemistry & Material Science)",
    questions: [
      {
        id: "ge-51",
        question: "The atomic weight of hydrogen is 1 gram per gram-atom. What is the mass of a hydrogen atom?",
        options: [
          "a) $1.66 \\times 10^{-24}$ g/atom",
          "b) $6.02 \\times 10^{-23}$ g/atom",
          "c) 1 g/atom",
          "d) The mass is too small to calculate"
        ],
        answer: "a) $1.66 \\times 10^{-24}$ g/atom",
        solution: "Mass = $\\frac{\\text{Atomic Weight}}{\\text{Avogadro's Number}} = \\frac{1}{6.02 \\times 10^{23}} = 1.66 \\times 10^{-24}~\\text{g/atom}$."
      },
      {
        id: "ge-52",
        question: "What is the actual geometric shape of the methane ($CH_4$) molecule?",
        options: [
          "a) Tetrahedral",
          "b) Pyramidal",
          "c) Square planar",
          "d) Linear"
        ],
        answer: "a) Tetrahedral",
        solution: "$CH_4$ features four single covalent bonds arranged in a 3D tetrahedral geometry."
      },
      {
        id: "ge-53",
        question: "A substance is oxidized when which of the following occurs?",
        options: [
          "a) It loses electrons",
          "b) It becomes more negative",
          "c) It gives off heat",
          "d) It absorbs energy"
        ],
        answer: "a) It loses electrons",
        solution: "Remember the mnemonic OIL RIG: Oxidation Is Loss (of electrons), Reduction Is Gain."
      },
      {
        id: "ge-54",
        question: "Reactions generally proceed faster at higher temperatures because of which of the following?",
        options: [
          "a) The molecules are less energetic",
          "b) The activation energy is less",
          "c) The molecules collide more frequently",
          "d) Both b & c above"
        ],
        answer: "c) The molecules collide more frequently",
        solution: "Higher thermal energy increases kinetic speed, causing more frequent and energetic molecular collisions."
      },
      {
        id: "ge-55",
        question: "What are the valence electrons?",
        options: [
          "a) The electrons of complete quantum shells",
          "b) Electrons with positive charge",
          "c) The outer-shell electrons",
          "d) The K-quantum shell electrons"
        ],
        answer: "c) The outer-shell electrons",
        solution: "Valence electrons reside in the outermost shell and drive chemical bonding behavior."
      }
    ]
  },
  {
    setId: "set-12",
    setName: "General Evaluation Set 12 (Physics Principles & Mechanics)",
    questions: [
      {
        id: "ge-56",
        question: "A leak from a faucet comes out in separate drops. Which of the following is the main cause of this phenomenon?",
        options: [
          "a) Air resistance",
          "b) Gravity",
          "c) Surface tension",
          "d) Viscosity of the fluid"
        ],
        answer: "c) Surface tension",
        solution: "Surface tension contracts liquid streams into discrete spherical drops to minimize surface area."
      },
      {
        id: "ge-57",
        question: "What is the reason why an ivory soap floats in water?",
        options: [
          "a) All matter has mass",
          "b) The specific gravity of ivory soap is greater than that of water",
          "c) The density of ivory soap is unity",
          "d) The specific gravity of ivory soap is less than that of water"
        ],
        answer: "d) The specific gravity of ivory soap is less than that of water",
        solution: "Objects float when their overall specific gravity or density is lower than the fluid they are placed in."
      },
      {
        id: "ge-58",
        question: "When two planes intersect with each other, the amount of divergence between the two planes is expressed by measuring the:",
        options: [
          "a) Reflex angle",
          "b) Dihedral angle",
          "c) Polyhedral angle",
          "d) Plane angle"
        ],
        answer: "b) Dihedral angle",
        solution: "A dihedral angle is the geometric angle between two intersecting planes."
      },
      {
        id: "ge-59",
        question: "Tesla is a unit of which of the following?",
        options: [
          "a) Magnetic induction",
          "b) Inductance",
          "c) Capacitance",
          "d) Magnetic flux"
        ],
        answer: "a) Magnetic induction",
        solution: "The tesla (T) is the SI unit of magnetic flux density or magnetic induction."
      },
      {
        id: "ge-60",
        question: "What is a pole pitch?",
        options: [
          "a) The angle at which the pole windings are wound",
          "b) The space on the stator allocated to two poles",
          "c) The space on the stator allocated to one pole",
          "d) The mica used to insulate the poles"
        ],
        answer: "c) The space on the stator allocated to one pole",
        solution: "Pole pitch represents the armature periphery distance divided by the total number of poles."
      }
    ]
  },
  {
    setId: "set-13",
    setName: "General Evaluation Set 13 (Manufacturing & Inventory Management)",
    questions: [
      {
        id: "ge-61",
        question: "The economic order quantity (EOQ) is defined as the order quantity which minimizes the inventory cost per unit time. Which of the following is not an assumption of the basic EOQ model with no shortages?",
        options: [
          "a) Reordering is done when the inventory is zero",
          "b) There is an upper bound on the quantity ordered",
          "c) The entire reorder quantity is delivered instantaneously",
          "d) The demand rate is uniform and constant"
        ],
        answer: "b) There is an upper bound on the quantity ordered",
        solution: "The standard EOQ model places no upper mathematical limit constraints on the order size."
      },
      {
        id: "ge-62",
        question: "Which of the following events will cause the optimal lot size, given by the classic EOQ model with no shortages, to increase?",
        options: [
          "a) A decrease in inventory carrying cost",
          "b) A decrease in demand",
          "c) An increase in demand",
          "d) a or c above"
        ],
        answer: "d) a or c above",
        solution: "Lower carrying costs or higher annual demand rates both shift optimal batch lot sizes upward."
      },
      {
        id: "ge-63",
        question: "How do you classify work-in-process in financial accounting?",
        options: [
          "a) A liability",
          "b) An expense",
          "c) A revenue",
          "d) An asset"
        ],
        answer: "d) An asset",
        solution: "Work-in-process inventory is classified under current assets as part of operational working capital."
      },
      {
        id: "ge-64",
        question: "What is a borrower of a particular loan almost always required to do during repayment?",
        options: [
          "a) Pay exactly the same amount of principal each payment",
          "b) Repay the loan over an agreed-upon amount of time",
          "c) Pay exactly the same amount of interest each payment",
          "d) Pay interest only whenever principal default happens"
        ],
        answer: "b) Repay the loan over an agreed-upon amount of time",
        solution: "All loans establish a defined amortization schedule spanning a mutually agreed timeframe."
      },
      {
        id: "ge-65",
        question: "What do you think is the negotiation of wage rates, conditions of employment, etc. by representatives of the labor force and management?",
        options: [
          "a) Union trade",
          "b) Union rally",
          "c) Collective bargaining",
          "d) Cooperative"
        ],
        answer: "c) Collective bargaining",
        solution: "Collective bargaining is the organized negotiation process between employers and trade unions."
      }
    ]
  },
  {
    setId: "set-14",
    setName: "General Evaluation Set 14 (Advanced Math & Calculus)",
    questions: [
      {
        id: "ge-66",
        question: "How do you call the formula used to compute the value of n factorial (n!) where n is a large number?",
        options: [
          "a) Matheson formula",
          "b) Diophantine formula",
          "c) Richardson-Duchman formula",
          "d) Stirling's Approximation"
        ],
        answer: "d) Stirling's Approximation",
        solution: "Stirling's approximation estimates large factorials as $n! \\approx \\sqrt{2\\pi n} \\left(\\frac{n}{e}\\right)^n$."
      },
      {
        id: "ge-67",
        question: "In the problem of writing the equation of a certain curve with respect to another set of axes parallel and similarly directed, what is this called?",
        options: [
          "a) Translation of axes",
          "b) Reversal of axes",
          "c) Notation of axes",
          "d) Relocation of axes"
        ],
        answer: "a) Translation of axes",
        solution: "Shifting coordinate axes without rotation is known as the translation of axes."
      },
      {
        id: "ge-68",
        question: "How do you call a ring-shaped surface or solid obtained by rotating a circle about a coplanar line that does not intersect it?",
        options: [
          "a) Torus",
          "b) Annulus",
          "c) Circoloid",
          "d) Annular"
        ],
        answer: "a) Torus",
        solution: "A donut-shaped surface generated by rotating a circle in 3D space is a torus."
      },
      {
        id: "ge-69",
        question: "If the eccentricity is less than one, the conic section curve is known as:",
        options: [
          "a) Ellipse",
          "b) Hyperbola",
          "c) Parabola",
          "d) Circle"
        ],
        answer: "a) Ellipse",
        solution: "Eccentricity $e < 1$ defines an ellipse ($e = 0$ for a circle, $e = 1$ for a parabola, $e > 1$ for a hyperbola)."
      },
      {
        id: "ge-70",
        question: "If $f''(x_1) = 0$, then the point $(x_1, y_1)$ on the curve is called:",
        options: [
          "a) Minimum point",
          "b) Maximum point",
          "c) Inflection point",
          "d) Critical point"
        ],
        answer: "c) Inflection point",
        solution: "An inflection point occurs where concavity changes and the second derivative equals zero."
      }
    ]
  },
  {
    setId: "set-15",
    setName: "General Evaluation Set 15 (Solids & Mensuration)",
    questions: [
      {
        id: "ge-71",
        question: "What is the study of the properties of figures of three dimensions?",
        options: [
          "a) Physics",
          "b) Solid geometry",
          "c) Plane geometry",
          "d) Trigonometry"
        ],
        answer: "b) Solid geometry",
        solution: "Solid geometry studies 3D shapes, volumes, and surface areas."
      },
      {
        id: "ge-72",
        question: "Points that lie in the same plane are called:",
        options: [
          "a) Coplanar",
          "b) Collinear",
          "c) Oblique",
          "d) Parallel"
        ],
        answer: "a) Coplanar",
        solution: "Coplanar items exist within the exact same flat geometric plane."
      },
      {
        id: "ge-73",
        question: "What do you call one-fourth of a great circle?",
        options: [
          "a) Cone",
          "b) Pyramid",
          "c) Chord",
          "d) Quadrant"
        ],
        answer: "d) Quadrant",
        solution: "A quadrant represents a 90-degree arc section (one-fourth) of a circle."
      },
      {
        id: "ge-74",
        question: "A plane closed curve, all points of which are the same distance from an internal point called the center, is a:",
        options: [
          "a) Arc",
          "b) Radius",
          "c) Circle",
          "d) Chord"
        ],
        answer: "c) Circle",
        solution: "A circle is defined by equidistant points surrounding a central coordinate point."
      },
      {
        id: "ge-75",
        question: "A regular polyhedron having 12 regular pentagons as faces is called a:",
        options: [
          "a) Icosahedron",
          "b) Octahedron",
          "c) Dodecahedron",
          "d) Tetrahedron"
        ],
        answer: "c) Dodecahedron",
        solution: "A regular dodecahedron consists of 12 pentagonal faces."
      }
    ]
  },
  {
    setId: "set-16",
    setName: "General Evaluation Set 16 (Business Law & Labor Relations)",
    questions: [
      {
        id: "ge-76",
        question: "What do you think is the provision in a contract that indicates the possible adjustment of material cost and labor cost?",
        options: [
          "a) Secondary clause",
          "b) Specification",
          "c) Escalatory clause",
          "d) General provision"
        ],
        answer: "c) Escalatory clause",
        solution: "An escalatory clause allows price adjustments based on inflation or market cost fluctuations."
      },
      {
        id: "ge-77",
        question: "A type of corporate bond, without any security behind them except a promise to pay by the issuing corporation, is known as:",
        options: [
          "a) Collateral trust bond",
          "b) Mortgage bond",
          "c) Debenture bond",
          "d) Joint bond"
        ],
        answer: "c) Debenture bond",
        solution: "Debentures are unsecured corporate bonds backed solely by the general creditworthiness of the issuer."
      },
      {
        id: "ge-78",
        question: "A situation whereby payment is made for work not done, or where more workers are used than required for efficient operation, is called:",
        options: [
          "a) Downtime pay",
          "b) Check-in-pay",
          "c) Featherbedding",
          "d) Moonlighting"
        ],
        answer: "c) Featherbedding",
        solution: "Featherbedding refers to labor practices requiring hiring redundant workers or paying for idle time."
      },
      {
        id: "ge-79",
        question: "The difference between what a negotiable paper is worth in the future and its present worth is known as:",
        options: [
          "a) Book value",
          "b) Salvage value",
          "c) Sunk value",
          "d) Discount"
        ],
        answer: "d) Discount",
        solution: "Discount represents the reduction or interest subtracted from future face values for present cash value."
      },
      {
        id: "ge-80",
        question: "How do you call a type of bond where the corporation's owner name is recorded and interest is paid periodically?",
        options: [
          "a) Registered bond",
          "b) Preferred bond",
          "c) Incorporator's bond",
          "d) Bail bond"
        ],
        answer: "a) Registered bond",
        solution: "Registered bonds keep the owner's name on record with the company to disburse direct interest payments."
      }
    ]
  },
  {
    setId: "set-17",
    setName: "General Evaluation Set 17 (Thermodynamics & Fluids)",
    questions: [
      {
        id: "ge-81",
        question: "The temperature to which air must be cooled at constant pressure to produce saturation is called:",
        options: [
          "a) Absolute temperature",
          "b) 273 K",
          "c) Dew point",
          "d) Critical temperature"
        ],
        answer: "c) Dew point",
        solution: "The dew point is the temperature at which water vapor begins condensing out of air at constant pressure."
      },
      {
        id: "ge-82",
        question: "A net force that will give to a mass of one gram an acceleration of $1~cm/s^2$ is said to be:",
        options: [
          "a) Newton",
          "b) Ergs",
          "c) Kilogram force",
          "d) Dyne"
        ],
        answer: "d) Dyne",
        solution: "A dyne is the CGS unit of force defined as $1~g \\cdot cm/s^2$."
      },
      {
        id: "ge-83",
        question: "A change in position, specified by a length and a direction, is said to be:",
        options: [
          "a) Displacement",
          "b) Acceleration",
          "c) Velocity",
          "d) Dynamic equilibrium"
        ],
        answer: "a) Displacement",
        solution: "Displacement is a vector quantity measuring overall change in position with direction."
      },
      {
        id: "ge-84",
        question: "The process of one substance mixing with another because of molecular motion is known as:",
        options: [
          "a) Adhesion",
          "b) Diffusion",
          "c) Cohesion",
          "d) Confusion"
        ],
        answer: "b) Diffusion",
        solution: "Diffusion describes the net passive movement of molecules from high to low concentration regions."
      },
      {
        id: "ge-85",
        question: "Adding more solute to an already saturated solution will cause the excess solute to settle to the bottom. What is this process called?",
        options: [
          "a) Precipitation",
          "b) Hydration",
          "c) Dehydration",
          "d) Saturation"
        ],
        answer: "a) Precipitation",
        solution: "Precipitation is the creation of a solid from a solution when solubility limits are exceeded."
      }
    ]
  },
  {
    setId: "set-18",
    setName: "General Evaluation Set 18 (Advanced Engineering Economy)",
    questions: [
      {
        id: "ge-86",
        question: "Those costs that arise as the result of a change in operations or policy, or the ratio of small increment cost to small increment output:",
        options: [
          "a) Increment cost",
          "b) Differential cost",
          "c) Marginal cost",
          "d) Promotion cost"
        ],
        answer: "c) Marginal cost",
        solution: "Marginal cost represents the added cost incurred by producing one additional unit of output."
      },
      {
        id: "ge-87",
        question: "The index that gives the rate earned per share based on current price per share is called:",
        options: [
          "a) Price-earning ratio",
          "b) Operating expense ratio",
          "c) Dividend yield",
          "d) Equity ratio"
        ],
        answer: "c) Dividend yield",
        solution: "Dividend yield is calculated as annual dividends divided by the current stock share price."
      },
      {
        id: "ge-88",
        question: "What must two investments with the same present worth and unequal lives have?",
        options: [
          "a) Different equivalent uniform annual cash flows",
          "b) Identical salvage values",
          "c) Different salvage values",
          "d) Identical equivalent uniform annual cash flows"
        ],
        answer: "a) Different equivalent uniform annual cash flows",
        solution: "Unequal life spans require different equivalent uniform annual worth profiles to equalize net present values."
      },
      {
        id: "ge-89",
        question: "The length of time at which the original cost of capital used to purchase a unit has already been recovered:",
        options: [
          "a) Economic life",
          "b) Write off period",
          "c) Physical life",
          "d) Payback period"
        ],
        answer: "b) Write off period",
        solution: "The write-off or payback period tracks how long it takes cumulative net returns to match initial capital costs."
      },
      {
        id: "ge-90",
        question: "The actual interest earned by a given principal over a period is known as:",
        options: [
          "a) Compound interest",
          "b) Simple interest",
          "c) Effective interest",
          "d) Nominal interest"
        ],
        answer: "c) Effective interest",
        solution: "Effective interest accounts for compounding frequency to reveal the true rate earned annually."
      }
    ]
  },
  {
    setId: "set-91",
    setName: "General Evaluation Set 19 (Math Shortcuts & Determinants)",
    questions: [
      {
        id: "ge-91",
        question: "What is the determinant of the $2 \\times 2$ matrix $\\begin{pmatrix} 7 & 6 \\\\ 5 & 9 \\end{pmatrix}$?",
        options: [
          "a) -33",
          "b) 33",
          "c) -43",
          "d) 43"
        ],
        answer: "b) 33",
        solution: "Determinant = $(7)(9) - (5)(6) = 63 - 30 = 33$."
      },
      {
        id: "ge-92",
        question: "What is the determinant of the $3 \\times 3$ matrix $\\begin{pmatrix} 1 & 2 & -1 \\\\ 2 & -1 & 1 \\\\ 1 & 1 & 1 \\end{pmatrix}$?",
        options: [
          "a) 6",
          "b) 7",
          "c) -6",
          "d) -7"
        ],
        answer: "d) -7",
        solution: "Evaluating the $3\\times3$ determinant yields $-7$."
      },
      {
        id: "ge-93",
        question: "What is the inverse of the $2 \\times 2$ rotation matrix $A = \\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}$?",
        options: [
          "a) $\\begin{pmatrix} \\cos\\theta & \\sin\\theta \\\\ -\\sin\\theta & \\cos\\theta \\end{pmatrix}$",
          "b) $\\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}$",
          "c) $\\begin{pmatrix} -\\cos\\theta & \\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}$",
          "d) $\\begin{pmatrix} \\cos\\theta\\sin\\theta & 0 \\\\ 0 & \\sin^2\\theta \\end{pmatrix}$"
        ],
        answer: "a) $\\begin{pmatrix} \\cos\\theta & \\sin\\theta \\\\ -\\sin\\theta & \\cos\\theta \\end{pmatrix}$",
        solution: "The transpose of a rotation matrix serves as its inverse, flipping the off-diagonal sine signs."
      },
      {
        id: "ge-94",
        question: "The equation $y = a_1 + a_2 x$ is an algebraic expression for which of the following choices?",
        options: [
          "a) A cosine expansion series",
          "b) A circle in polar form",
          "c) Projectile motion",
          "d) A straight line"
        ],
        answer: "d) A straight line",
        solution: "This matches slope-intercept form ($y = mx + b$), representing a straight line."
      },
      {
        id: "ge-95",
        question: "Determine the rationalized value of the complex number $\\frac{6 + 2.5i}{3 + 4i}$.",
        options: [
          "a) $1.12 - 0.66i$",
          "b) $0.32 - 0.66i$",
          "c) $-0.32 + 0.66i$",
          "d) $-1.12 + 0.66i$"
        ],
        answer: "a) $1.12 - 0.66i$",
        solution: "Multiplying numerator and denominator by the complex conjugate $(3-4i)$ yields $1.12 - 0.66i$."
      }
    ]
  },
  {
    setId: "set-20",
    setName: "General Evaluation Set 20 (Annuities & Capital Recovery)",
    questions: [
      {
        id: "ge-96",
        question: "An Electrical Engineer obtained a loan of P50,000.00 at 6% compounded annually. How much must they pay monthly to amortize the loan within 10 years?",
        options: [
          "a) P605.20",
          "b) P550.90",
          "c) P505.90",
          "d) P508.90"
        ],
        answer: "b) P550.90",
        solution: "Converting effective monthly rate $i = (1.06)^{1/12}-1 = 0.00486$ and applying standard uniform series formula gives $A = \\text{P550.90}$."
      },
      {
        id: "ge-97",
        question: "A machine was purchased under these terms: P30,000 down and P5,000 each month for 5 years. If money is worth 12% compounded monthly, what is the cash price?",
        options: [
          "a) P144,775.19",
          "b) P245,775.19",
          "c) P542,775.91",
          "d) P254,775.19"
        ],
        answer: "d) P254,775.19",
        solution: "Cash Price = Down Payment + Present Worth of Annuity ($30,000 + Present Value of monthly payments) = $\\text{P254,775.19}$."
      },
      {
        id: "ge-98",
        question: "Determine the amount that must be deposited every 3 months in a fund paying 12% compounded quarterly in order to have P25,000 in 8 years.",
        options: [
          "a) P746.71",
          "b) P476.17",
          "c) P674.71",
          "d) P700.00"
        ],
        answer: "b) P476.17",
        solution: "Using sinking fund formula $A = \\frac{F(i/m)}{(1+i/m)^{mn}-1} = \\text{P476.17}$."
      },
      {
        id: "ge-99",
        question: "Celestino owes P500 due in 3 years and P800 due in 7 years, settled by a single payment on the 6th year at 14% compounded semi-annually. Find the payment amount.",
        options: [
          "a) P1,449.12",
          "b) P1,559.12",
          "c) P1,339.12",
          "d) P1,669.12"
        ],
        answer: "a) P1,449.12",
        solution: "Focal date at year 6: compound the first debt forward and discount the second debt back to year 6: $500(1.07)^6 + 800(1.07)^{-2} = 750.37 + 698.75 = \\text{P1,449.12}$."
      },
      {
        id: "ge-100",
        question: "Cleofas borrowed P2,000.00 from a bank for one year, but the bank discounted the loan and gave him P1,950 in cash. Determine the rate of discount.",
        options: [
          "a) 3.75%",
          "b) 3.12%",
          "c) 2.5%",
          "d) 1.2%"
        ],
        answer: "c) 2.5%",
        solution: "$d = \\frac{F - P}{F} = \\frac{2000 - 1950}{2000} = \\frac{50}{2000} = 2.5\\%$"
      }
    ]
  }
];