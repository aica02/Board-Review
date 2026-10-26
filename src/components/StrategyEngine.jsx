import { useState } from "react";
import { Brain } from "lucide-react";

export const MOCK_PROBLEMS = [
  {
    id: "strat-1",
    subject: "PIPE",
    title: "Multi-Stage Steam Power Cycle",
    problem: "A Rankine cycle operates between 3 MPa and 10 kPa. Steam enters the turbine at 400°C. Determine the first governing calculation step to find turbine work.",
    steps: [
      "Step 1: Locate State 1 properties (P1 = 3 MPa, T1 = 400°C) using Superheated Steam Tables.",
      "Step 2: Determine State 2s assuming isentropic expansion (s2s = s1) down to condenser pressure P2 = 10 kPa.",
      "Step 3: Apply Isentropic Efficiency to compute actual enthalpy h2a if turbine efficiency is given."
    ],
    rationale: "We start by identifying state properties because enthalpy values dictate all energy balance equations in vapor cycles."
  },
  {
    id: "strat-2",
    subject: "PIPE",
    title: "Vapor-Compression Refrigeration Cycle COP",
    problem: "An R-134a refrigeration system operates with an evaporator pressure of 140 kPa and a condenser pressure of 1.0 MPa. Determine the first step to find the coefficient of performance (COP).",
    steps: [
      "Step 1: Extract saturated liquid and vapor enthalpies at condenser pressure (P = 1.0 MPa) and evaporator pressure (P = 140 kPa) using Refrigerant Tables.",
      "Step 2: Assume standard saturated vapor entering the compressor and isentropic compression to find compressor discharge enthalpy.",
      "Step 3: Apply refrigeration COP formula relating refrigerating effect to compressor work input."
    ],
    rationale: "Refrigeration cycles require mapping pressure boundaries to saturation tables to isolate enthalpies before calculating heat absorbed and work input."
  },
  {
    id: "strat-3",
    subject: "PIPE",
    title: "Darcy-Weisbach Head Loss in Commercial Steel Pipes",
    problem: "Water at 20°C flows through a 200-mm diameter, 100-m long cast iron pipe at a rate of 50 L/s. What is the governing initial step to calculate friction head loss?",
    steps: [
      "Step 1: Calculate flow velocity using the continuity equation ($v = Q / A$) based on the 200-mm pipe diameter.",
      "Step 2: Determine Reynolds number using fluid kinematic viscosity to check flow regime (laminar or turbulent).",
      "Step 3: Obtain friction factor $f$ using Moody Diagram or Colebrook-White equation before applying Darcy-Weisbach."
    ],
    rationale: "Finding velocity and Reynolds number is mandatory because the friction factor $f$ depends directly on flow turbulence and pipe roughness."
  },
  {
    id: "strat-4",
    subject: "Machine Design",
    title: "Solid Transmission Shaft Design under Combined Loading",
    problem: "A steel shaft transmits 50 kW at 300 rpm while subjected to a bending moment of 400 N-m. Determine the first governing equation/step to find the required shaft diameter.",
    steps: [
      "Step 1: Calculate the applied torsional torque using power and rotational speed ($T = P / \\omega$).",
      "Step 2: Compute equivalent twisting moment ($Te = \\sqrt{M^2 + T^2}$) or equivalent bending moment using maximum shear stress theory.",
      "Step 3: Equate equivalent torque to the torsional strength formula involving allowable shear stress and shaft diameter cubed."
    ],
    rationale: "When shafts experience both bending and torsion simultaneously, combining them into an equivalent torque or moment is the critical prerequisite step."
  },
  {
    id: "strat-5",
    subject: "Machine Design",
    title: "Helical Compression Spring Design & Wahl Factor",
    problem: "A helical compression spring has a mean coil diameter of 50 mm and wire diameter of 10 mm. Under an axial load of 500 N, what is the initial analytical step to find maximum shear stress?",
    steps: [
      "Step 1: Calculate the spring index ($C = D / d$) to evaluate geometric proportion.",
      "Step 2: Compute the Wahl correction factor ($K$) to account for direct shear and spring curvature effects.",
      "Step 3: Apply the modified torsional shear stress formula incorporating load, mean diameter, and wire diameter."
    ],
    rationale: "The spring index must be calculated first because it dictates the Wahl factor, which corrects standard shear stress formulas for wire curvature."
  },
  {
    id: "strat-6",
    subject: "Math",
    title: "Capitalized Cost Evaluation",
    problem: "A piece of heavy machinery costs ₱1,500,000 with a useful life of 8 years and a salvage value of ₱200,000. If interest is 12% compounded annually, what is the first step to compute capitalized cost?",
    steps: [
      "Step 1: Identify initial first cost ($CC_1$) and calculate the depreciation fund using sinking fund factor based on useful life and interest rate.",
      "Step 2: Determine the present value of perpetual replacements using capitalized cost of replacement.",
      "Step 3: Sum the initial cost and the capitalized cost of periodic replacements."
    ],
    rationale: "Capitalized cost problems must break down initial investment, salvage recovery, and perpetual renewal cycles into distinct present-value components."
  },
  {
    id: "strat-7",
    subject: "Math",
    title: "Tank Optimization Problem",
    problem: "An open cylindrical storage tank with a given volume of 100 m³ is to be constructed. Find the first step to determine the dimensions that minimize the total surface area.",
    steps: [
      "Step 1: Express surface area as a function of two variables (radius $r$ and height $h$) using open cylinder geometry ($A = \\pi r^2 + 2\\pi r h$).",
      "Step 2: Use the given volume constraint ($V = \\pi r^2 h = 100$) to express height $h$ solely in terms of radius $r$.",
      "Step 3: Substitute $h$ into the surface area equation and take the first derivative with respect to $r$ to find extrema."
    ],
    rationale: "Optimization requires reducing a multi-variable function into a single-variable function using the provided constraint equation before differentiation."
  },
  {
    id: "strat-8",
    subject: "PIPE",
    title: "Four-Stroke Diesel Engine Performance",
    problem: "A 4-stroke, 6-cylinder diesel engine with a 200 mm bore and 250 mm stroke runs at 1,200 rpm, yielding an indicated mean effective pressure of 0.8 MPa. What is the first calculation step to find indicated horsepower?",
    steps: [
      "Step 1: Compute piston displacement volume ($V_d$) using bore diameter and stroke length.",
      "Step 2: Determine the number of power strokes per minute ($n = N / 2$ for a 4-stroke engine).",
      "Step 3: Apply indicated power formula ($IP = \\text{IMEP} \\cdot A \\cdot L \\cdot n \\cdot \\text{cylinders}$). "
    ],
    rationale: "Engine output calculations depend heavily on correctly identifying cycle type (2-stroke vs 4-stroke) to find power strokes per minute."
  },
  {
    id: "strat-9",
    subject: "PIPE",
    title: "Air Conditioning Mixing Process",
    problem: "Outside air at 35°C dry-bulb and 28°C wet-bulb is mixed with recirculated room air at 24°C dry-bulb and 50% relative humidity. What is the governing first step to find the mixed air state?",
    steps: [
      "Step 1: Locate both initial states on the Psychrometric Chart or tables to extract enthalpy and specific humidity values.",
      "Step 2: Apply mass balance equations for dry air and water vapor streams (conservation of mass).",
      "Step 3: Use energy balance ratio to locate the mixing point along the straight line connecting the two initial states."
    ],
    rationale: "Psychrometric mixing relies on conservation of mass and energy, creating a linear ratio between mass flow rates of the constituent air streams."
  },
  {
    id: "strat-10",
    subject: "Machine Design",
    title: "Square Thread Power Screw Efficiency",
    problem: "A power screw has a double square thread with a mean diameter of 50 mm and a lead of 10 mm. The coefficient of friction is 0.12. What is the first step to compute mechanical efficiency?",
    steps: [
      "Step 1: Calculate lead angle ($\\theta$) using lead and mean circumference ($\\tan \\theta = \\text{Lead} / (\\pi \\cdot d_m)$).",
      "Step 2: Determine friction angle ($f = \\arctan(\\mu)$) from the given coefficient of friction.",
      "Step 3: Apply the square thread efficiency equation ($\\eta = \\tan \\theta / \\tan(\\theta + f)$)."
    ],
    rationale: "Screw efficiency is entirely a geometric function of lead angle and friction angle, making lead angle calculation the essential first step."
  },
  {
    id: "strat-11",
    subject: "Machine Design",
    title: "Spur Gear Train Velocity Ratio",
    problem: "A 20-tooth pinion drives a 60-tooth spur gear with a diametral pitch of 4. What is the initial step to determine the center distance between the two gears?",
    steps: [
      "Step 1: Calculate pitch diameters of both pinion and gear using number of teeth divided by diametral pitch ($D = N / P_d$).",
      "Step 2: Add the two pitch diameters together.",
      "Step 3: Divide the sum by 2 to get the standard center distance."
    ],
    rationale: "Center distance in gear pairs is fundamentally derived from the sum of individual pitch radii (or half the sum of pitch diameters)."
  },
  {
    id: "strat-12",
    subject: "Math",
    title: "Parabolic Arch Bridge Clearance",
    problem: "A parabolic arch has a span of 20 meters and a maximum height of 8 meters. What is the first analytical step to write its equation and find vertical clearance 4 meters from the center?",
    steps: [
      "Step 1: Establish a coordinate system placing the vertex at the origin $(0, 8)$ or placing the base feet symmetrically at $(-10, 0)$ and $(10, 0)$.",
      "Step 2: Substitute known vertex and boundary points into the standard vertical parabola equation ($x^2 = -4ay$ or $y - k = a(x - h)^2$).",
      "Step 3: Solve for scale factor $a$ before evaluating height at $x = 4$."
    ],
    rationale: "Setting an intelligent coordinate frame simplifies the algebraic constants of conic sections before calculating specific coordinates."
  },
  {
    id: "strat-13",
    subject: "PIPE",
    title: "Shell-and-Tube Heat Exchanger LMTD",
    problem: "A counter-flow heat exchanger cools oil from 90°C to 40°C using water entering at 20°C and leaving at 35°C. What is the first step to find Log Mean Temperature Difference (LMTD)?",
    steps: [
      "Step 1: Sketch temperature distribution along the length for counter-flow arrangement to identify terminal temperature differences ($\\Delta T_1$ and $\\Delta T_2$).",
      "Step 2: Compute $\\Delta T_1 = T_{h,\\text{in}} - T_{c,\\text{out}}$ and $\\Delta T_2 = T_{h,\\text{out}} - T_{c,\\text{in}}$.",
      "Step 3: Apply the LMTD logarithmic formula using $\\Delta T_1$ and $\\Delta T_2$."
    ],
    rationale: "Correct pairing of hot and cold fluid terminal temperatures prevents inverted arithmetic errors in counter-flow LMTD formulas."
  },
  {
    id: "strat-14",
    subject: "PIPE",
    title: "Boiler Equivalent Evaporation",
    problem: "A steam boiler generates 5,000 kg/hr of dry saturated steam at 1.5 MPa from feedwater supplied at 60°C. What is the first governing step to compute boiler horsepower or equivalent evaporation?",
    steps: [
      "Step 1: Locate enthalpy of generated steam ($h_g$) at 1.5 MPa using saturated steam tables.",
      "Step 2: Calculate feedwater enthalpy ($h_{fw}$) based on entering temperature (60°C).",
      "Step 3: Compute actual heat added per kg ($h_g - h_{fw}$) and divide by latent heat factor (2257 kJ/kg)."
    ],
    rationale: "Equivalent evaporation requires establishing the net enthalpy change absorbed by water inside the boiler relative to standard reference conditions."
  },
  {
    id: "strat-15",
    subject: "Machine Design",
    title: "Angular Contact Ball Bearing Life Rating",
    problem: "A deep-groove ball bearing carries a radial load of 4 kN and a thrust load of 2.5 kN at 1,500 rpm. What is the initial step to compute rating life $L_{10}$?",
    steps: [
      "Step 1: Calculate equivalent dynamic load ($P = X \\cdot V \\cdot Fr + Y \\cdot Fa$) based on load ratio relative to static/dynamic rating thresholds.",
      "Step 2: Retrieve basic dynamic load rating ($C$) from manufacturer catalog tables for the specific bearing series.",
      "Step 3: Apply bearing life equation ($L_{10} = (C/P)^3$ for ball bearings)."
    ],
    rationale: "Combined radial and axial loads must first be converted into an equivalent single load $P$ before evaluating fatigue life exponents."
  },
  {
    id: "strat-16",
    subject: "Machine Design",
    title: "V-Belt Drive Power Transmission Capacity",
    problem: "A V-belt drive transmits 15 kW from a 200-mm driver pulley rotating at 1,750 rpm. What is the first step to determine effective belt pull and tension ratio?",
    steps: [
      "Step 1: Calculate belt linear velocity ($v = \\pi \\cdot D \\cdot N / 60$) using driver pulley diameter and speed.",
      "Step 2: Determine effective pulling force ($T_1 - T_2$) by dividing transmitted power by belt velocity ($P = (T_1 - T_2)v$).",
      "Step 3: Apply centrifugal tension and friction angle relationships to find tight-side ($T_1$) and slack-side ($T_2$) tensions."
    ],
    rationale: "Belt linear velocity connects rotational speed and mechanical power directly to net working tension forces."
  },
  {
    id: "strat-17",
    subject: "Math",
    title: "Newton's Law of Cooling in Industrial Quenching",
    problem: "A steel component initially at 500°C is quenched in an oil bath maintained at 30°C. If its temperature drops to 200°C in 5 minutes, what is the first mathematical step to find the time required to reach 50°C?",
    steps: [
      "Step 1: Set up the differential equation based on Newton's Law of Cooling ($dT/dt = -k(T - T_{\\infty})$).",
      "Step 2: Integrate both sides to arrive at the exponential decay equation ($T(t) = T_{\\infty} + (T_0 - T_{\\infty})e^{-kt}$).",
      "Step 3: Use the intermediate data point (T = 200°C at t = 5 min) to solve for the cooling constant $k$."
    ],
    rationale: "Transient cooling problems require solving for the system's characteristic cooling rate constant $k$ before forecasting future time intervals."
  },
  {
    id: "strat-18",
    subject: "Math",
    title: "Quality Control Sampling Inspection",
    problem: "A batch of 50 manufactured engine components contains 4 defectives. If a random sample of 5 is selected, what is the first step to find the probability that exactly 1 defective is found?",
    steps: [
      "Step 1: Identify that this follows a Hypergeometric Distribution model because sampling is done without replacement.",
      "Step 2: Calculate total possible combinations of selecting 5 items out of 50 ($_{50}C_5$).",
      "Step 3: Compute favorable outcomes by multiplying combinations of choosing 1 defective from 4 ($_4C_1$) with choosing 4 non-defectives from 46 ($_{46}C_4$)."
    ],
    rationale: "Recognizing hypergeometric sampling constraints ensures combinations are structured correctly without replacement probabilities."
  },
  {
    id: "strat-19",
    subject: "PIPE",
    title: "Centrifugal Pump Total Dynamic Head (TDH)",
    problem: "A centrifugal pump lifts water from an open well to an elevated tank through a 150-mm suction and discharge pipeline totaling 50 m with various fittings. What is the first step to compute TDH?",
    steps: [
      "Step 1: Apply the Bernoulli Energy Equation between the suction reservoir surface and discharge reservoir surface.",
      "Step 2: Calculate total static head (elevation difference between suction and discharge water levels).",
      "Step 3: Add friction head losses in straight pipes (Darcy-Weisbach or Hazen-Williams) and minor losses from valves and fittings."
    ],
    rationale: "Pump TDH is structurally the sum of net static elevation, pressure head difference, and all fluid friction losses across the system network."
  },
  {
    id: "strat-20",
    subject: "Machine Design",
    title: "Eccentric Loading on Fillet Welds",
    problem: "A bracket is secured to a vertical column by a fillet weld subjected to an eccentric shear load of 25 kN acting at a 200 mm distance. What is the first governing step to find maximum weld stress?",
    steps: [
      "Step 1: Locate the centroid (center of gravity) of the weld group pattern.",
      "Step 2: Resolve the eccentric load into a direct primary shear load ($V_1 = P / A$) and a secondary torsional twisting moment ($M = P \\cdot e$).",
      "Step 3: Determine the critical weld point farthest from the centroid experiencing combined primary and secondary shear vectors."
    ],
    rationale: "Eccentric weld connections must be analyzed by superimposing direct uniform shear and torsional rotational shear relative to the weld group centroid."
  }
];




