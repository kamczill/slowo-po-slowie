import React from "react";
import { Link } from "react-router-dom";

const CustomLink = ({ className, to, children }) => {
  const handleScrollToTop = () => {
    window.scroll(0, 0);
  };
  return (
    <Link to={to} className={className} onClick={handleScrollToTop}>
      {children}
    </Link>
  );
};

export default CustomLink;
