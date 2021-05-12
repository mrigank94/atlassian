import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import getData from "./data";
import { getFeatureState } from "./utils/featureFlagUtils";
import { EXTENDED_SUMMARY } from "./constants";

function App() {
  const [data, setData] = useState([]);
  const [extendedDisplay, setExtendedDisplay] = useFeatureFlag(false, data);

  useEffect(() => {
    const loadData = async () => {
      const data = await getData();
      setData(data);
    };

    loadData();
  }, []);

  const extendedSummary = <div>Showing extended summary.....</div>;
  const briefSummary = <div>Brief Summary....</div>;

  return (
    <div className="App">
      {extendedDisplay === true && extendedSummary}
      {extendedDisplay === false && briefSummary}
    </div>
  );
}

export default App;
