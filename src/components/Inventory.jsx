import { useContext, useState } from "react";
import { InventoryContext } from "../helper/Context.jsx";

import { REAGENTS_P1 } from "../ALL_REAGENTS.js";
import { REAGENTS_P2 } from "../ALL_REAGENTS.js";

import { InventoryReagent } from "./InventoryReagent.jsx";

export const Inventory = ({ resetAll, useBolts, phase }) => {
  const { inventoryData, setInventoryData } = useContext(InventoryContext);

  const getInventorySum = () => {
    let sum = 0;
    for (const prop in inventoryData) {
      let reagentCount = inventoryData[prop].count;
      if (reagentCount != undefined) {
        sum += reagentCount;
      } else {
        for (const type in inventoryData[prop]) {
          reagentCount = inventoryData[prop][type].count;
          sum += reagentCount;
        }
      }
    }
    return sum;
  };

  const inventoryElements = (phase == 2 ? REAGENTS_P2 : REAGENTS_P1).map(
    (reagent) => {
      const { name, type } = reagent;

      let inventoryCount =
        name == "cloth"
          ? inventoryData[type].count
          : inventoryData[name][type].count;

      let standardRecipe = name != "cloth" && useBolts == true;
      let simpleRecipe = name != "bolt" && useBolts == false;

      if (
        inventoryCount >= 1 &&
        ((name == "bolt" && useBolts == true) || name != "bolt") &&
        (standardRecipe || simpleRecipe)
      ) {
        return (
          <InventoryReagent
            key={reagent.id}
            count={inventoryCount}
            parent="inventory"
            reagent={reagent}
            type={type}
          />
        );
      }
    }
  );

  const reagentElements = (phase == 2 ? REAGENTS_P2 : REAGENTS_P1).map(
    (reagent) => {
      const { name, type } = reagent;

      console.log("name: ", name);
      console.log("type: ", type);

      let reagentCount =
        name == "cloth"
          ? inventoryData[type].count
          : inventoryData[name][type].count;

      let standardRecipe = name != "cloth" && useBolts == true;
      let simpleRecipe = name != "bolt" && useBolts == false;

      if (standardRecipe || simpleRecipe) {
        return (
          <InventoryReagent
            key={reagent.id}
            count={reagentCount}
            parent="menu"
            reagent={reagent}
            type={type}
          />
        );
      }
    }
  );

  let inventorySum = getInventorySum();

  console.log("<-- rendering INVENTORY -->");

  return (
    <section className="inventory container">
      <h4>Inventory</h4>
      <div className="user-reagents">
        {inventoryElements}
        {inventorySum == 0 && (
          <span className="empty-placeholder">
            Your inventory reagents will appear here.
          </span>
        )}
      </div>
      <p>Click the reagents to add to your inventory.</p>
      <div className="all-reagents">{reagentElements}</div>
      <div className="inventory-controls">
        <button className="reset-inv" onClick={resetAll}>
          Reset All
        </button>
      </div>
    </section>
  );
};
