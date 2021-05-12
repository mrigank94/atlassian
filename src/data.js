export default function fetchAllFeatures() {
  // in reality, this would have been a `fetch` call:
  // `fetch("/api/features/all")`
  return new Promise((resolve) => {
    const sampleFeatures = {
      "extended-summary": false,
      "feedback-dialog": false,
    };
    setTimeout(resolve, 100, sampleFeatures);
  });
}

// // src/feature-x/summary.js
// getFeatureState("extended-summary").then(function (isEnabled) {
//   if (isEnabled) {
//     console.log('Show extended summary')
//   } else {
//     console.log('Show brief summary')
//   }
// });
// // src/feature-y/feedback-dialog.js
// getFeatureState("feedback-dialog").then(function (isEnabled) {
//   if (isEnabled) {
//     console.log('Show feedback dialog')
//   }
// });
