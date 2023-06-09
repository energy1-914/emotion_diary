import React from "react";

const MyButton = ({ onClick, type, text }) => {
  const btnType = ["positive", "negative"].includes(type) ? type : "default";
  return (
    <button
      className={["MyButton", `MyButton_${btnType}`].join(" ")}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

MyButton.defalutProps = {
  type: "default",
};

export default React.memo(MyButton);
 