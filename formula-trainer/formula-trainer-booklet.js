// ===== IB PHYSICS FORMULA BOOKLET DATA =====
// Based on IB DP Physics Data Booklet (First assessment 2025, Version 1.1)
// Each formula has: id, display (LaTeX-style string for rendering), description, section, subtopic, level

const FORMULA_BOOKLET = {
  sections: [
    {
      id: "A",
      title: "A. Space, Time and Motion",
      subtopics: [
        {
          id: "A1",
          title: "A.1 Kinematics",
          level: "SL",
          formulas: [
            { id: "A1_1", display: "s = \\frac{u+v}{2} \\cdot t", description: "Displacement (average velocity)", variables: { s: "displacement", u: "initial velocity", v: "final velocity", t: "time" } },
            { id: "A1_2", display: "v = u + at", description: "Final velocity", variables: { v: "final velocity", u: "initial velocity", a: "acceleration", t: "time" } },
            { id: "A1_3", display: "s = ut + \\frac{1}{2}at^2", description: "Displacement (with acceleration)", variables: { s: "displacement", u: "initial velocity", a: "acceleration", t: "time" } },
            { id: "A1_4", display: "v^2 = u^2 + 2as", description: "Final velocity squared", variables: { v: "final velocity", u: "initial velocity", a: "acceleration", s: "displacement" } }
          ]
        },
        {
          id: "A2",
          title: "A.2 Forces and Momentum",
          level: "SL",
          formulas: [
            { id: "A2_1", display: "F_f \\leq \\mu_s F_N", description: "Static friction", variables: { "F_f": "friction force", "\\mu_s": "coefficient of static friction", "F_N": "normal force" } },
            { id: "A2_2", display: "F_f = \\mu_d F_N", description: "Dynamic friction", variables: { "F_f": "friction force", "\\mu_d": "coefficient of dynamic friction", "F_N": "normal force" } },
            { id: "A2_3", display: "F_H = -kx", description: "Hooke's law", variables: { "F_H": "restoring force", k: "spring constant", x: "extension" } },
            { id: "A2_4", display: "F_d = 6\\pi \\eta rv", description: "Stokes' law (viscous drag)", variables: { "F_d": "drag force", "\\eta": "viscosity", r: "radius", v: "velocity" } },
            { id: "A2_5", display: "F_b = \\rho Vg", description: "Buoyancy force", variables: { "F_b": "buoyancy force", "\\rho": "fluid density", V: "volume displaced", g: "gravitational field strength" } },
            { id: "A2_6", display: "F_g = mg", description: "Weight", variables: { "F_g": "gravitational force (weight)", m: "mass", g: "gravitational field strength" } },
            { id: "A2_7", display: "p = mv", description: "Momentum", variables: { p: "momentum", m: "mass", v: "velocity" } },
            { id: "A2_8", display: "J = F \\Delta t", description: "Impulse", variables: { J: "impulse", F: "force", "\\Delta t": "time interval" } },
            { id: "A2_9", display: "F = ma = \\frac{\\Delta p}{\\Delta t}", description: "Newton's second law", variables: { F: "net force", m: "mass", a: "acceleration", "\\Delta p": "change in momentum", "\\Delta t": "time interval" } },
            { id: "A2_10", display: "a = \\frac{v^2}{r} = \\omega^2 r = \\frac{4\\pi^2 r}{T^2}", description: "Centripetal acceleration", variables: { a: "centripetal acceleration", v: "speed", r: "radius", "\\omega": "angular velocity", T: "period" } },
            { id: "A2_11", display: "v = \\frac{2\\pi r}{T} = \\omega r", description: "Speed in circular motion", variables: { v: "speed", r: "radius", T: "period", "\\omega": "angular velocity" } }
          ]
        },
        {
          id: "A3",
          title: "A.3 Work, Energy and Power",
          level: "SL",
          formulas: [
            { id: "A3_1", display: "W = Fs\\cos\\theta", description: "Work done", variables: { W: "work", F: "force", s: "displacement", "\\theta": "angle between force and displacement" } },
            { id: "A3_2", display: "E_k = \\frac{1}{2}mv^2 = \\frac{p^2}{2m}", description: "Kinetic energy", variables: { "E_k": "kinetic energy", m: "mass", v: "velocity", p: "momentum" } },
            { id: "A3_3", display: "\\Delta E_p = mg\\Delta h", description: "Gravitational potential energy change", variables: { "\\Delta E_p": "change in gravitational PE", m: "mass", g: "gravitational field strength", "\\Delta h": "change in height" } },
            { id: "A3_4", display: "E_H = \\frac{1}{2}k\\Delta x^2", description: "Elastic potential energy", variables: { "E_H": "elastic potential energy", k: "spring constant", "\\Delta x": "extension" } },
            { id: "A3_5", display: "P = \\frac{\\Delta W}{\\Delta t} = Fv", description: "Power", variables: { P: "power", "\\Delta W": "work done", "\\Delta t": "time interval", F: "force", v: "velocity" } },
            { id: "A3_6", display: "\\eta = \\frac{\\text{useful work out}}{\\text{total work in}} = \\frac{\\text{useful power out}}{\\text{total power in}}", description: "Efficiency", variables: { "\\eta": "efficiency" } }
          ]
        },
        {
          id: "A4",
          title: "A.4 Rigid Body Mechanics",
          level: "HL",
          formulas: [
            { id: "A4_1", display: "\\tau = Fr\\sin\\theta", description: "Torque", variables: { "\\tau": "torque", F: "force", r: "distance from pivot", "\\theta": "angle" } },
            { id: "A4_2", display: "\\Delta\\theta = \\frac{\\omega_i + \\omega_f}{2} t", description: "Angular displacement (average)", variables: { "\\Delta\\theta": "angular displacement", "\\omega_i": "initial angular velocity", "\\omega_f": "final angular velocity", t: "time" } },
            { id: "A4_3", display: "\\omega_f = \\omega_i + \\alpha t", description: "Final angular velocity", variables: { "\\omega_f": "final angular velocity", "\\omega_i": "initial angular velocity", "\\alpha": "angular acceleration", t: "time" } },
            { id: "A4_4", display: "\\Delta\\theta = \\omega_i t + \\frac{1}{2}\\alpha t^2", description: "Angular displacement (with acceleration)", variables: { "\\Delta\\theta": "angular displacement", "\\omega_i": "initial angular velocity", "\\alpha": "angular acceleration", t: "time" } },
            { id: "A4_5", display: "\\omega_f^2 = \\omega_i^2 + 2\\alpha\\Delta\\theta", description: "Final angular velocity squared", variables: { "\\omega_f": "final angular velocity", "\\omega_i": "initial angular velocity", "\\alpha": "angular acceleration", "\\Delta\\theta": "angular displacement" } },
            { id: "A4_6", display: "I = \\Sigma mr^2", description: "Moment of inertia", variables: { I: "moment of inertia", m: "mass", r: "distance from axis" } },
            { id: "A4_7", display: "\\tau = I\\alpha", description: "Newton's second law for rotation", variables: { "\\tau": "torque", I: "moment of inertia", "\\alpha": "angular acceleration" } },
            { id: "A4_8", display: "L = I\\omega", description: "Angular momentum", variables: { L: "angular momentum", I: "moment of inertia", "\\omega": "angular velocity" } },
            { id: "A4_9", display: "\\Delta L = \\tau \\Delta t", description: "Angular impulse", variables: { "\\Delta L": "change in angular momentum", "\\tau": "torque", "\\Delta t": "time interval" } },
            { id: "A4_10", display: "E_k = \\frac{1}{2}I\\omega^2 = \\frac{L^2}{2I}", description: "Rotational kinetic energy", variables: { "E_k": "rotational kinetic energy", I: "moment of inertia", "\\omega": "angular velocity", L: "angular momentum" } }
          ]
        },
        {
          id: "A5",
          title: "A.5 Galilean and Special Relativity",
          level: "HL",
          formulas: [
            { id: "A5_1", display: "x' = \\gamma(x - vt)", description: "Lorentz transformation (position)", variables: { "x'": "position in S' frame", "\\gamma": "Lorentz factor", x: "position in S frame", v: "relative velocity", t: "time in S frame" } },
            { id: "A5_2", display: "\\gamma = \\frac{1}{\\sqrt{1 - \\frac{v^2}{c^2}}}", description: "Lorentz factor", variables: { "\\gamma": "Lorentz factor", v: "relative velocity", c: "speed of light" } },
            { id: "A5_3", display: "\\Delta t = \\gamma \\Delta t_0", description: "Time dilation", variables: { "\\Delta t": "dilated time", "\\gamma": "Lorentz factor", "\\Delta t_0": "proper time" } },
            { id: "A5_4", display: "L = \\frac{L_0}{\\gamma}", description: "Length contraction", variables: { L: "contracted length", "L_0": "proper length", "\\gamma": "Lorentz factor" } },
            { id: "A5_5", display: "u' = \\frac{u - v}{1 - \\frac{uv}{c^2}}", description: "Relativistic velocity addition", variables: { "u'": "velocity in S' frame", u: "velocity in S frame", v: "relative velocity of frames", c: "speed of light" } },
            { id: "A5_6", display: "(\\Delta s)^2 = (c\\Delta t)^2 - (\\Delta x)^2", description: "Spacetime interval", variables: { "\\Delta s": "spacetime interval", c: "speed of light", "\\Delta t": "time interval", "\\Delta x": "spatial interval" } }
          ]
        }
      ]
    },
    {
      id: "B",
      title: "B. The Particulate Nature of Matter",
      subtopics: [
        {
          id: "B1",
          title: "B.1 Thermal Energy Transfers",
          level: "SL",
          formulas: [
            { id: "B1_1", display: "\\rho = \\frac{m}{V}", description: "Density", variables: { "\\rho": "density", m: "mass", V: "volume" } },
            { id: "B1_2", display: "\\bar{E_k} = \\frac{3}{2} k_B T", description: "Average kinetic energy of a molecule", variables: { "\\bar{E_k}": "average kinetic energy", "k_B": "Boltzmann constant", T: "absolute temperature" } },
            { id: "B1_3", display: "Q = mc\\Delta T", description: "Specific heat capacity", variables: { Q: "thermal energy", m: "mass", c: "specific heat capacity", "\\Delta T": "temperature change" } },
            { id: "B1_4", display: "Q = mL", description: "Latent heat", variables: { Q: "thermal energy", m: "mass", L: "specific latent heat" } },
            { id: "B1_5", display: "\\frac{\\Delta Q}{\\Delta t} = kA\\frac{\\Delta T}{\\Delta x}", description: "Thermal conduction", variables: { "\\frac{\\Delta Q}{\\Delta t}": "rate of heat transfer", k: "thermal conductivity", A: "cross-sectional area", "\\Delta T": "temperature difference", "\\Delta x": "thickness" } },
            { id: "B1_6", display: "L = \\sigma A T^4", description: "Stefan-Boltzmann law (luminosity)", variables: { L: "luminosity", "\\sigma": "Stefan-Boltzmann constant", A: "surface area", T: "absolute temperature" } },
            { id: "B1_7", display: "b = \\frac{L}{4\\pi d^2}", description: "Apparent brightness", variables: { b: "apparent brightness", L: "luminosity", d: "distance" } },
            { id: "B1_8", display: "\\lambda_{max} T = 2.9 \\times 10^{-3} \\text{ mK}", description: "Wien's displacement law", variables: { "\\lambda_{max}": "peak wavelength", T: "absolute temperature" } }
          ]
        },
        {
          id: "B2",
          title: "B.2 Greenhouse Effect",
          level: "SL",
          formulas: [
            { id: "B2_1", display: "\\text{emissivity} = \\frac{\\text{power radiated per unit area}}{\\sigma T^4}", description: "Emissivity", variables: { "\\sigma": "Stefan-Boltzmann constant", T: "absolute temperature" } },
            { id: "B2_2", display: "\\text{albedo} = \\frac{\\text{total scattered power}}{\\text{total incident power}}", description: "Albedo", variables: {} }
          ]
        },
        {
          id: "B3",
          title: "B.3 Gas Laws",
          level: "SL",
          formulas: [
            { id: "B3_1", display: "P = \\frac{F}{A}", description: "Pressure", variables: { P: "pressure", F: "force", A: "area" } },
            { id: "B3_2", display: "n = \\frac{N}{N_A}", description: "Amount of substance", variables: { n: "amount (moles)", N: "number of particles", "N_A": "Avogadro constant" } },
            { id: "B3_3", display: "\\frac{PV}{T} = \\text{constant}", description: "Combined gas law", variables: { P: "pressure", V: "volume", T: "absolute temperature" } },
            { id: "B3_4", display: "PV = nRT = Nk_BT", description: "Ideal gas law", variables: { P: "pressure", V: "volume", n: "moles", R: "gas constant", T: "temperature", N: "number of particles", "k_B": "Boltzmann constant" } },
            { id: "B3_5", display: "P = \\frac{1}{3}\\rho v^2", description: "Kinetic theory pressure", variables: { P: "pressure", "\\rho": "density", v: "mean square speed" } },
            { id: "B3_6", display: "U = \\frac{3}{2}nRT = \\frac{3}{2}Nk_BT", description: "Internal energy of ideal gas", variables: { U: "internal energy", n: "moles", R: "gas constant", T: "temperature", N: "number of particles", "k_B": "Boltzmann constant" } }
          ]
        },
        {
          id: "B4",
          title: "B.4 Thermodynamics",
          level: "HL",
          formulas: [
            { id: "B4_1", display: "Q = \\Delta U + W", description: "First law of thermodynamics", variables: { Q: "heat added", "\\Delta U": "change in internal energy", W: "work done by gas" } },
            { id: "B4_2", display: "W = P\\Delta V", description: "Work done by gas at constant pressure", variables: { W: "work", P: "pressure", "\\Delta V": "change in volume" } },
            { id: "B4_3", display: "\\Delta S = \\frac{\\Delta Q}{T}", description: "Entropy change", variables: { "\\Delta S": "entropy change", "\\Delta Q": "heat transferred", T: "absolute temperature" } },
            { id: "B4_4", display: "S = k_B \\ln \\Omega", description: "Statistical entropy", variables: { S: "entropy", "k_B": "Boltzmann constant", "\\Omega": "number of microstates" } },
            { id: "B4_5", display: "PV^{5/3} = \\text{constant}", description: "Adiabatic process (monatomic ideal gas)", variables: { P: "pressure", V: "volume" } },
            { id: "B4_6", display: "\\eta = \\frac{\\text{useful work}}{\\text{input energy}}", description: "Thermal efficiency", variables: { "\\eta": "efficiency" } },
            { id: "B4_7", display: "\\eta_{Carnot} = 1 - \\frac{T_c}{T_h}", description: "Carnot efficiency", variables: { "\\eta_{Carnot}": "Carnot efficiency", "T_c": "cold reservoir temperature", "T_h": "hot reservoir temperature" } }
          ]
        },
        {
          id: "B5",
          title: "B.5 Current and Circuits",
          level: "SL",
          formulas: [
            { id: "B5_1", display: "I = \\frac{\\Delta q}{\\Delta t}", description: "Current", variables: { I: "current", "\\Delta q": "charge", "\\Delta t": "time interval" } },
            { id: "B5_2", display: "V = \\frac{W}{q}", description: "Potential difference", variables: { V: "potential difference", W: "work (energy)", q: "charge" } },
            { id: "B5_3", display: "R = \\frac{V}{I}", description: "Resistance (Ohm's law)", variables: { R: "resistance", V: "potential difference", I: "current" } },
            { id: "B5_4", display: "\\rho = \\frac{RA}{L}", description: "Resistivity", variables: { "\\rho": "resistivity", R: "resistance", A: "cross-sectional area", L: "length" } },
            { id: "B5_5", display: "P = IV = I^2R = \\frac{V^2}{R}", description: "Electrical power", variables: { P: "power", I: "current", V: "potential difference", R: "resistance" } },
            { id: "B5_6", display: "R_s = R_1 + R_2 + ...", description: "Resistors in series", variables: { "R_s": "total series resistance", "R_1": "resistance 1", "R_2": "resistance 2" } },
            { id: "B5_7", display: "\\frac{1}{R_p} = \\frac{1}{R_1} + \\frac{1}{R_2} + ...", description: "Resistors in parallel", variables: { "R_p": "total parallel resistance", "R_1": "resistance 1", "R_2": "resistance 2" } },
            { id: "B5_8", display: "\\varepsilon = I(R + r)", description: "EMF equation", variables: { "\\varepsilon": "electromotive force (EMF)", I: "current", R: "external resistance", r: "internal resistance" } }
          ]
        }
      ]
    },
    {
      id: "C",
      title: "C. Wave Behaviour",
      subtopics: [
        {
          id: "C1",
          title: "C.1 Simple Harmonic Motion",
          level: "SL",
          formulas: [
            { id: "C1_1", display: "a = -\\omega^2 x", description: "SHM acceleration", variables: { a: "acceleration", "\\omega": "angular frequency", x: "displacement" } },
            { id: "C1_2", display: "T = \\frac{1}{f} = \\frac{2\\pi}{\\omega}", description: "Period", variables: { T: "period", f: "frequency", "\\omega": "angular frequency" } },
            { id: "C1_3", display: "T = 2\\pi\\sqrt{\\frac{m}{k}}", description: "Period of mass-spring system", variables: { T: "period", m: "mass", k: "spring constant" } },
            { id: "C1_4", display: "T = 2\\pi\\sqrt{\\frac{l}{g}}", description: "Period of simple pendulum", variables: { T: "period", l: "length", g: "gravitational field strength" } }
          ]
        },
        {
          id: "C1_HL",
          title: "C.1 Simple Harmonic Motion (HL)",
          level: "HL",
          formulas: [
            { id: "C1_5", display: "x = x_0 \\sin(\\omega t + \\phi)", description: "SHM displacement equation", variables: { x: "displacement", "x_0": "amplitude", "\\omega": "angular frequency", t: "time", "\\phi": "phase angle" } },
            { id: "C1_6", display: "v = \\omega x_0 \\cos(\\omega t + \\phi)", description: "SHM velocity equation", variables: { v: "velocity", "\\omega": "angular frequency", "x_0": "amplitude", t: "time", "\\phi": "phase angle" } },
            { id: "C1_7", display: "v = \\pm\\omega\\sqrt{x_0^2 - x^2}", description: "SHM velocity from displacement", variables: { v: "velocity", "\\omega": "angular frequency", "x_0": "amplitude", x: "displacement" } },
            { id: "C1_8", display: "E_T = \\frac{1}{2}m\\omega^2 x_0^2", description: "Total energy in SHM", variables: { "E_T": "total energy", m: "mass", "\\omega": "angular frequency", "x_0": "amplitude" } },
            { id: "C1_9", display: "E_p = \\frac{1}{2}m\\omega^2 x^2", description: "Potential energy in SHM", variables: { "E_p": "potential energy", m: "mass", "\\omega": "angular frequency", x: "displacement" } }
          ]
        },
        {
          id: "C2",
          title: "C.2 Wave Model",
          level: "SL",
          formulas: [
            { id: "C2_1", display: "v = f\\lambda = \\frac{\\lambda}{T}", description: "Wave equation", variables: { v: "wave speed", f: "frequency", "\\lambda": "wavelength", T: "period" } }
          ]
        },
        {
          id: "C3",
          title: "C.3 Wave Phenomena",
          level: "SL",
          formulas: [
            { id: "C3_1", display: "\\frac{n_1}{n_2} = \\frac{\\sin\\theta_2}{\\sin\\theta_1} = \\frac{v_2}{v_1}", description: "Snell's law", variables: { "n_1": "refractive index 1", "n_2": "refractive index 2", "\\theta_1": "angle of incidence", "\\theta_2": "angle of refraction", "v_1": "wave speed in medium 1", "v_2": "wave speed in medium 2" } },
            { id: "C3_2", display: "s = \\frac{\\lambda D}{d}", description: "Double slit fringe spacing", variables: { s: "fringe spacing", "\\lambda": "wavelength", D: "distance to screen", d: "slit separation" } }
          ]
        },
        {
          id: "C3_HL",
          title: "C.3 Wave Phenomena (HL)",
          level: "HL",
          formulas: [
            { id: "C3_3", display: "\\theta = \\frac{\\lambda}{b}", description: "Single slit diffraction angle", variables: { "\\theta": "diffraction angle", "\\lambda": "wavelength", b: "slit width" } },
            { id: "C3_4", display: "n\\lambda = d\\sin\\theta", description: "Diffraction grating", variables: { n: "order", "\\lambda": "wavelength", d: "slit spacing", "\\theta": "angle" } }
          ]
        },
        {
          id: "C5",
          title: "C.5 Doppler Effect",
          level: "SL",
          formulas: [
            { id: "C5_1", display: "\\frac{\\Delta f}{f} = \\frac{\\Delta\\lambda}{\\lambda} \\approx \\frac{v}{c}", description: "Doppler effect (light, low speeds)", variables: { "\\Delta f": "change in frequency", f: "frequency", "\\Delta\\lambda": "change in wavelength", "\\lambda": "wavelength", v: "relative velocity", c: "speed of light" } }
          ]
        },
        {
          id: "C5_HL",
          title: "C.5 Doppler Effect (HL)",
          level: "HL",
          formulas: [
            { id: "C5_2", display: "f' = f\\left(\\frac{v}{v \\pm u_s}\\right)", description: "Doppler effect (moving source)", variables: { "f'": "observed frequency", f: "source frequency", v: "wave speed", "u_s": "source speed" } },
            { id: "C5_3", display: "f' = f\\left(\\frac{v \\pm u_o}{v}\\right)", description: "Doppler effect (moving observer)", variables: { "f'": "observed frequency", f: "source frequency", v: "wave speed", "u_o": "observer speed" } }
          ]
        }
      ]
    },
    {
      id: "D",
      title: "D. Fields",
      subtopics: [
        {
          id: "D1",
          title: "D.1 Gravitational Fields",
          level: "SL",
          formulas: [
            { id: "D1_1", display: "F = G\\frac{m_1 m_2}{r^2}", description: "Newton's law of gravitation", variables: { F: "gravitational force", G: "gravitational constant", "m_1": "mass 1", "m_2": "mass 2", r: "distance between centres" } },
            { id: "D1_2", display: "g = \\frac{F}{m} = G\\frac{M}{r^2}", description: "Gravitational field strength", variables: { g: "gravitational field strength", F: "force", m: "mass", G: "gravitational constant", M: "mass of body", r: "distance from centre" } }
          ]
        },
        {
          id: "D1_HL",
          title: "D.1 Gravitational Fields (HL)",
          level: "HL",
          formulas: [
            { id: "D1_3", display: "E_p = -G\\frac{m_1 m_2}{r}", description: "Gravitational potential energy", variables: { "E_p": "gravitational PE", G: "gravitational constant", "m_1": "mass 1", "m_2": "mass 2", r: "distance" } },
            { id: "D1_4", display: "V_g = -G\\frac{M}{r}", description: "Gravitational potential", variables: { "V_g": "gravitational potential", G: "gravitational constant", M: "mass", r: "distance" } },
            { id: "D1_5", display: "g = -\\frac{\\Delta V_g}{\\Delta r}", description: "Gravitational field from potential", variables: { g: "gravitational field strength", "\\Delta V_g": "change in gravitational potential", "\\Delta r": "change in distance" } },
            { id: "D1_6", display: "v_{esc} = \\sqrt{\\frac{2GM}{r}}", description: "Escape velocity", variables: { "v_{esc}": "escape velocity", G: "gravitational constant", M: "mass", r: "radius" } },
            { id: "D1_7", display: "v_{orbital} = \\sqrt{\\frac{GM}{r}}", description: "Orbital velocity", variables: { "v_{orbital}": "orbital velocity", G: "gravitational constant", M: "mass", r: "orbital radius" } }
          ]
        },
        {
          id: "D2",
          title: "D.2 Electric and Magnetic Fields",
          level: "SL",
          formulas: [
            { id: "D2_1", display: "F = k\\frac{q_1 q_2}{r^2}", description: "Coulomb's law", variables: { F: "electric force", k: "Coulomb constant", "q_1": "charge 1", "q_2": "charge 2", r: "distance" } },
            { id: "D2_2", display: "E = \\frac{F}{q}", description: "Electric field strength", variables: { E: "electric field strength", F: "force", q: "charge" } },
            { id: "D2_3", display: "E = \\frac{V}{d}", description: "Electric field (uniform, parallel plates)", variables: { E: "electric field strength", V: "potential difference", d: "plate separation" } }
          ]
        },
        {
          id: "D2_HL",
          title: "D.2 Electric and Magnetic Fields (HL)",
          level: "HL",
          formulas: [
            { id: "D2_4", display: "E_p = k\\frac{q_1 q_2}{r}", description: "Electric potential energy", variables: { "E_p": "electric PE", k: "Coulomb constant", "q_1": "charge 1", "q_2": "charge 2", r: "distance" } },
            { id: "D2_5", display: "V_e = \\frac{kQ}{r}", description: "Electric potential", variables: { "V_e": "electric potential", k: "Coulomb constant", Q: "charge", r: "distance" } },
            { id: "D2_6", display: "E = -\\frac{\\Delta V_e}{\\Delta r}", description: "Electric field from potential", variables: { E: "electric field strength", "\\Delta V_e": "change in electric potential", "\\Delta r": "change in distance" } },
            { id: "D2_7", display: "W = q\\Delta V_e", description: "Work done moving charge", variables: { W: "work", q: "charge", "\\Delta V_e": "change in electric potential" } }
          ]
        },
        {
          id: "D3",
          title: "D.3 Motion in Electromagnetic Fields",
          level: "SL",
          formulas: [
            { id: "D3_1", display: "F = qvB\\sin\\theta", description: "Force on moving charge in B field", variables: { F: "force", q: "charge", v: "velocity", B: "magnetic field strength", "\\theta": "angle" } },
            { id: "D3_2", display: "F = BIL\\sin\\theta", description: "Force on current-carrying wire", variables: { F: "force", B: "magnetic field strength", I: "current", L: "length of wire", "\\theta": "angle" } },
            { id: "D3_3", display: "\\frac{F}{L} = \\mu_0 \\frac{I_1 I_2}{2\\pi r}", description: "Force between parallel wires", variables: { F: "force", L: "length", "\\mu_0": "permeability of free space", "I_1": "current 1", "I_2": "current 2", r: "separation" } }
          ]
        },
        {
          id: "D4",
          title: "D.4 Induction",
          level: "HL",
          formulas: [
            { id: "D4_1", display: "\\Phi = BA\\cos\\theta", description: "Magnetic flux", variables: { "\\Phi": "magnetic flux", B: "magnetic field strength", A: "area", "\\theta": "angle" } },
            { id: "D4_2", display: "\\varepsilon = -N\\frac{\\Delta\\Phi}{\\Delta t}", description: "Faraday's law", variables: { "\\varepsilon": "induced EMF", N: "number of turns", "\\Delta\\Phi": "change in flux", "\\Delta t": "time interval" } },
            { id: "D4_3", display: "\\varepsilon = BvL", description: "EMF from moving conductor", variables: { "\\varepsilon": "induced EMF", B: "magnetic field", v: "velocity", L: "length of conductor" } }
          ]
        }
      ]
    },
    {
      id: "E",
      title: "E. Nuclear and Quantum Physics",
      subtopics: [
        {
          id: "E1",
          title: "E.1 Structure of the Atom",
          level: "SL",
          formulas: [
            { id: "E1_1", display: "E = hf", description: "Photon energy", variables: { E: "energy", h: "Planck constant", f: "frequency" } }
          ]
        },
        {
          id: "E1_HL",
          title: "E.1 Structure of the Atom (HL)",
          level: "HL",
          formulas: [
            { id: "E1_2", display: "R = R_0 A^{1/3}", description: "Nuclear radius", variables: { R: "nuclear radius", "R_0": "Fermi radius", A: "mass number" } },
            { id: "E1_3", display: "E = -\\frac{13.6}{n^2} \\text{ eV}", description: "Hydrogen energy levels", variables: { E: "energy", n: "principal quantum number" } },
            { id: "E1_4", display: "mvr = \\frac{nh}{2\\pi}", description: "Bohr model angular momentum", variables: { m: "electron mass", v: "velocity", r: "orbital radius", n: "quantum number", h: "Planck constant" } }
          ]
        },
        {
          id: "E2",
          title: "E.2 Quantum Physics",
          level: "HL",
          formulas: [
            { id: "E2_1", display: "E_{max} = hf - \\Phi", description: "Photoelectric effect", variables: { "E_{max}": "maximum kinetic energy", h: "Planck constant", f: "frequency", "\\Phi": "work function" } },
            { id: "E2_2", display: "\\lambda = \\frac{h}{p}", description: "de Broglie wavelength", variables: { "\\lambda": "wavelength", h: "Planck constant", p: "momentum" } },
            { id: "E2_3", display: "\\Delta\\lambda = \\frac{h}{m_e c}(1 - \\cos\\theta)", description: "Compton scattering", variables: { "\\Delta\\lambda": "change in wavelength", h: "Planck constant", "m_e": "electron mass", c: "speed of light", "\\theta": "scattering angle" } }
          ]
        },
        {
          id: "E3",
          title: "E.3 Radioactive Decay",
          level: "SL",
          formulas: [
            { id: "E3_1", display: "E = mc^2", description: "Mass-energy equivalence", variables: { E: "energy", m: "mass", c: "speed of light" } }
          ]
        },
        {
          id: "E3_HL",
          title: "E.3 Radioactive Decay (HL)",
          level: "HL",
          formulas: [
            { id: "E3_2", display: "N = N_0 e^{-\\lambda t}", description: "Radioactive decay law", variables: { N: "number of undecayed nuclei", "N_0": "initial number", "\\lambda": "decay constant", t: "time" } },
            { id: "E3_3", display: "A = \\lambda N = \\lambda N_0 e^{-\\lambda t}", description: "Activity", variables: { A: "activity", "\\lambda": "decay constant", N: "number of nuclei", "N_0": "initial number", t: "time" } },
            { id: "E3_4", display: "T_{1/2} = \\frac{\\ln 2}{\\lambda}", description: "Half-life", variables: { "T_{1/2}": "half-life", "\\lambda": "decay constant" } }
          ]
        },
        {
          id: "E5",
          title: "E.5 Fusion and Stars",
          level: "SL",
          formulas: [
            { id: "E5_1", display: "d(\\text{parsec}) = \\frac{1}{p(\\text{arc-second})}", description: "Stellar parallax", variables: { d: "distance in parsecs", p: "parallax angle in arc-seconds" } }
          ]
        }
      ]
    }
  ],

  // ===== FUNDAMENTAL CONSTANTS =====
  // These appear in the "Constants" tab of the sidebar
  constants: [
    { id: "CONST_g", display: "g = 9.8 \\text{ m s}^{-2}", description: "Acceleration of free fall", symbol: "g", value: "9.8 m s⁻²" },
    { id: "CONST_G", display: "G = 6.67 \\times 10^{-11} \\text{ N m}^2 \\text{ kg}^{-2}", description: "Gravitational constant", symbol: "G", value: "6.67 × 10⁻¹¹ N m² kg⁻²" },
    { id: "CONST_NA", display: "N_A = 6.02 \\times 10^{23} \\text{ mol}^{-1}", description: "Avogadro constant", symbol: "Nₐ", value: "6.02 × 10²³ mol⁻¹" },
    { id: "CONST_R", display: "R = 8.31 \\text{ J K}^{-1} \\text{ mol}^{-1}", description: "Gas constant", symbol: "R", value: "8.31 J K⁻¹ mol⁻¹" },
    { id: "CONST_kB", display: "k_B = 1.38 \\times 10^{-23} \\text{ J K}^{-1}", description: "Boltzmann constant", symbol: "k_B", value: "1.38 × 10⁻²³ J K⁻¹" },
    { id: "CONST_sigma", display: "\\sigma = 5.67 \\times 10^{-8} \\text{ W m}^{-2} \\text{ K}^{-4}", description: "Stefan-Boltzmann constant", symbol: "σ", value: "5.67 × 10⁻⁸ W m⁻² K⁻⁴" },
    { id: "CONST_k", display: "k = 8.99 \\times 10^{9} \\text{ N m}^2 \\text{ C}^{-2}", description: "Coulomb constant", symbol: "k", value: "8.99 × 10⁹ N m² C⁻²" },
    { id: "CONST_eps0", display: "\\varepsilon_0 = 8.85 \\times 10^{-12} \\text{ C}^2 \\text{ N}^{-1} \\text{ m}^{-2}", description: "Permittivity of free space", symbol: "ε₀", value: "8.85 × 10⁻¹² C² N⁻¹ m⁻²" },
    { id: "CONST_mu0", display: "\\mu_0 = 4\\pi \\times 10^{-7} \\text{ T m A}^{-1}", description: "Permeability of free space", symbol: "μ₀", value: "4π × 10⁻⁷ T m A⁻¹" },
    { id: "CONST_c", display: "c = 3.00 \\times 10^{8} \\text{ m s}^{-1}", description: "Speed of light in vacuum", symbol: "c", value: "3.00 × 10⁸ m s⁻¹" },
    { id: "CONST_h", display: "h = 6.63 \\times 10^{-34} \\text{ J s}", description: "Planck constant", symbol: "h", value: "6.63 × 10⁻³⁴ J s" },
    { id: "CONST_e", display: "e = 1.60 \\times 10^{-19} \\text{ C}", description: "Elementary charge", symbol: "e", value: "1.60 × 10⁻¹⁹ C" },
    { id: "CONST_me", display: "m_e = 9.11 \\times 10^{-31} \\text{ kg} = 0.511 \\text{ MeV c}^{-2}", description: "Electron rest mass", symbol: "mₑ", value: "9.11 × 10⁻³¹ kg = 0.511 MeV c⁻²" },
    { id: "CONST_mp", display: "m_p = 1.673 \\times 10^{-27} \\text{ kg} = 938 \\text{ MeV c}^{-2}", description: "Proton rest mass", symbol: "mₚ", value: "1.673 × 10⁻²⁷ kg = 938 MeV c⁻²" },
    { id: "CONST_mn", display: "m_n = 1.675 \\times 10^{-27} \\text{ kg} = 940 \\text{ MeV c}^{-2}", description: "Neutron rest mass", symbol: "mₙ", value: "1.675 × 10⁻²⁷ kg = 940 MeV c⁻²" },
    { id: "CONST_u", display: "u = 1.661 \\times 10^{-27} \\text{ kg} = 931.5 \\text{ MeV c}^{-2}", description: "Unified atomic mass unit", symbol: "u", value: "1.661 × 10⁻²⁷ kg = 931.5 MeV c⁻²" },
    { id: "CONST_S", display: "S = 1.36 \\times 10^{3} \\text{ W m}^{-2}", description: "Solar constant", symbol: "S", value: "1.36 × 10³ W m⁻²" },
    { id: "CONST_R0", display: "R_0 = 1.20 \\times 10^{-15} \\text{ m}", description: "Fermi radius", symbol: "R₀", value: "1.20 × 10⁻¹⁵ m" }
  ]
};
