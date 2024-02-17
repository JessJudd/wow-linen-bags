import { useContext } from "react";
import { InventoryContext } from "../helper/Context.jsx";

export const RecipeReagent = ({ reagent, count, type, useBolts }) => {
  const { inventoryData } = useContext(InventoryContext);

  let inventoryCount;

  if (useBolts && reagent.name == "cloth") {
    inventoryCount = inventoryData.bolt[reagent.type].count;
  } else {
    inventoryCount =
      reagent.name == "cloth"
        ? inventoryData[type].count
        : inventoryData[reagent.name][type].count;
  }

  function getInventoryClass() {
    let reagentClass = "";
    if (inventoryCount < count && inventoryCount > 0) {
      reagentClass = "not-craftable";
    } else if (inventoryCount == count) {
      reagentClass = "craftable";
    } else if (inventoryCount > count) {
      reagentClass = "overstock";
    }
    return reagentClass;
  }

  let reagentClassName = getInventoryClass();

  let reagentCount = inventoryCount > 0 ? `${inventoryCount}/${count}` : count;

  let imgPath =
    useBolts && reagent.name == "cloth"
      ? `bolt_${reagent.type}.jpg`
      : `${reagent.name}_${reagent.type}.jpg`;
  // let imgHref = new URL(imgPath, import.meta.url);
  // const imgUrl = imgHref.href;
  const imgUrl = imgPath;

  let reagentName =
    useBolts && reagent.name == "cloth"
      ? `Bolt of ${reagent.type} Cloth`
      : `${reagent.type} ${reagent.name}`;

  return (
    <div
      className={`reagent ${reagent.name} parent-recipe ${reagentClassName}`}
    >
      <div className="reagent-main">
        <figure className="reagent-icon-container">
          <span className="reagent-count icon">
            <span className="num">{reagentCount}</span>
          </span>
          <img
            className={`reagent-icon ${count > 0 ? "in-stock" : ""}`}
            src={imgUrl}
          />
        </figure>
        <span className="reagent-name">{`${reagentName}`}</span>
      </div>
    </div>
  );
};
