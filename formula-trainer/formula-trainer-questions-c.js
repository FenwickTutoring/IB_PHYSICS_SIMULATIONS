// IB Physics Formula Trainer — Topic C: Waves

const QUESTIONS_C = [
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

];
