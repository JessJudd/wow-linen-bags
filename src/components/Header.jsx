import { useState } from "react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

export const Header = ({ faction, setFaction, phase, handleSetPhase }) => {
  const [welcomeVisibility, setWelcomeVisibility] = useState(true);

  function toggleWelcomeMessage() {
    setWelcomeVisibility((prevWelcomeVisibility) => !prevWelcomeVisibility);
  }

  let discoveryPhase = [1, 2];

  function handleChangeFaction(event) {
    // setFaction(event.target.className);
    setFaction(event.target.value);
  }

  function resetFaction() {
    setFaction("");
  }

  const tabElements = discoveryPhase.map((phaseNum) => {
    let tabClass = phaseNum == phase ? "tab-single active-phase" : "tab-single";

    return (
      <div
        key={phaseNum}
        className={tabClass}
        onClick={() => handleSetPhase(phaseNum)}
      >
        Phase&nbsp;{phaseNum}
      </div>
    );
  });

  let tabardUrl = faction == "" ? `faction_none.png` : `faction_${faction}.jpg`;

  // let tabardHref = new URL(tabardUrl, import.meta.url);
  // let tabardImg = tabardHref.href;
  let tabardImg = tabardUrl;

  let tabardClass =
    faction == ""
      ? `equipped-tabard none`
      : `tooltip equipped-tabard ${faction}`;

  return (
    <header>
      <nav>
        {/* <div className="gradient-bar"></div> */}
        <div className="nav-inner">
          <h1 className="heading">
            {faction == "alliance" ? "Sindaheri" : "Saraneth"}'s Salacious
            Satchels
          </h1>
          <span className="subheading">
            Bag Calculator | Classic World of Warcraft
          </span>
          <div className="button-wrapper faction-container">
            <label className="faction-select-label" htmlFor="factionTabard">
              Choose your faction
            </label>
            <select
              id="factionTabard"
              value={faction}
              onChange={(event) => handleChangeFaction(event)}
              name="factionTabard"
              className="faction-select"
            >
              <option value="">- none -</option>
              <option value="forsaken">Glory to the Forsaken!</option>
              <option value="horde">For the Horde</option>
              <option value="alliance">For the Alliance</option>
            </select>

            <div
              className={tabardClass}
              onClick={() => resetFaction()}
              data-text="Remove faction tabard"
            >
              {faction == "" && <img src="faction_none.png" />}
              {faction == "alliance" && <img src="faction_alliance.jpg" />}
              {faction == "horde" && <img src="faction_horde.jpg" />}
              {faction == "forsaken" && <img src="faction_forsaken.jpg" />}
            </div>
          </div>
        </div>
      </nav>
      <div className="welcome container">
        <h4 className="toggle-header">
          <span className="header-copy" onClick={() => toggleWelcomeMessage()}>
            Introducing - Season of Discovery Tailoring Calculator
          </span>
          <label
            htmlFor="options-menu"
            className="toggle-label"
            onClick={() => toggleWelcomeMessage()}
          >
            {welcomeVisibility == true && (
              <MdKeyboardArrowUp className="accordion-toggle" />
            )}
            {welcomeVisibility == false && (
              <MdKeyboardArrowDown className="accordion-toggle" />
            )}
          </label>
        </h4>
        {welcomeVisibility != false && (
          <div className="welcome-content">
            <h1>Happy Season of Discovery Phase 2!</h1>
            <p>
              Whether you are a tailor, have a friend who is a tailor or are
              just gathering materials to find a tailor in a city, this
              calculator is for you!
            </p>
            <p>
              This calculator was created to easily manage the various materials
              and recipe conversions required by tailoring to create bags,
              specifically throughout Season of Discovery.
            </p>
            <ul>
              <li>
                Recipes are organized by phase. Use the tabs across the top to
                toggle the bag recipes and inventory for each phase.
                <br />
                As Season of Discovery Phase 2 launches this February 8th, the
                calcuator is currently default to Phase 2 recipes.
              </li>
              <li>
                Craft directly from the cloth pieces, or use the{" "}
                <strong>Recipe Options</strong> to use the standard recipes with
                bolts, just like in-game.
              </li>
              <li>
                Use the Inventory to calculate how many bags you can make from
                what you have already collected, or simply choose the amount of
                bags you want to see how many materials you need, regardless of
                what is in your inventory.
              </li>
              <li>
                Includes a Recipe Summary to view an easy to read list of
                materials, which includes your inventory reagents and the amount
                needed to craft the specified amount of bags. This can be hidden
                via Recipe Options.
              </li>
              <li>
                Equip a tabard in the top right to show your faction loyalty!
                Remove the tabard to reset your color scheme.
              </li>
              <li>
                Thanks again for visiting this calculator. If you experience any
                issues or have any feedback,{" "}
                <a href="https://forms.gle/qS4NpCqDsnGE8FxC6" target="_blank">
                  please send me a message
                </a>
                .
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="header-tabs">
        <div className="tab-gutter"></div>
        {/* <div className="tab-single active-phase">Phase&nbsp;1</div>
        <div className="tab-single">Phase&nbsp;2</div> */}
        {tabElements}
      </div>
    </header>
  );
};
