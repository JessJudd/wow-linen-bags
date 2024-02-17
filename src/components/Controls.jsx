import { useState } from "react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

export const Controls = ({
  useBolts,
  setUseBolts,
  showSummary,
  setShowSummary,
}) => {
  const [optionsMenuVisibility, setOptionsMenuVisibility] = useState(false);

  const toggleBolts = (event) => {
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
    <section className="crafting-controls">
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
        <div className="options">
          <form className="options-form">
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
          <div className="form-legend">
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
