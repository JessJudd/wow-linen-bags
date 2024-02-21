import { useState, createContext } from "react";

import { Header } from "./components/Header.jsx";
import { Inventory } from "./components/Inventory.jsx";
import { Crafting } from "./components/Crafting.jsx";
import { Footer } from "./components/Footer.jsx";

import "./App.scss";

import { InventoryContext } from "./helper/Context.jsx";

function App() {
  let inv_p1 = {
    linen: {
      count: 0,
    },
    wool: {
      count: 0,
    },
    silk: {
      count: 0,
    },
    bolt: {
      linen: {
        count: 0,
      },
      wool: {
        count: 0,
      },
      silk: {
        count: 0,
      },
    },
    leather: {
      heavy: {
        count: 0,
      },
    },
    thread: {
      coarse: {
        count: 0,
      },
      fine: {
        count: 0,
      },
    },
  };
  let inv_p2 = {
    mageweave: {
      count: 0,
    },
    bolt: {
      mageweave: {
        count: 0,
      },
    },
    enchanted: {
      count: 0,
    },
    dust: {
      vision: {
        count: 0,
      },
    },
    thread: {
      silken: {
        count: 0,
      },
    },
  };

  let bags_p1 = {
    linen: {
      count: 0,
    },
    wool: {
      count: 0,
    },
    silk: {
      count: 0,
    },
  };
  let bags_p2 = {
    mageweave: {
      count: 0,
    },
    enchanted: {
      count: 0,
    },
  };

  const [faction, setFaction] = useState("");
  const [phase, setPhase] = useState(2); // 1 or 2
  const [inventoryData, setInventoryData] = useState(inv_p2);
  const [needBags, setNeedBags] = useState(bags_p2);
  const [useBolts, setUseBolts] = useState(false);

  function handleChangeFaction(event) {
    setFaction(event.target.className);
  }

  function handleSetPhase(phaseNum) {
    setPhase(phaseNum);
    if (phaseNum == 2) {
      setInventoryData(inv_p2);
      setNeedBags(bags_p2);
    } else {
      setInventoryData(inv_p1);
      setNeedBags(bags_p1);
    }
  }

  function resetAll() {
    // console.log('% RESET INVENTORY %');

    setInventoryData(phase == 2 ? inv_p2 : inv_p1);
  }

  let factionClass = faction != "" ? `faction ${faction}` : "";

  console.log("<- app rendered ->");

  return (
    <InventoryContext.Provider value={{ inventoryData, setInventoryData }}>
      <main className={factionClass}>
        <Header
          setFaction={setFaction}
          faction={faction}
          phase={phase}
          handleSetPhase={handleSetPhase}
        />
        <div className={`bag-calc`}>
          <div className="bag-calc-inner">
            <Inventory resetAll={resetAll} useBolts={useBolts} phase={phase} />
            <Crafting
              needBags={needBags}
              setNeedBags={setNeedBags}
              inventoryData={inventoryData}
              useBolts={useBolts}
              setUseBolts={setUseBolts}
              phase={phase}
            />
          </div>
        </div>
        <Footer />
      </main>
    </InventoryContext.Provider>
  );
}

export default App;
