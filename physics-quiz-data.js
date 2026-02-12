// ===== IGCSE PHYSICS 0625 EQUATION DATA =====
// 2026-2028 Syllabus
// Edit this file to add/remove/modify equations.
// The quiz app (physics-quiz.html) loads this file automatically.

// --- TOPICS ---
const TOPICS = [
  { id: "ch1", label: "General Physics" },
  { id: "ch2", label: "Thermal Physics" },
  { id: "ch3", label: "Waves" },
  { id: "ch4", label: "Electricity & Magnetism" },
  { id: "ch6", label: "Space Physics" }
];

// --- SYMBOL POOL (for generating distractors) ---
const ALL_SYMBOLS = [
  { symbol: "s", label: "speed" },
  { symbol: "d", label: "distance" },
  { symbol: "t", label: "time" },
  { symbol: "v", label: "velocity" },
  { symbol: "u", label: "initial velocity" },
  { symbol: "a", label: "acceleration" },
  { symbol: "F", label: "force" },
  { symbol: "m", label: "mass" },
  { symbol: "g", label: "gravitational field strength" },
  { symbol: "W", label: "work/energy" },
  { symbol: "P", label: "pressure/power" },
  { symbol: "A", label: "area" },
  { symbol: "V", label: "volume/voltage" },
  { symbol: "k", label: "spring constant" },
  { symbol: "x", label: "extension" },
  { symbol: "h", label: "height" },
  { symbol: "p", label: "momentum" },
  { symbol: "Q", label: "charge/thermal energy" },
  { symbol: "I", label: "current" },
  { symbol: "R", label: "resistance" },
  { symbol: "f", label: "frequency" },
  { symbol: "\u03BB", label: "wavelength" },
  { symbol: "T", label: "period" },
  { symbol: "n", label: "refractive index" },
  { symbol: "c", label: "speed of light" },
  { symbol: "\u03C1", label: "density/resistivity" },
  { symbol: "\u03B7", label: "efficiency" },
  { symbol: "\u0394p", label: "change in momentum" },
  { symbol: "r", label: "radius" },
  { symbol: "l", label: "length" },
  { symbol: "E", label: "energy" },
  { symbol: "N", label: "turns" }
];

// --- UNIT POOL (for generating Type 2 distractors) ---
const ALL_UNITS = [
  { unit: "m/s", unitName: "metres per second" },
  { unit: "m", unitName: "metres" },
  { unit: "s", unitName: "seconds" },
  { unit: "m/s\u00B2", unitName: "metres per second squared" },
  { unit: "N", unitName: "newtons" },
  { unit: "kg", unitName: "kilograms" },
  { unit: "kg/m\u00B3", unitName: "kilograms per cubic metre" },
  { unit: "m\u00B3", unitName: "cubic metres" },
  { unit: "N/m", unitName: "newtons per metre" },
  { unit: "Pa", unitName: "pascals" },
  { unit: "J", unitName: "joules" },
  { unit: "W", unitName: "watts" },
  { unit: "Nm", unitName: "newton metres" },
  { unit: "kg m/s", unitName: "kilogram metres per second" },
  { unit: "%", unitName: "percentage" },
  { unit: "Hz", unitName: "hertz" },
  { unit: "A", unitName: "amps" },
  { unit: "C", unitName: "coulombs" },
  { unit: "V", unitName: "volts" },
  { unit: "\u03A9", unitName: "ohms" },
  { unit: "J/(kg\u00B0C)", unitName: "joules per kilogram degree Celsius" },
  { unit: "\u00B0C", unitName: "degrees Celsius" },
  { unit: "K", unitName: "kelvin" },
  { unit: "N/kg", unitName: "newtons per kilogram" },
  { unit: "m\u00B2", unitName: "square metres" },
  { unit: "\u03A9m", unitName: "ohm metres" },
  { unit: "s\u207B\u00B9", unitName: "per second" },
  { unit: "no unit", unitName: "no unit (ratio)" }
];

// --- EQUATIONS ---
// Each equation has:
//   id: unique string
//   topic: which chapter ("ch1", "ch2", etc.)
//   name: human-readable name
//   quantities: what this equation links (for Type 1 question text)
//   units: array of { quantity, unit, unitName } for Type 2 questions
//   forms: array of formula arrangements for display
//     - lhs: { symbol, label } - left hand side
//     - rhs: expression tree with types "mul", "frac", "add"
//       - { symbol: "x" } = a blank the student fills
//       - { symbol: "x", power: "2" } = blank with superscript
//       - { constant: "½" } = shown as-is, not blanked
//       - { op: "-" } = operator shown between blanks
//   wordProblems: array of { text, formIndex } for Type 3 questions

