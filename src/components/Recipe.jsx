import { useContext } from "react";
import { InventoryContext } from "../helper/Context.jsx";
import { MdClose } from "react-icons/md";

import { RecipeHeader } from "./RecipeHeader.jsx";
import { RecipeReagent } from "./RecipeReagent.jsx";
import { RecipeSummaryListItem } from "./RecipeSummaryListItem.jsx";

export const Recipe = ({
  recipe,
  needBags,
  setNeedBags,
  showSummary,
  useBolts,
}) => {
  const { clothType, bagName, reagents } = recipe;
  const { inventoryData } = useContext(InventoryContext);

  const bagCount = needBags[clothType].count;

  function craftBagsFromInv() {
    let inventory = inventoryData[clothType].count;
    let clothPerBag = reagents[0].count;
    return Math.floor(inventory / clothPerBag);
  }

  const recipeReagents = reagents.map((reagent) => {
    // if name is cloth and useBolts is true
    let replaceCloth =
      reagent.name == "cloth" && useBolts == true ? true : false;

    return (
      <RecipeReagent
        key={replaceCloth ? reagent.bolt.id : reagent.id}
        reagent={reagent}
        recipe={recipe}
        count={
          replaceCloth
            ? reagent.bolt.count * bagCount
            : reagent.count * bagCount
        } // reagent per recipe * amount to craft
        type={reagent.type}
        useBolts={useBolts}
      />
    );
  });

  const reagentList = reagents.map((reagent) => {
    let replaceCloth =
      reagent.name == "cloth" && useBolts == true ? true : false;
    return (
      <RecipeSummaryListItem
        key={reagent.type}
        reagent={reagent}
        summaryCount={
          replaceCloth
            ? reagent.bolt.count * bagCount
            : reagent.count * bagCount
        }
        useBolts={useBolts}
      />
    );
  });

  let craftableCount = craftBagsFromInv(recipe);
  let showCraftableCount = craftableCount > 0 && (
    <span className="inventory-count">({craftableCount})</span>
  );
  let showBagCount = bagCount > 0 && <span className="count">x{bagCount}</span>;
  let recipeClass = `grid-flex-wrapper recipe-single recipe summary-${showSummary}`;
  let reagentClass = `recipe-reagents reagent-count-${reagents.length}`;

  return (
    <div className={recipeClass}>
      <div className="grid-flex-column recipe-main">
        <RecipeHeader
          parent="recipe"
          recipe={recipe}
          needBags={needBags}
          setNeedBags={setNeedBags}
        />

        <div className={reagentClass}>{recipeReagents}</div>
      </div>

      {showSummary != false && (
        <div className="grid-flex-column recipe-summary">
          <h4 className="summary-title caps">
            {clothType} {bagName} {showCraftableCount}
            <span className="count-border"></span>
            {showBagCount}
          </h4>
          <ul className="summary-list">{reagentList}</ul>
        </div>
      )}
    </div>
  );
};
