if (typeof categories !== "undefined" && Array.isArray(categories) && !categories.includes("testing")) {
    categories.push("testing");
}

if (typeof elements !== "undefined" && typeof behaviors !== "undefined") {
    elements.TesTy_powder = {
    color: ["#99dfff", "#b3beff", "#8687d1"],
    behavior: behaviors.POWDER,
    category: "powders",
    state: "solid",
    reactions: { "water": { elem1: "TesTy_water" } },
    density: 800
};

    elements.TesTy_solid = {
    color: ["#ff6666", "#ff4d4d", "#ff1a1a"],
    behavior: behaviors.SOLID,
    category: "solids",
    state: "solid",
    tempHigh: 100,
    stateHigh: "TesTy_liquid",
    density: 1200,
    hardness: 0.7,
    breakInto: "TesTy_powder"
};

    elements.TesTy_gas = {
    color: "#ff9999",
    behavior: behaviors.GAS,
    category: "gases",
    state: "gas",
    tempLow: 0,
    stateLow: "TesTy_water",
    density: 0.6
};

    elements.TesTy_water = {
  color: ["#00ffff", "#00ccff", "#0099ff"],
  behavior: behaviors.LIQUID,
  category: "liquids",
  state: "liquid",
  density: 1000,
  temp: 25,
  tempHigh: 100,
  stateHigh: "TesTy_gas",
  viscosity: 0.5,
  hidden: false
};
    elements.TesT_liquid = {
        color: ["#c6d402", "#eeff00", "#bdc011"],
        behavior: behaviors.LIQUID,
        category: "testing",
        state: "liquid",
        tempHigh: 150,
        stateHigh: "TesT_gas",
        tempLow: 0,
        stateLow: "TesT_wall",
        reactions: {
            "fire": { elem1: "TesT_gas", elem2: "steam", chance: 0.5 },
            "water": { elem1: "bleach" }
        },
        density: 1100,
        viscosity: 10000
    };

    elements.TesT_gas = {
        color: "#657abe",
        behavior: behaviors.GAS,
        category: "testing",
        state: "gas",
        tempLow: 10,
        stateLow: "TesT_liquid",
        reactions: {
            "chlorine": { elem1: "TesT_cell", elem2: "explosion", chance: 0.1 },
            "acid": { elem1: "radiation", elem2: "smoke", chance: 0.1 }
        },
        density: 0.5
    };

    elements.TesT_powder = {
        color: ["#2c705c", "#3a8b6c", "#31684f"],
        behavior: behaviors.POWDER,
        category: "testing",
        state: "solid",
        reactions: { "water": { elem1: "sauce" } }
    };

    elements.TesT_wall = {
        color: "#7c107c",
        behavior: behaviors.WALL,
        category: "testing",
        state: "solid",
        reactions: { "lava": { elem1: "stone" } },
        hardness: 0.5,
        breakInto: "TesT_powder"
    };

    //  TesT_seed → sprouts into TesT_sprout
elements.TesT_seed = {
  color: ["#8B4513", "#A0522D", "#CD853F"],
  behavior: behaviors.POWDER,
  category: "testing",
  state: "solid",
  density: 0.9,
  tick: function(pixel) {
    if (Math.random() < 0.01 && isTouching(pixel, "water")) {
      changePixel(pixel, "TesT_sprout");
    }
  }
};

//  TesT_sprout → grows into TesT_plant
elements.TesT_sprout = {
  color: ["#6B8E23", "#7CFC00", "#32CD32"],
  behavior: [
    "XX|CR:TesT_sprout%0.02|XX",
    "CR:TesT_sprout%0.02|XX|CR:TesT_sprout%0.02",
    "XX|CR:TesT_sprout%0.02|XX"
  ],
  category: "testing",
  state: "solid",
  density: 0.8,
  tick: function(pixel) {
    if (Math.random() < 0.005) {
      changePixel(pixel, "TesT_plant");
    }
  }
};

//  TesT_plant → matures into TesT_flower
elements.TesT_plant = {
  color: ["#228B22", "#2E8B57", "#006400"],
  behavior: [
    "XX|CR:TesT_plant%0.02|XX",
    "CR:TesT_plant%0.02|XX|CR:TesT_plant%0.02",
    "XX|CR:TesT_plant%0.02|XX"
  ],
  category: "testing",
  state: "solid",
  density: 0.8,
  tempHigh: 80,
  stateHigh: "ash",
  reactions: {
    "fire": { elem1: "smoke", elem2: "ash", chance: 0.5 }
  },
  tick: function(pixel) {
    if (Math.random() < 0.003) {
      changePixel(pixel, "TesT_flower");
    }
    if (Math.random() < 0.003) {
      changePixel(pixel, "wood");
    }
  }
};

//  TesT_flower → eventually decays
elements.TesT_flower = {
  color: ["#FF69B4", "#FFC0CB", "#FFB6C1"],
  behavior: [
    "XX|CR:TesT_flower%0.01|XX",
    "CR:TesT_flower%0.01|XX|CR:TesT_flower%0.01",
    "XX|CR:TesT_flower%0.01|XX"
  ],
  category: "testing",
  state: "solid",
  density: 0.7,
  tick: function(pixel) {
    if (Math.random() < 0.002) {
      changePixel(pixel, "TesT_dead_plant");
    }
  }
};

//  TesT_dead_plant → breaks down into dust
elements.TesT_dead_plant = {
  color: ["#5A4D41", "#4B3F36", "#3C322B"],
  behavior: behaviors.POWDER,
  category: "testing",
  state: "solid",
  density: 0.6,
  tick: function(pixel) {
    if (Math.random() < 0.01) {
      changePixel(pixel, "dust");
    }
  }
};

    elements.TesT_cell = {
        color: ["#88cc88", "#77bb77", "#99dd99"],
        behavior: [
        "XX|CR:TesT_cell%0.05|XX",
        "CR:TesT_cell%0.05|XX|CR:TesT_cell%0.05",
        "XX|CR:TesT_cell%0.05|XX"
    ],
        category: "testing",
        state: "solid",
        density: 1.2,
        tempHigh: 100,
        stateHigh: "smoke",
        reactions: {
          "infection": { elem1: "TesT_mutant", chance: 0.3 },
          "TesT_cell.nutrient": { elem1: "TesT_cell", chance: 0.5 }
       },
        tick: function(pixel) {
        // Optional: simulate aging or transformation
        if (Math.random() < 0.001) {
          changePixel(pixel, "TesT_dead_cell");
        }
      }
    };
    elements.TesT_cell.nutrient = {
        color: ["#ffff66", "#ffff33", "#ffff99"],
        behavior: behaviors.POWDER,
        category: "testing",
        state: "solid",
        density: 0.8,
        reactions: {
            "TesT_cell": { elem1: "TesT_cell", elem2: null, chance: 0.5 }
        }
    };
    elements.TesT_mutant = {
        color: ["#aa00ff", "#cc33cc", "#9900cc"],
        behavior: [
        "XX|CR:TesT_mutant%0.1|XX",
        "CR:TesT_mutant%0.1|XX|CR:TesT_mutant%0.1",
        "XX|CR:TesT_mutant%0.1|XX"
    ],
        category: "testing",
         state: "solid",
        density: 1.5,
        tempHigh: 80,
        stateHigh: "smoke",
        reactions: {
            "TesT_cell": { elem1: "TesT_mutant", chance: 0.4 },
            "TesT_cell.nutrient": { elem1: "TesT_mutant", chance: 0.2 }
        },
        tick: function(pixel) {
        if (Math.random() < 0.002) {
          changePixel(pixel, "explosion");
           }
       }
   };
    
    elements.TesT_dead_cell = {
        color: ["#555555", "#666666", "#444444"],
        behavior: behaviors.POWDER,
        category: "testing",
        state: "solid",
        density: 1.0,
        tick: function(pixel) {
          if (Math.random() < 0.01) {
            changePixel(pixel, "dust");
           }
       }
   };
}
