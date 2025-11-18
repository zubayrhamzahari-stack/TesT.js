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
  elements.TesT_cake = {
    color: ["#ffe6f0", "#ffb3c6", "#ff99b3"],
    behavior: behaviors.STURDYPOWDER,
    category: "food",
    state: "solid",
    density: 100,
    temp: 15,
    tempHigh: 50,
    stateHigh: "cream",
    breakInto: "crumb",
    reactions: {
      "water": { elem1: "TesT_soda", elem2: "TesT_soda"}
    }
  };

  elements.TesT_vanilla = {
    color: ["#dab830", "#ccb03f", "#bb9627"],
    behavior: behaviors.LIQUID,
    category: "food",
    state: "liquid",
    reactions: {
      "water": { elem1: "TesT_soda", elem2: "TesT_soda"},
      "TesT_cake": { elem1: "TesT_vanilla_cake", elem2: "TesT_vanilla_cake"},
      "TesT_strawberry": { elem1: "TesT_vanilla_strawberry", elem2: "TesT_vanilla_strawberry"},
      "TesT_chocolate": { elem1: "TesT_vanilla_chocolate", elem2: "TesT_vanilla_chocolate"},
      "TesT_strawberry_cake": { elem1: "TesT_vanilla_strawberry_cake", elem2: "TesT_vanilla_strawberry_cake"},
      "TesT_chocolate_cake": { elem1: "TesT_vanilla_chocolate_cake", elem2: "TesT_vanilla_chocolate_cake"}
    }
  };

  elements.TesT_strawberry = {
    color: ["#f02248", "#d41f3d", "#ca294c"],
    behavior: behaviors.LIQUID,
    category: "food",
    state: "liquid",
    reactions: {
      "water": { elem1: "TesT_soda", elem2: "TesT_soda"},
      "TesT_cake": { elem1: "TesT_strawberry_cake", elem2: "TesT_strawberry_cake"},
      "TesT_vanilla": { elem1: "TesT_vanilla_strawberry", elem2: "TesT_vanilla_strawberry"},
      "TesT_chocolate": { elem1: "TesT_strawberry_chocolate", elem2: "TesT_strawberry_chocolate"},
      "TesT_vanilla_cake": { elem1: "TesT_vanilla_strawberry_cake", elem2: "TesT_vanilla_strawberry_cake"},
      "TesT_chocolate_cake": { elem1: "TesT_strawberry_chocolate_cake", elem2: "TesT_strawberry_chocolate_cake"}
    }
  };

  elements.TesT_chocolate = {
    color: ["#4b2e05", "#6f4e37", "#3e2723"],
    behavior: behaviors.LIQUID,
    category: "food",
    state: "liquid",
    reactions: {
      "water": { elem1: "TesT_soda", elem2: "TesT_soda"},
      "TesT_cake": { elem1: "TesT_chocolate_cake", elem2: "TesT_chocolate_cake"},
      "TesT_vanilla": { elem1: "TesT_vanilla_chocolate", elem2: "TesT_vanilla_chocolate"},
      "TesT_strawberry": { elem1: "TesT_strawberry_chocolate", elem2: "TesT_strawberry_chocolate"},
      "TesT_vanilla_cake": { elem1: "TesT_vanilla_chocolate_cake", elem2: "TesT_vanilla_chocolate_cake"},
      "TesT_strawberry_cake": { elem1: "TesT_strawberry_chocolate_cake", elem2: "TesT_strawberry_chocolate_cake"}
    }
  };
  
  elements.TesT_vanilla_strawberry = {
    color: ["#ffccdd", "#ff99bb", "#ff6699"],
    behavior: behaviors.LIQUID,
    category: "food",
    state: "liquid",
    reactions: {
      "water": { elem1: "TesT_soda", elem2: "TesT_soda"},
      "TesT_cake": { elem1: "TesT_vanilla_strawberry_cake", elem2: "TesT_vanilla_strawberry_cake"},
      "TesT_chocolate": { elem1: "TesT_vanilla_strawberry_chocolate", elem2: "TesT_vanilla_strawberry_chocolate"},
      "TesT_chocolate_cake": { elem1: "TesT_vanilla_strawberry_chocolate_cake", elem2: "TesT_vanilla_strawberry_chocolate_cake"}
    }
  };

  elements.TesT_vanilla_chocolate = {
    color: ["#d2b48c", "#a0522d", "#8b4513"],
    behavior: behaviors.LIQUID,
    category: "food",
    state: "liquid",
    reactions: {
      "water": { elem1: "TesT_soda", elem2: "TesT_soda"},
      "TesT_cake": { elem1: "TesT_vanilla_chocolate_cake", elem2: "TesT_vanilla_chocolate_cake"},
      "TesT_strawberry": { elem1: "TesT_vanilla_strawberry_chocolate", elem2: "TesT_vanilla_strawberry_chocolate"},
      "TesT_strawberry_cake": { elem1: "TesT_vanilla_strawberry_chocolate_cake", elem2: "TesT_vanilla_strawberry_chocolate_cake"}
    }
  };

  elements.TesT_strawberry_chocolate = {
    color: ["#8b0000", "#cd5c5c", "#ff7f50"],
    behavior: behaviors.LIQUID,
    category: "food",
    state: "liquid",
    reactions: {
      "water": { elem1: "TesT_soda", elem2: "TesT_soda"},
      "TesT_cake": { elem1: "TesT_strawberry_chocolate_cake", elem2: "TesT_strawberry_chocolate_cake"},
      "TesT_vanilla": { elem1: "TesT_vanilla_strawberry_chocolate", elem2: "TesT_vanilla_strawberry_chocolate"},
      "TesT_vanilla_cake": { elem1: "TesT_vanilla_strawberry_chocolate_cake", elem2: "TesT_vanilla_strawberry_chocolate_cake"}
    }
  };

  elements.TesT_vanilla_strawberry_chocolate = {
    color: ["#d8bfd8", "#faab7d", "#ff69b4"],
    behavior: behaviors.LIQUID,
    category: "food",
    state: "liquid",
    reactions: {
      "water": { elem1: "TesT_soda", elem2: "TesT_soda"},
      "TesT_cake": { elem1: "TesT_vanilla_strawberry_chocolate_cake", elem2: "TesT_vanilla_strawberry_chocolate_cake"}
    }
  };
  
  // Thanks to Copilot for helping me with the reactions part of the elements on top :)
  elements.TesT_vanilla_cake = {
    color: ["#fff0b3", "#ffeb99", "#ffd966"],
    behavior: behaviors.STURDYPOWDER,
    category: "food",
    state: "solid",
    density: 100,
    temp: 15,
    tempHigh: 50,
    stateHigh: "cream",
    breakInto: "crumb",
    reactions: {
      "water": { elem1: "TesT_soda", elem2: "TesT_soda"}
    }
  };

  elements.TesT_strawberry_cake = {
    color: ["#ff4d6d", "#cc4f64", "#cc3355"],
    behavior: behaviors.STURDYPOWDER,
    category: "food",
    state: "solid",
    density: 100,
    temp: 15,
    tempHigh: 50,
    stateHigh: "cream",
    breakInto: "crumb",
    reactions: {
      "water": { elem1: "TesT_soda", elem2: "TesT_soda"}
    }
  };

  elements.TesT_chocolate_cake = {
    color: ["#8b4513", "#a0522d", "#d2691e"],
    behavior: behaviors.STURDYPOWDER,
    category: "food",
    state: "solid",
    density: 100,
    temp: 15,
    tempHigh: 50,
    stateHigh: "cream",
    breakInto: "crumb",
    reactions: {
      "water": { elem1: "TesT_soda", elem2: "TesT_soda"}
    }
  };
  
  elements.TesT_vanilla_strawberry_cake = {
    color: ["#ffdde6", "#ffb3c6", "#ff80aa"],
    behavior: behaviors.STURDYPOWDER,
    category: "food",
    state: "solid",
    density: 100,
    temp: 15,
    tempHigh: 50,
    stateHigh: "cream",
    breakInto: "crumb",
    reactions: {
      "water": { elem1: "TesT_soda", elem2: "TesT_soda"},
      "TesT_chocolate": { elem1: "TesT_vanilla_strawberry_chocolate_cake", elem2: "TesT_vanilla_strawberry_chocolate_cake"}
    }
  };
  
  elements.TesT_vanilla_chocolate_cake = {
    color: ["#e6d2b5", "#cbb38a", "#b29670"],
    behavior: behaviors.STURDYPOWDER,
    category: "food",
    state: "solid",
    density: 100,
    temp: 15,
    tempHigh: 50,
    stateHigh: "cream",
    breakInto: "crumb",
    reactions: {
      "water": { elem1: "TesT_soda", elem2: "TesT_soda"},
      "TesT_strawberry": { elem1: "TesT_vanilla_strawberry_chocolate_cake", elem2: "TesT_vanilla_strawberry_chocolate_cake"}
    }
  };

  elements.TesT_strawberry_chocolate_cake = {
    color: ["#b22222", "#cd5c5c", "#ff7f50"],
    behavior: behaviors.STURDYPOWDER,
    category: "food",
    state: "solid",
    density: 100,
    temp: 15,
    tempHigh: 50,
    stateHigh: "cream",
    breakInto: "crumb",
    reactions: {
      "water": { elem1: "TesT_soda", elem2: "TesT_soda"},
      "TesT_vanilla": { elem1: "TesT_vanilla_strawberry_chocolate_cake", elem2: "TesT_vanilla_strawberry_chocolate_cake"}
    }
  };

  elements.TesT_vanilla_strawberry_chocolate_cake = {
    color: ["#ffe6f2", "#ffb889", "#ff80b3"],
    behavior: behaviors.STURDYPOWDER,
    category: "food",
    state: "solid",
    density: 100,
    temp: 15,
    tempHigh: 50,
    stateHigh: "cream",
    breakInto: "crumb",
    reactions: {
      "water": { elem1: "TesT_soda", elem2: "TesT_soda"}
    }
  };

  elements.TesTy_sand = {
    color: ["#f4e2a1", "#e6d291", "#d2b48c"],
    behavior: behaviors.POWDER,
    category: "land",
    state: "solid",
    reactions: {
      "water": { elem1: "TesT_soda", elem2: "TesT_soda"}
    },
    conduct: 1
  };

  elements.TesTy_water = {
    color: ["#5ec4ff", "#76bee7", "#359ad4"],
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    reactions: {
      "water": { elem1: "TesT_soda", elem2: "TesT_soda"}
    }
  };

  elements.TesTy_plant = {
      color: "#7ac732",
      behavior: [
        "XX|M1%10|XX",
        "M1%10|XX|M1%10",
        "M2|M1|M2"
      ],
      category: "life",
      state: "solid",
      reactions: {
        "TesT_soda": { elem2:null, chance: 0.5, func:behaviors.FEEDPIXEL }
      }
  };

  elements.TesTy_concrete = {
    color: "#a9a9a9",
    behavior: [
      "XX|XX|XX",
      "XX|DL:TesTy_concrete%10|XX",
      "M2|M1|M2"
    ],
    category: "powders",
    state: "solid",
    reactions: {
      "water": { elem1: "TesT_soda", elem2: "TesT_soda"}
    }
  };

  elements.TesTy_wall = {
    color: "#4b4b4b",
    behavior: [
      "XX|DL|XX",
      "DL|XX|DL",
      "XX|DB|XX"
    ],
    category: "solids",
    state: "solid",
    hardness: 0.3,
    breakInto: "water",
    reactions: {
      "water": { elem1: "TesT_soda", elem2: "TesT_soda"}
    }
  };

  elements.joy = {
    color: "#fffd6a",
    behavior: behaviors.GAS,
    category: "energy",
    state: "gas"
  };

  elements.anger = {
    color: "#a80000",
    behavior: behaviors.GAS,
    category: "energy",
    state: "gas"
  };

  elements.sadness = {
    color: "#0078e9",
    behavior: behaviors.GAS,
    category: "energy",
    state: "gas"
  };

  elements.confusion = {
    color: "#919191",
    behavior: behaviors.GAS,
    category: "energy",
    state: "gas"
  };

  elements.regret = {
    color: "#ff79b7",
    behavior: behaviors.GAS,
    category: "energy",
    state: "gas"
  };

  elements.jealousy = {
    color: "#04ff26",
    behavior: behaviors.GAS,
    category: "energy",
    state: "gas"
  };

  elements.anxiety = {
    color: "#ff8420",
    behavior: behaviors.GAS,
    category: "energy",
    state: "gas"
  };

  elements.fear = {
    color: "#b800be",
    behavior: behaviors.GAS,
    category: "energy",
    state: "gas"
  };

  elements.TesT_pixel = {
    color: ["#e61b14", "#ff9b04", "#fffb11", "#4bfc34", "#34cdfc", "#5234fc", "#bd34fc", "#ff64dd"],
    behavior: behaviors.POWDER,
    category: "special",
    state: "solid",
    conduct: 1
  };
  
  elements.TesT_mood_duplicator = {
  color: "#00ffff",
  behavior: [
    "CR:jealousy|CR:fear|CR:sadness",
    "CR:anger|XX|CR:confusion",
    "CR:regret|CR:joy|CR:anxiety"
  ],
  category: "machines",
  state: "solid"
};

  elements.TesT_tempature_pump = {
  color: "#ffcc66",
  behavior: [
    "XX|HT:10|XX",     // Heats the pixel above
    "HT:10|XX|CO:10",        // Neutral center
    "XX|CO:10|XX"      // Cools the pixel below
  ],
  category: "machines",
  temp: 20,
  state: "solid",
  temp: 20,
  tempConduct: 0.5,
  density: 2000
};

  elements.TesT_egg = {
  color: "#fff1a8",
  category: "food",
  behavior: behaviors.POWDER,
  state: "solid",
  density: 400,
  breakInto: ["TesT_yolk","TesT_egg_white"]
};

