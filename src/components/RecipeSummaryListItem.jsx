import { useContext } from "react";
import { InventoryContext } from "../helper/Context.jsx";

export const RecipeSummaryListItem = ({ reagent, summaryCount, useBolts }) => {
  const { inventoryData } = useContext(InventoryContext);

  const { name, type } = reagent;

  let replaceCloth = reagent.name == "cloth" && useBolts == true ? true : false;

  let inventoryCount;
  let listItemName;

  if (replaceCloth) {
    inventoryCount = inventoryCount = inventoryData.bolt[type].count;
    listItemName = `Bolt of ${type == "wool" ? "woolen" : type} Cloth`;
  } else {
    inventoryCount =
      name == "cloth"
        ? inventoryData[type].count
        : inventoryData[name][type].count;
    listItemName = `${type} ${name}`;
  }

  let count = <span className="inventory-count">({inventoryCount})</span>;

  return (
    <li className="summary-list-item caps">
      {listItemName}
      {inventoryCount > 0 && count}
      <span className="count-border"></span>
      <span className="count">x{summaryCount}</span>
    </li>
  );
};
