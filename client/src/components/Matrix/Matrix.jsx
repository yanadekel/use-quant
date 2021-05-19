import React, { useState, useEffect } from "react";
// import HeatMap from "react-heatmap-grid";
import HeatMap from "../Heatmap/HeatMap.jsx";
// import Bunner from "../Bunner/Bunner";
// import Spinner from "../Spinner/Spinner";



const Matrix = ({ appFile }) => {
  // const [showSpinner, setShowSpinner] = useState(true);
  console.log("Matrix Component")
  const [matrixData, setMatrixData] = useState([]);
  const [coordinates, setCoord] = useState();

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
    let data = matrixData;
    data[x][y] = data[x][y] + 1;
    console.log("Matrix.updateMatrixData setMatrixData")
    console.log(data)
    setMatrixData(data);
    console.log("Matrix.updateMatrixData MatrixData")
    console.log(matrixData)
  };

 

  return (

    <div style={{ display: "flex", alignItems: "center", fontSize: "13px" }}>

      <HeatMap
        xLabels={xLabels}
        yLabels={yLabels}
        xLabelsLocation={"top"}
        // xLabelsVisibility={xLabelsVisibility}
        xLabelWidth={60}
        data={matrixData}
        squares
        height={45}
        onClick={(y,x) => { updateMatrixData(x, y) }}
        cellStyle={(background, value, min = 0, max = 3, data, x, y) => ({
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