if (typeof categories !== "undefined" && Array.isArray(categories) && !categories.includes("testing")) {
    categories.push("testing");
}
function myisTouching(pixel, elementName) {
  // Example implementation
  for (const offset of [[1,0], [-1,0], [0,1], [0,-1]]) {
    const x = pixel.x + offset[0];
    const y = pixel.y + offset[1];
    const neighbor = pixelMap[x]?.[y];
    if (neighbor && neighbor.element === elementName) {
      return true;
    }
  }
  return false;
}
if (typeof elements !== "undefined" && typeof behaviors !== "undefined") {
  elements.TesT_egg = {
  color: "#fff1a8",
  category: "food",
  behavior: behaviors.POWDER,
  state: "solid",
  density: 400,
  breakInto: ["TesT_yolk","TesT_egg_white"]
}

elements.TesT_yolk = {
  color: "#ffb300",
  category: "food",
  behavior: behaviors.LIQUID,
  state: "liquid",
  density: 10,
  tempHigh: 75,
  stateHigh: "TesT_omelet",
  flammable: true,
  burnInto: "TesT_burnt_Food",
  burnTime: 25,
  reactions: {
    "TesT_egg_white": { elem1: "TesT_omelet", elem2: null, chance: 0.3 }
  }
}

elements.TesT_egg_white = {
  color: "#f3f2ee",
  category: "food",
  behavior: behaviors.LIQUID,
  state: "liquid",
  density: 10,
  tempHigh: 75,
  stateHigh: "TesT_omelet",
  flammable: true,
  burnInto: "TesT_burnt_Food",
  burnTime: 25,
  reactions: {
    "TesT_yolk": { elem1: "TesT_omelet", elem2: null, chance: 0.3 }
  }
}

elements.TesT_omelet = {
  color: "#ffd46b",
  category: "food",
  behavior: behaviors.POWDER,
  state: "solid",
  density: 700,
  tempHigh: 140,
  stateHigh: "TesT_burnt_Food",
  flammable: true,
  burnInto: "TesT_burnt_Food",
  burnTime: 40,
  reactions: {
    "TesT_garlic": { elem1: "TesT_garlic_omelet", elem2: null, chance: 0.2 },
    "TesT_steak": { elem1: "TesT_steak_omelet", elem2: null, chance: 0.2 },
    "TesT_chopped_garlic": { elem1: "TesT_garlic_omelet", elem2: null, chance: 0.3 },
    "TesT_steak_chop": { elem1: "TesT_steak_omelet", elem2: null, chance: 0.3 }
  }
}

elements.TesT_garlic = {
        color: ["#987c9b", "#9a75a1", "#d895cf"],
        behavior: behaviors.POWDER,
        category: "food",
        state: "solid",
        hardness: 0.3,
        breakInto: "TesT_chopped_garlic",
        density: 1.0,
        reactions: { "fire": { elem1: "smoke", elem2: "ash", chance: 0.5 } }
    };

    elements.TesT_chopped_garlic = {
        color: ["#7f5f7d", "#8b5e8b", "#b070b0"],
        behavior: behaviors.POWDER,
        category: "food",
        state: "solid",
        density: 1.0,
        reactions: { "fire": { elem1: "smoke", elem2: "ash", chance: 0.5 } }
    };

    elements.TesT_steak = {
        color: ["#d2691e", "#ff7f50", "#8b4513"],
        behavior: behaviors.POWDER,
        category: "food",
        state: "solid",
        hardness: 0.5,
        breakInto: "TesT_steak_chop",
        density: 1.0,
        reactions: { "fire": { elem1: "smoke", elem2: "ash", chance: 0.5 } }
    };
    
    elements.TesT_steak_chop = {
        color: ["#a0522d", "#cd5c5c", "#8b0000"],
        behavior: behaviors.POWDER,
        category: "food",
        state: "solid",
        density: 1.0,
        reactions: { "fire": { elem1: "smoke", elem2: "ash", chance: 0.5 } }
    };

elements.TesT_bread = {
  color: "#f5deb3",
  category: "food",
  behavior: behaviors.POWDER,
  state: "solid",
  density: 300,
  tempHigh: 50,
  stateHigh: "TesT_toast",
  hardness: 0.2,
  breakInto: "crumb",
  flammable: true,
  burnInto: "ash",
  burnTime: 30,
  reactions: {
    "fire": { elem1: "smoke", elem2: "ash", chance: 0.5 }
  }
}

elements.TesT_toast = {
  color: "#d2b48c",
  category: "food",
  behavior: behaviors.POWDER,
  state: "solid",
  density: 300,
  tempHigh: 100,
  stateHigh: "TesT_burnt_Food",
  hardness: 0.2,
  breakInto: "crumb",
  flammable: true,
  burnInto: "ash",
  burnTime: 20,
  reactions: {
    "fire": { elem1: "smoke", elem2: "ash", chance: 0.5 },
    "TesT_garlic": { elem1: "TesT_garlic_toast"},
    "TesT_chopped_garlic": { elem1: "TesT_garlic_toast"},
    "TesT_steak": { elem1: "TesT_steak_toast"},
    "TesT_steak_chop": { elem1: "TesT_steak_toast"},
    "TesT_omelet": { elem1: "TesT_omelet_toast"},
    "TesT_garlic_omelet": { elem1: "TesT_garlic_omelet_toast"},
    "TesT_steak_omelet": { elem1: "TesT_steak_omelet_toast"}
  }
}
elements.TesT_garlic_toast = {
  color: "#c4a484",
  category: "food",
  behavior: behaviors.POWDER,
  state: "solid",
  density: 350,
  tempHigh: 100,
  stateHigh: "TesT_burnt_Food",
  hardness: 0.2,
  breakInto: "crumb",
  flammable: true,
  burnInto: "ash",
  burnTime: 20,
  reactions: {
    "fire": { elem1: "smoke", elem2: "ash", chance: 0.5 }
  }
}

elements.TesT_steak_toast = {
  color: "#b5651d",
  category: "food",
  behavior: behaviors.POWDER,
  state: "solid",
  density: 400,
  tempHigh: 100,
  stateHigh: "TesT_burnt_Food",
  hardness: 0.2,
  breakInto: "crumb",
  flammable: true,
  burnInto: "ash",
  burnTime: 20,
  reactions: {
    "fire": { elem1: "smoke", elem2: "ash", chance: 0.5 }
  }
}

elements.TesT_omelet_toast = {
  color: "#cfa15a",
  category: "food",
  behavior: behaviors.POWDER,
  state: "solid",
  density: 450,
  tempHigh: 100,
  stateHigh: "TesT_burnt_Food",
  hardness: 0.2,
  breakInto: "crumb",
  flammable: true,
  burnInto: "ash",
  burnTime: 20,
  reactions: {
    "fire": { elem1: "smoke", elem2: "ash", chance: 0.5 }
  }
}

elements.TesT_garlic_omelet_toast = {
  color: "#a8904c",
  category: "food",
  behavior: behaviors.POWDER,
  state: "solid",
  density: 500,
  tempHigh: 100,
  stateHigh: "TesT_burnt_Food",
  hardness: 0.2,
  breakInto: "crumb",
  flammable: true,
  burnInto: "ash",
  burnTime: 20,
  reactions: {
    "fire": { elem1: "smoke", elem2: "ash", chance: 0.5 }
  }
}

elements.TesT_steak_omelet_toast = {
  color: "#b0703f",
  category: "food",
  behavior: behaviors.POWDER,
  state: "solid",
  density: 550,
  tempHigh: 100,
  stateHigh: "TesT_burnt_Food",
  hardness: 0.2,
  breakInto: "crumb",
  flammable: true,
  burnInto: "ash",
  burnTime: 20,
  reactions: {
    "fire": { elem1: "smoke", elem2: "ash", chance: 0.5 }
  }
}

elements.TesT_garlic_omelet = {
  color: "#d8c559",
  category: "food",
  behavior: behaviors.POWDER,
  state: "solid",
  density: 750,
  tempHigh: 140,
  stateHigh: "TesT_burnt_Food",
  flammable: true,
  burnInto: "TesT_burnt_Food",
  burnTime: 40
}

elements.TesT_steak_omelet = {
  color: "#e6a96f",
  category: "food",
  behavior: behaviors.POWDER,
  state: "solid",
  density: 800,
  tempHigh: 140,
  stateHigh: "TesT_burnt_Food",
  flammable: true,
  burnInto: "TesT_burnt_Food",
  burnTime: 40
}

elements.TesT_burnt_Food = {
  color: "#3a2e20",
  category: "food",
  behavior: behaviors.POWDER,
  state: "solid",
  density: 500,
  flammable: false
}

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
          if (Math.random() < 0.01 && myisTouching(pixel, "water")) {
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
          "TesT_cell_nutrient": { elem1: "TesT_cell", chance: 0.5 }
       },
        tick: function(pixel) {
        // Optional: simulate aging or transformation
        if (Math.random() < 0.001) {
          changePixel(pixel, "TesT_dead_cell");
        }
      }
    };
    elements.TesT_cell_nutrient = {
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
            "TesT_cell_nutrient": { elem1: "TesT_mutant", chance: 0.2 }
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
enabledMods.push("https://raw.githubusercontent.com/zubayrhamzahari-stack/TesT.js/main/TesT.js")
