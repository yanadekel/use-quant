import React, { useEffect, useState } from "react";
// import HeatMap from "react-heatmap-grid";
import HeatMap from "../Heatmap/HeatMap.jsx";
import Bunner from "../Bunner/Bunner";
import Spinner from "../Spinner/Spinner";



const Matrix = ({ file, filexLabels, fileyLabels, fileData }) => {
  // const [showSpinner, setShowSpinner] = useState(true);
  const [matrixData, setMatrixData] = useState('');

  console.log("Matrix.Matrix: file")
  console.log(file)
  console.log("Matrix.Matrix: filexLabels")
  console.log(filexLabels.slice(0, 10))
  console.log("Matrix.Matrix: fileyLabels")
  console.log(fileyLabels.slice(0, 10))
  


  const xLabels = filexLabels.slice(0, 10);
  const yLabels = fileyLabels.slice(0, 10);





  const updateMatrixData = (function () {
    const data = new Array(yLabels.length)//yLabels.length)
      .fill(0)
      .map(() =>
        new Array(xLabels.length).fill(0).map(() => 0)// Mat  h.floor( Math.random()*3))
      );
    setMatrixData(data);

    return function (x, y) {
      let data = matrixData;
      data[x][y] = data[x][y] + 1;
      console.log(data)
      setMatrixData(data);
    }
  })();

  // data = new Array(yLabels.length)//yLabels.length)
  //   .fill(0)
  //   .map(() =>
  //     new Array(xLabels.length).fill(0).map(() => 0)// Math.floor( Math.random()*3))
  //   );

  // const updateMatrixData = (x, y) => {
  //   data[x][y] = data[x][y] + 1;
  //   console.log(data)
  //   setMatrixData(data);
  // }



  return (

    <div style={{ display: "flex", alignItems: "center", fontSize: "13px" }}>
      {file ?
        (<HeatMap
          xLabels={xLabels}
          yLabels={yLabels}
          xLabelsLocation={"top"}
          // xLabelsVisibility={xLabelsVisibility}
          xLabelWidth={60}
          data={matrixData}
          squares
          height={45}
          onClick={(x, y) => {
            updateMatrixData(x, y)
          }}
          cellStyle={(background, value, min = 0, max = 3, data, x, y) => ({
            background: `rgb(0, 151, 230, ${1 - (max - value) / (max - min)})`,
            fontSize: "11.5px",
            color: "#444"
          })}
          cellRender={value => value && <div>{value}</div>}
        />) : (<Bunner />)}
    </div>

  );
};

export default Matrix;