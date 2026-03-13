// IB Physics Formula Trainer — Topic B: Particulate Nature of Matter

const QUESTIONS_B = [
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

];
