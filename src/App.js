import { useEffect, useState } from "react";
import fetchData from "./data";
import "./App.css";
import Item from "./Item";
import getTreeJsxFromData from "./utils/treeUtils";
import Tree from "./Tree";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function loadData() {
      const data = await fetchData();
      setData(data);
    }

    loadData();
  }, []);

  return (
    <div className="App">
      <Tree data={data} selected={"11"} />
    </div>
  )
}

export default App;