elements.TesT_yolk = {
  color: "#ffb300",
  category: "food",
  behavior: behaviors.LIQUID,
  state: "liquid",
  density: 10,
  tempHigh: 60,
  stateHigh: "TesT_omelet",
  flammable: true,
  burnInto: "TesT_burnt_Food",
  burnTime: 25,
  reactions: {
    "TesT_egg_white": { elem1: "TesT_omelet", elem2: null, chance: 0.3 }
  }
};

elements.TesT_egg_white = {
  color: "#f3f2ee",
  category: "food",
  behavior: behaviors.LIQUID,
  state: "liquid",
  density: 10,
  tempHigh: 60,
  stateHigh: "TesT_omelet",
  flammable: true,
  burnInto: "TesT_burnt_Food",
  burnTime: 25,
  reactions: {
    "TesT_yolk": { elem1: "TesT_omelet", elem2: null, chance: 0.3 }
  }
};

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
    "TesT_toast": { elem1: "TesT_omelet_toast"},
    "TesT_garlic": { elem1: "TesT_garlic_omelet"},
    "TesT_steak": { elem1: "TesT_steak_omelet"},
    "TesT_chopped_garlic": { elem1: "TesT_garlic_omelet"},
    "TesT_steak_chop": { elem1: "TesT_steak_omelet"},
    "TesT_garlic_steak": { elem1: "TesT_garlic_steak_omelet"},
    "TesT_garlic_toast": { elem1: "TesT_garlic_omelet_toast"},
    "TesT_steak_toast": { elem1: "TesT_steak_omelet_toast"},
    "TesT_garlic_steak_toast": { elem1: "TesT_garlic_steak_omelet_toast"}
  }
};

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
        category: "food", state: "solid",
        hardness: 0.5, 
        breakInto: "TesT_steak_chop", 
        density: 1.0, reactions: {
           "fire": { elem1: "smoke", elem2: "ash", chance: 0.5 },
           "TesT_garlic": { elem1: "TesT_garlic_steak", elem2: null, chance: 0.3 }, 
           "TesT_chopped_garlic": { elem1: "TesT_garlic_steak", elem2: null, chance: 0.4 } 
          } 
        };

    elements.TesT_steak_chop = {
        color: ["#a0522d", "#cd5c5c", "#8b0000"],
        behavior: behaviors.POWDER,
        category: "food",
        state: "solid",
        density: 1.0,
        reactions: { 
          "fire": { elem1: "smoke", elem2: "ash", chance: 0.5 },
          "TesT_garlic": { elem1: "TesT_garlic_steak", elem2: null, chance: 0.3 }, 
          "TesT_chopped_garlic": { elem1: "TesT_garlic_steak", elem2: null, chance: 0.4 } 
        } 
      };

    elements.TesT_garlic_steak = {
       color: ["#b5651d", "#ff8c00", "#cd853f"], 
       behavior: behaviors.POWDER, category: "food", 
       state: "solid", density: 1.0, reactions: {
         "fire": { elem1: "smoke", elem2: "ash", chance: 0.5 } 
        } 
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
    "TesT_steak_omelet": { elem1: "TesT_steak_omelet_toast"},
    "TesT_garlic_steak": { elem1: "TesT_garlic_steak_toast"}, 
    "TesT_garlic_steak_omelet": { elem1: "TesT_garlic_steak_omelet_toast"}
  }
};

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
};

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
};

