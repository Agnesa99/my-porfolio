import React from "react";
import "./Loading.scss";

const Loading = () => {
  return (
    <div class="loading">
      <svg
        class="loader"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 340 340"
      >
        <circle cx="170" cy="170" r="160" stroke="#008b8b" />
        <circle cx="170" cy="170" r="135" stroke="#fff" />
        <circle cx="170" cy="170" r="110" stroke="#008b8b" />
        <circle cx="170" cy="170" r="85" stroke="#fff" />
      </svg>
    </div>
  );
};

export default Loading;