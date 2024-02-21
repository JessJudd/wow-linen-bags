import { BAGS_DATA_P1 } from "../BAGS_DATA.js";
import { BAGS_DATA_P2 } from "../BAGS_DATA.js";
import { RecipeHeader } from "./RecipeHeader.jsx";

export const NewBags = ({ needBags, setNeedBags, phase }) => {
  const listBags = (phase == 2 ? BAGS_DATA_P2 : BAGS_DATA_P1).map((recipe) => {
    return (
      <div className="recipe-single menu-recipe" key={recipe.clothType}>
        <RecipeHeader
          parent="menu"
          recipe={recipe}
          needBags={needBags}
          setNeedBags={setNeedBags}
        />
      </div>
    );
  });

  let bagMenuClass = `bag-menu phase-${phase}`;

  return (
    <section className="newBags">
      <h4>Phase 1 Bags</h4>
      <div className="blurb">
        <p>Click a bag to set the amount you want to craft.</p>
      </div>
      <div className={bagMenuClass}>{listBags}</div>
    </section>
  );
};