elements.TesT_garlic_steak_toast = { 
  color: "#c0906b", 
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
  reactions: { "fire": { elem1: "smoke", elem2: "ash", chance: 0.5 }
          } 
      };

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
};

elements.TesT_garlic_omelet = {
  color: "#d8c559",
  category: "food",
  behavior: behaviors.POWDER,
  state: "solid",
  density: 350,
  tempHigh: 140,
  stateHigh: "TesT_burnt_Food",
  flammable: true,
  burnInto: "TesT_burnt_Food",
  burnTime: 40
};

elements.TesT_steak_omelet = {
  color: "#e6a96f",
  category: "food",
  behavior: behaviors.POWDER,
  state: "solid",
  density: 350,
  tempHigh: 140,
  stateHigh: "TesT_burnt_Food",
  flammable: true,
  burnInto: "TesT_burnt_Food",
  burnTime: 40
};

elements.TesT_garlic_steak_omelet = { 
  color: "#d18f5a", 
  category: "food", 
  behavior: behaviors.POWDER, 
  state: "solid", 
  density: 350, 
  tempHigh: 140, 
  stateHigh: "TesT_burnt_Food", 
  flammable: true, burnInto: "TesT_burnt_Food",
  burnTime: 40 
};

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
};

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
};

elements.TesT_garlic_steak_omelet_toast = { 
  color: "#8f6040", 
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
    "fire": { elem1: "smoke", elem2: "ash", chance: 0.5 },
    "TesT_vanilla_strawberry_chocolate_cake": { elem1: "TesT_vanilla_strawberry_chocolate_garlic_steak_omelet_cake_toast" }
  } 
};

