// ===== IB PHYSICS FORMULA TRAINER - QUESTION DATABASE =====
// Batch 1 of 6: 50 questions covering A1 Kinematics, A2 Forces & Momentum,
// and cross-topic bridges with A3 Work/Energy/Power.
//
// Each question contains:
//   - id: unique identifier (format: {subtopic}_{level}_{number})
//   - text: the question text (with {{tooltip markers}})
//   - topic: which section (A, B, C, D, E)
//   - subtopic: specific subtopic (A1, A2, etc.)
//   - level: 1 (single formula) or 2 (multi-formula)
//   - slhl: "SL" or "HL" (minimum level required)
//   - tooltips: array of { phrase, tip }
//   - knowns: array of { symbol, value, unit, description }
//   - unknowns: array of { symbol, unit, description }
//   - acceptedSolutions: array of arrays — each inner array is one valid combination of formula IDs + constant IDs
//   - requiredConstants: array of constant IDs needed (for the primary solution)
//   - hints: array of 3 progressive hints
//   - explanation: LaTeX explanation shown after answering

const QUESTION_BANK = [

  // ============================================================
  // TOPIC A: SPACE, TIME AND MOTION
  // ============================================================

  // ===========================================================
  // A1 KINEMATICS — LEVEL 1 (12 questions: A1_L1_01 to A1_L1_12)
  // ===========================================================

  {
    id: "A1_L1_01",
    text: "A ball is thrown {{vertically upwards}} at {{5.0 m/s}}. Find the {{maximum height}} reached.",
    topic: "A",
    subtopic: "A1",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "vertically upwards", tip: "Motion is in one dimension. Acceleration due to gravity acts downwards." },
      { phrase: "5.0 m/s", tip: "This is the initial velocity, u = 5.0 m/s (upwards)." },
      { phrase: "maximum height", tip: "At the maximum height the ball stops momentarily, so v = 0." }
    ],
    knowns: [
      { symbol: "u", value: "5.0", unit: "m s⁻¹", description: "initial velocity (upwards)" },
      { symbol: "v", value: "0", unit: "m s⁻¹", description: "final velocity (at max height)" },
      { symbol: "a", value: "-9.8", unit: "m s⁻²", description: "acceleration (g, downwards)" }
    ],
    unknowns: [
      { symbol: "s", unit: "m", description: "displacement (maximum height)" }
    ],
    acceptedSolutions: [
      ["A1_4", "CONST_g"],
      ["A1_2", "A1_1", "CONST_g"],
      ["A1_2", "A1_3", "CONST_g"]
    ],
    requiredConstants: ["CONST_g"],
    hints: [
      "Think about what you know: u, v, and a. What are you trying to find?",
      "You know u, v, and a. You want s. Which SUVAT equation has these four variables?",
      "Look for the equation linking v², u², a, and s. Don't forget you need g."
    ],
    explanation: "Using \\(v^2 = u^2 + 2as\\), with \\(v = 0\\), \\(u = 5.0\\) m/s, and \\(a = -g = -9.8\\) m s\\(^{-2}\\): \\(s = \\frac{u^2}{2g} = \\frac{25}{19.6} \\approx 1.3\\) m."
  },

  {
    id: "A1_L1_02",
    text: "A car {{accelerates uniformly}} from {{rest}} to {{25 m/s}} in {{10 seconds}}. What {{distance}} does the car travel?",
    topic: "A",
    subtopic: "A1",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "accelerates uniformly", tip: "Constant acceleration — you can use the SUVAT equations." },
      { phrase: "rest", tip: "'From rest' means the initial velocity u = 0 m/s." },
      { phrase: "25 m/s", tip: "This is the final velocity, v = 25 m/s." },
      { phrase: "10 seconds", tip: "This is the time, t = 10 s." },
      { phrase: "distance", tip: "You are looking for the displacement s." }
    ],
    knowns: [
      { symbol: "u", value: "0", unit: "m s⁻¹", description: "initial velocity (from rest)" },
      { symbol: "v", value: "25", unit: "m s⁻¹", description: "final velocity" },
      { symbol: "t", value: "10", unit: "s", description: "time" }
    ],
    unknowns: [
      { symbol: "s", unit: "m", description: "displacement (distance)" }
    ],
    acceptedSolutions: [
      ["A1_1"],
      ["A1_2", "A1_3"],
      ["A1_2", "A1_4"]
    ],
    requiredConstants: [],
    hints: [
      "You know u, v, and t. You want s. Which equation connects these?",
      "Think about average velocity. If you know initial and final velocity plus time, how do you find displacement?",
      "Look for the equation: s = ((u + v) / 2) × t."
    ],
    explanation: "Using \\(s = \\frac{(u + v)}{2} \\times t = \\frac{(0 + 25)}{2} \\times 10 = 125\\) m."
  },

  {
    id: "A1_L1_03",
    text: "A stone is {{dropped}} from a bridge {{50 m}} above a river. How long does it take to {{reach the water}}?",
    topic: "A",
    subtopic: "A1",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "dropped", tip: "'Dropped' means released from rest, so initial velocity u = 0 m/s." },
      { phrase: "50 m", tip: "This is the displacement, s = 50 m (downwards)." },
      { phrase: "reach the water", tip: "You are looking for the time t." }
    ],
    knowns: [
      { symbol: "u", value: "0", unit: "m s⁻¹", description: "initial velocity (dropped)" },
      { symbol: "s", value: "50", unit: "m", description: "displacement (height of bridge)" },
      { symbol: "a", value: "9.8", unit: "m s⁻²", description: "acceleration due to gravity" }
    ],
    unknowns: [
      { symbol: "t", unit: "s", description: "time to reach the water" }
    ],
    acceptedSolutions: [
      ["A1_3", "CONST_g"],
      ["A1_4", "A1_2", "CONST_g"],
      ["A1_4", "A1_1", "CONST_g"]
    ],
    requiredConstants: ["CONST_g"],
    hints: [
      "You know u, s, and a. You want t. Which equation has these four variables?",
      "Since the stone is dropped, u = 0. This simplifies the equation significantly.",
      "Look for s = ut + ½at². With u = 0, this becomes s = ½at². You also need the constant g."
    ],
    explanation: "Using \\(s = ut + \\tfrac{1}{2}at^2\\). Since \\(u = 0\\): \\(50 = \\tfrac{1}{2} \\times 9.8 \\times t^2\\), so \\(t = \\sqrt{\\frac{100}{9.8}} \\approx 3.2\\) s."
  },

  {
    id: "A1_L1_04",
    text: "A cyclist {{decelerates}} from {{12 m/s}} to {{4.0 m/s}} over a distance of {{20 m}}. What is the {{acceleration}}?",
    topic: "A",
    subtopic: "A1",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "decelerates", tip: "Deceleration means the object is slowing down. The acceleration will be negative (opposing motion)." },
      { phrase: "12 m/s", tip: "This is the initial velocity, u = 12 m/s." },
      { phrase: "4.0 m/s", tip: "This is the final velocity, v = 4.0 m/s." },
      { phrase: "20 m", tip: "This is the displacement, s = 20 m." },
      { phrase: "acceleration", tip: "You are looking for a, the rate of change of velocity." }
    ],
    knowns: [
      { symbol: "u", value: "12", unit: "m s⁻¹", description: "initial velocity" },
      { symbol: "v", value: "4.0", unit: "m s⁻¹", description: "final velocity" },
      { symbol: "s", value: "20", unit: "m", description: "displacement" }
    ],
    unknowns: [
      { symbol: "a", unit: "m s⁻²", description: "acceleration" }
    ],
    acceptedSolutions: [
      ["A1_4"],
      ["A1_1", "A1_2"],
      ["A1_1", "A1_3"]
    ],
    requiredConstants: [],
    hints: [
      "You know u, v, and s. You want a. Which equation links these four?",
      "There is no time given in this question. Which equation doesn't need time?",
      "Look for v² = u² + 2as and rearrange for a."
    ],
    explanation: "Using \\(v^2 = u^2 + 2as\\): \\((4.0)^2 = (12)^2 + 2a(20)\\), so \\(16 = 144 + 40a\\), giving \\(a = -3.2\\) m s\\(^{-2}\\)."
  },

  {
    id: "A1_L1_05",
    text: "A train {{accelerates}} at {{0.50 m/s²}} from a {{stationary}} position. What is its {{velocity}} after {{30 seconds}}?",
    topic: "A",
    subtopic: "A1",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "accelerates", tip: "The train is speeding up at a constant rate." },
      { phrase: "0.50 m/s²", tip: "This is the acceleration, a = 0.50 m s⁻²." },
      { phrase: "stationary", tip: "'Stationary' means not moving, so initial velocity u = 0 m/s." },
      { phrase: "velocity", tip: "You are looking for the final velocity v." },
      { phrase: "30 seconds", tip: "This is the time, t = 30 s." }
    ],
    knowns: [
      { symbol: "u", value: "0", unit: "m s⁻¹", description: "initial velocity (stationary)" },
      { symbol: "a", value: "0.50", unit: "m s⁻²", description: "acceleration" },
      { symbol: "t", value: "30", unit: "s", description: "time" }
    ],
    unknowns: [
      { symbol: "v", unit: "m s⁻¹", description: "final velocity" }
    ],
    acceptedSolutions: [
      ["A1_2"]
    ],
    requiredConstants: [],
    hints: [
      "You know u, a, and t. You want v. This is the most straightforward SUVAT equation.",
      "Which equation directly gives you final velocity from initial velocity, acceleration, and time?",
      "Look for v = u + at."
    ],
    explanation: "Using \\(v = u + at = 0 + 0.50 \\times 30 = 15\\) m s\\(^{-1}\\)."
  },

  {
    id: "A1_L1_06",
    text: "A rocket sled {{accelerates}} from {{rest}} over a distance of {{400 m}}, reaching a speed of {{80 m/s}}. What is the {{acceleration}}?",
    topic: "A",
    subtopic: "A1",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "accelerates", tip: "The sled is speeding up — use SUVAT equations." },
      { phrase: "rest", tip: "Starting from rest means u = 0 m/s." },
      { phrase: "400 m", tip: "This is the displacement, s = 400 m." },
      { phrase: "80 m/s", tip: "This is the final velocity, v = 80 m/s." },
      { phrase: "acceleration", tip: "You are looking for a. No time is given." }
    ],
    knowns: [
      { symbol: "u", value: "0", unit: "m s⁻¹", description: "initial velocity (from rest)" },
      { symbol: "v", value: "80", unit: "m s⁻¹", description: "final velocity" },
      { symbol: "s", value: "400", unit: "m", description: "displacement" }
    ],
    unknowns: [
      { symbol: "a", unit: "m s⁻²", description: "acceleration" }
    ],
    acceptedSolutions: [
      ["A1_4"],
      ["A1_1", "A1_2"],
      ["A1_1", "A1_3"]
    ],
    requiredConstants: [],
    hints: [
      "You know u, v, and s but not t. Which SUVAT equation does not contain t?",
      "Think: v² = u² + 2as. Rearrange for a.",
      "With u = 0 the equation simplifies to a = v² / (2s)."
    ],
    explanation: "Using \\(v^2 = u^2 + 2as\\): \\((80)^2 = 0 + 2a(400)\\), so \\(a = \\frac{6400}{800} = 8.0\\) m s\\(^{-2}\\)."
  },

  {
    id: "A1_L1_07",
    text: "A ball is thrown {{downwards}} from a rooftop at {{3.0 m/s}}. After {{2.0 seconds}}, what is the ball's {{velocity}}?",
    topic: "A",
    subtopic: "A1",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "downwards", tip: "The initial velocity is in the same direction as gravity. Take downwards as positive." },
      { phrase: "3.0 m/s", tip: "This is the initial velocity, u = 3.0 m/s (downwards)." },
      { phrase: "2.0 seconds", tip: "This is the time, t = 2.0 s." },
      { phrase: "velocity", tip: "You are looking for the final velocity v after 2.0 s." }
    ],
    knowns: [
      { symbol: "u", value: "3.0", unit: "m s⁻¹", description: "initial velocity (downwards)" },
      { symbol: "a", value: "9.8", unit: "m s⁻²", description: "acceleration due to gravity (downwards positive)" },
      { symbol: "t", value: "2.0", unit: "s", description: "time" }
    ],
    unknowns: [
      { symbol: "v", unit: "m s⁻¹", description: "final velocity" }
    ],
    acceptedSolutions: [
      ["A1_2", "CONST_g"]
    ],
    requiredConstants: ["CONST_g"],
    hints: [
      "You know u, a, and t. You want v. This is a direct substitution.",
      "Which SUVAT equation links v, u, a, and t?",
      "Use v = u + at with a = g = 9.8 m s⁻²."
    ],
    explanation: "Using \\(v = u + at = 3.0 + 9.8 \\times 2.0 = 22.6\\) m s\\(^{-1}\\) (downwards) \\(\\approx 23\\) m s\\(^{-1}\\)."
  },

  {
    id: "A1_L1_08",
    text: "An aircraft on a runway {{accelerates uniformly}} at {{3.0 m/s²}} from {{rest}} for {{12 seconds}}. What {{distance}} does it cover during take-off?",
    topic: "A",
    subtopic: "A1",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "accelerates uniformly", tip: "Constant acceleration — SUVAT equations apply." },
      { phrase: "3.0 m/s²", tip: "This is the acceleration, a = 3.0 m s⁻²." },
      { phrase: "rest", tip: "Starting from rest means u = 0 m/s." },
      { phrase: "12 seconds", tip: "This is the time, t = 12 s." },
      { phrase: "distance", tip: "You are looking for the displacement s." }
    ],
    knowns: [
      { symbol: "u", value: "0", unit: "m s⁻¹", description: "initial velocity (from rest)" },
      { symbol: "a", value: "3.0", unit: "m s⁻²", description: "acceleration" },
      { symbol: "t", value: "12", unit: "s", description: "time" }
    ],
    unknowns: [
      { symbol: "s", unit: "m", description: "displacement (take-off distance)" }
    ],
    acceptedSolutions: [
      ["A1_3"],
      ["A1_2", "A1_1"],
      ["A1_2", "A1_4"]
    ],
    requiredConstants: [],
    hints: [
      "You know u, a, and t. You want s. Which SUVAT equation uses these?",
      "Since u = 0, the equation simplifies considerably.",
      "Look for s = ut + ½at². With u = 0 this becomes s = ½at²."
    ],
    explanation: "Using \\(s = ut + \\tfrac{1}{2}at^2 = 0 + \\tfrac{1}{2} \\times 3.0 \\times (12)^2 = \\tfrac{1}{2} \\times 3.0 \\times 144 = 216\\) m."
  },

  {
    id: "A1_L1_09",
    text: "A braking car travels {{45 m}} while {{decelerating}} uniformly from {{30 m/s}} to rest. How long does the car take to {{stop}}?",
    topic: "A",
    subtopic: "A1",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "45 m", tip: "This is the displacement during braking, s = 45 m." },
      { phrase: "decelerating", tip: "The car is slowing down — acceleration is negative." },
      { phrase: "30 m/s", tip: "This is the initial velocity, u = 30 m/s." },
      { phrase: "stop", tip: "The car comes to rest, so v = 0 m/s. You are looking for the time t." }
    ],
    knowns: [
      { symbol: "u", value: "30", unit: "m s⁻¹", description: "initial velocity" },
      { symbol: "v", value: "0", unit: "m s⁻¹", description: "final velocity (at rest)" },
      { symbol: "s", value: "45", unit: "m", description: "displacement" }
    ],
    unknowns: [
      { symbol: "t", unit: "s", description: "time to stop" }
    ],
    acceptedSolutions: [
      ["A1_1"],
      ["A1_4", "A1_2"],
      ["A1_4", "A1_3"]
    ],
    requiredConstants: [],
    hints: [
      "You know u, v, and s. You want t. Which equation contains these four variables?",
      "The average-velocity equation directly gives you t from u, v, and s.",
      "Use s = ((u + v) / 2) × t and rearrange for t."
    ],
    explanation: "Using \\(s = \\frac{(u + v)}{2} \\times t\\): \\(45 = \\frac{(30 + 0)}{2} \\times t = 15t\\), so \\(t = 3.0\\) s."
  },

  {
    id: "A1_L1_10",
    text: "A stone is thrown {{vertically upwards}} at {{20 m/s}}. How long does it take to {{return}} to the point from which it was thrown? Ignore air resistance.",
    topic: "A",
    subtopic: "A1",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "vertically upwards", tip: "The stone goes up, stops, and comes back down. Take upwards as positive." },
      { phrase: "20 m/s", tip: "This is the initial velocity, u = 20 m/s (upwards)." },
      { phrase: "return", tip: "When the stone returns to the starting point, the displacement s = 0." }
    ],
    knowns: [
      { symbol: "u", value: "20", unit: "m s⁻¹", description: "initial velocity (upwards)" },
      { symbol: "s", value: "0", unit: "m", description: "displacement (returns to start)" },
      { symbol: "a", value: "-9.8", unit: "m s⁻²", description: "acceleration (g, downwards)" }
    ],
    unknowns: [
      { symbol: "t", unit: "s", description: "total time of flight" }
    ],
    acceptedSolutions: [
      ["A1_3", "CONST_g"],
      ["A1_2", "A1_1", "CONST_g"]
    ],
    requiredConstants: ["CONST_g"],
    hints: [
      "When the stone returns, displacement is zero. Which equation uses s, u, a, and t?",
      "Use s = ut + ½at² and set s = 0. Factor out t.",
      "0 = ut + ½at² gives t(u + ½at) = 0. Discard t = 0. Solve for the non-trivial t."
    ],
    explanation: "Using \\(s = ut + \\tfrac{1}{2}at^2\\) with \\(s = 0\\): \\(0 = 20t - \\tfrac{1}{2}(9.8)t^2\\). Factoring: \\(t(20 - 4.9t) = 0\\). So \\(t = 0\\) (start) or \\(t = \\frac{20}{4.9} \\approx 4.1\\) s."
  },

  {
    id: "A1_L1_11",
    text: "A motorbike {{accelerates uniformly}} from {{8.0 m/s}} to {{24 m/s}} in {{5.0 seconds}}. What is the {{acceleration}}?",
    topic: "A",
    subtopic: "A1",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "accelerates uniformly", tip: "Constant acceleration — SUVAT equations apply." },
      { phrase: "8.0 m/s", tip: "This is the initial velocity, u = 8.0 m/s." },
      { phrase: "24 m/s", tip: "This is the final velocity, v = 24 m/s." },
      { phrase: "5.0 seconds", tip: "This is the time, t = 5.0 s." },
      { phrase: "acceleration", tip: "You are looking for a = Δv / Δt." }
    ],
    knowns: [
      { symbol: "u", value: "8.0", unit: "m s⁻¹", description: "initial velocity" },
      { symbol: "v", value: "24", unit: "m s⁻¹", description: "final velocity" },
      { symbol: "t", value: "5.0", unit: "s", description: "time" }
    ],
    unknowns: [
      { symbol: "a", unit: "m s⁻²", description: "acceleration" }
    ],
    acceptedSolutions: [
      ["A1_2"]
    ],
    requiredConstants: [],
    hints: [
      "You know u, v, and t. You want a. Which equation has exactly these variables?",
      "Rearrange the simplest SUVAT equation for a.",
      "v = u + at, so a = (v − u) / t."
    ],
    explanation: "Using \\(v = u + at\\): \\(a = \\frac{v - u}{t} = \\frac{24 - 8.0}{5.0} = 3.2\\) m s\\(^{-2}\\)."
  },

  {
    id: "A1_L1_12",
    text: "A bullet leaves a rifle barrel of length {{0.80 m}} with a speed of {{320 m/s}}. Assuming {{uniform acceleration}} from rest, what is the {{acceleration}} of the bullet inside the barrel?",
    topic: "A",
    subtopic: "A1",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "0.80 m", tip: "This is the displacement (barrel length), s = 0.80 m." },
      { phrase: "320 m/s", tip: "This is the final velocity, v = 320 m/s." },
      { phrase: "uniform acceleration", tip: "Constant acceleration — SUVAT equations apply. The bullet starts from rest (u = 0)." },
      { phrase: "acceleration", tip: "You are looking for a. No time is given." }
    ],
    knowns: [
      { symbol: "u", value: "0", unit: "m s⁻¹", description: "initial velocity (from rest)" },
      { symbol: "v", value: "320", unit: "m s⁻¹", description: "final velocity" },
      { symbol: "s", value: "0.80", unit: "m", description: "displacement (barrel length)" }
    ],
    unknowns: [
      { symbol: "a", unit: "m s⁻²", description: "acceleration" }
    ],
    acceptedSolutions: [
      ["A1_4"],
      ["A1_1", "A1_2"],
      ["A1_1", "A1_3"]
    ],
    requiredConstants: [],
    hints: [
      "You know u, v, and s. No time is given. Which equation links these to a?",
      "Use the SUVAT equation that does not involve time.",
      "v² = u² + 2as. Rearrange for a."
    ],
    explanation: "Using \\(v^2 = u^2 + 2as\\): \\((320)^2 = 0 + 2a(0.80)\\), so \\(a = \\frac{102400}{1.6} = 6.4 \\times 10^4\\) m s\\(^{-2}\\)."
  },

  // ===========================================================
  // A1 KINEMATICS — LEVEL 2 (4 questions: A1_L2_01 to A1_L2_04)
  // ===========================================================

  {
    id: "A1_L2_01",
    text: "A car {{accelerates uniformly}} from {{rest}} at {{2.0 m/s²}} for {{8.0 seconds}}, then continues at {{constant velocity}} for another {{100 m}}. Find the {{total distance}} travelled.",
    topic: "A",
    subtopic: "A1",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "accelerates uniformly", tip: "Constant acceleration — use SUVAT equations for this phase." },
      { phrase: "rest", tip: "Initial velocity u = 0 m/s." },
      { phrase: "2.0 m/s²", tip: "Acceleration a = 2.0 m s⁻² for the first phase." },
      { phrase: "8.0 seconds", tip: "Time for the acceleration phase, t = 8.0 s." },
      { phrase: "constant velocity", tip: "No acceleration in the second phase. The velocity stays at whatever it was at the end of the first phase." },
      { phrase: "100 m", tip: "This is the additional distance in the constant velocity phase." },
      { phrase: "total distance", tip: "Add the distance from the acceleration phase to the 100 m constant velocity phase." }
    ],
    knowns: [
      { symbol: "u", value: "0", unit: "m s⁻¹", description: "initial velocity (from rest)" },
      { symbol: "a", value: "2.0", unit: "m s⁻²", description: "acceleration (phase 1)" },
      { symbol: "t", value: "8.0", unit: "s", description: "time (phase 1)" },
      { symbol: "s₂", value: "100", unit: "m", description: "distance (phase 2)" }
    ],
    unknowns: [
      { symbol: "s_total", unit: "m", description: "total distance" }
    ],
    acceptedSolutions: [
      ["A1_3", "A1_2"],
      ["A1_3"],
      ["A1_2", "A1_1"],
      ["A1_2", "A1_4"]
    ],
    requiredConstants: [],
    hints: [
      "This is a two-phase problem. Phase 1: acceleration. Phase 2: constant velocity. You need to find the distance in phase 1.",
      "For phase 1, you know u, a, and t. Use s = ut + ½at² for the distance.",
      "Phase 1: s₁ = ½at² = ½(2.0)(8.0)² = 64 m. Total = 64 + 100 = 164 m."
    ],
    explanation: "Phase 1: \\(s_1 = ut + \\tfrac{1}{2}at^2 = 0 + \\tfrac{1}{2}(2.0)(8.0)^2 = 64\\) m. Total distance \\(= 64 + 100 = 164\\) m."
  },

  {
    id: "A1_L2_02",
    text: "A ball is thrown {{vertically upwards}} at {{15 m/s}}. Find the {{time}} at which the ball is {{8.0 m}} above the launch point on the way down.",
    topic: "A",
    subtopic: "A1",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "vertically upwards", tip: "Take upwards as positive. Acceleration a = −g." },
      { phrase: "15 m/s", tip: "This is the initial velocity, u = 15 m/s (upwards)." },
      { phrase: "time", tip: "The quadratic equation s = ut + ½at² gives two solutions — one for the way up and one for the way down." },
      { phrase: "8.0 m", tip: "This is the displacement, s = 8.0 m (upwards from launch)." }
    ],
    knowns: [
      { symbol: "u", value: "15", unit: "m s⁻¹", description: "initial velocity (upwards)" },
      { symbol: "s", value: "8.0", unit: "m", description: "displacement (above launch)" },
      { symbol: "a", value: "-9.8", unit: "m s⁻²", description: "acceleration (g, downwards)" }
    ],
    unknowns: [
      { symbol: "t", unit: "s", description: "time (on the way down)" }
    ],
    acceptedSolutions: [
      ["A1_3", "CONST_g"],
      ["A1_4", "A1_2", "CONST_g"]
    ],
    requiredConstants: ["CONST_g"],
    hints: [
      "Use s = ut + ½at² with s = 8.0, u = 15, a = −9.8. This gives a quadratic in t.",
      "Rearrange to 4.9t² − 15t + 8.0 = 0 and use the quadratic formula.",
      "You get two times: one on the way up, one on the way down. Pick the larger value."
    ],
    explanation: "Using \\(s = ut + \\tfrac{1}{2}at^2\\): \\(8.0 = 15t - 4.9t^2\\). Rearranging: \\(4.9t^2 - 15t + 8.0 = 0\\). Using the quadratic formula: \\(t = \\frac{15 \\pm \\sqrt{225 - 156.8}}{9.8} = \\frac{15 \\pm 8.26}{9.8}\\). This gives \\(t \\approx 0.69\\) s (way up) or \\(t \\approx 2.4\\) s (way down)."
  },

  {
    id: "A1_L2_03",
    text: "An object {{accelerates uniformly}} from {{4.0 m/s}} over a distance of {{60 m}}. The acceleration is {{1.5 m/s²}}. Find the {{time}} taken.",
    topic: "A",
    subtopic: "A1",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "accelerates uniformly", tip: "Constant acceleration — SUVAT equations apply." },
      { phrase: "4.0 m/s", tip: "This is the initial velocity, u = 4.0 m/s." },
      { phrase: "60 m", tip: "This is the displacement, s = 60 m." },
      { phrase: "1.5 m/s²", tip: "This is the acceleration, a = 1.5 m s⁻²." },
      { phrase: "time", tip: "You are looking for t. You might need to find v first, or solve a quadratic." }
    ],
    knowns: [
      { symbol: "u", value: "4.0", unit: "m s⁻¹", description: "initial velocity" },
      { symbol: "s", value: "60", unit: "m", description: "displacement" },
      { symbol: "a", value: "1.5", unit: "m s⁻²", description: "acceleration" }
    ],
    unknowns: [
      { symbol: "t", unit: "s", description: "time" }
    ],
    acceptedSolutions: [
      ["A1_4", "A1_2"],
      ["A1_4", "A1_1"],
      ["A1_3"]
    ],
    requiredConstants: [],
    hints: [
      "You know u, s, and a but not v or t. You could solve s = ut + ½at² as a quadratic in t, or find v first using v² = u² + 2as.",
      "Finding v first is often easier. v² = u² + 2as = 16 + 180 = 196, so v = 14 m/s. Then use v = u + at.",
      "From v = u + at: 14 = 4.0 + 1.5t, so t = 10/1.5 ≈ 6.7 s."
    ],
    explanation: "First find \\(v\\): \\(v^2 = u^2 + 2as = 16 + 2(1.5)(60) = 196\\), so \\(v = 14\\) m s\\(^{-1}\\). Then \\(v = u + at\\): \\(14 = 4.0 + 1.5t\\), giving \\(t = \\frac{10}{1.5} \\approx 6.7\\) s."
  },

  {
    id: "A1_L2_04",
    text: "A car travelling at {{v}} brakes and comes to rest over a distance {{d}}. If the car had been travelling at {{2v}}, what would the {{new braking distance}} be, assuming the same braking force?",
    topic: "A",
    subtopic: "A1",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "v", tip: "The initial speed in the first scenario. No number is given — this is a proportional reasoning question." },
      { phrase: "2v", tip: "In the second scenario the speed is doubled." },
      { phrase: "new braking distance", tip: "Use proportional reasoning. How does d depend on the initial speed?" }
    ],
    knowns: [
      { symbol: "u₁", value: "v", unit: "m s⁻¹", description: "initial speed (scenario 1)" },
      { symbol: "u₂", value: "2v", unit: "m s⁻¹", description: "initial speed (scenario 2)" },
      { symbol: "v_f", value: "0", unit: "m s⁻¹", description: "final velocity (at rest)" }
    ],
    unknowns: [
      { symbol: "d₂", unit: "m", description: "new braking distance" }
    ],
    acceptedSolutions: [
      ["A1_4"]
    ],
    requiredConstants: [],
    hints: [
      "Use v² = u² + 2as. The final velocity is 0 in both cases, and the acceleration is the same.",
      "From v² = u² + 2as with v = 0: s = u²/(2a). So s is proportional to u².",
      "If u is doubled, s increases by a factor of 2² = 4. The new braking distance is 4d."
    ],
    explanation: "From \\(v^2 = u^2 + 2as\\) with \\(v = 0\\): \\(s = \\frac{u^2}{2a}\\). Since \\(a\\) is the same, \\(s \\propto u^2\\). Doubling \\(u\\) gives \\(s_2 = 4d\\)."
  },

  // ===========================================================
  // A2 FORCES & MOMENTUM — LEVEL 1 (14 questions: A2_L1_01 to A2_L1_14)
  // ===========================================================

  {
    id: "A2_L1_01",
    text: "What is the {{weight}} of a {{75 kg}} person standing on the surface of the Earth?",
    topic: "A",
    subtopic: "A2",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "weight", tip: "Weight is the gravitational force on an object. Weight = mg." },
      { phrase: "75 kg", tip: "This is the mass, m = 75 kg. On Earth, g = 9.8 m s⁻²." }
    ],
    knowns: [
      { symbol: "m", value: "75", unit: "kg", description: "mass" },
      { symbol: "g", value: "9.8", unit: "m s⁻²", description: "gravitational field strength (Earth surface)" }
    ],
    unknowns: [
      { symbol: "F_g", unit: "N", description: "weight (gravitational force)" }
    ],
    acceptedSolutions: [
      ["A2_6", "CONST_g"]
    ],
    requiredConstants: ["CONST_g"],
    hints: [
      "Weight is a force. What equation links force, mass, and gravity?",
      "Think about Newton's second law applied to gravity. You'll need the constant g.",
      "Look for F = mg in the Forces section."
    ],
    explanation: "Using \\(F_g = mg = 75 \\times 9.8 = 735\\) N \\(\\approx 740\\) N."
  },

  {
    id: "A2_L1_02",
    text: "A {{6.0 kg}} bowling ball travels at {{3.0 m/s}}. What is its {{momentum}}?",
    topic: "A",
    subtopic: "A2",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "6.0 kg", tip: "This is the mass, m = 6.0 kg." },
      { phrase: "3.0 m/s", tip: "This is the velocity, v = 3.0 m/s." },
      { phrase: "momentum", tip: "Momentum is the product of mass and velocity." }
    ],
    knowns: [
      { symbol: "m", value: "6.0", unit: "kg", description: "mass" },
      { symbol: "v", value: "3.0", unit: "m s⁻¹", description: "velocity" }
    ],
    unknowns: [
      { symbol: "p", unit: "kg m s⁻¹", description: "momentum" }
    ],
    acceptedSolutions: [
      ["A2_7"]
    ],
    requiredConstants: [],
    hints: [
      "Momentum involves mass and velocity. Look in the Forces and Momentum section.",
      "What simple equation links p, m, and v?",
      "Look for p = mv."
    ],
    explanation: "Using \\(p = mv = 6.0 \\times 3.0 = 18\\) kg m s\\(^{-1}\\)."
  },

  {
    id: "A2_L1_03",
    text: "A {{constant force}} of {{200 N}} acts on a {{50 kg}} object. What is the {{acceleration}} of the object?",
    topic: "A",
    subtopic: "A2",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "constant force", tip: "A constant net force means constant acceleration (Newton's second law)." },
      { phrase: "200 N", tip: "This is the net force, F = 200 N." },
      { phrase: "50 kg", tip: "This is the mass, m = 50 kg." },
      { phrase: "acceleration", tip: "Acceleration is the rate of change of velocity. Units: m s⁻²." }
    ],
    knowns: [
      { symbol: "F", value: "200", unit: "N", description: "net force" },
      { symbol: "m", value: "50", unit: "kg", description: "mass" }
    ],
    unknowns: [
      { symbol: "a", unit: "m s⁻²", description: "acceleration" }
    ],
    acceptedSolutions: [
      ["A2_9"]
    ],
    requiredConstants: [],
    hints: [
      "You know the force and the mass. Newton's most famous law links these to acceleration.",
      "F = ma. Rearrange to find a.",
      "a = F/m = 200/50."
    ],
    explanation: "Using \\(F = ma\\): \\(200 = 50 \\times a\\), so \\(a = 4.0\\) m s\\(^{-2}\\)."
  },

  {
    id: "A2_L1_04",
    text: "A {{spring}} has a {{spring constant}} of {{250 N/m}} and is stretched by {{0.12 m}}. What is the magnitude of the {{restoring force}}?",
    topic: "A",
    subtopic: "A2",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "spring", tip: "An elastic spring obeys Hooke's law within its elastic limit." },
      { phrase: "spring constant", tip: "k = 250 N/m. This measures the stiffness of the spring." },
      { phrase: "0.12 m", tip: "This is the extension, x = 0.12 m." },
      { phrase: "restoring force", tip: "The force the spring exerts to return to its natural length. It opposes the extension." }
    ],
    knowns: [
      { symbol: "k", value: "250", unit: "N m⁻¹", description: "spring constant" },
      { symbol: "x", value: "0.12", unit: "m", description: "extension" }
    ],
    unknowns: [
      { symbol: "F_H", unit: "N", description: "restoring force (magnitude)" }
    ],
    acceptedSolutions: [
      ["A2_3"]
    ],
    requiredConstants: [],
    hints: [
      "This is about a spring. Which law describes the force in a spring?",
      "Hooke's law: the force is proportional to the extension.",
      "F = kx (magnitude). The restoring force opposes the displacement."
    ],
    explanation: "Using Hooke's law \\(|F_H| = kx = 250 \\times 0.12 = 30\\) N."
  },

  {
    id: "A2_L1_05",
    text: "A {{2.0 kg}} book rests on a table. The {{coefficient of static friction}} between the book and the table is {{0.35}}. What is the {{maximum horizontal force}} that can be applied before the book starts to slide?",
    topic: "A",
    subtopic: "A2",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "2.0 kg", tip: "Mass of the book, m = 2.0 kg." },
      { phrase: "coefficient of static friction", tip: "μs = 0.35. This gives the maximum friction force before sliding begins." },
      { phrase: "0.35", tip: "This is μs. The normal force equals the weight on a horizontal surface." },
      { phrase: "maximum horizontal force", tip: "At the point of sliding, the applied force equals the maximum static friction." }
    ],
    knowns: [
      { symbol: "m", value: "2.0", unit: "kg", description: "mass" },
      { symbol: "μ_s", value: "0.35", unit: "", description: "coefficient of static friction" },
      { symbol: "g", value: "9.8", unit: "m s⁻²", description: "gravitational field strength" }
    ],
    unknowns: [
      { symbol: "F_f", unit: "N", description: "maximum static friction force" }
    ],
    acceptedSolutions: [
      ["A2_1", "A2_6", "CONST_g"],
      ["A2_1", "CONST_g"]
    ],
    requiredConstants: ["CONST_g"],
    hints: [
      "The maximum friction force before sliding uses the static friction formula. You also need to find the normal force.",
      "On a horizontal surface, the normal force equals the weight: FN = mg.",
      "Ff = μs × FN = μs × mg."
    ],
    explanation: "Normal force \\(F_N = mg = 2.0 \\times 9.8 = 19.6\\) N. Maximum friction \\(F_f = \\mu_s F_N = 0.35 \\times 19.6 = 6.9\\) N."
  },

  {
    id: "A2_L1_06",
    text: "A {{5.0 kg}} box slides across a floor at constant speed. The {{coefficient of dynamic friction}} is {{0.40}}. What is the {{friction force}} acting on the box?",
    topic: "A",
    subtopic: "A2",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "5.0 kg", tip: "Mass of the box, m = 5.0 kg." },
      { phrase: "coefficient of dynamic friction", tip: "μd = 0.40. This gives the friction force during sliding." },
      { phrase: "0.40", tip: "This is μd. The normal force equals the weight on a horizontal surface." },
      { phrase: "friction force", tip: "Dynamic (kinetic) friction acts on a sliding object." }
    ],
    knowns: [
      { symbol: "m", value: "5.0", unit: "kg", description: "mass" },
      { symbol: "μ_d", value: "0.40", unit: "", description: "coefficient of dynamic friction" },
      { symbol: "g", value: "9.8", unit: "m s⁻²", description: "gravitational field strength" }
    ],
    unknowns: [
      { symbol: "F_f", unit: "N", description: "dynamic friction force" }
    ],
    acceptedSolutions: [
      ["A2_2", "A2_6", "CONST_g"],
      ["A2_2", "CONST_g"]
    ],
    requiredConstants: ["CONST_g"],
    hints: [
      "The box is sliding, so use the dynamic friction formula. You also need to find the normal force.",
      "On a horizontal surface, the normal force equals the weight: FN = mg.",
      "Ff = μd × FN = μd × mg."
    ],
    explanation: "Normal force \\(F_N = mg = 5.0 \\times 9.8 = 49\\) N. Friction \\(F_f = \\mu_d F_N = 0.40 \\times 49 = 19.6\\) N \\(\\approx 20\\) N."
  },

  {
    id: "A2_L1_07",
    text: "A force acts on a {{4.0 kg}} object for {{0.50 s}}, producing an {{impulse}} of {{12 N s}}. What is the {{average force}}?",
    topic: "A",
    subtopic: "A2",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "4.0 kg", tip: "Mass of the object, m = 4.0 kg." },
      { phrase: "0.50 s", tip: "This is the time interval, Δt = 0.50 s." },
      { phrase: "impulse", tip: "Impulse is the product of force and time. It equals the change in momentum." },
      { phrase: "12 N s", tip: "This is the impulse, J = 12 N s." },
      { phrase: "average force", tip: "Average force can be found from impulse divided by time." }
    ],
    knowns: [
      { symbol: "J", value: "12", unit: "N s", description: "impulse" },
      { symbol: "Δt", value: "0.50", unit: "s", description: "time interval" }
    ],
    unknowns: [
      { symbol: "F", unit: "N", description: "average force" }
    ],
    acceptedSolutions: [
      ["A2_8"]
    ],
    requiredConstants: [],
    hints: [
      "Impulse is defined as force multiplied by time.",
      "J = FΔt. Rearrange for F.",
      "F = J / Δt = 12 / 0.50."
    ],
    explanation: "Using \\(J = F\\Delta t\\): \\(F = \\frac{J}{\\Delta t} = \\frac{12}{0.50} = 24\\) N."
  },

  {
    id: "A2_L1_08",
    text: "A wooden block of volume {{0.030 m³}} is fully submerged in water (density {{1000 kg/m³}}). What is the {{buoyant force}} on the block?",
    topic: "A",
    subtopic: "A2",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "0.030 m³", tip: "This is the volume of fluid displaced, V = 0.030 m³." },
      { phrase: "1000 kg/m³", tip: "This is the density of water, ρ = 1000 kg m⁻³." },
      { phrase: "buoyant force", tip: "The upward force exerted on a submerged object by the surrounding fluid." }
    ],
    knowns: [
      { symbol: "V", value: "0.030", unit: "m³", description: "volume displaced" },
      { symbol: "ρ", value: "1000", unit: "kg m⁻³", description: "density of water" },
      { symbol: "g", value: "9.8", unit: "m s⁻²", description: "gravitational field strength" }
    ],
    unknowns: [
      { symbol: "F_b", unit: "N", description: "buoyant force" }
    ],
    acceptedSolutions: [
      ["A2_5", "CONST_g"]
    ],
    requiredConstants: ["CONST_g"],
    hints: [
      "The buoyant force depends on the weight of displaced fluid.",
      "Look for the buoyancy formula: Fb = ρVg.",
      "Fb = 1000 × 0.030 × 9.8."
    ],
    explanation: "Using \\(F_b = \\rho V g = 1000 \\times 0.030 \\times 9.8 = 294\\) N \\(\\approx 290\\) N."
  },

  {
    id: "A2_L1_09",
    text: "A small sphere of radius {{0.50 mm}} falls at a terminal velocity of {{0.020 m/s}} through oil with viscosity {{0.15 Pa s}}. What is the {{viscous drag force}}?",
    topic: "A",
    subtopic: "A2",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "0.50 mm", tip: "Radius of the sphere, r = 0.50 mm = 5.0 × 10⁻⁴ m. Convert to metres." },
      { phrase: "0.020 m/s", tip: "This is the velocity, v = 0.020 m/s." },
      { phrase: "0.15 Pa s", tip: "This is the dynamic viscosity of the oil, η = 0.15 Pa s." },
      { phrase: "viscous drag force", tip: "For a sphere moving slowly through a viscous fluid, use Stokes' law." }
    ],
    knowns: [
      { symbol: "r", value: "5.0 × 10⁻⁴", unit: "m", description: "radius of sphere" },
      { symbol: "v", value: "0.020", unit: "m s⁻¹", description: "velocity" },
      { symbol: "η", value: "0.15", unit: "Pa s", description: "viscosity of oil" }
    ],
    unknowns: [
      { symbol: "F_d", unit: "N", description: "viscous drag force" }
    ],
    acceptedSolutions: [
      ["A2_4"]
    ],
    requiredConstants: [],
    hints: [
      "A sphere in a viscous fluid — which law gives the drag force for this situation?",
      "Stokes' law gives the drag force for a sphere at low Reynolds number.",
      "Fd = 6πηrv. Make sure r is in metres."
    ],
    explanation: "Using Stokes' law: \\(F_d = 6\\pi\\eta r v = 6\\pi \\times 0.15 \\times 5.0 \\times 10^{-4} \\times 0.020 = 2.83 \\times 10^{-5}\\) N \\(\\approx 2.8 \\times 10^{-5}\\) N."
  },

  {
    id: "A2_L1_10",
    text: "A car of mass {{1200 kg}} travels round a {{horizontal circular bend}} of radius {{50 m}} at a constant speed of {{15 m/s}}. What is the {{centripetal acceleration}}?",
    topic: "A",
    subtopic: "A2",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "1200 kg", tip: "Mass of the car, m = 1200 kg. (Not needed to find centripetal acceleration.)" },
      { phrase: "horizontal circular bend", tip: "The car follows a circular path — centripetal acceleration is directed towards the centre." },
      { phrase: "50 m", tip: "Radius of the bend, r = 50 m." },
      { phrase: "15 m/s", tip: "Speed of the car, v = 15 m/s." },
      { phrase: "centripetal acceleration", tip: "The acceleration directed towards the centre of the circular path." }
    ],
    knowns: [
      { symbol: "v", value: "15", unit: "m s⁻¹", description: "speed" },
      { symbol: "r", value: "50", unit: "m", description: "radius" }
    ],
    unknowns: [
      { symbol: "a", unit: "m s⁻²", description: "centripetal acceleration" }
    ],
    acceptedSolutions: [
      ["A2_10"]
    ],
    requiredConstants: [],
    hints: [
      "For circular motion, there is a formula linking centripetal acceleration, speed, and radius.",
      "The centripetal acceleration formula uses v and r.",
      "a = v²/r."
    ],
    explanation: "Using \\(a = \\frac{v^2}{r} = \\frac{(15)^2}{50} = \\frac{225}{50} = 4.5\\) m s\\(^{-2}\\)."
  },

  {
    id: "A2_L1_11",
    text: "A satellite orbits the Earth with a period of {{5400 s}} at an orbital radius of {{6.7 × 10⁶ m}}. What is the {{orbital speed}} of the satellite?",
    topic: "A",
    subtopic: "A2",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "5400 s", tip: "This is the orbital period, T = 5400 s (90 minutes)." },
      { phrase: "6.7 × 10⁶ m", tip: "This is the orbital radius, r = 6.7 × 10⁶ m." },
      { phrase: "orbital speed", tip: "The speed of an object in circular orbit. It covers one circumference per period." }
    ],
    knowns: [
      { symbol: "T", value: "5400", unit: "s", description: "orbital period" },
      { symbol: "r", value: "6.7 × 10⁶", unit: "m", description: "orbital radius" }
    ],
    unknowns: [
      { symbol: "v", unit: "m s⁻¹", description: "orbital speed" }
    ],
    acceptedSolutions: [
      ["A2_11"]
    ],
    requiredConstants: [],
    hints: [
      "The satellite travels one full circumference in one period. Look for a formula linking v, r, and T.",
      "The circular motion speed formula connects v, r, and T.",
      "v = 2πr / T."
    ],
    explanation: "Using \\(v = \\frac{2\\pi r}{T} = \\frac{2\\pi \\times 6.7 \\times 10^6}{5400} \\approx 7800\\) m s\\(^{-1}\\)."
  },

  {
    id: "A2_L1_12",
    text: "If a mass of {{m}} has momentum {{p}}, and the mass is {{tripled}} while speed is {{halved}}, what is the {{new momentum}}?",
    topic: "A",
    subtopic: "A2",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "m", tip: "The original mass — no specific number is given." },
      { phrase: "p", tip: "The original momentum, p = mv." },
      { phrase: "tripled", tip: "New mass = 3m." },
      { phrase: "halved", tip: "New speed = v/2." },
      { phrase: "new momentum", tip: "Use proportional reasoning with p = mv." }
    ],
    knowns: [
      { symbol: "m₁", value: "m", unit: "kg", description: "original mass" },
      { symbol: "v₁", value: "v", unit: "m s⁻¹", description: "original speed" },
      { symbol: "m₂", value: "3m", unit: "kg", description: "new mass" },
      { symbol: "v₂", value: "v/2", unit: "m s⁻¹", description: "new speed" }
    ],
    unknowns: [
      { symbol: "p₂", unit: "kg m s⁻¹", description: "new momentum" }
    ],
    acceptedSolutions: [
      ["A2_7"]
    ],
    requiredConstants: [],
    hints: [
      "Momentum is p = mv. How do the changes in m and v affect the product?",
      "New p = (3m)(v/2) = 3/2 × mv.",
      "The new momentum is 3p/2, or 1.5 times the original."
    ],
    explanation: "\\(p_2 = m_2 v_2 = (3m)\\left(\\frac{v}{2}\\right) = \\frac{3}{2}mv = \\frac{3}{2}p\\)."
  },

  {
    id: "A2_L1_13",
    text: "A force of {{F}} acts on a mass {{m}} producing acceleration {{a}}. If the force is doubled and the mass is halved, what is the {{new acceleration}} in terms of {{a}}?",
    topic: "A",
    subtopic: "A2",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "F", tip: "The original net force — no number is given." },
      { phrase: "m", tip: "The original mass." },
      { phrase: "new acceleration", tip: "Use proportional reasoning with F = ma." },
      { phrase: "a", tip: "The original acceleration. Express your answer as a multiple of a." }
    ],
    knowns: [
      { symbol: "F₁", value: "F", unit: "N", description: "original force" },
      { symbol: "m₁", value: "m", unit: "kg", description: "original mass" },
      { symbol: "F₂", value: "2F", unit: "N", description: "new force (doubled)" },
      { symbol: "m₂", value: "m/2", unit: "kg", description: "new mass (halved)" }
    ],
    unknowns: [
      { symbol: "a₂", unit: "m s⁻²", description: "new acceleration" }
    ],
    acceptedSolutions: [
      ["A2_9"]
    ],
    requiredConstants: [],
    hints: [
      "F = ma, so a = F/m. How does doubling F and halving m change a?",
      "New a = 2F / (m/2) = 4F/m.",
      "Since original a = F/m, new acceleration = 4a."
    ],
    explanation: "\\(a_2 = \\frac{F_2}{m_2} = \\frac{2F}{m/2} = \\frac{4F}{m} = 4a\\)."
  },

  {
    id: "A2_L1_14",
    text: "An object moves in a circle of radius {{r}} with speed {{v}}. If the radius is {{doubled}} and the speed stays the same, what happens to the {{centripetal acceleration}}?",
    topic: "A",
    subtopic: "A2",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "r", tip: "The original radius — no number is given." },
      { phrase: "v", tip: "The speed — no number is given." },
      { phrase: "doubled", tip: "The new radius is 2r." },
      { phrase: "centripetal acceleration", tip: "Use proportional reasoning with a = v²/r." }
    ],
    knowns: [
      { symbol: "r₁", value: "r", unit: "m", description: "original radius" },
      { symbol: "v", value: "v", unit: "m s⁻¹", description: "speed (unchanged)" },
      { symbol: "r₂", value: "2r", unit: "m", description: "new radius" }
    ],
    unknowns: [
      { symbol: "a₂", unit: "m s⁻²", description: "new centripetal acceleration" }
    ],
    acceptedSolutions: [
      ["A2_10"]
    ],
    requiredConstants: [],
    hints: [
      "Centripetal acceleration depends on v and r. How?",
      "a = v²/r. If v stays the same but r doubles, what happens to a?",
      "a is inversely proportional to r (when v is constant). Doubling r halves a."
    ],
    explanation: "\\(a = \\frac{v^2}{r}\\). With \\(v\\) constant and \\(r \\to 2r\\): \\(a_2 = \\frac{v^2}{2r} = \\frac{1}{2}a\\). The centripetal acceleration is halved."
  },

  // ===========================================================
  // A2 FORCES & MOMENTUM — LEVEL 2 (6 questions: A2_L2_01 to A2_L2_06)
  // ===========================================================

  {
    id: "A2_L2_01",
    text: "A {{0.40 kg}} ball moving at {{8.0 m/s}} hits a wall and {{bounces back}} at {{6.0 m/s}}. The ball is in contact with the wall for {{0.050 s}}. Find the {{average force}} exerted on the ball by the wall.",
    topic: "A",
    subtopic: "A2",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "0.40 kg", tip: "Mass of the ball, m = 0.40 kg." },
      { phrase: "8.0 m/s", tip: "Initial velocity, u = 8.0 m/s (towards wall)." },
      { phrase: "bounces back", tip: "The ball reverses direction. If initial direction is positive, the final velocity is negative: v = −6.0 m/s." },
      { phrase: "6.0 m/s", tip: "Speed after bouncing. Remember direction has changed, so v = −6.0 m/s." },
      { phrase: "0.050 s", tip: "Contact time, Δt = 0.050 s." },
      { phrase: "average force", tip: "Average force can be found from the impulse (change in momentum) divided by time." }
    ],
    knowns: [
      { symbol: "m", value: "0.40", unit: "kg", description: "mass" },
      { symbol: "u", value: "8.0", unit: "m s⁻¹", description: "initial velocity" },
      { symbol: "v", value: "-6.0", unit: "m s⁻¹", description: "final velocity (reversed direction)" },
      { symbol: "Δt", value: "0.050", unit: "s", description: "contact time" }
    ],
    unknowns: [
      { symbol: "F", unit: "N", description: "average force" }
    ],
    acceptedSolutions: [
      ["A2_7", "A2_9"],
      ["A2_9"],
      ["A2_7", "A2_8"],
      ["A2_8"]
    ],
    requiredConstants: [],
    hints: [
      "You need to find the change in momentum first, then use it to find force.",
      "Momentum = mv. Calculate momentum before and after. Remember direction changes!",
      "Δp = mv − mu = 0.40(−6.0) − 0.40(8.0) = −5.6 kg m s⁻¹. Then F = Δp/Δt."
    ],
    explanation: "\\(\\Delta p = mv - mu = 0.40(-6.0) - 0.40(8.0) = -2.4 - 3.2 = -5.6\\) kg m s\\(^{-1}\\). \\(F = \\frac{\\Delta p}{\\Delta t} = \\frac{-5.6}{0.050} = -112\\) N. The magnitude is 112 N."
  },

  {
    id: "A2_L2_02",
    text: "A {{3.0 kg}} block sits on a horizontal surface with {{coefficient of static friction 0.45}}. A spring with {{spring constant 600 N/m}} is attached to the block. How far must the spring be stretched before the block {{begins to move}}?",
    topic: "A",
    subtopic: "A2",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "3.0 kg", tip: "Mass of the block, m = 3.0 kg." },
      { phrase: "coefficient of static friction 0.45", tip: "μs = 0.45. This determines the maximum friction before sliding." },
      { phrase: "spring constant 600 N/m", tip: "k = 600 N/m." },
      { phrase: "begins to move", tip: "The block moves when the spring force exceeds the maximum static friction." }
    ],
    knowns: [
      { symbol: "m", value: "3.0", unit: "kg", description: "mass of block" },
      { symbol: "μ_s", value: "0.45", unit: "", description: "coefficient of static friction" },
      { symbol: "k", value: "600", unit: "N m⁻¹", description: "spring constant" },
      { symbol: "g", value: "9.8", unit: "m s⁻²", description: "gravitational field strength" }
    ],
    unknowns: [
      { symbol: "x", unit: "m", description: "spring extension at the point of sliding" }
    ],
    acceptedSolutions: [
      ["A2_1", "A2_3", "A2_6", "CONST_g"],
      ["A2_1", "A2_3", "CONST_g"]
    ],
    requiredConstants: ["CONST_g"],
    hints: [
      "The block moves when the spring force equals the maximum static friction. Set them equal.",
      "Spring force: F = kx. Maximum static friction: Ff = μs × FN = μs × mg.",
      "kx = μs mg, so x = μs mg / k."
    ],
    explanation: "At the point of motion: \\(kx = \\mu_s mg\\). So \\(x = \\frac{\\mu_s mg}{k} = \\frac{0.45 \\times 3.0 \\times 9.8}{600} = \\frac{13.23}{600} \\approx 0.022\\) m (22 mm)."
  },

  {
    id: "A2_L2_03",
    text: "A {{50 kg}} person stands in a lift (elevator) that {{accelerates upwards}} at {{2.0 m/s²}}. What is the {{apparent weight}} (normal force) felt by the person?",
    topic: "A",
    subtopic: "A2",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "50 kg", tip: "Mass of the person, m = 50 kg." },
      { phrase: "accelerates upwards", tip: "The net force is upward. The normal force must exceed the weight." },
      { phrase: "2.0 m/s²", tip: "The upward acceleration, a = 2.0 m s⁻²." },
      { phrase: "apparent weight", tip: "The normal force from the floor of the lift. This is what a scale would read." }
    ],
    knowns: [
      { symbol: "m", value: "50", unit: "kg", description: "mass" },
      { symbol: "a", value: "2.0", unit: "m s⁻²", description: "upward acceleration" },
      { symbol: "g", value: "9.8", unit: "m s⁻²", description: "gravitational field strength" }
    ],
    unknowns: [
      { symbol: "F_N", unit: "N", description: "normal force (apparent weight)" }
    ],
    acceptedSolutions: [
      ["A2_9", "A2_6", "CONST_g"],
      ["A2_9", "CONST_g"]
    ],
    requiredConstants: ["CONST_g"],
    hints: [
      "Draw a free-body diagram. There are two forces: weight (down) and normal force (up). Apply Newton's second law.",
      "Net force = ma (upwards). So FN − mg = ma.",
      "FN = m(g + a) = 50(9.8 + 2.0)."
    ],
    explanation: "Applying Newton's second law vertically: \\(F_N - mg = ma\\), so \\(F_N = m(g + a) = 50(9.8 + 2.0) = 50 \\times 11.8 = 590\\) N."
  },

  {
    id: "A2_L2_04",
    text: "A {{1500 kg}} car travels at {{20 m/s}} around a {{flat circular track}} of radius {{80 m}}. What {{frictional force}} must act on the tyres to keep the car on the track?",
    topic: "A",
    subtopic: "A2",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "1500 kg", tip: "Mass of the car, m = 1500 kg." },
      { phrase: "20 m/s", tip: "Speed of the car, v = 20 m/s." },
      { phrase: "flat circular track", tip: "The track is not banked, so friction provides all the centripetal force." },
      { phrase: "80 m", tip: "Radius of the circular track, r = 80 m." },
      { phrase: "frictional force", tip: "On a flat track, friction provides the centripetal force needed for circular motion." }
    ],
    knowns: [
      { symbol: "m", value: "1500", unit: "kg", description: "mass of car" },
      { symbol: "v", value: "20", unit: "m s⁻¹", description: "speed" },
      { symbol: "r", value: "80", unit: "m", description: "radius" }
    ],
    unknowns: [
      { symbol: "F_f", unit: "N", description: "frictional (centripetal) force" }
    ],
    acceptedSolutions: [
      ["A2_10", "A2_9"],
      ["A2_10"]
    ],
    requiredConstants: [],
    hints: [
      "On a flat track, friction is the centripetal force. You need the centripetal acceleration first.",
      "Find centripetal acceleration: a = v²/r. Then use F = ma.",
      "a = v²/r = 400/80 = 5.0 m s⁻². F = ma = 1500 × 5.0 = 7500 N."
    ],
    explanation: "Centripetal acceleration: \\(a = \\frac{v^2}{r} = \\frac{(20)^2}{80} = 5.0\\) m s\\(^{-2}\\). Frictional force: \\(F = ma = 1500 \\times 5.0 = 7500\\) N."
  },

  {
    id: "A2_L2_05",
    text: "A {{10 kg}} box is pushed across a rough horizontal floor by a {{constant force}} of {{60 N}}. The {{coefficient of dynamic friction}} is {{0.30}}. What is the {{acceleration}} of the box?",
    topic: "A",
    subtopic: "A2",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "10 kg", tip: "Mass of the box, m = 10 kg." },
      { phrase: "constant force", tip: "The applied force, F = 60 N (horizontal)." },
      { phrase: "60 N", tip: "This is the applied force pushing the box." },
      { phrase: "coefficient of dynamic friction", tip: "μd = 0.30. This gives the friction force opposing the motion." },
      { phrase: "0.30", tip: "This is μd." },
      { phrase: "acceleration", tip: "Find the net force (applied minus friction), then use F = ma." }
    ],
    knowns: [
      { symbol: "F_applied", value: "60", unit: "N", description: "applied force" },
      { symbol: "m", value: "10", unit: "kg", description: "mass" },
      { symbol: "μ_d", value: "0.30", unit: "", description: "coefficient of dynamic friction" },
      { symbol: "g", value: "9.8", unit: "m s⁻²", description: "gravitational field strength" }
    ],
    unknowns: [
      { symbol: "a", unit: "m s⁻²", description: "acceleration" }
    ],
    acceptedSolutions: [
      ["A2_2", "A2_6", "A2_9", "CONST_g"],
      ["A2_2", "A2_9", "CONST_g"]
    ],
    requiredConstants: ["CONST_g"],
    hints: [
      "There are two horizontal forces: the applied force and friction. Find the friction force first.",
      "Friction: Ff = μd × FN = μd × mg. Then net force = F_applied − Ff.",
      "Ff = 0.30 × 10 × 9.8 = 29.4 N. Net force = 60 − 29.4 = 30.6 N. a = F_net / m."
    ],
    explanation: "Friction: \\(F_f = \\mu_d mg = 0.30 \\times 10 \\times 9.8 = 29.4\\) N. Net force: \\(F_{net} = 60 - 29.4 = 30.6\\) N. Acceleration: \\(a = \\frac{F_{net}}{m} = \\frac{30.6}{10} = 3.06 \\approx 3.1\\) m s\\(^{-2}\\)."
  },

  {
    id: "A2_L2_06",
    text: "An impulse of {{J}} acts on a mass {{m}} initially at rest. Show that the resulting speed is {{J/m}}. If the impulse is {{doubled}}, what happens to the {{kinetic energy}}?",
    topic: "A",
    subtopic: "A2",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "J", tip: "Impulse — no specific number is given." },
      { phrase: "m", tip: "Mass of the object." },
      { phrase: "J/m", tip: "Since J = Δp = mv (from rest), v = J/m." },
      { phrase: "doubled", tip: "New impulse = 2J." },
      { phrase: "kinetic energy", tip: "Ek = ½mv². Express this in terms of J and m." }
    ],
    knowns: [
      { symbol: "J₁", value: "J", unit: "N s", description: "original impulse" },
      { symbol: "J₂", value: "2J", unit: "N s", description: "doubled impulse" },
      { symbol: "m", value: "m", unit: "kg", description: "mass" },
      { symbol: "u", value: "0", unit: "m s⁻¹", description: "initial velocity (at rest)" }
    ],
    unknowns: [
      { symbol: "E_k ratio", unit: "", description: "factor change in kinetic energy" }
    ],
    acceptedSolutions: [
      ["A2_8", "A2_7"]
    ],
    requiredConstants: [],
    hints: [
      "From impulse: J = mv, so v = J/m. Now write Ek in terms of J and m.",
      "Ek = ½mv² = ½m(J/m)² = J²/(2m). How does Ek change when J doubles?",
      "If J → 2J, then Ek → (2J)²/(2m) = 4J²/(2m). Kinetic energy quadruples."
    ],
    explanation: "From \\(J = mv\\): \\(v = J/m\\). So \\(E_k = \\tfrac{1}{2}mv^2 = \\frac{J^2}{2m}\\). If \\(J \\to 2J\\): \\(E_k' = \\frac{(2J)^2}{2m} = \\frac{4J^2}{2m} = 4E_k\\). The kinetic energy quadruples."
  },

  // ===========================================================
  // CROSS-TOPIC A1 + A2 — LEVEL 2 (4 questions: A1A2_L2_01 to A1A2_L2_04)
  // ===========================================================

  {
    id: "A1A2_L2_01",
    text: "A {{net force}} of {{600 N}} acts on a {{1200 kg}} car initially at {{rest}}. How far does the car travel in {{5.0 seconds}}?",
    topic: "A",
    subtopic: "A2",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "net force", tip: "The resultant force on the car — use Newton's second law to find the acceleration." },
      { phrase: "600 N", tip: "This is the net force, F = 600 N." },
      { phrase: "1200 kg", tip: "Mass of the car, m = 1200 kg." },
      { phrase: "rest", tip: "Initial velocity u = 0 m/s." },
      { phrase: "5.0 seconds", tip: "Time, t = 5.0 s." }
    ],
    knowns: [
      { symbol: "F", value: "600", unit: "N", description: "net force" },
      { symbol: "m", value: "1200", unit: "kg", description: "mass" },
      { symbol: "u", value: "0", unit: "m s⁻¹", description: "initial velocity (from rest)" },
      { symbol: "t", value: "5.0", unit: "s", description: "time" }
    ],
    unknowns: [
      { symbol: "s", unit: "m", description: "distance travelled" }
    ],
    acceptedSolutions: [
      ["A2_9", "A1_3"],
      ["A2_9", "A1_2", "A1_1"],
      ["A2_9", "A1_2", "A1_4"]
    ],
    requiredConstants: [],
    hints: [
      "You need two steps: first find the acceleration from the force, then use kinematics to find the distance.",
      "Step 1: F = ma, so a = F/m = 600/1200 = 0.50 m s⁻². Step 2: use s = ut + ½at².",
      "s = 0 + ½(0.50)(5.0)² = 6.25 m."
    ],
    explanation: "Step 1: \\(a = \\frac{F}{m} = \\frac{600}{1200} = 0.50\\) m s\\(^{-2}\\). Step 2: \\(s = ut + \\tfrac{1}{2}at^2 = 0 + \\tfrac{1}{2}(0.50)(5.0)^2 = 6.25\\) m \\(\\approx 6.3\\) m."
  },

  {
    id: "A1A2_L2_02",
    text: "A {{net force}} of {{800 N}} acts on a {{400 kg}} boat initially at rest. What is the {{velocity}} of the boat after it has travelled {{50 m}}?",
    topic: "A",
    subtopic: "A2",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "net force", tip: "Use Newton's second law to find acceleration." },
      { phrase: "800 N", tip: "This is the net force, F = 800 N." },
      { phrase: "400 kg", tip: "Mass of the boat, m = 400 kg." },
      { phrase: "50 m", tip: "Displacement, s = 50 m." },
      { phrase: "velocity", tip: "Find the acceleration first, then use a SUVAT equation." }
    ],
    knowns: [
      { symbol: "F", value: "800", unit: "N", description: "net force" },
      { symbol: "m", value: "400", unit: "kg", description: "mass" },
      { symbol: "u", value: "0", unit: "m s⁻¹", description: "initial velocity (at rest)" },
      { symbol: "s", value: "50", unit: "m", description: "displacement" }
    ],
    unknowns: [
      { symbol: "v", unit: "m s⁻¹", description: "final velocity" }
    ],
    acceptedSolutions: [
      ["A2_9", "A1_4"],
      ["A2_9", "A1_3", "A1_2"],
      ["A2_9", "A1_3", "A1_1"]
    ],
    requiredConstants: [],
    hints: [
      "First find the acceleration using F = ma, then use a SUVAT equation with u, a, and s.",
      "a = F/m = 800/400 = 2.0 m s⁻². Then v² = u² + 2as.",
      "v² = 0 + 2(2.0)(50) = 200. v = √200 ≈ 14 m s⁻¹."
    ],
    explanation: "\\(a = \\frac{F}{m} = \\frac{800}{400} = 2.0\\) m s\\(^{-2}\\). Using \\(v^2 = u^2 + 2as = 0 + 2(2.0)(50) = 200\\). So \\(v = \\sqrt{200} \\approx 14\\) m s\\(^{-1}\\)."
  },

  {
    id: "A1A2_L2_03",
    text: "A {{2.0 kg}} block is pushed from rest along a {{frictionless}} surface by a constant force. After {{3.0 s}} the block has a {{momentum}} of {{24 kg m/s}}. What {{distance}} has the block travelled?",
    topic: "A",
    subtopic: "A2",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "2.0 kg", tip: "Mass of the block, m = 2.0 kg." },
      { phrase: "frictionless", tip: "No friction — the applied force is the only horizontal force." },
      { phrase: "3.0 s", tip: "Time, t = 3.0 s." },
      { phrase: "momentum", tip: "p = mv. Use this to find the final velocity." },
      { phrase: "24 kg m/s", tip: "This is the momentum at t = 3.0 s, p = 24 kg m s⁻¹." },
      { phrase: "distance", tip: "You need to combine momentum and kinematics." }
    ],
    knowns: [
      { symbol: "m", value: "2.0", unit: "kg", description: "mass" },
      { symbol: "u", value: "0", unit: "m s⁻¹", description: "initial velocity (from rest)" },
      { symbol: "t", value: "3.0", unit: "s", description: "time" },
      { symbol: "p", value: "24", unit: "kg m s⁻¹", description: "final momentum" }
    ],
    unknowns: [
      { symbol: "s", unit: "m", description: "distance travelled" }
    ],
    acceptedSolutions: [
      ["A2_7", "A1_1"],
      ["A2_7", "A1_2", "A1_3"],
      ["A2_7", "A1_2", "A1_4"]
    ],
    requiredConstants: [],
    hints: [
      "From the momentum you can find the final velocity. Then you know u, v, and t — find s.",
      "v = p/m = 24/2.0 = 12 m/s. Now use s = ((u + v)/2) × t.",
      "s = ((0 + 12)/2) × 3.0 = 18 m."
    ],
    explanation: "Final velocity: \\(v = \\frac{p}{m} = \\frac{24}{2.0} = 12\\) m s\\(^{-1}\\). Distance: \\(s = \\frac{(u + v)}{2} \\times t = \\frac{(0 + 12)}{2} \\times 3.0 = 18\\) m."
  },

  {
    id: "A1A2_L2_04",
    text: "A {{0.50 kg}} toy car is propelled from rest by a spring that exerts an average force of {{4.0 N}} for {{0.30 s}}. What is the {{speed}} of the car after the spring releases it, and how far does it travel during the {{push}}?",
    topic: "A",
    subtopic: "A2",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "0.50 kg", tip: "Mass of the toy car, m = 0.50 kg." },
      { phrase: "4.0 N", tip: "Average force from the spring, F = 4.0 N." },
      { phrase: "0.30 s", tip: "Time during which the spring acts, Δt = 0.30 s." },
      { phrase: "speed", tip: "Use impulse to find the change in momentum, then find speed." },
      { phrase: "push", tip: "The distance during the push phase — use kinematics after finding the acceleration." }
    ],
    knowns: [
      { symbol: "m", value: "0.50", unit: "kg", description: "mass" },
      { symbol: "F", value: "4.0", unit: "N", description: "average force" },
      { symbol: "Δt", value: "0.30", unit: "s", description: "time of push" },
      { symbol: "u", value: "0", unit: "m s⁻¹", description: "initial velocity (from rest)" }
    ],
    unknowns: [
      { symbol: "v", unit: "m s⁻¹", description: "final speed" },
      { symbol: "s", unit: "m", description: "distance during push" }
    ],
    acceptedSolutions: [
      ["A2_8", "A2_7", "A1_1"],
      ["A2_9", "A1_2", "A1_3"],
      ["A2_9", "A1_2", "A1_1"]
    ],
    requiredConstants: [],
    hints: [
      "Find impulse first (J = FΔt), then use J = Δp = mv to find v.",
      "J = 4.0 × 0.30 = 1.2 N s. v = J/m = 1.2/0.50 = 2.4 m/s. Now find s.",
      "s = ((u + v)/2) × t = ((0 + 2.4)/2) × 0.30 = 0.36 m."
    ],
    explanation: "Impulse: \\(J = F\\Delta t = 4.0 \\times 0.30 = 1.2\\) N s. Speed: \\(v = \\frac{J}{m} = \\frac{1.2}{0.50} = 2.4\\) m s\\(^{-1}\\). Distance: \\(s = \\frac{(u+v)}{2} \\times t = \\frac{2.4}{2} \\times 0.30 = 0.36\\) m."
  },

  // ===========================================================
  // CROSS-TOPIC A1+A3 / A2+A3 — LEVEL 2 (10 questions: AX_L2_01 to AX_L2_10)
  // ===========================================================

  {
    id: "A1A3_L2_01",
    text: "A {{0.50 kg}} ball is {{dropped}} from a height of {{10 m}}. Assuming no air resistance, what is the {{speed}} of the ball just before it hits the ground?",
    topic: "A",
    subtopic: "A3",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "0.50 kg", tip: "Mass of the ball, m = 0.50 kg." },
      { phrase: "dropped", tip: "Dropped from rest, so initial velocity u = 0 m/s." },
      { phrase: "10 m", tip: "Height, Δh = 10 m." },
      { phrase: "speed", tip: "Use conservation of energy (PE → KE) or SUVAT." }
    ],
    knowns: [
      { symbol: "m", value: "0.50", unit: "kg", description: "mass" },
      { symbol: "Δh", value: "10", unit: "m", description: "height" },
      { symbol: "g", value: "9.8", unit: "m s⁻²", description: "gravitational field strength" }
    ],
    unknowns: [
      { symbol: "v", unit: "m s⁻¹", description: "speed at ground" }
    ],
    acceptedSolutions: [
      ["A3_3", "A3_2", "CONST_g"],
      ["A1_4", "CONST_g"],
      ["A1_3", "A1_2", "CONST_g"]
    ],
    requiredConstants: ["CONST_g"],
    hints: [
      "Think about energy conservation. What type of energy at the top? What type at the bottom?",
      "At the top: gravitational PE = mgΔh. At the bottom: KE = ½mv². Set them equal.",
      "mgΔh = ½mv². The mass cancels: v = √(2gΔh)."
    ],
    explanation: "By conservation of energy: \\(mg\\Delta h = \\tfrac{1}{2}mv^2\\). \\(v = \\sqrt{2g\\Delta h} = \\sqrt{2 \\times 9.8 \\times 10} = 14\\) m s\\(^{-1}\\)."
  },

  {
    id: "A1A3_L2_02",
    text: "A spring with {{spring constant 400 N/m}} is compressed by {{0.15 m}}. It launches a {{0.20 kg}} ball horizontally. What is the {{speed}} of the ball as it leaves the spring?",
    topic: "A",
    subtopic: "A3",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "spring constant 400 N/m", tip: "k = 400 N/m." },
      { phrase: "0.15 m", tip: "Compression, Δx = 0.15 m." },
      { phrase: "0.20 kg", tip: "Mass of the ball, m = 0.20 kg." },
      { phrase: "speed", tip: "Elastic PE converts to kinetic energy." }
    ],
    knowns: [
      { symbol: "k", value: "400", unit: "N m⁻¹", description: "spring constant" },
      { symbol: "Δx", value: "0.15", unit: "m", description: "compression" },
      { symbol: "m", value: "0.20", unit: "kg", description: "mass of ball" }
    ],
    unknowns: [
      { symbol: "v", unit: "m s⁻¹", description: "launch speed" }
    ],
    acceptedSolutions: [
      ["A3_4", "A3_2"]
    ],
    requiredConstants: [],
    hints: [
      "The spring stores elastic PE. When released, it converts to KE of the ball.",
      "Set elastic PE = KE: ½kΔx² = ½mv².",
      "v = √(kΔx²/m) = √(400 × 0.0225 / 0.20)."
    ],
    explanation: "\\(\\tfrac{1}{2}k\\Delta x^2 = \\tfrac{1}{2}mv^2\\). \\(v = \\sqrt{\\frac{k\\Delta x^2}{m}} = \\sqrt{\\frac{400 \\times (0.15)^2}{0.20}} = \\sqrt{45} \\approx 6.7\\) m s\\(^{-1}\\)."
  },

  {
    id: "A1A3_L2_03",
    text: "A {{1200 kg}} car accelerates from {{rest}} to {{25 m/s}} on a flat road. What is the minimum {{work}} done by the engine? (Ignore friction.)",
    topic: "A",
    subtopic: "A3",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "1200 kg", tip: "Mass of the car, m = 1200 kg." },
      { phrase: "rest", tip: "Initial velocity u = 0 m/s, so initial KE = 0." },
      { phrase: "25 m/s", tip: "Final velocity, v = 25 m/s." },
      { phrase: "work", tip: "By the work-energy theorem, net work = change in kinetic energy." }
    ],
    knowns: [
      { symbol: "m", value: "1200", unit: "kg", description: "mass" },
      { symbol: "u", value: "0", unit: "m s⁻¹", description: "initial velocity" },
      { symbol: "v", value: "25", unit: "m s⁻¹", description: "final velocity" }
    ],
    unknowns: [
      { symbol: "W", unit: "J", description: "work done by engine" }
    ],
    acceptedSolutions: [
      ["A3_2"],
      ["A3_1", "A2_9", "A1_4"]
    ],
    requiredConstants: [],
    hints: [
      "The work done equals the change in kinetic energy (work-energy theorem).",
      "Since the car starts from rest, W = ΔEk = ½mv² − 0.",
      "W = ½ × 1200 × (25)² = 375 000 J."
    ],
    explanation: "\\(W = \\Delta E_k = \\tfrac{1}{2}mv^2 - 0 = \\tfrac{1}{2} \\times 1200 \\times (25)^2 = 375000\\) J \\(= 375\\) kJ."
  },

  {
    id: "A2A3_L2_01",
    text: "A motor {{lifts}} a {{20 kg}} mass through a height of {{5.0 m}} in {{4.0 seconds}}. What is the {{power}} output of the motor?",
    topic: "A",
    subtopic: "A3",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "lifts", tip: "Lifting means doing work against gravity." },
      { phrase: "20 kg", tip: "Mass, m = 20 kg." },
      { phrase: "5.0 m", tip: "Height, Δh = 5.0 m." },
      { phrase: "4.0 seconds", tip: "Time, Δt = 4.0 s." },
      { phrase: "power", tip: "Power = work done / time. The work done is the gain in gravitational PE." }
    ],
    knowns: [
      { symbol: "m", value: "20", unit: "kg", description: "mass" },
      { symbol: "Δh", value: "5.0", unit: "m", description: "height" },
      { symbol: "g", value: "9.8", unit: "m s⁻²", description: "gravitational field strength" },
      { symbol: "Δt", value: "4.0", unit: "s", description: "time" }
    ],
    unknowns: [
      { symbol: "P", unit: "W", description: "power" }
    ],
    acceptedSolutions: [
      ["A3_3", "A3_5", "CONST_g"],
      ["A3_5", "CONST_g"]
    ],
    requiredConstants: ["CONST_g"],
    hints: [
      "Power is the rate of doing work. First find the work done against gravity.",
      "Work = ΔEp = mgΔh. Then P = W/Δt.",
      "P = mgΔh / Δt = 20 × 9.8 × 5.0 / 4.0."
    ],
    explanation: "Work done \\(= mg\\Delta h = 20 \\times 9.8 \\times 5.0 = 980\\) J. Power \\(= \\frac{\\Delta W}{\\Delta t} = \\frac{980}{4.0} = 245\\) W."
  },

  {
    id: "A2A3_L2_02",
    text: "A {{force of 120 N}} pushes a {{30 kg}} crate at a {{constant velocity}} across a rough floor for {{6.0 m}}. What is the {{coefficient of dynamic friction}}?",
    topic: "A",
    subtopic: "A3",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "force of 120 N", tip: "This is the applied force, F = 120 N (horizontal)." },
      { phrase: "30 kg", tip: "Mass of the crate, m = 30 kg." },
      { phrase: "constant velocity", tip: "Constant velocity means zero acceleration, so the net force is zero. Applied force = friction force." },
      { phrase: "6.0 m", tip: "Displacement, s = 6.0 m. (Not needed to find μd in this case.)" },
      { phrase: "coefficient of dynamic friction", tip: "μd = Ff / FN." }
    ],
    knowns: [
      { symbol: "F_applied", value: "120", unit: "N", description: "applied force" },
      { symbol: "m", value: "30", unit: "kg", description: "mass" },
      { symbol: "g", value: "9.8", unit: "m s⁻²", description: "gravitational field strength" },
      { symbol: "a", value: "0", unit: "m s⁻²", description: "acceleration (constant velocity)" }
    ],
    unknowns: [
      { symbol: "μ_d", unit: "", description: "coefficient of dynamic friction" }
    ],
    acceptedSolutions: [
      ["A2_2", "A2_6", "A2_9", "CONST_g"],
      ["A2_2", "A2_6", "CONST_g"],
      ["A2_2", "CONST_g"]
    ],
    requiredConstants: ["CONST_g"],
    hints: [
      "Constant velocity means the forces are balanced. So the applied force equals the friction force.",
      "Ff = F_applied = 120 N. Normal force FN = mg = 30 × 9.8 = 294 N.",
      "μd = Ff / FN = 120 / 294."
    ],
    explanation: "At constant velocity, \\(F_{applied} = F_f\\), so \\(F_f = 120\\) N. Normal force: \\(F_N = mg = 30 \\times 9.8 = 294\\) N. \\(\\mu_d = \\frac{F_f}{F_N} = \\frac{120}{294} \\approx 0.41\\)."
  },

  {
    id: "A2A3_L2_03",
    text: "A {{2.0 kg}} object has a {{momentum}} of {{10 kg m/s}}. What is its {{kinetic energy}}?",
    topic: "A",
    subtopic: "A3",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "2.0 kg", tip: "Mass of the object, m = 2.0 kg." },
      { phrase: "momentum", tip: "p = mv = 10 kg m s⁻¹." },
      { phrase: "10 kg m/s", tip: "This is the momentum, p = 10 kg m s⁻¹." },
      { phrase: "kinetic energy", tip: "You can express KE in terms of momentum using Ek = p²/(2m)." }
    ],
    knowns: [
      { symbol: "p", value: "10", unit: "kg m s⁻¹", description: "momentum" },
      { symbol: "m", value: "2.0", unit: "kg", description: "mass" }
    ],
    unknowns: [
      { symbol: "E_k", unit: "J", description: "kinetic energy" }
    ],
    acceptedSolutions: [
      ["A3_2", "A2_7"],
      ["A3_2"],
      ["A2_7", "A3_2"]
    ],
    requiredConstants: [],
    hints: [
      "You know p and m. You want Ek. Can you express kinetic energy directly in terms of momentum?",
      "Either find v from p = mv first, or use the formula Ek = p²/(2m) directly.",
      "Ek = p²/(2m) = (10)²/(2 × 2.0) = 25 J."
    ],
    explanation: "Using \\(E_k = \\frac{p^2}{2m} = \\frac{(10)^2}{2 \\times 2.0} = \\frac{100}{4.0} = 25\\) J. (Or: \\(v = p/m = 5.0\\) m s\\(^{-1}\\), \\(E_k = \\tfrac{1}{2}mv^2 = 25\\) J.)"
  },

  {
    id: "A1A3_L2_04",
    text: "A {{60 kg}} skier starts from rest at the top of a {{40 m}} high slope. What is the skier's {{speed}} at the bottom, assuming {{no friction}}?",
    topic: "A",
    subtopic: "A3",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "60 kg", tip: "Mass of the skier, m = 60 kg. (It will cancel out.)" },
      { phrase: "40 m", tip: "Vertical height, Δh = 40 m." },
      { phrase: "speed", tip: "Use conservation of energy: all PE converts to KE." },
      { phrase: "no friction", tip: "No energy is lost to friction, so total mechanical energy is conserved." }
    ],
    knowns: [
      { symbol: "m", value: "60", unit: "kg", description: "mass of skier" },
      { symbol: "Δh", value: "40", unit: "m", description: "vertical height" },
      { symbol: "g", value: "9.8", unit: "m s⁻²", description: "gravitational field strength" },
      { symbol: "u", value: "0", unit: "m s⁻¹", description: "initial velocity (from rest)" }
    ],
    unknowns: [
      { symbol: "v", unit: "m s⁻¹", description: "speed at bottom" }
    ],
    acceptedSolutions: [
      ["A3_3", "A3_2", "CONST_g"],
      ["A1_4", "CONST_g"]
    ],
    requiredConstants: ["CONST_g"],
    hints: [
      "Conservation of energy: gravitational PE at top = KE at bottom.",
      "mgΔh = ½mv². Mass cancels. Solve for v.",
      "v = √(2gΔh) = √(2 × 9.8 × 40)."
    ],
    explanation: "\\(mg\\Delta h = \\tfrac{1}{2}mv^2\\). \\(v = \\sqrt{2g\\Delta h} = \\sqrt{2 \\times 9.8 \\times 40} = \\sqrt{784} = 28\\) m s\\(^{-1}\\)."
  },

  {
    id: "A2A3_L2_04",
    text: "A {{4.0 kg}} box is pushed {{8.0 m}} across a floor by a {{50 N}} horizontal force. The {{coefficient of dynamic friction}} is {{0.25}}. What is the {{final speed}} of the box if it starts from rest?",
    topic: "A",
    subtopic: "A3",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "4.0 kg", tip: "Mass of the box, m = 4.0 kg." },
      { phrase: "8.0 m", tip: "Displacement, s = 8.0 m." },
      { phrase: "50 N", tip: "Applied force, F = 50 N." },
      { phrase: "coefficient of dynamic friction", tip: "μd = 0.25." },
      { phrase: "0.25", tip: "Use this to find the friction force: Ff = μd × mg." },
      { phrase: "final speed", tip: "Use work-energy theorem: net work = change in KE." }
    ],
    knowns: [
      { symbol: "m", value: "4.0", unit: "kg", description: "mass" },
      { symbol: "s", value: "8.0", unit: "m", description: "displacement" },
      { symbol: "F_applied", value: "50", unit: "N", description: "applied force" },
      { symbol: "μ_d", value: "0.25", unit: "", description: "coefficient of dynamic friction" },
      { symbol: "g", value: "9.8", unit: "m s⁻²", description: "gravitational field strength" },
      { symbol: "u", value: "0", unit: "m s⁻¹", description: "initial velocity (from rest)" }
    ],
    unknowns: [
      { symbol: "v", unit: "m s⁻¹", description: "final speed" }
    ],
    acceptedSolutions: [
      ["A3_1", "A2_2", "A2_6", "A3_2", "CONST_g"],
      ["A2_2", "A2_6", "A2_9", "A1_4", "CONST_g"],
      ["A3_1", "A2_2", "A3_2", "CONST_g"]
    ],
    requiredConstants: ["CONST_g"],
    hints: [
      "Find the net work done: work by applied force minus work by friction. This equals the change in KE.",
      "W_applied = Fs = 50 × 8.0 = 400 J. Friction = μd mg = 0.25 × 4.0 × 9.8 = 9.8 N. W_friction = 9.8 × 8.0 = 78.4 J.",
      "Net work = 400 − 78.4 = 321.6 J = ½mv². v = √(2 × 321.6 / 4.0)."
    ],
    explanation: "Friction force: \\(F_f = \\mu_d mg = 0.25 \\times 4.0 \\times 9.8 = 9.8\\) N. Net work: \\(W_{net} = (50 - 9.8) \\times 8.0 = 321.6\\) J. From \\(W_{net} = \\tfrac{1}{2}mv^2\\): \\(v = \\sqrt{\\frac{2 \\times 321.6}{4.0}} = \\sqrt{160.8} \\approx 12.7\\) m s\\(^{-1}\\)."
  },

  {
    id: "A2A3_L2_05",
    text: "A pump raises {{500 kg}} of water per minute through a height of {{12 m}}. What is the minimum {{power}} of the pump?",
    topic: "A",
    subtopic: "A3",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "500 kg", tip: "Mass of water per minute, m = 500 kg." },
      { phrase: "12 m", tip: "Height, Δh = 12 m." },
      { phrase: "power", tip: "Power = work done per unit time. The work is done against gravity." }
    ],
    knowns: [
      { symbol: "m", value: "500", unit: "kg", description: "mass of water per minute" },
      { symbol: "Δh", value: "12", unit: "m", description: "height" },
      { symbol: "g", value: "9.8", unit: "m s⁻²", description: "gravitational field strength" },
      { symbol: "Δt", value: "60", unit: "s", description: "time (1 minute)" }
    ],
    unknowns: [
      { symbol: "P", unit: "W", description: "power of pump" }
    ],
    acceptedSolutions: [
      ["A3_3", "A3_5", "CONST_g"],
      ["A3_5", "CONST_g"]
    ],
    requiredConstants: ["CONST_g"],
    hints: [
      "Find the work done lifting the water, then divide by the time.",
      "W = mgΔh = 500 × 9.8 × 12. Convert the time to seconds: 1 min = 60 s.",
      "P = mgΔh / Δt = 58800 / 60 = 980 W."
    ],
    explanation: "Work per minute: \\(W = mg\\Delta h = 500 \\times 9.8 \\times 12 = 58800\\) J. Power: \\(P = \\frac{W}{\\Delta t} = \\frac{58800}{60} = 980\\) W."
  },

  {
    id: "A2A3_L2_06",
    text: "A machine with an {{efficiency}} of {{0.75}} lifts a {{200 kg}} load through {{3.0 m}}. How much {{total work}} must the machine do?",
    topic: "A",
    subtopic: "A3",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "efficiency", tip: "η = useful work out / total work in. Here η = 0.75." },
      { phrase: "0.75", tip: "75% efficient — some energy is wasted." },
      { phrase: "200 kg", tip: "Mass of the load, m = 200 kg." },
      { phrase: "3.0 m", tip: "Height, Δh = 3.0 m." },
      { phrase: "total work", tip: "Total work in = useful work out / efficiency." }
    ],
    knowns: [
      { symbol: "η", value: "0.75", unit: "", description: "efficiency" },
      { symbol: "m", value: "200", unit: "kg", description: "mass" },
      { symbol: "Δh", value: "3.0", unit: "m", description: "height" },
      { symbol: "g", value: "9.8", unit: "m s⁻²", description: "gravitational field strength" }
    ],
    unknowns: [
      { symbol: "W_total", unit: "J", description: "total work input" }
    ],
    acceptedSolutions: [
      ["A3_3", "A3_6", "CONST_g"],
      ["A3_6", "A3_3", "CONST_g"]
    ],
    requiredConstants: ["CONST_g"],
    hints: [
      "First find the useful work done (lifting against gravity), then use efficiency to find total work.",
      "Useful work = mgΔh = 200 × 9.8 × 3.0 = 5880 J.",
      "η = useful / total, so total = useful / η = 5880 / 0.75."
    ],
    explanation: "Useful work: \\(W_{useful} = mg\\Delta h = 200 \\times 9.8 \\times 3.0 = 5880\\) J. Total work: \\(W_{total} = \\frac{W_{useful}}{\\eta} = \\frac{5880}{0.75} = 7840\\) J."
  },

  // ============================================================
  // BATCH 2: A3 WORK ENERGY POWER (SL) + A4 RIGID BODY (HL) + A5 RELATIVITY (HL)
  // ============================================================

  // ===========================================================
  // A3 WORK, ENERGY, POWER — LEVEL 1 (8 questions: A3_L1_04 to A3_L1_11)
  // ===========================================================

  {
    id: "A3_L1_04",
    text: "A gardener pushes a lawnmower with a force of {{150 N}} at an angle of {{30°}} to the horizontal across {{12 m}} of flat grass. Calculate the {{work done}} by the gardener.",
    topic: "A",
    subtopic: "A3",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "150 N", tip: "The applied force, F = 150 N." },
      { phrase: "30°", tip: "The angle between the force and the direction of displacement, θ = 30°." },
      { phrase: "12 m", tip: "The displacement along the ground, s = 12 m." },
      { phrase: "work done", tip: "Work done is the component of force along the displacement times the distance: W = Fs cos θ." }
    ],
    knowns: [
      { symbol: "F", value: "150", unit: "N", description: "applied force" },
      { symbol: "θ", value: "30", unit: "°", description: "angle to horizontal" },
      { symbol: "s", value: "12", unit: "m", description: "displacement" }
    ],
    unknowns: [
      { symbol: "W", unit: "J", description: "work done" }
    ],
    acceptedSolutions: [
      ["A3_1"]
    ],
    requiredConstants: [],
    hints: [
      "The force is at an angle — only the horizontal component does work along the displacement.",
      "Use W = Fs cos θ with F = 150 N, s = 12 m, θ = 30°.",
      "W = 150 × 12 × cos 30° = 150 × 12 × 0.866 ≈ 1560 J."
    ],
    explanation: "Using \\(W = Fs\\cos\\theta = 150 \\times 12 \\times \\cos 30° = 150 \\times 12 \\times 0.866 \\approx 1560\\) J."
  },

  {
    id: "A3_L1_05",
    text: "A {{0.40 kg}} ball travels at {{8.0 m s⁻¹}}. Calculate its {{kinetic energy}}.",
    topic: "A",
    subtopic: "A3",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "0.40 kg", tip: "Mass of the ball, m = 0.40 kg." },
      { phrase: "8.0 m s⁻¹", tip: "Speed of the ball, v = 8.0 m s⁻¹." },
      { phrase: "kinetic energy", tip: "The energy an object has due to its motion: Eₖ = ½mv²." }
    ],
    knowns: [
      { symbol: "m", value: "0.40", unit: "kg", description: "mass" },
      { symbol: "v", value: "8.0", unit: "m s⁻¹", description: "speed" }
    ],
    unknowns: [
      { symbol: "Eₖ", unit: "J", description: "kinetic energy" }
    ],
    acceptedSolutions: [
      ["A3_2"]
    ],
    requiredConstants: [],
    hints: [
      "You need the formula for kinetic energy in terms of mass and speed.",
      "Eₖ = ½mv². Substitute m = 0.40 kg and v = 8.0 m s⁻¹.",
      "Eₖ = ½ × 0.40 × 8.0² = 0.20 × 64 = 12.8 J."
    ],
    explanation: "Using \\(E_k = \\frac{1}{2}mv^2 = \\frac{1}{2} \\times 0.40 \\times 8.0^2 = 12.8\\) J."
  },

  {
    id: "A3_L1_06",
    text: "A crate of mass {{25 kg}} is lifted {{4.5 m}} vertically. Calculate the {{change in gravitational potential energy}}.",
    topic: "A",
    subtopic: "A3",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "25 kg", tip: "Mass of the crate, m = 25 kg." },
      { phrase: "4.5 m", tip: "Vertical height gained, Δh = 4.5 m." },
      { phrase: "change in gravitational potential energy", tip: "ΔEₚ = mgΔh, the energy stored due to position in a gravitational field." }
    ],
    knowns: [
      { symbol: "m", value: "25", unit: "kg", description: "mass" },
      { symbol: "Δh", value: "4.5", unit: "m", description: "height change" },
      { symbol: "g", value: "9.8", unit: "m s⁻²", description: "gravitational field strength" }
    ],
    unknowns: [
      { symbol: "ΔEₚ", unit: "J", description: "change in gravitational potential energy" }
    ],
    acceptedSolutions: [
      ["A3_3", "CONST_g"]
    ],
    requiredConstants: ["CONST_g"],
    hints: [
      "Gravitational PE depends on mass, gravitational field strength, and height change.",
      "Use ΔEₚ = mgΔh with m = 25 kg, g = 9.8 m s⁻², Δh = 4.5 m.",
      "ΔEₚ = 25 × 9.8 × 4.5 = 1103 J ≈ 1100 J."
    ],
    explanation: "Using \\(\\Delta E_p = mg\\Delta h = 25 \\times 9.8 \\times 4.5 = 1103\\) J \\(\\approx 1100\\) J."
  },

  {
    id: "A3_L1_07",
    text: "A spring with spring constant {{80 N m⁻¹}} is compressed by {{0.15 m}}. Calculate the {{elastic potential energy}} stored.",
    topic: "A",
    subtopic: "A3",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "80 N m⁻¹", tip: "Spring constant, k = 80 N m⁻¹." },
      { phrase: "0.15 m", tip: "Compression (extension) of the spring, Δx = 0.15 m." },
      { phrase: "elastic potential energy", tip: "Energy stored in a deformed spring: EH = ½kΔx²." }
    ],
    knowns: [
      { symbol: "k", value: "80", unit: "N m⁻¹", description: "spring constant" },
      { symbol: "Δx", value: "0.15", unit: "m", description: "compression" }
    ],
    unknowns: [
      { symbol: "EH", unit: "J", description: "elastic potential energy" }
    ],
    acceptedSolutions: [
      ["A3_4"]
    ],
    requiredConstants: [],
    hints: [
      "The energy stored in a spring depends on the spring constant and how much it is compressed or stretched.",
      "Use EH = ½kΔx² with k = 80 N m⁻¹ and Δx = 0.15 m.",
      "EH = ½ × 80 × 0.15² = 40 × 0.0225 = 0.90 J."
    ],
    explanation: "Using \\(E_H = \\frac{1}{2}k\\Delta x^2 = \\frac{1}{2} \\times 80 \\times 0.15^2 = 0.90\\) J."
  },

  {
    id: "A3_L1_08",
    text: "A forklift does {{24 000 J}} of work raising a pallet in {{8.0 s}}. Calculate the {{power}} output of the forklift.",
    topic: "A",
    subtopic: "A3",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "24 000 J", tip: "Work done, W = 24 000 J." },
      { phrase: "8.0 s", tip: "Time taken, Δt = 8.0 s." },
      { phrase: "power", tip: "Power is the rate of doing work: P = ΔW / Δt." }
    ],
    knowns: [
      { symbol: "W", value: "24000", unit: "J", description: "work done" },
      { symbol: "Δt", value: "8.0", unit: "s", description: "time" }
    ],
    unknowns: [
      { symbol: "P", unit: "W", description: "power" }
    ],
    acceptedSolutions: [
      ["A3_5"]
    ],
    requiredConstants: [],
    hints: [
      "Power is defined as the rate of doing work.",
      "Use P = ΔW / Δt with W = 24 000 J and Δt = 8.0 s.",
      "P = 24 000 / 8.0 = 3000 W = 3.0 kW."
    ],
    explanation: "Using \\(P = \\frac{\\Delta W}{\\Delta t} = \\frac{24000}{8.0} = 3000\\) W."
  },

  {
    id: "A3_L1_09",
    text: "A car engine produces a driving force of {{600 N}} while travelling at a constant {{20 m s⁻¹}}. Calculate the {{power}} delivered by the engine.",
    topic: "A",
    subtopic: "A3",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "600 N", tip: "Driving force, F = 600 N." },
      { phrase: "20 m s⁻¹", tip: "Constant speed, v = 20 m s⁻¹." },
      { phrase: "power", tip: "When force and velocity are constant, power can be found from P = Fv." }
    ],
    knowns: [
      { symbol: "F", value: "600", unit: "N", description: "driving force" },
      { symbol: "v", value: "20", unit: "m s⁻¹", description: "speed" }
    ],
    unknowns: [
      { symbol: "P", unit: "W", description: "power" }
    ],
    acceptedSolutions: [
      ["A3_5"]
    ],
    requiredConstants: [],
    hints: [
      "At constant velocity, there is a direct relationship between power, force, and speed.",
      "Use the alternative form of the power equation: P = Fv.",
      "P = 600 × 20 = 12 000 W = 12 kW."
    ],
    explanation: "Using \\(P = Fv = 600 \\times 20 = 12000\\) W."
  },

  {
    id: "A3_L1_10",
    text: "A motor does {{5000 J}} of useful work from a total energy input of {{8000 J}}. Calculate the {{efficiency}} of the motor.",
    topic: "A",
    subtopic: "A3",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "5000 J", tip: "Useful work output, W_useful = 5000 J." },
      { phrase: "8000 J", tip: "Total work (energy) input, W_total = 8000 J." },
      { phrase: "efficiency", tip: "Efficiency is the ratio of useful work out to total work in: η = W_useful / W_total." }
    ],
    knowns: [
      { symbol: "W_useful", value: "5000", unit: "J", description: "useful work output" },
      { symbol: "W_total", value: "8000", unit: "J", description: "total work input" }
    ],
    unknowns: [
      { symbol: "η", unit: "", description: "efficiency" }
    ],
    acceptedSolutions: [
      ["A3_6"]
    ],
    requiredConstants: [],
    hints: [
      "Efficiency compares useful output to total input.",
      "Use η = useful work out / total work in = 5000 / 8000.",
      "η = 5000 / 8000 = 0.625 or 62.5%."
    ],
    explanation: "Using \\(\\eta = \\frac{W_{useful}}{W_{total}} = \\frac{5000}{8000} = 0.625\\) or 62.5%."
  },

  {
    id: "A3_L1_11",
    text: "The {{kinetic energy}} of a ball is doubled while its mass stays the same. By what factor does the {{speed}} change? (No numbers needed — use {{proportional reasoning}}.)",
    topic: "A",
    subtopic: "A3",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "kinetic energy", tip: "Eₖ = ½mv². Note the v² dependence." },
      { phrase: "speed", tip: "You need to find how v changes when Eₖ doubles at constant m." },
      { phrase: "proportional reasoning", tip: "Compare the ratio of new to old without substituting numbers." }
    ],
    knowns: [
      { symbol: "Eₖ ratio", value: "2", unit: "", description: "kinetic energy is doubled" },
      { symbol: "m", value: "constant", unit: "", description: "mass unchanged" }
    ],
    unknowns: [
      { symbol: "v ratio", unit: "", description: "factor by which speed changes" }
    ],
    acceptedSolutions: [
      ["A3_2"]
    ],
    requiredConstants: [],
    hints: [
      "Write Eₖ = ½mv² and think about what happens to v when Eₖ doubles with constant m.",
      "Since Eₖ ∝ v², doubling Eₖ means v² doubles.",
      "If v² doubles, then v increases by a factor of √2 ≈ 1.41."
    ],
    explanation: "From \\(E_k = \\frac{1}{2}mv^2\\), with constant \\(m\\): \\(E_k \\propto v^2\\). Doubling \\(E_k\\) means \\(v^2\\) doubles, so \\(v\\) increases by a factor of \\(\\sqrt{2}\\)."
  },

  // ===========================================================
  // A3 WORK, ENERGY, POWER — LEVEL 2 (4 questions: A3_L2_03 to A3_L2_06)
  // ===========================================================

  {
    id: "A3_L2_03",
    text: "A {{0.50 kg}} ball is dropped from a height of {{6.0 m}}. Using {{conservation of energy}}, find its speed just before hitting the ground.",
    topic: "A",
    subtopic: "A3",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "0.50 kg", tip: "Mass of the ball, m = 0.50 kg." },
      { phrase: "6.0 m", tip: "Height from which the ball is dropped, Δh = 6.0 m." },
      { phrase: "conservation of energy", tip: "All gravitational PE converts to kinetic energy (no air resistance): mgΔh = ½mv²." }
    ],
    knowns: [
      { symbol: "m", value: "0.50", unit: "kg", description: "mass" },
      { symbol: "Δh", value: "6.0", unit: "m", description: "height" },
      { symbol: "g", value: "9.8", unit: "m s⁻²", description: "gravitational field strength" }
    ],
    unknowns: [
      { symbol: "v", unit: "m s⁻¹", description: "speed just before hitting ground" }
    ],
    acceptedSolutions: [
      ["A3_3", "A3_2", "CONST_g"],
      ["A3_2", "A3_3", "CONST_g"]
    ],
    requiredConstants: ["CONST_g"],
    hints: [
      "Set the loss in gravitational PE equal to the gain in kinetic energy.",
      "mgΔh = ½mv². Notice mass cancels: v² = 2gΔh.",
      "v = √(2 × 9.8 × 6.0) = √117.6 ≈ 10.8 m s⁻¹."
    ],
    explanation: "Using conservation of energy: \\(mg\\Delta h = \\frac{1}{2}mv^2\\). Mass cancels: \\(v = \\sqrt{2g\\Delta h} = \\sqrt{2 \\times 9.8 \\times 6.0} = \\sqrt{117.6} \\approx 10.8\\) m s⁻¹."
  },

  {
    id: "A3_L2_04",
    text: "A spring (k = {{250 N m⁻¹}}) is compressed by {{0.20 m}} and launches a {{0.050 kg}} marble horizontally. Find the {{launch speed}} of the marble.",
    topic: "A",
    subtopic: "A3",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "250 N m⁻¹", tip: "Spring constant, k = 250 N m⁻¹." },
      { phrase: "0.20 m", tip: "Compression of the spring, Δx = 0.20 m." },
      { phrase: "0.050 kg", tip: "Mass of the marble, m = 0.050 kg." },
      { phrase: "launch speed", tip: "All elastic PE converts to kinetic energy: ½kΔx² = ½mv²." }
    ],
    knowns: [
      { symbol: "k", value: "250", unit: "N m⁻¹", description: "spring constant" },
      { symbol: "Δx", value: "0.20", unit: "m", description: "compression" },
      { symbol: "m", value: "0.050", unit: "kg", description: "mass of marble" }
    ],
    unknowns: [
      { symbol: "v", unit: "m s⁻¹", description: "launch speed" }
    ],
    acceptedSolutions: [
      ["A3_4", "A3_2"],
      ["A3_2", "A3_4"]
    ],
    requiredConstants: [],
    hints: [
      "The elastic PE stored in the spring converts entirely to kinetic energy of the marble.",
      "Set ½kΔx² = ½mv² and solve for v.",
      "v = √(kΔx²/m) = √(250 × 0.04 / 0.050) = √200 ≈ 14.1 m s⁻¹."
    ],
    explanation: "Elastic PE converts to KE: \\(\\frac{1}{2}k\\Delta x^2 = \\frac{1}{2}mv^2\\). Solving: \\(v = \\sqrt{\\frac{k\\Delta x^2}{m}} = \\sqrt{\\frac{250 \\times 0.04}{0.050}} = \\sqrt{200} \\approx 14.1\\) m s⁻¹."
  },

  {
    id: "A3_L2_05",
    text: "A {{60 kg}} cyclist climbs a hill of height {{15 m}} in {{40 s}} at constant speed. The bicycle has an efficiency of {{0.80}}. Calculate the {{power input}} by the cyclist.",
    topic: "A",
    subtopic: "A3",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "60 kg", tip: "Mass of the cyclist, m = 60 kg." },
      { phrase: "15 m", tip: "Height of the hill, Δh = 15 m." },
      { phrase: "40 s", tip: "Time taken, Δt = 40 s." },
      { phrase: "0.80", tip: "Efficiency η = 0.80. Only 80% of the cyclist's energy input goes to useful work." },
      { phrase: "power input", tip: "Total power input = useful power / efficiency." }
    ],
    knowns: [
      { symbol: "m", value: "60", unit: "kg", description: "mass" },
      { symbol: "Δh", value: "15", unit: "m", description: "height" },
      { symbol: "Δt", value: "40", unit: "s", description: "time" },
      { symbol: "η", value: "0.80", unit: "", description: "efficiency" },
      { symbol: "g", value: "9.8", unit: "m s⁻²", description: "gravitational field strength" }
    ],
    unknowns: [
      { symbol: "P_input", unit: "W", description: "power input" }
    ],
    acceptedSolutions: [
      ["A3_3", "A3_5", "A3_6", "CONST_g"],
      ["A3_3", "A3_6", "A3_5", "CONST_g"]
    ],
    requiredConstants: ["CONST_g"],
    hints: [
      "First find the useful work done against gravity, then find the useful power, then use efficiency.",
      "Useful work = mgΔh = 60 × 9.8 × 15 = 8820 J. Useful power = 8820 / 40 = 220.5 W.",
      "P_input = P_useful / η = 220.5 / 0.80 = 276 W."
    ],
    explanation: "Useful work: \\(W = mg\\Delta h = 60 \\times 9.8 \\times 15 = 8820\\) J. Useful power: \\(P_{useful} = \\frac{8820}{40} = 220.5\\) W. Input power: \\(P_{input} = \\frac{P_{useful}}{\\eta} = \\frac{220.5}{0.80} \\approx 276\\) W."
  },

  {
    id: "A3_L2_06",
    text: "A motor with a power output of {{500 W}} pulls a rope at {{2.0 m s⁻¹}}, doing work against friction. Calculate the {{work done}} by the motor in {{30 s}} and determine the {{friction force}} in the rope.",
    topic: "A",
    subtopic: "A3",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "500 W", tip: "Power output of the motor, P = 500 W." },
      { phrase: "2.0 m s⁻¹", tip: "Speed of the rope, v = 2.0 m s⁻¹." },
      { phrase: "30 s", tip: "Time, Δt = 30 s." },
      { phrase: "work done", tip: "Work = Power × time: W = PΔt." },
      { phrase: "friction force", tip: "At constant speed, P = Fv so F = P / v." }
    ],
    knowns: [
      { symbol: "P", value: "500", unit: "W", description: "power output" },
      { symbol: "v", value: "2.0", unit: "m s⁻¹", description: "rope speed" },
      { symbol: "Δt", value: "30", unit: "s", description: "time" }
    ],
    unknowns: [
      { symbol: "W", unit: "J", description: "work done" },
      { symbol: "F", unit: "N", description: "friction force" }
    ],
    acceptedSolutions: [
      ["A3_5"],
      ["A3_1", "A3_5"]
    ],
    requiredConstants: [],
    hints: [
      "Use P = ΔW/Δt to find work, and P = Fv to find force.",
      "W = PΔt = 500 × 30 = 15 000 J.",
      "F = P / v = 500 / 2.0 = 250 N."
    ],
    explanation: "Work done: \\(W = P\\Delta t = 500 \\times 30 = 15000\\) J. Friction force: \\(F = \\frac{P}{v} = \\frac{500}{2.0} = 250\\) N."
  },

  // ===========================================================
  // A4 RIGID BODY MECHANICS (HL) — LEVEL 1 (8 questions: A4_L1_01 to A4_L1_08)
  // ===========================================================

  {
    id: "A4_L1_01",
    text: "A mechanic applies a force of {{40 N}} to a spanner at a distance of {{0.25 m}} from the bolt, at an angle of {{90°}} to the handle. Calculate the {{torque}} applied.",
    topic: "A",
    subtopic: "A4",
    level: 1,
    slhl: "HL",
    tooltips: [
      { phrase: "40 N", tip: "Applied force, F = 40 N." },
      { phrase: "0.25 m", tip: "Distance from the pivot (bolt), r = 0.25 m." },
      { phrase: "90°", tip: "Angle between force and position vector, θ = 90°. sin 90° = 1." },
      { phrase: "torque", tip: "Torque is the rotational effect of a force: τ = Fr sin θ." }
    ],
    knowns: [
      { symbol: "F", value: "40", unit: "N", description: "applied force" },
      { symbol: "r", value: "0.25", unit: "m", description: "distance from pivot" },
      { symbol: "θ", value: "90", unit: "°", description: "angle" }
    ],
    unknowns: [
      { symbol: "τ", unit: "N m", description: "torque" }
    ],
    acceptedSolutions: [
      ["A4_1"]
    ],
    requiredConstants: [],
    hints: [
      "Torque depends on force, distance from the pivot, and the angle between them.",
      "Use τ = Fr sin θ. Since θ = 90°, sin θ = 1.",
      "τ = 40 × 0.25 × 1 = 10 N m."
    ],
    explanation: "Using \\(\\tau = Fr\\sin\\theta = 40 \\times 0.25 \\times \\sin 90° = 10\\) N m."
  },

  {
    id: "A4_L1_02",
    text: "A wheel accelerates uniformly from rest to {{12 rad s⁻¹}} in {{4.0 s}}. Calculate the {{angular acceleration}}.",
    topic: "A",
    subtopic: "A4",
    level: 1,
    slhl: "HL",
    tooltips: [
      { phrase: "12 rad s⁻¹", tip: "Final angular velocity, ωf = 12 rad s⁻¹." },
      { phrase: "4.0 s", tip: "Time taken, t = 4.0 s." },
      { phrase: "angular acceleration", tip: "Rate of change of angular velocity: α = (ωf − ωi) / t." }
    ],
    knowns: [
      { symbol: "ωi", value: "0", unit: "rad s⁻¹", description: "initial angular velocity (from rest)" },
      { symbol: "ωf", value: "12", unit: "rad s⁻¹", description: "final angular velocity" },
      { symbol: "t", value: "4.0", unit: "s", description: "time" }
    ],
    unknowns: [
      { symbol: "α", unit: "rad s⁻²", description: "angular acceleration" }
    ],
    acceptedSolutions: [
      ["A4_3"]
    ],
    requiredConstants: [],
    hints: [
      "This is like finding linear acceleration but for rotation. You know initial and final angular velocities and time.",
      "Rearrange ωf = ωi + αt for α.",
      "α = (12 − 0) / 4.0 = 3.0 rad s⁻²."
    ],
    explanation: "Rearranging \\(\\omega_f = \\omega_i + \\alpha t\\): \\(\\alpha = \\frac{\\omega_f - \\omega_i}{t} = \\frac{12 - 0}{4.0} = 3.0\\) rad s⁻²."
  },

  {
    id: "A4_L1_03",
    text: "A disc starts from rest and accelerates at {{2.5 rad s⁻²}} for {{6.0 s}}. Calculate the {{angular displacement}} of the disc.",
    topic: "A",
    subtopic: "A4",
    level: 1,
    slhl: "HL",
    tooltips: [
      { phrase: "2.5 rad s⁻²", tip: "Angular acceleration, α = 2.5 rad s⁻²." },
      { phrase: "6.0 s", tip: "Time, t = 6.0 s." },
      { phrase: "angular displacement", tip: "The total angle rotated through: Δθ = ωi·t + ½αt²." }
    ],
    knowns: [
      { symbol: "ωi", value: "0", unit: "rad s⁻¹", description: "initial angular velocity (from rest)" },
      { symbol: "α", value: "2.5", unit: "rad s⁻²", description: "angular acceleration" },
      { symbol: "t", value: "6.0", unit: "s", description: "time" }
    ],
    unknowns: [
      { symbol: "Δθ", unit: "rad", description: "angular displacement" }
    ],
    acceptedSolutions: [
      ["A4_4"]
    ],
    requiredConstants: [],
    hints: [
      "Starting from rest means ωi = 0. Use the rotational kinematic equation with α and t.",
      "Δθ = ωi·t + ½αt². Since ωi = 0, Δθ = ½αt².",
      "Δθ = ½ × 2.5 × 6.0² = 1.25 × 36 = 45 rad."
    ],
    explanation: "Using \\(\\Delta\\theta = \\omega_i t + \\frac{1}{2}\\alpha t^2 = 0 + \\frac{1}{2} \\times 2.5 \\times 6.0^2 = 45\\) rad."
  },

  {
    id: "A4_L1_04",
    text: "A flywheel rotating at {{20 rad s⁻¹}} decelerates uniformly through {{100 rad}} before stopping. Calculate the {{angular deceleration}}.",
    topic: "A",
    subtopic: "A4",
    level: 1,
    slhl: "HL",
    tooltips: [
      { phrase: "20 rad s⁻¹", tip: "Initial angular velocity, ωi = 20 rad s⁻¹." },
      { phrase: "100 rad", tip: "Angular displacement, Δθ = 100 rad." },
      { phrase: "angular deceleration", tip: "Use ωf² = ωi² + 2αΔθ and solve for α. Expect a negative value." }
    ],
    knowns: [
      { symbol: "ωi", value: "20", unit: "rad s⁻¹", description: "initial angular velocity" },
      { symbol: "ωf", value: "0", unit: "rad s⁻¹", description: "final angular velocity (stops)" },
      { symbol: "Δθ", value: "100", unit: "rad", description: "angular displacement" }
    ],
    unknowns: [
      { symbol: "α", unit: "rad s⁻²", description: "angular deceleration" }
    ],
    acceptedSolutions: [
      ["A4_5"]
    ],
    requiredConstants: [],
    hints: [
      "You know ωi, ωf, and Δθ. Which rotational kinematic equation links these three?",
      "Use ωf² = ωi² + 2αΔθ. Rearrange for α.",
      "α = (0 − 400) / (2 × 100) = −2.0 rad s⁻². The magnitude is 2.0 rad s⁻²."
    ],
    explanation: "Using \\(\\omega_f^2 = \\omega_i^2 + 2\\alpha\\Delta\\theta\\): \\(\\alpha = \\frac{\\omega_f^2 - \\omega_i^2}{2\\Delta\\theta} = \\frac{0 - 400}{200} = -2.0\\) rad s⁻²."
  },

  {
    id: "A4_L1_05",
    text: "A wheel has a {{moment of inertia}} of {{0.60 kg m²}} and spins at {{8.0 rad s⁻¹}}. Calculate its {{angular momentum}}.",
    topic: "A",
    subtopic: "A4",
    level: 1,
    slhl: "HL",
    tooltips: [
      { phrase: "moment of inertia", tip: "I = 0.60 kg m². This is the rotational equivalent of mass." },
      { phrase: "0.60 kg m²", tip: "Moment of inertia, I = 0.60 kg m²." },
      { phrase: "8.0 rad s⁻¹", tip: "Angular velocity, ω = 8.0 rad s⁻¹." },
      { phrase: "angular momentum", tip: "L = Iω, the rotational equivalent of linear momentum." }
    ],
    knowns: [
      { symbol: "I", value: "0.60", unit: "kg m²", description: "moment of inertia" },
      { symbol: "ω", value: "8.0", unit: "rad s⁻¹", description: "angular velocity" }
    ],
    unknowns: [
      { symbol: "L", unit: "kg m² s⁻¹", description: "angular momentum" }
    ],
    acceptedSolutions: [
      ["A4_8"]
    ],
    requiredConstants: [],
    hints: [
      "Angular momentum is the rotational analogue of linear momentum (p = mv).",
      "Use L = Iω.",
      "L = 0.60 × 8.0 = 4.8 kg m² s⁻¹."
    ],
    explanation: "Using \\(L = I\\omega = 0.60 \\times 8.0 = 4.8\\) kg m² s⁻¹."
  },

  {
    id: "A4_L1_06",
    text: "Two point masses are attached to a light rod: {{0.30 kg}} at {{0.40 m}} from the axis and {{0.50 kg}} at {{0.20 m}} from the axis. Calculate the {{moment of inertia}} of the system.",
    topic: "A",
    subtopic: "A4",
    level: 1,
    slhl: "HL",
    tooltips: [
      { phrase: "0.30 kg", tip: "Mass m₁ = 0.30 kg." },
      { phrase: "0.40 m", tip: "Distance of m₁ from axis, r₁ = 0.40 m." },
      { phrase: "0.50 kg", tip: "Mass m₂ = 0.50 kg." },
      { phrase: "0.20 m", tip: "Distance of m₂ from axis, r₂ = 0.20 m." },
      { phrase: "moment of inertia", tip: "For point masses: I = Σmr². Add the contributions from each mass." }
    ],
    knowns: [
      { symbol: "m₁", value: "0.30", unit: "kg", description: "first mass" },
      { symbol: "r₁", value: "0.40", unit: "m", description: "distance of m₁ from axis" },
      { symbol: "m₂", value: "0.50", unit: "kg", description: "second mass" },
      { symbol: "r₂", value: "0.20", unit: "m", description: "distance of m₂ from axis" }
    ],
    unknowns: [
      { symbol: "I", unit: "kg m²", description: "moment of inertia" }
    ],
    acceptedSolutions: [
      ["A4_6"]
    ],
    requiredConstants: [],
    hints: [
      "The moment of inertia of point masses is the sum of each mass times the square of its distance from the axis.",
      "I = m₁r₁² + m₂r₂².",
      "I = 0.30 × 0.40² + 0.50 × 0.20² = 0.048 + 0.020 = 0.068 kg m²."
    ],
    explanation: "Using \\(I = \\Sigma mr^2 = m_1 r_1^2 + m_2 r_2^2 = 0.30 \\times 0.16 + 0.50 \\times 0.04 = 0.048 + 0.020 = 0.068\\) kg m²."
  },

  {
    id: "A4_L1_07",
    text: "A net torque of {{6.0 N m}} acts on a rotating disc with moment of inertia {{1.5 kg m²}}. Calculate the {{angular acceleration}}.",
    topic: "A",
    subtopic: "A4",
    level: 1,
    slhl: "HL",
    tooltips: [
      { phrase: "6.0 N m", tip: "Net torque, τ = 6.0 N m." },
      { phrase: "1.5 kg m²", tip: "Moment of inertia, I = 1.5 kg m²." },
      { phrase: "angular acceleration", tip: "Newton's second law for rotation: τ = Iα." }
    ],
    knowns: [
      { symbol: "τ", value: "6.0", unit: "N m", description: "net torque" },
      { symbol: "I", value: "1.5", unit: "kg m²", description: "moment of inertia" }
    ],
    unknowns: [
      { symbol: "α", unit: "rad s⁻²", description: "angular acceleration" }
    ],
    acceptedSolutions: [
      ["A4_7"]
    ],
    requiredConstants: [],
    hints: [
      "This is Newton's second law but for rotation instead of translation.",
      "Use τ = Iα and solve for α.",
      "α = τ / I = 6.0 / 1.5 = 4.0 rad s⁻²."
    ],
    explanation: "Using \\(\\tau = I\\alpha\\): \\(\\alpha = \\frac{\\tau}{I} = \\frac{6.0}{1.5} = 4.0\\) rad s⁻²."
  },

  {
    id: "A4_L1_08",
    text: "A torque of {{3.0 N m}} acts on a wheel for {{5.0 s}}. Calculate the {{change in angular momentum}} of the wheel.",
    topic: "A",
    subtopic: "A4",
    level: 1,
    slhl: "HL",
    tooltips: [
      { phrase: "3.0 N m", tip: "Torque, τ = 3.0 N m." },
      { phrase: "5.0 s", tip: "Time interval, Δt = 5.0 s." },
      { phrase: "change in angular momentum", tip: "Angular impulse: ΔL = τΔt." }
    ],
    knowns: [
      { symbol: "τ", value: "3.0", unit: "N m", description: "torque" },
      { symbol: "Δt", value: "5.0", unit: "s", description: "time" }
    ],
    unknowns: [
      { symbol: "ΔL", unit: "kg m² s⁻¹", description: "change in angular momentum" }
    ],
    acceptedSolutions: [
      ["A4_9"]
    ],
    requiredConstants: [],
    hints: [
      "This is the rotational analogue of impulse = FΔt = Δp.",
      "Use ΔL = τΔt.",
      "ΔL = 3.0 × 5.0 = 15 kg m² s⁻¹."
    ],
    explanation: "Using \\(\\Delta L = \\tau \\Delta t = 3.0 \\times 5.0 = 15\\) kg m² s⁻¹."
  },

  // ===========================================================
  // A4 RIGID BODY MECHANICS (HL) — LEVEL 2 (4 questions: A4_L2_01 to A4_L2_04)
  // ===========================================================

  {
    id: "A4_L2_01",
    text: "A solid disc (I = {{0.80 kg m²}}) starts from rest. A constant torque of {{4.0 N m}} is applied for {{3.0 s}}. Calculate the {{rotational kinetic energy}} at the end of this time.",
    topic: "A",
    subtopic: "A4",
    level: 2,
    slhl: "HL",
    tooltips: [
      { phrase: "0.80 kg m²", tip: "Moment of inertia, I = 0.80 kg m²." },
      { phrase: "4.0 N m", tip: "Applied torque, τ = 4.0 N m." },
      { phrase: "3.0 s", tip: "Time, t = 3.0 s." },
      { phrase: "rotational kinetic energy", tip: "Eₖ = ½Iω². You need to find ω first." }
    ],
    knowns: [
      { symbol: "I", value: "0.80", unit: "kg m²", description: "moment of inertia" },
      { symbol: "τ", value: "4.0", unit: "N m", description: "torque" },
      { symbol: "t", value: "3.0", unit: "s", description: "time" },
      { symbol: "ωi", value: "0", unit: "rad s⁻¹", description: "initial angular velocity (from rest)" }
    ],
    unknowns: [
      { symbol: "Eₖ", unit: "J", description: "rotational kinetic energy" }
    ],
    acceptedSolutions: [
      ["A4_7", "A4_3", "A4_10"],
      ["A4_7", "A4_9", "A4_10"],
      ["A4_9", "A4_8", "A4_10"]
    ],
    requiredConstants: [],
    hints: [
      "First find the angular acceleration from τ = Iα, then find the final angular velocity.",
      "α = τ/I = 4.0/0.80 = 5.0 rad s⁻². Then ωf = ωi + αt = 0 + 5.0 × 3.0 = 15 rad s⁻¹.",
      "Eₖ = ½Iω² = ½ × 0.80 × 15² = 0.40 × 225 = 90 J."
    ],
    explanation: "Angular acceleration: \\(\\alpha = \\frac{\\tau}{I} = \\frac{4.0}{0.80} = 5.0\\) rad s⁻². Final angular velocity: \\(\\omega_f = \\omega_i + \\alpha t = 15\\) rad s⁻¹. Rotational KE: \\(E_k = \\frac{1}{2}I\\omega^2 = \\frac{1}{2} \\times 0.80 \\times 225 = 90\\) J."
  },

  {
    id: "A4_L2_02",
    text: "A wheel (I = {{2.0 kg m²}}) rotating at {{10 rad s⁻¹}} is brought to rest by a {{friction torque}} in {{4.0 s}}. Calculate the magnitude of the {{friction torque}}.",
    topic: "A",
    subtopic: "A4",
    level: 2,
    slhl: "HL",
    tooltips: [
      { phrase: "2.0 kg m²", tip: "Moment of inertia, I = 2.0 kg m²." },
      { phrase: "10 rad s⁻¹", tip: "Initial angular velocity, ωi = 10 rad s⁻¹." },
      { phrase: "friction torque", tip: "This torque decelerates the wheel to rest." },
      { phrase: "4.0 s", tip: "Time to stop, t = 4.0 s." },
      { phrase: "friction torque", tip: "Find α first, then use τ = Iα." }
    ],
    knowns: [
      { symbol: "I", value: "2.0", unit: "kg m²", description: "moment of inertia" },
      { symbol: "ωi", value: "10", unit: "rad s⁻¹", description: "initial angular velocity" },
      { symbol: "ωf", value: "0", unit: "rad s⁻¹", description: "final angular velocity (at rest)" },
      { symbol: "t", value: "4.0", unit: "s", description: "time" }
    ],
    unknowns: [
      { symbol: "τ", unit: "N m", description: "friction torque" }
    ],
    acceptedSolutions: [
      ["A4_3", "A4_7"],
      ["A4_9", "A4_8"]
    ],
    requiredConstants: [],
    hints: [
      "First find the angular deceleration, then use Newton's second law for rotation.",
      "α = (ωf − ωi)/t = (0 − 10)/4.0 = −2.5 rad s⁻².",
      "τ = Iα = 2.0 × 2.5 = 5.0 N m (magnitude)."
    ],
    explanation: "Angular deceleration: \\(\\alpha = \\frac{\\omega_f - \\omega_i}{t} = \\frac{0 - 10}{4.0} = -2.5\\) rad s⁻². Friction torque: \\(\\tau = I|\\alpha| = 2.0 \\times 2.5 = 5.0\\) N m."
  },

  {
    id: "A4_L2_03",
    text: "A wheel slows from {{ωi}} to {{ωf}} while turning through {{Δθ}} radians. If the {{moment of inertia}} is doubled but the same angular deceleration is applied, by what factor does the {{torque}} change? ({{Proportional reasoning}} — no numbers needed.)",
    topic: "A",
    subtopic: "A4",
    level: 2,
    slhl: "HL",
    tooltips: [
      { phrase: "ωi", tip: "Initial angular velocity (same in both cases)." },
      { phrase: "ωf", tip: "Final angular velocity (same in both cases)." },
      { phrase: "Δθ", tip: "Angular displacement (same in both cases)." },
      { phrase: "moment of inertia", tip: "I is doubled: I' = 2I." },
      { phrase: "torque", tip: "τ = Iα. Think about how τ depends on I if α stays the same." },
      { phrase: "Proportional reasoning", tip: "Compare ratios without substituting numbers." }
    ],
    knowns: [
      { symbol: "I ratio", value: "2", unit: "", description: "moment of inertia is doubled" },
      { symbol: "α", value: "same", unit: "", description: "angular deceleration unchanged" }
    ],
    unknowns: [
      { symbol: "τ ratio", unit: "", description: "factor by which torque changes" }
    ],
    acceptedSolutions: [
      ["A4_7"]
    ],
    requiredConstants: [],
    hints: [
      "Write τ = Iα. If α stays the same and I doubles, what happens to τ?",
      "Since τ is directly proportional to I (at constant α), doubling I doubles τ.",
      "The torque doubles — it increases by a factor of 2."
    ],
    explanation: "From \\(\\tau = I\\alpha\\), with constant \\(\\alpha\\): \\(\\tau \\propto I\\). Doubling \\(I\\) doubles \\(\\tau\\). The torque increases by a factor of 2."
  },

  {
    id: "A4_L2_04",
    text: "A wheel with average angular velocity of {{6.0 rad s⁻¹}} and {{10 rad s⁻¹}} (initial and final) rotates for {{5.0 s}}. Calculate the {{angular displacement}} and the {{rotational kinetic energy}} at the end, given I = {{0.40 kg m²}}.",
    topic: "A",
    subtopic: "A4",
    level: 2,
    slhl: "HL",
    tooltips: [
      { phrase: "6.0 rad s⁻¹", tip: "Initial angular velocity, ωi = 6.0 rad s⁻¹." },
      { phrase: "10 rad s⁻¹", tip: "Final angular velocity, ωf = 10 rad s⁻¹." },
      { phrase: "5.0 s", tip: "Time, t = 5.0 s." },
      { phrase: "angular displacement", tip: "Δθ = (ωi + ωf)/2 × t for uniform angular acceleration." },
      { phrase: "rotational kinetic energy", tip: "Eₖ = ½Iω²." },
      { phrase: "0.40 kg m²", tip: "Moment of inertia, I = 0.40 kg m²." }
    ],
    knowns: [
      { symbol: "ωi", value: "6.0", unit: "rad s⁻¹", description: "initial angular velocity" },
      { symbol: "ωf", value: "10", unit: "rad s⁻¹", description: "final angular velocity" },
      { symbol: "t", value: "5.0", unit: "s", description: "time" },
      { symbol: "I", value: "0.40", unit: "kg m²", description: "moment of inertia" }
    ],
    unknowns: [
      { symbol: "Δθ", unit: "rad", description: "angular displacement" },
      { symbol: "Eₖ", unit: "J", description: "rotational kinetic energy" }
    ],
    acceptedSolutions: [
      ["A4_2", "A4_10"],
      ["A4_2", "A4_8"]
    ],
    requiredConstants: [],
    hints: [
      "Use the average angular velocity method for displacement, then find rotational KE from the final angular velocity.",
      "Δθ = (ωi + ωf)/2 × t = (6.0 + 10)/2 × 5.0 = 8.0 × 5.0 = 40 rad.",
      "Eₖ = ½Iωf² = ½ × 0.40 × 10² = 20 J."
    ],
    explanation: "Angular displacement: \\(\\Delta\\theta = \\frac{\\omega_i + \\omega_f}{2} \\cdot t = \\frac{6.0 + 10}{2} \\times 5.0 = 40\\) rad. Rotational KE: \\(E_k = \\frac{1}{2}I\\omega_f^2 = \\frac{1}{2} \\times 0.40 \\times 100 = 20\\) J."
  },

  // ===========================================================
  // A5 GALILEAN AND SPECIAL RELATIVITY (HL) — LEVEL 1 (4 questions: A5_L1_01 to A5_L1_04)
  // ===========================================================

  {
    id: "A5_L1_01",
    text: "A spaceship travels at {{0.80c}} relative to the Earth. Calculate the {{Lorentz factor}} γ.",
    topic: "A",
    subtopic: "A5",
    level: 1,
    slhl: "HL",
    tooltips: [
      { phrase: "0.80c", tip: "Speed of the spaceship, v = 0.80c where c is the speed of light." },
      { phrase: "Lorentz factor", tip: "γ = 1/√(1 − v²/c²). It describes how much time, length, and mass are affected at relativistic speeds." }
    ],
    knowns: [
      { symbol: "v", value: "0.80c", unit: "", description: "speed of spaceship" }
    ],
    unknowns: [
      { symbol: "γ", unit: "", description: "Lorentz factor" }
    ],
    acceptedSolutions: [
      ["A5_2"]
    ],
    requiredConstants: [],
    hints: [
      "Substitute v/c = 0.80 into the Lorentz factor formula.",
      "γ = 1/√(1 − 0.80²) = 1/√(1 − 0.64) = 1/√0.36.",
      "γ = 1/0.60 = 5/3 ≈ 1.67."
    ],
    explanation: "Using \\(\\gamma = \\frac{1}{\\sqrt{1 - v^2/c^2}} = \\frac{1}{\\sqrt{1 - 0.64}} = \\frac{1}{\\sqrt{0.36}} = \\frac{1}{0.60} \\approx 1.67\\)."
  },

  {
    id: "A5_L1_02",
    text: "A muon has a {{proper lifetime}} of {{2.2 μs}}. It travels at {{0.95c}} relative to the Earth. Calculate the {{dilated lifetime}} as measured by an Earth observer.",
    topic: "A",
    subtopic: "A5",
    level: 1,
    slhl: "HL",
    tooltips: [
      { phrase: "proper lifetime", tip: "The lifetime measured in the muon's rest frame, Δt₀ = 2.2 μs." },
      { phrase: "2.2 μs", tip: "Δt₀ = 2.2 × 10⁻⁶ s." },
      { phrase: "0.95c", tip: "Speed of the muon, v = 0.95c." },
      { phrase: "dilated lifetime", tip: "Time dilation: Δt = γΔt₀. Moving clocks run slow." }
    ],
    knowns: [
      { symbol: "Δt₀", value: "2.2", unit: "μs", description: "proper lifetime" },
      { symbol: "v", value: "0.95c", unit: "", description: "speed" }
    ],
    unknowns: [
      { symbol: "Δt", unit: "μs", description: "dilated lifetime" }
    ],
    acceptedSolutions: [
      ["A5_3", "A5_2"],
      ["A5_3"]
    ],
    requiredConstants: [],
    hints: [
      "First find γ for v = 0.95c, then apply time dilation.",
      "γ = 1/√(1 − 0.95²) = 1/√(1 − 0.9025) = 1/√0.0975 ≈ 3.20.",
      "Δt = γΔt₀ = 3.20 × 2.2 = 7.0 μs."
    ],
    explanation: "Lorentz factor: \\(\\gamma = \\frac{1}{\\sqrt{1 - 0.95^2}} \\approx 3.20\\). Dilated lifetime: \\(\\Delta t = \\gamma \\Delta t_0 = 3.20 \\times 2.2 = 7.0\\) μs."
  },

  {
    id: "A5_L1_03",
    text: "A rod has a {{proper length}} of {{1.0 m}}. It moves at {{0.60c}} relative to a laboratory. Calculate the {{contracted length}} measured by a lab observer.",
    topic: "A",
    subtopic: "A5",
    level: 1,
    slhl: "HL",
    tooltips: [
      { phrase: "proper length", tip: "The length measured in the rod's rest frame, L₀ = 1.0 m." },
      { phrase: "1.0 m", tip: "Proper length, L₀ = 1.0 m." },
      { phrase: "0.60c", tip: "Speed of the rod, v = 0.60c." },
      { phrase: "contracted length", tip: "Length contraction: L = L₀/γ. Moving objects are shorter in the direction of motion." }
    ],
    knowns: [
      { symbol: "L₀", value: "1.0", unit: "m", description: "proper length" },
      { symbol: "v", value: "0.60c", unit: "", description: "speed" }
    ],
    unknowns: [
      { symbol: "L", unit: "m", description: "contracted length" }
    ],
    acceptedSolutions: [
      ["A5_4", "A5_2"],
      ["A5_4"]
    ],
    requiredConstants: [],
    hints: [
      "Find γ for v = 0.60c, then apply length contraction.",
      "γ = 1/√(1 − 0.36) = 1/√0.64 = 1/0.80 = 1.25.",
      "L = L₀/γ = 1.0/1.25 = 0.80 m."
    ],
    explanation: "Lorentz factor: \\(\\gamma = \\frac{1}{\\sqrt{1 - 0.36}} = 1.25\\). Contracted length: \\(L = \\frac{L_0}{\\gamma} = \\frac{1.0}{1.25} = 0.80\\) m."
  },

  {
    id: "A5_L1_04",
    text: "Rocket A fires a probe forwards at {{0.70c}} relative to itself. Rocket A moves at {{0.60c}} relative to the Earth. Calculate the {{velocity of the probe}} as measured from Earth using the {{relativistic velocity addition}} formula.",
    topic: "A",
    subtopic: "A5",
    level: 1,
    slhl: "HL",
    tooltips: [
      { phrase: "0.70c", tip: "Velocity of the probe relative to Rocket A, u = 0.70c." },
      { phrase: "0.60c", tip: "Velocity of Rocket A relative to Earth, v = 0.60c." },
      { phrase: "velocity of the probe", tip: "The probe's speed as seen from Earth." },
      { phrase: "relativistic velocity addition", tip: "u' = (u − v)/(1 − uv/c²), or equivalently, if combining velocities in the same direction: u_Earth = (u + v)/(1 + uv/c²)." }
    ],
    knowns: [
      { symbol: "u", value: "0.70c", unit: "", description: "probe speed relative to rocket" },
      { symbol: "v", value: "0.60c", unit: "", description: "rocket speed relative to Earth" }
    ],
    unknowns: [
      { symbol: "u'", unit: "c", description: "probe speed relative to Earth" }
    ],
    acceptedSolutions: [
      ["A5_5"]
    ],
    requiredConstants: [],
    hints: [
      "You cannot simply add the velocities — you need the relativistic velocity addition formula.",
      "u_Earth = (u + v)/(1 + uv/c²) = (0.70c + 0.60c)/(1 + 0.70 × 0.60).",
      "u_Earth = 1.30c / (1 + 0.42) = 1.30c / 1.42 ≈ 0.915c."
    ],
    explanation: "Using relativistic velocity addition: \\(u' = \\frac{u + v}{1 + \\frac{uv}{c^2}} = \\frac{0.70c + 0.60c}{1 + 0.42} = \\frac{1.30c}{1.42} \\approx 0.92c\\). Note: the result is less than \\(c\\), as required by special relativity."
  },

  // ===========================================================
  // A5 GALILEAN AND SPECIAL RELATIVITY (HL) — LEVEL 2 (2 questions: A5_L2_01 to A5_L2_02)
  // ===========================================================

  {
    id: "A5_L2_01",
    text: "In the Earth frame, two events occur at the same position but separated by {{Δt = 5.0 μs}}. A spaceship passes at {{0.80c}}. Calculate the {{spacetime interval}} and determine the {{time between the events}} in the spaceship frame.",
    topic: "A",
    subtopic: "A5",
    level: 2,
    slhl: "HL",
    tooltips: [
      { phrase: "Δt = 5.0 μs", tip: "Time between events in Earth frame, Δt = 5.0 × 10⁻⁶ s." },
      { phrase: "0.80c", tip: "Speed of the spaceship, v = 0.80c." },
      { phrase: "spacetime interval", tip: "(Δs)² = (cΔt)² − (Δx)². Since both events are at the same position in the Earth frame, Δx = 0." },
      { phrase: "time between the events", tip: "Use time dilation or the Lorentz transformation to find the time in the spaceship frame." }
    ],
    knowns: [
      { symbol: "Δt", value: "5.0", unit: "μs", description: "time between events (Earth frame)" },
      { symbol: "Δx", value: "0", unit: "m", description: "spatial separation in Earth frame (same position)" },
      { symbol: "v", value: "0.80c", unit: "", description: "spaceship speed" }
    ],
    unknowns: [
      { symbol: "(Δs)²", unit: "m²", description: "spacetime interval squared" },
      { symbol: "Δt'", unit: "μs", description: "time between events in spaceship frame" }
    ],
    acceptedSolutions: [
      ["A5_6", "A5_3", "A5_2"],
      ["A5_6", "A5_3"],
      ["A5_6", "A5_2"]
    ],
    requiredConstants: ["CONST_c"],
    hints: [
      "Since Δx = 0 in the Earth frame, (Δs)² = (cΔt)² − 0 = (cΔt)². Then use time dilation.",
      "(Δs)² = (3.0×10⁸ × 5.0×10⁻⁶)² = (1500)² = 2.25 × 10⁶ m². γ = 1/√(1−0.64) ≈ 1.67.",
      "The proper time is in the Earth frame (events at same position), so Δt' = γΔt = 1.67 × 5.0 = 8.3 μs."
    ],
    explanation: "Spacetime interval: \\((\\Delta s)^2 = (c\\Delta t)^2 - (\\Delta x)^2 = (3.0 \\times 10^8 \\times 5.0 \\times 10^{-6})^2 = 2.25 \\times 10^6\\) m². Since the events are at the same position in the Earth frame, \\(\\Delta t_0 = 5.0\\) μs is the proper time. \\(\\gamma = 1.67\\). In the spaceship frame: \\(\\Delta t' = \\gamma \\Delta t_0 = 1.67 \\times 5.0 = 8.3\\) μs."
  },

  {
    id: "A5_L2_02",
    text: "A spacecraft passes Earth at {{0.90c}}. At t = 0 in the Earth frame, a light at position {{x = 1200 m}} flashes. Using the {{Lorentz transformation}}, calculate the {{position}} and {{time}} of this event in the spacecraft frame.",
    topic: "A",
    subtopic: "A5",
    level: 2,
    slhl: "HL",
    tooltips: [
      { phrase: "0.90c", tip: "Speed of the spacecraft, v = 0.90c." },
      { phrase: "x = 1200 m", tip: "Position of the flash in the Earth frame." },
      { phrase: "Lorentz transformation", tip: "x' = γ(x − vt) and t' = γ(t − vx/c²)." },
      { phrase: "position", tip: "x' in the spacecraft frame." },
      { phrase: "time", tip: "t' in the spacecraft frame." }
    ],
    knowns: [
      { symbol: "x", value: "1200", unit: "m", description: "position in Earth frame" },
      { symbol: "t", value: "0", unit: "s", description: "time in Earth frame" },
      { symbol: "v", value: "0.90c", unit: "", description: "speed of spacecraft" },
      { symbol: "c", value: "3.0 × 10⁸", unit: "m s⁻¹", description: "speed of light" }
    ],
    unknowns: [
      { symbol: "x'", unit: "m", description: "position in spacecraft frame" },
      { symbol: "t'", unit: "s", description: "time in spacecraft frame" }
    ],
    acceptedSolutions: [
      ["A5_1", "A5_2", "CONST_c"],
      ["A5_1", "A5_2"]
    ],
    requiredConstants: ["CONST_c"],
    hints: [
      "First calculate γ for v = 0.90c, then apply the Lorentz transformations with t = 0.",
      "γ = 1/√(1 − 0.81) = 1/√0.19 ≈ 2.294. x' = γ(x − vt) = 2.294 × (1200 − 0) = 2753 m.",
      "t' = γ(t − vx/c²) = 2.294 × (0 − 0.90 × 1200 / (3.0×10⁸)) = 2.294 × (−3.6 × 10⁻⁶) ≈ −8.3 × 10⁻⁶ s."
    ],
    explanation: "Lorentz factor: \\(\\gamma = \\frac{1}{\\sqrt{1 - 0.81}} \\approx 2.294\\). Position: \\(x' = \\gamma(x - vt) = 2.294 \\times 1200 \\approx 2753\\) m. Time: \\(t' = \\gamma(t - \\frac{vx}{c^2}) = 2.294 \\times (0 - \\frac{0.90 \\times 3.0 \\times 10^8 \\times 1200}{(3.0 \\times 10^8)^2}) = 2.294 \\times (-3.6 \\times 10^{-6}) \\approx -8.3\\) μs. The negative time means this event happened before t' = 0 in the spacecraft frame."
  },

  // ============================================================
  // BATCH 3: B1 THERMAL ENERGY TRANSFERS (SL) + B2 GREENHOUSE EFFECT (SL) + B3 GAS LAWS (SL)
  // ============================================================

  // ===========================================================
  // B1 THERMAL ENERGY TRANSFERS — LEVEL 1 (4 questions: B1_L1_01 to B1_L1_04)
  // ===========================================================

  {
    id: "B1_L1_01",
    text: "A block of iron has a mass of {{2.5 kg}} and a volume of {{3.2 × 10⁻⁴ m³}}. Calculate the {{density}} of the iron.",
    topic: "B",
    subtopic: "B1",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "2.5 kg", tip: "This is the mass, m = 2.5 kg." },
      { phrase: "3.2 × 10⁻⁴ m³", tip: "This is the volume, V = 3.2 × 10⁻⁴ m³." },
      { phrase: "density", tip: "Density is mass per unit volume, ρ = m/V." }
    ],
    knowns: [
      { symbol: "m", value: "2.5", unit: "kg", description: "mass of iron block" },
      { symbol: "V", value: "3.2 × 10⁻⁴", unit: "m³", description: "volume of iron block" }
    ],
    unknowns: [
      { symbol: "ρ", unit: "kg m⁻³", description: "density" }
    ],
    acceptedSolutions: [
      ["B1_1"]
    ],
    requiredConstants: [],
    hints: [
      "You know mass and volume. Which formula links mass, volume, and density?",
      "Use ρ = m/V directly.",
      "ρ = 2.5 / (3.2 × 10⁻⁴). Work out the division."
    ],
    explanation: "Using \\(\\rho = \\frac{m}{V} = \\frac{2.5}{3.2 \\times 10^{-4}} = 7813\\) kg m\\(^{-3}\\) ≈ 7800 kg m\\(^{-3}\\)."
  },

  {
    id: "B1_L1_02",
    text: "Calculate the {{average kinetic energy}} of a gas molecule at a temperature of {{350 K}}.",
    topic: "B",
    subtopic: "B1",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "average kinetic energy", tip: "The mean translational kinetic energy of a single molecule, Ek = (3/2)kBT." },
      { phrase: "350 K", tip: "This is the absolute temperature, T = 350 K." }
    ],
    knowns: [
      { symbol: "T", value: "350", unit: "K", description: "temperature" }
    ],
    unknowns: [
      { symbol: "Ek", unit: "J", description: "average kinetic energy of a molecule" }
    ],
    acceptedSolutions: [
      ["B1_2", "CONST_kB"]
    ],
    requiredConstants: ["CONST_kB"],
    hints: [
      "What formula relates average kinetic energy of a molecule to temperature?",
      "Use Ek = (3/2)kBT. You need the Boltzmann constant.",
      "Ek = 1.5 × (1.38 × 10⁻²³) × 350. Calculate the result."
    ],
    explanation: "Using \\(E_k = \\frac{3}{2}k_BT = \\frac{3}{2} \\times 1.38 \\times 10^{-23} \\times 350 = 7.25 \\times 10^{-21}\\) J."
  },

  {
    id: "B1_L1_03",
    text: "A {{0.50 kg}} block of copper is heated from {{20 °C}} to {{80 °C}}. The {{specific heat capacity}} of copper is {{385 J kg⁻¹ K⁻¹}}. Calculate the {{thermal energy}} transferred.",
    topic: "B",
    subtopic: "B1",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "0.50 kg", tip: "This is the mass, m = 0.50 kg." },
      { phrase: "20 °C", tip: "Initial temperature. The temperature change is what matters." },
      { phrase: "80 °C", tip: "Final temperature. ΔT = 80 − 20 = 60 K." },
      { phrase: "specific heat capacity", tip: "The energy required per unit mass per unit temperature change." },
      { phrase: "385 J kg⁻¹ K⁻¹", tip: "This is c = 385 J kg⁻¹ K⁻¹ for copper." },
      { phrase: "thermal energy", tip: "The energy transferred to raise the temperature, Q = mcΔT." }
    ],
    knowns: [
      { symbol: "m", value: "0.50", unit: "kg", description: "mass of copper" },
      { symbol: "c", value: "385", unit: "J kg⁻¹ K⁻¹", description: "specific heat capacity of copper" },
      { symbol: "ΔT", value: "60", unit: "K", description: "temperature change (80 − 20)" }
    ],
    unknowns: [
      { symbol: "Q", unit: "J", description: "thermal energy transferred" }
    ],
    acceptedSolutions: [
      ["B1_3"]
    ],
    requiredConstants: [],
    hints: [
      "You have mass, specific heat capacity, and temperature change. Which formula uses all three?",
      "Use Q = mcΔT.",
      "Q = 0.50 × 385 × 60. Calculate the result."
    ],
    explanation: "Using \\(Q = mc\\Delta T = 0.50 \\times 385 \\times 60 = 11550\\) J ≈ 1.2 × 10⁴ J."
  },

  {
    id: "B1_L1_04",
    text: "A star has a surface temperature of {{6000 K}}. Using {{Wien's displacement law}}, determine the {{peak wavelength}} of the radiation it emits.",
    topic: "B",
    subtopic: "B1",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "6000 K", tip: "This is the surface temperature, T = 6000 K." },
      { phrase: "Wien's displacement law", tip: "The law relates peak emission wavelength to surface temperature: λmax·T = 2.9 × 10⁻³ m K." },
      { phrase: "peak wavelength", tip: "The wavelength at which the intensity of emitted radiation is greatest." }
    ],
    knowns: [
      { symbol: "T", value: "6000", unit: "K", description: "surface temperature of star" }
    ],
    unknowns: [
      { symbol: "λ_max", unit: "m", description: "peak wavelength" }
    ],
    acceptedSolutions: [
      ["B1_8"]
    ],
    requiredConstants: [],
    hints: [
      "Wien's law directly connects peak wavelength and temperature.",
      "λmax = (2.9 × 10⁻³) / T. You need to rearrange.",
      "λmax = (2.9 × 10⁻³) / 6000 ≈ 4.8 × 10⁻⁷ m."
    ],
    explanation: "Using Wien's displacement law: \\(\\lambda_{\\max} = \\frac{2.9 \\times 10^{-3}}{T} = \\frac{2.9 \\times 10^{-3}}{6000} = 4.83 \\times 10^{-7}\\) m ≈ 483 nm (visible blue-green light)."
  },

  // ===========================================================
  // B1 THERMAL ENERGY TRANSFERS — LEVEL 2 (8 questions: B1_L2_01 to B1_L2_08)
  // ===========================================================

  {
    id: "B1_L2_01",
    text: "A star has a surface temperature of {{8000 K}} and a radius of {{4.0 × 10⁹ m}}. Determine the {{peak wavelength}} of its emission and its {{luminosity}}.",
    topic: "B",
    subtopic: "B1",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "8000 K", tip: "Surface temperature T = 8000 K, used in both Wien's law and Stefan-Boltzmann law." },
      { phrase: "4.0 × 10⁹ m", tip: "Radius of the star. Surface area A = 4πr²." },
      { phrase: "peak wavelength", tip: "The wavelength at which emitted radiation intensity is maximum." },
      { phrase: "luminosity", tip: "Total power radiated by the star across all wavelengths." }
    ],
    knowns: [
      { symbol: "T", value: "8000", unit: "K", description: "surface temperature" },
      { symbol: "r", value: "4.0 × 10⁹", unit: "m", description: "radius of star" }
    ],
    unknowns: [
      { symbol: "λ_max", unit: "m", description: "peak wavelength" },
      { symbol: "L", unit: "W", description: "luminosity" }
    ],
    acceptedSolutions: [
      ["B1_8", "B1_6", "CONST_sigma"]
    ],
    requiredConstants: ["CONST_sigma"],
    hints: [
      "This is a two-part problem. Use Wien's law for the wavelength and Stefan-Boltzmann for the luminosity.",
      "λmax = (2.9 × 10⁻³)/T for the peak wavelength. Then L = σAT⁴ where A = 4πr².",
      "λmax = 3.6 × 10⁻⁷ m. L = 5.67 × 10⁻⁸ × 4π × (4.0 × 10⁹)² × 8000⁴."
    ],
    explanation: "Wien's law: \\(\\lambda_{\\max} = \\frac{2.9 \\times 10^{-3}}{8000} = 3.63 \\times 10^{-7}\\) m. Stefan-Boltzmann: \\(L = \\sigma A T^4 = 5.67 \\times 10^{-8} \\times 4\\pi \\times (4.0 \\times 10^9)^2 \\times (8000)^4 \\approx 4.7 \\times 10^{28}\\) W."
  },

  {
    id: "B1_L2_02",
    text: "A star has a luminosity of {{3.8 × 10²⁶ W}} and is observed from Earth with an {{apparent brightness}} of {{1.4 × 10³ W m⁻²}}. Calculate the {{distance}} from the star to the observer.",
    topic: "B",
    subtopic: "B1",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "3.8 × 10²⁶ W", tip: "This is the luminosity L — the total power radiated by the star." },
      { phrase: "apparent brightness", tip: "The power received per unit area at the observer's location, b = L/(4πd²)." },
      { phrase: "1.4 × 10³ W m⁻²", tip: "This is the apparent brightness, b = 1.4 × 10³ W m⁻²." },
      { phrase: "distance", tip: "The distance from the star to the observer, d." }
    ],
    knowns: [
      { symbol: "L", value: "3.8 × 10²⁶", unit: "W", description: "luminosity of the star" },
      { symbol: "b", value: "1.4 × 10³", unit: "W m⁻²", description: "apparent brightness" }
    ],
    unknowns: [
      { symbol: "d", unit: "m", description: "distance to the star" }
    ],
    acceptedSolutions: [
      ["B1_7"]
    ],
    requiredConstants: [],
    hints: [
      "What formula relates apparent brightness, luminosity, and distance?",
      "b = L/(4πd²). Rearrange for d.",
      "d = √(L/(4πb)) = √(3.8 × 10²⁶ / (4π × 1.4 × 10³))."
    ],
    explanation: "Rearranging \\(b = \\frac{L}{4\\pi d^2}\\) gives \\(d = \\sqrt{\\frac{L}{4\\pi b}} = \\sqrt{\\frac{3.8 \\times 10^{26}}{4\\pi \\times 1.4 \\times 10^3}} \\approx 1.5 \\times 10^{11}\\) m."
  },

  {
    id: "B1_L2_03",
    text: "A {{0.30 kg}} block of ice at {{0 °C}} is completely melted and the resulting water is then heated to {{40 °C}}. The {{specific latent heat of fusion}} of ice is {{3.34 × 10⁵ J kg⁻¹}} and the {{specific heat capacity}} of water is {{4200 J kg⁻¹ K⁻¹}}. Calculate the {{total energy}} required.",
    topic: "B",
    subtopic: "B1",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "0.30 kg", tip: "Mass of ice, m = 0.30 kg." },
      { phrase: "0 °C", tip: "The ice starts at its melting point." },
      { phrase: "40 °C", tip: "Final temperature of the water. ΔT = 40 K for the heating phase." },
      { phrase: "specific latent heat of fusion", tip: "Energy per unit mass needed to change state from solid to liquid at constant temperature." },
      { phrase: "3.34 × 10⁵ J kg⁻¹", tip: "L = 3.34 × 10⁵ J kg⁻¹ for ice." },
      { phrase: "specific heat capacity", tip: "Energy per unit mass per unit temperature change." },
      { phrase: "4200 J kg⁻¹ K⁻¹", tip: "c = 4200 J kg⁻¹ K⁻¹ for water." },
      { phrase: "total energy", tip: "The sum of the energy to melt the ice and to heat the water." }
    ],
    knowns: [
      { symbol: "m", value: "0.30", unit: "kg", description: "mass of ice" },
      { symbol: "L", value: "3.34 × 10⁵", unit: "J kg⁻¹", description: "specific latent heat of fusion" },
      { symbol: "c", value: "4200", unit: "J kg⁻¹ K⁻¹", description: "specific heat capacity of water" },
      { symbol: "ΔT", value: "40", unit: "K", description: "temperature change (0 to 40 °C)" }
    ],
    unknowns: [
      { symbol: "Q_total", unit: "J", description: "total energy required" }
    ],
    acceptedSolutions: [
      ["B1_4", "B1_3"]
    ],
    requiredConstants: [],
    hints: [
      "There are two stages: melting the ice and heating the water. Which formula applies to each?",
      "Melting: Q₁ = mL. Heating: Q₂ = mcΔT. Total = Q₁ + Q₂.",
      "Q₁ = 0.30 × 3.34 × 10⁵ = 1.00 × 10⁵ J. Q₂ = 0.30 × 4200 × 40 = 5.04 × 10⁴ J. Total ≈ 1.5 × 10⁵ J."
    ],
    explanation: "Melting: \\(Q_1 = mL = 0.30 \\times 3.34 \\times 10^5 = 1.00 \\times 10^5\\) J. Heating: \\(Q_2 = mc\\Delta T = 0.30 \\times 4200 \\times 40 = 5.04 \\times 10^4\\) J. Total: \\(Q = Q_1 + Q_2 = 1.50 \\times 10^5\\) J."
  },

  {
    id: "B1_L2_04",
    text: "A wall of thickness {{0.25 m}} and area {{12 m²}} has a {{thermal conductivity}} of {{0.80 W m⁻¹ K⁻¹}}. The inside surface is at {{22 °C}} and the outside is at {{5 °C}}. How much {{thermal energy}} is conducted through the wall in {{one hour}}?",
    topic: "B",
    subtopic: "B1",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "0.25 m", tip: "Thickness of the wall, Δx = 0.25 m." },
      { phrase: "12 m²", tip: "Cross-sectional area, A = 12 m²." },
      { phrase: "thermal conductivity", tip: "A material property measuring how well it conducts heat: k in W m⁻¹ K⁻¹." },
      { phrase: "0.80 W m⁻¹ K⁻¹", tip: "k = 0.80 W m⁻¹ K⁻¹." },
      { phrase: "22 °C", tip: "Inside temperature. ΔT = 22 − 5 = 17 K." },
      { phrase: "5 °C", tip: "Outside temperature." },
      { phrase: "thermal energy", tip: "The total energy transferred over time: Q = (ΔQ/Δt) × t." },
      { phrase: "one hour", tip: "t = 3600 s." }
    ],
    knowns: [
      { symbol: "Δx", value: "0.25", unit: "m", description: "wall thickness" },
      { symbol: "A", value: "12", unit: "m²", description: "wall area" },
      { symbol: "k", value: "0.80", unit: "W m⁻¹ K⁻¹", description: "thermal conductivity" },
      { symbol: "ΔT", value: "17", unit: "K", description: "temperature difference" },
      { symbol: "t", value: "3600", unit: "s", description: "time (1 hour)" }
    ],
    unknowns: [
      { symbol: "Q", unit: "J", description: "thermal energy transferred" }
    ],
    acceptedSolutions: [
      ["B1_5"]
    ],
    requiredConstants: [],
    hints: [
      "First find the rate of heat conduction, then multiply by time to get total energy.",
      "ΔQ/Δt = kA(ΔT/Δx). Then Q = (ΔQ/Δt) × t.",
      "Rate = 0.80 × 12 × (17/0.25) = 652.8 W. Q = 652.8 × 3600 ≈ 2.4 × 10⁶ J."
    ],
    explanation: "Rate of conduction: \\(\\frac{\\Delta Q}{\\Delta t} = kA\\frac{\\Delta T}{\\Delta x} = 0.80 \\times 12 \\times \\frac{17}{0.25} = 652.8\\) W. Total energy: \\(Q = 652.8 \\times 3600 = 2.35 \\times 10^6\\) J."
  },

  {
    id: "B1_L2_05",
    text: "A star has a luminosity of {{2.0 × 10²⁸ W}} and a surface temperature of {{10 000 K}}. Calculate the {{radius}} of the star. You may assume it radiates as a {{perfect black body}}.",
    topic: "B",
    subtopic: "B1",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "2.0 × 10²⁸ W", tip: "The luminosity L = 2.0 × 10²⁸ W — total power output." },
      { phrase: "10 000 K", tip: "Surface temperature T = 10 000 K." },
      { phrase: "radius", tip: "The radius r of the star, found from L = σAT⁴ with A = 4πr²." },
      { phrase: "perfect black body", tip: "The emissivity is 1 so the full Stefan-Boltzmann law applies." }
    ],
    knowns: [
      { symbol: "L", value: "2.0 × 10²⁸", unit: "W", description: "luminosity" },
      { symbol: "T", value: "10 000", unit: "K", description: "surface temperature" }
    ],
    unknowns: [
      { symbol: "r", unit: "m", description: "radius of star" }
    ],
    acceptedSolutions: [
      ["B1_6", "CONST_sigma"]
    ],
    requiredConstants: ["CONST_sigma"],
    hints: [
      "Use Stefan-Boltzmann law L = σAT⁴ with A = 4πr². Rearrange for r.",
      "r = √(L / (4πσT⁴)).",
      "r = √(2.0 × 10²⁸ / (4π × 5.67 × 10⁻⁸ × 10⁴⁴)) ≈ 1.5 × 10⁹ m."
    ],
    explanation: "From \\(L = \\sigma (4\\pi r^2) T^4\\), rearranging: \\(r = \\sqrt{\\frac{L}{4\\pi \\sigma T^4}} = \\sqrt{\\frac{2.0 \\times 10^{28}}{4\\pi \\times 5.67 \\times 10^{-8} \\times (10^4)^4}} \\approx 1.5 \\times 10^9\\) m."
  },

  {
    id: "B1_L2_06",
    text: "If the {{absolute temperature}} of a black body is {{tripled}}, by what factor does its {{luminosity}} change? (Assume the surface area remains constant.)",
    topic: "B",
    subtopic: "B1",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "absolute temperature", tip: "Temperature measured in kelvin." },
      { phrase: "tripled", tip: "The new temperature is 3T." },
      { phrase: "luminosity", tip: "Total power radiated: L = σAT⁴." }
    ],
    knowns: [
      { symbol: "T₂/T₁", value: "3", unit: "", description: "temperature ratio" }
    ],
    unknowns: [
      { symbol: "L₂/L₁", unit: "", description: "luminosity ratio" }
    ],
    acceptedSolutions: [
      ["B1_6"]
    ],
    requiredConstants: [],
    hints: [
      "This is a proportional reasoning question — no numbers needed, just ratios.",
      "Since L = σAT⁴ and A is constant, L is proportional to T⁴.",
      "L₂/L₁ = (T₂/T₁)⁴ = 3⁴ = 81. The luminosity increases by a factor of 81."
    ],
    explanation: "Since \\(L = \\sigma A T^4\\) and \\(A\\) is constant, \\(L \\propto T^4\\). When temperature triples: \\(\\frac{L_2}{L_1} = \\left(\\frac{T_2}{T_1}\\right)^4 = 3^4 = 81\\). The luminosity increases by a factor of 81."
  },

  {
    id: "B1_L2_07",
    text: "Nitrogen molecules (mass {{4.65 × 10⁻²⁶ kg}}) are in a container at {{300 K}}. Using the relationship between {{average kinetic energy}} and temperature, estimate the {{root-mean-square speed}} of the molecules.",
    topic: "B",
    subtopic: "B1",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "4.65 × 10⁻²⁶ kg", tip: "Mass of a single N₂ molecule, m = 4.65 × 10⁻²⁶ kg." },
      { phrase: "300 K", tip: "Temperature T = 300 K." },
      { phrase: "average kinetic energy", tip: "The mean translational KE of a molecule: Ek = (3/2)kBT." },
      { phrase: "root-mean-square speed", tip: "The rms speed vrms found by setting (3/2)kBT = ½mv²rms." }
    ],
    knowns: [
      { symbol: "m", value: "4.65 × 10⁻²⁶", unit: "kg", description: "mass of one N₂ molecule" },
      { symbol: "T", value: "300", unit: "K", description: "temperature" }
    ],
    unknowns: [
      { symbol: "v_rms", unit: "m s⁻¹", description: "root-mean-square speed" }
    ],
    acceptedSolutions: [
      ["B1_2", "A3_2", "CONST_kB"]
    ],
    requiredConstants: ["CONST_kB"],
    hints: [
      "Set the average KE equal to the kinetic energy formula: (3/2)kBT = ½mv².",
      "Rearrange: v = √(3kBT/m).",
      "v = √(3 × 1.38 × 10⁻²³ × 300 / 4.65 × 10⁻²⁶) ≈ 517 m s⁻¹."
    ],
    explanation: "Equating \\(\\frac{3}{2}k_BT = \\frac{1}{2}mv^2_{rms}\\), we get \\(v_{rms} = \\sqrt{\\frac{3k_BT}{m}} = \\sqrt{\\frac{3 \\times 1.38 \\times 10^{-23} \\times 300}{4.65 \\times 10^{-26}}} \\approx 517\\) m s\\(^{-1}\\)."
  },

  {
    id: "B1_L2_08",
    text: "A star has a {{luminosity}} of {{7.2 × 10²⁶ W}} and a radius of {{6.96 × 10⁸ m}}. First determine the star's {{surface temperature}} and then find its {{peak emission wavelength}}.",
    topic: "B",
    subtopic: "B1",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "luminosity", tip: "Total power radiated, L = σAT⁴." },
      { phrase: "7.2 × 10²⁶ W", tip: "L = 7.2 × 10²⁶ W." },
      { phrase: "6.96 × 10⁸ m", tip: "Radius r = 6.96 × 10⁸ m, so A = 4πr²." },
      { phrase: "surface temperature", tip: "Found by rearranging Stefan-Boltzmann: T = (L/(σA))^(1/4)." },
      { phrase: "peak emission wavelength", tip: "Found from Wien's law: λmax = (2.9 × 10⁻³)/T." }
    ],
    knowns: [
      { symbol: "L", value: "7.2 × 10²⁶", unit: "W", description: "luminosity" },
      { symbol: "r", value: "6.96 × 10⁸", unit: "m", description: "stellar radius" }
    ],
    unknowns: [
      { symbol: "T", unit: "K", description: "surface temperature" },
      { symbol: "λ_max", unit: "m", description: "peak emission wavelength" }
    ],
    acceptedSolutions: [
      ["B1_6", "B1_8", "CONST_sigma"]
    ],
    requiredConstants: ["CONST_sigma"],
    hints: [
      "Two steps: first find T from Stefan-Boltzmann, then use Wien's law to find λmax.",
      "T = (L/(4πr²σ))^(1/4). Then λmax = (2.9 × 10⁻³)/T.",
      "A = 4π(6.96 × 10⁸)² = 6.09 × 10¹⁸ m². T = (7.2 × 10²⁶/(5.67 × 10⁻⁸ × 6.09 × 10¹⁸))^0.25 ≈ 5800 K. λmax ≈ 5.0 × 10⁻⁷ m."
    ],
    explanation: "Surface area: \\(A = 4\\pi (6.96 \\times 10^8)^2 = 6.09 \\times 10^{18}\\) m². From \\(L = \\sigma A T^4\\): \\(T = \\left(\\frac{L}{\\sigma A}\\right)^{1/4} = \\left(\\frac{7.2 \\times 10^{26}}{5.67 \\times 10^{-8} \\times 6.09 \\times 10^{18}}\\right)^{0.25} \\approx 5800\\) K. Wien's law: \\(\\lambda_{\\max} = \\frac{2.9 \\times 10^{-3}}{5800} \\approx 5.0 \\times 10^{-7}\\) m (visible yellow-green)."
  },

  // ===========================================================
  // B2 GREENHOUSE EFFECT — LEVEL 1 (2 questions: B2_L1_01 to B2_L1_02)
  // ===========================================================

  {
    id: "B2_L1_01",
    text: "A surface at {{320 K}} radiates a power per unit area of {{340 W m⁻²}}. Calculate its {{emissivity}}.",
    topic: "B",
    subtopic: "B2",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "320 K", tip: "Surface temperature T = 320 K." },
      { phrase: "340 W m⁻²", tip: "This is the power radiated per unit area by the real surface." },
      { phrase: "emissivity", tip: "The ratio of power radiated per unit area by the surface to that of a perfect black body at the same temperature." }
    ],
    knowns: [
      { symbol: "P/A", value: "340", unit: "W m⁻²", description: "power radiated per unit area" },
      { symbol: "T", value: "320", unit: "K", description: "surface temperature" }
    ],
    unknowns: [
      { symbol: "e", unit: "", description: "emissivity" }
    ],
    acceptedSolutions: [
      ["B2_1", "CONST_sigma"]
    ],
    requiredConstants: ["CONST_sigma"],
    hints: [
      "Emissivity compares actual radiated power per unit area to that of a black body.",
      "e = (power radiated per unit area) / (σT⁴).",
      "e = 340 / (5.67 × 10⁻⁸ × 320⁴). Calculate 320⁴ first."
    ],
    explanation: "Black body power per unit area: \\(\\sigma T^4 = 5.67 \\times 10^{-8} \\times 320^4 = 5.67 \\times 10^{-8} \\times 1.049 \\times 10^{10} = 594.6\\) W m\\(^{-2}\\). Emissivity: \\(e = \\frac{340}{594.6} \\approx 0.57\\)."
  },

  {
    id: "B2_L1_02",
    text: "The total {{incident solar power}} on a snow-covered surface is {{800 W}}. If {{600 W}} is {{scattered}} back, calculate the {{albedo}} of the surface.",
    topic: "B",
    subtopic: "B2",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "incident solar power", tip: "The total power arriving at the surface." },
      { phrase: "800 W", tip: "Total incident power = 800 W." },
      { phrase: "scattered", tip: "Reflected or scattered back without being absorbed." },
      { phrase: "600 W", tip: "Total scattered power = 600 W." },
      { phrase: "albedo", tip: "The fraction of incident power that is scattered (reflected) by a surface." }
    ],
    knowns: [
      { symbol: "P_incident", value: "800", unit: "W", description: "total incident power" },
      { symbol: "P_scattered", value: "600", unit: "W", description: "total scattered power" }
    ],
    unknowns: [
      { symbol: "α", unit: "", description: "albedo" }
    ],
    acceptedSolutions: [
      ["B2_2"]
    ],
    requiredConstants: [],
    hints: [
      "Albedo is a simple ratio of scattered to incident power.",
      "α = total scattered power / total incident power.",
      "α = 600/800 = 0.75."
    ],
    explanation: "Using \\(\\alpha = \\frac{\\text{total scattered power}}{\\text{total incident power}} = \\frac{600}{800} = 0.75\\). Snow has a high albedo, reflecting most incident radiation."
  },

  // ===========================================================
  // B2 GREENHOUSE EFFECT — LEVEL 2 (2 questions: B2_L2_01 to B2_L2_02)
  // ===========================================================

  {
    id: "B2_L2_01",
    text: "A planet's surface has an {{emissivity}} of {{0.90}} and a temperature of {{288 K}}. Calculate the {{power radiated per unit area}} by the surface and hence the total {{power radiated}} if the planet has a radius of {{6.4 × 10⁶ m}}.",
    topic: "B",
    subtopic: "B2",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "emissivity", tip: "The ratio of actual radiated power per unit area to black body radiated power per unit area." },
      { phrase: "0.90", tip: "e = 0.90." },
      { phrase: "288 K", tip: "Surface temperature T = 288 K." },
      { phrase: "power radiated per unit area", tip: "For a real surface: P/A = eσT⁴." },
      { phrase: "power radiated", tip: "Total power = (P/A) × surface area." },
      { phrase: "6.4 × 10⁶ m", tip: "Planet radius r = 6.4 × 10⁶ m. Surface area = 4πr²." }
    ],
    knowns: [
      { symbol: "e", value: "0.90", unit: "", description: "emissivity" },
      { symbol: "T", value: "288", unit: "K", description: "surface temperature" },
      { symbol: "r", value: "6.4 × 10⁶", unit: "m", description: "planet radius" }
    ],
    unknowns: [
      { symbol: "P/A", unit: "W m⁻²", description: "power radiated per unit area" },
      { symbol: "P_total", unit: "W", description: "total power radiated" }
    ],
    acceptedSolutions: [
      ["B2_1", "B1_6", "CONST_sigma"]
    ],
    requiredConstants: ["CONST_sigma"],
    hints: [
      "Use the emissivity definition to find power per unit area: P/A = eσT⁴. Then multiply by the surface area.",
      "P/A = 0.90 × σ × 288⁴. Total power = (P/A) × 4πr².",
      "P/A = 0.90 × 5.67 × 10⁻⁸ × 288⁴ ≈ 351 W m⁻². Total = 351 × 4π × (6.4 × 10⁶)² ≈ 1.8 × 10¹⁷ W."
    ],
    explanation: "Power per unit area: \\(P/A = e\\sigma T^4 = 0.90 \\times 5.67 \\times 10^{-8} \\times 288^4 = 0.90 \\times 5.67 \\times 10^{-8} \\times 6.88 \\times 10^9 \\approx 351\\) W m\\(^{-2}\\). Surface area: \\(4\\pi (6.4 \\times 10^6)^2 = 5.15 \\times 10^{14}\\) m². Total power: \\(351 \\times 5.15 \\times 10^{14} \\approx 1.8 \\times 10^{17}\\) W."
  },

  {
    id: "B2_L2_02",
    text: "The {{average albedo}} of Earth is {{0.30}}. If the total {{solar power incident}} on Earth is {{1.74 × 10¹⁷ W}}, calculate the power {{absorbed}} by the Earth. If this absorbed power equals the power radiated and Earth acts as a black body, estimate Earth's {{equilibrium surface temperature}}.",
    topic: "B",
    subtopic: "B2",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "average albedo", tip: "Fraction of incident solar power scattered by the Earth." },
      { phrase: "0.30", tip: "α = 0.30 — 30% of incident power is reflected." },
      { phrase: "solar power incident", tip: "Total power arriving at the Earth from the Sun." },
      { phrase: "1.74 × 10¹⁷ W", tip: "Total incident power P_in = 1.74 × 10¹⁷ W." },
      { phrase: "absorbed", tip: "Power absorbed = (1 − α) × incident power." },
      { phrase: "equilibrium surface temperature", tip: "Found by equating absorbed power to radiated power using Stefan-Boltzmann." }
    ],
    knowns: [
      { symbol: "α", value: "0.30", unit: "", description: "average albedo" },
      { symbol: "P_in", value: "1.74 × 10¹⁷", unit: "W", description: "total incident solar power" }
    ],
    unknowns: [
      { symbol: "P_abs", unit: "W", description: "power absorbed" },
      { symbol: "T", unit: "K", description: "equilibrium surface temperature" }
    ],
    acceptedSolutions: [
      ["B2_2", "B1_6", "CONST_sigma"]
    ],
    requiredConstants: ["CONST_sigma"],
    hints: [
      "First find absorbed power using albedo: P_abs = (1 − α) × P_in. Then equate to Stefan-Boltzmann.",
      "P_abs = (1 − 0.30) × 1.74 × 10¹⁷. Then P_abs = σAT⁴ where A = 4πR² (Earth's surface area). Use R = 6.4 × 10⁶ m.",
      "P_abs = 1.22 × 10¹⁷ W. T = (P_abs/(σ × 4π × (6.4 × 10⁶)²))^(1/4) ≈ 255 K."
    ],
    explanation: "Absorbed power: \\(P_{abs} = (1 - 0.30) \\times 1.74 \\times 10^{17} = 1.22 \\times 10^{17}\\) W. Equating to radiated power: \\(P_{abs} = \\sigma (4\\pi R^2) T^4\\). \\(T = \\left(\\frac{1.22 \\times 10^{17}}{5.67 \\times 10^{-8} \\times 5.15 \\times 10^{14}}\\right)^{1/4} = \\left(\\frac{1.22 \\times 10^{17}}{2.92 \\times 10^{7}}\\right)^{0.25} \\approx 255\\) K. This is about −18 °C, lower than Earth's actual average because the greenhouse effect is not included."
  },

  // ===========================================================
  // B3 GAS LAWS — LEVEL 1 (4 questions: B3_L1_01 to B3_L1_04)
  // ===========================================================

  {
    id: "B3_L1_01",
    text: "A force of {{450 N}} acts on a piston of area {{1.5 × 10⁻³ m²}}. Calculate the {{pressure}} exerted on the gas.",
    topic: "B",
    subtopic: "B3",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "450 N", tip: "This is the force, F = 450 N." },
      { phrase: "1.5 × 10⁻³ m²", tip: "This is the area of the piston, A = 1.5 × 10⁻³ m²." },
      { phrase: "pressure", tip: "Pressure is force per unit area: P = F/A." }
    ],
    knowns: [
      { symbol: "F", value: "450", unit: "N", description: "force on piston" },
      { symbol: "A", value: "1.5 × 10⁻³", unit: "m²", description: "piston area" }
    ],
    unknowns: [
      { symbol: "P", unit: "Pa", description: "pressure" }
    ],
    acceptedSolutions: [
      ["B3_1"]
    ],
    requiredConstants: [],
    hints: [
      "What is the definition of pressure?",
      "P = F/A. Substitute the values.",
      "P = 450 / (1.5 × 10⁻³) = 3.0 × 10⁵ Pa."
    ],
    explanation: "Using \\(P = \\frac{F}{A} = \\frac{450}{1.5 \\times 10^{-3}} = 3.0 \\times 10^5\\) Pa."
  },

  {
    id: "B3_L1_02",
    text: "A sample contains {{2.4 × 10²⁴}} molecules. Calculate the {{number of moles}} of substance in the sample.",
    topic: "B",
    subtopic: "B3",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "2.4 × 10²⁴", tip: "This is the number of molecules, N = 2.4 × 10²⁴." },
      { phrase: "number of moles", tip: "n = N/NA where NA is the Avogadro constant." }
    ],
    knowns: [
      { symbol: "N", value: "2.4 × 10²⁴", unit: "", description: "number of molecules" }
    ],
    unknowns: [
      { symbol: "n", unit: "mol", description: "number of moles" }
    ],
    acceptedSolutions: [
      ["B3_2", "CONST_NA"]
    ],
    requiredConstants: ["CONST_NA"],
    hints: [
      "How are moles related to the number of particles?",
      "n = N/NA. You need the Avogadro constant.",
      "n = 2.4 × 10²⁴ / (6.02 × 10²³) ≈ 4.0 mol."
    ],
    explanation: "Using \\(n = \\frac{N}{N_A} = \\frac{2.4 \\times 10^{24}}{6.02 \\times 10^{23}} \\approx 4.0\\) mol."
  },

  {
    id: "B3_L1_03",
    text: "An {{ideal gas}} at {{300 K}} occupies a volume of {{0.025 m³}} at a pressure of {{1.0 × 10⁵ Pa}}. The gas is heated to {{450 K}} at constant volume. Find the {{new pressure}}.",
    topic: "B",
    subtopic: "B3",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "ideal gas", tip: "A gas that obeys PV = nRT (or PV/T = constant for a fixed amount)." },
      { phrase: "300 K", tip: "Initial temperature T₁ = 300 K." },
      { phrase: "0.025 m³", tip: "Volume V = 0.025 m³ (constant)." },
      { phrase: "1.0 × 10⁵ Pa", tip: "Initial pressure P₁ = 1.0 × 10⁵ Pa." },
      { phrase: "450 K", tip: "Final temperature T₂ = 450 K." },
      { phrase: "new pressure", tip: "The final pressure P₂ after heating at constant volume." }
    ],
    knowns: [
      { symbol: "P₁", value: "1.0 × 10⁵", unit: "Pa", description: "initial pressure" },
      { symbol: "T₁", value: "300", unit: "K", description: "initial temperature" },
      { symbol: "T₂", value: "450", unit: "K", description: "final temperature" }
    ],
    unknowns: [
      { symbol: "P₂", unit: "Pa", description: "final pressure" }
    ],
    acceptedSolutions: [
      ["B3_3"]
    ],
    requiredConstants: [],
    hints: [
      "At constant volume for a fixed amount of gas, PV/T = constant simplifies to P/T = constant.",
      "P₁/T₁ = P₂/T₂. Rearrange for P₂.",
      "P₂ = P₁ × T₂/T₁ = 1.0 × 10⁵ × 450/300 = 1.5 × 10⁵ Pa."
    ],
    explanation: "At constant volume: \\(\\frac{P_1}{T_1} = \\frac{P_2}{T_2}\\). So \\(P_2 = P_1 \\times \\frac{T_2}{T_1} = 1.0 \\times 10^5 \\times \\frac{450}{300} = 1.5 \\times 10^5\\) Pa."
  },

  {
    id: "B3_L1_04",
    text: "Calculate the {{internal energy}} of {{3.0 moles}} of an {{ideal monatomic gas}} at a temperature of {{400 K}}.",
    topic: "B",
    subtopic: "B3",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "internal energy", tip: "For an ideal monatomic gas, U = (3/2)nRT." },
      { phrase: "3.0 moles", tip: "n = 3.0 mol." },
      { phrase: "ideal monatomic gas", tip: "A gas whose molecules are single atoms with only translational KE." },
      { phrase: "400 K", tip: "Temperature T = 400 K." }
    ],
    knowns: [
      { symbol: "n", value: "3.0", unit: "mol", description: "number of moles" },
      { symbol: "T", value: "400", unit: "K", description: "temperature" }
    ],
    unknowns: [
      { symbol: "U", unit: "J", description: "internal energy" }
    ],
    acceptedSolutions: [
      ["B3_6", "CONST_R"]
    ],
    requiredConstants: ["CONST_R"],
    hints: [
      "What is the formula for internal energy of an ideal monatomic gas?",
      "U = (3/2)nRT. You need the gas constant R.",
      "U = 1.5 × 3.0 × 8.31 × 400 ≈ 1.5 × 10⁴ J."
    ],
    explanation: "Using \\(U = \\frac{3}{2}nRT = \\frac{3}{2} \\times 3.0 \\times 8.31 \\times 400 = 14\\,958\\) J ≈ 1.5 × 10⁴ J."
  },

  // ===========================================================
  // B3 GAS LAWS — LEVEL 2 (10 questions: B3_L2_01 to B3_L2_10)
  // ===========================================================

  {
    id: "B3_L2_01",
    text: "A container of volume {{0.050 m³}} holds {{2.0 moles}} of an {{ideal gas}} at {{350 K}}. Calculate the {{pressure}} of the gas and its {{internal energy}}.",
    topic: "B",
    subtopic: "B3",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "0.050 m³", tip: "Volume V = 0.050 m³." },
      { phrase: "2.0 moles", tip: "n = 2.0 mol." },
      { phrase: "ideal gas", tip: "Obeys PV = nRT." },
      { phrase: "350 K", tip: "Temperature T = 350 K." },
      { phrase: "pressure", tip: "Found from the ideal gas law." },
      { phrase: "internal energy", tip: "For a monatomic ideal gas: U = (3/2)nRT." }
    ],
    knowns: [
      { symbol: "V", value: "0.050", unit: "m³", description: "volume" },
      { symbol: "n", value: "2.0", unit: "mol", description: "number of moles" },
      { symbol: "T", value: "350", unit: "K", description: "temperature" }
    ],
    unknowns: [
      { symbol: "P", unit: "Pa", description: "pressure" },
      { symbol: "U", unit: "J", description: "internal energy" }
    ],
    acceptedSolutions: [
      ["B3_4", "B3_6", "CONST_R"]
    ],
    requiredConstants: ["CONST_R"],
    hints: [
      "Use the ideal gas law for pressure and the internal energy formula separately.",
      "P = nRT/V and U = (3/2)nRT.",
      "P = 2.0 × 8.31 × 350 / 0.050 = 1.16 × 10⁵ Pa. U = 1.5 × 2.0 × 8.31 × 350 = 8720 J."
    ],
    explanation: "Ideal gas law: \\(P = \\frac{nRT}{V} = \\frac{2.0 \\times 8.31 \\times 350}{0.050} = 1.16 \\times 10^5\\) Pa. Internal energy: \\(U = \\frac{3}{2}nRT = 1.5 \\times 2.0 \\times 8.31 \\times 350 = 8725\\) J ≈ 8.7 × 10³ J."
  },

  {
    id: "B3_L2_02",
    text: "A gas has a density of {{1.29 kg m⁻³}} at a pressure of {{1.01 × 10⁵ Pa}} and temperature {{273 K}}. If the gas is ideal, find the {{molar mass}} of the gas.",
    topic: "B",
    subtopic: "B3",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "1.29 kg m⁻³", tip: "Density ρ = 1.29 kg m⁻³." },
      { phrase: "1.01 × 10⁵ Pa", tip: "Pressure P = 1.01 × 10⁵ Pa." },
      { phrase: "273 K", tip: "Temperature T = 273 K." },
      { phrase: "molar mass", tip: "Molar mass M = mass per mole. Combine density with ideal gas law." }
    ],
    knowns: [
      { symbol: "ρ", value: "1.29", unit: "kg m⁻³", description: "density" },
      { symbol: "P", value: "1.01 × 10⁵", unit: "Pa", description: "pressure" },
      { symbol: "T", value: "273", unit: "K", description: "temperature" }
    ],
    unknowns: [
      { symbol: "M", unit: "kg mol⁻¹", description: "molar mass" }
    ],
    acceptedSolutions: [
      ["B1_1", "B3_4", "CONST_R"]
    ],
    requiredConstants: ["CONST_R"],
    hints: [
      "Combine ρ = m/V with PV = nRT. Note that n = m/M.",
      "PV = (m/M)RT, so P = (ρ/M)RT. Rearrange: M = ρRT/P.",
      "M = 1.29 × 8.31 × 273 / (1.01 × 10⁵) ≈ 0.029 kg mol⁻¹."
    ],
    explanation: "From \\(PV = nRT\\) with \\(n = m/M\\) and \\(\\rho = m/V\\): \\(P = \\frac{\\rho RT}{M}\\). Rearranging: \\(M = \\frac{\\rho RT}{P} = \\frac{1.29 \\times 8.31 \\times 273}{1.01 \\times 10^5} = 0.029\\) kg mol\\(^{-1}\\) = 29 g mol\\(^{-1}\\) (consistent with air, mainly N₂)."
  },

  {
    id: "B3_L2_03",
    text: "A sealed container holds gas at {{2.0 × 10⁵ Pa}}, {{0.010 m³}}, and {{300 K}}. The gas is heated until the pressure reaches {{5.0 × 10⁵ Pa}} and the volume expands to {{0.020 m³}}. Find the {{final temperature}}.",
    topic: "B",
    subtopic: "B3",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "2.0 × 10⁵ Pa", tip: "Initial pressure P₁ = 2.0 × 10⁵ Pa." },
      { phrase: "0.010 m³", tip: "Initial volume V₁ = 0.010 m³." },
      { phrase: "300 K", tip: "Initial temperature T₁ = 300 K." },
      { phrase: "5.0 × 10⁵ Pa", tip: "Final pressure P₂ = 5.0 × 10⁵ Pa." },
      { phrase: "0.020 m³", tip: "Final volume V₂ = 0.020 m³." },
      { phrase: "final temperature", tip: "Use the combined gas law: P₁V₁/T₁ = P₂V₂/T₂." }
    ],
    knowns: [
      { symbol: "P₁", value: "2.0 × 10⁵", unit: "Pa", description: "initial pressure" },
      { symbol: "V₁", value: "0.010", unit: "m³", description: "initial volume" },
      { symbol: "T₁", value: "300", unit: "K", description: "initial temperature" },
      { symbol: "P₂", value: "5.0 × 10⁵", unit: "Pa", description: "final pressure" },
      { symbol: "V₂", value: "0.020", unit: "m³", description: "final volume" }
    ],
    unknowns: [
      { symbol: "T₂", unit: "K", description: "final temperature" }
    ],
    acceptedSolutions: [
      ["B3_3"]
    ],
    requiredConstants: [],
    hints: [
      "The amount of gas is fixed, so use PV/T = constant.",
      "P₁V₁/T₁ = P₂V₂/T₂. Rearrange for T₂.",
      "T₂ = T₁ × (P₂V₂)/(P₁V₁) = 300 × (5.0 × 10⁵ × 0.020)/(2.0 × 10⁵ × 0.010) = 1500 K."
    ],
    explanation: "Using the combined gas law: \\(\\frac{P_1V_1}{T_1} = \\frac{P_2V_2}{T_2}\\). Rearranging: \\(T_2 = T_1 \\times \\frac{P_2 V_2}{P_1 V_1} = 300 \\times \\frac{5.0 \\times 10^5 \\times 0.020}{2.0 \\times 10^5 \\times 0.010} = 300 \\times 5 = 1500\\) K."
  },

  {
    id: "B3_L2_04",
    text: "An {{ideal gas}} in a container of volume {{0.030 m³}} is at {{1.5 × 10⁵ Pa}} and {{400 K}}. Calculate the {{number of molecules}} in the container.",
    topic: "B",
    subtopic: "B3",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "ideal gas", tip: "Obeys PV = NkBT." },
      { phrase: "0.030 m³", tip: "Volume V = 0.030 m³." },
      { phrase: "1.5 × 10⁵ Pa", tip: "Pressure P = 1.5 × 10⁵ Pa." },
      { phrase: "400 K", tip: "Temperature T = 400 K." },
      { phrase: "number of molecules", tip: "Use PV = NkBT to find N directly." }
    ],
    knowns: [
      { symbol: "P", value: "1.5 × 10⁵", unit: "Pa", description: "pressure" },
      { symbol: "V", value: "0.030", unit: "m³", description: "volume" },
      { symbol: "T", value: "400", unit: "K", description: "temperature" }
    ],
    unknowns: [
      { symbol: "N", unit: "", description: "number of molecules" }
    ],
    acceptedSolutions: [
      ["B3_4", "CONST_kB"],
      ["B3_4", "B3_2", "CONST_R", "CONST_NA"]
    ],
    requiredConstants: ["CONST_kB"],
    hints: [
      "You can use PV = NkBT to find the number of molecules directly.",
      "N = PV/(kBT).",
      "N = (1.5 × 10⁵ × 0.030) / (1.38 × 10⁻²³ × 400) ≈ 8.2 × 10²³."
    ],
    explanation: "Using \\(PV = Nk_BT\\): \\(N = \\frac{PV}{k_BT} = \\frac{1.5 \\times 10^5 \\times 0.030}{1.38 \\times 10^{-23} \\times 400} = \\frac{4500}{5.52 \\times 10^{-21}} \\approx 8.15 \\times 10^{23}\\) molecules."
  },

  {
    id: "B3_L2_05",
    text: "A gas of density {{0.90 kg m⁻³}} exerts a pressure of {{1.0 × 10⁵ Pa}}. Using the {{kinetic theory}} expression for pressure, calculate the {{root-mean-square speed}} of the molecules.",
    topic: "B",
    subtopic: "B3",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "0.90 kg m⁻³", tip: "Density ρ = 0.90 kg m⁻³." },
      { phrase: "1.0 × 10⁵ Pa", tip: "Pressure P = 1.0 × 10⁵ Pa." },
      { phrase: "kinetic theory", tip: "The kinetic model relates macroscopic pressure to microscopic molecular speeds." },
      { phrase: "root-mean-square speed", tip: "The rms speed: vrms = √(3P/ρ) from P = (1/3)ρv²." }
    ],
    knowns: [
      { symbol: "ρ", value: "0.90", unit: "kg m⁻³", description: "density of gas" },
      { symbol: "P", value: "1.0 × 10⁵", unit: "Pa", description: "pressure" }
    ],
    unknowns: [
      { symbol: "v_rms", unit: "m s⁻¹", description: "root-mean-square speed" }
    ],
    acceptedSolutions: [
      ["B3_5"]
    ],
    requiredConstants: [],
    hints: [
      "What is the kinetic theory expression for pressure in terms of density and speed?",
      "P = (1/3)ρv². Rearrange for v.",
      "v = √(3P/ρ) = √(3 × 10⁵ / 0.90) ≈ 577 m s⁻¹."
    ],
    explanation: "From \\(P = \\frac{1}{3}\\rho v^2_{rms}\\), rearranging: \\(v_{rms} = \\sqrt{\\frac{3P}{\\rho}} = \\sqrt{\\frac{3 \\times 1.0 \\times 10^5}{0.90}} = \\sqrt{3.33 \\times 10^5} \\approx 577\\) m s\\(^{-1}\\)."
  },

  {
    id: "B3_L2_06",
    text: "If the {{volume}} of an ideal gas is {{halved}} and the {{absolute temperature}} is {{doubled}}, by what factor does the {{pressure}} change?",
    topic: "B",
    subtopic: "B3",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "volume", tip: "One of the state variables of the gas." },
      { phrase: "halved", tip: "V₂ = V₁/2." },
      { phrase: "absolute temperature", tip: "Temperature in kelvin." },
      { phrase: "doubled", tip: "T₂ = 2T₁." },
      { phrase: "pressure", tip: "Use PV/T = constant or PV = nRT to find the ratio." }
    ],
    knowns: [
      { symbol: "V₂/V₁", value: "1/2", unit: "", description: "volume ratio" },
      { symbol: "T₂/T₁", value: "2", unit: "", description: "temperature ratio" }
    ],
    unknowns: [
      { symbol: "P₂/P₁", unit: "", description: "pressure ratio" }
    ],
    acceptedSolutions: [
      ["B3_3"],
      ["B3_4"]
    ],
    requiredConstants: [],
    hints: [
      "This is a proportional reasoning question. Use PV/T = constant for fixed n.",
      "P₁V₁/T₁ = P₂V₂/T₂. Find P₂/P₁.",
      "P₂/P₁ = (V₁/V₂) × (T₂/T₁) = 2 × 2 = 4. The pressure quadruples."
    ],
    explanation: "From \\(\\frac{P_1V_1}{T_1} = \\frac{P_2V_2}{T_2}\\): \\(\\frac{P_2}{P_1} = \\frac{V_1}{V_2} \\times \\frac{T_2}{T_1} = 2 \\times 2 = 4\\). The pressure increases by a factor of 4."
  },

  {
    id: "B3_L2_07",
    text: "A gas cylinder contains {{4.0 moles}} of an {{ideal monatomic gas}} at {{500 K}}. The gas pushes a piston of area {{0.020 m²}}. Calculate the {{force}} the gas exerts on the piston if the cylinder volume is {{0.040 m³}}.",
    topic: "B",
    subtopic: "B3",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "4.0 moles", tip: "n = 4.0 mol." },
      { phrase: "ideal monatomic gas", tip: "Obeys PV = nRT." },
      { phrase: "500 K", tip: "Temperature T = 500 K." },
      { phrase: "0.020 m²", tip: "Area of piston, A = 0.020 m²." },
      { phrase: "force", tip: "Force = pressure × area: F = PA." },
      { phrase: "0.040 m³", tip: "Volume V = 0.040 m³." }
    ],
    knowns: [
      { symbol: "n", value: "4.0", unit: "mol", description: "number of moles" },
      { symbol: "T", value: "500", unit: "K", description: "temperature" },
      { symbol: "V", value: "0.040", unit: "m³", description: "cylinder volume" },
      { symbol: "A", value: "0.020", unit: "m²", description: "piston area" }
    ],
    unknowns: [
      { symbol: "F", unit: "N", description: "force on piston" }
    ],
    acceptedSolutions: [
      ["B3_4", "B3_1", "CONST_R"]
    ],
    requiredConstants: ["CONST_R"],
    hints: [
      "First find the pressure using the ideal gas law, then use F = PA.",
      "P = nRT/V. Then F = PA.",
      "P = 4.0 × 8.31 × 500 / 0.040 = 4.16 × 10⁵ Pa. F = 4.16 × 10⁵ × 0.020 = 8300 N."
    ],
    explanation: "From the ideal gas law: \\(P = \\frac{nRT}{V} = \\frac{4.0 \\times 8.31 \\times 500}{0.040} = 4.16 \\times 10^5\\) Pa. Force: \\(F = PA = 4.16 \\times 10^5 \\times 0.020 = 8310\\) N ≈ 8.3 kN."
  },

  {
    id: "B3_L2_08",
    text: "An {{ideal monatomic gas}} at {{250 K}} is heated to {{750 K}} at constant volume. The gas contains {{1.5 moles}}. Calculate the {{change in internal energy}} of the gas.",
    topic: "B",
    subtopic: "B3",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "ideal monatomic gas", tip: "Internal energy U = (3/2)nRT. Only translational KE contributes." },
      { phrase: "250 K", tip: "Initial temperature T₁ = 250 K." },
      { phrase: "750 K", tip: "Final temperature T₂ = 750 K." },
      { phrase: "1.5 moles", tip: "n = 1.5 mol." },
      { phrase: "change in internal energy", tip: "ΔU = U₂ − U₁ = (3/2)nRΔT." }
    ],
    knowns: [
      { symbol: "n", value: "1.5", unit: "mol", description: "number of moles" },
      { symbol: "T₁", value: "250", unit: "K", description: "initial temperature" },
      { symbol: "T₂", value: "750", unit: "K", description: "final temperature" }
    ],
    unknowns: [
      { symbol: "ΔU", unit: "J", description: "change in internal energy" }
    ],
    acceptedSolutions: [
      ["B3_6", "CONST_R"]
    ],
    requiredConstants: ["CONST_R"],
    hints: [
      "Internal energy of an ideal monatomic gas depends only on temperature.",
      "ΔU = (3/2)nRΔT where ΔT = T₂ − T₁.",
      "ΔU = 1.5 × 1.5 × 8.31 × (750 − 250) = 1.5 × 1.5 × 8.31 × 500 ≈ 9350 J."
    ],
    explanation: "Change in internal energy: \\(\\Delta U = \\frac{3}{2}nR\\Delta T = \\frac{3}{2} \\times 1.5 \\times 8.31 \\times (750 - 250) = 1.5 \\times 1.5 \\times 8.31 \\times 500 = 9349\\) J ≈ 9.3 × 10³ J."
  },

  {
    id: "B3_L2_09",
    text: "A helium atom (mass {{6.64 × 10⁻²⁷ kg}}) is in a gas at temperature {{600 K}}. Calculate its {{average kinetic energy}} and hence the {{speed}} at which it would need to be launched vertically to reach a height of {{500 m}}. (Assume all kinetic energy converts to gravitational potential energy.)",
    topic: "B",
    subtopic: "B3",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "6.64 × 10⁻²⁷ kg", tip: "Mass of a helium atom, m = 6.64 × 10⁻²⁷ kg." },
      { phrase: "600 K", tip: "Temperature T = 600 K." },
      { phrase: "average kinetic energy", tip: "Ek = (3/2)kBT for a single molecule." },
      { phrase: "speed", tip: "The speed v found by equating ½mv² = mgΔh (KE to GPE)." },
      { phrase: "500 m", tip: "Height Δh = 500 m." }
    ],
    knowns: [
      { symbol: "m", value: "6.64 × 10⁻²⁷", unit: "kg", description: "mass of helium atom" },
      { symbol: "T", value: "600", unit: "K", description: "temperature" },
      { symbol: "Δh", value: "500", unit: "m", description: "height" }
    ],
    unknowns: [
      { symbol: "Ek", unit: "J", description: "average kinetic energy" },
      { symbol: "v", unit: "m s⁻¹", description: "launch speed" }
    ],
    acceptedSolutions: [
      ["B1_2", "A3_2", "A3_3", "CONST_kB", "CONST_g"],
      ["B1_2", "A3_3", "CONST_kB", "CONST_g"]
    ],
    requiredConstants: ["CONST_kB", "CONST_g"],
    hints: [
      "First find Ek = (3/2)kBT. Then for the height part, equate kinetic energy to gravitational potential energy.",
      "½mv² = mgΔh gives v = √(2gΔh). Note this speed is independent of mass.",
      "Ek = 1.5 × 1.38 × 10⁻²³ × 600 = 1.24 × 10⁻²⁰ J. v = √(2 × 9.8 × 500) ≈ 99 m s⁻¹."
    ],
    explanation: "Average KE: \\(E_k = \\frac{3}{2}k_BT = 1.5 \\times 1.38 \\times 10^{-23} \\times 600 = 1.24 \\times 10^{-20}\\) J. For the height: \\(\\frac{1}{2}mv^2 = mg\\Delta h\\), so \\(v = \\sqrt{2g\\Delta h} = \\sqrt{2 \\times 9.8 \\times 500} \\approx 99\\) m s\\(^{-1}\\). Note the thermal rms speed is much larger (≈ 1900 m s\\(^{-1}\\))."
  },

  {
    id: "B3_L2_10",
    text: "A balloon contains {{0.50 moles}} of helium at {{1.0 × 10⁵ Pa}} and {{293 K}}. Find the {{volume}} of the balloon and the {{total internal energy}} of the gas. If the temperature is raised to {{323 K}} at constant pressure, find the {{new volume}}.",
    topic: "B",
    subtopic: "B3",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "0.50 moles", tip: "n = 0.50 mol." },
      { phrase: "1.0 × 10⁵ Pa", tip: "Pressure P = 1.0 × 10⁵ Pa." },
      { phrase: "293 K", tip: "Initial temperature T₁ = 293 K." },
      { phrase: "volume", tip: "Found from PV = nRT." },
      { phrase: "total internal energy", tip: "For monatomic ideal gas: U = (3/2)nRT." },
      { phrase: "323 K", tip: "Final temperature T₂ = 323 K." },
      { phrase: "new volume", tip: "At constant pressure: V₁/T₁ = V₂/T₂ (Charles's law)." }
    ],
    knowns: [
      { symbol: "n", value: "0.50", unit: "mol", description: "moles of helium" },
      { symbol: "P", value: "1.0 × 10⁵", unit: "Pa", description: "pressure" },
      { symbol: "T₁", value: "293", unit: "K", description: "initial temperature" },
      { symbol: "T₂", value: "323", unit: "K", description: "final temperature" }
    ],
    unknowns: [
      { symbol: "V₁", unit: "m³", description: "initial volume" },
      { symbol: "U", unit: "J", description: "internal energy at T₁" },
      { symbol: "V₂", unit: "m³", description: "new volume at T₂" }
    ],
    acceptedSolutions: [
      ["B3_4", "B3_6", "B3_3", "CONST_R"]
    ],
    requiredConstants: ["CONST_R"],
    hints: [
      "Use PV = nRT for volume, U = (3/2)nRT for internal energy, and V/T = constant for the expansion.",
      "V₁ = nRT₁/P. U = (3/2)nRT₁. V₂ = V₁ × T₂/T₁.",
      "V₁ = 0.50 × 8.31 × 293 / 10⁵ = 0.0122 m³. U = 1.5 × 0.50 × 8.31 × 293 = 1828 J. V₂ = 0.0122 × 323/293 = 0.0134 m³."
    ],
    explanation: "Volume: \\(V_1 = \\frac{nRT_1}{P} = \\frac{0.50 \\times 8.31 \\times 293}{1.0 \\times 10^5} = 0.0122\\) m³. Internal energy: \\(U = \\frac{3}{2}nRT_1 = 1.5 \\times 0.50 \\times 8.31 \\times 293 = 1828\\) J. New volume (Charles's law): \\(V_2 = V_1 \\times \\frac{T_2}{T_1} = 0.0122 \\times \\frac{323}{293} = 0.0134\\) m³."
  },

  // ============================================================
  // TOPIC B: THE PARTICULATE NATURE OF MATTER (continued)
  // ============================================================

  // ===========================================================
  // B4 THERMODYNAMICS (HL) — LEVEL 1 (4 questions: B4_L1_01 to B4_L1_04)
  // ===========================================================

  {
    id: "B4_L1_01",
    text: "A gas absorbs {{800 J}} of heat and does {{500 J}} of {{work}} on its surroundings. Find the {{change in internal energy}} of the gas.",
    topic: "B",
    subtopic: "B4",
    level: 1,
    slhl: "HL",
    tooltips: [
      { phrase: "800 J", tip: "Heat added to the gas: Q = 800 J." },
      { phrase: "500 J", tip: "Work done by the gas: W = 500 J." },
      { phrase: "work", tip: "Work done by the gas on the surroundings during expansion." },
      { phrase: "change in internal energy", tip: "ΔU is found from the first law of thermodynamics: Q = ΔU + W." }
    ],
    knowns: [
      { symbol: "Q", value: "800", unit: "J", description: "heat added to gas" },
      { symbol: "W", value: "500", unit: "J", description: "work done by gas" }
    ],
    unknowns: [
      { symbol: "ΔU", unit: "J", description: "change in internal energy" }
    ],
    acceptedSolutions: [
      ["B4_1"]
    ],
    requiredConstants: [],
    hints: [
      "The first law of thermodynamics relates heat, internal energy change, and work.",
      "Q = ΔU + W. Rearrange for ΔU.",
      "ΔU = Q − W = 800 − 500 = 300 J."
    ],
    explanation: "Using the first law of thermodynamics: \\(Q = \\Delta U + W\\). Rearranging: \\(\\Delta U = Q - W = 800 - 500 = 300\\) J."
  },

  {
    id: "B4_L1_02",
    text: "A gas expands at a {{constant pressure}} of {{2.0 × 10⁵ Pa}}, increasing its volume by {{0.003 m³}}. Calculate the {{work done}} by the gas.",
    topic: "B",
    subtopic: "B4",
    level: 1,
    slhl: "HL",
    tooltips: [
      { phrase: "constant pressure", tip: "An isobaric process — pressure remains unchanged during expansion." },
      { phrase: "2.0 × 10⁵ Pa", tip: "Pressure P = 2.0 × 10⁵ Pa." },
      { phrase: "0.003 m³", tip: "Change in volume ΔV = 0.003 m³." },
      { phrase: "work done", tip: "Work done by a gas at constant pressure: W = PΔV." }
    ],
    knowns: [
      { symbol: "P", value: "2.0 × 10⁵", unit: "Pa", description: "constant pressure" },
      { symbol: "ΔV", value: "0.003", unit: "m³", description: "change in volume" }
    ],
    unknowns: [
      { symbol: "W", unit: "J", description: "work done by gas" }
    ],
    acceptedSolutions: [
      ["B4_2"]
    ],
    requiredConstants: [],
    hints: [
      "At constant pressure, there is a simple formula relating work, pressure, and volume change.",
      "W = PΔV.",
      "W = 2.0 × 10⁵ × 0.003 = 600 J."
    ],
    explanation: "Work done at constant pressure: \\(W = P\\Delta V = 2.0 \\times 10^5 \\times 0.003 = 600\\) J."
  },

  {
    id: "B4_L1_03",
    text: "A {{reversible}} process transfers {{1200 J}} of heat to a reservoir at a temperature of {{400 K}}. Calculate the {{entropy change}} of the reservoir.",
    topic: "B",
    subtopic: "B4",
    level: 1,
    slhl: "HL",
    tooltips: [
      { phrase: "reversible", tip: "A reversible process allows ΔS = ΔQ/T to be used directly." },
      { phrase: "1200 J", tip: "Heat transferred: ΔQ = 1200 J." },
      { phrase: "400 K", tip: "Temperature of the reservoir: T = 400 K." },
      { phrase: "entropy change", tip: "Entropy change ΔS measures the dispersal of energy at a given temperature." }
    ],
    knowns: [
      { symbol: "ΔQ", value: "1200", unit: "J", description: "heat transferred" },
      { symbol: "T", value: "400", unit: "K", description: "temperature" }
    ],
    unknowns: [
      { symbol: "ΔS", unit: "J K⁻¹", description: "entropy change" }
    ],
    acceptedSolutions: [
      ["B4_3"]
    ],
    requiredConstants: [],
    hints: [
      "Entropy change is related to heat transferred and temperature.",
      "ΔS = ΔQ / T.",
      "ΔS = 1200 / 400 = 3.0 J K⁻¹."
    ],
    explanation: "Entropy change: \\(\\Delta S = \\frac{\\Delta Q}{T} = \\frac{1200}{400} = 3.0\\) J K\\(^{-1}\\)."
  },

  {
    id: "B4_L1_04",
    text: "A {{heat engine}} operates between a hot reservoir at {{600 K}} and a cold reservoir at {{300 K}}. Determine the {{maximum possible efficiency}} of this engine.",
    topic: "B",
    subtopic: "B4",
    level: 1,
    slhl: "HL",
    tooltips: [
      { phrase: "heat engine", tip: "A device that converts thermal energy into work by operating between two reservoirs." },
      { phrase: "600 K", tip: "Hot reservoir temperature: Tₕ = 600 K." },
      { phrase: "300 K", tip: "Cold reservoir temperature: T꜀ = 300 K." },
      { phrase: "maximum possible efficiency", tip: "The Carnot efficiency gives the theoretical maximum: η = 1 − T꜀/Tₕ." }
    ],
    knowns: [
      { symbol: "Tₕ", value: "600", unit: "K", description: "hot reservoir temperature" },
      { symbol: "T꜀", value: "300", unit: "K", description: "cold reservoir temperature" }
    ],
    unknowns: [
      { symbol: "η", unit: "", description: "maximum (Carnot) efficiency" }
    ],
    acceptedSolutions: [
      ["B4_7"]
    ],
    requiredConstants: [],
    hints: [
      "The maximum efficiency of any heat engine is given by the Carnot efficiency.",
      "η_Carnot = 1 − T꜀/Tₕ.",
      "η = 1 − 300/600 = 0.50, or 50%."
    ],
    explanation: "Carnot efficiency: \\(\\eta_{\\text{Carnot}} = 1 - \\frac{T_c}{T_h} = 1 - \\frac{300}{600} = 0.50\\), i.e. 50%."
  },

  // ===========================================================
  // B4 THERMODYNAMICS (HL) — LEVEL 2 (8 questions: B4_L2_01 to B4_L2_08)
  // ===========================================================

  {
    id: "B4_L2_01",
    text: "An ideal monatomic gas at {{1.5 × 10⁵ Pa}} expands {{isobarically}} from {{0.010 m³}} to {{0.016 m³}}. Using the {{first law}}, find the {{heat added}} to the gas. (Hint: for a monatomic ideal gas, ΔU = (3/2)nRΔT.)",
    topic: "B",
    subtopic: "B4",
    level: 2,
    slhl: "HL",
    tooltips: [
      { phrase: "1.5 × 10⁵ Pa", tip: "Constant pressure P = 1.5 × 10⁵ Pa." },
      { phrase: "isobarically", tip: "At constant pressure. Both W = PΔV and ideal gas law can be used." },
      { phrase: "0.010 m³", tip: "Initial volume V₁ = 0.010 m³." },
      { phrase: "0.016 m³", tip: "Final volume V₂ = 0.016 m³." },
      { phrase: "first law", tip: "Q = ΔU + W. You need both the work and the change in internal energy." },
      { phrase: "heat added", tip: "Total heat Q entering the gas during the expansion." }
    ],
    knowns: [
      { symbol: "P", value: "1.5 × 10⁵", unit: "Pa", description: "constant pressure" },
      { symbol: "V₁", value: "0.010", unit: "m³", description: "initial volume" },
      { symbol: "V₂", value: "0.016", unit: "m³", description: "final volume" }
    ],
    unknowns: [
      { symbol: "Q", unit: "J", description: "heat added to gas" }
    ],
    acceptedSolutions: [
      ["B4_1", "B4_2", "B3_4", "B3_6", "CONST_R"]
    ],
    requiredConstants: ["CONST_R"],
    hints: [
      "First calculate the work done using W = PΔV. Then find ΔU from the temperature change using the ideal gas law and U = (3/2)nRT.",
      "W = PΔV = 1.5 × 10⁵ × 0.006 = 900 J. For an isobaric process with an ideal gas, ΔU = (3/2)PΔV (since PΔV = nRΔT).",
      "ΔU = (3/2) × 900 = 1350 J. So Q = ΔU + W = 1350 + 900 = 2250 J."
    ],
    explanation: "Work done: \\(W = P\\Delta V = 1.5 \\times 10^5 \\times 0.006 = 900\\) J. Since \\(P\\Delta V = nR\\Delta T\\), we get \\(\\Delta U = \\frac{3}{2}nR\\Delta T = \\frac{3}{2}P\\Delta V = 1350\\) J. First law: \\(Q = \\Delta U + W = 1350 + 900 = 2250\\) J."
  },

  {
    id: "B4_L2_02",
    text: "A Carnot engine operates between {{800 K}} and {{200 K}}. It absorbs {{4000 J}} of heat per cycle from the hot reservoir. Calculate the {{work output}} per cycle and the {{entropy change}} of the hot reservoir per cycle.",
    topic: "B",
    subtopic: "B4",
    level: 2,
    slhl: "HL",
    tooltips: [
      { phrase: "800 K", tip: "Hot reservoir temperature: Tₕ = 800 K." },
      { phrase: "200 K", tip: "Cold reservoir temperature: T꜀ = 200 K." },
      { phrase: "4000 J", tip: "Heat absorbed from hot reservoir: Qₕ = 4000 J." },
      { phrase: "work output", tip: "Useful work done by the engine per cycle: W = ηQₕ." },
      { phrase: "entropy change", tip: "Entropy change of the hot reservoir: ΔS = −Qₕ/Tₕ (negative because heat leaves)." }
    ],
    knowns: [
      { symbol: "Tₕ", value: "800", unit: "K", description: "hot reservoir temperature" },
      { symbol: "T꜀", value: "200", unit: "K", description: "cold reservoir temperature" },
      { symbol: "Qₕ", value: "4000", unit: "J", description: "heat absorbed from hot reservoir" }
    ],
    unknowns: [
      { symbol: "W", unit: "J", description: "work output per cycle" },
      { symbol: "ΔS", unit: "J K⁻¹", description: "entropy change of hot reservoir" }
    ],
    acceptedSolutions: [
      ["B4_7", "B4_6", "B4_3"]
    ],
    requiredConstants: [],
    hints: [
      "First find the Carnot efficiency, then use it to find the work output. Entropy change uses ΔS = ΔQ/T.",
      "η = 1 − T꜀/Tₕ = 1 − 200/800 = 0.75. W = η × Qₕ = 0.75 × 4000.",
      "W = 3000 J. ΔS(hot) = −Qₕ/Tₕ = −4000/800 = −5.0 J K⁻¹."
    ],
    explanation: "Carnot efficiency: \\(\\eta = 1 - \\frac{T_c}{T_h} = 1 - \\frac{200}{800} = 0.75\\). Work: \\(W = \\eta Q_h = 0.75 \\times 4000 = 3000\\) J. Entropy change of hot reservoir: \\(\\Delta S = -\\frac{Q_h}{T_h} = -\\frac{4000}{800} = -5.0\\) J K\\(^{-1}\\)."
  },

  {
    id: "B4_L2_03",
    text: "During an {{isothermal expansion}}, {{2.0 moles}} of an ideal gas at {{400 K}} absorb {{3000 J}} of heat. Using the first law, determine the {{work done}} by the gas and the {{entropy change}} of the gas.",
    topic: "B",
    subtopic: "B4",
    level: 2,
    slhl: "HL",
    tooltips: [
      { phrase: "isothermal expansion", tip: "Temperature stays constant. For an ideal gas, ΔU = 0 in an isothermal process." },
      { phrase: "2.0 moles", tip: "n = 2.0 mol (not needed for this calculation but confirms the gas quantity)." },
      { phrase: "400 K", tip: "Constant temperature T = 400 K." },
      { phrase: "3000 J", tip: "Heat absorbed: Q = 3000 J." },
      { phrase: "work done", tip: "Work done by the gas. Use Q = ΔU + W with ΔU = 0." },
      { phrase: "entropy change", tip: "ΔS = ΔQ/T for this reversible isothermal process." }
    ],
    knowns: [
      { symbol: "T", value: "400", unit: "K", description: "constant temperature" },
      { symbol: "Q", value: "3000", unit: "J", description: "heat absorbed" },
      { symbol: "n", value: "2.0", unit: "mol", description: "number of moles" }
    ],
    unknowns: [
      { symbol: "W", unit: "J", description: "work done by gas" },
      { symbol: "ΔS", unit: "J K⁻¹", description: "entropy change of gas" }
    ],
    acceptedSolutions: [
      ["B4_1", "B4_3"]
    ],
    requiredConstants: [],
    hints: [
      "In an isothermal process for an ideal gas, ΔU = 0. Apply the first law to find W, then use ΔS = Q/T.",
      "Q = ΔU + W becomes Q = W (since ΔU = 0). So W = 3000 J.",
      "W = 3000 J. ΔS = Q/T = 3000/400 = 7.5 J K⁻¹."
    ],
    explanation: "Isothermal process (ideal gas): \\(\\Delta U = 0\\), so from \\(Q = \\Delta U + W\\): \\(W = Q = 3000\\) J. Entropy change: \\(\\Delta S = \\frac{Q}{T} = \\frac{3000}{400} = 7.5\\) J K\\(^{-1}\\)."
  },

  {
    id: "B4_L2_04",
    text: "A real engine absorbs {{5000 J}} from a hot source at {{500 K}} and rejects {{3500 J}} to a cold sink at {{250 K}}. Calculate the {{actual efficiency}} and compare it with the {{Carnot efficiency}}.",
    topic: "B",
    subtopic: "B4",
    level: 2,
    slhl: "HL",
    tooltips: [
      { phrase: "5000 J", tip: "Heat input from the hot source: Qₕ = 5000 J." },
      { phrase: "500 K", tip: "Hot source temperature: Tₕ = 500 K." },
      { phrase: "3500 J", tip: "Heat rejected to the cold sink: Q꜀ = 3500 J." },
      { phrase: "250 K", tip: "Cold sink temperature: T꜀ = 250 K." },
      { phrase: "actual efficiency", tip: "η = useful work / heat input = (Qₕ − Q꜀) / Qₕ." },
      { phrase: "Carnot efficiency", tip: "Maximum theoretical efficiency: η_Carnot = 1 − T꜀/Tₕ." }
    ],
    knowns: [
      { symbol: "Qₕ", value: "5000", unit: "J", description: "heat absorbed from hot source" },
      { symbol: "Q꜀", value: "3500", unit: "J", description: "heat rejected to cold sink" },
      { symbol: "Tₕ", value: "500", unit: "K", description: "hot source temperature" },
      { symbol: "T꜀", value: "250", unit: "K", description: "cold sink temperature" }
    ],
    unknowns: [
      { symbol: "η_actual", unit: "", description: "actual efficiency" },
      { symbol: "η_Carnot", unit: "", description: "Carnot efficiency" }
    ],
    acceptedSolutions: [
      ["B4_6", "B4_7"]
    ],
    requiredConstants: [],
    hints: [
      "Find the work output first: W = Qₕ − Q꜀. Then actual efficiency = W/Qₕ. Compare with Carnot efficiency.",
      "W = 5000 − 3500 = 1500 J. η_actual = 1500/5000 = 0.30. η_Carnot = 1 − 250/500.",
      "η_actual = 30%. η_Carnot = 1 − 0.50 = 0.50, i.e. 50%. The real engine is less efficient than the Carnot limit."
    ],
    explanation: "Work output: \\(W = Q_h - Q_c = 5000 - 3500 = 1500\\) J. Actual efficiency: \\(\\eta = \\frac{W}{Q_h} = \\frac{1500}{5000} = 0.30\\) (30%). Carnot efficiency: \\(\\eta_{\\text{Carnot}} = 1 - \\frac{T_c}{T_h} = 1 - \\frac{250}{500} = 0.50\\) (50%). The real engine operates at 30%, well below the 50% Carnot limit."
  },

  {
    id: "B4_L2_05",
    text: "{{3.0 moles}} of a monatomic ideal gas are compressed {{adiabatically}}. The initial temperature is {{300 K}} and the initial volume is {{0.025 m³}}. The volume is halved. Using \\(PV^{5/3} = \\text{constant}\\) and the {{ideal gas law}}, find the {{final temperature}} and the {{work done}} on the gas.",
    topic: "B",
    subtopic: "B4",
    level: 2,
    slhl: "HL",
    tooltips: [
      { phrase: "3.0 moles", tip: "n = 3.0 mol." },
      { phrase: "adiabatically", tip: "No heat exchange: Q = 0. Temperature changes during compression." },
      { phrase: "ideal gas law", tip: "PV = nRT relates pressure, volume, and temperature." },
      { phrase: "final temperature", tip: "Use the adiabatic relation combined with PV = nRT to find T₂." },
      { phrase: "work done", tip: "For an adiabatic process Q = 0, so from the first law: W = −ΔU." }
    ],
    knowns: [
      { symbol: "n", value: "3.0", unit: "mol", description: "number of moles" },
      { symbol: "T₁", value: "300", unit: "K", description: "initial temperature" },
      { symbol: "V₁", value: "0.025", unit: "m³", description: "initial volume" },
      { symbol: "V₂", value: "0.0125", unit: "m³", description: "final volume (halved)" }
    ],
    unknowns: [
      { symbol: "T₂", unit: "K", description: "final temperature" },
      { symbol: "W", unit: "J", description: "work done on gas" }
    ],
    acceptedSolutions: [
      ["B4_5", "B3_4", "B4_1", "B3_6", "CONST_R"]
    ],
    requiredConstants: ["CONST_R"],
    hints: [
      "For an adiabatic process with an ideal gas, TV^(γ−1) = constant (derived from PV^γ = const and PV = nRT). Here γ = 5/3.",
      "T₁V₁^(2/3) = T₂V₂^(2/3). So T₂ = T₁(V₁/V₂)^(2/3) = 300 × 2^(2/3).",
      "T₂ = 300 × 1.587 = 476 K. ΔU = (3/2)nRΔT = 1.5 × 3.0 × 8.31 × 176 = 6590 J. Since Q = 0, W = −ΔU = −6590 J (work done on gas = +6590 J)."
    ],
    explanation: "From \\(PV^{5/3} = \\text{const}\\) and \\(PV = nRT\\): \\(TV^{2/3} = \\text{const}\\). So \\(T_2 = T_1 \\left(\\frac{V_1}{V_2}\\right)^{2/3} = 300 \\times 2^{2/3} = 476\\) K. Change in internal energy: \\(\\Delta U = \\frac{3}{2}nR\\Delta T = 1.5 \\times 3.0 \\times 8.31 \\times 176 = 6590\\) J. Adiabatic (Q = 0): \\(W = -\\Delta U = -6590\\) J, meaning 6590 J of work is done on the gas."
  },

  {
    id: "B4_L2_06",
    text: "A system has {{6 accessible microstates}}. Using the Boltzmann entropy formula, calculate the {{entropy}} of the system. If the number of microstates {{doubles}}, by how much does the entropy {{increase}}?",
    topic: "B",
    subtopic: "B4",
    level: 2,
    slhl: "HL",
    tooltips: [
      { phrase: "6 accessible microstates", tip: "Ω₁ = 6." },
      { phrase: "entropy", tip: "Statistical entropy: S = kB ln Ω." },
      { phrase: "doubles", tip: "New number of microstates: Ω₂ = 12." },
      { phrase: "increase", tip: "ΔS = S₂ − S₁ = kB ln(Ω₂/Ω₁) = kB ln 2." }
    ],
    knowns: [
      { symbol: "Ω₁", value: "6", unit: "", description: "initial number of microstates" },
      { symbol: "Ω₂", value: "12", unit: "", description: "final number of microstates (doubled)" }
    ],
    unknowns: [
      { symbol: "S₁", unit: "J K⁻¹", description: "initial entropy" },
      { symbol: "ΔS", unit: "J K⁻¹", description: "increase in entropy" }
    ],
    acceptedSolutions: [
      ["B4_4", "CONST_kB"]
    ],
    requiredConstants: ["CONST_kB"],
    hints: [
      "Use the Boltzmann entropy formula S = kB ln Ω for each state.",
      "S₁ = kB ln 6. S₂ = kB ln 12. ΔS = kB ln(12/6) = kB ln 2.",
      "S₁ = 1.38 × 10⁻²³ × ln 6 = 2.47 × 10⁻²³ J K⁻¹. ΔS = 1.38 × 10⁻²³ × ln 2 = 9.57 × 10⁻²⁴ J K⁻¹."
    ],
    explanation: "Boltzmann entropy: \\(S_1 = k_B \\ln \\Omega_1 = 1.38 \\times 10^{-23} \\times \\ln 6 = 2.47 \\times 10^{-23}\\) J K\\(^{-1}\\). With doubled microstates: \\(\\Delta S = k_B \\ln\\frac{\\Omega_2}{\\Omega_1} = k_B \\ln 2 = 1.38 \\times 10^{-23} \\times 0.693 = 9.57 \\times 10^{-24}\\) J K\\(^{-1}\\)."
  },

  {
    id: "B4_L2_07",
    text: "An ideal monatomic gas undergoes an {{isobaric expansion}}, doing {{1200 J}} of work. Calculate the {{heat added}} to the gas and the total {{change in internal energy}}. (For a monatomic ideal gas undergoing isobaric expansion, Q = (5/2)PΔV.)",
    topic: "B",
    subtopic: "B4",
    level: 2,
    slhl: "HL",
    tooltips: [
      { phrase: "isobaric expansion", tip: "Expansion at constant pressure. W = PΔV." },
      { phrase: "1200 J", tip: "Work done by the gas: W = PΔV = 1200 J." },
      { phrase: "heat added", tip: "Q = ΔU + W. For monatomic ideal gas isobaric: ΔU = (3/2)PΔV." },
      { phrase: "change in internal energy", tip: "ΔU = (3/2)nRΔT = (3/2)PΔV for isobaric ideal gas." }
    ],
    knowns: [
      { symbol: "W", value: "1200", unit: "J", description: "work done by gas (PΔV)" }
    ],
    unknowns: [
      { symbol: "Q", unit: "J", description: "heat added" },
      { symbol: "ΔU", unit: "J", description: "change in internal energy" }
    ],
    acceptedSolutions: [
      ["B4_1", "B4_2", "B3_6"]
    ],
    requiredConstants: [],
    hints: [
      "For a monatomic ideal gas at constant pressure: ΔU = (3/2)PΔV = (3/2)W.",
      "ΔU = (3/2) × 1200 = 1800 J.",
      "Q = ΔU + W = 1800 + 1200 = 3000 J."
    ],
    explanation: "Since \\(PΔV = nRΔT\\) for an isobaric process: \\(\\Delta U = \\frac{3}{2}nR\\Delta T = \\frac{3}{2}P\\Delta V = \\frac{3}{2} \\times 1200 = 1800\\) J. First law: \\(Q = \\Delta U + W = 1800 + 1200 = 3000\\) J."
  },

  {
    id: "B4_L2_08",
    text: "If the {{Carnot efficiency}} of a heat engine is doubled by lowering the cold reservoir temperature while keeping the hot reservoir at {{800 K}}, and the original cold reservoir was at {{600 K}}, find the {{new cold reservoir temperature}}. State the {{original and new efficiencies}}.",
    topic: "B",
    subtopic: "B4",
    level: 2,
    slhl: "HL",
    tooltips: [
      { phrase: "Carnot efficiency", tip: "η = 1 − T꜀/Tₕ." },
      { phrase: "800 K", tip: "Hot reservoir temperature: Tₕ = 800 K (unchanged)." },
      { phrase: "600 K", tip: "Original cold reservoir temperature: T꜀₁ = 600 K." },
      { phrase: "new cold reservoir temperature", tip: "The unknown T꜀₂ that makes the new efficiency double the original." },
      { phrase: "original and new efficiencies", tip: "Calculate both η₁ and η₂ = 2η₁." }
    ],
    knowns: [
      { symbol: "Tₕ", value: "800", unit: "K", description: "hot reservoir temperature" },
      { symbol: "T꜀₁", value: "600", unit: "K", description: "original cold reservoir temperature" }
    ],
    unknowns: [
      { symbol: "T꜀₂", unit: "K", description: "new cold reservoir temperature" },
      { symbol: "η₁", unit: "", description: "original Carnot efficiency" },
      { symbol: "η₂", unit: "", description: "new Carnot efficiency" }
    ],
    acceptedSolutions: [
      ["B4_7"]
    ],
    requiredConstants: [],
    hints: [
      "Find the original efficiency first: η₁ = 1 − T꜀₁/Tₕ. Then set η₂ = 2η₁ and solve for T꜀₂.",
      "η₁ = 1 − 600/800 = 0.25. η₂ = 0.50. Use 0.50 = 1 − T꜀₂/800.",
      "T꜀₂/800 = 0.50, so T꜀₂ = 400 K."
    ],
    explanation: "Original: \\(\\eta_1 = 1 - \\frac{600}{800} = 0.25\\) (25%). Doubled: \\(\\eta_2 = 0.50\\). From \\(\\eta_2 = 1 - \\frac{T_{c2}}{T_h}\\): \\(0.50 = 1 - \\frac{T_{c2}}{800}\\), giving \\(T_{c2} = 800 \\times 0.50 = 400\\) K."
  },

  // ===========================================================
  // B5 CURRENT AND CIRCUITS (SL) — LEVEL 1 (6 questions: B5_L1_01 to B5_L1_06)
  // ===========================================================

  {
    id: "B5_L1_01",
    text: "A charge of {{15 C}} flows through a wire in {{5.0 s}}. Calculate the {{current}} in the wire.",
    topic: "B",
    subtopic: "B5",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "15 C", tip: "Charge: Δq = 15 C." },
      { phrase: "5.0 s", tip: "Time: Δt = 5.0 s." },
      { phrase: "current", tip: "Current is the rate of flow of charge: I = Δq/Δt." }
    ],
    knowns: [
      { symbol: "Δq", value: "15", unit: "C", description: "charge" },
      { symbol: "Δt", value: "5.0", unit: "s", description: "time" }
    ],
    unknowns: [
      { symbol: "I", unit: "A", description: "current" }
    ],
    acceptedSolutions: [
      ["B5_1"]
    ],
    requiredConstants: [],
    hints: [
      "Current is defined as charge per unit time.",
      "I = Δq / Δt.",
      "I = 15 / 5.0 = 3.0 A."
    ],
    explanation: "Current: \\(I = \\frac{\\Delta q}{\\Delta t} = \\frac{15}{5.0} = 3.0\\) A."
  },

  {
    id: "B5_L1_02",
    text: "A battery does {{60 J}} of work to move {{5.0 C}} of charge around a circuit. Calculate the {{potential difference}} across the battery.",
    topic: "B",
    subtopic: "B5",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "60 J", tip: "Work done: W = 60 J." },
      { phrase: "5.0 C", tip: "Charge: q = 5.0 C." },
      { phrase: "potential difference", tip: "Potential difference V = W/q, the work done per unit charge." }
    ],
    knowns: [
      { symbol: "W", value: "60", unit: "J", description: "work done" },
      { symbol: "q", value: "5.0", unit: "C", description: "charge" }
    ],
    unknowns: [
      { symbol: "V", unit: "V", description: "potential difference" }
    ],
    acceptedSolutions: [
      ["B5_2"]
    ],
    requiredConstants: [],
    hints: [
      "Potential difference is the energy transferred per unit charge.",
      "V = W / q.",
      "V = 60 / 5.0 = 12 V."
    ],
    explanation: "Potential difference: \\(V = \\frac{W}{q} = \\frac{60}{5.0} = 12\\) V."
  },

  {
    id: "B5_L1_03",
    text: "A resistor has a {{potential difference}} of {{6.0 V}} across it and carries a current of {{0.50 A}}. What is the {{resistance}}?",
    topic: "B",
    subtopic: "B5",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "potential difference", tip: "The voltage across the component." },
      { phrase: "6.0 V", tip: "Voltage: V = 6.0 V." },
      { phrase: "0.50 A", tip: "Current: I = 0.50 A." },
      { phrase: "resistance", tip: "Resistance R = V/I (Ohm's law)." }
    ],
    knowns: [
      { symbol: "V", value: "6.0", unit: "V", description: "potential difference" },
      { symbol: "I", value: "0.50", unit: "A", description: "current" }
    ],
    unknowns: [
      { symbol: "R", unit: "Ω", description: "resistance" }
    ],
    acceptedSolutions: [
      ["B5_3"]
    ],
    requiredConstants: [],
    hints: [
      "Use Ohm's law to relate voltage, current, and resistance.",
      "R = V / I.",
      "R = 6.0 / 0.50 = 12 Ω."
    ],
    explanation: "Ohm's law: \\(R = \\frac{V}{I} = \\frac{6.0}{0.50} = 12\\) Ω."
  },

  {
    id: "B5_L1_04",
    text: "A wire of length {{2.0 m}} and {{cross-sectional area}} {{1.0 × 10⁻⁶ m²}} has a resistance of {{3.4 Ω}}. Calculate the {{resistivity}} of the material.",
    topic: "B",
    subtopic: "B5",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "2.0 m", tip: "Length of wire: L = 2.0 m." },
      { phrase: "cross-sectional area", tip: "The area of a cross-section of the wire, A." },
      { phrase: "1.0 × 10⁻⁶ m²", tip: "A = 1.0 × 10⁻⁶ m²." },
      { phrase: "3.4 Ω", tip: "Resistance R = 3.4 Ω." },
      { phrase: "resistivity", tip: "A material property: ρ = RA/L." }
    ],
    knowns: [
      { symbol: "R", value: "3.4", unit: "Ω", description: "resistance" },
      { symbol: "A", value: "1.0 × 10⁻⁶", unit: "m²", description: "cross-sectional area" },
      { symbol: "L", value: "2.0", unit: "m", description: "length" }
    ],
    unknowns: [
      { symbol: "ρ", unit: "Ω m", description: "resistivity" }
    ],
    acceptedSolutions: [
      ["B5_4"]
    ],
    requiredConstants: [],
    hints: [
      "Resistivity relates resistance to the geometry of the conductor.",
      "ρ = RA / L.",
      "ρ = 3.4 × 1.0 × 10⁻⁶ / 2.0 = 1.7 × 10⁻⁶ Ω m."
    ],
    explanation: "Resistivity: \\(\\rho = \\frac{RA}{L} = \\frac{3.4 \\times 1.0 \\times 10^{-6}}{2.0} = 1.7 \\times 10^{-6}\\) Ω m."
  },

  {
    id: "B5_L1_05",
    text: "A lamp is rated at {{12 V}}, {{36 W}}. If the lamp is operating at its rated values, what is the {{current}} through it?",
    topic: "B",
    subtopic: "B5",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "12 V", tip: "Operating voltage: V = 12 V." },
      { phrase: "36 W", tip: "Power dissipated: P = 36 W." },
      { phrase: "current", tip: "Use P = IV to find the current." }
    ],
    knowns: [
      { symbol: "V", value: "12", unit: "V", description: "potential difference" },
      { symbol: "P", value: "36", unit: "W", description: "power" }
    ],
    unknowns: [
      { symbol: "I", unit: "A", description: "current" }
    ],
    acceptedSolutions: [
      ["B5_5"]
    ],
    requiredConstants: [],
    hints: [
      "Power, voltage, and current are related by a simple formula.",
      "P = IV. Rearrange for I.",
      "I = P / V = 36 / 12 = 3.0 A."
    ],
    explanation: "From \\(P = IV\\): \\(I = \\frac{P}{V} = \\frac{36}{12} = 3.0\\) A."
  },

  {
    id: "B5_L1_06",
    text: "A cell has an {{EMF}} of {{6.0 V}} and an {{internal resistance}} of {{0.50 Ω}}. It is connected to an external resistor of {{5.5 Ω}}. Find the {{current}} in the circuit.",
    topic: "B",
    subtopic: "B5",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "EMF", tip: "Electromotive force: the total energy per unit charge provided by the cell." },
      { phrase: "6.0 V", tip: "ε = 6.0 V." },
      { phrase: "internal resistance", tip: "The resistance inside the cell itself: r = 0.50 Ω." },
      { phrase: "5.5 Ω", tip: "External resistance: R = 5.5 Ω." },
      { phrase: "current", tip: "Use the EMF equation: ε = I(R + r)." }
    ],
    knowns: [
      { symbol: "ε", value: "6.0", unit: "V", description: "EMF of cell" },
      { symbol: "r", value: "0.50", unit: "Ω", description: "internal resistance" },
      { symbol: "R", value: "5.5", unit: "Ω", description: "external resistance" }
    ],
    unknowns: [
      { symbol: "I", unit: "A", description: "current" }
    ],
    acceptedSolutions: [
      ["B5_8"]
    ],
    requiredConstants: [],
    hints: [
      "The EMF equation relates EMF to the total resistance in the circuit.",
      "ε = I(R + r). Rearrange for I.",
      "I = ε / (R + r) = 6.0 / (5.5 + 0.50) = 6.0 / 6.0 = 1.0 A."
    ],
    explanation: "EMF equation: \\(\\varepsilon = I(R + r)\\). Rearranging: \\(I = \\frac{\\varepsilon}{R + r} = \\frac{6.0}{5.5 + 0.50} = \\frac{6.0}{6.0} = 1.0\\) A."
  },

  // ===========================================================
  // B5 CURRENT AND CIRCUITS (SL) — LEVEL 2 (12 questions: B5_L2_01 to B5_L2_12)
  // ===========================================================

  {
    id: "B5_L2_01",
    text: "Two resistors, {{4.0 Ω}} and {{6.0 Ω}}, are connected in {{series}} to a {{20 V}} power supply. Calculate the {{total resistance}}, the {{current}} in the circuit, and the {{voltage}} across the 6.0 Ω resistor.",
    topic: "B",
    subtopic: "B5",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "4.0 Ω", tip: "R₁ = 4.0 Ω." },
      { phrase: "6.0 Ω", tip: "R₂ = 6.0 Ω." },
      { phrase: "series", tip: "In series, resistances add: Rs = R₁ + R₂." },
      { phrase: "20 V", tip: "Supply voltage V = 20 V." },
      { phrase: "total resistance", tip: "For series: Rs = R₁ + R₂." },
      { phrase: "current", tip: "Use Ohm's law: I = V/Rs." },
      { phrase: "voltage", tip: "Voltage across a resistor: V = IR." }
    ],
    knowns: [
      { symbol: "R₁", value: "4.0", unit: "Ω", description: "first resistor" },
      { symbol: "R₂", value: "6.0", unit: "Ω", description: "second resistor" },
      { symbol: "V", value: "20", unit: "V", description: "supply voltage" }
    ],
    unknowns: [
      { symbol: "Rs", unit: "Ω", description: "total resistance" },
      { symbol: "I", unit: "A", description: "current" },
      { symbol: "V₂", unit: "V", description: "voltage across 6.0 Ω resistor" }
    ],
    acceptedSolutions: [
      ["B5_6", "B5_3"]
    ],
    requiredConstants: [],
    hints: [
      "In series: total resistance = sum of resistances. Then use Ohm's law for current and voltage.",
      "Rs = 4.0 + 6.0 = 10 Ω. I = V/Rs = 20/10 = 2.0 A.",
      "V₂ = IR₂ = 2.0 × 6.0 = 12 V."
    ],
    explanation: "Series: \\(R_s = R_1 + R_2 = 4.0 + 6.0 = 10\\) Ω. Current: \\(I = \\frac{V}{R_s} = \\frac{20}{10} = 2.0\\) A. Voltage across 6.0 Ω: \\(V_2 = IR_2 = 2.0 \\times 6.0 = 12\\) V."
  },

  {
    id: "B5_L2_02",
    text: "Two resistors of {{6.0 Ω}} and {{12 Ω}} are connected in {{parallel}}. This combination is connected to a {{12 V}} battery. Find the {{combined resistance}} and the {{total current}} drawn from the battery.",
    topic: "B",
    subtopic: "B5",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "6.0 Ω", tip: "R₁ = 6.0 Ω." },
      { phrase: "12 Ω", tip: "R₂ = 12 Ω." },
      { phrase: "parallel", tip: "In parallel: 1/Rp = 1/R₁ + 1/R₂." },
      { phrase: "12 V", tip: "Battery voltage V = 12 V." },
      { phrase: "combined resistance", tip: "Use the parallel resistance formula." },
      { phrase: "total current", tip: "I = V / Rp." }
    ],
    knowns: [
      { symbol: "R₁", value: "6.0", unit: "Ω", description: "first resistor" },
      { symbol: "R₂", value: "12", unit: "Ω", description: "second resistor" },
      { symbol: "V", value: "12", unit: "V", description: "battery voltage" }
    ],
    unknowns: [
      { symbol: "Rp", unit: "Ω", description: "combined parallel resistance" },
      { symbol: "I", unit: "A", description: "total current" }
    ],
    acceptedSolutions: [
      ["B5_7", "B5_3"]
    ],
    requiredConstants: [],
    hints: [
      "Use the parallel resistance formula to combine the resistors, then Ohm's law for the total current.",
      "1/Rp = 1/6.0 + 1/12 = 2/12 + 1/12 = 3/12. Rp = 4.0 Ω.",
      "I = V/Rp = 12/4.0 = 3.0 A."
    ],
    explanation: "Parallel: \\(\\frac{1}{R_p} = \\frac{1}{6.0} + \\frac{1}{12} = \\frac{3}{12}\\), so \\(R_p = 4.0\\) Ω. Total current: \\(I = \\frac{V}{R_p} = \\frac{12}{4.0} = 3.0\\) A."
  },

  {
    id: "B5_L2_03",
    text: "A cell of {{EMF}} {{9.0 V}} and {{internal resistance}} {{1.0 Ω}} drives a current through an external resistance of {{4.0 Ω}}. Calculate the {{current}}, the {{terminal voltage}}, and the {{power dissipated}} in the external resistor.",
    topic: "B",
    subtopic: "B5",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "EMF", tip: "The total energy per unit charge from the cell: ε = 9.0 V." },
      { phrase: "9.0 V", tip: "ε = 9.0 V." },
      { phrase: "internal resistance", tip: "r = 1.0 Ω, the resistance within the cell." },
      { phrase: "4.0 Ω", tip: "External resistance R = 4.0 Ω." },
      { phrase: "current", tip: "Use ε = I(R + r)." },
      { phrase: "terminal voltage", tip: "The voltage across the external resistor: V = IR (or V = ε − Ir)." },
      { phrase: "power dissipated", tip: "P = I²R or P = IV." }
    ],
    knowns: [
      { symbol: "ε", value: "9.0", unit: "V", description: "EMF" },
      { symbol: "r", value: "1.0", unit: "Ω", description: "internal resistance" },
      { symbol: "R", value: "4.0", unit: "Ω", description: "external resistance" }
    ],
    unknowns: [
      { symbol: "I", unit: "A", description: "current" },
      { symbol: "V", unit: "V", description: "terminal voltage" },
      { symbol: "P", unit: "W", description: "power dissipated in external resistor" }
    ],
    acceptedSolutions: [
      ["B5_8", "B5_3", "B5_5"]
    ],
    requiredConstants: [],
    hints: [
      "Use the EMF equation to find I, then find the terminal voltage and power.",
      "I = ε/(R + r) = 9.0/(4.0 + 1.0) = 1.8 A. V = IR = 1.8 × 4.0 = 7.2 V.",
      "P = I²R = 1.8² × 4.0 = 13.0 W (or P = IV = 1.8 × 7.2 = 13.0 W)."
    ],
    explanation: "Current: \\(I = \\frac{\\varepsilon}{R + r} = \\frac{9.0}{5.0} = 1.8\\) A. Terminal voltage: \\(V = IR = 1.8 \\times 4.0 = 7.2\\) V. Power: \\(P = I^2R = 1.8^2 \\times 4.0 = 13.0\\) W."
  },

  {
    id: "B5_L2_04",
    text: "A {{nichrome wire}} of resistivity {{1.1 × 10⁻⁶ Ω m}}, length {{0.80 m}}, and {{cross-sectional area}} {{5.0 × 10⁻⁷ m²}} carries a current of {{2.0 A}}. Calculate the {{resistance}} of the wire and the {{power dissipated}} in it.",
    topic: "B",
    subtopic: "B5",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "nichrome wire", tip: "A resistive alloy commonly used in heating elements." },
      { phrase: "1.1 × 10⁻⁶ Ω m", tip: "Resistivity: ρ = 1.1 × 10⁻⁶ Ω m." },
      { phrase: "0.80 m", tip: "Length: L = 0.80 m." },
      { phrase: "cross-sectional area", tip: "Area of the wire's cross-section." },
      { phrase: "5.0 × 10⁻⁷ m²", tip: "A = 5.0 × 10⁻⁷ m²." },
      { phrase: "2.0 A", tip: "Current: I = 2.0 A." },
      { phrase: "resistance", tip: "R = ρL/A." },
      { phrase: "power dissipated", tip: "P = I²R." }
    ],
    knowns: [
      { symbol: "ρ", value: "1.1 × 10⁻⁶", unit: "Ω m", description: "resistivity" },
      { symbol: "L", value: "0.80", unit: "m", description: "length" },
      { symbol: "A", value: "5.0 × 10⁻⁷", unit: "m²", description: "cross-sectional area" },
      { symbol: "I", value: "2.0", unit: "A", description: "current" }
    ],
    unknowns: [
      { symbol: "R", unit: "Ω", description: "resistance" },
      { symbol: "P", unit: "W", description: "power dissipated" }
    ],
    acceptedSolutions: [
      ["B5_4", "B5_5"]
    ],
    requiredConstants: [],
    hints: [
      "First find the resistance from the resistivity equation, then calculate the power.",
      "R = ρL/A = (1.1 × 10⁻⁶ × 0.80) / (5.0 × 10⁻⁷) = 1.76 Ω.",
      "P = I²R = 2.0² × 1.76 = 7.0 W."
    ],
    explanation: "Resistance: \\(R = \\frac{\\rho L}{A} = \\frac{1.1 \\times 10^{-6} \\times 0.80}{5.0 \\times 10^{-7}} = 1.76\\) Ω ≈ 1.8 Ω. Power: \\(P = I^2R = 4.0 \\times 1.76 = 7.0\\) W."
  },

  {
    id: "B5_L2_05",
    text: "A current of {{3.0 A}} flows through a heating element for {{120 s}}. The {{potential difference}} across the element is {{10 V}}. Calculate the {{charge}} that flows and the {{total energy}} transferred.",
    topic: "B",
    subtopic: "B5",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "3.0 A", tip: "Current I = 3.0 A." },
      { phrase: "120 s", tip: "Time Δt = 120 s." },
      { phrase: "potential difference", tip: "Voltage across the element." },
      { phrase: "10 V", tip: "V = 10 V." },
      { phrase: "charge", tip: "Charge = current × time: Δq = IΔt." },
      { phrase: "total energy", tip: "Energy = work = charge × voltage: W = qV." }
    ],
    knowns: [
      { symbol: "I", value: "3.0", unit: "A", description: "current" },
      { symbol: "Δt", value: "120", unit: "s", description: "time" },
      { symbol: "V", value: "10", unit: "V", description: "potential difference" }
    ],
    unknowns: [
      { symbol: "Δq", unit: "C", description: "charge" },
      { symbol: "W", unit: "J", description: "total energy transferred" }
    ],
    acceptedSolutions: [
      ["B5_1", "B5_2"]
    ],
    requiredConstants: [],
    hints: [
      "First find the charge from current and time, then use V = W/q to find the energy.",
      "Δq = IΔt = 3.0 × 120 = 360 C.",
      "W = qV = 360 × 10 = 3600 J."
    ],
    explanation: "Charge: \\(\\Delta q = I\\Delta t = 3.0 \\times 120 = 360\\) C. Energy: \\(W = qV = 360 \\times 10 = 3600\\) J."
  },

  {
    id: "B5_L2_06",
    text: "If the {{length}} of a wire is doubled and its {{cross-sectional area}} is halved, by what factor does the {{resistance}} change? If the same {{potential difference}} is applied, how does the {{power dissipated}} change?",
    topic: "B",
    subtopic: "B5",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "length", tip: "Resistance depends on length: R ∝ L." },
      { phrase: "cross-sectional area", tip: "Resistance depends on area: R ∝ 1/A." },
      { phrase: "resistance", tip: "ρ = RA/L, so R = ρL/A." },
      { phrase: "potential difference", tip: "V is kept the same." },
      { phrase: "power dissipated", tip: "P = V²/R — how does P change when R changes?" }
    ],
    knowns: [
      { symbol: "L₂", value: "2L₁", unit: "", description: "length doubled" },
      { symbol: "A₂", value: "A₁/2", unit: "", description: "area halved" }
    ],
    unknowns: [
      { symbol: "R₂/R₁", unit: "", description: "factor change in resistance" },
      { symbol: "P₂/P₁", unit: "", description: "factor change in power" }
    ],
    acceptedSolutions: [
      ["B5_4", "B5_5"]
    ],
    requiredConstants: [],
    hints: [
      "Write R = ρL/A for both the original and new wire. Form the ratio R₂/R₁.",
      "R₂/R₁ = (2L)/(A/2) ÷ (L/A) = 4. The resistance increases by a factor of 4.",
      "P = V²/R, so if R quadruples and V is constant, P₂ = P₁/4. Power decreases by a factor of 4."
    ],
    explanation: "\\(R = \\frac{\\rho L}{A}\\). New wire: \\(R_2 = \\frac{\\rho (2L)}{A/2} = 4\\frac{\\rho L}{A} = 4R_1\\). Resistance increases by factor 4. Power: \\(P = \\frac{V^2}{R}\\), so \\(P_2 = \\frac{V^2}{4R_1} = \\frac{P_1}{4}\\). Power decreases by factor 4."
  },

  {
    id: "B5_L2_07",
    text: "A cell of {{EMF}} {{12 V}} and {{internal resistance}} {{2.0 Ω}} is connected to two resistors in {{parallel}}: {{6.0 Ω}} and {{3.0 Ω}}. Find the {{total current}} drawn from the cell.",
    topic: "B",
    subtopic: "B5",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "EMF", tip: "ε = 12 V." },
      { phrase: "12 V", tip: "EMF of the cell." },
      { phrase: "internal resistance", tip: "r = 2.0 Ω." },
      { phrase: "parallel", tip: "The two external resistors are in parallel: 1/Rp = 1/R₁ + 1/R₂." },
      { phrase: "6.0 Ω", tip: "R₁ = 6.0 Ω." },
      { phrase: "3.0 Ω", tip: "R₂ = 3.0 Ω." },
      { phrase: "total current", tip: "Use ε = I(Rp + r) after finding Rp." }
    ],
    knowns: [
      { symbol: "ε", value: "12", unit: "V", description: "EMF" },
      { symbol: "r", value: "2.0", unit: "Ω", description: "internal resistance" },
      { symbol: "R₁", value: "6.0", unit: "Ω", description: "first resistor" },
      { symbol: "R₂", value: "3.0", unit: "Ω", description: "second resistor" }
    ],
    unknowns: [
      { symbol: "I", unit: "A", description: "total current from cell" }
    ],
    acceptedSolutions: [
      ["B5_7", "B5_8"]
    ],
    requiredConstants: [],
    hints: [
      "First combine the parallel resistors, then use the EMF equation with the total circuit resistance.",
      "1/Rp = 1/6.0 + 1/3.0 = 1/6 + 2/6 = 3/6 = 0.50. Rp = 2.0 Ω.",
      "ε = I(Rp + r) → I = 12 / (2.0 + 2.0) = 12 / 4.0 = 3.0 A."
    ],
    explanation: "Parallel combination: \\(\\frac{1}{R_p} = \\frac{1}{6.0} + \\frac{1}{3.0} = \\frac{1}{2.0}\\), so \\(R_p = 2.0\\) Ω. EMF equation: \\(I = \\frac{\\varepsilon}{R_p + r} = \\frac{12}{2.0 + 2.0} = 3.0\\) A."
  },

  {
    id: "B5_L2_08",
    text: "A {{50 W}} electric heater is immersed in {{0.200 kg}} of water at {{20 °C}}. Assuming all electrical energy heats the water, how long does it take to raise the temperature to {{40 °C}}? (Specific heat capacity of water c = 4200 J kg⁻¹ K⁻¹.)",
    topic: "B",
    subtopic: "B5",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "50 W", tip: "Electrical power P = 50 W." },
      { phrase: "0.200 kg", tip: "Mass of water m = 0.200 kg." },
      { phrase: "20 °C", tip: "Initial temperature." },
      { phrase: "40 °C", tip: "Final temperature. ΔT = 20 K." }
    ],
    knowns: [
      { symbol: "P", value: "50", unit: "W", description: "heater power" },
      { symbol: "m", value: "0.200", unit: "kg", description: "mass of water" },
      { symbol: "ΔT", value: "20", unit: "K", description: "temperature change" },
      { symbol: "c", value: "4200", unit: "J kg⁻¹ K⁻¹", description: "specific heat capacity of water" }
    ],
    unknowns: [
      { symbol: "t", unit: "s", description: "time" }
    ],
    acceptedSolutions: [
      ["B5_5", "B1_3"]
    ],
    requiredConstants: [],
    hints: [
      "Equate the electrical energy (Pt) to the thermal energy gained by the water (mcΔT).",
      "Pt = mcΔT. Rearrange for t.",
      "t = mcΔT / P = 0.200 × 4200 × 20 / 50 = 336 s."
    ],
    explanation: "Electrical energy equals thermal energy: \\(Pt = mc\\Delta T\\). Rearranging: \\(t = \\frac{mc\\Delta T}{P} = \\frac{0.200 \\times 4200 \\times 20}{50} = 336\\) s ≈ 5.6 minutes."
  },

  {
    id: "B5_L2_09",
    text: "Two identical resistors are first connected in {{series}} and then in {{parallel}} across the same battery. What is the {{ratio}} of the total power dissipated in the parallel arrangement to that in the series arrangement?",
    topic: "B",
    subtopic: "B5",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "series", tip: "In series, total resistance = 2R for two identical resistors." },
      { phrase: "parallel", tip: "In parallel, total resistance = R/2 for two identical resistors." },
      { phrase: "ratio", tip: "Use P = V²/R_total for each configuration and find the ratio." }
    ],
    knowns: [
      { symbol: "R_series", value: "2R", unit: "", description: "series combination (two identical resistors)" },
      { symbol: "R_parallel", value: "R/2", unit: "", description: "parallel combination (two identical resistors)" }
    ],
    unknowns: [
      { symbol: "P_parallel/P_series", unit: "", description: "ratio of power dissipated" }
    ],
    acceptedSolutions: [
      ["B5_6", "B5_7", "B5_5"]
    ],
    requiredConstants: [],
    hints: [
      "Use P = V²/R_total for each configuration. The battery voltage V is the same in both cases.",
      "Series: R_s = 2R, so P_s = V²/(2R). Parallel: R_p = R/2, so P_p = V²/(R/2) = 2V²/R.",
      "P_p / P_s = (2V²/R) / (V²/(2R)) = (2V²/R) × (2R/V²) = 4. The parallel arrangement dissipates 4 times as much power."
    ],
    explanation: "Series: \\(R_s = 2R\\), \\(P_s = \\frac{V^2}{2R}\\). Parallel: \\(R_p = \\frac{R}{2}\\), \\(P_p = \\frac{V^2}{R/2} = \\frac{2V^2}{R}\\). Ratio: \\(\\frac{P_p}{P_s} = \\frac{2V^2/R}{V^2/(2R)} = 4\\). The parallel arrangement dissipates 4 times the power."
  },

  {
    id: "B5_L2_10",
    text: "A potential divider consists of two resistors, {{100 Ω}} and {{300 Ω}}, connected in {{series}} across a {{12 V}} supply. Calculate the {{output voltage}} across the {{300 Ω}} resistor and the {{current}} through the circuit.",
    topic: "B",
    subtopic: "B5",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "100 Ω", tip: "R₁ = 100 Ω." },
      { phrase: "300 Ω", tip: "R₂ = 300 Ω." },
      { phrase: "series", tip: "In series, total R = R₁ + R₂ and the same current flows through both." },
      { phrase: "12 V", tip: "Supply voltage V = 12 V." },
      { phrase: "output voltage", tip: "The voltage across R₂ in a potential divider: V₂ = V × R₂/(R₁ + R₂)." },
      { phrase: "300 Ω", tip: "The resistor across which the output voltage is taken." },
      { phrase: "current", tip: "I = V/(R₁ + R₂)." }
    ],
    knowns: [
      { symbol: "R₁", value: "100", unit: "Ω", description: "first resistor" },
      { symbol: "R₂", value: "300", unit: "Ω", description: "second resistor" },
      { symbol: "V", value: "12", unit: "V", description: "supply voltage" }
    ],
    unknowns: [
      { symbol: "V₂", unit: "V", description: "output voltage across 300 Ω" },
      { symbol: "I", unit: "A", description: "current" }
    ],
    acceptedSolutions: [
      ["B5_6", "B5_3"]
    ],
    requiredConstants: [],
    hints: [
      "A potential divider shares voltage in proportion to resistance. Find total R first, then the current, then V₂.",
      "R_total = 100 + 300 = 400 Ω. I = 12/400 = 0.030 A.",
      "V₂ = IR₂ = 0.030 × 300 = 9.0 V."
    ],
    explanation: "Total resistance: \\(R_s = 100 + 300 = 400\\) Ω. Current: \\(I = \\frac{V}{R_s} = \\frac{12}{400} = 0.030\\) A. Output voltage: \\(V_2 = IR_2 = 0.030 \\times 300 = 9.0\\) V."
  },

  {
    id: "B5_L2_11",
    text: "A cell of {{EMF}} {{6.0 V}} and {{internal resistance}} {{0.40 Ω}} is connected to two {{10 Ω}} resistors in {{series}}. Calculate the {{power delivered}} to the external circuit and the {{power wasted}} in the internal resistance.",
    topic: "B",
    subtopic: "B5",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "EMF", tip: "ε = 6.0 V." },
      { phrase: "6.0 V", tip: "EMF of cell." },
      { phrase: "internal resistance", tip: "r = 0.40 Ω." },
      { phrase: "10 Ω", tip: "Each external resistor: R = 10 Ω." },
      { phrase: "series", tip: "External resistance total = R₁ + R₂ = 20 Ω." },
      { phrase: "power delivered", tip: "Power to external circuit: P_ext = I²R_ext." },
      { phrase: "power wasted", tip: "Power lost in internal resistance: P_int = I²r." }
    ],
    knowns: [
      { symbol: "ε", value: "6.0", unit: "V", description: "EMF" },
      { symbol: "r", value: "0.40", unit: "Ω", description: "internal resistance" },
      { symbol: "R₁", value: "10", unit: "Ω", description: "first external resistor" },
      { symbol: "R₂", value: "10", unit: "Ω", description: "second external resistor" }
    ],
    unknowns: [
      { symbol: "P_ext", unit: "W", description: "power delivered to external circuit" },
      { symbol: "P_int", unit: "W", description: "power wasted in internal resistance" }
    ],
    acceptedSolutions: [
      ["B5_6", "B5_8", "B5_5"]
    ],
    requiredConstants: [],
    hints: [
      "Find R_ext = R₁ + R₂, then current from the EMF equation, then power in each part.",
      "R_ext = 20 Ω. I = ε/(R_ext + r) = 6.0/20.4 ≈ 0.294 A.",
      "P_ext = I²R_ext = 0.294² × 20 = 1.73 W. P_int = I²r = 0.294² × 0.40 = 0.035 W."
    ],
    explanation: "External resistance: \\(R_{ext} = 10 + 10 = 20\\) Ω. Current: \\(I = \\frac{\\varepsilon}{R_{ext} + r} = \\frac{6.0}{20.4} = 0.294\\) A. Power to external circuit: \\(P_{ext} = I^2 R_{ext} = 0.294^2 \\times 20 = 1.73\\) W. Power wasted: \\(P_{int} = I^2 r = 0.294^2 \\times 0.40 = 0.035\\) W."
  },

  {
    id: "B5_L2_12",
    text: "If the {{current}} through a resistor is tripled while the {{resistance}} remains constant, by what factor does the {{power dissipated}} change? If instead the {{voltage}} across the resistor is tripled (at the same resistance), by what factor does the power change?",
    topic: "B",
    subtopic: "B5",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "current", tip: "Current I through the resistor." },
      { phrase: "resistance", tip: "R is held constant." },
      { phrase: "power dissipated", tip: "P = I²R or P = V²/R." },
      { phrase: "voltage", tip: "Potential difference V across the resistor." }
    ],
    knowns: [
      { symbol: "I₂", value: "3I₁", unit: "", description: "current tripled" },
      { symbol: "V₂", value: "3V₁", unit: "", description: "voltage tripled (separate scenario)" }
    ],
    unknowns: [
      { symbol: "P₂/P₁ (current tripled)", unit: "", description: "power factor (current tripled)" },
      { symbol: "P₂/P₁ (voltage tripled)", unit: "", description: "power factor (voltage tripled)" }
    ],
    acceptedSolutions: [
      ["B5_5"]
    ],
    requiredConstants: [],
    hints: [
      "Use P = I²R for the first scenario and P = V²/R for the second.",
      "If I triples: P₂ = (3I)²R = 9I²R = 9P₁. Power increases by factor 9.",
      "If V triples: P₂ = (3V)²/R = 9V²/R = 9P₁. Power also increases by factor 9."
    ],
    explanation: "Current tripled: \\(P = I^2R\\), so \\(P_2 = (3I)^2R = 9I^2R = 9P_1\\). Factor = 9. Voltage tripled: \\(P = \\frac{V^2}{R}\\), so \\(P_2 = \\frac{(3V)^2}{R} = \\frac{9V^2}{R} = 9P_1\\). Factor = 9. In both cases power increases by a factor of 9."
  },

  // ============================================================
  // BATCH 5: TOPIC C — WAVES (30 questions)
  // C1 SHM, C2 Wave Model, C3 Wave Phenomena, C5 Doppler Effect
  // ============================================================

  // ===========================================================
  // C1 SHM (SL) — LEVEL 1 (3 questions: C1_L1_01 to C1_L1_03)
  // ===========================================================

  {
    id: "C1_L1_01",
    text: "A {{mass-spring system}} oscillates with a {{period}} of {{2.0 s}}. Determine the {{frequency}} of the oscillation.",
    topic: "C",
    subtopic: "C1",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "mass-spring system", tip: "A mass attached to a spring undergoing simple harmonic motion." },
      { phrase: "period", tip: "The time T for one complete oscillation." },
      { phrase: "2.0 s", tip: "T = 2.0 s." },
      { phrase: "frequency", tip: "The number of oscillations per second, f, measured in Hz." }
    ],
    knowns: [
      { symbol: "T", value: "2.0", unit: "s", description: "period" }
    ],
    unknowns: [
      { symbol: "f", unit: "Hz", description: "frequency" }
    ],
    acceptedSolutions: [
      ["C1_2"]
    ],
    requiredConstants: [],
    hints: [
      "You know the period. How is frequency related to period?",
      "Recall that T = 1/f, so f = 1/T.",
      "f = 1/2.0 = 0.50 Hz."
    ],
    explanation: "Using \\(T = \\frac{1}{f}\\), we rearrange to get \\(f = \\frac{1}{T} = \\frac{1}{2.0} = 0.50\\) Hz."
  },

  {
    id: "C1_L1_02",
    text: "A {{simple pendulum}} of length {{0.80 m}} swings on Earth. Calculate the {{period}} of the pendulum.",
    topic: "C",
    subtopic: "C1",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "simple pendulum", tip: "An idealised pendulum: a point mass on a massless, inextensible string." },
      { phrase: "0.80 m", tip: "The length of the pendulum, l = 0.80 m." },
      { phrase: "period", tip: "The time T for one complete swing back and forth." }
    ],
    knowns: [
      { symbol: "l", value: "0.80", unit: "m", description: "pendulum length" },
      { symbol: "g", value: "9.8", unit: "m s⁻²", description: "gravitational field strength" }
    ],
    unknowns: [
      { symbol: "T", unit: "s", description: "period" }
    ],
    acceptedSolutions: [
      ["C1_4", "CONST_g"]
    ],
    requiredConstants: ["CONST_g"],
    hints: [
      "Which formula gives the period of a simple pendulum?",
      "T = 2π√(l/g). You know l and g.",
      "T = 2π√(0.80/9.8) = 2π√(0.0816) = 2π × 0.286 ≈ 1.8 s."
    ],
    explanation: "Using \\(T = 2\\pi\\sqrt{\\frac{l}{g}} = 2\\pi\\sqrt{\\frac{0.80}{9.8}} = 2\\pi\\sqrt{0.0816} = 2\\pi \\times 0.286 \\approx 1.8\\) s."
  },

  {
    id: "C1_L1_03",
    text: "A {{mass of 0.50 kg}} is attached to a spring with {{spring constant}} {{k = 200 N m⁻¹}}. Calculate the {{period}} of oscillation.",
    topic: "C",
    subtopic: "C1",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "mass of 0.50 kg", tip: "m = 0.50 kg, the mass on the spring." },
      { phrase: "spring constant", tip: "The stiffness of the spring, k, in N m⁻¹." },
      { phrase: "k = 200 N m⁻¹", tip: "k = 200 N m⁻¹." },
      { phrase: "period", tip: "The time for one complete oscillation." }
    ],
    knowns: [
      { symbol: "m", value: "0.50", unit: "kg", description: "mass" },
      { symbol: "k", value: "200", unit: "N m⁻¹", description: "spring constant" }
    ],
    unknowns: [
      { symbol: "T", unit: "s", description: "period" }
    ],
    acceptedSolutions: [
      ["C1_3"]
    ],
    requiredConstants: [],
    hints: [
      "Which formula relates the period of a mass-spring system to m and k?",
      "Use T = 2π√(m/k).",
      "T = 2π√(0.50/200) = 2π√(0.0025) = 2π × 0.050 ≈ 0.31 s."
    ],
    explanation: "Using \\(T = 2\\pi\\sqrt{\\frac{m}{k}} = 2\\pi\\sqrt{\\frac{0.50}{200}} = 2\\pi\\sqrt{0.0025} = 2\\pi \\times 0.050 \\approx 0.31\\) s."
  },

  // ===========================================================
  // C1 SHM (SL) — LEVEL 2 (5 questions: C1_L2_01 to C1_L2_05)
  // ===========================================================

  {
    id: "C1_L2_01",
    text: "A {{mass-spring system}} oscillates with {{period}} {{0.40 s}}. The {{amplitude}} is {{0.060 m}}. A force of {{12 N}} is needed to stretch the spring by the amplitude distance. Determine the {{mass}} attached to the spring.",
    topic: "C",
    subtopic: "C1",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "mass-spring system", tip: "A mass on a spring undergoing SHM." },
      { phrase: "period", tip: "Time for one complete oscillation, T." },
      { phrase: "0.40 s", tip: "T = 0.40 s." },
      { phrase: "amplitude", tip: "The maximum displacement from equilibrium, x₀." },
      { phrase: "0.060 m", tip: "x₀ = 0.060 m." },
      { phrase: "12 N", tip: "The restoring force at maximum displacement." },
      { phrase: "mass", tip: "The mass m oscillating on the spring." }
    ],
    knowns: [
      { symbol: "T", value: "0.40", unit: "s", description: "period" },
      { symbol: "x₀", value: "0.060", unit: "m", description: "amplitude" },
      { symbol: "F", value: "12", unit: "N", description: "restoring force at amplitude" }
    ],
    unknowns: [
      { symbol: "m", unit: "kg", description: "mass" }
    ],
    acceptedSolutions: [
      ["A2_3", "C1_3"]
    ],
    requiredConstants: [],
    hints: [
      "Use Hooke's law F = kx to find the spring constant k first.",
      "k = F/x₀ = 12/0.060 = 200 N m⁻¹. Now use the mass-spring period formula.",
      "T = 2π√(m/k), so m = kT²/(4π²) = 200 × 0.40²/(4π²) ≈ 0.81 kg."
    ],
    explanation: "From Hooke's law: \\(k = \\frac{F}{x_0} = \\frac{12}{0.060} = 200\\) N m\\(^{-1}\\). Then \\(T = 2\\pi\\sqrt{\\frac{m}{k}}\\), so \\(m = \\frac{kT^2}{4\\pi^2} = \\frac{200 \\times 0.16}{39.48} \\approx 0.81\\) kg."
  },

  {
    id: "C1_L2_02",
    text: "A {{simple pendulum}} has a period of {{1.4 s}} on Earth. What is the {{length}} of the pendulum? If the same pendulum is taken to the Moon where {{g = 1.6 m s⁻²}}, what would the new period be?",
    topic: "C",
    subtopic: "C1",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "simple pendulum", tip: "A point mass on a massless string swinging under gravity." },
      { phrase: "1.4 s", tip: "T = 1.4 s on Earth." },
      { phrase: "length", tip: "The length l of the pendulum string." },
      { phrase: "g = 1.6 m s⁻²", tip: "Gravitational field strength on the Moon." }
    ],
    knowns: [
      { symbol: "T_Earth", value: "1.4", unit: "s", description: "period on Earth" },
      { symbol: "g_Earth", value: "9.8", unit: "m s⁻²", description: "gravitational field strength on Earth" },
      { symbol: "g_Moon", value: "1.6", unit: "m s⁻²", description: "gravitational field strength on Moon" }
    ],
    unknowns: [
      { symbol: "l", unit: "m", description: "pendulum length" },
      { symbol: "T_Moon", unit: "s", description: "period on the Moon" }
    ],
    acceptedSolutions: [
      ["C1_4", "CONST_g"]
    ],
    requiredConstants: ["CONST_g"],
    hints: [
      "Rearrange T = 2π√(l/g) to find l from the Earth period.",
      "l = gT²/(4π²) = 9.8 × 1.4²/(4π²) ≈ 0.49 m.",
      "Then T_Moon = 2π√(l/g_Moon) = 2π√(0.49/1.6) ≈ 3.5 s."
    ],
    explanation: "Rearranging \\(T = 2\\pi\\sqrt{\\frac{l}{g}}\\): \\(l = \\frac{gT^2}{4\\pi^2} = \\frac{9.8 \\times 1.96}{39.48} \\approx 0.49\\) m. On the Moon: \\(T_{Moon} = 2\\pi\\sqrt{\\frac{0.49}{1.6}} = 2\\pi\\sqrt{0.306} \\approx 2\\pi \\times 0.553 \\approx 3.5\\) s."
  },

  {
    id: "C1_L2_03",
    text: "If the {{length}} of a simple pendulum is {{quadrupled}}, by what factor does the {{period}} change? If instead the {{mass}} of the pendulum bob is quadrupled, how does the period change?",
    topic: "C",
    subtopic: "C1",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "length", tip: "The length l of the pendulum." },
      { phrase: "quadrupled", tip: "Increased by a factor of 4." },
      { phrase: "period", tip: "The time for one complete oscillation." },
      { phrase: "mass", tip: "The mass of the pendulum bob." }
    ],
    knowns: [
      { symbol: "l₂", value: "4l₁", unit: "", description: "length quadrupled" },
      { symbol: "m₂", value: "4m₁", unit: "", description: "mass quadrupled (separate scenario)" }
    ],
    unknowns: [
      { symbol: "T₂/T₁", unit: "", description: "factor change in period" }
    ],
    acceptedSolutions: [
      ["C1_4"]
    ],
    requiredConstants: [],
    hints: [
      "Write out T = 2π√(l/g). How does T depend on l? Does it depend on m?",
      "T ∝ √l, so if l → 4l then T → √4 × T = 2T. The period doubles.",
      "The pendulum period formula contains no mass term, so changing mass has no effect on T."
    ],
    explanation: "From \\(T = 2\\pi\\sqrt{\\frac{l}{g}}\\), \\(T \\propto \\sqrt{l}\\). If \\(l\\) is quadrupled: \\(T_2 = 2\\pi\\sqrt{\\frac{4l}{g}} = 2 \\times 2\\pi\\sqrt{\\frac{l}{g}} = 2T_1\\). The period doubles. Mass does not appear in the formula, so quadrupling the mass has no effect on the period."
  },

  {
    id: "C1_L2_04",
    text: "An object of {{mass 0.25 kg}} on a spring oscillates in {{SHM}} with a {{period}} of {{0.50 s}} and an {{amplitude}} of {{0.080 m}}. Find the {{acceleration}} of the object when its displacement is {{0.030 m}} from equilibrium.",
    topic: "C",
    subtopic: "C1",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "mass 0.25 kg", tip: "m = 0.25 kg." },
      { phrase: "SHM", tip: "Simple harmonic motion — acceleration is proportional to displacement." },
      { phrase: "period", tip: "T = 0.50 s." },
      { phrase: "0.50 s", tip: "T = 0.50 s." },
      { phrase: "amplitude", tip: "Maximum displacement x₀ = 0.080 m." },
      { phrase: "0.080 m", tip: "x₀ = 0.080 m." },
      { phrase: "acceleration", tip: "a = -ω²x for SHM." },
      { phrase: "0.030 m", tip: "The displacement x = 0.030 m from equilibrium." }
    ],
    knowns: [
      { symbol: "m", value: "0.25", unit: "kg", description: "mass" },
      { symbol: "T", value: "0.50", unit: "s", description: "period" },
      { symbol: "x₀", value: "0.080", unit: "m", description: "amplitude" },
      { symbol: "x", value: "0.030", unit: "m", description: "displacement from equilibrium" }
    ],
    unknowns: [
      { symbol: "a", unit: "m s⁻²", description: "acceleration" }
    ],
    acceptedSolutions: [
      ["C1_2", "C1_1"]
    ],
    requiredConstants: [],
    hints: [
      "First find ω from the period, then use the SHM acceleration formula.",
      "ω = 2π/T = 2π/0.50 = 4π ≈ 12.6 rad s⁻¹.",
      "a = -ω²x = -(12.6)² × 0.030 ≈ -4.7 m s⁻²."
    ],
    explanation: "First find \\(\\omega = \\frac{2\\pi}{T} = \\frac{2\\pi}{0.50} = 4\\pi \\approx 12.6\\) rad s\\(^{-1}\\). Then \\(a = -\\omega^2 x = -(12.6)^2 \\times 0.030 = -158.7 \\times 0.030 \\approx -4.7\\) m s\\(^{-2}\\). The magnitude is 4.7 m s\\(^{-2}\\), directed towards equilibrium."
  },

  {
    id: "C1_L2_05",
    text: "A {{mass-spring system}} has {{spring constant}} {{k = 50 N m⁻¹}} and oscillates with an {{amplitude}} of {{0.10 m}}. Calculate the {{elastic potential energy}} stored in the spring at maximum displacement, and determine the {{period}} if the mass is {{0.20 kg}}.",
    topic: "C",
    subtopic: "C1",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "mass-spring system", tip: "A mass on a spring undergoing SHM." },
      { phrase: "spring constant", tip: "k = 50 N m⁻¹, the stiffness of the spring." },
      { phrase: "k = 50 N m⁻¹", tip: "k = 50 N m⁻¹." },
      { phrase: "amplitude", tip: "Maximum displacement x₀ = 0.10 m." },
      { phrase: "0.10 m", tip: "x₀ = 0.10 m." },
      { phrase: "elastic potential energy", tip: "The energy stored in the stretched or compressed spring: EH = ½kΔx²." },
      { phrase: "period", tip: "The time for one complete oscillation." },
      { phrase: "0.20 kg", tip: "m = 0.20 kg." }
    ],
    knowns: [
      { symbol: "k", value: "50", unit: "N m⁻¹", description: "spring constant" },
      { symbol: "x₀", value: "0.10", unit: "m", description: "amplitude" },
      { symbol: "m", value: "0.20", unit: "kg", description: "mass" }
    ],
    unknowns: [
      { symbol: "EH", unit: "J", description: "elastic potential energy at max displacement" },
      { symbol: "T", unit: "s", description: "period of oscillation" }
    ],
    acceptedSolutions: [
      ["A3_4", "C1_3"]
    ],
    requiredConstants: [],
    hints: [
      "At maximum displacement all energy is elastic PE. Use EH = ½kΔx².",
      "EH = ½ × 50 × (0.10)² = 0.25 J.",
      "For the period: T = 2π√(m/k) = 2π√(0.20/50) = 2π√(0.004) ≈ 0.40 s."
    ],
    explanation: "Elastic PE: \\(E_H = \\frac{1}{2}k\\Delta x^2 = \\frac{1}{2} \\times 50 \\times (0.10)^2 = 0.25\\) J. Period: \\(T = 2\\pi\\sqrt{\\frac{m}{k}} = 2\\pi\\sqrt{\\frac{0.20}{50}} = 2\\pi\\sqrt{0.004} = 2\\pi \\times 0.0632 \\approx 0.40\\) s."
  },

  // ===========================================================
  // C1 SHM (HL) — LEVEL 1 (2 questions: C1_L1_04 to C1_L1_05)
  // ===========================================================

  {
    id: "C1_L1_04",
    text: "An object oscillates in {{SHM}} with an {{amplitude}} of {{0.12 m}} and {{angular frequency}} {{ω = 5.0 rad s⁻¹}}. Calculate the {{total energy}} of the system if the {{mass}} is {{0.30 kg}}.",
    topic: "C",
    subtopic: "C1",
    level: 1,
    slhl: "HL",
    tooltips: [
      { phrase: "SHM", tip: "Simple harmonic motion." },
      { phrase: "amplitude", tip: "Maximum displacement x₀ = 0.12 m." },
      { phrase: "angular frequency", tip: "ω in rad s⁻¹, related to period by ω = 2π/T." },
      { phrase: "ω = 5.0 rad s⁻¹", tip: "ω = 5.0 rad s⁻¹." },
      { phrase: "total energy", tip: "ET = ½mω²x₀² for SHM." },
      { phrase: "mass", tip: "m = 0.30 kg." }
    ],
    knowns: [
      { symbol: "x₀", value: "0.12", unit: "m", description: "amplitude" },
      { symbol: "ω", value: "5.0", unit: "rad s⁻¹", description: "angular frequency" },
      { symbol: "m", value: "0.30", unit: "kg", description: "mass" }
    ],
    unknowns: [
      { symbol: "ET", unit: "J", description: "total energy" }
    ],
    acceptedSolutions: [
      ["C1_8"]
    ],
    requiredConstants: [],
    hints: [
      "The total energy in SHM is given by ET = ½mω²x₀².",
      "Substitute the values directly.",
      "ET = ½ × 0.30 × (5.0)² × (0.12)² = ½ × 0.30 × 25 × 0.0144 = 0.054 J."
    ],
    explanation: "Using \\(E_T = \\frac{1}{2}m\\omega^2 x_0^2 = \\frac{1}{2} \\times 0.30 \\times 25 \\times 0.0144 = 0.054\\) J."
  },

  {
    id: "C1_L1_05",
    text: "A particle in {{SHM}} has {{amplitude}} {{0.050 m}} and {{angular frequency}} {{ω = 10 rad s⁻¹}}. Calculate the {{speed}} of the particle when the {{displacement}} is {{0.030 m}} from equilibrium.",
    topic: "C",
    subtopic: "C1",
    level: 1,
    slhl: "HL",
    tooltips: [
      { phrase: "SHM", tip: "Simple harmonic motion." },
      { phrase: "amplitude", tip: "x₀ = 0.050 m." },
      { phrase: "0.050 m", tip: "x₀ = 0.050 m." },
      { phrase: "angular frequency", tip: "ω = 10 rad s⁻¹." },
      { phrase: "ω = 10 rad s⁻¹", tip: "ω = 10 rad s⁻¹." },
      { phrase: "speed", tip: "The magnitude of velocity at a given displacement." },
      { phrase: "displacement", tip: "x = 0.030 m from the equilibrium position." },
      { phrase: "0.030 m", tip: "x = 0.030 m." }
    ],
    knowns: [
      { symbol: "x₀", value: "0.050", unit: "m", description: "amplitude" },
      { symbol: "ω", value: "10", unit: "rad s⁻¹", description: "angular frequency" },
      { symbol: "x", value: "0.030", unit: "m", description: "displacement" }
    ],
    unknowns: [
      { symbol: "v", unit: "m s⁻¹", description: "speed" }
    ],
    acceptedSolutions: [
      ["C1_7"]
    ],
    requiredConstants: [],
    hints: [
      "Use the velocity-displacement relation for SHM.",
      "v = ω√(x₀² - x²).",
      "v = 10 × √(0.050² - 0.030²) = 10 × √(0.0025 - 0.0009) = 10 × √(0.0016) = 10 × 0.040 = 0.40 m s⁻¹."
    ],
    explanation: "Using \\(v = \\omega\\sqrt{x_0^2 - x^2} = 10\\sqrt{0.0025 - 0.0009} = 10\\sqrt{0.0016} = 10 \\times 0.040 = 0.40\\) m s\\(^{-1}\\)."
  },

  // ===========================================================
  // C1 SHM (HL) — LEVEL 2 (4 questions: C1_L2_06 to C1_L2_09)
  // ===========================================================

  {
    id: "C1_L2_06",
    text: "A {{0.40 kg}} mass oscillates on a spring in {{SHM}} with {{amplitude}} {{0.15 m}} and {{period}} {{0.80 s}}. Calculate the {{maximum speed}} of the mass and the {{kinetic energy}} at the equilibrium position.",
    topic: "C",
    subtopic: "C1",
    level: 2,
    slhl: "HL",
    tooltips: [
      { phrase: "0.40 kg", tip: "m = 0.40 kg." },
      { phrase: "SHM", tip: "Simple harmonic motion." },
      { phrase: "amplitude", tip: "x₀ = 0.15 m." },
      { phrase: "0.15 m", tip: "x₀ = 0.15 m." },
      { phrase: "period", tip: "T = 0.80 s." },
      { phrase: "0.80 s", tip: "T = 0.80 s." },
      { phrase: "maximum speed", tip: "The speed at x = 0 (equilibrium), which is the maximum." },
      { phrase: "kinetic energy", tip: "Ek = ½mv²." }
    ],
    knowns: [
      { symbol: "m", value: "0.40", unit: "kg", description: "mass" },
      { symbol: "x₀", value: "0.15", unit: "m", description: "amplitude" },
      { symbol: "T", value: "0.80", unit: "s", description: "period" }
    ],
    unknowns: [
      { symbol: "v_max", unit: "m s⁻¹", description: "maximum speed" },
      { symbol: "Ek", unit: "J", description: "kinetic energy at equilibrium" }
    ],
    acceptedSolutions: [
      ["C1_2", "C1_7", "A3_2"],
      ["C1_2", "C1_6", "A3_2"]
    ],
    requiredConstants: [],
    hints: [
      "Find ω from the period, then find v_max at x = 0.",
      "ω = 2π/T = 2π/0.80 ≈ 7.85 rad s⁻¹. v_max = ωx₀ = 7.85 × 0.15 ≈ 1.18 m s⁻¹.",
      "Ek = ½mv² = ½ × 0.40 × (1.18)² ≈ 0.28 J."
    ],
    explanation: "\\(\\omega = \\frac{2\\pi}{T} = \\frac{2\\pi}{0.80} \\approx 7.85\\) rad s\\(^{-1}\\). At equilibrium (\\(x = 0\\)): \\(v_{max} = \\omega x_0 = 7.85 \\times 0.15 \\approx 1.18\\) m s\\(^{-1}\\). Kinetic energy: \\(E_k = \\frac{1}{2}mv^2 = \\frac{1}{2} \\times 0.40 \\times 1.39 \\approx 0.28\\) J."
  },

  {
    id: "C1_L2_07",
    text: "An oscillating system has {{total energy}} {{ET = 0.50 J}}, {{mass}} {{0.20 kg}}, and {{angular frequency}} {{ω = 10 rad s⁻¹}}. Calculate the {{amplitude}} of oscillation and the {{potential energy}} when the displacement is {{0.040 m}}.",
    topic: "C",
    subtopic: "C1",
    level: 2,
    slhl: "HL",
    tooltips: [
      { phrase: "total energy", tip: "ET = ½mω²x₀², constant throughout the motion." },
      { phrase: "ET = 0.50 J", tip: "ET = 0.50 J." },
      { phrase: "mass", tip: "m = 0.20 kg." },
      { phrase: "0.20 kg", tip: "m = 0.20 kg." },
      { phrase: "angular frequency", tip: "ω = 10 rad s⁻¹." },
      { phrase: "ω = 10 rad s⁻¹", tip: "ω = 10 rad s⁻¹." },
      { phrase: "amplitude", tip: "The maximum displacement x₀." },
      { phrase: "potential energy", tip: "Ep = ½mω²x² at a given displacement." },
      { phrase: "0.040 m", tip: "x = 0.040 m." }
    ],
    knowns: [
      { symbol: "ET", value: "0.50", unit: "J", description: "total energy" },
      { symbol: "m", value: "0.20", unit: "kg", description: "mass" },
      { symbol: "ω", value: "10", unit: "rad s⁻¹", description: "angular frequency" },
      { symbol: "x", value: "0.040", unit: "m", description: "displacement" }
    ],
    unknowns: [
      { symbol: "x₀", unit: "m", description: "amplitude" },
      { symbol: "Ep", unit: "J", description: "potential energy" }
    ],
    acceptedSolutions: [
      ["C1_8", "C1_9"]
    ],
    requiredConstants: [],
    hints: [
      "Rearrange ET = ½mω²x₀² to find x₀.",
      "x₀ = √(2ET/(mω²)) = √(2 × 0.50/(0.20 × 100)) = √(0.050) ≈ 0.071 m.",
      "Ep = ½mω²x² = ½ × 0.20 × 100 × (0.040)² = 0.016 J."
    ],
    explanation: "Rearranging \\(E_T = \\frac{1}{2}m\\omega^2 x_0^2\\): \\(x_0 = \\sqrt{\\frac{2E_T}{m\\omega^2}} = \\sqrt{\\frac{1.0}{20}} = \\sqrt{0.050} \\approx 0.071\\) m. Then \\(E_p = \\frac{1}{2}m\\omega^2 x^2 = \\frac{1}{2} \\times 0.20 \\times 100 \\times 0.0016 = 0.016\\) J."
  },

  {
    id: "C1_L2_08",
    text: "A {{mass-spring system}} has a {{period}} of {{0.60 s}}. The {{maximum speed}} of the mass is {{1.5 m s⁻¹}}. Determine the {{amplitude}} of oscillation.",
    topic: "C",
    subtopic: "C1",
    level: 2,
    slhl: "HL",
    tooltips: [
      { phrase: "mass-spring system", tip: "A mass on a spring undergoing SHM." },
      { phrase: "period", tip: "T = 0.60 s." },
      { phrase: "0.60 s", tip: "T = 0.60 s." },
      { phrase: "maximum speed", tip: "The speed at equilibrium: v_max = ωx₀." },
      { phrase: "1.5 m s⁻¹", tip: "v_max = 1.5 m s⁻¹." },
      { phrase: "amplitude", tip: "Maximum displacement x₀." }
    ],
    knowns: [
      { symbol: "T", value: "0.60", unit: "s", description: "period" },
      { symbol: "v_max", value: "1.5", unit: "m s⁻¹", description: "maximum speed" }
    ],
    unknowns: [
      { symbol: "x₀", unit: "m", description: "amplitude" }
    ],
    acceptedSolutions: [
      ["C1_2", "C1_6"],
      ["C1_2", "C1_7"]
    ],
    requiredConstants: [],
    hints: [
      "Find ω from the period, then relate v_max to amplitude.",
      "ω = 2π/T = 2π/0.60 ≈ 10.5 rad s⁻¹. At equilibrium v_max = ωx₀.",
      "x₀ = v_max/ω = 1.5/10.5 ≈ 0.14 m."
    ],
    explanation: "\\(\\omega = \\frac{2\\pi}{T} = \\frac{2\\pi}{0.60} \\approx 10.5\\) rad s\\(^{-1}\\). Maximum speed occurs at equilibrium: \\(v_{max} = \\omega x_0\\), so \\(x_0 = \\frac{v_{max}}{\\omega} = \\frac{1.5}{10.5} \\approx 0.14\\) m."
  },

  {
    id: "C1_L2_09",
    text: "A particle moves in {{SHM}} with {{displacement}} described by {{x = x₀ sin(ωt)}}. The {{amplitude}} is {{0.20 m}} and the {{period}} is {{4.0 s}}. Find the {{displacement}} at {{t = 0.50 s}} and the {{velocity}} at that instant.",
    topic: "C",
    subtopic: "C1",
    level: 2,
    slhl: "HL",
    tooltips: [
      { phrase: "SHM", tip: "Simple harmonic motion." },
      { phrase: "displacement", tip: "x(t), the position relative to equilibrium." },
      { phrase: "x = x₀ sin(ωt)", tip: "The SHM displacement equation with phase constant φ = 0." },
      { phrase: "amplitude", tip: "x₀ = 0.20 m." },
      { phrase: "0.20 m", tip: "x₀ = 0.20 m." },
      { phrase: "period", tip: "T = 4.0 s." },
      { phrase: "4.0 s", tip: "T = 4.0 s." },
      { phrase: "t = 0.50 s", tip: "The time at which to evaluate x and v." },
      { phrase: "velocity", tip: "v = ωx₀cos(ωt) for SHM." }
    ],
    knowns: [
      { symbol: "x₀", value: "0.20", unit: "m", description: "amplitude" },
      { symbol: "T", value: "4.0", unit: "s", description: "period" },
      { symbol: "t", value: "0.50", unit: "s", description: "time" },
      { symbol: "φ", value: "0", unit: "rad", description: "phase constant" }
    ],
    unknowns: [
      { symbol: "x", unit: "m", description: "displacement at t = 0.50 s" },
      { symbol: "v", unit: "m s⁻¹", description: "velocity at t = 0.50 s" }
    ],
    acceptedSolutions: [
      ["C1_2", "C1_5", "C1_6"]
    ],
    requiredConstants: [],
    hints: [
      "First find ω = 2π/T, then substitute into x = x₀sin(ωt).",
      "ω = 2π/4.0 = π/2 ≈ 1.57 rad s⁻¹. x = 0.20 sin(1.57 × 0.50) = 0.20 sin(0.785) ≈ 0.20 × 0.707 = 0.14 m.",
      "v = ωx₀cos(ωt) = 1.57 × 0.20 × cos(0.785) = 0.314 × 0.707 ≈ 0.22 m s⁻¹."
    ],
    explanation: "\\(\\omega = \\frac{2\\pi}{T} = \\frac{2\\pi}{4.0} = \\frac{\\pi}{2} \\approx 1.57\\) rad s\\(^{-1}\\). At \\(t = 0.50\\) s: \\(x = 0.20\\sin(1.57 \\times 0.50) = 0.20\\sin(0.785) \\approx 0.14\\) m. Velocity: \\(v = \\omega x_0 \\cos(\\omega t) = 1.57 \\times 0.20 \\times \\cos(0.785) \\approx 0.22\\) m s\\(^{-1}\\)."
  },

  // ===========================================================
  // C2 WAVE MODEL (SL) — LEVEL 1 (1 question: C2_L1_01)
  // ===========================================================

  {
    id: "C2_L1_01",
    text: "A {{sound wave}} has a {{frequency}} of {{440 Hz}} and travels at {{340 m s⁻¹}}. Calculate the {{wavelength}} of the wave.",
    topic: "C",
    subtopic: "C2",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "sound wave", tip: "A longitudinal mechanical wave that travels through a medium." },
      { phrase: "frequency", tip: "f = 440 Hz, the number of oscillations per second." },
      { phrase: "440 Hz", tip: "f = 440 Hz." },
      { phrase: "340 m s⁻¹", tip: "v = 340 m s⁻¹, the speed of sound." },
      { phrase: "wavelength", tip: "λ, the distance between consecutive identical points on the wave." }
    ],
    knowns: [
      { symbol: "f", value: "440", unit: "Hz", description: "frequency" },
      { symbol: "v", value: "340", unit: "m s⁻¹", description: "wave speed" }
    ],
    unknowns: [
      { symbol: "λ", unit: "m", description: "wavelength" }
    ],
    acceptedSolutions: [
      ["C2_1"]
    ],
    requiredConstants: [],
    hints: [
      "Use the wave equation v = fλ.",
      "Rearrange: λ = v/f.",
      "λ = 340/440 ≈ 0.77 m."
    ],
    explanation: "Using \\(v = f\\lambda\\), rearranging: \\(\\lambda = \\frac{v}{f} = \\frac{340}{440} \\approx 0.77\\) m."
  },

  // ===========================================================
  // C2 WAVE MODEL (SL) — LEVEL 2 (2 questions: C2_L2_01 to C2_L2_02)
  // ===========================================================

  {
    id: "C2_L2_01",
    text: "A {{wave}} passes from {{medium 1}} into {{medium 2}}. In medium 1 the wave has {{speed}} {{3.0 × 10⁸ m s⁻¹}} and {{wavelength}} {{600 nm}}. In medium 2 the speed is {{2.0 × 10⁸ m s⁻¹}}. Find the {{wavelength}} in medium 2 and the {{ratio of refractive indices}} n₁/n₂.",
    topic: "C",
    subtopic: "C2",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "wave", tip: "An electromagnetic wave (light) travelling between two media." },
      { phrase: "medium 1", tip: "The first medium through which the wave travels." },
      { phrase: "medium 2", tip: "The second medium." },
      { phrase: "speed", tip: "The speed of the wave in the medium." },
      { phrase: "3.0 × 10⁸ m s⁻¹", tip: "v₁ = 3.0 × 10⁸ m s⁻¹ (speed of light in vacuum)." },
      { phrase: "wavelength", tip: "λ, the spatial period of the wave." },
      { phrase: "600 nm", tip: "λ₁ = 600 nm = 600 × 10⁻⁹ m." },
      { phrase: "2.0 × 10⁸ m s⁻¹", tip: "v₂ = 2.0 × 10⁸ m s⁻¹." },
      { phrase: "ratio of refractive indices", tip: "n₁/n₂ = v₂/v₁ from Snell's law." }
    ],
    knowns: [
      { symbol: "v₁", value: "3.0 × 10⁸", unit: "m s⁻¹", description: "speed in medium 1" },
      { symbol: "λ₁", value: "600", unit: "nm", description: "wavelength in medium 1" },
      { symbol: "v₂", value: "2.0 × 10⁸", unit: "m s⁻¹", description: "speed in medium 2" }
    ],
    unknowns: [
      { symbol: "λ₂", unit: "nm", description: "wavelength in medium 2" },
      { symbol: "n₁/n₂", unit: "", description: "ratio of refractive indices" }
    ],
    acceptedSolutions: [
      ["C2_1", "C3_1"]
    ],
    requiredConstants: [],
    hints: [
      "Frequency is unchanged when a wave enters a new medium. Find f from v₁ = fλ₁.",
      "f = v₁/λ₁ = 3.0×10⁸/(600×10⁻⁹) = 5.0 × 10¹⁴ Hz. Then λ₂ = v₂/f.",
      "λ₂ = 2.0×10⁸/(5.0×10¹⁴) = 400 nm. n₁/n₂ = v₂/v₁ = 2.0/3.0 = 0.67."
    ],
    explanation: "Frequency is constant: \\(f = \\frac{v_1}{\\lambda_1} = \\frac{3.0 \\times 10^8}{600 \\times 10^{-9}} = 5.0 \\times 10^{14}\\) Hz. In medium 2: \\(\\lambda_2 = \\frac{v_2}{f} = \\frac{2.0 \\times 10^8}{5.0 \\times 10^{14}} = 4.0 \\times 10^{-7}\\) m \\(= 400\\) nm. From Snell's law: \\(\\frac{n_1}{n_2} = \\frac{v_2}{v_1} = \\frac{2.0}{3.0} \\approx 0.67\\)."
  },

  {
    id: "C2_L2_02",
    text: "In a {{double slit experiment}}, the {{fringe spacing}} is {{2.5 mm}} when the {{slit separation}} is {{0.50 mm}} and the {{screen distance}} is {{1.8 m}}. Calculate the {{wavelength}} of the light and its {{frequency}}.",
    topic: "C",
    subtopic: "C2",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "double slit experiment", tip: "Young's double slit experiment producing interference fringes." },
      { phrase: "fringe spacing", tip: "The distance s between adjacent bright fringes." },
      { phrase: "2.5 mm", tip: "s = 2.5 mm = 2.5 × 10⁻³ m." },
      { phrase: "slit separation", tip: "d, the distance between the two slits." },
      { phrase: "0.50 mm", tip: "d = 0.50 mm = 5.0 × 10⁻⁴ m." },
      { phrase: "screen distance", tip: "D, the distance from the slits to the screen." },
      { phrase: "1.8 m", tip: "D = 1.8 m." },
      { phrase: "wavelength", tip: "λ, the wavelength of the light." },
      { phrase: "frequency", tip: "f, the frequency of the light." }
    ],
    knowns: [
      { symbol: "s", value: "2.5 × 10⁻³", unit: "m", description: "fringe spacing" },
      { symbol: "d", value: "5.0 × 10⁻⁴", unit: "m", description: "slit separation" },
      { symbol: "D", value: "1.8", unit: "m", description: "screen distance" },
      { symbol: "c", value: "3.0 × 10⁸", unit: "m s⁻¹", description: "speed of light" }
    ],
    unknowns: [
      { symbol: "λ", unit: "m", description: "wavelength" },
      { symbol: "f", unit: "Hz", description: "frequency" }
    ],
    acceptedSolutions: [
      ["C3_2", "C2_1", "CONST_c"]
    ],
    requiredConstants: ["CONST_c"],
    hints: [
      "Use s = λD/d to find λ first.",
      "λ = sd/D = (2.5×10⁻³ × 5.0×10⁻⁴)/1.8 = 6.9 × 10⁻⁷ m ≈ 690 nm.",
      "f = c/λ = 3.0×10⁸/(6.9×10⁻⁷) ≈ 4.3 × 10¹⁴ Hz."
    ],
    explanation: "From \\(s = \\frac{\\lambda D}{d}\\): \\(\\lambda = \\frac{sd}{D} = \\frac{2.5 \\times 10^{-3} \\times 5.0 \\times 10^{-4}}{1.8} = 6.9 \\times 10^{-7}\\) m \\(\\approx 690\\) nm. Then \\(f = \\frac{c}{\\lambda} = \\frac{3.0 \\times 10^8}{6.9 \\times 10^{-7}} \\approx 4.3 \\times 10^{14}\\) Hz."
  },

  // ===========================================================
  // C3 WAVE PHENOMENA (SL) — LEVEL 1 (2 questions: C3_L1_01 to C3_L1_02)
  // ===========================================================

  {
    id: "C3_L1_01",
    text: "Light passes from air ({{n₁ = 1.00}}) into glass ({{n₂ = 1.50}}). The {{angle of incidence}} is {{45°}}. Calculate the {{angle of refraction}}.",
    topic: "C",
    subtopic: "C3",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "n₁ = 1.00", tip: "Refractive index of air ≈ 1.00." },
      { phrase: "n₂ = 1.50", tip: "Refractive index of glass = 1.50." },
      { phrase: "angle of incidence", tip: "θ₁, the angle between the incoming ray and the normal." },
      { phrase: "45°", tip: "θ₁ = 45°." },
      { phrase: "angle of refraction", tip: "θ₂, the angle between the refracted ray and the normal." }
    ],
    knowns: [
      { symbol: "n₁", value: "1.00", unit: "", description: "refractive index of air" },
      { symbol: "n₂", value: "1.50", unit: "", description: "refractive index of glass" },
      { symbol: "θ₁", value: "45", unit: "°", description: "angle of incidence" }
    ],
    unknowns: [
      { symbol: "θ₂", unit: "°", description: "angle of refraction" }
    ],
    acceptedSolutions: [
      ["C3_1"]
    ],
    requiredConstants: [],
    hints: [
      "Use Snell's law: n₁sinθ₁ = n₂sinθ₂.",
      "sinθ₂ = (n₁/n₂)sinθ₁ = (1.00/1.50) × sin45°.",
      "sinθ₂ = 0.667 × 0.707 = 0.471. θ₂ = sin⁻¹(0.471) ≈ 28°."
    ],
    explanation: "Using Snell's law: \\(n_1\\sin\\theta_1 = n_2\\sin\\theta_2\\). Rearranging: \\(\\sin\\theta_2 = \\frac{n_1}{n_2}\\sin\\theta_1 = \\frac{1.00}{1.50} \\times \\sin 45° = 0.667 \\times 0.707 = 0.471\\). So \\(\\theta_2 = \\sin^{-1}(0.471) \\approx 28°\\)."
  },

  {
    id: "C3_L1_02",
    text: "In a {{double slit experiment}}, light of {{wavelength}} {{550 nm}} passes through two slits separated by {{0.40 mm}}. The screen is {{2.0 m}} away. Calculate the {{fringe spacing}}.",
    topic: "C",
    subtopic: "C3",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "double slit experiment", tip: "Young's experiment producing an interference pattern on a screen." },
      { phrase: "wavelength", tip: "λ = 550 nm = 550 × 10⁻⁹ m." },
      { phrase: "550 nm", tip: "λ = 550 × 10⁻⁹ m." },
      { phrase: "0.40 mm", tip: "d = 0.40 mm = 4.0 × 10⁻⁴ m, the slit separation." },
      { phrase: "2.0 m", tip: "D = 2.0 m, the distance from slits to screen." },
      { phrase: "fringe spacing", tip: "s, the distance between adjacent bright fringes." }
    ],
    knowns: [
      { symbol: "λ", value: "550 × 10⁻⁹", unit: "m", description: "wavelength" },
      { symbol: "d", value: "4.0 × 10⁻⁴", unit: "m", description: "slit separation" },
      { symbol: "D", value: "2.0", unit: "m", description: "screen distance" }
    ],
    unknowns: [
      { symbol: "s", unit: "m", description: "fringe spacing" }
    ],
    acceptedSolutions: [
      ["C3_2"]
    ],
    requiredConstants: [],
    hints: [
      "Use s = λD/d for double slit fringe spacing.",
      "Substitute the values directly.",
      "s = (550×10⁻⁹ × 2.0)/(4.0×10⁻⁴) = 1.1×10⁻⁶/4.0×10⁻⁴ = 2.75 × 10⁻³ m ≈ 2.8 mm."
    ],
    explanation: "Using \\(s = \\frac{\\lambda D}{d} = \\frac{550 \\times 10^{-9} \\times 2.0}{4.0 \\times 10^{-4}} = \\frac{1.1 \\times 10^{-6}}{4.0 \\times 10^{-4}} = 2.75 \\times 10^{-3}\\) m \\(\\approx 2.8\\) mm."
  },

  // ===========================================================
  // C3 WAVE PHENOMENA (SL) — LEVEL 2 (3 questions: C3_L2_01 to C3_L2_03)
  // ===========================================================

  {
    id: "C3_L2_01",
    text: "Light of {{frequency}} {{5.0 × 10¹⁴ Hz}} passes through a {{double slit}} with {{slit separation}} {{0.25 mm}} and the fringes are observed on a screen {{1.5 m}} away. Calculate the {{fringe spacing}}.",
    topic: "C",
    subtopic: "C3",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "frequency", tip: "f = 5.0 × 10¹⁴ Hz." },
      { phrase: "5.0 × 10¹⁴ Hz", tip: "f = 5.0 × 10¹⁴ Hz." },
      { phrase: "double slit", tip: "Young's double slit arrangement." },
      { phrase: "slit separation", tip: "d = 0.25 mm = 2.5 × 10⁻⁴ m." },
      { phrase: "0.25 mm", tip: "d = 2.5 × 10⁻⁴ m." },
      { phrase: "1.5 m", tip: "D = 1.5 m, distance to the screen." },
      { phrase: "fringe spacing", tip: "s, the distance between adjacent bright fringes." }
    ],
    knowns: [
      { symbol: "f", value: "5.0 × 10¹⁴", unit: "Hz", description: "frequency" },
      { symbol: "d", value: "2.5 × 10⁻⁴", unit: "m", description: "slit separation" },
      { symbol: "D", value: "1.5", unit: "m", description: "screen distance" },
      { symbol: "c", value: "3.0 × 10⁸", unit: "m s⁻¹", description: "speed of light" }
    ],
    unknowns: [
      { symbol: "s", unit: "m", description: "fringe spacing" }
    ],
    acceptedSolutions: [
      ["C2_1", "C3_2", "CONST_c"]
    ],
    requiredConstants: ["CONST_c"],
    hints: [
      "You need the wavelength first. Use v = fλ with v = c.",
      "λ = c/f = 3.0×10⁸/(5.0×10¹⁴) = 6.0 × 10⁻⁷ m = 600 nm.",
      "s = λD/d = (6.0×10⁻⁷ × 1.5)/(2.5×10⁻⁴) = 3.6 × 10⁻³ m = 3.6 mm."
    ],
    explanation: "First find \\(\\lambda = \\frac{c}{f} = \\frac{3.0 \\times 10^8}{5.0 \\times 10^{14}} = 6.0 \\times 10^{-7}\\) m. Then \\(s = \\frac{\\lambda D}{d} = \\frac{6.0 \\times 10^{-7} \\times 1.5}{2.5 \\times 10^{-4}} = 3.6 \\times 10^{-3}\\) m \\(= 3.6\\) mm."
  },

  {
    id: "C3_L2_02",
    text: "A light ray travels from water ({{n₁ = 1.33}}) into glass ({{n₂ = 1.50}}). The {{speed of light in water}} is {{2.26 × 10⁸ m s⁻¹}} and the {{angle of incidence}} is {{30°}}. Find the {{angle of refraction}} and the {{speed of light in the glass}}.",
    topic: "C",
    subtopic: "C3",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "n₁ = 1.33", tip: "Refractive index of water." },
      { phrase: "n₂ = 1.50", tip: "Refractive index of glass." },
      { phrase: "speed of light in water", tip: "v₁ = 2.26 × 10⁸ m s⁻¹." },
      { phrase: "2.26 × 10⁸ m s⁻¹", tip: "v₁ = 2.26 × 10⁸ m s⁻¹." },
      { phrase: "angle of incidence", tip: "θ₁ = 30°." },
      { phrase: "30°", tip: "θ₁ = 30°." },
      { phrase: "angle of refraction", tip: "θ₂, the angle in the glass." },
      { phrase: "speed of light in the glass", tip: "v₂, using the relation n₁/n₂ = v₂/v₁." }
    ],
    knowns: [
      { symbol: "n₁", value: "1.33", unit: "", description: "refractive index of water" },
      { symbol: "n₂", value: "1.50", unit: "", description: "refractive index of glass" },
      { symbol: "v₁", value: "2.26 × 10⁸", unit: "m s⁻¹", description: "speed in water" },
      { symbol: "θ₁", value: "30", unit: "°", description: "angle of incidence" }
    ],
    unknowns: [
      { symbol: "θ₂", unit: "°", description: "angle of refraction" },
      { symbol: "v₂", unit: "m s⁻¹", description: "speed in glass" }
    ],
    acceptedSolutions: [
      ["C3_1"]
    ],
    requiredConstants: [],
    hints: [
      "Use Snell's law: n₁sinθ₁ = n₂sinθ₂ for the angle.",
      "sinθ₂ = (1.33/1.50) × sin30° = 0.887 × 0.50 = 0.443. θ₂ = sin⁻¹(0.443) ≈ 26°.",
      "v₂/v₁ = n₁/n₂, so v₂ = v₁ × (n₁/n₂) = 2.26×10⁸ × (1.33/1.50) ≈ 2.00 × 10⁸ m s⁻¹."
    ],
    explanation: "Snell's law: \\(\\sin\\theta_2 = \\frac{n_1}{n_2}\\sin\\theta_1 = \\frac{1.33}{1.50} \\times \\sin 30° = 0.887 \\times 0.50 = 0.443\\). So \\(\\theta_2 \\approx 26°\\). Speed: \\(v_2 = v_1 \\times \\frac{n_1}{n_2} = 2.26 \\times 10^8 \\times 0.887 \\approx 2.00 \\times 10^8\\) m s\\(^{-1}\\)."
  },

  {
    id: "C3_L2_03",
    text: "If the {{slit separation}} in a double slit experiment is {{halved}} and the {{screen distance}} is {{doubled}}, by what factor does the {{fringe spacing}} change?",
    topic: "C",
    subtopic: "C3",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "slit separation", tip: "d, the distance between the two slits." },
      { phrase: "halved", tip: "d₂ = d₁/2." },
      { phrase: "screen distance", tip: "D, the distance from slits to screen." },
      { phrase: "doubled", tip: "D₂ = 2D₁." },
      { phrase: "fringe spacing", tip: "s = λD/d." }
    ],
    knowns: [
      { symbol: "d₂", value: "d₁/2", unit: "", description: "slit separation halved" },
      { symbol: "D₂", value: "2D₁", unit: "", description: "screen distance doubled" }
    ],
    unknowns: [
      { symbol: "s₂/s₁", unit: "", description: "factor change in fringe spacing" }
    ],
    acceptedSolutions: [
      ["C3_2"]
    ],
    requiredConstants: [],
    hints: [
      "Write s = λD/d and consider how s changes when d and D change.",
      "s ∝ D/d (λ is constant). If D doubles and d halves, the ratio D/d increases by factor 2 × 2 = 4.",
      "The fringe spacing increases by a factor of 4."
    ],
    explanation: "From \\(s = \\frac{\\lambda D}{d}\\), \\(s \\propto \\frac{D}{d}\\). With \\(D_2 = 2D_1\\) and \\(d_2 = \\frac{d_1}{2}\\): \\(s_2 = \\frac{\\lambda \\times 2D_1}{d_1/2} = 4 \\times \\frac{\\lambda D_1}{d_1} = 4s_1\\). The fringe spacing increases by a factor of 4."
  },

  // ===========================================================
  // C3 WAVE PHENOMENA (HL) — LEVEL 1 (1 question: C3_L1_03)
  // ===========================================================

  {
    id: "C3_L1_03",
    text: "Light of {{wavelength}} {{650 nm}} passes through a {{diffraction grating}} with {{600 lines per mm}}. Calculate the {{angle}} of the {{first-order maximum}}.",
    topic: "C",
    subtopic: "C3",
    level: 1,
    slhl: "HL",
    tooltips: [
      { phrase: "wavelength", tip: "λ = 650 nm = 650 × 10⁻⁹ m." },
      { phrase: "650 nm", tip: "λ = 650 × 10⁻⁹ m." },
      { phrase: "diffraction grating", tip: "A surface with many equally spaced slits." },
      { phrase: "600 lines per mm", tip: "The grating spacing d = 1/600 mm = 1.67 × 10⁻⁶ m." },
      { phrase: "angle", tip: "θ, the angle at which a maximum is observed." },
      { phrase: "first-order maximum", tip: "n = 1 in the grating equation nλ = d sinθ." }
    ],
    knowns: [
      { symbol: "λ", value: "650 × 10⁻⁹", unit: "m", description: "wavelength" },
      { symbol: "d", value: "1.67 × 10⁻⁶", unit: "m", description: "grating spacing" },
      { symbol: "n", value: "1", unit: "", description: "order number" }
    ],
    unknowns: [
      { symbol: "θ", unit: "°", description: "angle of first-order maximum" }
    ],
    acceptedSolutions: [
      ["C3_4"]
    ],
    requiredConstants: [],
    hints: [
      "Use the diffraction grating equation: nλ = d sinθ.",
      "sinθ = nλ/d = (1 × 650×10⁻⁹)/(1.67×10⁻⁶).",
      "sinθ = 0.389. θ = sin⁻¹(0.389) ≈ 23°."
    ],
    explanation: "Using \\(n\\lambda = d\\sin\\theta\\): \\(\\sin\\theta = \\frac{n\\lambda}{d} = \\frac{1 \\times 650 \\times 10^{-9}}{1.67 \\times 10^{-6}} = 0.389\\). So \\(\\theta = \\sin^{-1}(0.389) \\approx 23°\\)."
  },

  // ===========================================================
  // C3 WAVE PHENOMENA (HL) — LEVEL 2 (2 questions: C3_L2_04 to C3_L2_05)
  // ===========================================================

  {
    id: "C3_L2_04",
    text: "Monochromatic light passes through a {{single slit}} of width {{0.10 mm}} and the {{first minimum}} is observed at an angle of {{0.35°}}. Calculate the {{wavelength}} of the light and its {{frequency}}.",
    topic: "C",
    subtopic: "C3",
    level: 2,
    slhl: "HL",
    tooltips: [
      { phrase: "single slit", tip: "Diffraction through a single narrow opening." },
      { phrase: "0.10 mm", tip: "b = 0.10 mm = 1.0 × 10⁻⁴ m, the slit width." },
      { phrase: "first minimum", tip: "The first dark fringe, where θ ≈ λ/b for small angles." },
      { phrase: "0.35°", tip: "θ = 0.35° ≈ 6.11 × 10⁻³ rad." },
      { phrase: "wavelength", tip: "λ of the light." },
      { phrase: "frequency", tip: "f = c/λ." }
    ],
    knowns: [
      { symbol: "b", value: "1.0 × 10⁻⁴", unit: "m", description: "slit width" },
      { symbol: "θ", value: "0.35", unit: "°", description: "angle of first minimum" },
      { symbol: "c", value: "3.0 × 10⁸", unit: "m s⁻¹", description: "speed of light" }
    ],
    unknowns: [
      { symbol: "λ", unit: "m", description: "wavelength" },
      { symbol: "f", unit: "Hz", description: "frequency" }
    ],
    acceptedSolutions: [
      ["C3_3", "C2_1", "CONST_c"]
    ],
    requiredConstants: ["CONST_c"],
    hints: [
      "For small angles, θ ≈ λ/b for the first minimum. Convert θ to radians.",
      "θ = 0.35° = 6.11 × 10⁻³ rad. λ = θb = 6.11×10⁻³ × 1.0×10⁻⁴ = 6.1 × 10⁻⁷ m ≈ 610 nm.",
      "f = c/λ = 3.0×10⁸/(6.1×10⁻⁷) ≈ 4.9 × 10¹⁴ Hz."
    ],
    explanation: "Converting: \\(\\theta = 0.35° = 6.11 \\times 10^{-3}\\) rad. Using \\(\\theta = \\frac{\\lambda}{b}\\): \\(\\lambda = \\theta b = 6.11 \\times 10^{-3} \\times 1.0 \\times 10^{-4} = 6.1 \\times 10^{-7}\\) m \\(\\approx 610\\) nm. Frequency: \\(f = \\frac{c}{\\lambda} = \\frac{3.0 \\times 10^8}{6.1 \\times 10^{-7}} \\approx 4.9 \\times 10^{14}\\) Hz."
  },

  {
    id: "C3_L2_05",
    text: "A {{diffraction grating}} with {{500 lines per mm}} is illuminated with light of {{frequency}} {{6.0 × 10¹⁴ Hz}}. Determine the {{angle}} of the {{second-order maximum}}.",
    topic: "C",
    subtopic: "C3",
    level: 2,
    slhl: "HL",
    tooltips: [
      { phrase: "diffraction grating", tip: "A surface with many equally spaced slits." },
      { phrase: "500 lines per mm", tip: "d = 1/500 mm = 2.0 × 10⁻⁶ m." },
      { phrase: "frequency", tip: "f = 6.0 × 10¹⁴ Hz." },
      { phrase: "6.0 × 10¹⁴ Hz", tip: "f = 6.0 × 10¹⁴ Hz." },
      { phrase: "angle", tip: "θ, the diffraction angle." },
      { phrase: "second-order maximum", tip: "n = 2 in the grating equation." }
    ],
    knowns: [
      { symbol: "N", value: "500", unit: "lines per mm", description: "grating line density" },
      { symbol: "f", value: "6.0 × 10¹⁴", unit: "Hz", description: "frequency" },
      { symbol: "n", value: "2", unit: "", description: "order number" },
      { symbol: "c", value: "3.0 × 10⁸", unit: "m s⁻¹", description: "speed of light" }
    ],
    unknowns: [
      { symbol: "θ", unit: "°", description: "angle of second-order maximum" }
    ],
    acceptedSolutions: [
      ["C2_1", "C3_4", "CONST_c"]
    ],
    requiredConstants: ["CONST_c"],
    hints: [
      "Find λ from c = fλ, then find d from the line density, then use nλ = d sinθ.",
      "λ = c/f = 3.0×10⁸/(6.0×10¹⁴) = 5.0 × 10⁻⁷ m. d = 1/(500×10³) = 2.0 × 10⁻⁶ m.",
      "sinθ = nλ/d = 2 × 5.0×10⁻⁷/(2.0×10⁻⁶) = 0.50. θ = sin⁻¹(0.50) = 30°."
    ],
    explanation: "Wavelength: \\(\\lambda = \\frac{c}{f} = \\frac{3.0 \\times 10^8}{6.0 \\times 10^{14}} = 5.0 \\times 10^{-7}\\) m. Grating spacing: \\(d = \\frac{1}{500 \\times 10^3} = 2.0 \\times 10^{-6}\\) m. Using \\(n\\lambda = d\\sin\\theta\\): \\(\\sin\\theta = \\frac{2 \\times 5.0 \\times 10^{-7}}{2.0 \\times 10^{-6}} = 0.50\\). So \\(\\theta = 30°\\)."
  },

  // ===========================================================
  // C5 DOPPLER EFFECT (SL) — LEVEL 1 (1 question: C5_L1_01)
  // ===========================================================

  {
    id: "C5_L1_01",
    text: "A distant {{galaxy}} is observed to have a {{redshift}} such that {{Δλ/λ = 0.020}}. Estimate the {{speed}} at which the galaxy is {{receding}} from Earth.",
    topic: "C",
    subtopic: "C5",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "galaxy", tip: "A distant astronomical object moving away from us." },
      { phrase: "redshift", tip: "The increase in wavelength due to the source moving away." },
      { phrase: "Δλ/λ = 0.020", tip: "The fractional change in wavelength." },
      { phrase: "speed", tip: "The recession speed v of the galaxy." },
      { phrase: "receding", tip: "Moving away, causing a redshift." }
    ],
    knowns: [
      { symbol: "Δλ/λ", value: "0.020", unit: "", description: "fractional wavelength shift" },
      { symbol: "c", value: "3.0 × 10⁸", unit: "m s⁻¹", description: "speed of light" }
    ],
    unknowns: [
      { symbol: "v", unit: "m s⁻¹", description: "recession speed" }
    ],
    acceptedSolutions: [
      ["C5_1", "CONST_c"]
    ],
    requiredConstants: ["CONST_c"],
    hints: [
      "For low speeds, Δλ/λ ≈ v/c.",
      "Rearrange to find v = c × Δλ/λ.",
      "v = 3.0×10⁸ × 0.020 = 6.0 × 10⁶ m s⁻¹."
    ],
    explanation: "Using \\(\\frac{\\Delta\\lambda}{\\lambda} \\approx \\frac{v}{c}\\): \\(v = c \\times \\frac{\\Delta\\lambda}{\\lambda} = 3.0 \\times 10^8 \\times 0.020 = 6.0 \\times 10^6\\) m s\\(^{-1}\\)."
  },

  // ===========================================================
  // C5 DOPPLER EFFECT (SL) — LEVEL 2 (2 questions: C5_L2_01 to C5_L2_02)
  // ===========================================================

  {
    id: "C5_L2_01",
    text: "A star emits light at a {{rest wavelength}} of {{656 nm}}. An observer measures the wavelength to be {{660 nm}}. Calculate the {{speed}} of the star relative to the observer, and state the {{direction}} of motion.",
    topic: "C",
    subtopic: "C5",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "rest wavelength", tip: "λ₀ = 656 nm, the wavelength if the source were stationary." },
      { phrase: "656 nm", tip: "λ₀ = 656 nm." },
      { phrase: "660 nm", tip: "The observed wavelength λ = 660 nm." },
      { phrase: "speed", tip: "v, the speed of the star relative to the observer." },
      { phrase: "direction", tip: "Whether the star is approaching or receding." }
    ],
    knowns: [
      { symbol: "λ₀", value: "656", unit: "nm", description: "rest wavelength" },
      { symbol: "λ", value: "660", unit: "nm", description: "observed wavelength" },
      { symbol: "c", value: "3.0 × 10⁸", unit: "m s⁻¹", description: "speed of light" }
    ],
    unknowns: [
      { symbol: "v", unit: "m s⁻¹", description: "speed of star" },
      { symbol: "direction", unit: "", description: "approaching or receding" }
    ],
    acceptedSolutions: [
      ["C5_1", "CONST_c"]
    ],
    requiredConstants: ["CONST_c"],
    hints: [
      "Find Δλ = λ - λ₀. Is the wavelength increasing or decreasing?",
      "Δλ = 660 - 656 = 4 nm. The wavelength increased (redshift), so the star is receding. Use Δλ/λ ≈ v/c.",
      "v = c × Δλ/λ₀ = 3.0×10⁸ × 4/656 ≈ 1.83 × 10⁶ m s⁻¹."
    ],
    explanation: "\\(\\Delta\\lambda = 660 - 656 = 4\\) nm (increase = redshift, star is receding). Using \\(\\frac{\\Delta\\lambda}{\\lambda} \\approx \\frac{v}{c}\\): \\(v = c \\times \\frac{\\Delta\\lambda}{\\lambda_0} = 3.0 \\times 10^8 \\times \\frac{4}{656} \\approx 1.83 \\times 10^6\\) m s\\(^{-1}\\). The star is moving away from the observer."
  },

  {
    id: "C5_L2_02",
    text: "A galaxy is {{receding}} at {{v = 1.5 × 10⁷ m s⁻¹}}. It emits light with a {{rest wavelength}} of {{500 nm}}. Calculate the {{observed wavelength}} and the {{observed frequency}}.",
    topic: "C",
    subtopic: "C5",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "receding", tip: "Moving away, causing a redshift (increase in wavelength)." },
      { phrase: "v = 1.5 × 10⁷ m s⁻¹", tip: "The recession speed of the galaxy." },
      { phrase: "rest wavelength", tip: "λ₀ = 500 nm." },
      { phrase: "500 nm", tip: "λ₀ = 500 nm." },
      { phrase: "observed wavelength", tip: "The wavelength measured by the observer." },
      { phrase: "observed frequency", tip: "f = c/λ for the observed light." }
    ],
    knowns: [
      { symbol: "v", value: "1.5 × 10⁷", unit: "m s⁻¹", description: "recession speed" },
      { symbol: "λ₀", value: "500", unit: "nm", description: "rest wavelength" },
      { symbol: "c", value: "3.0 × 10⁸", unit: "m s⁻¹", description: "speed of light" }
    ],
    unknowns: [
      { symbol: "λ", unit: "nm", description: "observed wavelength" },
      { symbol: "f", unit: "Hz", description: "observed frequency" }
    ],
    acceptedSolutions: [
      ["C5_1", "C2_1", "CONST_c"]
    ],
    requiredConstants: ["CONST_c"],
    hints: [
      "Use Δλ/λ ≈ v/c to find Δλ, then add to λ₀ (redshift means λ increases).",
      "Δλ = λ₀ × v/c = 500 × (1.5×10⁷)/(3.0×10⁸) = 500 × 0.050 = 25 nm. λ = 525 nm.",
      "f = c/λ = 3.0×10⁸/(525×10⁻⁹) ≈ 5.71 × 10¹⁴ Hz."
    ],
    explanation: "\\(\\Delta\\lambda = \\lambda_0 \\times \\frac{v}{c} = 500 \\times \\frac{1.5 \\times 10^7}{3.0 \\times 10^8} = 500 \\times 0.050 = 25\\) nm. Observed wavelength: \\(\\lambda = 500 + 25 = 525\\) nm. Frequency: \\(f = \\frac{c}{\\lambda} = \\frac{3.0 \\times 10^8}{525 \\times 10^{-9}} \\approx 5.71 \\times 10^{14}\\) Hz."
  },

  // ===========================================================
  // C5 DOPPLER EFFECT (HL) — LEVEL 2 (2 questions: C5_L2_03 to C5_L2_04)
  // ===========================================================

  {
    id: "C5_L2_03",
    text: "An ambulance siren emits a sound at {{frequency}} {{800 Hz}}. The ambulance moves towards a {{stationary observer}} at {{25 m s⁻¹}}. The {{speed of sound}} is {{340 m s⁻¹}}. Calculate the {{observed frequency}} and the {{observed wavelength}}.",
    topic: "C",
    subtopic: "C5",
    level: 2,
    slhl: "HL",
    tooltips: [
      { phrase: "frequency", tip: "The frequency emitted by the source: f = 800 Hz." },
      { phrase: "800 Hz", tip: "f = 800 Hz." },
      { phrase: "stationary observer", tip: "The observer is not moving." },
      { phrase: "25 m s⁻¹", tip: "us = 25 m s⁻¹, the speed of the source." },
      { phrase: "speed of sound", tip: "v = 340 m s⁻¹." },
      { phrase: "340 m s⁻¹", tip: "v = 340 m s⁻¹." },
      { phrase: "observed frequency", tip: "f', the frequency heard by the observer." },
      { phrase: "observed wavelength", tip: "λ' = v/f', the wavelength measured by the observer." }
    ],
    knowns: [
      { symbol: "f", value: "800", unit: "Hz", description: "emitted frequency" },
      { symbol: "us", value: "25", unit: "m s⁻¹", description: "source speed" },
      { symbol: "v", value: "340", unit: "m s⁻¹", description: "speed of sound" }
    ],
    unknowns: [
      { symbol: "f'", unit: "Hz", description: "observed frequency" },
      { symbol: "λ'", unit: "m", description: "observed wavelength" }
    ],
    acceptedSolutions: [
      ["C5_2", "C2_1"]
    ],
    requiredConstants: [],
    hints: [
      "The source is moving towards the observer, so use f' = f(v/(v - us)).",
      "f' = 800 × (340/(340 - 25)) = 800 × (340/315) ≈ 863 Hz.",
      "λ' = v/f' = 340/863 ≈ 0.394 m."
    ],
    explanation: "Source approaching: \\(f' = f\\frac{v}{v - u_s} = 800 \\times \\frac{340}{340 - 25} = 800 \\times \\frac{340}{315} \\approx 863\\) Hz. Wavelength: \\(\\lambda' = \\frac{v}{f'} = \\frac{340}{863} \\approx 0.394\\) m."
  },

  {
    id: "C5_L2_04",
    text: "A {{police car}} with siren at {{1000 Hz}} is stationary. An observer in a car drives {{towards}} the police car at {{30 m s⁻¹}}. The {{speed of sound}} is {{340 m s⁻¹}}. Find the {{frequency}} heard by the moving observer and the {{apparent wavelength}}.",
    topic: "C",
    subtopic: "C5",
    level: 2,
    slhl: "HL",
    tooltips: [
      { phrase: "police car", tip: "The stationary source of sound." },
      { phrase: "1000 Hz", tip: "f = 1000 Hz, the emitted frequency." },
      { phrase: "towards", tip: "The observer moves towards the source." },
      { phrase: "30 m s⁻¹", tip: "uo = 30 m s⁻¹, the observer's speed." },
      { phrase: "speed of sound", tip: "v = 340 m s⁻¹." },
      { phrase: "340 m s⁻¹", tip: "v = 340 m s⁻¹." },
      { phrase: "frequency", tip: "f', the frequency heard by the moving observer." },
      { phrase: "apparent wavelength", tip: "λ' = v/f', as perceived by the observer." }
    ],
    knowns: [
      { symbol: "f", value: "1000", unit: "Hz", description: "emitted frequency" },
      { symbol: "uo", value: "30", unit: "m s⁻¹", description: "observer speed" },
      { symbol: "v", value: "340", unit: "m s⁻¹", description: "speed of sound" }
    ],
    unknowns: [
      { symbol: "f'", unit: "Hz", description: "observed frequency" },
      { symbol: "λ'", unit: "m", description: "apparent wavelength" }
    ],
    acceptedSolutions: [
      ["C5_3", "C2_1"]
    ],
    requiredConstants: [],
    hints: [
      "Observer moving towards a stationary source: f' = f((v + uo)/v).",
      "f' = 1000 × ((340 + 30)/340) = 1000 × (370/340) ≈ 1088 Hz.",
      "λ' = v/f' = 340/1088 ≈ 0.31 m. Note: the actual wavelength in air is unchanged; the observer encounters crests more frequently."
    ],
    explanation: "Observer approaching: \\(f' = f\\frac{v + u_o}{v} = 1000 \\times \\frac{340 + 30}{340} = 1000 \\times \\frac{370}{340} \\approx 1088\\) Hz. The apparent wavelength: \\(\\lambda' = \\frac{v}{f'} = \\frac{340}{1088} \\approx 0.31\\) m. Note that the actual wavelength in the medium is \\(\\lambda = v/f = 0.34\\) m; the observer simply encounters wavefronts more frequently."
  },

  // ============================================================
  // TOPIC D: FIELDS (Batch 6 — 30 questions)
  // ============================================================

  // ===========================================================
  // D1 GRAVITATIONAL FIELDS — LEVEL 1 (SL: 2 questions)
  // ===========================================================

  {
    id: "D1_L1_01",
    text: "Two {{asteroids}} of masses {{4.0 × 10¹² kg}} and {{6.0 × 10¹² kg}} are separated by a distance of {{500 m}}. Calculate the {{gravitational force}} between them.",
    topic: "D",
    subtopic: "D1",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "asteroids", tip: "Treat each asteroid as a point mass." },
      { phrase: "4.0 × 10¹² kg", tip: "m₁ = 4.0 × 10¹² kg." },
      { phrase: "6.0 × 10¹² kg", tip: "m₂ = 6.0 × 10¹² kg." },
      { phrase: "500 m", tip: "r = 500 m, the centre-to-centre separation." },
      { phrase: "gravitational force", tip: "F, the attractive force between two masses." }
    ],
    knowns: [
      { symbol: "m₁", value: "4.0 × 10¹²", unit: "kg", description: "mass of first asteroid" },
      { symbol: "m₂", value: "6.0 × 10¹²", unit: "kg", description: "mass of second asteroid" },
      { symbol: "r", value: "500", unit: "m", description: "separation" }
    ],
    unknowns: [
      { symbol: "F", unit: "N", description: "gravitational force" }
    ],
    acceptedSolutions: [
      ["D1_1", "CONST_G"]
    ],
    requiredConstants: ["CONST_G"],
    hints: [
      "You have two masses and a separation — which formula links force, mass, and distance?",
      "Newton's law of universal gravitation: F = Gm₁m₂/r².",
      "F = (6.67 × 10⁻¹¹ × 4.0 × 10¹² × 6.0 × 10¹²) / 500². Don't forget to square r."
    ],
    explanation: "Using \\(F = \\frac{Gm_1 m_2}{r^2}\\): \\(F = \\frac{6.67 \\times 10^{-11} \\times 4.0 \\times 10^{12} \\times 6.0 \\times 10^{12}}{500^2} = \\frac{1.60 \\times 10^{15}}{2.5 \\times 10^5} = 6.4 \\times 10^{9}\\) N ≈ 6.4 GN."
  },

  {
    id: "D1_L1_02",
    text: "The {{gravitational field strength}} at the surface of {{Mars}} is needed. Mars has mass {{6.42 × 10²³ kg}} and radius {{3.39 × 10⁶ m}}. Calculate {{g}} at the surface.",
    topic: "D",
    subtopic: "D1",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "gravitational field strength", tip: "g = GM/r², the gravitational field strength at a point." },
      { phrase: "Mars", tip: "A planet with known mass and radius." },
      { phrase: "6.42 × 10²³ kg", tip: "M = 6.42 × 10²³ kg, the mass of Mars." },
      { phrase: "3.39 × 10⁶ m", tip: "r = 3.39 × 10⁶ m, the radius of Mars." },
      { phrase: "g", tip: "Gravitational field strength at the surface, in N kg⁻¹ or m s⁻²." }
    ],
    knowns: [
      { symbol: "M", value: "6.42 × 10²³", unit: "kg", description: "mass of Mars" },
      { symbol: "r", value: "3.39 × 10⁶", unit: "m", description: "radius of Mars" }
    ],
    unknowns: [
      { symbol: "g", unit: "N kg⁻¹", description: "gravitational field strength at surface" }
    ],
    acceptedSolutions: [
      ["D1_2", "CONST_G"]
    ],
    requiredConstants: ["CONST_G"],
    hints: [
      "You know the mass and radius of Mars — which formula gives field strength from these?",
      "Use g = GM/r². Remember to square the radius.",
      "g = (6.67 × 10⁻¹¹ × 6.42 × 10²³) / (3.39 × 10⁶)²."
    ],
    explanation: "Using \\(g = \\frac{GM}{r^2}\\): \\(g = \\frac{6.67 \\times 10^{-11} \\times 6.42 \\times 10^{23}}{(3.39 \\times 10^6)^2} = \\frac{4.28 \\times 10^{13}}{1.15 \\times 10^{13}} \\approx 3.7\\) N kg\\(^{-1}\\)."
  },

  // ===========================================================
  // D1 GRAVITATIONAL FIELDS — LEVEL 1 (HL: 2 questions)
  // ===========================================================

  {
    id: "D1_L1_03",
    text: "Calculate the {{gravitational potential}} at a height of {{400 km}} above the Earth's surface. Earth's mass is {{5.97 × 10²⁴ kg}} and radius is {{6.37 × 10⁶ m}}.",
    topic: "D",
    subtopic: "D1",
    level: 1,
    slhl: "HL",
    tooltips: [
      { phrase: "gravitational potential", tip: "Vg = −GM/r, the work done per unit mass to bring a mass from infinity." },
      { phrase: "400 km", tip: "h = 400 km = 4.00 × 10⁵ m above the surface." },
      { phrase: "5.97 × 10²⁴ kg", tip: "M = 5.97 × 10²⁴ kg, mass of Earth." },
      { phrase: "6.37 × 10⁶ m", tip: "R = 6.37 × 10⁶ m, radius of Earth." }
    ],
    knowns: [
      { symbol: "M", value: "5.97 × 10²⁴", unit: "kg", description: "mass of Earth" },
      { symbol: "R", value: "6.37 × 10⁶", unit: "m", description: "radius of Earth" },
      { symbol: "h", value: "4.00 × 10⁵", unit: "m", description: "height above surface" }
    ],
    unknowns: [
      { symbol: "Vg", unit: "J kg⁻¹", description: "gravitational potential" }
    ],
    acceptedSolutions: [
      ["D1_4", "CONST_G"]
    ],
    requiredConstants: ["CONST_G"],
    hints: [
      "Gravitational potential: Vg = −GM/r. What is r here?",
      "r is the distance from the centre of the Earth: r = R + h = 6.37 × 10⁶ + 4.00 × 10⁵.",
      "Vg = −(6.67 × 10⁻¹¹ × 5.97 × 10²⁴) / (6.77 × 10⁶). The answer should be negative."
    ],
    explanation: "The distance from Earth's centre is \\(r = R + h = 6.37 \\times 10^6 + 4.00 \\times 10^5 = 6.77 \\times 10^6\\) m. Using \\(V_g = -\\frac{GM}{r}\\): \\(V_g = -\\frac{6.67 \\times 10^{-11} \\times 5.97 \\times 10^{24}}{6.77 \\times 10^6} \\approx -5.88 \\times 10^7\\) J kg\\(^{-1}\\)."
  },

  {
    id: "D1_L1_04",
    text: "Calculate the {{escape velocity}} from the surface of the {{Moon}}. The Moon has mass {{7.35 × 10²² kg}} and radius {{1.74 × 10⁶ m}}.",
    topic: "D",
    subtopic: "D1",
    level: 1,
    slhl: "HL",
    tooltips: [
      { phrase: "escape velocity", tip: "v_esc = √(2GM/r), the minimum speed to escape a gravitational field." },
      { phrase: "Moon", tip: "The Earth's natural satellite." },
      { phrase: "7.35 × 10²² kg", tip: "M = 7.35 × 10²² kg, mass of the Moon." },
      { phrase: "1.74 × 10⁶ m", tip: "r = 1.74 × 10⁶ m, radius of the Moon." }
    ],
    knowns: [
      { symbol: "M", value: "7.35 × 10²²", unit: "kg", description: "mass of Moon" },
      { symbol: "r", value: "1.74 × 10⁶", unit: "m", description: "radius of Moon" }
    ],
    unknowns: [
      { symbol: "v_esc", unit: "m s⁻¹", description: "escape velocity" }
    ],
    acceptedSolutions: [
      ["D1_6", "CONST_G"]
    ],
    requiredConstants: ["CONST_G"],
    hints: [
      "Escape velocity formula: v_esc = √(2GM/r).",
      "Substitute M and r for the Moon, and use G = 6.67 × 10⁻¹¹.",
      "v_esc = √(2 × 6.67 × 10⁻¹¹ × 7.35 × 10²² / 1.74 × 10⁶)."
    ],
    explanation: "Using \\(v_{esc} = \\sqrt{\\frac{2GM}{r}}\\): \\(v_{esc} = \\sqrt{\\frac{2 \\times 6.67 \\times 10^{-11} \\times 7.35 \\times 10^{22}}{1.74 \\times 10^6}} = \\sqrt{\\frac{9.81 \\times 10^{12}}{1.74 \\times 10^6}} = \\sqrt{5.64 \\times 10^6} \\approx 2370\\) m s\\(^{-1}\\)."
  },

  // ===========================================================
  // D1 GRAVITATIONAL FIELDS — LEVEL 2 (SL: 3 questions)
  // ===========================================================

  {
    id: "D1_L2_01",
    text: "A {{satellite}} orbits Earth at an altitude of {{2000 km}} above the surface. Earth's mass is {{5.97 × 10²⁴ kg}} and radius is {{6.37 × 10⁶ m}}. Calculate the satellite's {{orbital speed}} and {{orbital period}}.",
    topic: "D",
    subtopic: "D1",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "satellite", tip: "An object in circular orbit around Earth." },
      { phrase: "2000 km", tip: "h = 2000 km = 2.00 × 10⁶ m above the surface." },
      { phrase: "5.97 × 10²⁴ kg", tip: "M = 5.97 × 10²⁴ kg, mass of Earth." },
      { phrase: "6.37 × 10⁶ m", tip: "R = 6.37 × 10⁶ m, radius of Earth." },
      { phrase: "orbital speed", tip: "v, the speed of the satellite in its circular orbit." },
      { phrase: "orbital period", tip: "T, the time to complete one full orbit." }
    ],
    knowns: [
      { symbol: "M", value: "5.97 × 10²⁴", unit: "kg", description: "mass of Earth" },
      { symbol: "R", value: "6.37 × 10⁶", unit: "m", description: "radius of Earth" },
      { symbol: "h", value: "2.00 × 10⁶", unit: "m", description: "altitude above surface" }
    ],
    unknowns: [
      { symbol: "v", unit: "m s⁻¹", description: "orbital speed" },
      { symbol: "T", unit: "s", description: "orbital period" }
    ],
    acceptedSolutions: [
      ["D1_1", "A2_9", "A2_10", "A2_11", "CONST_G"],
      ["D1_2", "A2_10", "A2_11", "CONST_G"]
    ],
    requiredConstants: ["CONST_G"],
    hints: [
      "First find the orbital radius: r = R + h. Then equate gravitational force to centripetal force.",
      "GMm/r² = mv²/r gives v = √(GM/r). Then use v = 2πr/T to find T.",
      "r = 8.37 × 10⁶ m. v = √(6.67 × 10⁻¹¹ × 5.97 × 10²⁴ / 8.37 × 10⁶) ≈ 6900 m s⁻¹. T = 2πr/v."
    ],
    explanation: "Orbital radius \\(r = R + h = 6.37 \\times 10^6 + 2.00 \\times 10^6 = 8.37 \\times 10^6\\) m. Setting gravitational force equal to centripetal force: \\(\\frac{GMm}{r^2} = \\frac{mv^2}{r}\\), so \\(v = \\sqrt{\\frac{GM}{r}} = \\sqrt{\\frac{6.67 \\times 10^{-11} \\times 5.97 \\times 10^{24}}{8.37 \\times 10^6}} \\approx 6900\\) m s\\(^{-1}\\). Period: \\(T = \\frac{2\\pi r}{v} = \\frac{2\\pi \\times 8.37 \\times 10^6}{6900} \\approx 7620\\) s ≈ 2.1 hours."
  },

  {
    id: "D1_L2_02",
    text: "If the {{mass}} of a planet is {{doubled}} while its {{radius}} stays the same, how does the {{gravitational field strength}} at the surface change? How does the {{escape velocity}} change? (Proportional reasoning.)",
    topic: "D",
    subtopic: "D1",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "mass", tip: "M, the mass of the planet." },
      { phrase: "doubled", tip: "The new mass is 2M." },
      { phrase: "radius", tip: "r, the radius of the planet, unchanged." },
      { phrase: "gravitational field strength", tip: "g = GM/r²." },
      { phrase: "escape velocity", tip: "v_esc = √(2GM/r)." }
    ],
    knowns: [
      { symbol: "M", value: "2M", unit: "", description: "mass is doubled" },
      { symbol: "r", value: "r", unit: "", description: "radius unchanged" }
    ],
    unknowns: [
      { symbol: "g", unit: "", description: "factor change in gravitational field strength" },
      { symbol: "v_esc", unit: "", description: "factor change in escape velocity" }
    ],
    acceptedSolutions: [
      ["D1_2", "D1_6", "CONST_G"]
    ],
    requiredConstants: ["CONST_G"],
    hints: [
      "Write g = GM/r² and v_esc = √(2GM/r). What happens when M → 2M?",
      "g is directly proportional to M, so g doubles. For v_esc, it depends on √M.",
      "g → 2g. v_esc → √2 × v_esc ≈ 1.41 × v_esc."
    ],
    explanation: "From \\(g = \\frac{GM}{r^2}\\), since \\(g \\propto M\\), doubling M doubles g. From \\(v_{esc} = \\sqrt{\\frac{2GM}{r}}\\), since \\(v_{esc} \\propto \\sqrt{M}\\), doubling M multiplies \\(v_{esc}\\) by \\(\\sqrt{2} \\approx 1.41\\)."
  },

  {
    id: "D1_L2_03",
    text: "A {{meteor}} of mass {{50 kg}} falls from a great height towards Earth. At a distance of {{3R}} from Earth's centre it has negligible speed. Find its {{speed}} when it reaches a distance of {{R}} from the centre. Earth's mass is {{5.97 × 10²⁴ kg}} and R = {{6.37 × 10⁶ m}}. Use {{energy conservation}}.",
    topic: "D",
    subtopic: "D1",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "meteor", tip: "A small body falling in Earth's gravitational field." },
      { phrase: "50 kg", tip: "m = 50 kg, the mass of the meteor." },
      { phrase: "3R", tip: "Initial distance from Earth's centre: 3 × 6.37 × 10⁶ m." },
      { phrase: "R", tip: "R = 6.37 × 10⁶ m, radius of Earth." },
      { phrase: "speed", tip: "v, the speed of the meteor at distance R." },
      { phrase: "5.97 × 10²⁴ kg", tip: "M = 5.97 × 10²⁴ kg, mass of Earth." },
      { phrase: "6.37 × 10⁶ m", tip: "R = 6.37 × 10⁶ m." },
      { phrase: "energy conservation", tip: "Total energy is conserved: Ek + Ep = constant." }
    ],
    knowns: [
      { symbol: "m", value: "50", unit: "kg", description: "mass of meteor" },
      { symbol: "M", value: "5.97 × 10²⁴", unit: "kg", description: "mass of Earth" },
      { symbol: "R", value: "6.37 × 10⁶", unit: "m", description: "radius of Earth" },
      { symbol: "r₁", value: "3R", unit: "m", description: "initial distance from centre" },
      { symbol: "v₁", value: "≈ 0", unit: "m s⁻¹", description: "initial speed (negligible)" }
    ],
    unknowns: [
      { symbol: "v₂", unit: "m s⁻¹", description: "speed at distance R from centre" }
    ],
    acceptedSolutions: [
      ["D1_1", "A3_2", "A3_1", "CONST_G"],
      ["D1_2", "A1_4", "CONST_G", "CONST_g"]
    ],
    requiredConstants: ["CONST_G"],
    hints: [
      "Use energy conservation: the loss in gravitational PE equals the gain in kinetic energy.",
      "−GMm/R − (−GMm/3R) = ½mv². Simplify the left side.",
      "½mv² = GMm(1/R − 1/3R) = GMm × 2/(3R). Solve for v."
    ],
    explanation: "By conservation of energy: \\(\\frac{1}{2}mv^2 = -\\frac{GMm}{R} - \\left(-\\frac{GMm}{3R}\\right) = GMm\\left(\\frac{1}{R} - \\frac{1}{3R}\\right) = \\frac{2GMm}{3R}\\). So \\(v = \\sqrt{\\frac{4GM}{3R}} = \\sqrt{\\frac{4 \\times 6.67 \\times 10^{-11} \\times 5.97 \\times 10^{24}}{3 \\times 6.37 \\times 10^6}} \\approx 9140\\) m s\\(^{-1}\\)."
  },

  // ===========================================================
  // D1 GRAVITATIONAL FIELDS — LEVEL 2 (HL: 4 questions)
  // ===========================================================

  {
    id: "D1_L2_04",
    text: "Two points A and B are at distances {{2R}} and {{5R}} from the centre of a planet of mass {{M}}. Using the {{gravitational potential}}, find an expression for the {{work done per unit mass}} to move an object from A to B.",
    topic: "D",
    subtopic: "D1",
    level: 2,
    slhl: "HL",
    tooltips: [
      { phrase: "2R", tip: "Distance of point A from the centre." },
      { phrase: "5R", tip: "Distance of point B from the centre." },
      { phrase: "M", tip: "Mass of the planet." },
      { phrase: "gravitational potential", tip: "Vg = −GM/r." },
      { phrase: "work done per unit mass", tip: "W/m = ΔVg = Vg(B) − Vg(A)." }
    ],
    knowns: [
      { symbol: "rA", value: "2R", unit: "", description: "distance of A from centre" },
      { symbol: "rB", value: "5R", unit: "", description: "distance of B from centre" }
    ],
    unknowns: [
      { symbol: "W/m", unit: "J kg⁻¹", description: "work done per unit mass from A to B" }
    ],
    acceptedSolutions: [
      ["D1_4", "CONST_G"]
    ],
    requiredConstants: ["CONST_G"],
    hints: [
      "Find Vg at A and Vg at B using Vg = −GM/r.",
      "W/m = ΔVg = Vg(B) − Vg(A) = (−GM/5R) − (−GM/2R).",
      "W/m = GM(1/2R − 1/5R) = GM × 3/(10R) = 3GM/(10R)."
    ],
    explanation: "\\(V_g(A) = -\\frac{GM}{2R}\\), \\(V_g(B) = -\\frac{GM}{5R}\\). Work per unit mass: \\(\\Delta V_g = V_g(B) - V_g(A) = -\\frac{GM}{5R} + \\frac{GM}{2R} = GM\\left(\\frac{1}{2R} - \\frac{1}{5R}\\right) = \\frac{3GM}{10R}\\). Positive, meaning energy must be supplied to move outward."
  },

  {
    id: "D1_L2_05",
    text: "The {{gravitational field strength}} at the surface of a planet is {{25 N kg⁻¹}}. The planet has radius {{8.0 × 10⁶ m}}. Determine the {{gravitational potential}} at the planet's surface using the relationship between {{field}} and {{potential}}.",
    topic: "D",
    subtopic: "D1",
    level: 2,
    slhl: "HL",
    tooltips: [
      { phrase: "gravitational field strength", tip: "g = GM/r², given as 25 N kg⁻¹." },
      { phrase: "25 N kg⁻¹", tip: "g = 25 N kg⁻¹ at the surface." },
      { phrase: "8.0 × 10⁶ m", tip: "r = 8.0 × 10⁶ m, the radius of the planet." },
      { phrase: "gravitational potential", tip: "Vg = −GM/r." },
      { phrase: "field", tip: "g = GM/r²." },
      { phrase: "potential", tip: "Vg = −GM/r. Note that g = −ΔVg/Δr." }
    ],
    knowns: [
      { symbol: "g", value: "25", unit: "N kg⁻¹", description: "gravitational field strength at surface" },
      { symbol: "r", value: "8.0 × 10⁶", unit: "m", description: "radius of planet" }
    ],
    unknowns: [
      { symbol: "Vg", unit: "J kg⁻¹", description: "gravitational potential at surface" }
    ],
    acceptedSolutions: [
      ["D1_2", "D1_4"],
      ["D1_5", "D1_4"]
    ],
    requiredConstants: [],
    hints: [
      "From g = GM/r², you can find GM. Then use Vg = −GM/r.",
      "GM = g × r² = 25 × (8.0 × 10⁶)².",
      "Vg = −GM/r = −g × r = −25 × 8.0 × 10⁶ = −2.0 × 10⁸ J kg⁻¹."
    ],
    explanation: "From \\(g = \\frac{GM}{r^2}\\), we get \\(GM = gr^2\\). Then \\(V_g = -\\frac{GM}{r} = -\\frac{gr^2}{r} = -gr = -25 \\times 8.0 \\times 10^6 = -2.0 \\times 10^8\\) J kg\\(^{-1}\\)."
  },

  {
    id: "D1_L2_06",
    text: "A {{spacecraft}} of mass {{1200 kg}} is in a circular orbit at a height where g = {{4.5 N kg⁻¹}}. Calculate the {{orbital velocity}} and the {{gravitational PE}} relative to infinity, given that the orbital radius is {{8.0 × 10⁶ m}}.",
    topic: "D",
    subtopic: "D1",
    level: 2,
    slhl: "HL",
    tooltips: [
      { phrase: "spacecraft", tip: "An object orbiting in a circular path." },
      { phrase: "1200 kg", tip: "m = 1200 kg, mass of the spacecraft." },
      { phrase: "4.5 N kg⁻¹", tip: "g = 4.5 N kg⁻¹ at the orbital radius." },
      { phrase: "orbital velocity", tip: "v, the speed of the spacecraft in orbit." },
      { phrase: "gravitational PE", tip: "Ep = −GMm/r, the gravitational potential energy." },
      { phrase: "8.0 × 10⁶ m", tip: "r = 8.0 × 10⁶ m, the orbital radius from Earth's centre." }
    ],
    knowns: [
      { symbol: "m", value: "1200", unit: "kg", description: "mass of spacecraft" },
      { symbol: "g", value: "4.5", unit: "N kg⁻¹", description: "gravitational field strength at orbit" },
      { symbol: "r", value: "8.0 × 10⁶", unit: "m", description: "orbital radius" }
    ],
    unknowns: [
      { symbol: "v", unit: "m s⁻¹", description: "orbital velocity" },
      { symbol: "Ep", unit: "J", description: "gravitational potential energy" }
    ],
    acceptedSolutions: [
      ["D1_2", "A2_10", "D1_3"],
      ["D1_7", "D1_3", "CONST_G"]
    ],
    requiredConstants: [],
    hints: [
      "At the orbital radius, gravitational acceleration provides centripetal acceleration: g = v²/r.",
      "v = √(gr) = √(4.5 × 8.0 × 10⁶). For PE, use Ep = −mgr (since g = GM/r², GM = gr²).",
      "v = √(3.6 × 10⁷) ≈ 6000 m s⁻¹. Ep = −GMm/r = −m × g × r = −1200 × 4.5 × 8.0 × 10⁶."
    ],
    explanation: "For circular orbit: \\(g = \\frac{v^2}{r}\\), so \\(v = \\sqrt{gr} = \\sqrt{4.5 \\times 8.0 \\times 10^6} = \\sqrt{3.6 \\times 10^7} \\approx 6000\\) m s\\(^{-1}\\). For GPE: \\(E_p = -\\frac{GMm}{r}\\). Since \\(GM = gr^2\\), \\(E_p = -mgr = -1200 \\times 4.5 \\times 8.0 \\times 10^6 = -4.32 \\times 10^{10}\\) J."
  },

  {
    id: "D1_L2_07",
    text: "Show that the {{orbital speed}} of a satellite is related to the {{escape velocity}} at the same radius by \\(v_{esc} = \\sqrt{2} \\, v_{orbital}\\). (Rearrangement / derivation.)",
    topic: "D",
    subtopic: "D1",
    level: 2,
    slhl: "HL",
    tooltips: [
      { phrase: "orbital speed", tip: "v_orbital = √(GM/r)." },
      { phrase: "escape velocity", tip: "v_esc = √(2GM/r)." }
    ],
    knowns: [
      { symbol: "v_orbital", value: "√(GM/r)", unit: "", description: "orbital speed formula" },
      { symbol: "v_esc", value: "√(2GM/r)", unit: "", description: "escape velocity formula" }
    ],
    unknowns: [
      { symbol: "ratio", unit: "", description: "relationship between v_esc and v_orbital" }
    ],
    acceptedSolutions: [
      ["D1_6", "D1_7"]
    ],
    requiredConstants: [],
    hints: [
      "Write out both formulas: v_orbital = √(GM/r) and v_esc = √(2GM/r).",
      "Divide v_esc by v_orbital: v_esc/v_orbital = √(2GM/r) / √(GM/r).",
      "v_esc/v_orbital = √(2GM/r × r/GM) = √2. Therefore v_esc = √2 × v_orbital."
    ],
    explanation: "\\(v_{orbital} = \\sqrt{\\frac{GM}{r}}\\) and \\(v_{esc} = \\sqrt{\\frac{2GM}{r}}\\). Dividing: \\(\\frac{v_{esc}}{v_{orbital}} = \\sqrt{\\frac{2GM/r}{GM/r}} = \\sqrt{2}\\). Hence \\(v_{esc} = \\sqrt{2}\\,v_{orbital}\\)."
  },

  // ===========================================================
  // D2 ELECTRIC AND MAGNETIC FIELDS — LEVEL 1 (SL: 2 questions)
  // ===========================================================

  {
    id: "D2_L1_01",
    text: "Two {{point charges}} of {{+3.0 μC}} and {{−5.0 μC}} are separated by {{0.20 m}}. Calculate the {{electrostatic force}} between them.",
    topic: "D",
    subtopic: "D2",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "point charges", tip: "Charges treated as having negligible size." },
      { phrase: "+3.0 μC", tip: "q₁ = +3.0 × 10⁻⁶ C." },
      { phrase: "−5.0 μC", tip: "q₂ = −5.0 × 10⁻⁶ C." },
      { phrase: "0.20 m", tip: "r = 0.20 m, the separation between charges." },
      { phrase: "electrostatic force", tip: "F, the Coulomb force between two point charges." }
    ],
    knowns: [
      { symbol: "q₁", value: "3.0 × 10⁻⁶", unit: "C", description: "first charge" },
      { symbol: "q₂", value: "5.0 × 10⁻⁶", unit: "C", description: "second charge (magnitude)" },
      { symbol: "r", value: "0.20", unit: "m", description: "separation" }
    ],
    unknowns: [
      { symbol: "F", unit: "N", description: "electrostatic force" }
    ],
    acceptedSolutions: [
      ["D2_1", "CONST_k"]
    ],
    requiredConstants: ["CONST_k"],
    hints: [
      "Two charges and a distance — which formula gives the force?",
      "Coulomb's law: F = kq₁q₂/r². Use magnitudes for the force calculation.",
      "F = (8.99 × 10⁹ × 3.0 × 10⁻⁶ × 5.0 × 10⁻⁶) / 0.20²."
    ],
    explanation: "Using Coulomb's law: \\(F = \\frac{kq_1 q_2}{r^2} = \\frac{8.99 \\times 10^9 \\times 3.0 \\times 10^{-6} \\times 5.0 \\times 10^{-6}}{0.20^2} = \\frac{0.1349}{0.04} \\approx 3.4\\) N. The force is attractive (opposite charges)."
  },

  {
    id: "D2_L1_02",
    text: "Two {{parallel plates}} are separated by {{5.0 mm}} and connected to a {{200 V}} power supply. Calculate the {{electric field strength}} between the plates.",
    topic: "D",
    subtopic: "D2",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "parallel plates", tip: "A pair of flat conducting plates creating a uniform electric field." },
      { phrase: "5.0 mm", tip: "d = 5.0 mm = 5.0 × 10⁻³ m, the plate separation." },
      { phrase: "200 V", tip: "V = 200 V, the potential difference between the plates." },
      { phrase: "electric field strength", tip: "E = V/d for a uniform field between parallel plates." }
    ],
    knowns: [
      { symbol: "V", value: "200", unit: "V", description: "potential difference" },
      { symbol: "d", value: "5.0 × 10⁻³", unit: "m", description: "plate separation" }
    ],
    unknowns: [
      { symbol: "E", unit: "V m⁻¹", description: "electric field strength" }
    ],
    acceptedSolutions: [
      ["D2_3"]
    ],
    requiredConstants: [],
    hints: [
      "For a uniform field between parallel plates, which formula relates E, V, and d?",
      "E = V/d. Remember to convert mm to m.",
      "E = 200 / (5.0 × 10⁻³) = 4.0 × 10⁴ V m⁻¹."
    ],
    explanation: "Using \\(E = \\frac{V}{d} = \\frac{200}{5.0 \\times 10^{-3}} = 4.0 \\times 10^4\\) V m\\(^{-1}\\) (or N C\\(^{-1}\\))."
  },

  // ===========================================================
  // D2 ELECTRIC AND MAGNETIC FIELDS — LEVEL 1 (HL: 1 question)
  // ===========================================================

  {
    id: "D2_L1_03",
    text: "Calculate the {{electric potential}} at a distance of {{0.30 m}} from a {{+8.0 μC}} point charge.",
    topic: "D",
    subtopic: "D2",
    level: 1,
    slhl: "HL",
    tooltips: [
      { phrase: "electric potential", tip: "Ve = kQ/r, the potential due to a point charge." },
      { phrase: "0.30 m", tip: "r = 0.30 m, the distance from the charge." },
      { phrase: "+8.0 μC", tip: "Q = +8.0 × 10⁻⁶ C." }
    ],
    knowns: [
      { symbol: "Q", value: "8.0 × 10⁻⁶", unit: "C", description: "point charge" },
      { symbol: "r", value: "0.30", unit: "m", description: "distance from charge" }
    ],
    unknowns: [
      { symbol: "Ve", unit: "V", description: "electric potential" }
    ],
    acceptedSolutions: [
      ["D2_5", "CONST_k"]
    ],
    requiredConstants: ["CONST_k"],
    hints: [
      "Electric potential due to a point charge: Ve = kQ/r.",
      "Substitute k = 8.99 × 10⁹, Q = 8.0 × 10⁻⁶ C, and r = 0.30 m.",
      "Ve = (8.99 × 10⁹ × 8.0 × 10⁻⁶) / 0.30."
    ],
    explanation: "Using \\(V_e = \\frac{kQ}{r} = \\frac{8.99 \\times 10^9 \\times 8.0 \\times 10^{-6}}{0.30} = \\frac{71920}{0.30} \\approx 2.4 \\times 10^5\\) V."
  },

  // ===========================================================
  // D2 ELECTRIC AND MAGNETIC FIELDS — LEVEL 2 (SL: 3 questions)
  // ===========================================================

  {
    id: "D2_L2_01",
    text: "An {{electron}} is accelerated from rest through a {{potential difference}} of {{500 V}} between two parallel plates. Calculate the {{final speed}} of the electron.",
    topic: "D",
    subtopic: "D2",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "electron", tip: "A charged particle with charge e = 1.60 × 10⁻¹⁹ C and mass mₑ = 9.11 × 10⁻³¹ kg." },
      { phrase: "potential difference", tip: "V = 500 V between the plates." },
      { phrase: "500 V", tip: "ΔV = 500 V." },
      { phrase: "final speed", tip: "v, the speed gained by the electron." }
    ],
    knowns: [
      { symbol: "ΔV", value: "500", unit: "V", description: "potential difference" },
      { symbol: "q", value: "1.60 × 10⁻¹⁹", unit: "C", description: "electron charge" },
      { symbol: "m", value: "9.11 × 10⁻³¹", unit: "kg", description: "electron mass" }
    ],
    unknowns: [
      { symbol: "v", unit: "m s⁻¹", description: "final speed of electron" }
    ],
    acceptedSolutions: [
      ["D2_7", "A3_2", "CONST_e", "CONST_me"],
      ["D2_3", "D2_2", "A2_9", "A1_4", "CONST_e", "CONST_me"]
    ],
    requiredConstants: ["CONST_e", "CONST_me"],
    hints: [
      "The work done on the electron by the electric field equals the kinetic energy gained.",
      "W = qΔV = ½mv². Rearrange for v.",
      "v = √(2qΔV/m) = √(2 × 1.60 × 10⁻¹⁹ × 500 / 9.11 × 10⁻³¹)."
    ],
    explanation: "Work done: \\(W = q\\Delta V = 1.60 \\times 10^{-19} \\times 500 = 8.0 \\times 10^{-17}\\) J. Setting equal to KE: \\(\\frac{1}{2}mv^2 = 8.0 \\times 10^{-17}\\). So \\(v = \\sqrt{\\frac{2 \\times 8.0 \\times 10^{-17}}{9.11 \\times 10^{-31}}} = \\sqrt{1.76 \\times 10^{14}} \\approx 1.33 \\times 10^7\\) m s\\(^{-1}\\)."
  },

  {
    id: "D2_L2_02",
    text: "Compare the {{gravitational force}} and the {{electrostatic force}} between a {{proton}} and an {{electron}} separated by {{5.3 × 10⁻¹¹ m}} (the Bohr radius). Calculate both forces and find their {{ratio}}.",
    topic: "D",
    subtopic: "D2",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "gravitational force", tip: "Fg = Gm₁m₂/r²." },
      { phrase: "electrostatic force", tip: "Fe = kq₁q₂/r²." },
      { phrase: "proton", tip: "mp = 1.67 × 10⁻²⁷ kg, charge = +e." },
      { phrase: "electron", tip: "me = 9.11 × 10⁻³¹ kg, charge = −e." },
      { phrase: "5.3 × 10⁻¹¹ m", tip: "r = 5.3 × 10⁻¹¹ m, approximate Bohr radius." },
      { phrase: "ratio", tip: "Fe/Fg, comparing the two forces." }
    ],
    knowns: [
      { symbol: "mp", value: "1.67 × 10⁻²⁷", unit: "kg", description: "proton mass" },
      { symbol: "me", value: "9.11 × 10⁻³¹", unit: "kg", description: "electron mass" },
      { symbol: "e", value: "1.60 × 10⁻¹⁹", unit: "C", description: "elementary charge" },
      { symbol: "r", value: "5.3 × 10⁻¹¹", unit: "m", description: "separation" }
    ],
    unknowns: [
      { symbol: "Fg", unit: "N", description: "gravitational force" },
      { symbol: "Fe", unit: "N", description: "electrostatic force" },
      { symbol: "Fe/Fg", unit: "", description: "ratio of forces" }
    ],
    acceptedSolutions: [
      ["D1_1", "D2_1", "CONST_G", "CONST_k", "CONST_e", "CONST_me", "CONST_mp"]
    ],
    requiredConstants: ["CONST_G", "CONST_k", "CONST_e", "CONST_me", "CONST_mp"],
    hints: [
      "Calculate both forces using F = Gm₁m₂/r² and F = kq₁q₂/r².",
      "Since both have 1/r², the ratio simplifies: Fe/Fg = ke²/(Gmpme).",
      "Fe/Fg = (8.99 × 10⁹ × (1.60 × 10⁻¹⁹)²) / (6.67 × 10⁻¹¹ × 1.67 × 10⁻²⁷ × 9.11 × 10⁻³¹)."
    ],
    explanation: "\\(F_e = \\frac{ke^2}{r^2} = \\frac{8.99 \\times 10^9 \\times (1.60 \\times 10^{-19})^2}{(5.3 \\times 10^{-11})^2} \\approx 8.2 \\times 10^{-8}\\) N. \\(F_g = \\frac{Gm_p m_e}{r^2} = \\frac{6.67 \\times 10^{-11} \\times 1.67 \\times 10^{-27} \\times 9.11 \\times 10^{-31}}{(5.3 \\times 10^{-11})^2} \\approx 3.6 \\times 10^{-47}\\) N. Ratio: \\(\\frac{F_e}{F_g} \\approx 2.3 \\times 10^{39}\\). The electrostatic force is enormously stronger."
  },

  {
    id: "D2_L2_03",
    text: "A {{proton}} is fired at a fixed {{gold nucleus}} (charge {{+79e}}). The proton approaches head-on with initial {{kinetic energy}} {{8.0 MeV}}. Find the {{distance of closest approach}}.",
    topic: "D",
    subtopic: "D2",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "proton", tip: "Charge +e = 1.60 × 10⁻¹⁹ C." },
      { phrase: "gold nucleus", tip: "A heavy, fixed nucleus with Z = 79." },
      { phrase: "+79e", tip: "Q = 79 × 1.60 × 10⁻¹⁹ C." },
      { phrase: "kinetic energy", tip: "The initial Ek of the proton." },
      { phrase: "8.0 MeV", tip: "Ek = 8.0 × 10⁶ × 1.60 × 10⁻¹⁹ J = 1.28 × 10⁻¹² J." },
      { phrase: "distance of closest approach", tip: "r_min, where all KE converts to electric PE." }
    ],
    knowns: [
      { symbol: "Ek", value: "8.0", unit: "MeV", description: "initial kinetic energy" },
      { symbol: "q₁", value: "1.60 × 10⁻¹⁹", unit: "C", description: "proton charge" },
      { symbol: "q₂", value: "79e", unit: "C", description: "gold nucleus charge" }
    ],
    unknowns: [
      { symbol: "r_min", unit: "m", description: "distance of closest approach" }
    ],
    acceptedSolutions: [
      ["D2_4", "A3_2", "CONST_k", "CONST_e"]
    ],
    requiredConstants: ["CONST_k", "CONST_e"],
    hints: [
      "At closest approach, all KE is converted to electric PE: Ek = kq₁q₂/r.",
      "Rearrange: r = kq₁q₂/Ek. Convert 8.0 MeV to joules first.",
      "r = (8.99 × 10⁹ × 79 × (1.60 × 10⁻¹⁹)²) / (1.28 × 10⁻¹²)."
    ],
    explanation: "Converting: \\(E_k = 8.0 \\times 10^6 \\times 1.60 \\times 10^{-19} = 1.28 \\times 10^{-12}\\) J. At closest approach: \\(E_k = \\frac{kq_1 q_2}{r}\\). So \\(r = \\frac{k \\times e \\times 79e}{E_k} = \\frac{8.99 \\times 10^9 \\times 79 \\times (1.60 \\times 10^{-19})^2}{1.28 \\times 10^{-12}} = \\frac{1.44 \\times 10^{-14}}{1} \\approx 1.4 \\times 10^{-14}\\) m."
  },

  // ===========================================================
  // D2 ELECTRIC AND MAGNETIC FIELDS — LEVEL 2 (HL: 3 questions)
  // ===========================================================

  {
    id: "D2_L2_04",
    text: "An electron orbits a {{hydrogen nucleus}} at the {{Bohr radius}} {{5.3 × 10⁻¹¹ m}}. By equating the {{Coulomb force}} to the {{centripetal force}}, calculate the electron's {{orbital speed}}.",
    topic: "D",
    subtopic: "D2",
    level: 2,
    slhl: "HL",
    tooltips: [
      { phrase: "hydrogen nucleus", tip: "A single proton with charge +e." },
      { phrase: "Bohr radius", tip: "The approximate radius of the first electron orbit in hydrogen." },
      { phrase: "5.3 × 10⁻¹¹ m", tip: "r = 5.3 × 10⁻¹¹ m." },
      { phrase: "Coulomb force", tip: "F = ke²/r²." },
      { phrase: "centripetal force", tip: "F = mv²/r." },
      { phrase: "orbital speed", tip: "v, the speed of the electron in its orbit." }
    ],
    knowns: [
      { symbol: "r", value: "5.3 × 10⁻¹¹", unit: "m", description: "Bohr radius" },
      { symbol: "e", value: "1.60 × 10⁻¹⁹", unit: "C", description: "elementary charge" },
      { symbol: "me", value: "9.11 × 10⁻³¹", unit: "kg", description: "electron mass" }
    ],
    unknowns: [
      { symbol: "v", unit: "m s⁻¹", description: "orbital speed of electron" }
    ],
    acceptedSolutions: [
      ["D2_1", "A2_10", "CONST_k", "CONST_e", "CONST_me"]
    ],
    requiredConstants: ["CONST_k", "CONST_e", "CONST_me"],
    hints: [
      "The Coulomb force provides the centripetal force: ke²/r² = mev²/r.",
      "Rearrange: v² = ke²/(me × r).",
      "v = √(8.99 × 10⁹ × (1.60 × 10⁻¹⁹)² / (9.11 × 10⁻³¹ × 5.3 × 10⁻¹¹))."
    ],
    explanation: "Setting \\(\\frac{ke^2}{r^2} = \\frac{m_e v^2}{r}\\), so \\(v^2 = \\frac{ke^2}{m_e r}\\). \\(v = \\sqrt{\\frac{8.99 \\times 10^9 \\times (1.60 \\times 10^{-19})^2}{9.11 \\times 10^{-31} \\times 5.3 \\times 10^{-11}}} = \\sqrt{\\frac{2.30 \\times 10^{-28}}{4.83 \\times 10^{-41}}} = \\sqrt{4.76 \\times 10^{12}} \\approx 2.18 \\times 10^6\\) m s\\(^{-1}\\)."
  },

  {
    id: "D2_L2_05",
    text: "The {{electric potential}} changes from {{+120 V}} to {{+80 V}} over a distance of {{0.05 m}}. Calculate the {{electric field strength}} in this region. A charge of {{−2.0 μC}} is moved through this potential difference — find the {{work done}}.",
    topic: "D",
    subtopic: "D2",
    level: 2,
    slhl: "HL",
    tooltips: [
      { phrase: "electric potential", tip: "Ve, measured in volts." },
      { phrase: "+120 V", tip: "Ve₁ = +120 V." },
      { phrase: "+80 V", tip: "Ve₂ = +80 V." },
      { phrase: "0.05 m", tip: "Δr = 0.05 m, the distance over which the potential changes." },
      { phrase: "electric field strength", tip: "E = −ΔVe/Δr." },
      { phrase: "−2.0 μC", tip: "q = −2.0 × 10⁻⁶ C." },
      { phrase: "work done", tip: "W = qΔVe." }
    ],
    knowns: [
      { symbol: "Ve₁", value: "120", unit: "V", description: "initial potential" },
      { symbol: "Ve₂", value: "80", unit: "V", description: "final potential" },
      { symbol: "Δr", value: "0.05", unit: "m", description: "distance" },
      { symbol: "q", value: "−2.0 × 10⁻⁶", unit: "C", description: "charge moved" }
    ],
    unknowns: [
      { symbol: "E", unit: "V m⁻¹", description: "electric field strength" },
      { symbol: "W", unit: "J", description: "work done on the charge" }
    ],
    acceptedSolutions: [
      ["D2_6", "D2_7"]
    ],
    requiredConstants: [],
    hints: [
      "E = −ΔVe/Δr. What is ΔVe here?",
      "ΔVe = 80 − 120 = −40 V. So E = −(−40)/0.05 = 800 V m⁻¹.",
      "W = qΔVe = (−2.0 × 10⁻⁶)(−40) = 8.0 × 10⁻⁵ J."
    ],
    explanation: "\\(E = -\\frac{\\Delta V_e}{\\Delta r} = -\\frac{80 - 120}{0.05} = -\\frac{-40}{0.05} = 800\\) V m\\(^{-1}\\). Work done: \\(W = q\\Delta V_e = (-2.0 \\times 10^{-6})(-40) = 8.0 \\times 10^{-5}\\) J. The work is positive — energy is released as the negative charge moves to lower potential."
  },

  {
    id: "D2_L2_06",
    text: "A charge of {{+4.0 μC}} moves from a point where the {{electric potential}} is {{300 V}} to a point where it is {{50 V}}. Calculate the {{work done}} by the field and the {{speed}} gained if the charge carrier has mass {{2.0 × 10⁻⁶ kg}} and starts from rest.",
    topic: "D",
    subtopic: "D2",
    level: 2,
    slhl: "HL",
    tooltips: [
      { phrase: "+4.0 μC", tip: "q = 4.0 × 10⁻⁶ C." },
      { phrase: "electric potential", tip: "Ve, measured in volts." },
      { phrase: "300 V", tip: "Ve₁ = 300 V, the higher potential." },
      { phrase: "50 V", tip: "Ve₂ = 50 V, the lower potential." },
      { phrase: "work done", tip: "W = qΔVe." },
      { phrase: "speed", tip: "v, found from the kinetic energy gained." },
      { phrase: "2.0 × 10⁻⁶ kg", tip: "m = 2.0 × 10⁻⁶ kg." }
    ],
    knowns: [
      { symbol: "q", value: "4.0 × 10⁻⁶", unit: "C", description: "charge" },
      { symbol: "Ve₁", value: "300", unit: "V", description: "initial potential" },
      { symbol: "Ve₂", value: "50", unit: "V", description: "final potential" },
      { symbol: "m", value: "2.0 × 10⁻⁶", unit: "kg", description: "mass of charge carrier" }
    ],
    unknowns: [
      { symbol: "W", unit: "J", description: "work done by the electric field" },
      { symbol: "v", unit: "m s⁻¹", description: "final speed" }
    ],
    acceptedSolutions: [
      ["D2_7", "A3_2"]
    ],
    requiredConstants: [],
    hints: [
      "Work done by the field: W = qΔV = q(Ve₁ − Ve₂). Positive charge moves from high to low potential.",
      "W = 4.0 × 10⁻⁶ × (300 − 50) = 4.0 × 10⁻⁶ × 250.",
      "Set W = ½mv² and solve for v: v = √(2W/m)."
    ],
    explanation: "Work done: \\(W = q(V_{e1} - V_{e2}) = 4.0 \\times 10^{-6} \\times 250 = 1.0 \\times 10^{-3}\\) J. Using \\(W = \\frac{1}{2}mv^2\\): \\(v = \\sqrt{\\frac{2W}{m}} = \\sqrt{\\frac{2 \\times 1.0 \\times 10^{-3}}{2.0 \\times 10^{-6}}} = \\sqrt{1000} \\approx 31.6\\) m s\\(^{-1}\\)."
  },

  // ===========================================================
  // D3 MOTION IN EM FIELDS — LEVEL 1 (SL: 2 questions)
  // ===========================================================

  {
    id: "D3_L1_01",
    text: "A {{proton}} moves at {{4.0 × 10⁶ m s⁻¹}} perpendicular to a {{magnetic field}} of strength {{0.50 T}}. Calculate the {{magnetic force}} on the proton.",
    topic: "D",
    subtopic: "D3",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "proton", tip: "A positively charged particle with charge e = 1.60 × 10⁻¹⁹ C." },
      { phrase: "4.0 × 10⁶ m s⁻¹", tip: "v = 4.0 × 10⁶ m s⁻¹, the speed of the proton." },
      { phrase: "magnetic field", tip: "B = 0.50 T, the magnetic flux density." },
      { phrase: "0.50 T", tip: "B = 0.50 T." },
      { phrase: "magnetic force", tip: "F = qvB sinθ, the force on a moving charge in a B field." }
    ],
    knowns: [
      { symbol: "q", value: "1.60 × 10⁻¹⁹", unit: "C", description: "proton charge" },
      { symbol: "v", value: "4.0 × 10⁶", unit: "m s⁻¹", description: "speed" },
      { symbol: "B", value: "0.50", unit: "T", description: "magnetic flux density" },
      { symbol: "θ", value: "90", unit: "°", description: "angle (perpendicular)" }
    ],
    unknowns: [
      { symbol: "F", unit: "N", description: "magnetic force on proton" }
    ],
    acceptedSolutions: [
      ["D3_1", "CONST_e"]
    ],
    requiredConstants: ["CONST_e"],
    hints: [
      "Force on a charge in a magnetic field: F = qvB sinθ.",
      "The proton moves perpendicular to B, so sinθ = sin90° = 1.",
      "F = 1.60 × 10⁻¹⁹ × 4.0 × 10⁶ × 0.50."
    ],
    explanation: "Using \\(F = qvB\\sin\\theta\\) with \\(\\theta = 90°\\): \\(F = 1.60 \\times 10^{-19} \\times 4.0 \\times 10^6 \\times 0.50 = 3.2 \\times 10^{-13}\\) N."
  },

  {
    id: "D3_L1_02",
    text: "A straight {{wire}} carrying a current of {{6.0 A}} is placed in a {{uniform magnetic field}} of {{0.40 T}}. The wire has length {{0.25 m}} and makes an angle of {{30°}} with the field. Calculate the {{force}} on the wire.",
    topic: "D",
    subtopic: "D3",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "wire", tip: "A straight current-carrying conductor." },
      { phrase: "6.0 A", tip: "I = 6.0 A, the current in the wire." },
      { phrase: "uniform magnetic field", tip: "B = 0.40 T, constant across the region." },
      { phrase: "0.40 T", tip: "B = 0.40 T." },
      { phrase: "0.25 m", tip: "L = 0.25 m, the length of the wire in the field." },
      { phrase: "30°", tip: "θ = 30°, the angle between the wire and the field direction." },
      { phrase: "force", tip: "F = BIL sinθ, the force on a current-carrying wire in a B field." }
    ],
    knowns: [
      { symbol: "I", value: "6.0", unit: "A", description: "current" },
      { symbol: "B", value: "0.40", unit: "T", description: "magnetic flux density" },
      { symbol: "L", value: "0.25", unit: "m", description: "length of wire" },
      { symbol: "θ", value: "30", unit: "°", description: "angle to field" }
    ],
    unknowns: [
      { symbol: "F", unit: "N", description: "force on the wire" }
    ],
    acceptedSolutions: [
      ["D3_2"]
    ],
    requiredConstants: [],
    hints: [
      "Force on a current-carrying wire: F = BIL sinθ.",
      "Substitute B = 0.40, I = 6.0, L = 0.25, and sin30° = 0.5.",
      "F = 0.40 × 6.0 × 0.25 × 0.50 = 0.30 N."
    ],
    explanation: "Using \\(F = BIL\\sin\\theta = 0.40 \\times 6.0 \\times 0.25 \\times \\sin 30° = 0.40 \\times 6.0 \\times 0.25 \\times 0.50 = 0.30\\) N."
  },

  // ===========================================================
  // D3 MOTION IN EM FIELDS — LEVEL 2 (SL: 3 questions)
  // ===========================================================

  {
    id: "D3_L2_01",
    text: "An {{electron}} enters a {{magnetic field}} of {{0.010 T}} at right angles with a speed of {{2.0 × 10⁷ m s⁻¹}}. The electron follows a {{circular path}}. Calculate the {{radius}} of the circular motion.",
    topic: "D",
    subtopic: "D3",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "electron", tip: "me = 9.11 × 10⁻³¹ kg, charge = 1.60 × 10⁻¹⁹ C." },
      { phrase: "magnetic field", tip: "B = 0.010 T." },
      { phrase: "0.010 T", tip: "B = 0.010 T." },
      { phrase: "2.0 × 10⁷ m s⁻¹", tip: "v = 2.0 × 10⁷ m s⁻¹." },
      { phrase: "circular path", tip: "The magnetic force acts as the centripetal force." },
      { phrase: "radius", tip: "r, the radius of the circular trajectory." }
    ],
    knowns: [
      { symbol: "me", value: "9.11 × 10⁻³¹", unit: "kg", description: "electron mass" },
      { symbol: "e", value: "1.60 × 10⁻¹⁹", unit: "C", description: "electron charge" },
      { symbol: "v", value: "2.0 × 10⁷", unit: "m s⁻¹", description: "speed" },
      { symbol: "B", value: "0.010", unit: "T", description: "magnetic flux density" }
    ],
    unknowns: [
      { symbol: "r", unit: "m", description: "radius of circular path" }
    ],
    acceptedSolutions: [
      ["D3_1", "A2_10", "CONST_e", "CONST_me"]
    ],
    requiredConstants: ["CONST_e", "CONST_me"],
    hints: [
      "The magnetic force provides the centripetal force: qvB = mv²/r.",
      "Rearrange: r = mv/(qB).",
      "r = (9.11 × 10⁻³¹ × 2.0 × 10⁷) / (1.60 × 10⁻¹⁹ × 0.010)."
    ],
    explanation: "Setting magnetic force equal to centripetal force: \\(qvB = \\frac{mv^2}{r}\\), so \\(r = \\frac{mv}{qB} = \\frac{9.11 \\times 10^{-31} \\times 2.0 \\times 10^7}{1.60 \\times 10^{-19} \\times 0.010} = \\frac{1.82 \\times 10^{-23}}{1.60 \\times 10^{-21}} \\approx 0.011\\) m ≈ 1.1 cm."
  },

  {
    id: "D3_L2_02",
    text: "Two long, parallel {{wires}} are {{0.10 m}} apart, each carrying a current of {{15 A}} in the same direction. Calculate the {{force per unit length}} between them and state whether it is {{attractive or repulsive}}.",
    topic: "D",
    subtopic: "D3",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "wires", tip: "Long, straight, parallel current-carrying conductors." },
      { phrase: "0.10 m", tip: "r = 0.10 m, the separation between the wires." },
      { phrase: "15 A", tip: "I₁ = I₂ = 15 A." },
      { phrase: "force per unit length", tip: "F/L = μ₀I₁I₂/(2πr)." },
      { phrase: "attractive or repulsive", tip: "Currents in the same direction attract; opposite directions repel." }
    ],
    knowns: [
      { symbol: "I₁", value: "15", unit: "A", description: "current in first wire" },
      { symbol: "I₂", value: "15", unit: "A", description: "current in second wire" },
      { symbol: "r", value: "0.10", unit: "m", description: "separation between wires" }
    ],
    unknowns: [
      { symbol: "F/L", unit: "N m⁻¹", description: "force per unit length" }
    ],
    acceptedSolutions: [
      ["D3_3", "CONST_mu0"]
    ],
    requiredConstants: ["CONST_mu0"],
    hints: [
      "Force per unit length between parallel wires: F/L = μ₀I₁I₂/(2πr).",
      "μ₀ = 4π × 10⁻⁷ T m A⁻¹. Substitute all values.",
      "F/L = (4π × 10⁻⁷ × 15 × 15) / (2π × 0.10). Same-direction currents attract."
    ],
    explanation: "\\(\\frac{F}{L} = \\frac{\\mu_0 I_1 I_2}{2\\pi r} = \\frac{4\\pi \\times 10^{-7} \\times 15 \\times 15}{2\\pi \\times 0.10} = \\frac{4\\pi \\times 10^{-7} \\times 225}{0.2\\pi} = \\frac{225 \\times 2 \\times 10^{-7}}{0.10} = 4.5 \\times 10^{-4}\\) N m\\(^{-1}\\). Since the currents flow in the same direction, the force is attractive."
  },

  {
    id: "D3_L2_03",
    text: "If the {{speed}} of a charged particle in a magnetic field is {{tripled}} while the {{magnetic field strength}} is {{halved}}, how does the {{radius of its circular path}} change? (Proportional reasoning.)",
    topic: "D",
    subtopic: "D3",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "speed", tip: "v, the speed of the charged particle." },
      { phrase: "tripled", tip: "New speed is 3v." },
      { phrase: "magnetic field strength", tip: "B, the magnetic flux density." },
      { phrase: "halved", tip: "New field is B/2." },
      { phrase: "radius of its circular path", tip: "r = mv/(qB)." }
    ],
    knowns: [
      { symbol: "v", value: "3v", unit: "", description: "speed tripled" },
      { symbol: "B", value: "B/2", unit: "", description: "field halved" }
    ],
    unknowns: [
      { symbol: "r", unit: "", description: "factor change in radius" }
    ],
    acceptedSolutions: [
      ["D3_1", "A2_10"]
    ],
    requiredConstants: [],
    hints: [
      "From qvB = mv²/r, derive r = mv/(qB). How does r depend on v and B?",
      "r is proportional to v and inversely proportional to B: r ∝ v/B.",
      "New r = m(3v)/(q × B/2) = 6mv/(qB) = 6 × original r. The radius increases by a factor of 6."
    ],
    explanation: "From \\(r = \\frac{mv}{qB}\\), we see \\(r \\propto \\frac{v}{B}\\). If \\(v \\to 3v\\) and \\(B \\to B/2\\): \\(r' = \\frac{m(3v)}{q(B/2)} = 6\\frac{mv}{qB} = 6r\\). The radius increases by a factor of 6."
  },

  // ===========================================================
  // D4 INDUCTION — LEVEL 1 (HL: 1 question)
  // ===========================================================

  {
    id: "D4_L1_01",
    text: "A {{rectangular coil}} of area {{0.04 m²}} is placed in a {{uniform magnetic field}} of {{0.25 T}}. The {{normal to the coil}} makes an angle of {{60°}} with the field. Calculate the {{magnetic flux}} through the coil.",
    topic: "D",
    subtopic: "D4",
    level: 1,
    slhl: "HL",
    tooltips: [
      { phrase: "rectangular coil", tip: "A flat loop of wire with a defined area." },
      { phrase: "0.04 m²", tip: "A = 0.04 m², the area of the coil." },
      { phrase: "uniform magnetic field", tip: "B = 0.25 T, constant across the coil." },
      { phrase: "0.25 T", tip: "B = 0.25 T." },
      { phrase: "normal to the coil", tip: "The direction perpendicular to the plane of the coil." },
      { phrase: "60°", tip: "θ = 60°, the angle between the field and the normal to the coil." },
      { phrase: "magnetic flux", tip: "Φ = BA cosθ." }
    ],
    knowns: [
      { symbol: "B", value: "0.25", unit: "T", description: "magnetic flux density" },
      { symbol: "A", value: "0.04", unit: "m²", description: "area of coil" },
      { symbol: "θ", value: "60", unit: "°", description: "angle between B and normal" }
    ],
    unknowns: [
      { symbol: "Φ", unit: "Wb", description: "magnetic flux" }
    ],
    acceptedSolutions: [
      ["D4_1"]
    ],
    requiredConstants: [],
    hints: [
      "Magnetic flux: Φ = BA cosθ, where θ is the angle between B and the area normal.",
      "cos60° = 0.5.",
      "Φ = 0.25 × 0.04 × cos60° = 0.25 × 0.04 × 0.5 = 0.005 Wb."
    ],
    explanation: "Using \\(\\Phi = BA\\cos\\theta = 0.25 \\times 0.04 \\times \\cos 60° = 0.25 \\times 0.04 \\times 0.5 = 5.0 \\times 10^{-3}\\) Wb."
  },

  // ===========================================================
  // D4 INDUCTION — LEVEL 2 (HL: 4 questions)
  // ===========================================================

  {
    id: "D4_L2_01",
    text: "A {{coil}} of {{200 turns}} has an area of {{0.015 m²}}. The {{magnetic field}} through the coil {{increases}} from {{0 T}} to {{0.80 T}} in {{0.10 s}}. Calculate the {{induced EMF}} in the coil.",
    topic: "D",
    subtopic: "D4",
    level: 2,
    slhl: "HL",
    tooltips: [
      { phrase: "coil", tip: "A multi-turn loop of wire." },
      { phrase: "200 turns", tip: "N = 200." },
      { phrase: "0.015 m²", tip: "A = 0.015 m²." },
      { phrase: "magnetic field", tip: "B, changing from 0 to 0.80 T." },
      { phrase: "increases", tip: "The field changes, causing a change in flux." },
      { phrase: "0 T", tip: "Initial B = 0 T." },
      { phrase: "0.80 T", tip: "Final B = 0.80 T." },
      { phrase: "0.10 s", tip: "Δt = 0.10 s." },
      { phrase: "induced EMF", tip: "ε = −NΔΦ/Δt (Faraday's law)." }
    ],
    knowns: [
      { symbol: "N", value: "200", unit: "", description: "number of turns" },
      { symbol: "A", value: "0.015", unit: "m²", description: "area of coil" },
      { symbol: "B₁", value: "0", unit: "T", description: "initial field" },
      { symbol: "B₂", value: "0.80", unit: "T", description: "final field" },
      { symbol: "Δt", value: "0.10", unit: "s", description: "time interval" }
    ],
    unknowns: [
      { symbol: "ε", unit: "V", description: "induced EMF" }
    ],
    acceptedSolutions: [
      ["D4_1", "D4_2"]
    ],
    requiredConstants: [],
    hints: [
      "First find the change in flux: ΔΦ = Φ₂ − Φ₁ = B₂A − B₁A (assuming θ = 0).",
      "ΔΦ = 0.80 × 0.015 − 0 = 0.012 Wb.",
      "ε = NΔΦ/Δt = 200 × 0.012 / 0.10 = 24 V."
    ],
    explanation: "Change in flux: \\(\\Delta\\Phi = B_2 A - B_1 A = 0.80 \\times 0.015 - 0 = 0.012\\) Wb. By Faraday's law: \\(|\\varepsilon| = N\\frac{\\Delta\\Phi}{\\Delta t} = 200 \\times \\frac{0.012}{0.10} = 24\\) V."
  },

  {
    id: "D4_L2_02",
    text: "A {{metal rod}} of length {{0.60 m}} slides along {{rails}} at a constant speed of {{8.0 m s⁻¹}} perpendicular to a {{magnetic field}} of {{0.50 T}}. The circuit has a total {{resistance}} of {{2.4 Ω}}. Calculate the {{induced EMF}} and the {{current}} in the circuit.",
    topic: "D",
    subtopic: "D4",
    level: 2,
    slhl: "HL",
    tooltips: [
      { phrase: "metal rod", tip: "A conductor sliding along rails to form a circuit." },
      { phrase: "0.60 m", tip: "L = 0.60 m, the length of the rod." },
      { phrase: "rails", tip: "Conducting tracks forming a closed circuit with the rod." },
      { phrase: "8.0 m s⁻¹", tip: "v = 8.0 m s⁻¹, the speed of the rod." },
      { phrase: "magnetic field", tip: "B = 0.50 T." },
      { phrase: "0.50 T", tip: "B = 0.50 T." },
      { phrase: "resistance", tip: "R = 2.4 Ω, total resistance of the circuit." },
      { phrase: "2.4 Ω", tip: "R = 2.4 Ω." },
      { phrase: "induced EMF", tip: "ε = BvL for a conductor moving through a B field." },
      { phrase: "current", tip: "I = ε/R from Ohm's law." }
    ],
    knowns: [
      { symbol: "L", value: "0.60", unit: "m", description: "length of rod" },
      { symbol: "v", value: "8.0", unit: "m s⁻¹", description: "speed of rod" },
      { symbol: "B", value: "0.50", unit: "T", description: "magnetic flux density" },
      { symbol: "R", value: "2.4", unit: "Ω", description: "circuit resistance" }
    ],
    unknowns: [
      { symbol: "ε", unit: "V", description: "induced EMF" },
      { symbol: "I", unit: "A", description: "induced current" }
    ],
    acceptedSolutions: [
      ["D4_3", "B5_3"]
    ],
    requiredConstants: [],
    hints: [
      "EMF from a moving conductor: ε = BvL.",
      "ε = 0.50 × 8.0 × 0.60 = 2.4 V.",
      "Using Ohm's law: I = ε/R = 2.4/2.4 = 1.0 A."
    ],
    explanation: "\\(\\varepsilon = BvL = 0.50 \\times 8.0 \\times 0.60 = 2.4\\) V. Using Ohm's law: \\(I = \\frac{\\varepsilon}{R} = \\frac{2.4}{2.4} = 1.0\\) A."
  },

  {
    id: "D4_L2_03",
    text: "A {{conductor}} of length {{1.2 m}} moves at {{5.0 m s⁻¹}} through a {{magnetic field}} of {{0.30 T}}, generating an EMF. If the total circuit resistance is {{0.90 Ω}}, find the {{power dissipated}} in the circuit.",
    topic: "D",
    subtopic: "D4",
    level: 2,
    slhl: "HL",
    tooltips: [
      { phrase: "conductor", tip: "A metal rod moving through a magnetic field." },
      { phrase: "1.2 m", tip: "L = 1.2 m." },
      { phrase: "5.0 m s⁻¹", tip: "v = 5.0 m s⁻¹." },
      { phrase: "magnetic field", tip: "B = 0.30 T." },
      { phrase: "0.30 T", tip: "B = 0.30 T." },
      { phrase: "0.90 Ω", tip: "R = 0.90 Ω." },
      { phrase: "power dissipated", tip: "P = IV or P = ε²/R." }
    ],
    knowns: [
      { symbol: "L", value: "1.2", unit: "m", description: "length of conductor" },
      { symbol: "v", value: "5.0", unit: "m s⁻¹", description: "speed" },
      { symbol: "B", value: "0.30", unit: "T", description: "magnetic flux density" },
      { symbol: "R", value: "0.90", unit: "Ω", description: "circuit resistance" }
    ],
    unknowns: [
      { symbol: "P", unit: "W", description: "power dissipated" }
    ],
    acceptedSolutions: [
      ["D4_3", "B5_3", "B5_5"],
      ["D4_3", "B5_5"]
    ],
    requiredConstants: [],
    hints: [
      "First find the EMF: ε = BvL.",
      "ε = 0.30 × 5.0 × 1.2 = 1.8 V. Then find I = ε/R.",
      "P = εI = ε²/R = 1.8²/0.90 = 3.6 W."
    ],
    explanation: "\\(\\varepsilon = BvL = 0.30 \\times 5.0 \\times 1.2 = 1.8\\) V. Current: \\(I = \\frac{\\varepsilon}{R} = \\frac{1.8}{0.90} = 2.0\\) A. Power: \\(P = \\varepsilon I = 1.8 \\times 2.0 = 3.6\\) W. Alternatively, \\(P = \\frac{\\varepsilon^2}{R} = \\frac{1.8^2}{0.90} = 3.6\\) W."
  },

  {
    id: "D4_L2_04",
    text: "A {{coil}} of {{50 turns}} and area {{0.020 m²}} rotates in a {{magnetic field}} of {{0.60 T}}. The flux through the coil changes from {{maximum}} to {{zero}} in {{0.025 s}} (a quarter turn). Calculate the {{average induced EMF}} and the {{average current}} if the coil has resistance {{3.0 Ω}}.",
    topic: "D",
    subtopic: "D4",
    level: 2,
    slhl: "HL",
    tooltips: [
      { phrase: "coil", tip: "A rotating loop in a magnetic field — an AC generator." },
      { phrase: "50 turns", tip: "N = 50." },
      { phrase: "0.020 m²", tip: "A = 0.020 m²." },
      { phrase: "magnetic field", tip: "B = 0.60 T." },
      { phrase: "0.60 T", tip: "B = 0.60 T." },
      { phrase: "maximum", tip: "Maximum flux: Φ_max = BA (when θ = 0°)." },
      { phrase: "zero", tip: "Zero flux: Φ = 0 (when θ = 90°)." },
      { phrase: "0.025 s", tip: "Δt = 0.025 s for a quarter revolution." },
      { phrase: "average induced EMF", tip: "ε = NΔΦ/Δt." },
      { phrase: "average current", tip: "I = ε/R." },
      { phrase: "3.0 Ω", tip: "R = 3.0 Ω." }
    ],
    knowns: [
      { symbol: "N", value: "50", unit: "", description: "number of turns" },
      { symbol: "A", value: "0.020", unit: "m²", description: "coil area" },
      { symbol: "B", value: "0.60", unit: "T", description: "magnetic flux density" },
      { symbol: "Δt", value: "0.025", unit: "s", description: "time for quarter turn" },
      { symbol: "R", value: "3.0", unit: "Ω", description: "coil resistance" }
    ],
    unknowns: [
      { symbol: "ε", unit: "V", description: "average induced EMF" },
      { symbol: "I", unit: "A", description: "average current" }
    ],
    acceptedSolutions: [
      ["D4_1", "D4_2", "B5_3"]
    ],
    requiredConstants: [],
    hints: [
      "Find Φ_max = BA and Φ_min = 0. Then ΔΦ = Φ_max − 0.",
      "ε = NΔΦ/Δt = 50 × (0.60 × 0.020) / 0.025.",
      "ε = 50 × 0.012 / 0.025 = 24 V. I = ε/R = 24/3.0 = 8.0 A."
    ],
    explanation: "Maximum flux: \\(\\Phi_{max} = BA = 0.60 \\times 0.020 = 0.012\\) Wb. Change in flux: \\(\\Delta\\Phi = 0.012 - 0 = 0.012\\) Wb. Average EMF: \\(|\\varepsilon| = N\\frac{\\Delta\\Phi}{\\Delta t} = 50 \\times \\frac{0.012}{0.025} = 24\\) V. Average current: \\(I = \\frac{\\varepsilon}{R} = \\frac{24}{3.0} = 8.0\\) A."
  },

  // ============================================================
  // TOPIC E: NUCLEAR AND QUANTUM PHYSICS — BATCH 7
  // ============================================================

  // ===========================================================
  // E1 STRUCTURE OF THE ATOM — LEVEL 1 (3 questions: 1 SL + 2 HL)
  // ===========================================================

  // --- E1 SL L1 (1 question) ---

  {
    id: "E1_L1_01",
    text: "Violet light has a {{frequency}} of {{7.5 × 10¹⁴ Hz}}. Calculate the {{energy}} of a single photon of this light.",
    topic: "E",
    subtopic: "E1",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "frequency", tip: "The number of oscillations per second of the electromagnetic wave." },
      { phrase: "7.5 × 10¹⁴ Hz", tip: "This is f = 7.5 × 10¹⁴ Hz, in the violet part of the visible spectrum." },
      { phrase: "energy", tip: "The energy carried by a single quantum (photon) of light." }
    ],
    knowns: [
      { symbol: "f", value: "7.5 × 10¹⁴", unit: "Hz", description: "frequency of the violet light" }
    ],
    unknowns: [
      { symbol: "E", unit: "J", description: "photon energy" }
    ],
    acceptedSolutions: [
      ["E1_1", "CONST_h"]
    ],
    requiredConstants: ["CONST_h"],
    hints: [
      "You know the frequency of the light. What formula links photon energy to frequency?",
      "Use the Planck relation: E = hf. You will need the Planck constant.",
      "E = hf = (6.63 × 10⁻³⁴)(7.5 × 10¹⁴) ≈ 5.0 × 10⁻¹⁹ J."
    ],
    explanation: "Using \\(E = hf\\): \\(E = (6.63 \\times 10^{-34})(7.5 \\times 10^{14}) = 4.97 \\times 10^{-19} \\approx 5.0 \\times 10^{-19}\\) J."
  },

  // --- E1 HL L1 (2 questions) ---

  {
    id: "E1_L1_02",
    text: "Estimate the {{nuclear radius}} of a {{copper-63}} nucleus, given that {{R₀ = 1.20 × 10⁻¹⁵ m}}.",
    topic: "E",
    subtopic: "E1",
    level: 1,
    slhl: "HL",
    tooltips: [
      { phrase: "nuclear radius", tip: "The approximate radius of a nucleus, which depends on the nucleon number A." },
      { phrase: "copper-63", tip: "Copper-63 has mass number A = 63." },
      { phrase: "R₀ = 1.20 × 10⁻¹⁵ m", tip: "The Fermi radius constant, used in the nuclear radius formula." }
    ],
    knowns: [
      { symbol: "A", value: "63", unit: "", description: "mass number of copper-63" },
      { symbol: "R₀", value: "1.20 × 10⁻¹⁵", unit: "m", description: "Fermi radius constant" }
    ],
    unknowns: [
      { symbol: "R", unit: "m", description: "nuclear radius" }
    ],
    acceptedSolutions: [
      ["E1_2", "CONST_R0"]
    ],
    requiredConstants: ["CONST_R0"],
    hints: [
      "What formula relates the nuclear radius R to the nucleon number A?",
      "Use R = R₀A^(1/3). You need the cube root of 63.",
      "A^(1/3) = 63^(1/3) ≈ 3.98. So R = 1.20 × 10⁻¹⁵ × 3.98 ≈ 4.8 × 10⁻¹⁵ m."
    ],
    explanation: "Using \\(R = R_0 A^{1/3}\\): \\(R = (1.20 \\times 10^{-15})(63)^{1/3} = (1.20 \\times 10^{-15})(3.98) \\approx 4.8 \\times 10^{-15}\\) m."
  },

  {
    id: "E1_L1_03",
    text: "According to the {{Bohr model}}, calculate the {{angular momentum}} of an electron in the {{n = 3}} energy level of hydrogen.",
    topic: "E",
    subtopic: "E1",
    level: 1,
    slhl: "HL",
    tooltips: [
      { phrase: "Bohr model", tip: "Bohr's model quantises the angular momentum of electrons in orbits around the nucleus." },
      { phrase: "angular momentum", tip: "The product mvr for an orbiting electron, which is quantised in the Bohr model." },
      { phrase: "n = 3", tip: "The principal quantum number n = 3, representing the third energy level." }
    ],
    knowns: [
      { symbol: "n", value: "3", unit: "", description: "principal quantum number" }
    ],
    unknowns: [
      { symbol: "L", unit: "J s", description: "angular momentum of the electron" }
    ],
    acceptedSolutions: [
      ["E1_4", "CONST_h"]
    ],
    requiredConstants: ["CONST_h"],
    hints: [
      "In the Bohr model, angular momentum is quantised. What is the quantisation rule?",
      "Use mvr = nh/(2π). Substitute n = 3.",
      "L = 3 × (6.63 × 10⁻³⁴)/(2π) = 3 × 1.055 × 10⁻³⁴ ≈ 3.17 × 10⁻³⁴ J s."
    ],
    explanation: "Using \\(mvr = \\frac{nh}{2\\pi}\\): \\(L = \\frac{3 \\times 6.63 \\times 10^{-34}}{2\\pi} = \\frac{1.989 \\times 10^{-33}}{6.283} \\approx 3.17 \\times 10^{-34}\\) J s."
  },

  // ===========================================================
  // E1 STRUCTURE OF THE ATOM — LEVEL 2 (6 questions: 2 SL + 4 HL)
  // ===========================================================

  // --- E1 SL L2 (2 questions) ---

  {
    id: "E1_L2_01",
    text: "A {{hydrogen discharge lamp}} emits photons with a {{wavelength}} of {{4.86 × 10⁻⁷ m}} (the Hβ line). Calculate the {{energy}} of each photon in joules.",
    topic: "E",
    subtopic: "E1",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "hydrogen discharge lamp", tip: "A tube of hydrogen gas that emits light when an electric discharge passes through it." },
      { phrase: "wavelength", tip: "The distance between successive crests of the electromagnetic wave." },
      { phrase: "4.86 × 10⁻⁷ m", tip: "This wavelength corresponds to the blue-green Hβ spectral line of hydrogen." },
      { phrase: "energy", tip: "The energy of a single photon, related to its frequency via E = hf." }
    ],
    knowns: [
      { symbol: "λ", value: "4.86 × 10⁻⁷", unit: "m", description: "wavelength of the Hβ line" }
    ],
    unknowns: [
      { symbol: "E", unit: "J", description: "photon energy in joules" }
    ],
    acceptedSolutions: [
      ["C2_1", "E1_1", "CONST_h", "CONST_c"]
    ],
    requiredConstants: ["CONST_h", "CONST_c"],
    hints: [
      "You know the wavelength. First find the frequency using c = fλ.",
      "Then use E = hf to find the energy in joules.",
      "f = c/λ = 3.0 × 10⁸ / 4.86 × 10⁻⁷ = 6.17 × 10¹⁴ Hz. E = hf = (6.63 × 10⁻³⁴)(6.17 × 10¹⁴) = 4.09 × 10⁻¹⁹ J."
    ],
    explanation: "Using \\(c = f\\lambda\\): \\(f = \\frac{3.0 \\times 10^8}{4.86 \\times 10^{-7}} = 6.17 \\times 10^{14}\\) Hz. Then \\(E = hf = (6.63 \\times 10^{-34})(6.17 \\times 10^{14}) = 4.09 \\times 10^{-19}\\) J."
  },

  {
    id: "E1_L2_02",
    text: "If the {{frequency}} of a photon is {{doubled}}, what happens to its {{wavelength}} and its {{energy}}? State the factor by which each changes.",
    topic: "E",
    subtopic: "E1",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "frequency", tip: "The number of wave oscillations per second." },
      { phrase: "doubled", tip: "The new frequency is 2f, where f is the original frequency." },
      { phrase: "wavelength", tip: "Related to frequency and the speed of light by c = fλ." },
      { phrase: "energy", tip: "Photon energy is given by E = hf." }
    ],
    knowns: [
      { symbol: "f", value: "2f", unit: "", description: "frequency is doubled" }
    ],
    unknowns: [
      { symbol: "λ", unit: "", description: "factor change in wavelength" },
      { symbol: "E", unit: "", description: "factor change in photon energy" }
    ],
    acceptedSolutions: [
      ["E1_1", "C2_1"]
    ],
    requiredConstants: [],
    hints: [
      "Consider E = hf. If f doubles, what happens to E?",
      "Now consider c = fλ. If f doubles and c is constant, what happens to λ?",
      "E is directly proportional to f, so E doubles. λ is inversely proportional to f, so λ halves."
    ],
    explanation: "From \\(E = hf\\), energy is directly proportional to frequency, so \\(E\\) doubles. From \\(c = f\\lambda\\), since \\(c\\) is constant, \\(\\lambda = c/f\\), so \\(\\lambda\\) halves."
  },

  // --- E1 HL L2 (4 questions) ---

  {
    id: "E1_L2_03",
    text: "An electron in a {{hydrogen atom}} transitions from the {{n = 4}} level to the {{n = 2}} level. Calculate the {{wavelength}} of the emitted photon. Use \\(E_n = -13.6/n^2\\) eV.",
    topic: "E",
    subtopic: "E1",
    level: 2,
    slhl: "HL",
    tooltips: [
      { phrase: "hydrogen atom", tip: "The simplest atom, with energy levels given by Eₙ = −13.6/n² eV." },
      { phrase: "n = 4", tip: "The initial (higher) energy level of the electron." },
      { phrase: "n = 2", tip: "The final (lower) energy level. This transition is in the Balmer series (visible light)." },
      { phrase: "wavelength", tip: "The wavelength of the photon emitted when the electron drops to a lower level." }
    ],
    knowns: [
      { symbol: "n_i", value: "4", unit: "", description: "initial energy level" },
      { symbol: "n_f", value: "2", unit: "", description: "final energy level" }
    ],
    unknowns: [
      { symbol: "λ", unit: "m", description: "wavelength of emitted photon" }
    ],
    acceptedSolutions: [
      ["E1_3", "E1_1", "C2_1", "CONST_h", "CONST_c", "CONST_e"]
    ],
    requiredConstants: ["CONST_h", "CONST_c", "CONST_e"],
    hints: [
      "First find the energy of each level using Eₙ = −13.6/n² eV. Then find the energy difference.",
      "ΔE = E₄ − E₂ = (−0.85) − (−3.40) = 2.55 eV. Convert to joules.",
      "ΔE = 2.55 × 1.6 × 10⁻¹⁹ = 4.08 × 10⁻¹⁹ J. λ = hc/ΔE = (6.63 × 10⁻³⁴ × 3.0 × 10⁸)/4.08 × 10⁻¹⁹ ≈ 4.87 × 10⁻⁷ m."
    ],
    explanation: "Energy levels: \\(E_4 = -13.6/16 = -0.85\\) eV, \\(E_2 = -13.6/4 = -3.40\\) eV. Photon energy: \\(\\Delta E = 2.55\\) eV \\(= 4.08 \\times 10^{-19}\\) J. Wavelength: \\(\\lambda = \\frac{hc}{\\Delta E} = \\frac{(6.63 \\times 10^{-34})(3.0 \\times 10^8)}{4.08 \\times 10^{-19}} \\approx 4.87 \\times 10^{-7}\\) m (blue-green, Hβ line)."
  },

  {
    id: "E1_L2_04",
    text: "If the {{mass number}} of a nucleus is {{increased by a factor of 8}}, by what factor does the {{nuclear radius}} change? By what factor does the nuclear {{volume}} change?",
    topic: "E",
    subtopic: "E1",
    level: 2,
    slhl: "HL",
    tooltips: [
      { phrase: "mass number", tip: "The total number of protons and neutrons (nucleons) in the nucleus, symbol A." },
      { phrase: "increased by a factor of 8", tip: "The new mass number is 8A." },
      { phrase: "nuclear radius", tip: "Given by R = R₀A^(1/3), so it depends on the cube root of A." },
      { phrase: "volume", tip: "Volume of a sphere: V = (4/3)πR³." }
    ],
    knowns: [
      { symbol: "A", value: "8A", unit: "", description: "mass number increased by factor 8" }
    ],
    unknowns: [
      { symbol: "R", unit: "", description: "factor change in nuclear radius" },
      { symbol: "V", unit: "", description: "factor change in nuclear volume" }
    ],
    acceptedSolutions: [
      ["E1_2"]
    ],
    requiredConstants: [],
    hints: [
      "R = R₀A^(1/3). If A → 8A, what is (8A)^(1/3)?",
      "(8A)^(1/3) = 8^(1/3) × A^(1/3) = 2A^(1/3). So R doubles.",
      "Since V ∝ R³, and R doubles, V increases by 2³ = 8. Nuclear volume is proportional to A."
    ],
    explanation: "Since \\(R = R_0 A^{1/3}\\), when \\(A \\to 8A\\): \\(R' = R_0(8A)^{1/3} = 2R_0 A^{1/3} = 2R\\). The radius doubles. Volume \\(V \\propto R^3\\), so \\(V' = 2^3 V = 8V\\). The volume increases by a factor of 8, consistent with \\(V \\propto A\\)."
  },

  {
    id: "E1_L2_05",
    text: "An electron in the {{n = 5}} energy level of {{hydrogen}} drops to the {{n = 1}} level. Using \\(E_n = -13.6/n^2\\) eV, find the {{frequency}} of the emitted photon.",
    topic: "E",
    subtopic: "E1",
    level: 2,
    slhl: "HL",
    tooltips: [
      { phrase: "n = 5", tip: "The initial (higher) energy level of the electron." },
      { phrase: "hydrogen", tip: "Hydrogen energy levels: Eₙ = −13.6/n² eV." },
      { phrase: "n = 1", tip: "The ground state. This transition is in the Lyman series (UV)." },
      { phrase: "frequency", tip: "The frequency of the photon, related to its energy by E = hf." }
    ],
    knowns: [
      { symbol: "n_i", value: "5", unit: "", description: "initial energy level" },
      { symbol: "n_f", value: "1", unit: "", description: "final energy level" }
    ],
    unknowns: [
      { symbol: "f", unit: "Hz", description: "frequency of emitted photon" }
    ],
    acceptedSolutions: [
      ["E1_3", "E1_1", "CONST_h", "CONST_e"]
    ],
    requiredConstants: ["CONST_h", "CONST_e"],
    hints: [
      "Find the energy of each level: E₅ = −13.6/25 eV and E₁ = −13.6 eV.",
      "ΔE = E₅ − E₁ = (−0.544) − (−13.6) = 13.06 eV. Convert to joules.",
      "ΔE = 13.06 × 1.6 × 10⁻¹⁹ = 2.09 × 10⁻¹⁸ J. f = E/h = 2.09 × 10⁻¹⁸ / 6.63 × 10⁻³⁴ ≈ 3.15 × 10¹⁵ Hz."
    ],
    explanation: "\\(E_5 = -13.6/25 = -0.544\\) eV, \\(E_1 = -13.6\\) eV. \\(\\Delta E = 13.06\\) eV \\(= 13.06 \\times 1.6 \\times 10^{-19} = 2.09 \\times 10^{-18}\\) J. Frequency: \\(f = \\frac{\\Delta E}{h} = \\frac{2.09 \\times 10^{-18}}{6.63 \\times 10^{-34}} \\approx 3.15 \\times 10^{15}\\) Hz (UV, Lyman series)."
  },

  {
    id: "E1_L2_06",
    text: "In the {{Bohr model}}, the electron in hydrogen orbits at radius \\(r\\) with speed \\(v\\). The {{Coulomb force}} provides the {{centripetal force}}. Given that the electron is in the {{n = 2}} level and \\(mvr = nh/(2\\pi)\\), show that the expected angular momentum is consistent with this quantum number.",
    topic: "E",
    subtopic: "E1",
    level: 2,
    slhl: "HL",
    tooltips: [
      { phrase: "Bohr model", tip: "A model of the atom where electrons orbit in quantised energy levels." },
      { phrase: "Coulomb force", tip: "The electrostatic attraction between the proton and electron: F = ke²/r²." },
      { phrase: "centripetal force", tip: "The net inward force required for circular motion: F = mv²/r." },
      { phrase: "n = 2", tip: "The second energy level; the angular momentum should be 2ℏ." }
    ],
    knowns: [
      { symbol: "n", value: "2", unit: "", description: "principal quantum number" }
    ],
    unknowns: [
      { symbol: "L", unit: "J s", description: "angular momentum of the electron in n = 2" }
    ],
    acceptedSolutions: [
      ["E1_4", "D2_1", "CONST_h"]
    ],
    requiredConstants: ["CONST_h"],
    hints: [
      "The Bohr quantisation condition states mvr = nh/(2π). Substitute n = 2.",
      "L = mvr = 2h/(2π) = h/π.",
      "L = 6.63 × 10⁻³⁴ / π ≈ 2.11 × 10⁻³⁴ J s, which equals 2ℏ as expected."
    ],
    explanation: "Bohr quantisation: \\(mvr = \\frac{nh}{2\\pi}\\). For \\(n = 2\\): \\(L = \\frac{2h}{2\\pi} = \\frac{h}{\\pi} = \\frac{6.63 \\times 10^{-34}}{\\pi} \\approx 2.11 \\times 10^{-34}\\) J s. This equals \\(2\\hbar\\), confirming the quantisation condition."
  },

  // ===========================================================
  // E2 QUANTUM PHYSICS — LEVEL 1 (2 questions, all HL)
  // ===========================================================

  {
    id: "E2_L1_01",
    text: "Light of {{frequency}} {{1.2 × 10¹⁵ Hz}} strikes a metal surface with a {{work function}} of {{3.0 eV}}. Calculate the {{maximum kinetic energy}} of the emitted {{photoelectrons}} in eV.",
    topic: "E",
    subtopic: "E2",
    level: 1,
    slhl: "HL",
    tooltips: [
      { phrase: "frequency", tip: "The frequency of the incident photons." },
      { phrase: "1.2 × 10¹⁵ Hz", tip: "This is f = 1.2 × 10¹⁵ Hz, in the ultraviolet range." },
      { phrase: "work function", tip: "The minimum energy required to remove an electron from the metal surface, Φ." },
      { phrase: "3.0 eV", tip: "Φ = 3.0 eV = 3.0 × 1.6 × 10⁻¹⁹ = 4.8 × 10⁻¹⁹ J." },
      { phrase: "maximum kinetic energy", tip: "The greatest KE any emitted electron can have, obtained from the photoelectric equation." },
      { phrase: "photoelectrons", tip: "Electrons emitted from the metal surface due to the photoelectric effect." }
    ],
    knowns: [
      { symbol: "f", value: "1.2 × 10¹⁵", unit: "Hz", description: "frequency of incident light" },
      { symbol: "Φ", value: "3.0", unit: "eV", description: "work function of the metal" }
    ],
    unknowns: [
      { symbol: "E_k(max)", unit: "eV", description: "maximum kinetic energy of photoelectrons" }
    ],
    acceptedSolutions: [
      ["E2_1", "CONST_h", "CONST_e"]
    ],
    requiredConstants: ["CONST_h", "CONST_e"],
    hints: [
      "Use the photoelectric equation: Eₖ(max) = hf − Φ.",
      "First calculate hf in joules, then convert to eV, then subtract Φ.",
      "hf = (6.63 × 10⁻³⁴)(1.2 × 10¹⁵) = 7.96 × 10⁻¹⁹ J = 4.97 eV. Eₖ(max) = 4.97 − 3.0 ≈ 2.0 eV."
    ],
    explanation: "Using \\(E_{k(max)} = hf - \\Phi\\): \\(hf = (6.63 \\times 10^{-34})(1.2 \\times 10^{15}) = 7.96 \\times 10^{-19}\\) J \\(= 4.97\\) eV. Therefore \\(E_{k(max)} = 4.97 - 3.0 \\approx 2.0\\) eV."
  },

  {
    id: "E2_L1_02",
    text: "An electron has a {{momentum}} of {{6.0 × 10⁻²⁴ kg m s⁻¹}}. Calculate its {{de Broglie wavelength}}.",
    topic: "E",
    subtopic: "E2",
    level: 1,
    slhl: "HL",
    tooltips: [
      { phrase: "momentum", tip: "The product of mass and velocity, p = mv." },
      { phrase: "6.0 × 10⁻²⁴ kg m s⁻¹", tip: "This is the electron's momentum, p = 6.0 × 10⁻²⁴ kg m s⁻¹." },
      { phrase: "de Broglie wavelength", tip: "The wavelength associated with a particle, given by λ = h/p." }
    ],
    knowns: [
      { symbol: "p", value: "6.0 × 10⁻²⁴", unit: "kg m s⁻¹", description: "electron momentum" }
    ],
    unknowns: [
      { symbol: "λ", unit: "m", description: "de Broglie wavelength" }
    ],
    acceptedSolutions: [
      ["E2_2", "CONST_h"]
    ],
    requiredConstants: ["CONST_h"],
    hints: [
      "What formula gives the de Broglie wavelength in terms of momentum?",
      "Use λ = h/p. You need the Planck constant.",
      "λ = 6.63 × 10⁻³⁴ / 6.0 × 10⁻²⁴ = 1.1 × 10⁻¹⁰ m."
    ],
    explanation: "Using \\(\\lambda = \\frac{h}{p}\\): \\(\\lambda = \\frac{6.63 \\times 10^{-34}}{6.0 \\times 10^{-24}} = 1.1 \\times 10^{-10}\\) m (about 0.11 nm, comparable to atomic spacings)."
  },

  // ===========================================================
  // E2 QUANTUM PHYSICS — LEVEL 2 (5 questions, all HL)
  // ===========================================================

  {
    id: "E2_L2_01",
    text: "An electron is {{accelerated from rest}} through a {{potential difference}} of {{150 V}}. Calculate the {{de Broglie wavelength}} of the electron after acceleration.",
    topic: "E",
    subtopic: "E2",
    level: 2,
    slhl: "HL",
    tooltips: [
      { phrase: "accelerated from rest", tip: "The electron starts with zero kinetic energy and gains KE from the electric field." },
      { phrase: "potential difference", tip: "The voltage through which the electron is accelerated. Work done = qΔV." },
      { phrase: "150 V", tip: "ΔV = 150 V." },
      { phrase: "de Broglie wavelength", tip: "The matter wavelength of the electron: λ = h/p." }
    ],
    knowns: [
      { symbol: "ΔV", value: "150", unit: "V", description: "accelerating potential difference" },
      { symbol: "v₀", value: "0", unit: "m s⁻¹", description: "initial speed (from rest)" }
    ],
    unknowns: [
      { symbol: "λ", unit: "m", description: "de Broglie wavelength" }
    ],
    acceptedSolutions: [
      ["D2_7", "A3_2", "A2_7", "E2_2", "CONST_e", "CONST_me", "CONST_h"],
      ["D2_7", "A3_2", "E2_2", "CONST_e", "CONST_me", "CONST_h"]
    ],
    requiredConstants: ["CONST_e", "CONST_me", "CONST_h"],
    hints: [
      "First, find the kinetic energy gained: Eₖ = qΔV = eΔV.",
      "Then find the speed or momentum: Eₖ = ½mv² gives v, then p = mv. Or use p = √(2mEₖ).",
      "Eₖ = 1.6 × 10⁻¹⁹ × 150 = 2.4 × 10⁻¹⁷ J. p = √(2 × 9.11 × 10⁻³¹ × 2.4 × 10⁻¹⁷) = 6.61 × 10⁻²⁴ kg m s⁻¹. λ = h/p ≈ 1.0 × 10⁻¹⁰ m."
    ],
    explanation: "Kinetic energy: \\(E_k = e\\Delta V = (1.6 \\times 10^{-19})(150) = 2.4 \\times 10^{-17}\\) J. Momentum: \\(p = \\sqrt{2m_e E_k} = \\sqrt{2(9.11 \\times 10^{-31})(2.4 \\times 10^{-17})} = 6.61 \\times 10^{-24}\\) kg m s⁻¹. de Broglie wavelength: \\(\\lambda = \\frac{h}{p} = \\frac{6.63 \\times 10^{-34}}{6.61 \\times 10^{-24}} \\approx 1.0 \\times 10^{-10}\\) m."
  },

  {
    id: "E2_L2_02",
    text: "A metal has a {{work function}} of {{2.3 eV}}. Calculate the {{threshold frequency}} below which {{no photoelectrons}} are emitted.",
    topic: "E",
    subtopic: "E2",
    level: 2,
    slhl: "HL",
    tooltips: [
      { phrase: "work function", tip: "The minimum photon energy needed to eject an electron from the surface: Φ." },
      { phrase: "2.3 eV", tip: "Φ = 2.3 eV = 2.3 × 1.6 × 10⁻¹⁹ = 3.68 × 10⁻¹⁹ J." },
      { phrase: "threshold frequency", tip: "The minimum frequency f₀ at which photoemission just begins; all photon energy goes to overcoming the work function." },
      { phrase: "no photoelectrons", tip: "Below the threshold frequency, photon energy hf < Φ and no electrons are emitted." }
    ],
    knowns: [
      { symbol: "Φ", value: "2.3", unit: "eV", description: "work function" }
    ],
    unknowns: [
      { symbol: "f₀", unit: "Hz", description: "threshold frequency" }
    ],
    acceptedSolutions: [
      ["E2_1", "E1_1", "CONST_h", "CONST_e"]
    ],
    requiredConstants: ["CONST_h", "CONST_e"],
    hints: [
      "At the threshold, all the photon energy goes to overcoming the work function. What is Eₖ(max) at threshold?",
      "At threshold, Eₖ(max) = 0, so hf₀ = Φ. Rearrange for f₀.",
      "f₀ = Φ/h = (2.3 × 1.6 × 10⁻¹⁹) / (6.63 × 10⁻³⁴) = 3.68 × 10⁻¹⁹ / 6.63 × 10⁻³⁴ ≈ 5.6 × 10¹⁴ Hz."
    ],
    explanation: "At threshold, \\(E_{k(max)} = 0\\), so \\(hf_0 = \\Phi\\). Therefore \\(f_0 = \\frac{\\Phi}{h} = \\frac{2.3 \\times 1.6 \\times 10^{-19}}{6.63 \\times 10^{-34}} = \\frac{3.68 \\times 10^{-19}}{6.63 \\times 10^{-34}} \\approx 5.6 \\times 10^{14}\\) Hz (visible light, green-yellow)."
  },

  {
    id: "E2_L2_03",
    text: "UV light of {{wavelength}} {{200 nm}} strikes a metal with {{work function}} {{4.0 eV}}. Determine the {{maximum speed}} of the emitted {{photoelectrons}}.",
    topic: "E",
    subtopic: "E2",
    level: 2,
    slhl: "HL",
    tooltips: [
      { phrase: "wavelength", tip: "The wavelength of the incident UV photons." },
      { phrase: "200 nm", tip: "λ = 200 × 10⁻⁹ m = 2.0 × 10⁻⁷ m." },
      { phrase: "work function", tip: "The minimum energy to free an electron from the surface." },
      { phrase: "4.0 eV", tip: "Φ = 4.0 eV = 6.4 × 10⁻¹⁹ J." },
      { phrase: "maximum speed", tip: "The fastest emitted electron has KE = Eₖ(max) = ½mv²." },
      { phrase: "photoelectrons", tip: "Electrons released from the surface by the photoelectric effect." }
    ],
    knowns: [
      { symbol: "λ", value: "2.0 × 10⁻⁷", unit: "m", description: "wavelength of UV light" },
      { symbol: "Φ", value: "4.0", unit: "eV", description: "work function" }
    ],
    unknowns: [
      { symbol: "v", unit: "m s⁻¹", description: "maximum speed of photoelectrons" }
    ],
    acceptedSolutions: [
      ["E1_1", "C2_1", "E2_1", "A3_2", "CONST_h", "CONST_c", "CONST_e", "CONST_me"]
    ],
    requiredConstants: ["CONST_h", "CONST_c", "CONST_e", "CONST_me"],
    hints: [
      "First find the photon energy: E = hc/λ. Then use the photoelectric equation to find Eₖ(max).",
      "E = hc/λ = (6.63 × 10⁻³⁴ × 3.0 × 10⁸)/(2.0 × 10⁻⁷) = 9.95 × 10⁻¹⁹ J = 6.22 eV. Eₖ(max) = 6.22 − 4.0 = 2.22 eV.",
      "Eₖ(max) = 2.22 × 1.6 × 10⁻¹⁹ = 3.55 × 10⁻¹⁹ J. v = √(2Eₖ/mₑ) = √(2 × 3.55 × 10⁻¹⁹ / 9.11 × 10⁻³¹) ≈ 8.8 × 10⁵ m s⁻¹."
    ],
    explanation: "Photon energy: \\(E = \\frac{hc}{\\lambda} = \\frac{(6.63 \\times 10^{-34})(3.0 \\times 10^8)}{2.0 \\times 10^{-7}} = 9.95 \\times 10^{-19}\\) J \\(= 6.22\\) eV. \\(E_{k(max)} = 6.22 - 4.0 = 2.22\\) eV \\(= 3.55 \\times 10^{-19}\\) J. Speed: \\(v = \\sqrt{\\frac{2E_k}{m_e}} = \\sqrt{\\frac{2(3.55 \\times 10^{-19})}{9.11 \\times 10^{-31}}} \\approx 8.8 \\times 10^5\\) m s⁻¹."
  },

  {
    id: "E2_L2_04",
    text: "An X-ray photon of {{wavelength}} {{0.0500 nm}} undergoes {{Compton scattering}} at an angle of {{θ = 90°}}. Calculate the {{wavelength shift}} and the {{new wavelength}} of the scattered photon.",
    topic: "E",
    subtopic: "E2",
    level: 2,
    slhl: "HL",
    tooltips: [
      { phrase: "wavelength", tip: "The initial wavelength of the X-ray photon before scattering." },
      { phrase: "0.0500 nm", tip: "λ = 0.0500 × 10⁻⁹ m = 5.00 × 10⁻¹¹ m." },
      { phrase: "Compton scattering", tip: "The scattering of a photon off a free electron, resulting in a wavelength increase." },
      { phrase: "θ = 90°", tip: "The scattering angle between the incident and scattered photon directions." },
      { phrase: "wavelength shift", tip: "Δλ = (h/mₑc)(1 − cosθ), the increase in wavelength due to Compton scattering." },
      { phrase: "new wavelength", tip: "The wavelength after scattering: λ' = λ + Δλ." }
    ],
    knowns: [
      { symbol: "λ", value: "5.00 × 10⁻¹¹", unit: "m", description: "initial photon wavelength" },
      { symbol: "θ", value: "90", unit: "°", description: "scattering angle" }
    ],
    unknowns: [
      { symbol: "Δλ", unit: "m", description: "Compton wavelength shift" },
      { symbol: "λ'", unit: "m", description: "wavelength of scattered photon" }
    ],
    acceptedSolutions: [
      ["E2_3", "CONST_h", "CONST_me", "CONST_c"]
    ],
    requiredConstants: ["CONST_h", "CONST_me", "CONST_c"],
    hints: [
      "Use the Compton scattering formula: Δλ = (h/mₑc)(1 − cosθ). What is cos90°?",
      "cos90° = 0, so Δλ = h/(mₑc). Calculate this value.",
      "Δλ = 6.63 × 10⁻³⁴ / (9.11 × 10⁻³¹ × 3.0 × 10⁸) = 2.43 × 10⁻¹² m. λ' = 5.00 × 10⁻¹¹ + 2.43 × 10⁻¹² = 5.24 × 10⁻¹¹ m."
    ],
    explanation: "Compton shift: \\(\\Delta\\lambda = \\frac{h}{m_e c}(1 - \\cos\\theta) = \\frac{6.63 \\times 10^{-34}}{(9.11 \\times 10^{-31})(3.0 \\times 10^8)}(1 - 0) = 2.43 \\times 10^{-12}\\) m. New wavelength: \\(\\lambda' = 5.00 \\times 10^{-11} + 2.43 \\times 10^{-12} = 5.24 \\times 10^{-11}\\) m."
  },

  {
    id: "E2_L2_05",
    text: "An X-ray photon of {{wavelength}} {{0.0400 nm}} undergoes {{Compton scattering}} at {{θ = 180°}} (backscatter). Calculate the {{energy}} of the {{scattered photon}} in eV.",
    topic: "E",
    subtopic: "E2",
    level: 2,
    slhl: "HL",
    tooltips: [
      { phrase: "wavelength", tip: "The initial wavelength of the incident X-ray photon." },
      { phrase: "0.0400 nm", tip: "λ = 4.00 × 10⁻¹¹ m." },
      { phrase: "Compton scattering", tip: "Scattering of a photon off a free electron, causing a wavelength increase." },
      { phrase: "θ = 180°", tip: "Backscatter: the photon reverses direction. cos180° = −1, giving maximum wavelength shift." },
      { phrase: "energy", tip: "The energy of the photon after scattering: E' = hc/λ'." },
      { phrase: "scattered photon", tip: "The photon after Compton scattering, which has a longer wavelength and lower energy." }
    ],
    knowns: [
      { symbol: "λ", value: "4.00 × 10⁻¹¹", unit: "m", description: "initial photon wavelength" },
      { symbol: "θ", value: "180", unit: "°", description: "scattering angle (backscatter)" }
    ],
    unknowns: [
      { symbol: "E'", unit: "eV", description: "energy of scattered photon" }
    ],
    acceptedSolutions: [
      ["E2_3", "E1_1", "C2_1", "CONST_h", "CONST_me", "CONST_c", "CONST_e"]
    ],
    requiredConstants: ["CONST_h", "CONST_me", "CONST_c", "CONST_e"],
    hints: [
      "First find Δλ using the Compton formula with cos180° = −1, so Δλ = 2h/(mₑc).",
      "Δλ = 2 × 2.43 × 10⁻¹² = 4.86 × 10⁻¹² m. New wavelength: λ' = 4.00 × 10⁻¹¹ + 4.86 × 10⁻¹² = 4.486 × 10⁻¹¹ m.",
      "E' = hc/λ' = (6.63 × 10⁻³⁴ × 3.0 × 10⁸) / (4.486 × 10⁻¹¹) = 4.43 × 10⁻¹⁵ J = 2.77 × 10⁴ eV ≈ 27.7 keV."
    ],
    explanation: "Compton shift: \\(\\Delta\\lambda = \\frac{h}{m_e c}(1 - \\cos 180°) = \\frac{2h}{m_e c} = 2(2.43 \\times 10^{-12}) = 4.86 \\times 10^{-12}\\) m. \\(\\lambda' = 4.00 \\times 10^{-11} + 4.86 \\times 10^{-12} = 4.486 \\times 10^{-11}\\) m. Energy: \\(E' = \\frac{hc}{\\lambda'} = \\frac{1.989 \\times 10^{-25}}{4.486 \\times 10^{-11}} = 4.43 \\times 10^{-15}\\) J \\(\\approx 27.7\\) keV."
  },

  // ===========================================================
  // E3 RADIOACTIVE DECAY — LEVEL 1 (3 questions: 1 SL + 2 HL)
  // ===========================================================

  // --- E3 SL L1 (1 question) ---

  {
    id: "E3_L1_01",
    text: "In a nuclear reaction, a {{mass defect}} of {{0.0035 u}} is observed. Calculate the {{energy released}} in MeV. (1 u = 931.5 MeV/c².)",
    topic: "E",
    subtopic: "E3",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "mass defect", tip: "The difference between the total mass of separate nucleons and the mass of the assembled nucleus." },
      { phrase: "0.0035 u", tip: "Δm = 0.0035 unified atomic mass units." },
      { phrase: "energy released", tip: "The energy equivalent of the mass defect, via E = mc²." }
    ],
    knowns: [
      { symbol: "Δm", value: "0.0035", unit: "u", description: "mass defect" }
    ],
    unknowns: [
      { symbol: "E", unit: "MeV", description: "energy released" }
    ],
    acceptedSolutions: [
      ["E3_1", "CONST_u", "CONST_c"]
    ],
    requiredConstants: ["CONST_u", "CONST_c"],
    hints: [
      "Use E = mc² to convert mass defect to energy.",
      "You can use the shortcut: 1 u = 931.5 MeV/c², so E = Δm × 931.5 MeV.",
      "E = 0.0035 × 931.5 = 3.26 MeV ≈ 3.3 MeV."
    ],
    explanation: "Using \\(E = \\Delta m c^2\\) with the conversion \\(1\\) u \\(= 931.5\\) MeV/c²: \\(E = 0.0035 \\times 931.5 \\approx 3.3\\) MeV."
  },

  // --- E3 HL L1 (2 questions) ---

  {
    id: "E3_L1_02",
    text: "A radioactive sample has a {{decay constant}} of {{2.5 × 10⁻³ s⁻¹}}. Calculate its {{half-life}}.",
    topic: "E",
    subtopic: "E3",
    level: 1,
    slhl: "HL",
    tooltips: [
      { phrase: "decay constant", tip: "The probability of decay per unit time for each nucleus, symbol λ." },
      { phrase: "2.5 × 10⁻³ s⁻¹", tip: "λ = 2.5 × 10⁻³ s⁻¹." },
      { phrase: "half-life", tip: "The time for half the radioactive nuclei to decay, T½ = ln2/λ." }
    ],
    knowns: [
      { symbol: "λ", value: "2.5 × 10⁻³", unit: "s⁻¹", description: "decay constant" }
    ],
    unknowns: [
      { symbol: "T½", unit: "s", description: "half-life" }
    ],
    acceptedSolutions: [
      ["E3_4"]
    ],
    requiredConstants: [],
    hints: [
      "What is the relationship between half-life and the decay constant?",
      "Use T½ = ln2/λ.",
      "T½ = 0.693 / (2.5 × 10⁻³) = 277 s ≈ 280 s."
    ],
    explanation: "Using \\(T_{1/2} = \\frac{\\ln 2}{\\lambda} = \\frac{0.693}{2.5 \\times 10^{-3}} = 277 \\approx 280\\) s (about 4.6 minutes)."
  },

  {
    id: "E3_L1_03",
    text: "A sample initially contains {{N₀ = 4.0 × 10⁸}} radioactive nuclei. After {{time t}}, {{2.5 × 10⁸}} nuclei remain. If the {{decay constant}} is {{λ = 0.015 s⁻¹}}, find {{t}}.",
    topic: "E",
    subtopic: "E3",
    level: 1,
    slhl: "HL",
    tooltips: [
      { phrase: "N₀ = 4.0 × 10⁸", tip: "The initial number of undecayed nuclei." },
      { phrase: "time t", tip: "The elapsed time, which you need to find." },
      { phrase: "2.5 × 10⁸", tip: "The number of undecayed nuclei remaining at time t." },
      { phrase: "decay constant", tip: "λ is the probability of decay per unit time per nucleus." },
      { phrase: "λ = 0.015 s⁻¹", tip: "The decay constant for this isotope." },
      { phrase: "t", tip: "Rearrange the exponential decay law to solve for time." }
    ],
    knowns: [
      { symbol: "N₀", value: "4.0 × 10⁸", unit: "", description: "initial number of nuclei" },
      { symbol: "N", value: "2.5 × 10⁸", unit: "", description: "remaining nuclei" },
      { symbol: "λ", value: "0.015", unit: "s⁻¹", description: "decay constant" }
    ],
    unknowns: [
      { symbol: "t", unit: "s", description: "elapsed time" }
    ],
    acceptedSolutions: [
      ["E3_2"]
    ],
    requiredConstants: [],
    hints: [
      "Use N = N₀e^(−λt) and rearrange for t.",
      "N/N₀ = e^(−λt), so −λt = ln(N/N₀), giving t = −ln(N/N₀)/λ.",
      "t = −ln(2.5 × 10⁸ / 4.0 × 10⁸) / 0.015 = −ln(0.625) / 0.015 = 0.470 / 0.015 ≈ 31 s."
    ],
    explanation: "From \\(N = N_0 e^{-\\lambda t}\\): \\(t = -\\frac{\\ln(N/N_0)}{\\lambda} = -\\frac{\\ln(0.625)}{0.015} = \\frac{0.470}{0.015} \\approx 31\\) s."
  },

  // ===========================================================
  // E3 RADIOACTIVE DECAY — LEVEL 2 (7 questions: 2 SL + 5 HL)
  // ===========================================================

  // --- E3 SL L2 (2 questions) ---

  {
    id: "E3_L2_01",
    text: "In the fusion of two {{deuterium}} nuclei (each {{2.0141 u}}) to form {{helium-3}} ({{3.0160 u}}) and a {{neutron}} ({{1.0087 u}}), calculate the {{energy released}} per reaction in MeV.",
    topic: "E",
    subtopic: "E3",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "deuterium", tip: "An isotope of hydrogen with one proton and one neutron. Mass number A = 2." },
      { phrase: "2.0141 u", tip: "The atomic mass of a deuterium nucleus." },
      { phrase: "helium-3", tip: "A helium isotope with 2 protons and 1 neutron." },
      { phrase: "3.0160 u", tip: "The atomic mass of a helium-3 nucleus." },
      { phrase: "neutron", tip: "A free neutron is also produced." },
      { phrase: "1.0087 u", tip: "The mass of a neutron." },
      { phrase: "energy released", tip: "Found from the mass defect via E = Δmc²." }
    ],
    knowns: [
      { symbol: "m_D", value: "2.0141", unit: "u", description: "mass of deuterium nucleus" },
      { symbol: "m_He3", value: "3.0160", unit: "u", description: "mass of helium-3 nucleus" },
      { symbol: "m_n", value: "1.0087", unit: "u", description: "mass of neutron" }
    ],
    unknowns: [
      { symbol: "E", unit: "MeV", description: "energy released" }
    ],
    acceptedSolutions: [
      ["E3_1", "CONST_u", "CONST_c"]
    ],
    requiredConstants: ["CONST_u", "CONST_c"],
    hints: [
      "Find the total mass before and after. Mass before = 2 × 2.0141 u. Mass after = 3.0160 + 1.0087 u.",
      "Δm = mass before − mass after = 4.0282 − 4.0247 = 0.0035 u.",
      "E = 0.0035 × 931.5 ≈ 3.3 MeV."
    ],
    explanation: "Mass before: \\(2 \\times 2.0141 = 4.0282\\) u. Mass after: \\(3.0160 + 1.0087 = 4.0247\\) u. Mass defect: \\(\\Delta m = 0.0035\\) u. Energy: \\(E = 0.0035 \\times 931.5 \\approx 3.3\\) MeV."
  },

  {
    id: "E3_L2_02",
    text: "A {{proton}} (mass {{1.0073 u}}) and a {{neutron}} (mass {{1.0087 u}}) combine to form a {{deuteron}} (mass {{2.0141 u}}). What is the {{binding energy}} of the deuteron in MeV? What fraction of the total rest mass is converted to {{binding energy}}?",
    topic: "E",
    subtopic: "E3",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "proton", tip: "A proton, one of the nucleons in the nucleus." },
      { phrase: "1.0073 u", tip: "The mass of a proton in atomic mass units." },
      { phrase: "neutron", tip: "A neutron, the other type of nucleon." },
      { phrase: "1.0087 u", tip: "The mass of a neutron." },
      { phrase: "deuteron", tip: "The nucleus of deuterium (hydrogen-2), containing one proton and one neutron." },
      { phrase: "2.0141 u", tip: "The measured mass of the deuteron." },
      { phrase: "binding energy", tip: "The energy required to completely separate the nucleons, equal to Δmc²." }
    ],
    knowns: [
      { symbol: "m_p", value: "1.0073", unit: "u", description: "proton mass" },
      { symbol: "m_n", value: "1.0087", unit: "u", description: "neutron mass" },
      { symbol: "m_d", value: "2.0141", unit: "u", description: "deuteron mass" }
    ],
    unknowns: [
      { symbol: "B", unit: "MeV", description: "binding energy of deuteron" }
    ],
    acceptedSolutions: [
      ["E3_1", "CONST_u", "CONST_c"]
    ],
    requiredConstants: ["CONST_u", "CONST_c"],
    hints: [
      "Mass defect = (mass of separate nucleons) − (mass of nucleus).",
      "Δm = (1.0073 + 1.0087) − 2.0141 = 0.0019 u.",
      "B = 0.0019 × 931.5 ≈ 1.77 MeV. Fraction = 0.0019/2.0160 ≈ 0.094%."
    ],
    explanation: "Mass defect: \\(\\Delta m = (1.0073 + 1.0087) - 2.0141 = 0.0019\\) u. Binding energy: \\(B = 0.0019 \\times 931.5 \\approx 1.77\\) MeV. Fraction of mass converted: \\(0.0019 / 2.0160 \\approx 9.4 \\times 10^{-4}\\) or about 0.094%."
  },

  // --- E3 HL L2 (5 questions) ---

  {
    id: "E3_L2_03",
    text: "A radioactive isotope has a {{half-life}} of {{8.0 days}}. A sample initially contains {{6.0 × 10¹⁰}} nuclei. Calculate the {{activity}} of the sample after {{24 days}}.",
    topic: "E",
    subtopic: "E3",
    level: 2,
    slhl: "HL",
    tooltips: [
      { phrase: "half-life", tip: "The time for half of the radioactive nuclei to decay." },
      { phrase: "8.0 days", tip: "T½ = 8.0 days = 8.0 × 86400 = 6.912 × 10⁵ s." },
      { phrase: "6.0 × 10¹⁰", tip: "N₀ = 6.0 × 10¹⁰, the initial number of radioactive nuclei." },
      { phrase: "activity", tip: "The rate of decay: A = λN, measured in becquerels (Bq)." },
      { phrase: "24 days", tip: "t = 24 days = 3 half-lives." }
    ],
    knowns: [
      { symbol: "T½", value: "8.0", unit: "days", description: "half-life" },
      { symbol: "N₀", value: "6.0 × 10¹⁰", unit: "", description: "initial number of nuclei" },
      { symbol: "t", value: "24", unit: "days", description: "elapsed time" }
    ],
    unknowns: [
      { symbol: "A", unit: "Bq", description: "activity after 24 days" }
    ],
    acceptedSolutions: [
      ["E3_4", "E3_3", "E3_2"],
      ["E3_4", "E3_3"]
    ],
    requiredConstants: [],
    hints: [
      "First find the decay constant: λ = ln2/T½. Convert T½ to seconds.",
      "24 days = 3 half-lives. N = N₀/2³ = N₀/8. Then A = λN.",
      "λ = 0.693/(6.912 × 10⁵) = 1.003 × 10⁻⁶ s⁻¹. N = 6.0 × 10¹⁰ / 8 = 7.5 × 10⁹. A = (1.003 × 10⁻⁶)(7.5 × 10⁹) ≈ 7.5 × 10³ Bq."
    ],
    explanation: "Decay constant: \\(\\lambda = \\frac{\\ln 2}{T_{1/2}} = \\frac{0.693}{6.912 \\times 10^5} = 1.003 \\times 10^{-6}\\) s⁻¹. After 24 days (3 half-lives): \\(N = \\frac{N_0}{8} = 7.5 \\times 10^9\\). Activity: \\(A = \\lambda N = (1.003 \\times 10^{-6})(7.5 \\times 10^9) \\approx 7.5 \\times 10^3\\) Bq."
  },

  {
    id: "E3_L2_04",
    text: "The {{activity}} of a radioactive source drops from {{1200 Bq}} to {{150 Bq}} in {{30 minutes}}. Calculate the {{decay constant}} and the {{half-life}} of the isotope.",
    topic: "E",
    subtopic: "E3",
    level: 2,
    slhl: "HL",
    tooltips: [
      { phrase: "activity", tip: "The rate of radioactive decay, A = λN, measured in becquerels." },
      { phrase: "1200 Bq", tip: "A₀ = 1200 Bq, the initial activity." },
      { phrase: "150 Bq", tip: "A = 150 Bq, the activity after 30 minutes." },
      { phrase: "30 minutes", tip: "t = 30 min = 1800 s." },
      { phrase: "decay constant", tip: "λ, the probability of decay per second per nucleus." },
      { phrase: "half-life", tip: "T½ = ln2/λ." }
    ],
    knowns: [
      { symbol: "A₀", value: "1200", unit: "Bq", description: "initial activity" },
      { symbol: "A", value: "150", unit: "Bq", description: "activity after 30 minutes" },
      { symbol: "t", value: "1800", unit: "s", description: "elapsed time" }
    ],
    unknowns: [
      { symbol: "λ", unit: "s⁻¹", description: "decay constant" },
      { symbol: "T½", unit: "s", description: "half-life" }
    ],
    acceptedSolutions: [
      ["E3_3", "E3_4"]
    ],
    requiredConstants: [],
    hints: [
      "Activity also decays exponentially: A = A₀e^(−λt). Rearrange for λ.",
      "A/A₀ = e^(−λt), so λ = −ln(A/A₀)/t = −ln(150/1200)/1800.",
      "λ = −ln(0.125)/1800 = 2.079/1800 = 1.155 × 10⁻³ s⁻¹. T½ = 0.693/(1.155 × 10⁻³) = 600 s = 10 min."
    ],
    explanation: "Using \\(A = A_0 e^{-\\lambda t}\\): \\(\\lambda = -\\frac{\\ln(A/A_0)}{t} = -\\frac{\\ln(0.125)}{1800} = \\frac{2.079}{1800} = 1.155 \\times 10^{-3}\\) s⁻¹. Half-life: \\(T_{1/2} = \\frac{\\ln 2}{\\lambda} = \\frac{0.693}{1.155 \\times 10^{-3}} = 600\\) s \\(= 10\\) minutes. (Note: 150/1200 = 1/8 = (1/2)³, confirming 3 half-lives in 30 min.)"
  },

  {
    id: "E3_L2_05",
    text: "A sample of {{iodine-131}} (half-life {{8.02 days}}) initially has an {{activity}} of {{5.0 × 10⁶ Bq}}. How many {{iodine-131 atoms}} are in the sample at this time?",
    topic: "E",
    subtopic: "E3",
    level: 2,
    slhl: "HL",
    tooltips: [
      { phrase: "iodine-131", tip: "A radioactive isotope of iodine commonly used in medical treatments." },
      { phrase: "8.02 days", tip: "T½ = 8.02 days = 6.929 × 10⁵ s." },
      { phrase: "activity", tip: "A = λN, the number of decays per second." },
      { phrase: "5.0 × 10⁶ Bq", tip: "A = 5.0 × 10⁶ decays per second." },
      { phrase: "iodine-131 atoms", tip: "The number of undecayed radioactive nuclei present, N." }
    ],
    knowns: [
      { symbol: "A", value: "5.0 × 10⁶", unit: "Bq", description: "initial activity" },
      { symbol: "T½", value: "8.02", unit: "days", description: "half-life of I-131" }
    ],
    unknowns: [
      { symbol: "N", unit: "", description: "number of I-131 atoms" }
    ],
    acceptedSolutions: [
      ["E3_3", "E3_4"]
    ],
    requiredConstants: [],
    hints: [
      "Since A = λN, you need to find λ first from the half-life.",
      "λ = ln2/T½. Convert T½ to seconds: 8.02 × 86400 = 6.929 × 10⁵ s.",
      "λ = 0.693 / (6.929 × 10⁵) = 1.000 × 10⁻⁶ s⁻¹. N = A/λ = 5.0 × 10⁶ / 1.000 × 10⁻⁶ = 5.0 × 10¹² atoms."
    ],
    explanation: "Decay constant: \\(\\lambda = \\frac{\\ln 2}{T_{1/2}} = \\frac{0.693}{6.929 \\times 10^5} = 1.000 \\times 10^{-6}\\) s⁻¹. Number of atoms: \\(N = \\frac{A}{\\lambda} = \\frac{5.0 \\times 10^6}{1.000 \\times 10^{-6}} = 5.0 \\times 10^{12}\\) atoms."
  },

  {
    id: "E3_L2_06",
    text: "If the {{decay constant}} of a radioactive isotope is {{tripled}}, by what factor does the {{half-life}} change? How does this affect the time for the number of nuclei to fall to {{one quarter}} of the original?",
    topic: "E",
    subtopic: "E3",
    level: 2,
    slhl: "HL",
    tooltips: [
      { phrase: "decay constant", tip: "The probability of decay per unit time per nucleus, λ." },
      { phrase: "tripled", tip: "The new decay constant is 3λ." },
      { phrase: "half-life", tip: "T½ = ln2/λ, inversely proportional to the decay constant." },
      { phrase: "one quarter", tip: "N/N₀ = 1/4, which corresponds to two half-lives." }
    ],
    knowns: [
      { symbol: "λ", value: "3λ", unit: "", description: "decay constant tripled" }
    ],
    unknowns: [
      { symbol: "T½", unit: "", description: "factor change in half-life" },
      { symbol: "t(1/4)", unit: "", description: "factor change in time to reach N₀/4" }
    ],
    acceptedSolutions: [
      ["E3_4", "E3_2"]
    ],
    requiredConstants: [],
    hints: [
      "T½ = ln2/λ. If λ triples, what happens to T½?",
      "T½ is inversely proportional to λ, so T½ reduces by a factor of 3.",
      "Time to reach N₀/4 = 2 half-lives. Since each half-life is now T½/3, the time to reach 1/4 is also reduced by a factor of 3."
    ],
    explanation: "Since \\(T_{1/2} = \\frac{\\ln 2}{\\lambda}\\), tripling \\(\\lambda\\) divides the half-life by 3. The time to reach \\(N_0/4\\) is \\(2T_{1/2}\\), which also decreases by a factor of 3."
  },

  {
    id: "E3_L2_07",
    text: "A sample initially contains {{1.0 × 10¹²}} atoms of a radioactive isotope with {{half-life}} {{20 minutes}}. Calculate the number of atoms that have {{decayed}} after {{one hour}}.",
    topic: "E",
    subtopic: "E3",
    level: 2,
    slhl: "HL",
    tooltips: [
      { phrase: "1.0 × 10¹²", tip: "N₀ = 1.0 × 10¹², the initial number of radioactive atoms." },
      { phrase: "half-life", tip: "T½ = 20 minutes." },
      { phrase: "20 minutes", tip: "T½ = 20 min. In 60 min, there are 3 half-lives." },
      { phrase: "decayed", tip: "The number of atoms that have decayed = N₀ − N." },
      { phrase: "one hour", tip: "t = 60 min = 3 half-lives." }
    ],
    knowns: [
      { symbol: "N₀", value: "1.0 × 10¹²", unit: "", description: "initial number of atoms" },
      { symbol: "T½", value: "20", unit: "min", description: "half-life" },
      { symbol: "t", value: "60", unit: "min", description: "elapsed time" }
    ],
    unknowns: [
      { symbol: "N_decayed", unit: "", description: "number of atoms that have decayed" }
    ],
    acceptedSolutions: [
      ["E3_2", "E3_4"]
    ],
    requiredConstants: [],
    hints: [
      "How many half-lives have passed in 60 min? Then find N remaining.",
      "60/20 = 3 half-lives. N = N₀ × (1/2)³ = N₀/8.",
      "N = 1.0 × 10¹² / 8 = 1.25 × 10¹¹. Decayed = N₀ − N = 1.0 × 10¹² − 1.25 × 10¹¹ = 8.75 × 10¹¹."
    ],
    explanation: "Number of half-lives: \\(60/20 = 3\\). Remaining: \\(N = N_0 \\times (1/2)^3 = \\frac{1.0 \\times 10^{12}}{8} = 1.25 \\times 10^{11}\\). Decayed: \\(N_0 - N = 1.0 \\times 10^{12} - 1.25 \\times 10^{11} = 8.75 \\times 10^{11}\\) atoms."
  },

  // ===========================================================
  // E5 FUSION AND STARS — LEVEL 1 (2 questions, all SL)
  // ===========================================================

  {
    id: "E5_L1_01",
    text: "A nearby star has a {{stellar parallax}} angle of {{0.040 arc-seconds}}. Calculate its {{distance}} from Earth in {{parsecs}} and in {{light-years}}. (1 pc ≈ 3.26 ly.)",
    topic: "E",
    subtopic: "E5",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "stellar parallax", tip: "The apparent angular shift of a star as Earth orbits the Sun, measured in arc-seconds." },
      { phrase: "0.040 arc-seconds", tip: "p = 0.040 arc-seconds, a very small angle indicating the star is relatively far away." },
      { phrase: "distance", tip: "The distance to the star, inversely proportional to the parallax angle." },
      { phrase: "parsecs", tip: "A unit of distance: 1 parsec is the distance at which a star has a parallax of 1 arc-second." },
      { phrase: "light-years", tip: "Another astronomical distance unit. 1 pc ≈ 3.26 ly." }
    ],
    knowns: [
      { symbol: "p", value: "0.040", unit: "arc-seconds", description: "stellar parallax angle" }
    ],
    unknowns: [
      { symbol: "d", unit: "pc", description: "distance in parsecs" },
      { symbol: "d", unit: "ly", description: "distance in light-years" }
    ],
    acceptedSolutions: [
      ["E5_1"]
    ],
    requiredConstants: [],
    hints: [
      "What is the relationship between parallax angle (in arc-seconds) and distance (in parsecs)?",
      "d(pc) = 1/p(arc-second). Substitute p = 0.040.",
      "d = 1/0.040 = 25 pc. In light-years: 25 × 3.26 ≈ 82 ly."
    ],
    explanation: "Using \\(d = \\frac{1}{p}\\): \\(d = \\frac{1}{0.040} = 25\\) pc. Converting: \\(25 \\times 3.26 \\approx 82\\) light-years."
  },

  {
    id: "E5_L1_02",
    text: "A star is observed to be {{10 parsecs}} from Earth. What is its {{parallax angle}} in {{arc-seconds}}?",
    topic: "E",
    subtopic: "E5",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "10 parsecs", tip: "d = 10 pc." },
      { phrase: "parallax angle", tip: "The apparent angular shift due to Earth's orbital motion." },
      { phrase: "arc-seconds", tip: "A unit of angle: 1 arc-second = 1/3600 of a degree." }
    ],
    knowns: [
      { symbol: "d", value: "10", unit: "pc", description: "distance to the star" }
    ],
    unknowns: [
      { symbol: "p", unit: "arc-seconds", description: "parallax angle" }
    ],
    acceptedSolutions: [
      ["E5_1"]
    ],
    requiredConstants: [],
    hints: [
      "What formula links distance in parsecs to parallax in arc-seconds?",
      "d = 1/p, so p = 1/d.",
      "p = 1/10 = 0.10 arc-seconds."
    ],
    explanation: "Using \\(d = \\frac{1}{p}\\), rearranged: \\(p = \\frac{1}{d} = \\frac{1}{10} = 0.10\\) arc-seconds."
  },

  // ===========================================================
  // E5 FUSION AND STARS — LEVEL 2 (2 questions, all SL)
  // ===========================================================

  {
    id: "E5_L2_01",
    text: "A star has a {{parallax angle}} of {{0.020 arc-seconds}} and an {{apparent brightness}} of {{3.5 × 10⁻⁹ W m⁻²}}. Calculate the {{luminosity}} of the star.",
    topic: "E",
    subtopic: "E5",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "parallax angle", tip: "The apparent angular shift used to determine stellar distance: d = 1/p." },
      { phrase: "0.020 arc-seconds", tip: "p = 0.020 arc-seconds, giving d = 50 pc." },
      { phrase: "apparent brightness", tip: "The power per unit area received at Earth: b = L/(4πd²)." },
      { phrase: "3.5 × 10⁻⁹ W m⁻²", tip: "b = 3.5 × 10⁻⁹ W m⁻²." },
      { phrase: "luminosity", tip: "The total power output of the star, L." }
    ],
    knowns: [
      { symbol: "p", value: "0.020", unit: "arc-seconds", description: "parallax angle" },
      { symbol: "b", value: "3.5 × 10⁻⁹", unit: "W m⁻²", description: "apparent brightness" }
    ],
    unknowns: [
      { symbol: "L", unit: "W", description: "luminosity of the star" }
    ],
    acceptedSolutions: [
      ["E5_1", "B1_7"]
    ],
    requiredConstants: [],
    hints: [
      "First find the distance: d = 1/p in parsecs. Then convert to metres (1 pc = 3.086 × 10¹⁶ m).",
      "d = 1/0.020 = 50 pc = 50 × 3.086 × 10¹⁶ = 1.543 × 10¹⁸ m. Then use b = L/(4πd²).",
      "L = 4πd²b = 4π(1.543 × 10¹⁸)² × 3.5 × 10⁻⁹ = 4π(2.381 × 10³⁶)(3.5 × 10⁻⁹) ≈ 1.05 × 10²⁹ W."
    ],
    explanation: "Distance: \\(d = 1/0.020 = 50\\) pc \\(= 50 \\times 3.086 \\times 10^{16} = 1.543 \\times 10^{18}\\) m. Luminosity: \\(L = 4\\pi d^2 b = 4\\pi (1.543 \\times 10^{18})^2 (3.5 \\times 10^{-9}) \\approx 1.05 \\times 10^{29}\\) W."
  },

  {
    id: "E5_L2_02",
    text: "A star has a {{surface temperature}} of {{5800 K}} and a {{luminosity}} of {{3.85 × 10²⁶ W}}. Using the {{Stefan-Boltzmann law}} and {{Wien's displacement law}}, calculate the star's {{radius}} and the {{peak wavelength}} of its emission spectrum.",
    topic: "E",
    subtopic: "E5",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "surface temperature", tip: "The effective temperature of the star's photosphere, T." },
      { phrase: "5800 K", tip: "T = 5800 K, similar to the Sun." },
      { phrase: "luminosity", tip: "The total power output of the star, L." },
      { phrase: "3.85 × 10²⁶ W", tip: "L = 3.85 × 10²⁶ W (close to the Sun's luminosity)." },
      { phrase: "Stefan-Boltzmann law", tip: "L = σAT⁴, where A is the surface area of the star." },
      { phrase: "Wien's displacement law", tip: "λ_max · T = 2.9 × 10⁻³ m K." },
      { phrase: "radius", tip: "The star's radius, found from L = σ(4πR²)T⁴." },
      { phrase: "peak wavelength", tip: "The wavelength at which the star emits most intensely." }
    ],
    knowns: [
      { symbol: "T", value: "5800", unit: "K", description: "surface temperature" },
      { symbol: "L", value: "3.85 × 10²⁶", unit: "W", description: "luminosity" }
    ],
    unknowns: [
      { symbol: "R", unit: "m", description: "radius of the star" },
      { symbol: "λ_max", unit: "m", description: "peak emission wavelength" }
    ],
    acceptedSolutions: [
      ["B1_6", "B1_8", "CONST_sigma"]
    ],
    requiredConstants: ["CONST_sigma"],
    hints: [
      "Use L = σ(4πR²)T⁴ to find R. Rearrange: R = √(L / (4πσT⁴)).",
      "R = √(3.85 × 10²⁶ / (4π × 5.67 × 10⁻⁸ × (5800)⁴)). Calculate T⁴ first.",
      "T⁴ = (5800)⁴ = 1.132 × 10¹⁵. R = √(3.85 × 10²⁶ / (4π × 5.67 × 10⁻⁸ × 1.132 × 10¹⁵)) ≈ 6.96 × 10⁸ m. λ_max = 2.9 × 10⁻³ / 5800 ≈ 5.0 × 10⁻⁷ m."
    ],
    explanation: "From \\(L = \\sigma (4\\pi R^2) T^4\\): \\(R = \\sqrt{\\frac{L}{4\\pi \\sigma T^4}} = \\sqrt{\\frac{3.85 \\times 10^{26}}{4\\pi (5.67 \\times 10^{-8})(5800)^4}} \\approx 6.96 \\times 10^8\\) m. Wien's law: \\(\\lambda_{max} = \\frac{2.9 \\times 10^{-3}}{5800} \\approx 5.0 \\times 10^{-7}\\) m (500 nm, green-yellow — consistent with the Sun)."
  },

  // ===== BATCH 8: CROSS-TOPIC L2 + GAP-FILLING L1 (30 questions) =====

  // --- GAP-FILLING L1: A1 Kinematics (2 questions) ---

  {
    id: "A1_L1_13",
    text: "A stone is dropped from a {{bridge}} and takes {{2.5 s}} to reach the water. Determine the {{height of the bridge}} above the water.",
    topic: "A",
    subtopic: "A1",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "bridge", tip: "The stone is released from rest, so u = 0." },
      { phrase: "2.5 s", tip: "Time of fall, t = 2.5 s." },
      { phrase: "height of the bridge", tip: "The displacement s downwards from the drop point to the water surface." }
    ],
    knowns: [
      { symbol: "u", value: "0", unit: "m s⁻¹", description: "initial velocity (dropped)" },
      { symbol: "t", value: "2.5", unit: "s", description: "time of fall" },
      { symbol: "a", value: "9.8", unit: "m s⁻²", description: "acceleration due to gravity" }
    ],
    unknowns: [
      { symbol: "s", unit: "m", description: "height of bridge" }
    ],
    acceptedSolutions: [
      ["A1_3", "CONST_g"]
    ],
    requiredConstants: ["CONST_g"],
    hints: [
      "The stone is dropped, so u = 0. You know t and a = g. What equation gives displacement?",
      "Use s = ut + ½at². Since u = 0, this simplifies to s = ½gt².",
      "s = ½ × 9.8 × (2.5)² = ½ × 9.8 × 6.25 = 31 m."
    ],
    explanation: "Using \\(s = ut + \\tfrac{1}{2}at^2\\) with \\(u = 0\\): \\(s = \\tfrac{1}{2}(9.8)(2.5)^2 = \\tfrac{1}{2}(9.8)(6.25) \\approx 31\\) m."
  },

  {
    id: "A1_L1_14",
    text: "Object A has {{twice the acceleration}} of object B and starts from rest. If both accelerate for the {{same time}}, how does the {{displacement of A}} compare to that of B? Express your answer as a {{ratio}}.",
    topic: "A",
    subtopic: "A1",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "twice the acceleration", tip: "a_A = 2a_B." },
      { phrase: "same time", tip: "Both objects accelerate for the same duration t." },
      { phrase: "displacement of A", tip: "Find s_A in terms of s_B." },
      { phrase: "ratio", tip: "No numbers needed — use proportional reasoning with the SUVAT equation." }
    ],
    knowns: [
      { symbol: "a_A", value: "2a_B", unit: "", description: "acceleration of A is twice that of B" },
      { symbol: "u", value: "0", unit: "m s⁻¹", description: "both start from rest" },
      { symbol: "t", value: "same", unit: "", description: "same time for both" }
    ],
    unknowns: [
      { symbol: "s_A / s_B", unit: "", description: "ratio of displacements" }
    ],
    acceptedSolutions: [
      ["A1_3"]
    ],
    requiredConstants: [],
    hints: [
      "Both start from rest (u = 0) for the same time. Which SUVAT equation connects s, a, and t?",
      "s = ½at² (since u = 0). If t is the same, then s is directly proportional to a.",
      "s_A / s_B = a_A / a_B = 2. Displacement A is twice displacement B."
    ],
    explanation: "From \\(s = \\tfrac{1}{2}at^2\\) (with \\(u = 0\\)): \\(s \\propto a\\) when \\(t\\) is constant. Since \\(a_A = 2a_B\\), \\(s_A = 2s_B\\). The ratio is 2 : 1."
  },

  // --- GAP-FILLING L1: B5 Circuits (2 questions) ---

  {
    id: "B5_L1_07",
    text: "A wire of {{length 1.5 m}} and {{cross-sectional area 2.0 × 10⁻⁶ m²}} has a resistance of {{0.80 Ω}}. Calculate the {{resistivity}} of the material.",
    topic: "B",
    subtopic: "B5",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "length 1.5 m", tip: "L = 1.5 m, the length of the conducting wire." },
      { phrase: "cross-sectional area 2.0 × 10⁻⁶ m²", tip: "A = 2.0 × 10⁻⁶ m²." },
      { phrase: "0.80 Ω", tip: "R = 0.80 Ω, the measured resistance." },
      { phrase: "resistivity", tip: "ρ, a material property relating resistance to geometry." }
    ],
    knowns: [
      { symbol: "R", value: "0.80", unit: "Ω", description: "resistance" },
      { symbol: "A", value: "2.0 × 10⁻⁶", unit: "m²", description: "cross-sectional area" },
      { symbol: "L", value: "1.5", unit: "m", description: "length" }
    ],
    unknowns: [
      { symbol: "ρ", unit: "Ω m", description: "resistivity" }
    ],
    acceptedSolutions: [
      ["B5_4"]
    ],
    requiredConstants: [],
    hints: [
      "Which formula relates resistance, resistivity, length and cross-sectional area?",
      "ρ = RA/L. Substitute the values directly.",
      "ρ = (0.80 × 2.0 × 10⁻⁶) / 1.5 = 1.07 × 10⁻⁶ Ω m."
    ],
    explanation: "Using \\(\\rho = \\frac{RA}{L} = \\frac{0.80 \\times 2.0 \\times 10^{-6}}{1.5} = \\frac{1.6 \\times 10^{-6}}{1.5} \\approx 1.1 \\times 10^{-6}\\) Ω m."
  },

  {
    id: "B5_L1_08",
    text: "A battery with {{EMF 6.0 V}} and {{internal resistance 0.50 Ω}} is connected to an {{external resistance of 5.5 Ω}}. Calculate the {{current}} in the circuit.",
    topic: "B",
    subtopic: "B5",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "EMF 6.0 V", tip: "ε = 6.0 V, the electromotive force of the battery." },
      { phrase: "internal resistance 0.50 Ω", tip: "r = 0.50 Ω, the resistance inside the battery." },
      { phrase: "external resistance of 5.5 Ω", tip: "R = 5.5 Ω, the load resistance." },
      { phrase: "current", tip: "I, the current flowing through the circuit." }
    ],
    knowns: [
      { symbol: "ε", value: "6.0", unit: "V", description: "EMF" },
      { symbol: "r", value: "0.50", unit: "Ω", description: "internal resistance" },
      { symbol: "R", value: "5.5", unit: "Ω", description: "external resistance" }
    ],
    unknowns: [
      { symbol: "I", unit: "A", description: "current" }
    ],
    acceptedSolutions: [
      ["B5_8"]
    ],
    requiredConstants: [],
    hints: [
      "You know EMF, internal resistance, and external resistance. Which formula connects them to current?",
      "The EMF equation: ε = I(R + r). Rearrange for I.",
      "I = ε / (R + r) = 6.0 / (5.5 + 0.50) = 6.0 / 6.0 = 1.0 A."
    ],
    explanation: "Using \\(\\varepsilon = I(R + r)\\): \\(I = \\frac{\\varepsilon}{R + r} = \\frac{6.0}{5.5 + 0.50} = \\frac{6.0}{6.0} = 1.0\\) A."
  },

  // --- GAP-FILLING L1: C3 Wave Phenomena (2 questions) ---

  {
    id: "C3_L1_04",
    text: "A {{diffraction grating}} with {{600 lines per mm}} is illuminated by {{monochromatic light}}. The {{second-order maximum}} is observed at an angle of {{41°}}. Calculate the {{wavelength}} of the light.",
    topic: "C",
    subtopic: "C3",
    level: 1,
    slhl: "HL",
    tooltips: [
      { phrase: "diffraction grating", tip: "A plate with many equally spaced slits that produces sharp interference maxima." },
      { phrase: "600 lines per mm", tip: "d = 1/600 mm = 1.67 × 10⁻⁶ m per slit." },
      { phrase: "monochromatic light", tip: "Light of a single wavelength." },
      { phrase: "second-order maximum", tip: "n = 2 in the grating equation." },
      { phrase: "41°", tip: "θ = 41°, the diffraction angle for the second order." },
      { phrase: "wavelength", tip: "λ, the wavelength of the incident light." }
    ],
    knowns: [
      { symbol: "d", value: "1.67 × 10⁻⁶", unit: "m", description: "slit spacing (1/600 000 m)" },
      { symbol: "n", value: "2", unit: "", description: "order of maximum" },
      { symbol: "θ", value: "41", unit: "°", description: "diffraction angle" }
    ],
    unknowns: [
      { symbol: "λ", unit: "m", description: "wavelength" }
    ],
    acceptedSolutions: [
      ["C3_4"]
    ],
    requiredConstants: [],
    hints: [
      "The diffraction grating equation relates order, wavelength, slit spacing, and angle.",
      "nλ = d sin θ. Rearrange for λ.",
      "λ = d sin θ / n = (1.67 × 10⁻⁶ × sin 41°) / 2 = (1.67 × 10⁻⁶ × 0.656) / 2 ≈ 5.5 × 10⁻⁷ m (550 nm)."
    ],
    explanation: "Using \\(n\\lambda = d\\sin\\theta\\): \\(\\lambda = \\frac{d\\sin\\theta}{n} = \\frac{1.67 \\times 10^{-6} \\times \\sin 41°}{2} = \\frac{1.67 \\times 10^{-6} \\times 0.656}{2} \\approx 5.5 \\times 10^{-7}\\) m (550 nm, green light)."
  },

  {
    id: "C3_L1_05",
    text: "Light travels from {{glass}} (refractive index {{1.50}}) into {{air}} (refractive index {{1.00}}). If the {{angle of incidence}} in the glass is {{30°}}, find the {{angle of refraction}} in air.",
    topic: "C",
    subtopic: "C3",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "glass", tip: "The optically denser medium with higher refractive index." },
      { phrase: "1.50", tip: "n₁ = 1.50, the refractive index of glass." },
      { phrase: "air", tip: "The optically less dense medium." },
      { phrase: "1.00", tip: "n₂ = 1.00, the refractive index of air." },
      { phrase: "angle of incidence", tip: "θ₁, measured from the normal in glass." },
      { phrase: "30°", tip: "θ₁ = 30°." },
      { phrase: "angle of refraction", tip: "θ₂, measured from the normal in air." }
    ],
    knowns: [
      { symbol: "n₁", value: "1.50", unit: "", description: "refractive index of glass" },
      { symbol: "n₂", value: "1.00", unit: "", description: "refractive index of air" },
      { symbol: "θ₁", value: "30", unit: "°", description: "angle of incidence" }
    ],
    unknowns: [
      { symbol: "θ₂", unit: "°", description: "angle of refraction" }
    ],
    acceptedSolutions: [
      ["C3_1"]
    ],
    requiredConstants: [],
    hints: [
      "Snell's law relates the refractive indices and angles on each side of the boundary.",
      "n₁ sin θ₁ = n₂ sin θ₂. Rearrange for sin θ₂.",
      "sin θ₂ = (n₁/n₂) sin θ₁ = (1.50/1.00) × sin 30° = 1.50 × 0.50 = 0.75. θ₂ = sin⁻¹(0.75) ≈ 49°."
    ],
    explanation: "Using Snell's law: \\(n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2\\). \\(\\sin\\theta_2 = \\frac{n_1}{n_2}\\sin\\theta_1 = \\frac{1.50}{1.00} \\times \\sin 30° = 0.75\\). \\(\\theta_2 = \\sin^{-1}(0.75) \\approx 49°\\)."
  },

  // --- GAP-FILLING L1: D2 Electric Fields (2 questions) ---

  {
    id: "D2_L1_04",
    text: "A {{proton}} is placed in a {{uniform electric field}} of strength {{500 N C⁻¹}}. Calculate the {{electric force}} on the proton.",
    topic: "D",
    subtopic: "D2",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "proton", tip: "A proton carries charge e = 1.60 × 10⁻¹⁹ C." },
      { phrase: "uniform electric field", tip: "The field has constant magnitude and direction everywhere." },
      { phrase: "500 N C⁻¹", tip: "E = 500 N C⁻¹, the electric field strength." },
      { phrase: "electric force", tip: "F = qE, the force on a charge in an electric field." }
    ],
    knowns: [
      { symbol: "E", value: "500", unit: "N C⁻¹", description: "electric field strength" },
      { symbol: "q", value: "1.60 × 10⁻¹⁹", unit: "C", description: "charge of proton" }
    ],
    unknowns: [
      { symbol: "F", unit: "N", description: "electric force" }
    ],
    acceptedSolutions: [
      ["D2_2", "CONST_e"]
    ],
    requiredConstants: ["CONST_e"],
    hints: [
      "You know E and q. What is the definition of electric field strength?",
      "E = F/q, so F = qE.",
      "F = 1.60 × 10⁻¹⁹ × 500 = 8.0 × 10⁻¹⁷ N."
    ],
    explanation: "From \\(E = \\frac{F}{q}\\): \\(F = qE = 1.60 \\times 10^{-19} \\times 500 = 8.0 \\times 10^{-17}\\) N, in the direction of the field."
  },

  {
    id: "D2_L1_05",
    text: "If the {{charge on each plate}} of a parallel plate capacitor is {{doubled}} while the {{plate separation}} is {{halved}}, how does the {{electric field strength}} between the plates change? Express your answer as a {{ratio}}.",
    topic: "D",
    subtopic: "D2",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "charge on each plate", tip: "Increasing charge increases the potential difference across the plates." },
      { phrase: "doubled", tip: "The potential difference V doubles (since V ∝ Q for a capacitor)." },
      { phrase: "plate separation", tip: "d, the distance between the parallel plates." },
      { phrase: "halved", tip: "d becomes d/2." },
      { phrase: "electric field strength", tip: "E = V/d for a uniform field between plates." },
      { phrase: "ratio", tip: "Find E_new / E_old using proportional reasoning." }
    ],
    knowns: [
      { symbol: "V", value: "2V₀", unit: "", description: "PD doubles (charge doubled)" },
      { symbol: "d", value: "d₀/2", unit: "", description: "separation halved" }
    ],
    unknowns: [
      { symbol: "E_new / E_old", unit: "", description: "ratio of electric field strengths" }
    ],
    acceptedSolutions: [
      ["D2_3"]
    ],
    requiredConstants: [],
    hints: [
      "For parallel plates, E = V/d. How does E change if V doubles and d halves?",
      "E_new = (2V) / (d/2) = 4V/d = 4E_old.",
      "The electric field strength increases by a factor of 4."
    ],
    explanation: "Using \\(E = \\frac{V}{d}\\): if \\(V \\to 2V\\) and \\(d \\to d/2\\), then \\(E_{new} = \\frac{2V}{d/2} = \\frac{4V}{d} = 4E_{old}\\). The field strength quadruples."
  },

  // --- GAP-FILLING L1: E3 Radioactive Decay (2 questions) ---

  {
    id: "E3_L1_04",
    text: "A {{radioactive sample}} has an initial activity of {{800 Bq}}. After {{three half-lives}}, what is the {{activity}}?",
    topic: "E",
    subtopic: "E3",
    level: 1,
    slhl: "HL",
    tooltips: [
      { phrase: "radioactive sample", tip: "The sample undergoes radioactive decay with a characteristic half-life." },
      { phrase: "800 Bq", tip: "A₀ = 800 Bq, the initial activity." },
      { phrase: "three half-lives", tip: "After each half-life, the activity halves." },
      { phrase: "activity", tip: "A, the number of decays per second after 3 half-lives." }
    ],
    knowns: [
      { symbol: "A₀", value: "800", unit: "Bq", description: "initial activity" },
      { symbol: "t", value: "3T₁/₂", unit: "", description: "elapsed time = 3 half-lives" }
    ],
    unknowns: [
      { symbol: "A", unit: "Bq", description: "activity after 3 half-lives" }
    ],
    acceptedSolutions: [
      ["E3_3", "E3_4"]
    ],
    requiredConstants: [],
    hints: [
      "After each half-life, the activity halves. How many times does it halve in 3 half-lives?",
      "After n half-lives: A = A₀ / 2ⁿ.",
      "A = 800 / 2³ = 800 / 8 = 100 Bq."
    ],
    explanation: "After \\(n\\) half-lives: \\(A = \\frac{A_0}{2^n}\\). After 3 half-lives: \\(A = \\frac{800}{2^3} = \\frac{800}{8} = 100\\) Bq."
  },

  {
    id: "E3_L1_05",
    text: "A radioactive isotope has a {{half-life}} of {{20 minutes}}. Calculate the {{decay constant}} in s⁻¹.",
    topic: "E",
    subtopic: "E3",
    level: 1,
    slhl: "HL",
    tooltips: [
      { phrase: "half-life", tip: "T₁/₂, the time for the activity (or number of nuclei) to halve." },
      { phrase: "20 minutes", tip: "T₁/₂ = 20 min = 1200 s." },
      { phrase: "decay constant", tip: "λ, the probability of decay per unit time." }
    ],
    knowns: [
      { symbol: "T₁/₂", value: "1200", unit: "s", description: "half-life (20 min)" }
    ],
    unknowns: [
      { symbol: "λ", unit: "s⁻¹", description: "decay constant" }
    ],
    acceptedSolutions: [
      ["E3_4"]
    ],
    requiredConstants: [],
    hints: [
      "There is a direct relationship between half-life and decay constant. What is it?",
      "T₁/₂ = ln 2 / λ. Rearrange for λ.",
      "λ = ln 2 / T₁/₂ = 0.693 / 1200 ≈ 5.8 × 10⁻⁴ s⁻¹."
    ],
    explanation: "Using \\(T_{1/2} = \\frac{\\ln 2}{\\lambda}\\): \\(\\lambda = \\frac{\\ln 2}{T_{1/2}} = \\frac{0.693}{1200} \\approx 5.8 \\times 10^{-4}\\) s\\(^{-1}\\)."
  },

  // ===== CROSS-TOPIC L2 QUESTIONS (20 questions) =====

  // --- A+B Bridge (3 questions) ---

  {
    id: "AB_L2_01",
    text: "An {{ideal gas molecule}} of {{nitrogen}} (mass {{4.65 × 10⁻²⁶ kg}}) is at a temperature of {{300 K}}. Estimate the {{root-mean-square speed}} of the molecule.",
    topic: "B",
    subtopic: "B1",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "ideal gas molecule", tip: "Assume the gas behaves ideally — use kinetic theory." },
      { phrase: "nitrogen", tip: "Diatomic nitrogen, N₂." },
      { phrase: "4.65 × 10⁻²⁶ kg", tip: "m = 4.65 × 10⁻²⁶ kg, the mass of one N₂ molecule." },
      { phrase: "300 K", tip: "T = 300 K, the absolute temperature." },
      { phrase: "root-mean-square speed", tip: "v_rms, found by equating average KE from kinetic theory with ½mv²." }
    ],
    knowns: [
      { symbol: "m", value: "4.65 × 10⁻²⁶", unit: "kg", description: "mass of one N₂ molecule" },
      { symbol: "T", value: "300", unit: "K", description: "temperature" }
    ],
    unknowns: [
      { symbol: "v_rms", unit: "m s⁻¹", description: "root-mean-square speed" }
    ],
    acceptedSolutions: [
      ["B1_2", "A3_2", "CONST_kB"]
    ],
    requiredConstants: ["CONST_kB"],
    hints: [
      "The average KE of a gas molecule is given by thermal physics: ½mv² = (3/2)k_BT. You need two formulas from different sections.",
      "Set kinetic energy ½mv² (Section A) equal to (3/2)k_BT (Section B). Solve for v.",
      "v = √(3k_BT / m) = √(3 × 1.38 × 10⁻²³ × 300 / 4.65 × 10⁻²⁶) ≈ 517 m s⁻¹."
    ],
    explanation: "Setting \\(\\tfrac{1}{2}mv^2 = \\tfrac{3}{2}k_BT\\): \\(v = \\sqrt{\\frac{3k_BT}{m}} = \\sqrt{\\frac{3 \\times 1.38 \\times 10^{-23} \\times 300}{4.65 \\times 10^{-26}}} = \\sqrt{2.67 \\times 10^5} \\approx 517\\) m s\\(^{-1}\\)."
  },

  {
    id: "AB_L2_02",
    text: "A {{0.50 kg}} ball travelling at {{4.0 m s⁻¹}} collides with a wall and {{rebounds}} at {{3.0 m s⁻¹}}. The {{kinetic energy lost}} is transferred to the wall as {{thermal energy}}, raising the temperature of a {{10 g}} section of the wall (specific heat capacity {{500 J kg⁻¹ K⁻¹}}). Estimate the {{temperature rise}}.",
    topic: "A",
    subtopic: "A2",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "0.50 kg", tip: "m = 0.50 kg, the mass of the ball." },
      { phrase: "4.0 m s⁻¹", tip: "Initial speed of the ball." },
      { phrase: "rebounds", tip: "The ball bounces back, so its velocity reverses." },
      { phrase: "3.0 m s⁻¹", tip: "Rebound speed of the ball." },
      { phrase: "kinetic energy lost", tip: "ΔE_k = ½mv₁² − ½mv₂², the energy transferred to the wall." },
      { phrase: "thermal energy", tip: "The lost KE heats the wall: Q = mcΔT." },
      { phrase: "10 g", tip: "m_wall = 0.010 kg, the mass of the heated section." },
      { phrase: "500 J kg⁻¹ K⁻¹", tip: "c = 500 J kg⁻¹ K⁻¹, the specific heat capacity of the wall material." },
      { phrase: "temperature rise", tip: "ΔT, found by equating lost KE to thermal energy gained." }
    ],
    knowns: [
      { symbol: "m_ball", value: "0.50", unit: "kg", description: "mass of ball" },
      { symbol: "v₁", value: "4.0", unit: "m s⁻¹", description: "initial speed" },
      { symbol: "v₂", value: "3.0", unit: "m s⁻¹", description: "rebound speed" },
      { symbol: "m_wall", value: "0.010", unit: "kg", description: "mass of wall section" },
      { symbol: "c", value: "500", unit: "J kg⁻¹ K⁻¹", description: "specific heat capacity" }
    ],
    unknowns: [
      { symbol: "ΔT", unit: "K", description: "temperature rise" }
    ],
    acceptedSolutions: [
      ["A3_2", "B1_3"]
    ],
    requiredConstants: [],
    hints: [
      "First find the kinetic energy lost: ΔE_k = ½m(v₁² − v₂²). Then set it equal to Q = mcΔT.",
      "ΔE_k = ½ × 0.50 × (4.0² − 3.0²) = ½ × 0.50 × 7.0 = 1.75 J.",
      "ΔT = Q / (mc) = 1.75 / (0.010 × 500) = 0.35 K."
    ],
    explanation: "KE lost: \\(\\Delta E_k = \\tfrac{1}{2}(0.50)(4.0^2 - 3.0^2) = \\tfrac{1}{2}(0.50)(7.0) = 1.75\\) J. Setting \\(Q = mc\\Delta T\\): \\(\\Delta T = \\frac{1.75}{0.010 \\times 500} = 0.35\\) K."
  },

  {
    id: "AB_L2_03",
    text: "A satellite orbits Earth at a height where the {{gravitational field strength}} is {{8.7 m s⁻²}}. Determine the {{orbital speed}} and the {{orbital period}} given the radius at that height is {{6.8 × 10⁶ m}}.",
    topic: "A",
    subtopic: "A2",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "gravitational field strength", tip: "g = 8.7 m s⁻², providing the centripetal acceleration." },
      { phrase: "orbital speed", tip: "v, found by setting centripetal acceleration equal to g." },
      { phrase: "orbital period", tip: "T, the time for one complete orbit." },
      { phrase: "6.8 × 10⁶ m", tip: "r = 6.8 × 10⁶ m, the orbital radius from Earth's centre." }
    ],
    knowns: [
      { symbol: "g", value: "8.7", unit: "m s⁻²", description: "gravitational field strength at orbit" },
      { symbol: "r", value: "6.8 × 10⁶", unit: "m", description: "orbital radius" }
    ],
    unknowns: [
      { symbol: "v", unit: "m s⁻¹", description: "orbital speed" },
      { symbol: "T", unit: "s", description: "orbital period" }
    ],
    acceptedSolutions: [
      ["A2_10", "A2_11"],
      ["A2_10"]
    ],
    requiredConstants: [],
    hints: [
      "In orbit, gravity provides the centripetal acceleration: g = v²/r. This bridges gravitational fields (B/D) with circular motion (A).",
      "v = √(gr) = √(8.7 × 6.8 × 10⁶). Then use T = 2πr/v for the period.",
      "v = √(5.916 × 10⁷) ≈ 7.7 × 10³ m s⁻¹. T = 2π × 6.8 × 10⁶ / 7700 ≈ 5550 s ≈ 93 min."
    ],
    explanation: "Centripetal acceleration = gravitational field strength: \\(g = \\frac{v^2}{r}\\), so \\(v = \\sqrt{gr} = \\sqrt{8.7 \\times 6.8 \\times 10^6} \\approx 7.7 \\times 10^3\\) m s\\(^{-1}\\). Period: \\(T = \\frac{2\\pi r}{v} = \\frac{2\\pi \\times 6.8 \\times 10^6}{7700} \\approx 5550\\) s (about 93 minutes)."
  },

  // --- A+C Bridge (2 questions) ---

  {
    id: "AC_L2_01",
    text: "A {{mass-spring system}} oscillates in SHM with {{amplitude 0.12 m}} and {{angular frequency 5.0 rad s⁻¹}}. The mass is {{0.40 kg}}. Find the {{maximum speed}} and the {{maximum kinetic energy}} of the mass.",
    topic: "C",
    subtopic: "C1",
    level: 2,
    slhl: "HL",
    tooltips: [
      { phrase: "mass-spring system", tip: "Oscillates in simple harmonic motion." },
      { phrase: "amplitude 0.12 m", tip: "x₀ = 0.12 m, the maximum displacement." },
      { phrase: "angular frequency 5.0 rad s⁻¹", tip: "ω = 5.0 rad s⁻¹." },
      { phrase: "0.40 kg", tip: "m = 0.40 kg." },
      { phrase: "maximum speed", tip: "v_max = ωx₀, occurring at the equilibrium position." },
      { phrase: "maximum kinetic energy", tip: "E_k = ½mv_max², using the result from the SHM formula." }
    ],
    knowns: [
      { symbol: "x₀", value: "0.12", unit: "m", description: "amplitude" },
      { symbol: "ω", value: "5.0", unit: "rad s⁻¹", description: "angular frequency" },
      { symbol: "m", value: "0.40", unit: "kg", description: "mass" }
    ],
    unknowns: [
      { symbol: "v_max", unit: "m s⁻¹", description: "maximum speed" },
      { symbol: "E_k(max)", unit: "J", description: "maximum kinetic energy" }
    ],
    acceptedSolutions: [
      ["C1_7", "A3_2"],
      ["C1_8", "A3_2"]
    ],
    requiredConstants: [],
    hints: [
      "Maximum speed in SHM occurs at the equilibrium position. Use the SHM velocity formula.",
      "v_max = ωx₀ = 5.0 × 0.12 = 0.60 m s⁻¹. Then use E_k = ½mv².",
      "E_k(max) = ½ × 0.40 × 0.60² = ½ × 0.40 × 0.36 = 0.072 J."
    ],
    explanation: "From SHM: \\(v_{max} = \\omega x_0 = 5.0 \\times 0.12 = 0.60\\) m s\\(^{-1}\\). Then \\(E_k = \\tfrac{1}{2}mv_{max}^2 = \\tfrac{1}{2}(0.40)(0.60)^2 = 0.072\\) J (= 72 mJ)."
  },

  {
    id: "AC_L2_02",
    text: "A {{sound wave}} in air has a {{frequency of 680 Hz}} and travels at {{340 m s⁻¹}}. A car is {{initially at rest}} and then {{accelerates uniformly}} at {{3.0 m s⁻²}} towards the source. How far has the car travelled when its speed equals the {{wavelength per second}} (i.e. one wavelength per second of travel, so v = λ)?",
    topic: "A",
    subtopic: "A1",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "sound wave", tip: "A longitudinal wave travelling through air." },
      { phrase: "frequency of 680 Hz", tip: "f = 680 Hz." },
      { phrase: "340 m s⁻¹", tip: "v_sound = 340 m s⁻¹, the speed of sound in air." },
      { phrase: "initially at rest", tip: "u = 0 for the car." },
      { phrase: "accelerates uniformly", tip: "Constant acceleration — use SUVAT equations." },
      { phrase: "3.0 m s⁻²", tip: "a = 3.0 m s⁻²." },
      { phrase: "wavelength per second", tip: "The car reaches speed v = λ = v_sound/f." }
    ],
    knowns: [
      { symbol: "f", value: "680", unit: "Hz", description: "frequency" },
      { symbol: "v_sound", value: "340", unit: "m s⁻¹", description: "speed of sound" },
      { symbol: "u_car", value: "0", unit: "m s⁻¹", description: "initial speed of car" },
      { symbol: "a", value: "3.0", unit: "m s⁻²", description: "acceleration of car" }
    ],
    unknowns: [
      { symbol: "s", unit: "m", description: "distance travelled by car" }
    ],
    acceptedSolutions: [
      ["C2_1", "A1_4"]
    ],
    requiredConstants: [],
    hints: [
      "First find the wavelength using v = fλ. This gives the target speed for the car.",
      "λ = v/f = 340/680 = 0.50 m s⁻¹. Now use v² = u² + 2as with v = 0.50 m s⁻¹.",
      "s = v²/(2a) = 0.50²/(2 × 3.0) = 0.25/6.0 ≈ 0.042 m."
    ],
    explanation: "Wavelength: \\(\\lambda = \\frac{v}{f} = \\frac{340}{680} = 0.50\\) m. Target car speed = 0.50 m s\\(^{-1}\\). Using \\(v^2 = u^2 + 2as\\) with \\(u = 0\\): \\(s = \\frac{v^2}{2a} = \\frac{(0.50)^2}{2(3.0)} \\approx 0.042\\) m (4.2 cm)."
  },

  // --- A+D Bridge (3 questions) ---

  {
    id: "AD_L2_01",
    text: "An {{electron}} is accelerated from rest through a {{potential difference of 200 V}}. Calculate the {{final speed}} of the electron.",
    topic: "D",
    subtopic: "D2",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "electron", tip: "mass = 9.11 × 10⁻³¹ kg, charge = 1.60 × 10⁻¹⁹ C." },
      { phrase: "potential difference of 200 V", tip: "V = 200 V. The work done on the electron is W = qV." },
      { phrase: "final speed", tip: "v, found by equating the electrical work done to kinetic energy gained." }
    ],
    knowns: [
      { symbol: "V", value: "200", unit: "V", description: "accelerating potential difference" },
      { symbol: "q", value: "1.60 × 10⁻¹⁹", unit: "C", description: "electron charge" },
      { symbol: "m", value: "9.11 × 10⁻³¹", unit: "kg", description: "electron mass" }
    ],
    unknowns: [
      { symbol: "v", unit: "m s⁻¹", description: "final speed of electron" }
    ],
    acceptedSolutions: [
      ["D2_7", "A3_2", "CONST_e", "CONST_me"],
      ["B5_2", "A3_2", "CONST_e", "CONST_me"]
    ],
    requiredConstants: ["CONST_e", "CONST_me"],
    hints: [
      "The work done on the electron by the electric field equals the kinetic energy gained. This bridges electric fields (D) with mechanics (A).",
      "qV = ½mv². Solve for v = √(2qV/m).",
      "v = √(2 × 1.60 × 10⁻¹⁹ × 200 / 9.11 × 10⁻³¹) = √(7.02 × 10¹³) ≈ 8.4 × 10⁶ m s⁻¹."
    ],
    explanation: "Energy conservation: \\(qV = \\tfrac{1}{2}mv^2\\). \\(v = \\sqrt{\\frac{2qV}{m}} = \\sqrt{\\frac{2(1.60 \\times 10^{-19})(200)}{9.11 \\times 10^{-31}}} = \\sqrt{7.02 \\times 10^{13}} \\approx 8.4 \\times 10^6\\) m s\\(^{-1}\\)."
  },

  {
    id: "AD_L2_02",
    text: "An electron moving at {{3.0 × 10⁶ m s⁻¹}} enters a {{uniform magnetic field}} of strength {{0.020 T}} at {{right angles}}. Determine the {{radius of the circular path}}.",
    topic: "D",
    subtopic: "D3",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "3.0 × 10⁶ m s⁻¹", tip: "v = 3.0 × 10⁶ m s⁻¹, the speed of the electron." },
      { phrase: "uniform magnetic field", tip: "B = constant, so the force on the electron is constant in magnitude." },
      { phrase: "0.020 T", tip: "B = 0.020 T." },
      { phrase: "right angles", tip: "θ = 90°, so sin θ = 1. The magnetic force is maximum." },
      { phrase: "radius of the circular path", tip: "r, found by equating magnetic force to centripetal force." }
    ],
    knowns: [
      { symbol: "v", value: "3.0 × 10⁶", unit: "m s⁻¹", description: "speed of electron" },
      { symbol: "B", value: "0.020", unit: "T", description: "magnetic field strength" },
      { symbol: "m", value: "9.11 × 10⁻³¹", unit: "kg", description: "electron mass" },
      { symbol: "q", value: "1.60 × 10⁻¹⁹", unit: "C", description: "electron charge" }
    ],
    unknowns: [
      { symbol: "r", unit: "m", description: "radius of circular path" }
    ],
    acceptedSolutions: [
      ["D3_1", "A2_9", "A2_10", "CONST_me", "CONST_e"],
      ["D3_1", "A2_10", "CONST_me", "CONST_e"]
    ],
    requiredConstants: ["CONST_me", "CONST_e"],
    hints: [
      "The magnetic force provides the centripetal force. Set qvB = mv²/r.",
      "Rearrange: r = mv / (qB).",
      "r = (9.11 × 10⁻³¹ × 3.0 × 10⁶) / (1.60 × 10⁻¹⁹ × 0.020) = 2.73 × 10⁻²⁴ / 3.20 × 10⁻²¹ ≈ 8.5 × 10⁻⁴ m."
    ],
    explanation: "Magnetic force = centripetal force: \\(qvB = \\frac{mv^2}{r}\\). So \\(r = \\frac{mv}{qB} = \\frac{9.11 \\times 10^{-31} \\times 3.0 \\times 10^6}{1.60 \\times 10^{-19} \\times 0.020} \\approx 8.5 \\times 10^{-4}\\) m (0.85 mm)."
  },

  {
    id: "AD_L2_03",
    text: "A ball is launched {{horizontally}} at {{12 m s⁻¹}} from the edge of a {{45 m high}} cliff. Using energy conservation, determine the {{speed}} at which it hits the ground.",
    topic: "A",
    subtopic: "A3",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "horizontally", tip: "The initial vertical velocity is zero. The horizontal speed is 12 m s⁻¹." },
      { phrase: "12 m s⁻¹", tip: "u_x = 12 m s⁻¹, the horizontal launch speed." },
      { phrase: "45 m high", tip: "h = 45 m, the height of the cliff." },
      { phrase: "speed", tip: "The total speed at impact, combining horizontal and vertical components." }
    ],
    knowns: [
      { symbol: "u_x", value: "12", unit: "m s⁻¹", description: "horizontal speed" },
      { symbol: "h", value: "45", unit: "m", description: "height of cliff" },
      { symbol: "g", value: "9.8", unit: "m s⁻²", description: "gravitational field strength" }
    ],
    unknowns: [
      { symbol: "v", unit: "m s⁻¹", description: "speed at impact" }
    ],
    acceptedSolutions: [
      ["A3_2", "A3_3", "CONST_g"],
      ["A1_4", "CONST_g"]
    ],
    requiredConstants: ["CONST_g"],
    hints: [
      "Use energy conservation: the initial KE + PE at the top equals the final KE at the bottom.",
      "½mv² = ½mu_x² + mgh. The mass cancels. v² = u_x² + 2gh.",
      "v² = 12² + 2(9.8)(45) = 144 + 882 = 1026. v = √1026 ≈ 32 m s⁻¹."
    ],
    explanation: "Energy conservation: \\(\\tfrac{1}{2}mv^2 = \\tfrac{1}{2}mu_x^2 + mgh\\). So \\(v = \\sqrt{u_x^2 + 2gh} = \\sqrt{144 + 2(9.8)(45)} = \\sqrt{1026} \\approx 32\\) m s\\(^{-1}\\)."
  },

  // --- A+E Bridge (2 questions) ---

  {
    id: "AE_L2_01",
    text: "{{Ultraviolet light}} of {{wavelength 200 nm}} strikes a metal surface with {{work function 3.5 eV}}. Find the {{maximum speed}} of the emitted {{photoelectrons}}.",
    topic: "E",
    subtopic: "E2",
    level: 2,
    slhl: "HL",
    tooltips: [
      { phrase: "Ultraviolet light", tip: "High-energy photons — check whether the photon energy exceeds the work function." },
      { phrase: "wavelength 200 nm", tip: "λ = 200 × 10⁻⁹ m = 2.00 × 10⁻⁷ m." },
      { phrase: "work function 3.5 eV", tip: "Φ = 3.5 eV = 3.5 × 1.60 × 10⁻¹⁹ = 5.60 × 10⁻¹⁹ J." },
      { phrase: "maximum speed", tip: "v_max, found from E_max = ½mv²." },
      { phrase: "photoelectrons", tip: "Electrons emitted from the surface by the photoelectric effect." }
    ],
    knowns: [
      { symbol: "λ", value: "2.00 × 10⁻⁷", unit: "m", description: "wavelength of UV light" },
      { symbol: "Φ", value: "5.60 × 10⁻¹⁹", unit: "J", description: "work function (3.5 eV)" },
      { symbol: "m_e", value: "9.11 × 10⁻³¹", unit: "kg", description: "electron mass" }
    ],
    unknowns: [
      { symbol: "v_max", unit: "m s⁻¹", description: "maximum speed of photoelectrons" }
    ],
    acceptedSolutions: [
      ["E1_1", "C2_1", "E2_1", "A3_2", "CONST_h", "CONST_c", "CONST_me"],
      ["E2_1", "E1_1", "C2_1", "A3_2", "CONST_h", "CONST_c", "CONST_me"]
    ],
    requiredConstants: ["CONST_h", "CONST_c", "CONST_me"],
    hints: [
      "First find the photon energy E = hf = hc/λ. Then use the photoelectric equation E_max = hf − Φ.",
      "E = hc/λ = (6.63 × 10⁻³⁴ × 3.00 × 10⁸) / (2.00 × 10⁻⁷) = 9.95 × 10⁻¹⁹ J. E_max = 9.95 × 10⁻¹⁹ − 5.60 × 10⁻¹⁹ = 4.35 × 10⁻¹⁹ J.",
      "½mv² = E_max. v = √(2E_max / m) = √(2 × 4.35 × 10⁻¹⁹ / 9.11 × 10⁻³¹) ≈ 9.8 × 10⁵ m s⁻¹."
    ],
    explanation: "Photon energy: \\(E = \\frac{hc}{\\lambda} = \\frac{6.63 \\times 10^{-34} \\times 3.00 \\times 10^8}{2.00 \\times 10^{-7}} = 9.95 \\times 10^{-19}\\) J. Photoelectric: \\(E_{max} = hf - \\Phi = 9.95 \\times 10^{-19} - 5.60 \\times 10^{-19} = 4.35 \\times 10^{-19}\\) J. Speed: \\(v = \\sqrt{\\frac{2E_{max}}{m_e}} = \\sqrt{\\frac{2 \\times 4.35 \\times 10^{-19}}{9.11 \\times 10^{-31}}} \\approx 9.8 \\times 10^5\\) m s\\(^{-1}\\)."
  },

  {
    id: "AE_L2_02",
    text: "In a nuclear reaction, a {{mass defect}} of {{0.0035 u}} is converted to energy. If this energy is carried away entirely by a {{single photon}}, determine the {{momentum}} of that photon.",
    topic: "E",
    subtopic: "E3",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "mass defect", tip: "The difference between total mass of reactants and products." },
      { phrase: "0.0035 u", tip: "Δm = 0.0035 × 1.661 × 10⁻²⁷ kg = 5.81 × 10⁻³⁰ kg." },
      { phrase: "single photon", tip: "A photon carrying all the released energy." },
      { phrase: "momentum", tip: "p = E/c for a photon." }
    ],
    knowns: [
      { symbol: "Δm", value: "0.0035", unit: "u", description: "mass defect" }
    ],
    unknowns: [
      { symbol: "p", unit: "kg m s⁻¹", description: "photon momentum" }
    ],
    acceptedSolutions: [
      ["E3_1", "E2_2", "CONST_u", "CONST_c"],
      ["E3_1", "E1_1", "C2_1", "CONST_u", "CONST_c", "CONST_h"]
    ],
    requiredConstants: ["CONST_u", "CONST_c"],
    hints: [
      "First convert the mass defect to energy using E = mc². Then find the photon momentum.",
      "E = Δmc² = 0.0035 × 1.661 × 10⁻²⁷ × (3.00 × 10⁸)² = 5.23 × 10⁻¹³ J. For a photon, E = pc.",
      "p = E/c = 5.23 × 10⁻¹³ / 3.00 × 10⁸ = 1.74 × 10⁻²¹ kg m s⁻¹."
    ],
    explanation: "Energy released: \\(E = \\Delta m c^2 = 0.0035 \\times 1.661 \\times 10^{-27} \\times (3.00 \\times 10^8)^2 = 5.23 \\times 10^{-13}\\) J. Photon momentum: \\(p = \\frac{E}{c} = \\frac{5.23 \\times 10^{-13}}{3.00 \\times 10^8} \\approx 1.7 \\times 10^{-21}\\) kg m s\\(^{-1}\\)."
  },

  // --- B+C Bridge (2 questions) ---

  {
    id: "BC_L2_01",
    text: "A star has a {{surface temperature}} of {{4000 K}}. Using Wien's displacement law, find the {{peak wavelength}} of its emission and then calculate the {{frequency}} of this peak radiation.",
    topic: "B",
    subtopic: "B1",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "surface temperature", tip: "T = 4000 K." },
      { phrase: "peak wavelength", tip: "λ_max, found from Wien's law: λ_max × T = 2.9 × 10⁻³ m K." },
      { phrase: "frequency", tip: "f, found from the wave equation v = fλ." }
    ],
    knowns: [
      { symbol: "T", value: "4000", unit: "K", description: "surface temperature" }
    ],
    unknowns: [
      { symbol: "λ_max", unit: "m", description: "peak wavelength" },
      { symbol: "f", unit: "Hz", description: "frequency of peak radiation" }
    ],
    acceptedSolutions: [
      ["B1_8", "C2_1", "CONST_c"]
    ],
    requiredConstants: ["CONST_c"],
    hints: [
      "Wien's law gives the peak wavelength. Then use v = fλ with v = c (electromagnetic radiation).",
      "λ_max = 2.9 × 10⁻³ / 4000 = 7.25 × 10⁻⁷ m (725 nm, red/infrared).",
      "f = c / λ = 3.00 × 10⁸ / 7.25 × 10⁻⁷ ≈ 4.1 × 10¹⁴ Hz."
    ],
    explanation: "Wien's law: \\(\\lambda_{max} = \\frac{2.9 \\times 10^{-3}}{4000} = 7.25 \\times 10^{-7}\\) m (725 nm). Wave equation: \\(f = \\frac{c}{\\lambda} = \\frac{3.00 \\times 10^8}{7.25 \\times 10^{-7}} \\approx 4.1 \\times 10^{14}\\) Hz."
  },

  {
    id: "BC_L2_02",
    text: "A sealed container holds an {{ideal gas}} at {{400 K}} and {{1.5 × 10⁵ Pa}}. The gas is cooled to {{300 K}} at constant volume. The molecules vibrate with a {{natural frequency}} related to the SHM period formula. If the {{period of molecular oscillation}} is proportional to {{1/√T}}, by what {{factor}} does the period change when cooled?",
    topic: "B",
    subtopic: "B3",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "ideal gas", tip: "Follows PV = nRT." },
      { phrase: "400 K", tip: "T₁ = 400 K, the initial temperature." },
      { phrase: "1.5 × 10⁵ Pa", tip: "P₁ = 1.5 × 10⁵ Pa." },
      { phrase: "300 K", tip: "T₂ = 300 K, the final temperature." },
      { phrase: "natural frequency", tip: "The frequency at which molecules oscillate." },
      { phrase: "period of molecular oscillation", tip: "T_osc, inversely related to the rms speed." },
      { phrase: "1/√T", tip: "Since v_rms ∝ √T, and period ∝ 1/v, period ∝ 1/√T." },
      { phrase: "factor", tip: "The ratio T_osc,2 / T_osc,1." }
    ],
    knowns: [
      { symbol: "T₁", value: "400", unit: "K", description: "initial temperature" },
      { symbol: "T₂", value: "300", unit: "K", description: "final temperature" }
    ],
    unknowns: [
      { symbol: "T_osc,2 / T_osc,1", unit: "", description: "factor change in oscillation period" }
    ],
    acceptedSolutions: [
      ["B3_3", "B1_2", "C1_2"]
    ],
    requiredConstants: [],
    hints: [
      "The rms speed of gas molecules is proportional to √T (from ½mv² = 3/2 k_BT). Period ∝ 1/speed.",
      "Period ∝ 1/√T. So T_osc,2/T_osc,1 = √(T₁/T₂).",
      "√(400/300) = √(4/3) ≈ 1.15. The period increases by a factor of about 1.15."
    ],
    explanation: "Since \\(v_{rms} \\propto \\sqrt{T}\\) and period \\(\\propto 1/v\\), period \\(\\propto 1/\\sqrt{T}\\). Ratio: \\(\\frac{T_{osc,2}}{T_{osc,1}} = \\sqrt{\\frac{T_1}{T_2}} = \\sqrt{\\frac{400}{300}} = \\sqrt{\\frac{4}{3}} \\approx 1.15\\). The oscillation period increases by about 15%."
  },

  // --- B+D Bridge (2 questions) ---

  {
    id: "BD_L2_01",
    text: "An {{electric kettle}} rated at {{2200 W}} heats {{0.80 kg}} of water from {{20 °C}} to {{100 °C}}. The kettle operates on {{230 V}} mains. Calculate the {{current}} drawn and the {{time}} taken. (Specific heat capacity of water = {{4200 J kg⁻¹ K⁻¹}}.)",
    topic: "B",
    subtopic: "B5",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "electric kettle", tip: "Converts electrical energy to thermal energy." },
      { phrase: "2200 W", tip: "P = 2200 W, the power rating." },
      { phrase: "0.80 kg", tip: "m = 0.80 kg of water." },
      { phrase: "20 °C", tip: "Initial temperature." },
      { phrase: "100 °C", tip: "Final temperature. ΔT = 80 K." },
      { phrase: "230 V", tip: "V = 230 V, mains voltage." },
      { phrase: "current", tip: "I, from P = IV." },
      { phrase: "time", tip: "t, from energy = power × time." },
      { phrase: "4200 J kg⁻¹ K⁻¹", tip: "c = 4200 J kg⁻¹ K⁻¹, specific heat capacity of water." }
    ],
    knowns: [
      { symbol: "P", value: "2200", unit: "W", description: "power" },
      { symbol: "V", value: "230", unit: "V", description: "voltage" },
      { symbol: "m", value: "0.80", unit: "kg", description: "mass of water" },
      { symbol: "ΔT", value: "80", unit: "K", description: "temperature change" },
      { symbol: "c", value: "4200", unit: "J kg⁻¹ K⁻¹", description: "specific heat capacity" }
    ],
    unknowns: [
      { symbol: "I", unit: "A", description: "current" },
      { symbol: "t", unit: "s", description: "time" }
    ],
    acceptedSolutions: [
      ["B5_5", "B1_3", "A3_5"]
    ],
    requiredConstants: [],
    hints: [
      "Find the current from P = IV. Then find the thermal energy needed Q = mcΔT, and the time from Pt = Q.",
      "I = P/V = 2200/230 ≈ 9.6 A. Q = 0.80 × 4200 × 80 = 268 800 J.",
      "t = Q/P = 268 800 / 2200 ≈ 122 s (about 2 minutes)."
    ],
    explanation: "Current: \\(I = \\frac{P}{V} = \\frac{2200}{230} \\approx 9.6\\) A. Energy needed: \\(Q = mc\\Delta T = 0.80 \\times 4200 \\times 80 = 268\\,800\\) J. Time: \\(t = \\frac{Q}{P} = \\frac{268\\,800}{2200} \\approx 122\\) s."
  },

  {
    id: "BD_L2_02",
    text: "A {{hydroelectric dam}} has water falling through a height of {{50 m}} at a flow rate of {{200 kg s⁻¹}}. The water drives a generator with {{efficiency 85%}}. Calculate the {{electrical power output}} and the {{current}} if the output voltage is {{10 kV}}.",
    topic: "A",
    subtopic: "A3",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "hydroelectric dam", tip: "Converts gravitational PE to electrical energy." },
      { phrase: "50 m", tip: "h = 50 m, the height through which water falls." },
      { phrase: "200 kg s⁻¹", tip: "Mass flow rate = 200 kg s⁻¹." },
      { phrase: "efficiency 85%", tip: "η = 0.85, so useful power = 0.85 × total power input." },
      { phrase: "electrical power output", tip: "P_out, the useful electrical power generated." },
      { phrase: "current", tip: "I, from P = IV." },
      { phrase: "10 kV", tip: "V = 10 000 V, the output voltage." }
    ],
    knowns: [
      { symbol: "h", value: "50", unit: "m", description: "height" },
      { symbol: "dm/dt", value: "200", unit: "kg s⁻¹", description: "mass flow rate" },
      { symbol: "η", value: "0.85", unit: "", description: "efficiency" },
      { symbol: "V", value: "10 000", unit: "V", description: "output voltage" }
    ],
    unknowns: [
      { symbol: "P_out", unit: "W", description: "electrical power output" },
      { symbol: "I", unit: "A", description: "current" }
    ],
    acceptedSolutions: [
      ["A3_3", "A3_5", "A3_6", "B5_5", "CONST_g"]
    ],
    requiredConstants: ["CONST_g"],
    hints: [
      "Power input = rate of PE loss = (dm/dt)gh. Then apply efficiency to get electrical power.",
      "P_in = 200 × 9.8 × 50 = 98 000 W. P_out = 0.85 × 98 000 = 83 300 W.",
      "I = P/V = 83 300 / 10 000 ≈ 8.3 A."
    ],
    explanation: "Gravitational power: \\(P_{in} = \\frac{dm}{dt}gh = 200 \\times 9.8 \\times 50 = 98\\,000\\) W. Electrical output: \\(P_{out} = \\eta P_{in} = 0.85 \\times 98\\,000 = 83\\,300\\) W. Current: \\(I = \\frac{P}{V} = \\frac{83\\,300}{10\\,000} \\approx 8.3\\) A."
  },

  // --- B+E Bridge (2 questions) ---

  {
    id: "BE_L2_01",
    text: "A {{radioactive source}} of activity {{5.0 × 10⁶ Bq}} emits {{alpha particles}} each with {{kinetic energy 4.8 MeV}}. All the energy is absorbed by a {{0.020 kg}} block of lead (specific heat capacity {{130 J kg⁻¹ K⁻¹}}). Estimate the {{temperature rise}} per second.",
    topic: "E",
    subtopic: "E3",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "radioactive source", tip: "Emitting particles at a known rate (activity)." },
      { phrase: "5.0 × 10⁶ Bq", tip: "A = 5.0 × 10⁶ decays per second." },
      { phrase: "alpha particles", tip: "Helium-4 nuclei emitted during alpha decay." },
      { phrase: "kinetic energy 4.8 MeV", tip: "E_α = 4.8 × 10⁶ × 1.60 × 10⁻¹⁹ = 7.68 × 10⁻¹³ J per alpha." },
      { phrase: "0.020 kg", tip: "m = 0.020 kg of lead." },
      { phrase: "130 J kg⁻¹ K⁻¹", tip: "c = 130 J kg⁻¹ K⁻¹." },
      { phrase: "temperature rise", tip: "ΔT per second, found from Q/t = mcΔT/t." }
    ],
    knowns: [
      { symbol: "A", value: "5.0 × 10⁶", unit: "Bq", description: "activity" },
      { symbol: "E_α", value: "7.68 × 10⁻¹³", unit: "J", description: "energy per alpha (4.8 MeV)" },
      { symbol: "m", value: "0.020", unit: "kg", description: "mass of lead" },
      { symbol: "c", value: "130", unit: "J kg⁻¹ K⁻¹", description: "specific heat capacity of lead" }
    ],
    unknowns: [
      { symbol: "ΔT/t", unit: "K s⁻¹", description: "temperature rise per second" }
    ],
    acceptedSolutions: [
      ["E3_3", "B1_3", "CONST_e"]
    ],
    requiredConstants: ["CONST_e"],
    hints: [
      "Power deposited = activity × energy per decay. This thermal power heats the lead.",
      "P = A × E_α = 5.0 × 10⁶ × 7.68 × 10⁻¹³ = 3.84 × 10⁻⁶ W. Then P = mcΔT/t.",
      "ΔT/t = P / (mc) = 3.84 × 10⁻⁶ / (0.020 × 130) = 3.84 × 10⁻⁶ / 2.6 ≈ 1.5 × 10⁻⁶ K s⁻¹."
    ],
    explanation: "Power absorbed: \\(P = A \\times E_\\alpha = 5.0 \\times 10^6 \\times 7.68 \\times 10^{-13} = 3.84 \\times 10^{-6}\\) W. Rate of temperature rise: \\(\\frac{\\Delta T}{t} = \\frac{P}{mc} = \\frac{3.84 \\times 10^{-6}}{0.020 \\times 130} \\approx 1.5 \\times 10^{-6}\\) K s\\(^{-1}\\)."
  },

  {
    id: "BE_L2_02",
    text: "A container holds {{2.0 mol}} of helium gas at {{350 K}}. Calculate the {{total number of atoms}} and the {{total internal energy}} of the gas.",
    topic: "B",
    subtopic: "B3",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "2.0 mol", tip: "n = 2.0 mol of helium." },
      { phrase: "350 K", tip: "T = 350 K." },
      { phrase: "total number of atoms", tip: "N = nN_A, using Avogadro's constant." },
      { phrase: "total internal energy", tip: "U = (3/2)nRT for a monatomic ideal gas." }
    ],
    knowns: [
      { symbol: "n", value: "2.0", unit: "mol", description: "amount of gas" },
      { symbol: "T", value: "350", unit: "K", description: "temperature" }
    ],
    unknowns: [
      { symbol: "N", unit: "", description: "total number of atoms" },
      { symbol: "U", unit: "J", description: "total internal energy" }
    ],
    acceptedSolutions: [
      ["B3_2", "B3_6", "CONST_NA", "CONST_R"]
    ],
    requiredConstants: ["CONST_NA", "CONST_R"],
    hints: [
      "Use N = nN_A for the number of atoms. Then use U = (3/2)nRT for the internal energy of a monatomic ideal gas.",
      "N = 2.0 × 6.02 × 10²³ = 1.204 × 10²⁴ atoms.",
      "U = (3/2) × 2.0 × 8.31 × 350 = 3 × 8.31 × 350 = 8726 J ≈ 8.7 kJ."
    ],
    explanation: "Number of atoms: \\(N = nN_A = 2.0 \\times 6.02 \\times 10^{23} = 1.2 \\times 10^{24}\\). Internal energy: \\(U = \\tfrac{3}{2}nRT = \\tfrac{3}{2}(2.0)(8.31)(350) \\approx 8700\\) J (8.7 kJ)."
  },

  // --- C+D Bridge (2 questions) ---

  {
    id: "CD_L2_01",
    text: "An {{electromagnetic wave}} has a {{wavelength of 500 nm}}. Calculate its {{frequency}} and the {{energy of a single photon}}. If this photon is absorbed by a {{free electron}} initially at rest, find the {{speed}} gained by the electron.",
    topic: "E",
    subtopic: "E1",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "electromagnetic wave", tip: "Travels at speed c = 3.00 × 10⁸ m s⁻¹ in vacuum." },
      { phrase: "wavelength of 500 nm", tip: "λ = 500 × 10⁻⁹ m = 5.00 × 10⁻⁷ m." },
      { phrase: "frequency", tip: "f, from v = fλ." },
      { phrase: "energy of a single photon", tip: "E = hf." },
      { phrase: "free electron", tip: "An electron not bound to an atom." },
      { phrase: "speed", tip: "v, from E = ½mv² (assuming all photon energy becomes KE)." }
    ],
    knowns: [
      { symbol: "λ", value: "5.00 × 10⁻⁷", unit: "m", description: "wavelength" }
    ],
    unknowns: [
      { symbol: "f", unit: "Hz", description: "frequency" },
      { symbol: "E", unit: "J", description: "photon energy" },
      { symbol: "v", unit: "m s⁻¹", description: "electron speed" }
    ],
    acceptedSolutions: [
      ["C2_1", "E1_1", "A3_2", "CONST_c", "CONST_h", "CONST_me"]
    ],
    requiredConstants: ["CONST_c", "CONST_h", "CONST_me"],
    hints: [
      "This bridges waves (C), photons (E), and kinetic energy (A). Start with f = c/λ, then E = hf.",
      "f = 3.00 × 10⁸ / 5.00 × 10⁻⁷ = 6.00 × 10¹⁴ Hz. E = 6.63 × 10⁻³⁴ × 6.00 × 10¹⁴ = 3.98 × 10⁻¹⁹ J.",
      "½m_e v² = E → v = √(2E/m_e) = √(2 × 3.98 × 10⁻¹⁹ / 9.11 × 10⁻³¹) ≈ 9.3 × 10⁵ m s⁻¹."
    ],
    explanation: "Frequency: \\(f = \\frac{c}{\\lambda} = \\frac{3.00 \\times 10^8}{5.00 \\times 10^{-7}} = 6.00 \\times 10^{14}\\) Hz. Photon energy: \\(E = hf = 6.63 \\times 10^{-34} \\times 6.00 \\times 10^{14} = 3.98 \\times 10^{-19}\\) J. Electron speed: \\(v = \\sqrt{\\frac{2E}{m_e}} = \\sqrt{\\frac{2 \\times 3.98 \\times 10^{-19}}{9.11 \\times 10^{-31}}} \\approx 9.3 \\times 10^5\\) m s\\(^{-1}\\)."
  },

  {
    id: "CD_L2_02",
    text: "A {{simple pendulum}} of length {{1.0 m}} is taken to the Moon, where {{g_Moon = 1.6 m s⁻²}}. Calculate the {{period}} on the Moon and compare it to the period on Earth by finding the {{ratio T_Moon / T_Earth}}.",
    topic: "C",
    subtopic: "C1",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "simple pendulum", tip: "A mass on a light string, oscillating with small amplitude." },
      { phrase: "1.0 m", tip: "l = 1.0 m, the length of the pendulum." },
      { phrase: "g_Moon = 1.6 m s⁻²", tip: "The gravitational field strength on the Moon's surface." },
      { phrase: "period", tip: "T = 2π√(l/g), depends on the local gravitational field strength." },
      { phrase: "ratio T_Moon / T_Earth", tip: "Compare using the same formula with different g values." }
    ],
    knowns: [
      { symbol: "l", value: "1.0", unit: "m", description: "pendulum length" },
      { symbol: "g_Moon", value: "1.6", unit: "m s⁻²", description: "Moon's gravitational field strength" },
      { symbol: "g_Earth", value: "9.8", unit: "m s⁻²", description: "Earth's gravitational field strength" }
    ],
    unknowns: [
      { symbol: "T_Moon", unit: "s", description: "period on the Moon" },
      { symbol: "T_Moon / T_Earth", unit: "", description: "ratio of periods" }
    ],
    acceptedSolutions: [
      ["C1_4", "D1_2", "CONST_g"]
    ],
    requiredConstants: ["CONST_g"],
    hints: [
      "Use T = 2π√(l/g). The period depends on g, which is different on the Moon.",
      "T_Moon = 2π√(1.0/1.6) = 2π × 0.791 ≈ 4.97 s. T_Earth = 2π√(1.0/9.8) ≈ 2.01 s.",
      "Ratio: T_Moon/T_Earth = √(g_Earth/g_Moon) = √(9.8/1.6) = √6.125 ≈ 2.47."
    ],
    explanation: "On the Moon: \\(T_{Moon} = 2\\pi\\sqrt{\\frac{l}{g_{Moon}}} = 2\\pi\\sqrt{\\frac{1.0}{1.6}} \\approx 4.97\\) s. On Earth: \\(T_{Earth} \\approx 2.01\\) s. Ratio: \\(\\frac{T_{Moon}}{T_{Earth}} = \\sqrt{\\frac{g_{Earth}}{g_{Moon}}} = \\sqrt{\\frac{9.8}{1.6}} \\approx 2.5\\). The pendulum swings about 2.5 times more slowly on the Moon."
  },

  // --- D+E Bridge (2 questions) ---

  {
    id: "DE_L2_01",
    text: "Two {{protons}} are separated by a distance equal to the {{nuclear radius}} of a {{carbon-12}} nucleus. Estimate the {{electrostatic force}} between them. (Use \\(R_0 = 1.2 \\times 10^{-15}\\) m.)",
    topic: "D",
    subtopic: "D2",
    level: 2,
    slhl: "HL",
    tooltips: [
      { phrase: "protons", tip: "Each has charge e = 1.60 × 10⁻¹⁹ C." },
      { phrase: "nuclear radius", tip: "R = R₀A^(1/3), where A is the mass number." },
      { phrase: "carbon-12", tip: "A = 12 for carbon-12." },
      { phrase: "electrostatic force", tip: "F, from Coulomb's law." }
    ],
    knowns: [
      { symbol: "A", value: "12", unit: "", description: "mass number of carbon" },
      { symbol: "R₀", value: "1.2 × 10⁻¹⁵", unit: "m", description: "Fermi radius constant" },
      { symbol: "q", value: "1.60 × 10⁻¹⁹", unit: "C", description: "proton charge" }
    ],
    unknowns: [
      { symbol: "F", unit: "N", description: "electrostatic force" }
    ],
    acceptedSolutions: [
      ["E1_2", "D2_1", "CONST_R0", "CONST_k", "CONST_e"]
    ],
    requiredConstants: ["CONST_R0", "CONST_k", "CONST_e"],
    hints: [
      "First find the nuclear radius of carbon-12 using R = R₀A^(1/3). Then use Coulomb's law.",
      "R = 1.2 × 10⁻¹⁵ × 12^(1/3) = 1.2 × 10⁻¹⁵ × 2.289 = 2.75 × 10⁻¹⁵ m.",
      "F = ke²/R² = 8.99 × 10⁹ × (1.60 × 10⁻¹⁹)² / (2.75 × 10⁻¹⁵)² ≈ 30 N. This is enormous — showing why the strong force is needed!"
    ],
    explanation: "Nuclear radius: \\(R = R_0 A^{1/3} = 1.2 \\times 10^{-15} \\times 12^{1/3} = 1.2 \\times 10^{-15} \\times 2.29 \\approx 2.75 \\times 10^{-15}\\) m. Coulomb force: \\(F = \\frac{ke^2}{R^2} = \\frac{8.99 \\times 10^9 \\times (1.60 \\times 10^{-19})^2}{(2.75 \\times 10^{-15})^2} \\approx 30\\) N. This huge repulsive force demonstrates why the strong nuclear force is essential to hold nuclei together."
  },

  {
    id: "DE_L2_02",
    text: "An {{alpha particle}} (charge {{+2e}}) is fired directly towards a {{gold nucleus}} (charge {{+79e}}) and reaches a {{distance of closest approach}} of {{4.7 × 10⁻¹⁴ m}}. Using the concept that all kinetic energy converts to {{electric potential energy}} at closest approach, estimate the {{initial kinetic energy}} of the alpha particle in MeV.",
    topic: "D",
    subtopic: "D2",
    level: 2,
    slhl: "HL",
    tooltips: [
      { phrase: "alpha particle", tip: "Helium-4 nucleus with charge +2e." },
      { phrase: "+2e", tip: "q₁ = 2 × 1.60 × 10⁻¹⁹ = 3.20 × 10⁻¹⁹ C." },
      { phrase: "gold nucleus", tip: "Charge +79e (79 protons)." },
      { phrase: "+79e", tip: "q₂ = 79 × 1.60 × 10⁻¹⁹ = 1.264 × 10⁻¹⁷ C." },
      { phrase: "distance of closest approach", tip: "r_min = 4.7 × 10⁻¹⁴ m. At this point the alpha is momentarily at rest." },
      { phrase: "electric potential energy", tip: "E_p = kq₁q₂/r at the distance of closest approach." },
      { phrase: "initial kinetic energy", tip: "E_k = E_p at closest approach (energy conservation)." }
    ],
    knowns: [
      { symbol: "q₁", value: "3.20 × 10⁻¹⁹", unit: "C", description: "alpha particle charge (2e)" },
      { symbol: "q₂", value: "1.264 × 10⁻¹⁷", unit: "C", description: "gold nucleus charge (79e)" },
      { symbol: "r", value: "4.7 × 10⁻¹⁴", unit: "m", description: "distance of closest approach" }
    ],
    unknowns: [
      { symbol: "E_k", unit: "MeV", description: "initial kinetic energy" }
    ],
    acceptedSolutions: [
      ["D2_4", "CONST_k", "CONST_e"],
      ["D2_5", "D2_7", "CONST_k", "CONST_e"]
    ],
    requiredConstants: ["CONST_k", "CONST_e"],
    hints: [
      "At closest approach, all KE has converted to electric PE. So E_k = kq₁q₂/r.",
      "E_k = 8.99 × 10⁹ × 3.20 × 10⁻¹⁹ × 1.264 × 10⁻¹⁷ / (4.7 × 10⁻¹⁴).",
      "E_k = 8.99 × 10⁹ × 4.045 × 10⁻³⁶ / 4.7 × 10⁻¹⁴ = 7.73 × 10⁻¹³ J = 7.73 × 10⁻¹³ / 1.60 × 10⁻¹³ ≈ 4.8 MeV."
    ],
    explanation: "At closest approach: \\(E_k = \\frac{kq_1 q_2}{r} = \\frac{8.99 \\times 10^9 \\times (2 \\times 1.60 \\times 10^{-19})(79 \\times 1.60 \\times 10^{-19})}{4.7 \\times 10^{-14}} \\approx 7.7 \\times 10^{-13}\\) J \\(= \\frac{7.7 \\times 10^{-13}}{1.60 \\times 10^{-13}} \\approx 4.8\\) MeV. This is the classic Rutherford scattering energy scale."
  },

  // =====================================================================
  // BATCH 9 — 40 QUESTIONS (Final batch to reach 300)
  // 8 Proportional Reasoning L1  |  5 Gap-Fill L1  |  10 Cross-Topic L2 (with C)  |  17 Other Cross-Topic L2
  // =====================================================================

  // -----------------------------------------------
  // PROPORTIONAL REASONING L1 (8 questions)
  // -----------------------------------------------

  {
    id: "PR_L1_01",
    text: "The speed of an object is {{tripled}}. What happens to its {{kinetic energy}}?",
    topic: "A",
    subtopic: "A3",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "tripled", tip: "The new speed is 3v." },
      { phrase: "kinetic energy", tip: "Ek = ½mv². How does Ek depend on v?" }
    ],
    knowns: [
      { symbol: "v₂", value: "3v", unit: "", description: "new speed is three times the original" }
    ],
    unknowns: [
      { symbol: "E_k2/E_k1", unit: "", description: "factor change in kinetic energy" }
    ],
    acceptedSolutions: [["A3_2"]],
    requiredConstants: [],
    hints: [
      "Write out Ek = ½mv². What happens when you replace v with 3v?",
      "Ek₂ = ½m(3v)² = ½m × 9v² = 9 × ½mv².",
      "The kinetic energy increases by a factor of 9."
    ],
    explanation: "\\(E_{k2} = \\tfrac{1}{2}m(3v)^2 = 9 \\times \\tfrac{1}{2}mv^2 = 9E_{k1}\\). The kinetic energy increases by a factor of 9."
  },

  {
    id: "PR_L1_02",
    text: "The {{length}} of a simple pendulum is {{quadrupled}}. What happens to its {{period}}?",
    topic: "C",
    subtopic: "C1",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "length", tip: "l, the distance from the pivot to the centre of mass of the bob." },
      { phrase: "quadrupled", tip: "The new length is 4l." },
      { phrase: "period", tip: "T = 2π√(l/g). How does T depend on l?" }
    ],
    knowns: [
      { symbol: "l₂", value: "4l", unit: "", description: "new length is four times the original" }
    ],
    unknowns: [
      { symbol: "T₂/T₁", unit: "", description: "factor change in period" }
    ],
    acceptedSolutions: [["C1_4"]],
    requiredConstants: [],
    hints: [
      "The period of a pendulum is T = 2π√(l/g). Replace l with 4l.",
      "T₂ = 2π√(4l/g) = 2π × 2√(l/g) = 2T₁.",
      "The period doubles."
    ],
    explanation: "\\(T_2 = 2\\pi\\sqrt{\\frac{4l}{g}} = 2 \\times 2\\pi\\sqrt{\\frac{l}{g}} = 2T_1\\). The period doubles when the length is quadrupled."
  },

  {
    id: "PR_L1_03",
    text: "An ideal gas has its {{volume halved}} and its {{absolute temperature doubled}}. What happens to its {{pressure}}?",
    topic: "B",
    subtopic: "B3",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "volume halved", tip: "The new volume is V/2." },
      { phrase: "absolute temperature doubled", tip: "The new temperature is 2T." },
      { phrase: "pressure", tip: "pV = NkBT. What does p depend on?" }
    ],
    knowns: [
      { symbol: "V₂", value: "V/2", unit: "", description: "new volume is half the original" },
      { symbol: "T₂", value: "2T", unit: "", description: "new temperature is double the original" }
    ],
    unknowns: [
      { symbol: "p₂/p₁", unit: "", description: "factor change in pressure" }
    ],
    acceptedSolutions: [["B3_3"]],
    requiredConstants: [],
    hints: [
      "Use the ideal gas law: pV = NkBT, so p = NkBT/V.",
      "p₂ = NkB(2T)/(V/2) = 4 × NkBT/V = 4p₁.",
      "The pressure increases by a factor of 4."
    ],
    explanation: "\\(p_2 = \\frac{Nk_BT_2}{V_2} = \\frac{Nk_B(2T)}{V/2} = 4\\frac{Nk_BT}{V} = 4p_1\\). The pressure quadruples."
  },

  {
    id: "PR_L1_04",
    text: "A resistor is connected to a {{constant voltage}} supply. The {{resistance is halved}}. What happens to the {{power dissipated}}?",
    topic: "B",
    subtopic: "B5",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "constant voltage", tip: "V stays the same throughout the change." },
      { phrase: "resistance is halved", tip: "The new resistance is R/2." },
      { phrase: "power dissipated", tip: "P = V²/R. How does P depend on R?" }
    ],
    knowns: [
      { symbol: "R₂", value: "R/2", unit: "", description: "new resistance is half the original" },
      { symbol: "V", value: "constant", unit: "", description: "voltage does not change" }
    ],
    unknowns: [
      { symbol: "P₂/P₁", unit: "", description: "factor change in power" }
    ],
    acceptedSolutions: [["B5_5"]],
    requiredConstants: [],
    hints: [
      "At constant voltage, P = V²/R. Replace R with R/2.",
      "P₂ = V²/(R/2) = 2V²/R = 2P₁.",
      "The power doubles."
    ],
    explanation: "\\(P_2 = \\frac{V^2}{R/2} = \\frac{2V^2}{R} = 2P_1\\). The power dissipated doubles when the resistance is halved at constant voltage."
  },

  {
    id: "PR_L1_05",
    text: "In a double-slit experiment, the {{wavelength is doubled}} and the {{slit separation is halved}}. What happens to the {{fringe spacing}}?",
    topic: "C",
    subtopic: "C3",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "wavelength is doubled", tip: "The new wavelength is 2λ." },
      { phrase: "slit separation is halved", tip: "The new slit separation is d/2." },
      { phrase: "fringe spacing", tip: "s = λD/d. How does s depend on λ and d?" }
    ],
    knowns: [
      { symbol: "λ₂", value: "2λ", unit: "", description: "new wavelength is double the original" },
      { symbol: "d₂", value: "d/2", unit: "", description: "new slit separation is half the original" }
    ],
    unknowns: [
      { symbol: "s₂/s₁", unit: "", description: "factor change in fringe spacing" }
    ],
    acceptedSolutions: [["C3_2"]],
    requiredConstants: [],
    hints: [
      "Fringe spacing s = λD/d. Replace λ with 2λ and d with d/2.",
      "s₂ = (2λ)D/(d/2) = 4λD/d = 4s₁.",
      "The fringe spacing increases by a factor of 4."
    ],
    explanation: "\\(s_2 = \\frac{(2\\lambda)D}{d/2} = \\frac{4\\lambda D}{d} = 4s_1\\). The fringe spacing quadruples."
  },

  {
    id: "PR_L1_06",
    text: "In {{simple harmonic motion}}, the {{amplitude is tripled}}. What happens to the {{total energy}}?",
    topic: "C",
    subtopic: "C1",
    level: 1,
    slhl: "HL",
    tooltips: [
      { phrase: "simple harmonic motion", tip: "SHM: oscillation where restoring force is proportional to displacement." },
      { phrase: "amplitude is tripled", tip: "The new amplitude is 3A." },
      { phrase: "total energy", tip: "ET = ½mω²A². How does ET depend on A?" }
    ],
    knowns: [
      { symbol: "A₂", value: "3A", unit: "", description: "new amplitude is three times the original" }
    ],
    unknowns: [
      { symbol: "ET₂/ET₁", unit: "", description: "factor change in total energy" }
    ],
    acceptedSolutions: [["C1_8"]],
    requiredConstants: [],
    hints: [
      "Total energy in SHM: ET = ½mω²A². Replace A with 3A.",
      "ET₂ = ½mω²(3A)² = ½mω² × 9A² = 9 × ½mω²A².",
      "The total energy increases by a factor of 9."
    ],
    explanation: "\\(E_{T2} = \\tfrac{1}{2}m\\omega^2(3A)^2 = 9 \\times \\tfrac{1}{2}m\\omega^2 A^2 = 9E_{T1}\\). The total energy increases by a factor of 9."
  },

  {
    id: "PR_L1_07",
    text: "The {{distance}} between two point masses is {{tripled}}. What happens to the {{gravitational force}} between them?",
    topic: "D",
    subtopic: "D1",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "distance", tip: "r, the centre-to-centre separation of the two masses." },
      { phrase: "tripled", tip: "The new distance is 3r." },
      { phrase: "gravitational force", tip: "F = Gm₁m₂/r². How does F depend on r?" }
    ],
    knowns: [
      { symbol: "r₂", value: "3r", unit: "", description: "new separation is three times the original" }
    ],
    unknowns: [
      { symbol: "F₂/F₁", unit: "", description: "factor change in gravitational force" }
    ],
    acceptedSolutions: [["D1_1"]],
    requiredConstants: [],
    hints: [
      "Newton's law of gravitation: F = Gm₁m₂/r². Replace r with 3r.",
      "F₂ = Gm₁m₂/(3r)² = Gm₁m₂/(9r²) = F₁/9.",
      "The gravitational force decreases by a factor of 9."
    ],
    explanation: "\\(F_2 = \\frac{Gm_1m_2}{(3r)^2} = \\frac{Gm_1m_2}{9r^2} = \\frac{F_1}{9}\\). The force decreases to one-ninth of its original value."
  },

  {
    id: "PR_L1_08",
    text: "A radioactive sample has its {{decay constant doubled}} and the {{number of undecayed nuclei halved}}. What happens to the {{activity}}?",
    topic: "E",
    subtopic: "E3",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "decay constant doubled", tip: "The new decay constant is 2λ." },
      { phrase: "number of undecayed nuclei halved", tip: "The new number is N/2." },
      { phrase: "activity", tip: "A = λN. How does A depend on λ and N?" }
    ],
    knowns: [
      { symbol: "λ₂", value: "2λ", unit: "", description: "new decay constant is double the original" },
      { symbol: "N₂", value: "N/2", unit: "", description: "new number of nuclei is half the original" }
    ],
    unknowns: [
      { symbol: "A₂/A₁", unit: "", description: "factor change in activity" }
    ],
    acceptedSolutions: [["E3_3"]],
    requiredConstants: [],
    hints: [
      "Activity A = λN. Replace λ with 2λ and N with N/2.",
      "A₂ = (2λ)(N/2) = λN = A₁.",
      "The activity stays the same — it does not change."
    ],
    explanation: "\\(A_2 = (2\\lambda)\\left(\\frac{N}{2}\\right) = \\lambda N = A_1\\). The two changes cancel exactly, so the activity remains unchanged."
  },

  // -----------------------------------------------
  // GAP-FILL L1 (5 questions)
  // -----------------------------------------------

  {
    id: "C3_L1_06",
    text: "Light of wavelength {{550 nm}} passes through a {{single slit}} of width {{0.12 mm}}. Calculate the {{angular width}} of the central diffraction maximum.",
    topic: "C",
    subtopic: "C3",
    level: 1,
    slhl: "HL",
    tooltips: [
      { phrase: "550 nm", tip: "λ = 550 nm = 550 × 10⁻⁹ m." },
      { phrase: "single slit", tip: "A single slit produces a diffraction pattern with a central maximum." },
      { phrase: "0.12 mm", tip: "b = 0.12 mm = 1.2 × 10⁻⁴ m is the slit width." },
      { phrase: "angular width", tip: "The full angular width of the central maximum is 2θ, where θ = λ/b." }
    ],
    knowns: [
      { symbol: "λ", value: "550 × 10⁻⁹", unit: "m", description: "wavelength of light" },
      { symbol: "b", value: "1.2 × 10⁻⁴", unit: "m", description: "slit width" }
    ],
    unknowns: [
      { symbol: "2θ", unit: "rad", description: "full angular width of the central maximum" }
    ],
    acceptedSolutions: [["C3_3"]],
    requiredConstants: [],
    hints: [
      "For single slit diffraction, the first minimum occurs at θ = λ/b.",
      "θ = (550 × 10⁻⁹) / (1.2 × 10⁻⁴) = 4.58 × 10⁻³ rad.",
      "The full angular width is 2θ = 2 × 4.58 × 10⁻³ = 9.2 × 10⁻³ rad."
    ],
    explanation: "First minimum: \\(\\theta = \\frac{\\lambda}{b} = \\frac{550 \\times 10^{-9}}{1.2 \\times 10^{-4}} = 4.58 \\times 10^{-3}\\) rad. Full angular width \\(= 2\\theta = 9.2 \\times 10^{-3}\\) rad \\(\\approx 0.53°\\)."
  },

  {
    id: "C5_L1_02",
    text: "An ambulance siren emits sound at {{f = 800 Hz}}. The ambulance moves {{towards}} a stationary observer at {{25 m s⁻¹}}. The {{speed of sound}} is {{340 m s⁻¹}}. Calculate the {{observed frequency}}.",
    topic: "C",
    subtopic: "C5",
    level: 1,
    slhl: "HL",
    tooltips: [
      { phrase: "f = 800 Hz", tip: "The frequency emitted by the source." },
      { phrase: "towards", tip: "Source moves towards the observer — the observed frequency is higher." },
      { phrase: "25 m s⁻¹", tip: "us = 25 m s⁻¹, speed of the source." },
      { phrase: "speed of sound", tip: "v = 340 m s⁻¹." },
      { phrase: "340 m s⁻¹", tip: "v = 340 m s⁻¹." },
      { phrase: "observed frequency", tip: "f' = fv/(v − us) for a source approaching a stationary observer." }
    ],
    knowns: [
      { symbol: "f", value: "800", unit: "Hz", description: "emitted frequency" },
      { symbol: "us", value: "25", unit: "m s⁻¹", description: "speed of the source" },
      { symbol: "v", value: "340", unit: "m s⁻¹", description: "speed of sound" }
    ],
    unknowns: [
      { symbol: "f'", unit: "Hz", description: "observed frequency" }
    ],
    acceptedSolutions: [["C5_2"]],
    requiredConstants: [],
    hints: [
      "For a source moving towards a stationary observer: f' = fv/(v − us).",
      "f' = 800 × 340 / (340 − 25) = 800 × 340 / 315.",
      "f' = 272000 / 315 ≈ 863 Hz."
    ],
    explanation: "\\(f' = \\frac{fv}{v - u_s} = \\frac{800 \\times 340}{340 - 25} = \\frac{272000}{315} \\approx 863\\) Hz. The observed frequency is higher because the source approaches."
  },

  {
    id: "A2_L1_15",
    text: "A ball on a string moves in a {{horizontal circle}} of radius {{0.80 m}} at a speed of {{4.0 m s⁻¹}}. Calculate the {{centripetal acceleration}}.",
    topic: "A",
    subtopic: "A2",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "horizontal circle", tip: "Uniform circular motion in the horizontal plane." },
      { phrase: "0.80 m", tip: "r = 0.80 m, the radius of the circular path." },
      { phrase: "4.0 m s⁻¹", tip: "v = 4.0 m s⁻¹, the speed of the ball." },
      { phrase: "centripetal acceleration", tip: "a = v²/r, directed towards the centre of the circle." }
    ],
    knowns: [
      { symbol: "r", value: "0.80", unit: "m", description: "radius of circular path" },
      { symbol: "v", value: "4.0", unit: "m s⁻¹", description: "speed" }
    ],
    unknowns: [
      { symbol: "a", unit: "m s⁻²", description: "centripetal acceleration" }
    ],
    acceptedSolutions: [["A2_10"]],
    requiredConstants: [],
    hints: [
      "Centripetal acceleration: a = v²/r.",
      "a = (4.0)² / 0.80 = 16 / 0.80.",
      "a = 20 m s⁻²."
    ],
    explanation: "\\(a = \\frac{v^2}{r} = \\frac{(4.0)^2}{0.80} = \\frac{16}{0.80} = 20\\) m s⁻². The centripetal acceleration is 20 m s⁻² directed towards the centre."
  },

  {
    id: "B1_L1_05",
    text: "A copper rod of length {{0.50 m}} and cross-sectional area {{2.0 × 10⁻⁴ m²}} has a thermal conductivity of {{k = 385 W m⁻¹ K⁻¹}}. One end is held at {{100 °C}} and the other at {{20 °C}}. Calculate the {{rate of heat transfer}}.",
    topic: "B",
    subtopic: "B1",
    level: 1,
    slhl: "SL",
    tooltips: [
      { phrase: "0.50 m", tip: "L = 0.50 m, the length of the rod." },
      { phrase: "2.0 × 10⁻⁴ m²", tip: "A = 2.0 × 10⁻⁴ m², the cross-sectional area." },
      { phrase: "k = 385 W m⁻¹ K⁻¹", tip: "Thermal conductivity of copper." },
      { phrase: "100 °C", tip: "T₁ = 100 °C, the hot end temperature." },
      { phrase: "20 °C", tip: "T₂ = 20 °C, the cold end temperature." },
      { phrase: "rate of heat transfer", tip: "dQ/dt = kA(ΔT/L), Fourier's law of conduction." }
    ],
    knowns: [
      { symbol: "k", value: "385", unit: "W m⁻¹ K⁻¹", description: "thermal conductivity" },
      { symbol: "A", value: "2.0 × 10⁻⁴", unit: "m²", description: "cross-sectional area" },
      { symbol: "L", value: "0.50", unit: "m", description: "length of rod" },
      { symbol: "ΔT", value: "80", unit: "K", description: "temperature difference (100 − 20)" }
    ],
    unknowns: [
      { symbol: "dQ/dt", unit: "W", description: "rate of heat transfer" }
    ],
    acceptedSolutions: [["B1_5"]],
    requiredConstants: [],
    hints: [
      "Use Fourier's law: dQ/dt = kA(ΔT/L).",
      "ΔT = 100 − 20 = 80 K. Then dQ/dt = 385 × 2.0 × 10⁻⁴ × 80 / 0.50.",
      "dQ/dt = 385 × 2.0 × 10⁻⁴ × 160 = 385 × 0.032 = 12.3 W."
    ],
    explanation: "\\(\\frac{dQ}{dt} = kA\\frac{\\Delta T}{L} = 385 \\times 2.0 \\times 10^{-4} \\times \\frac{80}{0.50} = 385 \\times 0.032 = 12.3\\) W."
  },

  {
    id: "D4_L1_02",
    text: "A rectangular loop of area {{0.040 m²}} is placed in a {{uniform magnetic field}} of {{0.25 T}} with the field {{perpendicular}} to the plane of the loop. Calculate the {{magnetic flux}} through the loop.",
    topic: "D",
    subtopic: "D4",
    level: 1,
    slhl: "HL",
    tooltips: [
      { phrase: "0.040 m²", tip: "A = 0.040 m², the area of the loop." },
      { phrase: "uniform magnetic field", tip: "B is the same everywhere across the loop." },
      { phrase: "0.25 T", tip: "B = 0.25 T." },
      { phrase: "perpendicular", tip: "The field is perpendicular to the loop plane, so θ = 0° and cosθ = 1." },
      { phrase: "magnetic flux", tip: "Φ = BA cosθ." }
    ],
    knowns: [
      { symbol: "B", value: "0.25", unit: "T", description: "magnetic field strength" },
      { symbol: "A", value: "0.040", unit: "m²", description: "area of loop" },
      { symbol: "θ", value: "0", unit: "°", description: "angle between B and the normal to the loop" }
    ],
    unknowns: [
      { symbol: "Φ", unit: "Wb", description: "magnetic flux" }
    ],
    acceptedSolutions: [["D4_1"]],
    requiredConstants: [],
    hints: [
      "Magnetic flux: Φ = BAcosθ. Since B is perpendicular to the loop, θ = 0°.",
      "cos0° = 1, so Φ = BA = 0.25 × 0.040.",
      "Φ = 0.010 Wb = 1.0 × 10⁻² Wb."
    ],
    explanation: "\\(\\Phi = BA\\cos\\theta = 0.25 \\times 0.040 \\times \\cos 0° = 0.010\\) Wb \\(= 1.0 \\times 10^{-2}\\) Wb."
  },

  // -----------------------------------------------
  // CROSS-TOPIC L2 WITH TOPIC C INVOLVEMENT (10 questions)
  // -----------------------------------------------

  {
    id: "XC_L2_01",
    text: "Light travelling in air strikes a glass block at an {{angle of incidence}} of {{50°}}. The glass has refractive index {{n = 1.52}}. Using {{Snell's law}}, find the {{angle of refraction}}. The light has wavelength {{590 nm}} in air. Calculate its {{wavelength inside the glass}}.",
    topic: "C",
    subtopic: "C3",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "angle of incidence", tip: "θ₁ = 50°, the angle between the incoming ray and the normal." },
      { phrase: "50°", tip: "θ₁ = 50°." },
      { phrase: "n = 1.52", tip: "Refractive index of the glass." },
      { phrase: "Snell's law", tip: "n₁sinθ₁ = n₂sinθ₂." },
      { phrase: "angle of refraction", tip: "θ₂, found using Snell's law." },
      { phrase: "590 nm", tip: "λ₁ = 590 nm = 590 × 10⁻⁹ m, wavelength in air." },
      { phrase: "wavelength inside the glass", tip: "λ₂ = λ₁/n." }
    ],
    knowns: [
      { symbol: "n₁", value: "1.00", unit: "", description: "refractive index of air" },
      { symbol: "n₂", value: "1.52", unit: "", description: "refractive index of glass" },
      { symbol: "θ₁", value: "50", unit: "°", description: "angle of incidence" },
      { symbol: "λ₁", value: "590 × 10⁻⁹", unit: "m", description: "wavelength in air" }
    ],
    unknowns: [
      { symbol: "θ₂", unit: "°", description: "angle of refraction" },
      { symbol: "λ₂", unit: "m", description: "wavelength in glass" }
    ],
    acceptedSolutions: [["C3_1", "C2_1"]],
    requiredConstants: [],
    hints: [
      "Step 1: Snell's law: sinθ₂ = (n₁/n₂)sinθ₁ = sin50°/1.52.",
      "sinθ₂ = 0.766/1.52 = 0.504, so θ₂ = sin⁻¹(0.504) ≈ 30.3°.",
      "Step 2: λ₂ = λ₁/n = 590/1.52 ≈ 388 nm."
    ],
    explanation: "Snell's law: \\(\\sin\\theta_2 = \\frac{\\sin 50°}{1.52} = \\frac{0.766}{1.52} = 0.504\\), so \\(\\theta_2 \\approx 30.3°\\). The wavelength in glass: \\(\\lambda_2 = \\frac{\\lambda_1}{n} = \\frac{590}{1.52} \\approx 388\\) nm. The frequency stays the same but the wavelength shortens."
  },

  {
    id: "XC_L2_02",
    text: "In a {{double-slit}} experiment, the slit separation is {{d = 0.40 mm}}, the screen distance is {{D = 2.0 m}}, and the fringe spacing is measured as {{s = 2.8 mm}}. Calculate the {{wavelength}} of the light, then find its {{frequency}}.",
    topic: "C",
    subtopic: "C3",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "double-slit", tip: "Young's double-slit experiment." },
      { phrase: "d = 0.40 mm", tip: "d = 0.40 mm = 4.0 × 10⁻⁴ m, slit separation." },
      { phrase: "D = 2.0 m", tip: "D = 2.0 m, distance to the screen." },
      { phrase: "s = 2.8 mm", tip: "s = 2.8 mm = 2.8 × 10⁻³ m, fringe spacing." },
      { phrase: "wavelength", tip: "s = λD/d, so λ = sd/D." },
      { phrase: "frequency", tip: "f = c/λ." }
    ],
    knowns: [
      { symbol: "d", value: "4.0 × 10⁻⁴", unit: "m", description: "slit separation" },
      { symbol: "D", value: "2.0", unit: "m", description: "screen distance" },
      { symbol: "s", value: "2.8 × 10⁻³", unit: "m", description: "fringe spacing" }
    ],
    unknowns: [
      { symbol: "λ", unit: "m", description: "wavelength" },
      { symbol: "f", unit: "Hz", description: "frequency" }
    ],
    acceptedSolutions: [["C3_2", "C2_1"]],
    requiredConstants: ["CONST_c"],
    hints: [
      "From s = λD/d: λ = sd/D = (2.8 × 10⁻³)(4.0 × 10⁻⁴)/2.0.",
      "λ = 1.12 × 10⁻⁶ / 2.0 = 5.6 × 10⁻⁷ m = 560 nm.",
      "f = c/λ = 3.00 × 10⁸ / 5.6 × 10⁻⁷ ≈ 5.4 × 10¹⁴ Hz."
    ],
    explanation: "\\(\\lambda = \\frac{sd}{D} = \\frac{2.8 \\times 10^{-3} \\times 4.0 \\times 10^{-4}}{2.0} = 5.6 \\times 10^{-7}\\) m. Then \\(f = \\frac{c}{\\lambda} = \\frac{3.00 \\times 10^8}{5.6 \\times 10^{-7}} \\approx 5.4 \\times 10^{14}\\) Hz."
  },

  {
    id: "XC_L2_03",
    text: "A {{mass of 0.50 kg}} hangs from a spring and oscillates in SHM with a {{period of 0.80 s}}. Find the {{spring constant}}. Then calculate the {{elastic potential energy}} stored when the spring is stretched {{0.060 m}} beyond its natural length, and the {{speed}} of the mass as it passes through the equilibrium position from that amplitude.",
    topic: "C",
    subtopic: "C1",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "mass of 0.50 kg", tip: "m = 0.50 kg." },
      { phrase: "period of 0.80 s", tip: "T = 0.80 s, one full oscillation cycle." },
      { phrase: "spring constant", tip: "T = 2π√(m/k), rearrange for k." },
      { phrase: "elastic potential energy", tip: "Ep = ½kx²." },
      { phrase: "0.060 m", tip: "x = 0.060 m = A, the amplitude." },
      { phrase: "speed", tip: "At equilibrium, all energy is kinetic: ½mv² = ½kA²." }
    ],
    knowns: [
      { symbol: "m", value: "0.50", unit: "kg", description: "mass" },
      { symbol: "T", value: "0.80", unit: "s", description: "period" },
      { symbol: "x", value: "0.060", unit: "m", description: "extension / amplitude" }
    ],
    unknowns: [
      { symbol: "k", unit: "N m⁻¹", description: "spring constant" },
      { symbol: "Ep", unit: "J", description: "elastic potential energy at maximum stretch" },
      { symbol: "v", unit: "m s⁻¹", description: "speed at equilibrium" }
    ],
    acceptedSolutions: [["C1_3", "A3_4", "A3_2"]],
    requiredConstants: [],
    hints: [
      "From T = 2π√(m/k): k = 4π²m/T² = 4π²(0.50)/(0.80)².",
      "k = 4 × 9.87 × 0.50 / 0.64 = 19.74 / 0.64 ≈ 30.8 N m⁻¹. Ep = ½kx² = ½(30.8)(0.060)² = 0.0555 J.",
      "At equilibrium: ½mv² = Ep, so v = √(2Ep/m) = √(2 × 0.0555 / 0.50) = √(0.222) ≈ 0.47 m s⁻¹."
    ],
    explanation: "\\(k = \\frac{4\\pi^2 m}{T^2} = \\frac{4\\pi^2(0.50)}{(0.80)^2} \\approx 30.8\\) N m⁻¹. \\(E_p = \\frac{1}{2}kx^2 = \\frac{1}{2}(30.8)(0.060)^2 \\approx 0.056\\) J. At equilibrium: \\(v = \\sqrt{\\frac{2E_p}{m}} = \\sqrt{\\frac{2(0.056)}{0.50}} \\approx 0.47\\) m s⁻¹."
  },

  {
    id: "XC_L2_04",
    text: "A simple pendulum has a {{period of 2.00 s}} on Earth where {{g = 9.81 m s⁻²}}. It is taken to another planet where {{g = 3.72 m s⁻²}}. Calculate the {{new period}} of the pendulum.",
    topic: "C",
    subtopic: "C1",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "period of 2.00 s", tip: "T₁ = 2.00 s on Earth." },
      { phrase: "g = 9.81 m s⁻²", tip: "Acceleration due to gravity on Earth." },
      { phrase: "g = 3.72 m s⁻²", tip: "Acceleration due to gravity on the other planet (Mars)." },
      { phrase: "new period", tip: "T = 2π√(l/g). The length l is unchanged; only g changes." }
    ],
    knowns: [
      { symbol: "T₁", value: "2.00", unit: "s", description: "period on Earth" },
      { symbol: "g₁", value: "9.81", unit: "m s⁻²", description: "gravitational acceleration on Earth" },
      { symbol: "g₂", value: "3.72", unit: "m s⁻²", description: "gravitational acceleration on other planet" }
    ],
    unknowns: [
      { symbol: "T₂", unit: "s", description: "period on the other planet" }
    ],
    acceptedSolutions: [["C1_4", "D1_2"]],
    requiredConstants: [],
    hints: [
      "T = 2π√(l/g). Since l is the same: T₂/T₁ = √(g₁/g₂).",
      "T₂ = T₁ × √(g₁/g₂) = 2.00 × √(9.81/3.72).",
      "T₂ = 2.00 × √(2.637) = 2.00 × 1.624 ≈ 3.25 s."
    ],
    explanation: "\\(\\frac{T_2}{T_1} = \\sqrt{\\frac{g_1}{g_2}}\\), so \\(T_2 = 2.00 \\times \\sqrt{\\frac{9.81}{3.72}} = 2.00 \\times 1.624 \\approx 3.25\\) s. The pendulum swings more slowly on the planet with weaker gravity."
  },

  {
    id: "XC_L2_05",
    text: "An ambulance siren emits sound at {{f₀ = 750 Hz}}. A stationary observer measures the frequency as {{f' = 820 Hz}} as the ambulance approaches. The {{speed of sound}} is {{v = 340 m s⁻¹}}. Calculate the {{speed of the ambulance}}.",
    topic: "C",
    subtopic: "C5",
    level: 2,
    slhl: "HL",
    tooltips: [
      { phrase: "f₀ = 750 Hz", tip: "The frequency emitted by the source." },
      { phrase: "f' = 820 Hz", tip: "The observed (higher) frequency." },
      { phrase: "speed of sound", tip: "v = 340 m s⁻¹." },
      { phrase: "v = 340 m s⁻¹", tip: "v = 340 m s⁻¹." },
      { phrase: "speed of the ambulance", tip: "f' = f₀v/(v − us). Rearrange for us." }
    ],
    knowns: [
      { symbol: "f₀", value: "750", unit: "Hz", description: "emitted frequency" },
      { symbol: "f'", value: "820", unit: "Hz", description: "observed frequency" },
      { symbol: "v", value: "340", unit: "m s⁻¹", description: "speed of sound" }
    ],
    unknowns: [
      { symbol: "us", unit: "m s⁻¹", description: "speed of the ambulance" }
    ],
    acceptedSolutions: [["C5_2", "C2_1"]],
    requiredConstants: [],
    hints: [
      "For source approaching: f' = f₀v/(v − us). Rearrange: v − us = f₀v/f'.",
      "us = v − f₀v/f' = v(1 − f₀/f') = 340(1 − 750/820).",
      "us = 340 × (1 − 0.9146) = 340 × 0.0854 ≈ 29 m s⁻¹."
    ],
    explanation: "\\(f' = \\frac{f_0 v}{v - u_s}\\) gives \\(u_s = v\\left(1 - \\frac{f_0}{f'}\\right) = 340\\left(1 - \\frac{750}{820}\\right) = 340 \\times 0.0854 \\approx 29\\) m s⁻¹."
  },

  {
    id: "XC_L2_06",
    text: "A string of length {{1.20 m}} vibrates in its {{third harmonic}} standing wave pattern. The frequency of vibration is {{180 Hz}}. Calculate the {{wavelength}} and the {{wave speed}} on the string.",
    topic: "C",
    subtopic: "C2",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "1.20 m", tip: "L = 1.20 m, the length of the string." },
      { phrase: "third harmonic", tip: "The third harmonic has 3 half-wavelengths fitting in the string length: L = 3λ/2." },
      { phrase: "180 Hz", tip: "f = 180 Hz." },
      { phrase: "wavelength", tip: "λ = 2L/3 for the third harmonic." },
      { phrase: "wave speed", tip: "v = fλ." }
    ],
    knowns: [
      { symbol: "L", value: "1.20", unit: "m", description: "length of string" },
      { symbol: "n", value: "3", unit: "", description: "harmonic number" },
      { symbol: "f", value: "180", unit: "Hz", description: "frequency" }
    ],
    unknowns: [
      { symbol: "λ", unit: "m", description: "wavelength" },
      { symbol: "v", unit: "m s⁻¹", description: "wave speed on the string" }
    ],
    acceptedSolutions: [["C2_1"]],
    requiredConstants: [],
    hints: [
      "For the nth harmonic on a string fixed at both ends: L = nλ/2, so λ = 2L/n.",
      "λ = 2(1.20)/3 = 0.80 m.",
      "v = fλ = 180 × 0.80 = 144 m s⁻¹."
    ],
    explanation: "Third harmonic: \\(\\lambda = \\frac{2L}{3} = \\frac{2(1.20)}{3} = 0.80\\) m. Wave speed: \\(v = f\\lambda = 180 \\times 0.80 = 144\\) m s⁻¹."
  },

  {
    id: "XC_L2_07",
    text: "Light of wavelength {{λ = 480 nm}} is incident on a {{diffraction grating}} with {{600 lines per mm}}. Calculate the {{angle}} of the second-order maximum. Then find the {{energy of one photon}} of this light.",
    topic: "C",
    subtopic: "C3",
    level: 2,
    slhl: "HL",
    tooltips: [
      { phrase: "λ = 480 nm", tip: "λ = 480 nm = 480 × 10⁻⁹ m." },
      { phrase: "diffraction grating", tip: "Uses dsinθ = nλ for maxima." },
      { phrase: "600 lines per mm", tip: "d = 1/(600 × 10³) = 1.667 × 10⁻⁶ m." },
      { phrase: "angle", tip: "dsinθ = nλ. Solve for θ with n = 2." },
      { phrase: "energy of one photon", tip: "E = hf = hc/λ." }
    ],
    knowns: [
      { symbol: "λ", value: "480 × 10⁻⁹", unit: "m", description: "wavelength" },
      { symbol: "d", value: "1.667 × 10⁻⁶", unit: "m", description: "slit spacing (1/600000)" },
      { symbol: "n", value: "2", unit: "", description: "order of maximum" }
    ],
    unknowns: [
      { symbol: "θ", unit: "°", description: "diffraction angle for second order" },
      { symbol: "E", unit: "J", description: "photon energy" }
    ],
    acceptedSolutions: [["C3_4", "E1_1", "C2_1"]],
    requiredConstants: ["CONST_h", "CONST_c"],
    hints: [
      "Grating spacing: d = 1/(600 × 10³) = 1.667 × 10⁻⁶ m. Use dsinθ = nλ.",
      "sinθ = nλ/d = 2 × 480 × 10⁻⁹ / 1.667 × 10⁻⁶ = 0.576. θ = sin⁻¹(0.576) ≈ 35.2°.",
      "E = hc/λ = (6.63 × 10⁻³⁴ × 3.00 × 10⁸) / 480 × 10⁻⁹ = 4.14 × 10⁻¹⁹ J."
    ],
    explanation: "\\(d = \\frac{1}{600 \\times 10^3} = 1.667 \\times 10^{-6}\\) m. \\(\\sin\\theta = \\frac{n\\lambda}{d} = \\frac{2 \\times 480 \\times 10^{-9}}{1.667 \\times 10^{-6}} = 0.576\\), so \\(\\theta \\approx 35.2°\\). Photon energy: \\(E = \\frac{hc}{\\lambda} = \\frac{6.63 \\times 10^{-34} \\times 3.00 \\times 10^8}{480 \\times 10^{-9}} = 4.14 \\times 10^{-19}\\) J."
  },

  {
    id: "XC_L2_08",
    text: "An object undergoes SHM with angular frequency {{ω = 5.0 rad s⁻¹}} and amplitude {{A = 0.10 m}}. At a displacement of {{x = 0.060 m}}, calculate the {{velocity}} of the object and its {{kinetic energy}} if its mass is {{m = 0.20 kg}}.",
    topic: "C",
    subtopic: "C1",
    level: 2,
    slhl: "HL",
    tooltips: [
      { phrase: "ω = 5.0 rad s⁻¹", tip: "Angular frequency of the oscillation." },
      { phrase: "A = 0.10 m", tip: "Amplitude of the oscillation." },
      { phrase: "x = 0.060 m", tip: "Displacement from equilibrium at the instant considered." },
      { phrase: "velocity", tip: "v = ±ω√(A² − x²)." },
      { phrase: "kinetic energy", tip: "Ek = ½mv²." },
      { phrase: "m = 0.20 kg", tip: "Mass of the oscillating object." }
    ],
    knowns: [
      { symbol: "ω", value: "5.0", unit: "rad s⁻¹", description: "angular frequency" },
      { symbol: "A", value: "0.10", unit: "m", description: "amplitude" },
      { symbol: "x", value: "0.060", unit: "m", description: "displacement" },
      { symbol: "m", value: "0.20", unit: "kg", description: "mass" }
    ],
    unknowns: [
      { symbol: "v", unit: "m s⁻¹", description: "velocity at given displacement" },
      { symbol: "Ek", unit: "J", description: "kinetic energy" }
    ],
    acceptedSolutions: [["C1_7", "A3_2"]],
    requiredConstants: [],
    hints: [
      "SHM velocity: v = ω√(A² − x²) = 5.0 × √(0.10² − 0.060²).",
      "v = 5.0 × √(0.010 − 0.0036) = 5.0 × √(0.0064) = 5.0 × 0.080 = 0.40 m s⁻¹.",
      "Ek = ½mv² = ½(0.20)(0.40)² = ½ × 0.20 × 0.16 = 0.016 J."
    ],
    explanation: "\\(v = \\omega\\sqrt{A^2 - x^2} = 5.0\\sqrt{0.10^2 - 0.060^2} = 5.0 \\times 0.080 = 0.40\\) m s⁻¹. \\(E_k = \\frac{1}{2}mv^2 = \\frac{1}{2}(0.20)(0.40)^2 = 0.016\\) J."
  },

  {
    id: "XC_L2_09",
    text: "A train moves towards a stationary observer at {{30 m s⁻¹}}. Its horn emits sound at {{400 Hz}}. The {{speed of sound}} is {{v = 340 m s⁻¹}}. A passenger on the train moves {{towards the front}} at {{2.0 m s⁻¹}} relative to the train. Calculate the frequency {{heard by the observer}} and also the frequency heard by the {{moving passenger}} (who is moving away from the source at the back of the train).",
    topic: "C",
    subtopic: "C5",
    level: 2,
    slhl: "HL",
    tooltips: [
      { phrase: "30 m s⁻¹", tip: "Speed of the train (source) towards the observer." },
      { phrase: "400 Hz", tip: "f₀ = 400 Hz, emitted frequency." },
      { phrase: "speed of sound", tip: "v = 340 m s⁻¹." },
      { phrase: "v = 340 m s⁻¹", tip: "v = 340 m s⁻¹." },
      { phrase: "towards the front", tip: "The passenger moves towards the horn — they are an observer moving towards a source." },
      { phrase: "2.0 m s⁻¹", tip: "Speed of the passenger relative to the train." },
      { phrase: "heard by the observer", tip: "f' = f₀v/(v − us) for a moving source approaching a stationary observer." },
      { phrase: "moving passenger", tip: "The passenger is at rest relative to the horn (both on the train), but moves at 2.0 m s⁻¹ towards it." }
    ],
    knowns: [
      { symbol: "f₀", value: "400", unit: "Hz", description: "emitted frequency" },
      { symbol: "us", value: "30", unit: "m s⁻¹", description: "speed of train" },
      { symbol: "v", value: "340", unit: "m s⁻¹", description: "speed of sound" },
      { symbol: "uo", value: "2.0", unit: "m s⁻¹", description: "passenger speed relative to train (towards horn)" }
    ],
    unknowns: [
      { symbol: "f'_observer", unit: "Hz", description: "frequency heard by stationary observer" },
      { symbol: "f'_passenger", unit: "Hz", description: "frequency heard by moving passenger" }
    ],
    acceptedSolutions: [["C5_2", "C5_3", "C2_1"]],
    requiredConstants: [],
    hints: [
      "Stationary observer: f' = f₀v/(v − us) = 400 × 340/(340 − 30).",
      "f'_observer = 400 × 340/310 ≈ 439 Hz. For the passenger: use moving observer formula f' = f₀(v + uo)/v, where uo = 2.0 m s⁻¹ towards the source.",
      "f'_passenger = 400 × (340 + 2.0)/340 = 400 × 342/340 ≈ 402 Hz."
    ],
    explanation: "Observer: \\(f' = \\frac{f_0 v}{v - u_s} = \\frac{400 \\times 340}{310} \\approx 439\\) Hz. Passenger (moving observer towards source): \\(f' = f_0\\frac{v + u_o}{v} = 400 \\times \\frac{342}{340} \\approx 402\\) Hz."
  },

  {
    id: "XC_L2_10",
    text: "Light of frequency {{5.0 × 10¹⁴ Hz}} travels from air into glass of refractive index {{n = 1.50}}. Calculate the {{wavelength in air}}, the {{wavelength in the glass}}, and the {{speed of light in the glass}}.",
    topic: "C",
    subtopic: "C3",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "5.0 × 10¹⁴ Hz", tip: "f = 5.0 × 10¹⁴ Hz, the frequency of the light." },
      { phrase: "n = 1.50", tip: "Refractive index of the glass." },
      { phrase: "wavelength in air", tip: "λ = c/f." },
      { phrase: "wavelength in the glass", tip: "λ_glass = λ_air/n." },
      { phrase: "speed of light in the glass", tip: "v = c/n." }
    ],
    knowns: [
      { symbol: "f", value: "5.0 × 10¹⁴", unit: "Hz", description: "frequency of light" },
      { symbol: "n", value: "1.50", unit: "", description: "refractive index of glass" }
    ],
    unknowns: [
      { symbol: "λ_air", unit: "m", description: "wavelength in air" },
      { symbol: "λ_glass", unit: "m", description: "wavelength in glass" },
      { symbol: "v_glass", unit: "m s⁻¹", description: "speed of light in glass" }
    ],
    acceptedSolutions: [["C2_1", "C3_1"]],
    requiredConstants: ["CONST_c"],
    hints: [
      "In air: λ = c/f = 3.00 × 10⁸ / 5.0 × 10¹⁴.",
      "λ_air = 6.0 × 10⁻⁷ m = 600 nm. In glass: λ_glass = λ_air/n = 600/1.50 = 400 nm.",
      "Speed in glass: v = c/n = 3.00 × 10⁸ / 1.50 = 2.00 × 10⁸ m s⁻¹."
    ],
    explanation: "\\(\\lambda_{\\text{air}} = \\frac{c}{f} = \\frac{3.00 \\times 10^8}{5.0 \\times 10^{14}} = 6.0 \\times 10^{-7}\\) m. \\(\\lambda_{\\text{glass}} = \\frac{\\lambda_{\\text{air}}}{n} = \\frac{600}{1.50} = 400\\) nm. \\(v = \\frac{c}{n} = 2.00 \\times 10^8\\) m s⁻¹."
  },

  // -----------------------------------------------
  // OTHER CROSS-TOPIC L2 (17 questions)
  // -----------------------------------------------

  // --- A+B bridging (3 questions) ---

  {
    id: "XAB_L2_01",
    text: "An electric heater rated at {{P = 2.0 kW}} is used to heat {{m = 1.5 kg}} of water from {{20 °C}} to {{100 °C}}. The {{specific heat capacity}} of water is {{c = 4180 J kg⁻¹ K⁻¹}}. Calculate the {{energy required}} and the {{minimum time}} needed.",
    topic: "B",
    subtopic: "B1",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "P = 2.0 kW", tip: "P = 2000 W, power of the heater." },
      { phrase: "m = 1.5 kg", tip: "Mass of water." },
      { phrase: "20 °C", tip: "Initial temperature." },
      { phrase: "100 °C", tip: "Final temperature." },
      { phrase: "specific heat capacity", tip: "c = energy per unit mass per unit temperature change." },
      { phrase: "c = 4180 J kg⁻¹ K⁻¹", tip: "Specific heat capacity of water." },
      { phrase: "energy required", tip: "Q = mcΔT." },
      { phrase: "minimum time", tip: "t = Q/P, assuming no heat loss." }
    ],
    knowns: [
      { symbol: "P", value: "2000", unit: "W", description: "heater power" },
      { symbol: "m", value: "1.5", unit: "kg", description: "mass of water" },
      { symbol: "c", value: "4180", unit: "J kg⁻¹ K⁻¹", description: "specific heat capacity of water" },
      { symbol: "ΔT", value: "80", unit: "K", description: "temperature change (100 − 20)" }
    ],
    unknowns: [
      { symbol: "Q", unit: "J", description: "energy required" },
      { symbol: "t", unit: "s", description: "minimum time" }
    ],
    acceptedSolutions: [["B1_3", "A3_1"]],
    requiredConstants: [],
    hints: [
      "Q = mcΔT = 1.5 × 4180 × 80.",
      "Q = 501 600 J ≈ 5.0 × 10⁵ J.",
      "t = Q/P = 501600 / 2000 ≈ 251 s ≈ 4.2 minutes."
    ],
    explanation: "\\(Q = mc\\Delta T = 1.5 \\times 4180 \\times 80 = 5.0 \\times 10^5\\) J. Minimum time: \\(t = \\frac{Q}{P} = \\frac{5.0 \\times 10^5}{2000} = 251\\) s \\(\\approx 4.2\\) min."
  },

  {
    id: "XAB_L2_02",
    text: "An ideal gas at {{T = 300 K}} consists of molecules each of mass {{m = 5.3 × 10⁻²⁶ kg}}. Calculate the {{root-mean-square speed}} of the molecules using the relationship between kinetic energy and temperature.",
    topic: "B",
    subtopic: "B3",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "T = 300 K", tip: "Absolute temperature." },
      { phrase: "m = 5.3 × 10⁻²⁶ kg", tip: "Mass of one molecule (nitrogen)." },
      { phrase: "root-mean-square speed", tip: "From ½m⟨v²⟩ = (3/2)kBT, so vrms = √(3kBT/m)." }
    ],
    knowns: [
      { symbol: "T", value: "300", unit: "K", description: "temperature" },
      { symbol: "m", value: "5.3 × 10⁻²⁶", unit: "kg", description: "molecular mass" }
    ],
    unknowns: [
      { symbol: "vrms", unit: "m s⁻¹", description: "root-mean-square speed" }
    ],
    acceptedSolutions: [["B3_4", "A3_2"]],
    requiredConstants: ["CONST_kB"],
    hints: [
      "From kinetic theory: ½m⟨v²⟩ = (3/2)kBT, so vrms = √(3kBT/m).",
      "vrms = √(3 × 1.38 × 10⁻²³ × 300 / 5.3 × 10⁻²⁶).",
      "vrms = √(1.242 × 10⁻²⁰ / 5.3 × 10⁻²⁶) = √(2.34 × 10⁵) ≈ 484 m s⁻¹."
    ],
    explanation: "\\(v_{\\text{rms}} = \\sqrt{\\frac{3k_BT}{m}} = \\sqrt{\\frac{3 \\times 1.38 \\times 10^{-23} \\times 300}{5.3 \\times 10^{-26}}} = \\sqrt{2.34 \\times 10^5} \\approx 484\\) m s⁻¹."
  },

  {
    id: "XAB_L2_03",
    text: "A projectile of mass {{0.050 kg}} is launched vertically at {{30 m s⁻¹}}. It reaches a maximum height of {{38 m}} (less than the ideal value). Calculate the {{ideal maximum height}} (no air resistance) and the {{energy lost}} to air resistance during the ascent.",
    topic: "A",
    subtopic: "A3",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "0.050 kg", tip: "m = 0.050 kg." },
      { phrase: "30 m s⁻¹", tip: "Initial upward speed u = 30 m s⁻¹." },
      { phrase: "38 m", tip: "Actual maximum height reached." },
      { phrase: "ideal maximum height", tip: "From energy conservation with no friction: mgh = ½mv²." },
      { phrase: "energy lost", tip: "Difference between initial KE and actual gravitational PE gained." }
    ],
    knowns: [
      { symbol: "m", value: "0.050", unit: "kg", description: "mass" },
      { symbol: "u", value: "30", unit: "m s⁻¹", description: "initial speed" },
      { symbol: "h_actual", value: "38", unit: "m", description: "actual max height" }
    ],
    unknowns: [
      { symbol: "h_ideal", unit: "m", description: "ideal maximum height" },
      { symbol: "E_lost", unit: "J", description: "energy lost to air resistance" }
    ],
    acceptedSolutions: [["A3_2", "A3_5"]],
    requiredConstants: ["CONST_g"],
    hints: [
      "Ideal height: ½mv² = mgh → h = v²/(2g) = (30)²/(2 × 9.81).",
      "h_ideal = 900/19.62 ≈ 45.9 m. Initial KE = ½(0.050)(30)² = 22.5 J.",
      "Actual PE gained = mgh = 0.050 × 9.81 × 38 = 18.6 J. Energy lost = 22.5 − 18.6 = 3.9 J."
    ],
    explanation: "Ideal height: \\(h = \\frac{v^2}{2g} = \\frac{900}{19.62} \\approx 45.9\\) m. KE at launch: \\(\\frac{1}{2}(0.050)(30)^2 = 22.5\\) J. PE gained: \\(mgh = 0.050 \\times 9.81 \\times 38 = 18.6\\) J. Energy lost \\(= 22.5 - 18.6 = 3.9\\) J."
  },

  // --- A+D bridging (3 questions) ---

  {
    id: "XAD_L2_01",
    text: "A satellite orbits Earth at a height where the {{orbital radius}} is {{r = 7.0 × 10⁶ m}}. The mass of Earth is {{M = 5.97 × 10²⁴ kg}}. Calculate the {{orbital speed}} and the {{orbital period}}.",
    topic: "D",
    subtopic: "D1",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "orbital radius", tip: "r = 7.0 × 10⁶ m, distance from centre of Earth." },
      { phrase: "r = 7.0 × 10⁶ m", tip: "r = 7.0 × 10⁶ m." },
      { phrase: "M = 5.97 × 10²⁴ kg", tip: "Mass of Earth." },
      { phrase: "orbital speed", tip: "Equate gravitational force to centripetal force: GMm/r² = mv²/r." },
      { phrase: "orbital period", tip: "T = 2πr/v." }
    ],
    knowns: [
      { symbol: "r", value: "7.0 × 10⁶", unit: "m", description: "orbital radius" },
      { symbol: "M", value: "5.97 × 10²⁴", unit: "kg", description: "mass of Earth" }
    ],
    unknowns: [
      { symbol: "v", unit: "m s⁻¹", description: "orbital speed" },
      { symbol: "T", unit: "s", description: "orbital period" }
    ],
    acceptedSolutions: [["D1_1", "A2_10", "A2_1"]],
    requiredConstants: ["CONST_G"],
    hints: [
      "Gravity provides centripetal force: GM/r = v². So v = √(GM/r).",
      "v = √(6.67 × 10⁻¹¹ × 5.97 × 10²⁴ / 7.0 × 10⁶) = √(5.69 × 10⁷) ≈ 7540 m s⁻¹.",
      "T = 2πr/v = 2π(7.0 × 10⁶)/7540 ≈ 5830 s ≈ 97 min."
    ],
    explanation: "\\(v = \\sqrt{\\frac{GM}{r}} = \\sqrt{\\frac{6.67 \\times 10^{-11} \\times 5.97 \\times 10^{24}}{7.0 \\times 10^6}} \\approx 7540\\) m s⁻¹. \\(T = \\frac{2\\pi r}{v} \\approx 5830\\) s \\(\\approx 97\\) min."
  },

  {
    id: "XAD_L2_02",
    text: "An electron is accelerated from rest through a {{potential difference}} of {{V = 500 V}}. Calculate its {{final speed}}. The {{charge}} of the electron is {{e = 1.60 × 10⁻¹⁹ C}} and its {{mass}} is {{mₑ = 9.11 × 10⁻³¹ kg}}.",
    topic: "D",
    subtopic: "D2",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "potential difference", tip: "V = 500 V, the p.d. through which the electron is accelerated." },
      { phrase: "V = 500 V", tip: "V = 500 V." },
      { phrase: "final speed", tip: "Equate electrical work to kinetic energy: eV = ½mv²." },
      { phrase: "charge", tip: "e = 1.60 × 10⁻¹⁹ C." },
      { phrase: "e = 1.60 × 10⁻¹⁹ C", tip: "Elementary charge." },
      { phrase: "mass", tip: "mₑ = 9.11 × 10⁻³¹ kg." },
      { phrase: "mₑ = 9.11 × 10⁻³¹ kg", tip: "Mass of the electron." }
    ],
    knowns: [
      { symbol: "V", value: "500", unit: "V", description: "accelerating potential difference" },
      { symbol: "e", value: "1.60 × 10⁻¹⁹", unit: "C", description: "electron charge" },
      { symbol: "mₑ", value: "9.11 × 10⁻³¹", unit: "kg", description: "electron mass" }
    ],
    unknowns: [
      { symbol: "v", unit: "m s⁻¹", description: "final speed of electron" }
    ],
    acceptedSolutions: [["D2_1", "A3_2"]],
    requiredConstants: ["CONST_e", "CONST_me"],
    hints: [
      "Work done by the field equals KE gained: eV = ½mₑv².",
      "v = √(2eV/mₑ) = √(2 × 1.60 × 10⁻¹⁹ × 500 / 9.11 × 10⁻³¹).",
      "v = √(1.60 × 10⁻¹⁶ / 9.11 × 10⁻³¹) = √(1.76 × 10¹⁴) ≈ 1.33 × 10⁷ m s⁻¹."
    ],
    explanation: "\\(eV = \\frac{1}{2}m_e v^2\\) gives \\(v = \\sqrt{\\frac{2eV}{m_e}} = \\sqrt{\\frac{2 \\times 1.60 \\times 10^{-19} \\times 500}{9.11 \\times 10^{-31}}} \\approx 1.33 \\times 10^7\\) m s⁻¹."
  },

  {
    id: "XAD_L2_03",
    text: "A proton moves at {{v = 4.0 × 10⁶ m s⁻¹}} perpendicular to a {{magnetic field}} of {{B = 0.20 T}}. Calculate the {{radius}} of its circular path. ({{mₚ = 1.67 × 10⁻²⁷ kg}}, {{e = 1.60 × 10⁻¹⁹ C}}.)",
    topic: "D",
    subtopic: "D3",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "v = 4.0 × 10⁶ m s⁻¹", tip: "Speed of the proton." },
      { phrase: "magnetic field", tip: "A uniform magnetic field B." },
      { phrase: "B = 0.20 T", tip: "Magnetic field strength." },
      { phrase: "radius", tip: "Equate magnetic force to centripetal force: qvB = mv²/r, so r = mv/(qB)." },
      { phrase: "mₚ = 1.67 × 10⁻²⁷ kg", tip: "Mass of the proton." },
      { phrase: "e = 1.60 × 10⁻¹⁹ C", tip: "Charge of the proton." }
    ],
    knowns: [
      { symbol: "v", value: "4.0 × 10⁶", unit: "m s⁻¹", description: "proton speed" },
      { symbol: "B", value: "0.20", unit: "T", description: "magnetic field strength" },
      { symbol: "mₚ", value: "1.67 × 10⁻²⁷", unit: "kg", description: "proton mass" },
      { symbol: "e", value: "1.60 × 10⁻¹⁹", unit: "C", description: "proton charge" }
    ],
    unknowns: [
      { symbol: "r", unit: "m", description: "radius of circular path" }
    ],
    acceptedSolutions: [["D3_2", "A2_10"]],
    requiredConstants: ["CONST_mp", "CONST_e"],
    hints: [
      "The magnetic force provides centripetal force: qvB = mv²/r.",
      "r = mv/(qB) = (1.67 × 10⁻²⁷ × 4.0 × 10⁶) / (1.60 × 10⁻¹⁹ × 0.20).",
      "r = 6.68 × 10⁻²¹ / 3.20 × 10⁻²⁰ ≈ 0.209 m ≈ 0.21 m."
    ],
    explanation: "\\(r = \\frac{m_p v}{eB} = \\frac{1.67 \\times 10^{-27} \\times 4.0 \\times 10^6}{1.60 \\times 10^{-19} \\times 0.20} = \\frac{6.68 \\times 10^{-21}}{3.20 \\times 10^{-20}} \\approx 0.21\\) m."
  },

  // --- A+E bridging (2 questions) ---

  {
    id: "XAE_L2_01",
    text: "Light of wavelength {{λ = 400 nm}} strikes a metal surface with a {{work function}} of {{φ = 3.0 × 10⁻¹⁹ J}}. Calculate the {{maximum kinetic energy}} and the {{maximum speed}} of the emitted photoelectrons. ({{mₑ = 9.11 × 10⁻³¹ kg}}.)",
    topic: "E",
    subtopic: "E1",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "λ = 400 nm", tip: "λ = 400 nm = 400 × 10⁻⁹ m." },
      { phrase: "work function", tip: "φ = minimum energy needed to release an electron from the surface." },
      { phrase: "φ = 3.0 × 10⁻¹⁹ J", tip: "Work function of the metal." },
      { phrase: "maximum kinetic energy", tip: "Ek(max) = hf − φ = hc/λ − φ." },
      { phrase: "maximum speed", tip: "Ek = ½mv², so v = √(2Ek/m)." },
      { phrase: "mₑ = 9.11 × 10⁻³¹ kg", tip: "Mass of the electron." }
    ],
    knowns: [
      { symbol: "λ", value: "400 × 10⁻⁹", unit: "m", description: "wavelength" },
      { symbol: "φ", value: "3.0 × 10⁻¹⁹", unit: "J", description: "work function" },
      { symbol: "mₑ", value: "9.11 × 10⁻³¹", unit: "kg", description: "electron mass" }
    ],
    unknowns: [
      { symbol: "Ek(max)", unit: "J", description: "maximum kinetic energy" },
      { symbol: "v_max", unit: "m s⁻¹", description: "maximum speed of photoelectron" }
    ],
    acceptedSolutions: [["E1_1", "A3_2"]],
    requiredConstants: ["CONST_h", "CONST_c", "CONST_me"],
    hints: [
      "Photon energy: E = hc/λ = (6.63 × 10⁻³⁴ × 3.00 × 10⁸)/(400 × 10⁻⁹) = 4.97 × 10⁻¹⁹ J.",
      "Ek(max) = E − φ = 4.97 × 10⁻¹⁹ − 3.0 × 10⁻¹⁹ = 1.97 × 10⁻¹⁹ J.",
      "v = √(2Ek/mₑ) = √(2 × 1.97 × 10⁻¹⁹ / 9.11 × 10⁻³¹) = √(4.33 × 10¹¹) ≈ 6.58 × 10⁵ m s⁻¹."
    ],
    explanation: "\\(E = \\frac{hc}{\\lambda} = 4.97 \\times 10^{-19}\\) J. \\(E_{k(\\max)} = E - \\varphi = 1.97 \\times 10^{-19}\\) J. \\(v = \\sqrt{\\frac{2E_k}{m_e}} = \\sqrt{\\frac{2 \\times 1.97 \\times 10^{-19}}{9.11 \\times 10^{-31}}} \\approx 6.6 \\times 10^5\\) m s⁻¹."
  },

  {
    id: "XAE_L2_02",
    text: "A nucleus of mass number {{A = 226}} undergoes {{alpha decay}}. The alpha particle (mass {{4.00 u}}) is emitted with a kinetic energy of {{4.78 MeV}}. Estimate the {{kinetic energy of the daughter nucleus}} using conservation of momentum (assume the parent was at rest).",
    topic: "E",
    subtopic: "E3",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "A = 226", tip: "Mass number of the parent nucleus (radium-226)." },
      { phrase: "alpha decay", tip: "The nucleus emits an alpha particle (⁴₂He)." },
      { phrase: "4.00 u", tip: "Mass of the alpha particle ≈ 4 u." },
      { phrase: "4.78 MeV", tip: "Kinetic energy of the alpha particle." },
      { phrase: "kinetic energy of the daughter nucleus", tip: "By momentum conservation: p_daughter = p_alpha. Use Ek = p²/(2m)." }
    ],
    knowns: [
      { symbol: "A_parent", value: "226", unit: "", description: "mass number of parent" },
      { symbol: "mα", value: "4.00", unit: "u", description: "alpha mass" },
      { symbol: "Ek_α", value: "4.78", unit: "MeV", description: "alpha kinetic energy" }
    ],
    unknowns: [
      { symbol: "Ek_d", unit: "MeV", description: "kinetic energy of daughter nucleus" }
    ],
    acceptedSolutions: [["A3_2", "E3_1"]],
    requiredConstants: [],
    hints: [
      "Conservation of momentum: mα vα = md vd. The daughter has mass Ad = 226 − 4 = 222 u.",
      "Since Ek = p²/(2m) and momenta are equal: Ek_d/Ek_α = mα/md.",
      "Ek_d = Ek_α × (mα/md) = 4.78 × (4/222) ≈ 0.086 MeV."
    ],
    explanation: "By momentum conservation, \\(p_d = p_\\alpha\\). Since \\(E_k = \\frac{p^2}{2m}\\): \\(\\frac{E_{k,d}}{E_{k,\\alpha}} = \\frac{m_\\alpha}{m_d} = \\frac{4}{222}\\). So \\(E_{k,d} = 4.78 \\times \\frac{4}{222} \\approx 0.086\\) MeV."
  },

  // --- B+D bridging (2 questions) ---

  {
    id: "XBD_L2_01",
    text: "A wire of length {{L = 0.30 m}} carries a current of {{I = 5.0 A}} in a {{magnetic field}} of {{B = 0.40 T}} perpendicular to the wire. Calculate the {{force on the wire}}. If this force accelerates the wire (mass {{m = 0.010 kg}}) from rest, find the {{velocity}} after {{0.20 s}}.",
    topic: "D",
    subtopic: "D3",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "L = 0.30 m", tip: "Length of wire in the field." },
      { phrase: "I = 5.0 A", tip: "Current in the wire." },
      { phrase: "magnetic field", tip: "Uniform B field." },
      { phrase: "B = 0.40 T", tip: "Magnetic field strength." },
      { phrase: "force on the wire", tip: "F = BIL." },
      { phrase: "m = 0.010 kg", tip: "Mass of the wire." },
      { phrase: "velocity", tip: "Use F = ma then v = u + at." }
    ],
    knowns: [
      { symbol: "L", value: "0.30", unit: "m", description: "wire length" },
      { symbol: "I", value: "5.0", unit: "A", description: "current" },
      { symbol: "B", value: "0.40", unit: "T", description: "magnetic field" },
      { symbol: "m", value: "0.010", unit: "kg", description: "mass of wire" },
      { symbol: "t", value: "0.20", unit: "s", description: "time" }
    ],
    unknowns: [
      { symbol: "F", unit: "N", description: "magnetic force on wire" },
      { symbol: "v", unit: "m s⁻¹", description: "velocity after 0.20 s" }
    ],
    acceptedSolutions: [["D3_1", "A2_1", "A1_1"]],
    requiredConstants: [],
    hints: [
      "Force on the wire: F = BIL = 0.40 × 5.0 × 0.30 = 0.60 N.",
      "Acceleration: a = F/m = 0.60/0.010 = 60 m s⁻².",
      "v = u + at = 0 + 60 × 0.20 = 12 m s⁻¹."
    ],
    explanation: "\\(F = BIL = 0.40 \\times 5.0 \\times 0.30 = 0.60\\) N. \\(a = F/m = 60\\) m s⁻². \\(v = at = 60 \\times 0.20 = 12\\) m s⁻¹."
  },

  {
    id: "XBD_L2_02",
    text: "A coil of {{N = 200}} turns and area {{A = 0.015 m²}} rotates in a magnetic field of {{B = 0.10 T}}. The flux through the coil changes from {{maximum to zero}} in {{t = 0.050 s}}. Calculate the {{maximum flux linkage}} and the {{average induced EMF}}. If the coil has resistance {{R = 4.0 Ω}}, find the {{average current}}.",
    topic: "D",
    subtopic: "D4",
    level: 2,
    slhl: "HL",
    tooltips: [
      { phrase: "N = 200", tip: "Number of turns in the coil." },
      { phrase: "A = 0.015 m²", tip: "Area of each turn." },
      { phrase: "B = 0.10 T", tip: "Magnetic field strength." },
      { phrase: "maximum to zero", tip: "The flux changes from Φ = BA to 0." },
      { phrase: "t = 0.050 s", tip: "Time for this change." },
      { phrase: "maximum flux linkage", tip: "NΦ = NBA." },
      { phrase: "average induced EMF", tip: "ε = −NΔΦ/Δt." },
      { phrase: "R = 4.0 Ω", tip: "Resistance of the coil." },
      { phrase: "average current", tip: "I = ε/R." }
    ],
    knowns: [
      { symbol: "N", value: "200", unit: "", description: "number of turns" },
      { symbol: "A", value: "0.015", unit: "m²", description: "area per turn" },
      { symbol: "B", value: "0.10", unit: "T", description: "magnetic field" },
      { symbol: "Δt", value: "0.050", unit: "s", description: "time interval" },
      { symbol: "R", value: "4.0", unit: "Ω", description: "coil resistance" }
    ],
    unknowns: [
      { symbol: "NΦ_max", unit: "Wb", description: "maximum flux linkage" },
      { symbol: "ε", unit: "V", description: "average induced EMF" },
      { symbol: "I", unit: "A", description: "average current" }
    ],
    acceptedSolutions: [["D4_1", "D4_2", "B5_1"]],
    requiredConstants: [],
    hints: [
      "Maximum flux linkage: NΦ = NBA = 200 × 0.10 × 0.015 = 0.30 Wb.",
      "ε = NΔΦ/Δt = 0.30/0.050 = 6.0 V.",
      "I = ε/R = 6.0/4.0 = 1.5 A."
    ],
    explanation: "\\(N\\Phi_{\\max} = NBA = 200 \\times 0.10 \\times 0.015 = 0.30\\) Wb. \\(\\varepsilon = \\frac{N\\Delta\\Phi}{\\Delta t} = \\frac{0.30}{0.050} = 6.0\\) V. \\(I = \\frac{\\varepsilon}{R} = 1.5\\) A."
  },

  // --- B+E bridging (2 questions) ---

  {
    id: "XBE_L2_01",
    text: "A radioactive source has an activity of {{A = 5.0 × 10⁶ Bq}} and emits {{alpha particles}} each with energy {{5.0 MeV}}. Calculate the {{power output}} in watts. If all this energy heats {{m = 0.010 kg}} of water ({{c = 4180 J kg⁻¹ K⁻¹}}), find the {{temperature rise per second}}.",
    topic: "E",
    subtopic: "E3",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "A = 5.0 × 10⁶ Bq", tip: "Activity = 5.0 × 10⁶ decays per second." },
      { phrase: "alpha particles", tip: "Each decay emits one alpha particle." },
      { phrase: "5.0 MeV", tip: "Energy per alpha = 5.0 × 10⁶ × 1.60 × 10⁻¹⁹ = 8.0 × 10⁻¹³ J." },
      { phrase: "power output", tip: "P = Activity × Energy per decay." },
      { phrase: "m = 0.010 kg", tip: "Mass of water." },
      { phrase: "c = 4180 J kg⁻¹ K⁻¹", tip: "Specific heat capacity of water." },
      { phrase: "temperature rise per second", tip: "P = mcΔT/Δt, so ΔT/Δt = P/(mc)." }
    ],
    knowns: [
      { symbol: "A", value: "5.0 × 10⁶", unit: "Bq", description: "activity" },
      { symbol: "Eα", value: "5.0", unit: "MeV", description: "energy per alpha particle" },
      { symbol: "m", value: "0.010", unit: "kg", description: "mass of water" },
      { symbol: "c", value: "4180", unit: "J kg⁻¹ K⁻¹", description: "specific heat capacity of water" }
    ],
    unknowns: [
      { symbol: "P", unit: "W", description: "power output" },
      { symbol: "ΔT/Δt", unit: "K s⁻¹", description: "temperature rise per second" }
    ],
    acceptedSolutions: [["E3_3", "B1_3"]],
    requiredConstants: ["CONST_e"],
    hints: [
      "Convert energy: 5.0 MeV = 5.0 × 10⁶ × 1.60 × 10⁻¹⁹ = 8.0 × 10⁻¹³ J.",
      "P = A × E = 5.0 × 10⁶ × 8.0 × 10⁻¹³ = 4.0 × 10⁻⁶ W.",
      "ΔT/Δt = P/(mc) = 4.0 × 10⁻⁶ / (0.010 × 4180) = 9.6 × 10⁻⁸ K s⁻¹."
    ],
    explanation: "\\(E_\\alpha = 8.0 \\times 10^{-13}\\) J. \\(P = A \\times E = 5.0 \\times 10^6 \\times 8.0 \\times 10^{-13} = 4.0 \\times 10^{-6}\\) W. \\(\\frac{\\Delta T}{\\Delta t} = \\frac{P}{mc} = \\frac{4.0 \\times 10^{-6}}{0.010 \\times 4180} \\approx 9.6 \\times 10^{-8}\\) K s⁻¹."
  },

  {
    id: "XBE_L2_02",
    text: "A sealed container holds {{n = 2.0 mol}} of an ideal gas at {{T = 350 K}} and {{volume V = 0.050 m³}}. Calculate the {{pressure}}. Use the {{Avogadro constant}} to find the {{number of molecules}}.",
    topic: "B",
    subtopic: "B3",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "n = 2.0 mol", tip: "Amount of gas in moles." },
      { phrase: "T = 350 K", tip: "Absolute temperature." },
      { phrase: "volume V = 0.050 m³", tip: "Volume of the container." },
      { phrase: "pressure", tip: "pV = nRT, so p = nRT/V." },
      { phrase: "Avogadro constant", tip: "NA = 6.02 × 10²³ mol⁻¹." },
      { phrase: "number of molecules", tip: "N = nNA." }
    ],
    knowns: [
      { symbol: "n", value: "2.0", unit: "mol", description: "amount of gas" },
      { symbol: "T", value: "350", unit: "K", description: "temperature" },
      { symbol: "V", value: "0.050", unit: "m³", description: "volume" }
    ],
    unknowns: [
      { symbol: "p", unit: "Pa", description: "pressure" },
      { symbol: "N", unit: "", description: "number of molecules" }
    ],
    acceptedSolutions: [["B3_2", "E5_1"]],
    requiredConstants: ["CONST_R", "CONST_NA"],
    hints: [
      "p = nRT/V = 2.0 × 8.31 × 350 / 0.050.",
      "p = 5817 / 0.050 = 1.16 × 10⁵ Pa ≈ 1.2 × 10⁵ Pa.",
      "N = nNA = 2.0 × 6.02 × 10²³ = 1.20 × 10²⁴ molecules."
    ],
    explanation: "\\(p = \\frac{nRT}{V} = \\frac{2.0 \\times 8.31 \\times 350}{0.050} \\approx 1.16 \\times 10^5\\) Pa. \\(N = nN_A = 2.0 \\times 6.02 \\times 10^{23} = 1.20 \\times 10^{24}\\)."
  },

  // --- D+E bridging (3 questions) ---

  {
    id: "XDE_L2_01",
    text: "Estimate the {{electrostatic force}} between two protons separated by a typical nuclear distance of {{r = 1.5 × 10⁻¹⁵ m}} (about 1 nuclear radius). Compare this to their {{gravitational force}} at the same separation.",
    topic: "D",
    subtopic: "D2",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "electrostatic force", tip: "F = kq₁q₂/r²." },
      { phrase: "r = 1.5 × 10⁻¹⁵ m", tip: "Separation ≈ 1.5 fm, a typical nuclear radius." },
      { phrase: "gravitational force", tip: "F = Gm₁m₂/r²." }
    ],
    knowns: [
      { symbol: "r", value: "1.5 × 10⁻¹⁵", unit: "m", description: "proton separation" },
      { symbol: "q", value: "1.60 × 10⁻¹⁹", unit: "C", description: "proton charge" },
      { symbol: "mₚ", value: "1.67 × 10⁻²⁷", unit: "kg", description: "proton mass" }
    ],
    unknowns: [
      { symbol: "F_e", unit: "N", description: "electrostatic force" },
      { symbol: "F_g", unit: "N", description: "gravitational force" },
      { symbol: "ratio", unit: "", description: "Fe/Fg" }
    ],
    acceptedSolutions: [["D2_3", "D1_1"]],
    requiredConstants: ["CONST_k", "CONST_G", "CONST_e", "CONST_mp"],
    hints: [
      "Fe = kq²/r² = 8.99 × 10⁹ × (1.60 × 10⁻¹⁹)² / (1.5 × 10⁻¹⁵)².",
      "Fe = 8.99 × 10⁹ × 2.56 × 10⁻³⁸ / 2.25 × 10⁻³⁰ ≈ 102 N.",
      "Fg = Gm²/r² = 6.67 × 10⁻¹¹ × (1.67 × 10⁻²⁷)² / (1.5 × 10⁻¹⁵)² ≈ 8.3 × 10⁻³⁵ N. Ratio ≈ 1.2 × 10³⁶."
    ],
    explanation: "\\(F_e = \\frac{kq^2}{r^2} = \\frac{8.99 \\times 10^9 \\times (1.60 \\times 10^{-19})^2}{(1.5 \\times 10^{-15})^2} \\approx 102\\) N. \\(F_g = \\frac{Gm_p^2}{r^2} \\approx 8.3 \\times 10^{-35}\\) N. The ratio \\(F_e/F_g \\approx 1.2 \\times 10^{36}\\), showing the electric force vastly dominates at nuclear scales."
  },

  {
    id: "XDE_L2_02",
    text: "In the {{Bohr model}}, an electron orbits a hydrogen nucleus at a radius of {{r = 5.29 × 10⁻¹¹ m}} (the {{Bohr radius}}). Calculate the {{electrostatic force}} on the electron, then the {{orbital speed}} assuming the electric force provides the centripetal force.",
    topic: "D",
    subtopic: "D2",
    level: 2,
    slhl: "HL",
    tooltips: [
      { phrase: "Bohr model", tip: "Classical model of the hydrogen atom with quantised orbits." },
      { phrase: "r = 5.29 × 10⁻¹¹ m", tip: "First Bohr radius, a₀." },
      { phrase: "Bohr radius", tip: "a₀ = 5.29 × 10⁻¹¹ m." },
      { phrase: "electrostatic force", tip: "F = ke²/r²." },
      { phrase: "orbital speed", tip: "F = mₑv²/r, so v = √(Fr/mₑ)." }
    ],
    knowns: [
      { symbol: "r", value: "5.29 × 10⁻¹¹", unit: "m", description: "Bohr radius" },
      { symbol: "e", value: "1.60 × 10⁻¹⁹", unit: "C", description: "electron charge" },
      { symbol: "mₑ", value: "9.11 × 10⁻³¹", unit: "kg", description: "electron mass" }
    ],
    unknowns: [
      { symbol: "F", unit: "N", description: "electrostatic force" },
      { symbol: "v", unit: "m s⁻¹", description: "orbital speed" }
    ],
    acceptedSolutions: [["D2_3", "A2_10"]],
    requiredConstants: ["CONST_k", "CONST_e", "CONST_me"],
    hints: [
      "F = ke²/r² = 8.99 × 10⁹ × (1.60 × 10⁻¹⁹)² / (5.29 × 10⁻¹¹)².",
      "F = 8.99 × 10⁹ × 2.56 × 10⁻³⁸ / 2.80 × 10⁻²¹ ≈ 8.22 × 10⁻⁸ N.",
      "v = √(Fr/mₑ) = √(8.22 × 10⁻⁸ × 5.29 × 10⁻¹¹ / 9.11 × 10⁻³¹) ≈ 2.19 × 10⁶ m s⁻¹."
    ],
    explanation: "\\(F = \\frac{ke^2}{r^2} = \\frac{8.99 \\times 10^9 \\times (1.60 \\times 10^{-19})^2}{(5.29 \\times 10^{-11})^2} \\approx 8.2 \\times 10^{-8}\\) N. \\(v = \\sqrt{\\frac{Fr}{m_e}} = \\sqrt{\\frac{8.2 \\times 10^{-8} \\times 5.29 \\times 10^{-11}}{9.11 \\times 10^{-31}}} \\approx 2.19 \\times 10^6\\) m s⁻¹."
  },

  {
    id: "XDE_L2_03",
    text: "An alpha particle (charge {{+2e}}, mass {{4.00 u}}) is fired directly at a gold nucleus (charge {{+79e}}) and reaches a {{distance of closest approach}} of {{d = 4.7 × 10⁻¹⁴ m}}. Calculate the {{electrostatic potential energy}} at this point and hence the {{initial kinetic energy}} of the alpha particle in MeV.",
    topic: "D",
    subtopic: "D2",
    level: 2,
    slhl: "HL",
    tooltips: [
      { phrase: "+2e", tip: "Alpha charge = 2 × 1.60 × 10⁻¹⁹ = 3.20 × 10⁻¹⁹ C." },
      { phrase: "4.00 u", tip: "Mass of alpha particle ≈ 4.00 × 1.66 × 10⁻²⁷ kg." },
      { phrase: "+79e", tip: "Gold nucleus charge = 79 × 1.60 × 10⁻¹⁹ = 1.264 × 10⁻¹⁷ C." },
      { phrase: "distance of closest approach", tip: "At closest approach, all KE converts to electric PE." },
      { phrase: "d = 4.7 × 10⁻¹⁴ m", tip: "Distance of closest approach." },
      { phrase: "electrostatic potential energy", tip: "Ep = kq₁q₂/r." },
      { phrase: "initial kinetic energy", tip: "At closest approach: Ek = Ep (all KE has been converted)." }
    ],
    knowns: [
      { symbol: "q₁", value: "3.20 × 10⁻¹⁹", unit: "C", description: "alpha charge (+2e)" },
      { symbol: "q₂", value: "1.264 × 10⁻¹⁷", unit: "C", description: "gold nucleus charge (+79e)" },
      { symbol: "d", value: "4.7 × 10⁻¹⁴", unit: "m", description: "distance of closest approach" }
    ],
    unknowns: [
      { symbol: "Ep", unit: "J", description: "electrostatic potential energy at closest approach" },
      { symbol: "Ek", unit: "MeV", description: "initial kinetic energy in MeV" }
    ],
    acceptedSolutions: [["D2_3", "E1_1"]],
    requiredConstants: ["CONST_k", "CONST_e"],
    hints: [
      "Ep = kq₁q₂/d = 8.99 × 10⁹ × 3.20 × 10⁻¹⁹ × 1.264 × 10⁻¹⁷ / (4.7 × 10⁻¹⁴).",
      "Ep = 8.99 × 10⁹ × 4.045 × 10⁻³⁶ / 4.7 × 10⁻¹⁴ ≈ 7.73 × 10⁻¹³ J.",
      "Ek = Ep = 7.73 × 10⁻¹³ J. In MeV: 7.73 × 10⁻¹³ / 1.60 × 10⁻¹³ ≈ 4.8 MeV."
    ],
    explanation: "\\(E_p = \\frac{kq_1q_2}{d} = \\frac{8.99 \\times 10^9 \\times 3.20 \\times 10^{-19} \\times 1.264 \\times 10^{-17}}{4.7 \\times 10^{-14}} \\approx 7.7 \\times 10^{-13}\\) J. Converting: \\(E_k = \\frac{7.7 \\times 10^{-13}}{1.60 \\times 10^{-13}} \\approx 4.8\\) MeV."
  },

  // --- Ambitious multi-section bridges (2 questions) ---

  {
    id: "XMULTI_L2_01",
    text: "A photon of wavelength {{λ = 200 nm}} ejects an electron from a metal with work function {{φ = 4.0 eV}}. The electron then enters a {{magnetic field}} of {{B = 0.050 T}} perpendicular to its velocity. Calculate the {{maximum speed}} of the electron and the {{radius}} of its circular path in the field.",
    topic: "E",
    subtopic: "E1",
    level: 2,
    slhl: "HL",
    tooltips: [
      { phrase: "λ = 200 nm", tip: "λ = 200 × 10⁻⁹ m." },
      { phrase: "φ = 4.0 eV", tip: "φ = 4.0 × 1.60 × 10⁻¹⁹ = 6.40 × 10⁻¹⁹ J." },
      { phrase: "magnetic field", tip: "Uniform field B." },
      { phrase: "B = 0.050 T", tip: "Magnetic field strength." },
      { phrase: "maximum speed", tip: "From photoelectric equation: Ek(max) = hc/λ − φ = ½mv²." },
      { phrase: "radius", tip: "r = mv/(eB)." }
    ],
    knowns: [
      { symbol: "λ", value: "200 × 10⁻⁹", unit: "m", description: "photon wavelength" },
      { symbol: "φ", value: "6.40 × 10⁻¹⁹", unit: "J", description: "work function" },
      { symbol: "B", value: "0.050", unit: "T", description: "magnetic field" }
    ],
    unknowns: [
      { symbol: "v", unit: "m s⁻¹", description: "maximum speed of photoelectron" },
      { symbol: "r", unit: "m", description: "radius of circular path" }
    ],
    acceptedSolutions: [["E1_1", "A3_2", "D3_2"]],
    requiredConstants: ["CONST_h", "CONST_c", "CONST_e", "CONST_me"],
    hints: [
      "Photon energy: E = hc/λ = 6.63 × 10⁻³⁴ × 3.00 × 10⁸ / 200 × 10⁻⁹ = 9.945 × 10⁻¹⁹ J. Ek = E − φ = 9.945 × 10⁻¹⁹ − 6.40 × 10⁻¹⁹ = 3.545 × 10⁻¹⁹ J.",
      "v = √(2Ek/mₑ) = √(2 × 3.545 × 10⁻¹⁹ / 9.11 × 10⁻³¹) = √(7.78 × 10¹¹) ≈ 8.82 × 10⁵ m s⁻¹.",
      "r = mₑv/(eB) = 9.11 × 10⁻³¹ × 8.82 × 10⁵ / (1.60 × 10⁻¹⁹ × 0.050) ≈ 1.0 × 10⁻⁴ m = 0.10 mm."
    ],
    explanation: "\\(E = \\frac{hc}{\\lambda} = 9.95 \\times 10^{-19}\\) J. \\(E_k = E - \\varphi = 3.55 \\times 10^{-19}\\) J. \\(v = \\sqrt{\\frac{2E_k}{m_e}} \\approx 8.8 \\times 10^5\\) m s⁻¹. \\(r = \\frac{m_e v}{eB} = \\frac{9.11 \\times 10^{-31} \\times 8.8 \\times 10^5}{1.60 \\times 10^{-19} \\times 0.050} \\approx 1.0 \\times 10^{-4}\\) m."
  },

  {
    id: "XMULTI_L2_02",
    text: "A solar panel produces a {{voltage of 18 V}} and powers a circuit with total resistance {{R = 6.0 Ω}}. The panel receives {{solar intensity}} of {{1000 W m⁻²}} over an area of {{1.2 m²}}. Calculate the {{electrical power output}}, the {{current}}, and the {{efficiency}} of the panel.",
    topic: "B",
    subtopic: "B5",
    level: 2,
    slhl: "SL",
    tooltips: [
      { phrase: "voltage of 18 V", tip: "V = 18 V, the panel's output voltage." },
      { phrase: "R = 6.0 Ω", tip: "Total resistance of the circuit." },
      { phrase: "solar intensity", tip: "I = 1000 W m⁻², power per unit area incident on the panel." },
      { phrase: "1000 W m⁻²", tip: "I = 1000 W m⁻²." },
      { phrase: "1.2 m²", tip: "A = 1.2 m², area of the panel." },
      { phrase: "electrical power output", tip: "P = V²/R." },
      { phrase: "current", tip: "I = V/R." },
      { phrase: "efficiency", tip: "η = useful power out / total power in." }
    ],
    knowns: [
      { symbol: "V", value: "18", unit: "V", description: "panel voltage" },
      { symbol: "R", value: "6.0", unit: "Ω", description: "circuit resistance" },
      { symbol: "Intensity", value: "1000", unit: "W m⁻²", description: "solar intensity" },
      { symbol: "A", value: "1.2", unit: "m²", description: "panel area" }
    ],
    unknowns: [
      { symbol: "P_out", unit: "W", description: "electrical power output" },
      { symbol: "I", unit: "A", description: "current" },
      { symbol: "η", unit: "%", description: "efficiency" }
    ],
    acceptedSolutions: [["B5_5", "B5_1", "A3_1"]],
    requiredConstants: [],
    hints: [
      "Electrical power: P = V²/R = (18)²/6.0 = 324/6.0 = 54 W. Current: I = V/R = 18/6.0 = 3.0 A.",
      "Total incident power: P_in = Intensity × Area = 1000 × 1.2 = 1200 W.",
      "Efficiency: η = P_out/P_in = 54/1200 = 0.045 = 4.5%."
    ],
    explanation: "\\(P = \\frac{V^2}{R} = \\frac{324}{6.0} = 54\\) W. \\(I = \\frac{V}{R} = 3.0\\) A. Input power: \\(P_{\\text{in}} = 1000 \\times 1.2 = 1200\\) W. \\(\\eta = \\frac{54}{1200} = 4.5\\%\\)."
  }

];
