import React from "react";

import "./UserF.css";

const UserF = ({ Country, City }) => {
  //   const { Country, City } = props;
  return (
    <div>
      <p className="paragraph">
        I live in {City} in {Country}
      </p>
    </div>
  );
};

export default UserF;
