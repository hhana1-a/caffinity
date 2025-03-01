import React from "react";
import PropTypes from "prop-types";
import SvgWrapper from "../SvgWrapper/SvgWrapper";

const HeartIcon = ({ onClick }) => {
  return (
    <div
      className="cursor-pointer flex items-center justify-center p-2"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
    >
      <SvgWrapper>
        <svg
          fill="#1A1A1A"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          width="30px"
          height="30px"
        >
          <path d="M43.5,10C48.169,10,57,13.135,57,25c0,8.287-5.542,14.03-9.588,18.224C42.052,48.803,34.54,54.11,34.245,54.31	C33.568,54.77,32.784,55,32,55s-1.568-0.23-2.245-0.69c-0.295-0.2-7.808-5.509-13.167-11.086C12.542,39.03,7,33.287,7,25	c0-11.865,8.831-15,13.5-15c4.902,0,8.781,2.561,11.499,5.234C34.708,12.568,38.592,10,43.5,10z M44,41c3.99-4.15,9-9.02,9-16	c0-9.13-6.5-11-9.5-11c-4.57,0-8.1,3.26-9.99,5.48c-0.395,0.47-0.953,0.705-1.51,0.705s-1.115-0.235-1.51-0.705	C28.6,17.26,25.07,14,20.5,14c-3,0-9.5,1.87-9.5,11c0,6.98,5.01,11.85,9,16c5.13,5.34,12,10,12,10S38.87,46.34,44,41z" />
        </svg>
      </SvgWrapper>
    </div>
  );
};

HeartIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default HeartIcon;
