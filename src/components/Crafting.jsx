import { useState } from "react";

import { BAGS_DATA_P1 } from "../BAGS_DATA.js";
import { BAGS_DATA_P2 } from "../BAGS_DATA.js";

import { NewBags } from "./NewBags.jsx";
import { Controls } from "./Controls.jsx";
import { Recipe } from "./Recipe.jsx";

export const Crafting = ({
  needBags,
  setNeedBags,
  useBolts,
  setUseBolts,
  phase,
}) => {
  const [showSummary, setShowSummary] = useState(true);

  let recipeElements;

  if (phase == 2) {
    recipeElements = BAGS_DATA_P2.map((recipe) => {
      let bagCount = needBags[recipe.clothType].count;
      return (
        bagCount > 0 && (
          <Recipe
            key={recipe.id}
            recipe={recipe}
            parent="recipe"
            needBags={needBags}
            showSummary={showSummary}
            useBolts={useBolts}
          />
        )
      );
    });
  } else {
    recipeElements = BAGS_DATA_P1.map((recipe) => {
      let bagCount = needBags[recipe.clothType].count;
      return (
        bagCount > 0 && (
          <Recipe
            key={recipe.id}
            recipe={recipe}
            parent="recipe"
            needBags={needBags}
            showSummary={showSummary}
            useBolts={useBolts}
          />
        )
      );
    });
  }

  let recipesClass = `recipes phase-${phase}`;

  return (
    <section className="crafting container">
      <NewBags needBags={needBags} setNeedBags={setNeedBags} phase={phase} />
      <Controls
        useBolts={useBolts}
        setUseBolts={setUseBolts}
        showSummary={showSummary}
        setShowSummary={setShowSummary}
      />
      <div className={recipesClass}>
        <h4>Recipes</h4>
        {recipeElements}
      </div>
    </section>
  );
};
