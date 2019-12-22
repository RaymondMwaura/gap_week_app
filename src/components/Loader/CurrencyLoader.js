import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const LoadSpinner = () => {
  const center = {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "100"
  };

  const bg = {
    positon: "relative",
    height: "271px",
    width: "470px"
  };
  return (
    <div style={bg}>
      <Loader style={center} type="TailSpin" color="#5CB85C" />
    </div>
  );
};
export default LoadSpinner;
