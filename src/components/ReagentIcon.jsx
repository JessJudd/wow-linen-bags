export const ReagentIcon = ({ count, imgUrl, variant }) => {
  let iconClass = `reagent-icon-container reagent--${variant}`;

  return (
    <figure className={iconClass}>
      <span className="reagent-count icon">＃</span>
      {/* <img className={`reagent-icon ${count > 0 ? "in-stock" : "" }`} src={imgUrl} /> */}
      <img
        className={`reagent-icon ${count > 0 ? "in-stock" : ""}`}
        src={imgUrl}
      />
    </figure>
  );
};
