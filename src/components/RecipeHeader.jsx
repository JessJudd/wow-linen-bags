import { useContext } from "react";
import { InventoryContext } from "../helper/Context.jsx";
import { MdClose, MdAdd } from "react-icons/md";

export const RecipeHeader = ({
  parent,
  recipe,
  needBags, //needBags[recipe.clothType].count
  setNeedBags,
}) => {
  const { bagName, clothType, reagents } = recipe;
  const bagCount = needBags[clothType].count;
  const { inventoryData } = useContext(InventoryContext);

  let imgPath = `../assets/${bagName}_${clothType}.jpg`;
  let imgHref = new URL(imgPath, import.meta.url);
  // const imgUrl = imgHref.href;
  let publicImg = `${bagName}_${clothType}.jpg`;
  const imgUrl = publicImg;

  function addBag(recipe) {
    const { clothType } = recipe;

    setNeedBags((prevNeedBags) => ({
      ...prevNeedBags,
      [clothType]: {
        count: parseInt(prevNeedBags[clothType].count) + 1,
      },
    }));
  }
  function resetBagCount() {
    setNeedBags((prevNeedBags) => ({
      ...prevNeedBags,
      [recipe.clothType]: {
        count: 0,
      },
    }));
  }
  const handleSetBagCount = (event) => {
    const { name, value } = event.target;

    setNeedBags((prevNeedBags) => ({
      ...prevNeedBags,
      [name]: {
        count: value,
      },
    }));
  };
  function getCraftableFromInventory() {
    let inventory = inventoryData[clothType].count;
    let clothPerBag = reagents[0].count;
    return Math.floor(inventory / clothPerBag);
  }

  const bagInput = (
    <input
      id={clothType}
      className="count-input"
      name={clothType}
      type="number"
      value={bagCount}
      onChange={(e) => handleSetBagCount(e)}
    />
  );

  const bagReset = (
    <span className="reset-bag-count-icon" onClick={resetBagCount}>
      <MdClose color="red" size="1.5em" />
    </span>
  );

  let craftableFromInventory = getCraftableFromInventory();
  const bagCountDisplay =
    parent == "recipe" && craftableFromInventory > 0
      ? `(${craftableFromInventory}) ${bagCount}`
      : bagCount;

  let displayBagName =
    clothType != "enchanted" ? bagName : `Mageweave ${bagName}`;

  return (
    <div className="recipe-header">
      <div
        className="recipe-icon-container"
        onClick={parent == "menu" ? () => addBag(recipe) : undefined}
      >
        <span className="bag-count">
          <span className="num">{bagCountDisplay}</span>
        </span>
        <img className="recipe-icon" src={imgUrl} />
      </div>

      <span
        className="recipe-name"
        onClick={parent == "menu" ? () => addBag(recipe) : undefined}
      >
        {clothType} {displayBagName}
      </span>

      {parent == "menu" && bagCount > 0 && (
        <>
          {bagInput}
          {bagReset}
        </>
      )}
    </div>
  );
};
