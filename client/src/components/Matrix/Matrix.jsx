import React, { useState, useEffect } from "react";
// import HeatMap from "react-heatmap-grid";
import HeatMap from "../Heatmap/HeatMap.jsx";




const Matrix = ({ appFile }) => {
  console.log("Matrix Component")
  const [matrixData, setMatrixData] = useState([]);
 

  console.log("Matrix appFile");
  console.log(appFile);

  const xLabels = appFile.observations.slice(0, 10);
  const yLabels = appFile.solutions.slice(0, 10);
  let clicked;




  const createMatrixData = () => {
    console.log("Matrix.updateMatrixData function")
    console.log(matrixData.length)
    if (matrixData.length === 0) {
      console.log("Matrix.updateMatrixData if !coordinates")
      const data = new Array(yLabels.length)//yLabels.length)
        // Promise.all([])
        .fill(0)
        .map(() =>
          new Array(xLabels.length).fill(0).map(() => 0)
        );
      console.log("Matrix.updateMatrixData1 setMatrixData")
      console.log(data)
      setMatrixData(data);
      console.log("Matrix.updateMatrixData1 MatrixData")
      console.log(matrixData)

    };
  }
  createMatrixData();

  const updateMatrixData = (x, y) => {
    console.log("Matrix.updateMatrixData if else")
    console.log("Matrix.updateMatrixData MatrixData")
    let newData = { ...matrixData };

    newData[x][y] = (newData[x][y] + 1 <= 3) ? newData[x][y] + 1 : 0

    console.log("Matrix.updateMatrixData setMatrixData")
    console.log(newData)
    setMatrixData(newData);
    console.log("Matrix.updateMatrixData MatrixData")
    console.log(matrixData)
  };



  return (

    <div style={{ display: "flex", alignItems: "end", fontSize: "13px" }}>

      <HeatMap
        xLabels={xLabels}
        yLabels={yLabels}
        xLabelsLocation={"top"}
        xLabelWidth={150}
        yLabelWidth={100}
        data={matrixData}
        squares={true}
        height={60}
        onClick={(y, x) => { updateMatrixData(x, y) }}
        cellStyle={(background, value, min = 0, max = 3, data, x, y) => ({
          background: `rgb(24, 57, 76, ${1 - (max - value) / (max - min)})`,
          fontSize: "11.5px",
          color: "#444"
        })}
        cellRender={value => value && <div>{value}</div>}
      />
    </div>

  );
};

export default Matrix;