elements.TesT_vanilla_strawberry_chocolate_garlic_steak_omelet_cake_toast = {
  color: ["#e49560", "#ffb889", "#fd8f8c"
  ],
  category: "food",
  behavior: behaviors.POWDER,
  state: "solid",
  density: 600,
  tempHigh: 100,
  stateHigh: "TesT_burnt_Food",
  hardness: 0.2,
  breakInto: "crumb",
  flammable: true,
  burnInto: "ash",
  burnTime: 20,
  reactions: {  "fire": { elem1: "smoke", elem2: "ash", chance: 0.5 }
  }
};

elements.TesT_burnt_Food = {
  color: "#3a2e20",
  category: "food",
  behavior: behaviors.POWDER,
  state: "solid",
  density: 500,
  flammable: false
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
            "water": { elem1: "bleach", elem2: "bleach"},
            "dirty_water": { elem1: "bleach", elem2: "bleach"}
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
        reactions: { "water": { elem1: "sauce", elem2: "sauce"} }
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

    elements.apk = {
        color: "#ff6f00",
        behavior: [
          "CR:smoke%5|XX|CR:smoke%5",
          "XX|XX|XX",
          "XX|XX|XX"
        ],
        category: "testing",
        state: "solid"
    };

    elements.TesT_soda = {
        color: "#7c3b10",
        behavior: behaviors.LIQUID,
        category: "testing",
        state: "liquid",
        temp: 15,
        reactions: {
          "sugar_water": { elem1: "TesT_soda", elem2: "TesT_gas", chance: 1 },
          "seltzer": { elem1: "TesT_soda", elem2: "TesT_gas", chance: 1 },
          "sugar": { elem1: "TesT_soda", elem2: "TesT_gas", chance: 1 }
        }
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
