import { useContext, useState } from "react";
import { InventoryContext } from "../helper/Context.jsx";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

export const Controls = ({
  useBolts,
  setUseBolts,
  showSummary,
  setShowSummary,
}) => {
  const [optionsMenuVisibility, setOptionsMenuVisibility] = useState(false);

  const { inventoryData, setInventoryData } = useContext(InventoryContext);

  const resetClothBoltCount = () => {
    console.log("inventoryData: ", inventoryData);
    if (useBolts) {
      // set cloth to 0 in inventory
    } else {
      // set bolts to 0 in inventory
    }
  };

  const toggleBolts = (event) => {
    resetClothBoltCount();
    setUseBolts((prevUseBolts) => !prevUseBolts);
  };

  const toggleSummary = (event) => {
    setShowSummary((prevShowSummary) => !prevShowSummary);
  };

  function toggleOptionsMenu() {
    setOptionsMenuVisibility(
      (prevOptionsMenuVisibility) => !prevOptionsMenuVisibility
    );
  }

  return (
    <section className="recipe-options">
      <h4 className="toggle-header">
        <span className="header-copy" onClick={() => toggleOptionsMenu()}>
          Recipe Options
        </span>
        <label
          htmlFor="options-menu"
          className="toggle-label"
          onClick={() => toggleOptionsMenu()}
        >
          {optionsMenuVisibility == true && <MdKeyboardArrowUp />}
          {optionsMenuVisibility == false && <MdKeyboardArrowDown />}
        </label>
      </h4>
      {/* <input
        className="options-menu-toggle"
        type="checkbox"
        id="options-menu"
        value={optionsMenuVisibility}
        onChange={() => toggleOptionsMenu()}
      /> */}
      {optionsMenuVisibility != false && (
        <div className="options-container">
          <form className="options-accordion options-form">
            <fieldset className="fieldset-recipe-type">
              <label className="options-form-label">
                <input
                  className="options-form-toggle"
                  value="simplified"
                  checked={!useBolts && true}
                  type="radio"
                  onChange={(event) => toggleBolts(event)}
                />
                <span className="toggle-text">Simplified Recipe</span>
              </label>
              <label className="options-form-label">
                <input
                  className="options-form-toggle"
                  value="standard"
                  checked={useBolts && true}
                  type="radio"
                  onChange={(event) => toggleBolts(event)}
                />
                <span className="toggle-text">Standard Recipe</span>
              </label>
            </fieldset>
            <fieldset className="fieldset-summary">
              <label className="options-form-label">
                <input
                  className="options-form-toggle"
                  value="show"
                  checked={showSummary && true}
                  type="radio"
                  onChange={(event) => toggleSummary(event)}
                />
                <span className="toggle-text">Show Recipe Summary</span>
              </label>
              <label className="options-form-label">
                <input
                  className="options-form-toggle"
                  value="show"
                  checked={!showSummary && true}
                  type="radio"
                  onChange={(event) => toggleSummary(event)}
                />
                <span className="toggle-text">Hide Recipe Summary</span>
              </label>
            </fieldset>
          </form>
          <div className="options-accordion options-form-legend">
            <span>
              <strong>Simple recipe:</strong> no bolts, calculates cloth
              directly to bags
              <br />
              <strong>Standard recipe:</strong> in-game recipes, calculates
              bolts to bags
            </span>
            <span>
              <strong>Recipe Summary:</strong> Toggles visibility of a summary
              of materials for the selected&nbsp;bag
            </span>
          </div>
        </div>
      )}
    </section>
  );
};
