// IB Physics Formula Trainer — Topic E: Nuclear and Quantum Physics

const QUESTIONS_E = [
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

];
