import { MdClose, MdPlusOne } from "react-icons/md";
import { useContext } from "react";
import { InventoryContext } from "../helper/Context.jsx";

export const InventoryReagent = ({ count, parent, reagent, type }) => {
  const { inventoryData, setInventoryData } = useContext(InventoryContext);
  let inventoryCount =
    reagent.name == "cloth"
      ? inventoryData[type].count
      : inventoryData[reagent.name][type].count;

  let imgPath = `../assets/${reagent.name}_${reagent.type}.jpg`;
  let imgHref = new URL(imgPath, import.meta.url);
  // const imgUrl = imgHref.href;
  let publicImg = `${reagent.name}_${reagent.type}.jpg`;
  console.log("publicImg: ", publicImg);
  const imgUrl = publicImg;

  function addReagent(name, type) {
    let property;

    if (name == "cloth") {
      property = type;
      setInventoryData((prevInventoryData) => ({
        ...prevInventoryData,
        [property]: {
          count: prevInventoryData[property].count++,
        },
      }));
    } else {
      property = name;
      setInventoryData((prevInventoryData) => ({
        ...prevInventoryData,
        [property]: {
          ...prevInventoryData[name],
          [type]: {
            count: prevInventoryData[name][type].count++,
          },
        },
      }));
    }
  }

  function setReagentCount(name, type, value) {
    if (name == "cloth") {
      setInventoryData((prevInventoryData) => ({
        ...prevInventoryData,
        [type]: {
          count: value,
        },
      }));
    } else {
      setInventoryData((prevInventoryData) => ({
        ...prevInventoryData,
        [name]: {
          ...prevInventoryData[name],
          [type]: {
            count: value,
          },
        },
      }));
    }
  }

  const handleChange = (event) => {
    const { name, id, value } = event.target;
    setReagentCount(name, id, value);
  };

  let reagentOff =
    parent == "menu" && inventoryCount > 0 ? `add-reagent-off` : "";

  let tooltip = parent == "menu" ? `tooltip` : "";

  console.log("render inventoryReagent");

  return (
    <div
      className={`reagent ${reagent.name} parent-${parent} ${reagentOff} ${tooltip}`}
      data-text={`${reagent.type} ${reagent.name}`}
    >
      <div
        className="reagent-main"
        onClick={
          parent == "menu" && inventoryCount == 0
            ? () => setReagentCount(reagent.name, reagent.type, 1)
            : undefined
        }
      >
        <figure
          className="reagent-icon-container"
          onClick={
            parent == "inventory"
              ? () => addReagent(reagent.name, reagent.type)
              : undefined
          }
        >
          {parent == "inventory" && (
            <span className="reagent-count icon">
              <span className="num">{inventoryCount}</span>
            </span>
          )}
          <img
            className={`reagent-icon ${inventoryCount > 0 ? "in-stock" : ""}`}
            src={imgUrl}
          />
        </figure>
        <span className="reagent-name">{`${reagent.type} ${reagent.name}`}</span>
      </div>
      {parent == "inventory" && (
        <div className="reagent-modifiers">
          <input
            id={type}
            className="count-input"
            name={reagent.name}
            type="number"
            value={inventoryCount}
            onChange={(e) => handleChange(e)}
          />
          <span
            className="reset-bag-count-icon inv"
            onClick={() => setReagentCount(reagent.name, reagent.type, 0)}
          >
            <MdClose color="red" size="1.25em" />
          </span>
        </div>
      )}
    </div>
  );
};
