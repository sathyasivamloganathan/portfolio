// import React from 'react'

// const Title = ({title}) => {
  
//   return <h3 className="text-center text-[25px] font-bold mt-20" >{title}</h3>;
// }

// export default Title;

import React from "react";

const Title = ({ title, shadowColor }) => {
  return (
    <div className="relative text-center mt-20">
      <style>
        {`
          .styled-title::before {
            content: attr(data-outline);
            position: absolute;
            top: 0;
            left: 0;
            z-index: 10; /* Place it behind the main text */
            color: transparent; /* Darker shadow for better visibility */
            -webkit-text-stroke: 1px ${shadowColor};
            transform: translate(8px, -10px); /* Adjust these values to move the shadow */
          }
        `}
      </style>
      <h3
        className="text-[30px] font-bold relative inline-block styled-title"
        data-outline={title}
      >
        {title}
      </h3>
    </div>
  );
};

export default Title;



