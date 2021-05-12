import getTreeJsxFromData from "./utils/treeUtils";

const Tree = ({ data, selected }) => {
  return <>{data.map((el) => getTreeJsxFromData(el, selected))}</>;
};

export default Tree;
