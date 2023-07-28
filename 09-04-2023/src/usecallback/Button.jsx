import React from "react";

const Button = ({ handel, children }) => {
  console.log(`rendering Button ${children}`);
  return (
    <div>
      <button onClick={handel}>{children}</button>
    </div>
  );
};

export default React.memo(Button);
