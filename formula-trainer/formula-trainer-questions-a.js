// IB Physics Formula Trainer — Topic A: Space, Time and Motion

const QUESTIONS_A = [

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

];
