import React from "react";

const ListItem = ({ task }) => {
  return (
    <li>
      <span>{task.text}</span>
    </li>
  );
};

export default ListItem;