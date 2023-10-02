import PropTypes from "prop-types";
import React from "react";

export const IconBarGraph = ({ color = "white", className }) => {
  return (
    <svg
      className={`icon-bar-graph ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M10 2H15V22H10V2ZM12 4V20H13V4H12Z"
        fill={color}
        fillRule="evenodd"
      />
      <path className="path" clipRule="evenodd" d="M3 8H8V22H3V8ZM5 10V20H6V10H5Z" fill={color} fillRule="evenodd" />
      <path
        className="path"
        clipRule="evenodd"
        d="M22 11H17V22H22V11ZM19 20V13H20V20H19Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

IconBarGraph.propTypes = {
  color: PropTypes.string,
};
