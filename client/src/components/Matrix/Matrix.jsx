import React from "react";
import HeatMap from "react-heatmap-grid";




const  Matrix= ({filexLabels,fileyLabels,fileData})=> {
  const xLabels = new Array(filexLabels.length).fill(0).map((_, i) => `${i}`);

// // Display only even labels
// const xLabelsVisibility = new Array(24)
//   .fill(0)
//   .map((_, i) => (i % 2 === 0 ? true : false));

const yLabels = [fileyLabels];
const data = new Array(fileyLabels.length)
  .fill(0)
  .map(() =>
    new Array(xLabels.length).fill(0).map(() => Math.floor(Math.random() * 100))
  );

  return (
    <div style={{ fontSize: "13px" }}>
      <HeatMap
        xLabels={xLabels}
        yLabels={ yLabels}
        xLabelsLocation={"bottom"}
        // xLabelsVisibility={xLabelsVisibility}
        xLabelWidth={60}
        data={data}
        squares
        height={45}
        onClick={(x, y) => alert(`Clicked ${x}, ${y}`)}
        cellStyle={(background, value, min, max, data, x, y) => ({
          background: `rgb(0, 151, 230, ${1 - (max - value) / (max - min)})`,
          fontSize: "11.5px",
          color: "#444"
        })}
        cellRender={value => value && <div>{value}</div>}
      />
    </div>
  );
};

export default Matrix;