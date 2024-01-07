import React from "react";
import { Link } from "react-router-dom";

const CustomLink = ({ className, to, children, onClick }) => {
  const handleScrollToTop = () => {
    window.scroll(0, 0);
    onClick();
  };
  return (
    <Link to={to} className={className} onClick={handleScrollToTop}>
      {children}
    </Link>
  );
};

export default CustomLink;
