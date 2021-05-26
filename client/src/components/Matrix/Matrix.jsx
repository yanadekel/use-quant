import React, { useState} from "react";
import HeatMap from "../Heatmap/HeatMap.jsx";




const Matrix = ({ appFile }) => {

  const [matrixData, setMatrixData] = useState([]);
  const xLabels = appFile.observations.slice(0, 10);
  const yLabels = appFile.solutions.slice(0, 10);

  const createMatrixData = () => {

    if (matrixData.length === 0) {

      const data = new Array(yLabels.length)
        .fill(0)
        .map(() =>
          new Array(xLabels.length).fill(0).map(() => 0)
        );

      setMatrixData(data);


    };
  }
  createMatrixData();

  const updateMatrixData = (x, y) => {
    let newData = { ...matrixData };
    newData[x][y] = (newData[x][y] + 1 <= 3) ? newData[x][y] + 1 : 0;
    setMatrixData(newData);
  };



  return (

    <div style={{ display: "flex", alignItems: "start", fontSize: "13px" }}>

      <HeatMap
        xLabels={xLabels}
        yLabels={yLabels}
        xLabelsLocation={"top"}
        xLabelWidth={150}
        yLabelWidth={150}
        data={matrixData}
        squares={true}
        height={70}
        cursor= {true}
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