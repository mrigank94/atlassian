import { useEffect, useState } from "react";
import { EXTENDED_SUMMARY } from "./constants";

function useFeatureFlag(initalState = false, data, flag) {
  const [isEnabled, setIsEnabled] = useState(initalState);

  useEffect(() => {
    const getFeatureFlagState = async () => {
      try {
        const featureFlag = await getFeatureState(data, flag);
        setIsEnabled(featureFlag);
      } catch (ex) {
        console.log(ex);
      } finally {
        setIsEnabled(false);
      }
    };

    getFeatureFlagState();
  }, [data]);

  return [isEnabled, setIsEnabled];
}
