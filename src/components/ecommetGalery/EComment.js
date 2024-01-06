import React, { useState } from "react";

const EComment = ( {imgDetail} ) => {
  const [selected, setSelected] = useState(0);

  const handleSelect = (index) => {
    setSelected(index);
  };



  return (
    <div className="container ">
      <div className="content">
        <img src={imgDetail[selected] }  />
      </div>
      <div className="sidebar pl-0">
        <ul className="d-flex flex-row">
          {imgDetail.map((item, index) => (
            <li
              key={index}
              className={selected === index ? "active" : ""}
              onClick={() => handleSelect(index)}
              style={{padding:2}}
            >
              <img src={item} alt="img" width={75} height={50} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EComment;