const EQUATIONS = [

  // ===== CHAPTER 1: GENERAL PHYSICS =====

  {
    id: "speed",
    topic: "ch1",
    name: "Average Speed",
    questionText: "What is the formula for average speed?",
    excludeSymbols: [],
    quantities: ["average speed", "distance", "time"],
    units: [
      { quantity: "average speed", unit: "m/s", unitName: "metres per second" },
      { quantity: "distance", unit: "m", unitName: "metres" },
      { quantity: "time", unit: "s", unitName: "seconds" }
    ],
    forms: [
      {
        lhs: { symbol: "s" },
        rhs: { type: "frac", top: [{ symbol: "d" }], bottom: [{ symbol: "t" }] }
      },
      {
        lhs: { symbol: "d" },
        rhs: { type: "mul", parts: [{ symbol: "s" }, { symbol: "t" }] }
      },
      {
        lhs: { symbol: "t" },
        rhs: { type: "frac", top: [{ symbol: "d" }], bottom: [{ symbol: "s" }] }
      }
    ],
    wordProblems: [
      { text: "A car travels 240 metres in 12 seconds. What is its average speed?", formIndex: 0 },
      { text: "A cyclist travels at 8 m/s for 25 seconds. How far does she travel?", formIndex: 1 },
      { text: "A runner covers 400 metres at an average speed of 5 m/s. How long does it take?", formIndex: 2 }
    ]
  },

  {
    id: "velocity",
    topic: "ch1",
    name: "Average Velocity",
    questionText: "What is the formula for average velocity?",
    excludeSymbols: [],
    quantities: ["average velocity", "displacement", "time"],
    units: [
      { quantity: "average velocity", unit: "m/s", unitName: "metres per second" },
      { quantity: "displacement", unit: "m", unitName: "metres" },
      { quantity: "time", unit: "s", unitName: "seconds" }
    ],
    forms: [
      {
        lhs: { symbol: "v" },
        rhs: { type: "frac", top: [{ symbol: "x" }], bottom: [{ symbol: "t" }] }
      },
      {
        lhs: { symbol: "x" },
        rhs: { type: "mul", parts: [{ symbol: "v" }, { symbol: "t" }] }
      },
      {
        lhs: { symbol: "t" },
        rhs: { type: "frac", top: [{ symbol: "x" }], bottom: [{ symbol: "v" }] }
      }
    ],
    wordProblems: [
      { text: "A boat is displaced 60 metres east in 20 seconds. What is its average velocity?", formIndex: 0 },
      { text: "A drone flies at a velocity of 12 m/s for 15 seconds. What is its displacement?", formIndex: 1 }
    ]
  },

  {
    id: "acceleration",
    topic: "ch1",
    name: "Acceleration",
    questionText: "What is the formula for acceleration?",
    excludeSymbols: [],
    quantities: ["acceleration", "final velocity", "initial velocity", "time"],
    units: [
      { quantity: "acceleration", unit: "m/s\u00B2", unitName: "metres per second squared" },
      { quantity: "velocity", unit: "m/s", unitName: "metres per second" },
      { quantity: "time", unit: "s", unitName: "seconds" }
    ],
    forms: [
      {
        lhs: { symbol: "a" },
        rhs: { type: "frac", top: [{ symbol: "v" }, { op: "\u2212" }, { symbol: "u" }], bottom: [{ symbol: "t" }] }
      },
      {
        lhs: { symbol: "v" },
        rhs: { type: "add", parts: [{ symbol: "u" }, { type: "mul", parts: [{ symbol: "a" }, { symbol: "t" }] }] }
      },
      {
        lhs: { symbol: "t" },
        rhs: { type: "frac", top: [{ symbol: "v" }, { op: "\u2212" }, { symbol: "u" }], bottom: [{ symbol: "a" }] }
      }
    ],
    wordProblems: [
      { text: "A car accelerates from 10 m/s to 30 m/s in 5 seconds. What is its acceleration?", formIndex: 0 },
      { text: "A skateboard starts at rest and accelerates at 2 m/s\u00B2 for 6 seconds. What is its final velocity?", formIndex: 1 },
      { text: "A bike goes from 5 m/s to 20 m/s with an acceleration of 3 m/s\u00B2. How long does this take?", formIndex: 2 }
    ]
  },

  {
    id: "weight",
    topic: "ch1",
    name: "Weight",
    questionText: "What is the formula for weight?",
    excludeSymbols: [],
    quantities: ["weight", "mass", "gravitational field strength"],
    units: [
      { quantity: "weight", unit: "N", unitName: "newtons" },
      { quantity: "mass", unit: "kg", unitName: "kilograms" },
      { quantity: "gravitational field strength", unit: "N/kg", unitName: "newtons per kilogram" }
    ],
    forms: [
      {
        lhs: { symbol: "W" },
        rhs: { type: "mul", parts: [{ symbol: "m" }, { symbol: "g" }] }
      },
      {
        lhs: { symbol: "m" },
        rhs: { type: "frac", top: [{ symbol: "W" }], bottom: [{ symbol: "g" }] }
      },
      {
        lhs: { symbol: "g" },
        rhs: { type: "frac", top: [{ symbol: "W" }], bottom: [{ symbol: "m" }] }
      }
    ],
    wordProblems: [
      { text: "An astronaut has a mass of 80 kg. On Earth, g = 9.8 N/kg. What is their weight?", formIndex: 0 },
      { text: "A box weighs 49 N on Earth where g = 9.8 N/kg. What is its mass?", formIndex: 1 }
    ]
  },

  {
    id: "force",
    topic: "ch1",
    name: "Force (Newton's Second Law)",
    questionText: "What is the formula for resultant force?",
    excludeSymbols: ["k", "x", "\u0394p"],
    quantities: ["resultant force", "mass", "acceleration"],
    units: [
      { quantity: "force", unit: "N", unitName: "newtons" },
      { quantity: "mass", unit: "kg", unitName: "kilograms" },
      { quantity: "acceleration", unit: "m/s\u00B2", unitName: "metres per second squared" }
    ],
    forms: [
      {
        lhs: { symbol: "F" },
        rhs: { type: "mul", parts: [{ symbol: "m" }, { symbol: "a" }] }
      },
      {
        lhs: { symbol: "m" },
        rhs: { type: "frac", top: [{ symbol: "F" }], bottom: [{ symbol: "a" }] }
      },
      {
        lhs: { symbol: "a" },
        rhs: { type: "frac", top: [{ symbol: "F" }], bottom: [{ symbol: "m" }] }
      }
    ],
    wordProblems: [
      { text: "A resultant force acts on a skydiver. His mass is 60 kg and his acceleration is 2 m/s\u00B2. What is the resultant force?", formIndex: 0 },
      { text: "The resultant force on a skydiver is 80 N. His mass is 60 kg. What is his acceleration?", formIndex: 2 },
      { text: "A resultant force of 500 N causes an acceleration of 10 m/s\u00B2. What is the mass of the object?", formIndex: 1 }
    ]
  },

  {
    id: "density",
    topic: "ch1",
    name: "Density",
    questionText: "What is the formula for density?",
    excludeSymbols: [],
    quantities: ["density", "mass", "volume"],
    units: [
      { quantity: "density", unit: "kg/m\u00B3", unitName: "kilograms per cubic metre" },
      { quantity: "mass", unit: "kg", unitName: "kilograms" },
      { quantity: "volume", unit: "m\u00B3", unitName: "cubic metres" }
    ],
    forms: [
      {
        lhs: { symbol: "\u03C1" },
        rhs: { type: "frac", top: [{ symbol: "m" }], bottom: [{ symbol: "V" }] }
      },
      {
        lhs: { symbol: "m" },
        rhs: { type: "mul", parts: [{ symbol: "\u03C1" }, { symbol: "V" }] }
      },
      {
        lhs: { symbol: "V" },
        rhs: { type: "frac", top: [{ symbol: "m" }], bottom: [{ symbol: "\u03C1" }] }
      }
    ],
    wordProblems: [
      { text: "A block has a mass of 500 kg and a volume of 0.25 m\u00B3. What is its density?", formIndex: 0 },
      { text: "A liquid has a density of 1200 kg/m\u00B3 and a volume of 0.5 m\u00B3. What is its mass?", formIndex: 1 }
    ]
  },

  {
    id: "hookes_law",
    topic: "ch1",
    name: "Hooke's Law",
    questionText: "What is the formula for Hooke's Law?",
    excludeSymbols: ["m", "a", "\u0394p"],
    quantities: ["force", "spring constant", "extension"],
    units: [
      { quantity: "force", unit: "N", unitName: "newtons" },
      { quantity: "spring constant", unit: "N/m", unitName: "newtons per metre" },
      { quantity: "extension", unit: "m", unitName: "metres" }
    ],
    forms: [
      {
        lhs: { symbol: "F" },
        rhs: { type: "mul", parts: [{ symbol: "k" }, { symbol: "x" }] }
      },
      {
        lhs: { symbol: "k" },
        rhs: { type: "frac", top: [{ symbol: "F" }], bottom: [{ symbol: "x" }] }
      },
      {
        lhs: { symbol: "x" },
        rhs: { type: "frac", top: [{ symbol: "F" }], bottom: [{ symbol: "k" }] }
      }
    ],
    wordProblems: [
      { text: "A spring has a spring constant of 50 N/m and is stretched by 0.3 m. What force is needed?", formIndex: 0 },
      { text: "A force of 20 N stretches a spring by 0.1 m. What is the spring constant?", formIndex: 1 }
    ]
  },

  {
    id: "pressure",
    topic: "ch1",
    name: "Pressure",
    questionText: "What is the formula for pressure on a surface?",
    excludeSymbols: ["\u03C1", "g", "h"],
    quantities: ["pressure", "force", "area"],
    units: [
      { quantity: "pressure", unit: "Pa", unitName: "pascals" },
      { quantity: "force", unit: "N", unitName: "newtons" },
      { quantity: "area", unit: "m\u00B2", unitName: "square metres" }
    ],
    forms: [
      {
        lhs: { symbol: "P" },
        rhs: { type: "frac", top: [{ symbol: "F" }], bottom: [{ symbol: "A" }] }
      },
      {
        lhs: { symbol: "F" },
        rhs: { type: "mul", parts: [{ symbol: "P" }, { symbol: "A" }] }
      },
      {
        lhs: { symbol: "A" },
        rhs: { type: "frac", top: [{ symbol: "F" }], bottom: [{ symbol: "P" }] }
      }
    ],
    wordProblems: [
      { text: "A force of 200 N acts on an area of 0.5 m\u00B2. What is the pressure?", formIndex: 0 },
      { text: "A pressure of 1000 Pa acts on an area of 2 m\u00B2. What is the force?", formIndex: 1 }
    ]
  },

  {
    id: "fluid_pressure",
    topic: "ch1",
    name: "Fluid Pressure",
    questionText: "What is the formula for fluid pressure?",
    excludeSymbols: ["A"],
    quantities: ["fluid pressure", "density", "gravitational field strength", "height"],
    units: [
      { quantity: "fluid pressure", unit: "Pa", unitName: "pascals" },
      { quantity: "density", unit: "kg/m\u00B3", unitName: "kilograms per cubic metre" },
      { quantity: "gravitational field strength", unit: "N/kg", unitName: "newtons per kilogram" },
      { quantity: "height (depth)", unit: "m", unitName: "metres" }
    ],
    forms: [
      {
        lhs: { symbol: "P" },
        rhs: { type: "mul", parts: [{ symbol: "\u03C1" }, { symbol: "g" }, { symbol: "h" }] }
      },
      {
        lhs: { symbol: "h" },
        rhs: { type: "frac", top: [{ symbol: "P" }], bottom: [{ type: "mul", parts: [{ symbol: "\u03C1" }, { symbol: "g" }] }] }
      }
    ],
    wordProblems: [
      { text: "A diver is 15 m below the surface of seawater (density 1025 kg/m\u00B3, g = 9.8 N/kg). What is the fluid pressure?", formIndex: 0 },
      { text: "The fluid pressure at the bottom of a tank is 49000 Pa. The liquid has density 1000 kg/m\u00B3 and g = 9.8 N/kg. What is the depth?", formIndex: 1 }
    ]
  },

  {
    id: "work",
    topic: "ch1",
    name: "Work Done",
    questionText: "What is the formula for work done?",
    excludeSymbols: ["I", "V", "P"],
    quantities: ["work done", "force", "distance"],
    units: [
      { quantity: "work done", unit: "J", unitName: "joules" },
      { quantity: "force", unit: "N", unitName: "newtons" },
      { quantity: "distance", unit: "m", unitName: "metres" }
    ],
    forms: [
      {
        lhs: { symbol: "W" },
        rhs: { type: "mul", parts: [{ symbol: "F" }, { symbol: "d" }] }
      },
      {
        lhs: { symbol: "F" },
        rhs: { type: "frac", top: [{ symbol: "W" }], bottom: [{ symbol: "d" }] }
      },
      {
        lhs: { symbol: "d" },
        rhs: { type: "frac", top: [{ symbol: "W" }], bottom: [{ symbol: "F" }] }
      }
    ],
    wordProblems: [
      { text: "A person pushes a box with a force of 50 N over a distance of 8 m. How much work is done?", formIndex: 0 },
      { text: "A crane does 10000 J of work lifting a load 5 m. What force did it exert?", formIndex: 1 }
    ]
  },

  {
    id: "power",
    topic: "ch1",
    name: "Power",
    questionText: "What is the formula that links power and work done?",
    excludeSymbols: ["I", "V", "R"],
    quantities: ["power", "work done", "time"],
    units: [
      { quantity: "power", unit: "W", unitName: "watts" },
      { quantity: "work done", unit: "J", unitName: "joules" },
      { quantity: "time", unit: "s", unitName: "seconds" }
    ],
    forms: [
      {
        lhs: { symbol: "P" },
        rhs: { type: "frac", top: [{ symbol: "W" }], bottom: [{ symbol: "t" }] }
      },
      {
        lhs: { symbol: "W" },
        rhs: { type: "mul", parts: [{ symbol: "P" }, { symbol: "t" }] }
      },
      {
        lhs: { symbol: "t" },
        rhs: { type: "frac", top: [{ symbol: "W" }], bottom: [{ symbol: "P" }] }
      }
    ],
    wordProblems: [
      { text: "A motor does 6000 J of work in 30 seconds. What is its power?", formIndex: 0 },
      { text: "A 100 W light bulb is left on for 60 seconds. How much work does it do?", formIndex: 1 }
    ]
  },

  {
    id: "kinetic_energy",
    topic: "ch1",
    name: "Kinetic Energy",
    questionText: "What is the formula for kinetic energy?",
    excludeSymbols: [],
    quantities: ["kinetic energy", "mass", "velocity"],
    units: [
      { quantity: "kinetic energy", unit: "J", unitName: "joules" },
      { quantity: "mass", unit: "kg", unitName: "kilograms" },
      { quantity: "velocity", unit: "m/s", unitName: "metres per second" }
    ],
    forms: [
      {
        lhs: { symbol: "KE" },
        rhs: { type: "mul", parts: [{ constant: "\u00BD" }, { symbol: "m" }, { symbol: "v", power: "2" }] }
      }
    ],
    wordProblems: [
      { text: "A 2 kg ball moves at 5 m/s. What is its kinetic energy?", formIndex: 0 },
      { text: "A car of mass 1200 kg is travelling at 20 m/s. What is its kinetic energy?", formIndex: 0 }
    ]
  },

  {
    id: "gpe",
    topic: "ch1",
    name: "Gravitational Potential Energy",
    questionText: "What is the formula for gravitational potential energy?",
    excludeSymbols: [],
    quantities: ["gravitational potential energy", "mass", "gravitational field strength", "height"],
    units: [
      { quantity: "gravitational potential energy", unit: "J", unitName: "joules" },
      { quantity: "mass", unit: "kg", unitName: "kilograms" },
      { quantity: "gravitational field strength", unit: "N/kg", unitName: "newtons per kilogram" },
      { quantity: "height", unit: "m", unitName: "metres" }
    ],
    forms: [
      {
        lhs: { symbol: "GPE" },
        rhs: { type: "mul", parts: [{ symbol: "m" }, { symbol: "g" }, { symbol: "h" }] }
      },
      {
        lhs: { symbol: "h" },
        rhs: { type: "frac", top: [{ symbol: "GPE" }], bottom: [{ type: "mul", parts: [{ symbol: "m" }, { symbol: "g" }] }] }
      },
      {
        lhs: { symbol: "m" },
        rhs: { type: "frac", top: [{ symbol: "GPE" }], bottom: [{ type: "mul", parts: [{ symbol: "g" }, { symbol: "h" }] }] }
      }
    ],
    wordProblems: [
      { text: "A 5 kg rock is lifted to a height of 10 m. g = 9.8 N/kg. What is its gravitational potential energy?", formIndex: 0 },
      { text: "An object has 490 J of GPE, a mass of 10 kg, and g = 9.8 N/kg. What height is it at?", formIndex: 1 }
    ]
  },

  {
    id: "epe",
    topic: "ch1",
    name: "Elastic Potential Energy",
    questionText: "What is the formula for elastic potential energy?",
    excludeSymbols: [],
    quantities: ["elastic potential energy", "spring constant", "extension"],
    units: [
      { quantity: "elastic potential energy", unit: "J", unitName: "joules" },
      { quantity: "spring constant", unit: "N/m", unitName: "newtons per metre" },
      { quantity: "extension", unit: "m", unitName: "metres" }
    ],
    forms: [
      {
        lhs: { symbol: "EPE" },
        rhs: { type: "mul", parts: [{ constant: "\u00BD" }, { symbol: "k" }, { symbol: "x", power: "2" }] }
      }
    ],
    wordProblems: [
      { text: "A spring with constant 200 N/m is stretched by 0.1 m. What is the elastic potential energy stored?", formIndex: 0 }
    ]
  },

  {
    id: "efficiency",
    topic: "ch1",
    name: "Efficiency",
    questionText: "What is the formula for efficiency?",
    excludeSymbols: [],
    quantities: ["efficiency", "useful power output", "total power input"],
    units: [
      { quantity: "efficiency", unit: "%", unitName: "percentage" },
      { quantity: "power", unit: "W", unitName: "watts" }
    ],
    forms: [
      {
        lhs: { symbol: "efficiency" },
        rhs: { type: "frac", top: [{ symbol: "useful power output" }], bottom: [{ symbol: "total power input" }] }
      }
    ],
    wordProblems: [
      { text: "A motor has a useful power output of 400 W and a total power input of 500 W. What is the efficiency?", formIndex: 0 }
    ]
  },

  {
    id: "moment",
    topic: "ch1",
    name: "Moment",
    questionText: "What is the formula for a moment?",
    excludeSymbols: [],
    quantities: ["moment", "force", "perpendicular distance from pivot"],
    units: [
      { quantity: "moment", unit: "Nm", unitName: "newton metres" },
      { quantity: "force", unit: "N", unitName: "newtons" },
      { quantity: "distance from pivot", unit: "m", unitName: "metres" }
    ],
    forms: [
      {
        lhs: { symbol: "M" },
        rhs: { type: "mul", parts: [{ symbol: "F" }, { symbol: "d" }] }
      },
      {
        lhs: { symbol: "F" },
        rhs: { type: "frac", top: [{ symbol: "M" }], bottom: [{ symbol: "d" }] }
      },
      {
        lhs: { symbol: "d" },
        rhs: { type: "frac", top: [{ symbol: "M" }], bottom: [{ symbol: "F" }] }
      }
    ],
    wordProblems: [
      { text: "A force of 25 N acts at a perpendicular distance of 0.4 m from a pivot. What is the moment?", formIndex: 0 },
      { text: "A moment of 60 Nm is produced by a force acting 1.5 m from the pivot. What is the force?", formIndex: 1 }
    ]
  },

  {
    id: "momentum",
    topic: "ch1",
    name: "Momentum",
    questionText: "What is the formula for momentum?",
    excludeSymbols: [],
    quantities: ["momentum", "mass", "velocity"],
    units: [
      { quantity: "momentum", unit: "kg m/s", unitName: "kilogram metres per second" },
      { quantity: "mass", unit: "kg", unitName: "kilograms" },
      { quantity: "velocity", unit: "m/s", unitName: "metres per second" }
    ],
    forms: [
      {
        lhs: { symbol: "p" },
        rhs: { type: "mul", parts: [{ symbol: "m" }, { symbol: "v" }] }
      },
      {
        lhs: { symbol: "m" },
        rhs: { type: "frac", top: [{ symbol: "p" }], bottom: [{ symbol: "v" }] }
      },
      {
        lhs: { symbol: "v" },
        rhs: { type: "frac", top: [{ symbol: "p" }], bottom: [{ symbol: "m" }] }
      }
    ],
    wordProblems: [
      { text: "A 1500 kg car moves at 20 m/s. What is its momentum?", formIndex: 0 },
      { text: "An object has momentum 600 kg m/s and mass 30 kg. What is its velocity?", formIndex: 2 }
    ]
  },

  {
    id: "impulse_force",
    topic: "ch1",
    name: "Impulsive Force",
    questionText: "What is the formula for impulsive force?",
    excludeSymbols: ["m", "a", "k", "x"],
    quantities: ["force", "change in momentum", "time"],
    units: [
      { quantity: "force", unit: "N", unitName: "newtons" },
      { quantity: "change in momentum", unit: "kg m/s", unitName: "kilogram metres per second" },
      { quantity: "time", unit: "s", unitName: "seconds" }
    ],
    forms: [
      {
        lhs: { symbol: "F" },
        rhs: { type: "frac", top: [{ symbol: "\u0394p" }], bottom: [{ symbol: "t" }] }
      },
      {
        lhs: { symbol: "\u0394p" },
        rhs: { type: "mul", parts: [{ symbol: "F" }, { symbol: "t" }] }
      },
      {
        lhs: { symbol: "t" },
        rhs: { type: "frac", top: [{ symbol: "\u0394p" }], bottom: [{ symbol: "F" }] }
      }
    ],
    wordProblems: [
      { text: "A ball experiences a change in momentum of 6 kg m/s over 0.02 seconds. What is the force?", formIndex: 0 },
      { text: "A force of 200 N acts on a ball for 0.05 seconds. What is the change in momentum?", formIndex: 1 }
    ]
  },

  // ===== CHAPTER 2: THERMAL PHYSICS =====

  {
    id: "boyles_law",
    topic: "ch2",
    name: "Boyle's Law",
    questionText: "What is the formula for Boyle's Law?",
    excludeSymbols: [],
    quantities: ["pressure", "volume"],
    units: [
      { quantity: "pressure", unit: "Pa", unitName: "pascals" },
      { quantity: "volume", unit: "m\u00B3", unitName: "cubic metres" }
    ],
    forms: [
      {
        lhs: { symbol: "P\u2081V\u2081" },
        rhs: { type: "mul", parts: [{ symbol: "P\u2082" }, { symbol: "V\u2082" }] }
      }
    ],
    wordProblems: [
      { text: "A gas has pressure 100 kPa and volume 2 m\u00B3. It is compressed to 0.5 m\u00B3. What is the new pressure?", formIndex: 0 }
    ]
  },

  {
    id: "thermal_energy",
    topic: "ch2",
    name: "Thermal Energy",
    questionText: "What is the formula for thermal energy?",
    excludeSymbols: [],
    quantities: ["thermal energy", "mass", "specific heat capacity", "temperature change"],
    units: [
      { quantity: "thermal energy", unit: "J", unitName: "joules" },
      { quantity: "mass", unit: "kg", unitName: "kilograms" },
      { quantity: "specific heat capacity", unit: "J/(kg\u00B0C)", unitName: "joules per kilogram degree Celsius" },
      { quantity: "temperature change", unit: "\u00B0C", unitName: "degrees Celsius" }
    ],
    forms: [
      {
        lhs: { symbol: "Q" },
        rhs: { type: "mul", parts: [{ symbol: "m" }, { symbol: "c" }, { symbol: "\u0394\u03B8" }] }
      },
      {
        lhs: { symbol: "m" },
        rhs: { type: "frac", top: [{ symbol: "Q" }], bottom: [{ type: "mul", parts: [{ symbol: "c" }, { symbol: "\u0394\u03B8" }] }] }
      },
      {
        lhs: { symbol: "\u0394\u03B8" },
        rhs: { type: "frac", top: [{ symbol: "Q" }], bottom: [{ type: "mul", parts: [{ symbol: "m" }, { symbol: "c" }] }] }
      }
    ],
    wordProblems: [
      { text: "2 kg of water (c = 4200 J/kg\u00B0C) is heated by 10\u00B0C. How much energy is needed?", formIndex: 0 },
      { text: "50,000 J of energy heats 5 kg of oil (c = 2000 J/kg\u00B0C). What is the temperature change?", formIndex: 2 }
    ]
  },

  {
    id: "celsius_kelvin",
    topic: "ch2",
    name: "Celsius to Kelvin",
    questionText: "What is the formula to convert between Celsius and Kelvin?",
    excludeSymbols: [],
    quantities: ["Celsius temperature", "Kelvin temperature"],
    units: [
      { quantity: "temperature", unit: "\u00B0C and K", unitName: "degrees Celsius and kelvin", multiSelect: true, correctUnits: ["\u00B0C", "K"] }
    ],
    forms: [
      {
        lhs: { symbol: "\u00B0C" },
        rhs: { type: "add", parts: [{ symbol: "K" }, { op: "\u2212" }, { constant: "273" }] }
      },
      {
        lhs: { symbol: "K" },
        rhs: { type: "add", parts: [{ symbol: "\u00B0C" }, { op: "+" }, { constant: "273" }] }
      }
    ],
    wordProblems: [
      { text: "Water boils at 100\u00B0C. What is this in Kelvin?", formIndex: 1 },
      { text: "A gas is at 300 K. What is this in Celsius?", formIndex: 0 }
    ]
  },

  // ===== CHAPTER 3: WAVES =====

  {
    id: "wave_speed",
    topic: "ch3",
    name: "Wave Speed",
    questionText: "What is the formula for wave speed?",
    excludeSymbols: ["r", "T", "H\u2080", "d"],
    quantities: ["wave speed", "frequency", "wavelength"],
    units: [
      { quantity: "wave speed", unit: "m/s", unitName: "metres per second" },
      { quantity: "frequency", unit: "Hz", unitName: "hertz" },
      { quantity: "wavelength", unit: "m", unitName: "metres" }
    ],
    forms: [
      {
        lhs: { symbol: "v" },
        rhs: { type: "mul", parts: [{ symbol: "f" }, { symbol: "\u03BB" }] }
      },
      {
        lhs: { symbol: "f" },
        rhs: { type: "frac", top: [{ symbol: "v" }], bottom: [{ symbol: "\u03BB" }] }
      },
      {
        lhs: { symbol: "\u03BB" },
        rhs: { type: "frac", top: [{ symbol: "v" }], bottom: [{ symbol: "f" }] }
      }
    ],
    wordProblems: [
      { text: "A wave has a frequency of 50 Hz and wavelength of 4 m. What is the wave speed?", formIndex: 0 },
      { text: "A sound wave travels at 340 m/s and has a wavelength of 0.85 m. What is its frequency?", formIndex: 1 }
    ]
  },

  {
    id: "frequency_period",
    topic: "ch3",
    name: "Frequency and Period",
    questionText: "What is the formula that links frequency and period?",
    excludeSymbols: [],
    quantities: ["frequency", "period"],
    units: [
      { quantity: "frequency", unit: "Hz", unitName: "hertz" },
      { quantity: "period", unit: "s", unitName: "seconds" }
    ],
    forms: [
      {
        lhs: { symbol: "f" },
        rhs: { type: "frac", top: [{ constant: "1" }], bottom: [{ symbol: "T" }] }
      },
      {
        lhs: { symbol: "T" },
        rhs: { type: "frac", top: [{ constant: "1" }], bottom: [{ symbol: "f" }] }
      }
    ],
    wordProblems: [
      { text: "A pendulum has a period of 0.5 seconds. What is its frequency?", formIndex: 0 },
      { text: "A tuning fork vibrates at 256 Hz. What is the period of one vibration?", formIndex: 1 }
    ]
  },

  {
    id: "snells_law",
    topic: "ch3",
    name: "Snell's Law (Refractive Index)",
    questionText: "What is the formula for Snell's Law?",
    excludeSymbols: ["c", "v"],
    quantities: ["refractive index", "angle of incidence", "angle of refraction"],
    units: [
      { quantity: "refractive index", unit: "no unit", unitName: "no unit (ratio)" }
    ],
    forms: [
      {
        lhs: { symbol: "n" },
        rhs: { type: "frac", top: [{ symbol: "sin i" }], bottom: [{ symbol: "sin r" }] }
      }
    ],
    wordProblems: [
      { text: "Light enters glass at an angle of incidence of 30\u00B0 and refracts at 19\u00B0. What is the refractive index?", formIndex: 0 }
    ]
  },

  {
    id: "refractive_index_speed",
    topic: "ch3",
    name: "Refractive Index (Speed)",
    questionText: "What is the formula for refractive index using speed of light?",
    excludeSymbols: ["sin i", "sin r", "sin c"],
    quantities: ["refractive index", "speed of light in vacuum", "speed of light in material"],
    units: [
      { quantity: "refractive index", unit: "no unit", unitName: "no unit (ratio)" },
      { quantity: "speed of light", unit: "m/s", unitName: "metres per second" }
    ],
    forms: [
      {
        lhs: { symbol: "n" },
        rhs: { type: "frac", top: [{ symbol: "c" }], bottom: [{ symbol: "v" }] }
      },
      {
        lhs: { symbol: "v" },
        rhs: { type: "frac", top: [{ symbol: "c" }], bottom: [{ symbol: "n" }] }
      }
    ],
    wordProblems: [
      { text: "Light travels at 3 \u00D7 10\u2078 m/s in a vacuum and 2 \u00D7 10\u2078 m/s in glass. What is the refractive index of the glass?", formIndex: 0 }
    ]
  },

  {
    id: "critical_angle",
    topic: "ch3",
    name: "Critical Angle",
    questionText: "What is the formula for the critical angle?",
    excludeSymbols: ["c", "v", "sin i", "sin r"],
    quantities: ["refractive index", "critical angle"],
    units: [
      { quantity: "refractive index", unit: "no unit", unitName: "no unit (ratio)" }
    ],
    forms: [
      {
        lhs: { symbol: "n" },
        rhs: { type: "frac", top: [{ constant: "1" }], bottom: [{ symbol: "sin c" }] }
      }
    ],
    wordProblems: [
      { text: "A material has a critical angle of 42\u00B0. What is its refractive index?", formIndex: 0 }
    ]
  },

  // ===== CHAPTER 4: ELECTRICITY & MAGNETISM =====

  {
    id: "current",
    topic: "ch4",
    name: "Current",
    questionText: "What is the formula for current?",
    excludeSymbols: ["W", "V"],
    quantities: ["current", "charge", "time"],
    units: [
      { quantity: "current", unit: "A", unitName: "amps" },
      { quantity: "charge", unit: "C", unitName: "coulombs" },
      { quantity: "time", unit: "s", unitName: "seconds" }
    ],
    forms: [
      {
        lhs: { symbol: "I" },
        rhs: { type: "frac", top: [{ symbol: "Q" }], bottom: [{ symbol: "t" }] }
      },
      {
        lhs: { symbol: "Q" },
        rhs: { type: "mul", parts: [{ symbol: "I" }, { symbol: "t" }] }
      },
      {
        lhs: { symbol: "t" },
        rhs: { type: "frac", top: [{ symbol: "Q" }], bottom: [{ symbol: "I" }] }
      }
    ],
    wordProblems: [
      { text: "A charge of 60 C flows through a wire in 10 seconds. What is the current?", formIndex: 0 },
      { text: "A current of 3 A flows for 20 seconds. How much charge passes?", formIndex: 1 }
    ]
  },

  {
    id: "voltage_energy",
    topic: "ch4",
    name: "Voltage (Energy)",
    questionText: "What is the formula that links voltage and charge?",
    excludeSymbols: ["I", "R"],
    quantities: ["voltage", "energy transferred", "charge"],
    units: [
      { quantity: "voltage", unit: "V", unitName: "volts" },
      { quantity: "energy transferred", unit: "J", unitName: "joules" },
      { quantity: "charge", unit: "C", unitName: "coulombs" }
    ],
    forms: [
      {
        lhs: { symbol: "V" },
        rhs: { type: "frac", top: [{ symbol: "W" }], bottom: [{ symbol: "Q" }] }
      },
      {
        lhs: { symbol: "W" },
        rhs: { type: "mul", parts: [{ symbol: "V" }, { symbol: "Q" }] }
      },
      {
        lhs: { symbol: "Q" },
        rhs: { type: "frac", top: [{ symbol: "W" }], bottom: [{ symbol: "V" }] }
      }
    ],
    wordProblems: [
      { text: "A battery transfers 12 J of energy for every 4 C of charge. What is the voltage?", formIndex: 0 },
      { text: "A 9 V battery pushes 5 C of charge. How much energy is transferred?", formIndex: 1 }
    ]
  },

  {
    id: "ohms_law",
    topic: "ch4",
    name: "Ohm's Law",
    questionText: "What is the formula for Ohm's Law?",
    excludeSymbols: ["W", "Q"],
    quantities: ["voltage", "current", "resistance"],
    units: [
      { quantity: "voltage", unit: "V", unitName: "volts" },
      { quantity: "current", unit: "A", unitName: "amps" },
      { quantity: "resistance", unit: "\u03A9", unitName: "ohms" }
    ],
    forms: [
      {
        lhs: { symbol: "V" },
        rhs: { type: "mul", parts: [{ symbol: "I" }, { symbol: "R" }] }
      },
      {
        lhs: { symbol: "I" },
        rhs: { type: "frac", top: [{ symbol: "V" }], bottom: [{ symbol: "R" }] }
      },
      {
        lhs: { symbol: "R" },
        rhs: { type: "frac", top: [{ symbol: "V" }], bottom: [{ symbol: "I" }] }
      }
    ],
    wordProblems: [
      { text: "A current of 2 A flows through a 10 \u03A9 resistor. What is the voltage across it?", formIndex: 0 },
      { text: "A 12 V supply is connected to a 4 \u03A9 resistor. What current flows?", formIndex: 1 },
      { text: "A voltage of 6 V drives a current of 0.5 A. What is the resistance?", formIndex: 2 }
    ]
  },

  {
    id: "power_iv",
    topic: "ch4",
    name: "Electrical Power (P = IV)",
    questionText: "What is the formula that links power and voltage?",
    excludeSymbols: ["R", "W", "t"],
    quantities: ["power", "current", "voltage"],
    units: [
      { quantity: "electrical power", unit: "W", unitName: "watts" },
      { quantity: "current", unit: "A", unitName: "amps" },
      { quantity: "voltage", unit: "V", unitName: "volts" }
    ],
    forms: [
      {
        lhs: { symbol: "P" },
        rhs: { type: "mul", parts: [{ symbol: "I" }, { symbol: "V" }] }
      },
      {
        lhs: { symbol: "I" },
        rhs: { type: "frac", top: [{ symbol: "P" }], bottom: [{ symbol: "V" }] }
      },
      {
        lhs: { symbol: "V" },
        rhs: { type: "frac", top: [{ symbol: "P" }], bottom: [{ symbol: "I" }] }
      }
    ],
    wordProblems: [
      { text: "A lamp draws 3 A from a 12 V supply. What is its power?", formIndex: 0 },
      { text: "A 60 W appliance is connected to 240 V mains. What current does it draw?", formIndex: 1 }
    ]
  },

  {
    id: "power_i2r",
    topic: "ch4",
    name: "Electrical Power (P = I\u00B2R)",
    questionText: "What is the formula that links power and resistance?",
    excludeSymbols: ["V", "W", "t"],
    quantities: ["power", "current", "resistance"],
    units: [
      { quantity: "electrical power", unit: "W", unitName: "watts" },
      { quantity: "current", unit: "A", unitName: "amps" },
      { quantity: "resistance", unit: "\u03A9", unitName: "ohms" }
    ],
    forms: [
      {
        lhs: { symbol: "P" },
        rhs: { type: "mul", parts: [{ symbol: "I", power: "2" }, { symbol: "R" }] }
      }
    ],
    wordProblems: [
      { text: "A current of 5 A flows through a 4 \u03A9 resistor. What is the power dissipated?", formIndex: 0 }
    ]
  },

  {
    id: "energy_ivt",
    topic: "ch4",
    name: "Energy Transferred (W = IVt)",
    questionText: "What is the formula for energy transferred using current and voltage?",
    excludeSymbols: ["P"],
    quantities: ["energy transferred", "current", "voltage", "time"],
    units: [
      { quantity: "energy transferred", unit: "J", unitName: "joules" },
      { quantity: "current", unit: "A", unitName: "amps" },
      { quantity: "voltage", unit: "V", unitName: "volts" },
      { quantity: "time", unit: "s", unitName: "seconds" }
    ],
    forms: [
      {
        lhs: { symbol: "W" },
        rhs: { type: "mul", parts: [{ symbol: "I" }, { symbol: "V" }, { symbol: "t" }] }
      }
    ],
    wordProblems: [
      { text: "A 2 A current flows through a 12 V heater for 300 seconds. How much energy is transferred?", formIndex: 0 }
    ]
  },

  {
    id: "energy_pt",
    topic: "ch4",
    name: "Energy Transferred (W = Pt)",
    questionText: "What is the formula for energy transferred using power?",
    excludeSymbols: ["I", "V"],
    quantities: ["energy transferred", "power", "time"],
    units: [
      { quantity: "energy transferred", unit: "J", unitName: "joules" },
      { quantity: "power", unit: "W", unitName: "watts" },
      { quantity: "time", unit: "s", unitName: "seconds" }
    ],
    forms: [
      {
        lhs: { symbol: "W" },
        rhs: { type: "mul", parts: [{ symbol: "P" }, { symbol: "t" }] }
      },
      {
        lhs: { symbol: "P" },
        rhs: { type: "frac", top: [{ symbol: "W" }], bottom: [{ symbol: "t" }] }
      },
      {
        lhs: { symbol: "t" },
        rhs: { type: "frac", top: [{ symbol: "W" }], bottom: [{ symbol: "P" }] }
      }
    ],
    wordProblems: [
      { text: "A 500 W microwave runs for 120 seconds. How much energy does it use?", formIndex: 0 },
      { text: "A device uses 36000 J of energy in 60 seconds. What is its power?", formIndex: 1 }
    ]
  },

  {
    id: "series_resistance",
    topic: "ch4",
    name: "Resistors in Series",
    questionText: "What is the formula for resistors in series?",
    excludeSymbols: ["\u03C1", "l", "A"],
    quantities: ["total resistance", "individual resistances"],
    units: [
      { quantity: "resistance", unit: "\u03A9", unitName: "ohms" }
    ],
    forms: [
      {
        lhs: { symbol: "R\u209C" },
        rhs: { type: "add", parts: [{ symbol: "R\u2081" }, { symbol: "R\u2082" }, { symbol: "R\u2083" }] }
      }
    ],
    wordProblems: [
      { text: "Three resistors of 10 \u03A9, 20 \u03A9 and 30 \u03A9 are connected in series. What is the total resistance?", formIndex: 0 }
    ]
  },

  {
    id: "resistance_resistivity",
    topic: "ch4",
    name: "Resistance (Resistivity)",
    questionText: "What is the formula for resistance using resistivity?",
    excludeSymbols: [],
    quantities: ["resistance", "resistivity", "length", "cross-sectional area"],
    units: [
      { quantity: "resistance", unit: "\u03A9", unitName: "ohms" },
      { quantity: "resistivity", unit: "\u03A9m", unitName: "ohm metres" },
      { quantity: "length", unit: "m", unitName: "metres" },
      { quantity: "cross-sectional area", unit: "m\u00B2", unitName: "square metres" }
    ],
    forms: [
      {
        lhs: { symbol: "R" },
        rhs: { type: "frac", top: [{ type: "mul", parts: [{ symbol: "\u03C1" }, { symbol: "l" }] }], bottom: [{ symbol: "A" }] }
      }
    ],
    wordProblems: [
      { text: "A wire has resistivity 1.7 \u00D7 10\u207B\u2078 \u03A9m, length 2 m and cross-sectional area 1 \u00D7 10\u207B\u2076 m\u00B2. What is its resistance?", formIndex: 0 }
    ]
  },

  {
    id: "transformer_voltage",
    topic: "ch4",
    name: "Transformer (Voltage Ratio)",
    questionText: "What is the formula for the transformer voltage ratio?",
    excludeSymbols: [],
    quantities: ["secondary voltage", "primary voltage", "secondary turns", "primary turns"],
    units: [
      { quantity: "voltage", unit: "V", unitName: "volts" }
    ],
    forms: [
      {
        lhs: { symbol: "V\u209B/V\u209A" },
        rhs: { type: "frac", top: [{ symbol: "N\u209B" }], bottom: [{ symbol: "N\u209A" }] }
      }
    ],
    wordProblems: [
      { text: "A transformer has 100 turns on the primary and 500 on the secondary. The input voltage is 12 V. What formula links the voltages and turns?", formIndex: 0 }
    ]
  },

  // ===== CHAPTER 6: SPACE PHYSICS =====

  {
    id: "orbital_speed",
    topic: "ch6",
    name: "Orbital Speed",
    questionText: "What is the formula for orbital speed?",
    excludeSymbols: ["f", "\u03BB", "H\u2080", "d"],
    quantities: ["orbital speed", "radius of orbit", "orbital period"],
    units: [
      { quantity: "orbital speed", unit: "m/s", unitName: "metres per second" },
      { quantity: "radius", unit: "m", unitName: "metres" },
      { quantity: "orbital period", unit: "s", unitName: "seconds" }
    ],
    forms: [
      {
        lhs: { symbol: "v" },
        rhs: { type: "frac", top: [{ type: "mul", parts: [{ constant: "2\u03C0" }, { symbol: "r" }] }], bottom: [{ symbol: "T" }] }
      },
      {
        lhs: { symbol: "T" },
        rhs: { type: "frac", top: [{ type: "mul", parts: [{ constant: "2\u03C0" }, { symbol: "r" }] }], bottom: [{ symbol: "v" }] }
      }
    ],
    wordProblems: [
      { text: "A satellite orbits Earth at a radius of 7000 km with a period of 5400 s. What is its orbital speed?", formIndex: 0 },
      { text: "A satellite orbits at 7500 m/s at a radius of 6800 km. What is its orbital period?", formIndex: 1 }
    ]
  },

  {
    id: "hubble",
    topic: "ch6",
    name: "Hubble's Law",
    questionText: "What is the formula for Hubble's Law?",
    excludeSymbols: ["f", "\u03BB", "r", "T"],
    quantities: ["distance", "speed of recession", "Hubble constant"],
    units: [
      { quantity: "distance", unit: "m", unitName: "metres" },
      { quantity: "speed of recession", unit: "m/s", unitName: "metres per second" },
      { quantity: "Hubble constant", unit: "s\u207B\u00B9", unitName: "per second" }
    ],
    forms: [
      {
        lhs: { symbol: "v" },
        rhs: { type: "mul", parts: [{ symbol: "H\u2080" }, { symbol: "d" }] }
      },
      {
        lhs: { symbol: "d" },
        rhs: { type: "frac", top: [{ symbol: "v" }], bottom: [{ symbol: "H\u2080" }] }
      }
    ],
    wordProblems: [
      { text: "A galaxy is receding at 5 \u00D7 10\u2076 m/s. The Hubble constant is 2.2 \u00D7 10\u207B\u00B9\u2078 s\u207B\u00B9. How far away is it?", formIndex: 1 }
    ]
  }
];
