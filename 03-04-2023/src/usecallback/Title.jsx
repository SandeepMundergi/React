import React from "react";

const Title = () => {
  console.log("Title is rendering");
  return <div>Title</div>;
};

export default React.memo(Title);
