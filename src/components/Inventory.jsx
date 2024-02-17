import { useContext, useState } from "react";
import { InventoryContext } from "../helper/Context.jsx";

import { REAGENTS_P1 } from "../ALL_REAGENTS.js";
import { REAGENTS_P2 } from "../ALL_REAGENTS.js";

import { InventoryReagent } from "./InventoryReagent.jsx";

export const Inventory = ({ resetAll, useBolts, phase }) => {
  const { inventoryData, setInventoryData } = useContext(InventoryContext);

  // const inventoryElements = ALL_REAGENTS.map((reagent) => {
  // const inventoryElements = REAGENTS_P2.map((reagent) => {
  const inventoryElements = (phase == 2 ? REAGENTS_P2 : REAGENTS_P1).map(
    (reagent) => {
      const { name, type } = reagent;

      let inventoryCount =
        name == "cloth"
          ? inventoryData[type].count
          : inventoryData[name][type].count;

      if (
        inventoryCount >= 1 &&
        ((name == "bolt" && useBolts == true) || name != "bolt")
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

  // const reagentElements = ALL_REAGENTS.map((reagent) => {
  const reagentElements = (phase == 2 ? REAGENTS_P2 : REAGENTS_P1).map(
    (reagent) => {
      const { name, type } = reagent;

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

  return (
    <section className="inventory container">
      <h4>Inventory</h4>
      <div className="user-reagents">{inventoryElements}</div>
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
