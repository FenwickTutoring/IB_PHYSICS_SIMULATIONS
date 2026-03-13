// IB Physics Formula Trainer — Topic D: Fields

const QUESTIONS_D = [
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

];