export default function StrategyEngine() {
  const getRandomIndex = () => Math.floor(Math.random() * MOCK_PROBLEMS.length);

  const [currentIndex, setCurrentIndex] = useState(getRandomIndex);
  const [showFramework, setShowFramework] = useState(false);

  const prob = MOCK_PROBLEMS[currentIndex];

  const handleNextProblem = () => {
    setShowFramework(false);
    let nextIndex = getRandomIndex();
    if (MOCK_PROBLEMS.length > 1) {
      while (nextIndex === currentIndex) {
        nextIndex = getRandomIndex();
      }
    }
    setCurrentIndex(nextIndex);
  };

  return (
    <div className="content-column">
      <div className="content-panel strategy-panel">
        <div className="strategy-header">
          <span className="strategy-topic">
            {prob.subject} • 15-Second First Step Challenge
          </span>
        </div>

        <h3 className="strategy-title">{prob.title}</h3>
        <p className="strategy-problem">
          {prob.problem}
        </p>

        {!showFramework ? (
          <button
            onClick={() => setShowFramework(true)}
            className="primary-button strategy-button"
          >
            <Brain className="icon" /> Show Framework &amp; Derivation Flow
          </button>
        ) : (
          <div className="strategy-details">
            <div className="steps-box">
              <h4 className="steps-title">Step-by-Step Flowchart</h4>
              <ol className="steps-list">
                {prob.steps.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ol>
            </div>

            <div className="rationale-box">
              <strong>Why This Step?</strong>
              <p>{prob.rationale}</p>
            </div>

            <button
              onClick={handleNextProblem}
              className="secondary-button"
            >
              Try Another Problem
            </button>
          </div>
        )}
      </div>
    </div>
  );
}