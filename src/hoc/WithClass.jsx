import React from "react";
import PropTypes from "prop-types";

const WithClass = props => {
  return <div className={props.className}>{props.children}</div>;
};

WithClass.propTypes = {
  className: PropTypes.string,
};

export default WithClass;
