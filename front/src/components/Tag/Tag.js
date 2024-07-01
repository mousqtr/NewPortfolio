import React from "react";
import { TECHNOLOGIES_BY_FIELD } from "../../constants/technologies";
import "./Tag.scss";

function Tag({ tag }) {
  return (
    <div
      className="tag"
      style={{
        backgroundColor: TECHNOLOGIES_BY_FIELD[tag].bgColor,
      }}
    >
      {TECHNOLOGIES_BY_FIELD[tag].label}
    </div>
  );
}

export default Tag;
