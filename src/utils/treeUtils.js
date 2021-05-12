import Item from "../Item";

const getTreeJsxFromData = (data, selected) => {
  if (!data.children || data.children.length === 0) {
    return (
      <li className={data.id === selected ? "highlighted" : ""}>{data.name}</li>
    );
  } else {
    let collapsed = true;
    for (let i = 0; i < data.children.length; i++) {
      if (data.children[i].id === selected) {
        collapsed = false;
      }
    }
    return <Item data={data} selected={selected} collapsed={collapsed}/>;
  }
};

const getInitialCollapsedState = (data, selected) => {
  //if item present in sub tree return false
  //else return true

  if (!data.children && data.id === selected) {
    return false;
  }

  if (!data.children && data.id !== selected) {
    return true;
  }

  if (data.id === selected) {
    return true;
  }

  getInitialCollapsedState(data.children, selected);
};

export default getTreeJsxFromData;
