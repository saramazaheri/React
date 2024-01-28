import { useState } from "react";
import "./CourseCard.css";

function CourseCard({ data: { name, description } }) {
  const [selected, setSelected] = useState("true");
  return (
    <div>
      <li className={selected ? "selected" : "container"}>
        <h4>{name}</h4>
        <p>{description}</p>
        <button onClick={() => setSelected((s) => !s)}>Change</button>
      </li>
    </div>
  );
}

export default CourseCard;
