import { useState } from "react";
import getTreeJsxFromData from "./utils/treeUtils";

const Item = ({data, selected}) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <div onClick={() => setCollapsed(!collapsed)}>{collapsed ? '▼' : '▶'}{data.name}</div>
      {!collapsed && <ul>{data.children.map((child) => getTreeJsxFromData(child, selected))}</ul>}
    </>
  );
};

export default Item;
