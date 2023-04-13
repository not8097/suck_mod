require("alib");
require("dead");
const lib = require("alib");
const mySound = lib.loadSound("hit");
// listen for the event where a unit is destroyed
Events.on(UnitDamageEvent, event => {
    mySound.at(event.unit.x, event.unit.y);
    }
  )
