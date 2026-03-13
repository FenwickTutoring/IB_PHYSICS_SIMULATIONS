// IB Physics Formula Trainer — Cross-topic and Proportional Reasoning

const QUESTIONS_CROSS = [
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
    text: "Two {{protons}} are separated by a distance equal to the {{nuclear radius}} of a {{carbon-12}} nucleus. Estimate the {{electrostatic force}} between them. ",
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
    acceptedSolutions: [["C1_4"]],
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
