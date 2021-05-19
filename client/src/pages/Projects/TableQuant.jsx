import React, { useEffect, useState } from 'react';
import { Table } from '../../components/Table.component/Table';
import { Margin } from "../../components/margin/Margin";
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import './TableQuant.css';






const TableQuant = ({ projects, activeProjects, updateFileFromApp }) => {
  console.log("TableQuant Component");
  // const [fileData, setFileData] = useState({});
  const history = useHistory();


  const handleClick = async (fileName) => {
    console.log("TableQuant.handleClick function");
    console.log('TableQuant.handleClick fetching file name ');
    console.log(fileName);
    try {
      const response = await axios.get(`/api/useQuant/fils/file/${fileName}`);
      const data = response.data[0];
      // setFileData(data);
      updateFileFromApp(data);
      console.log("TableQuant.handleClick file data from projects table");
      console.log(data);
      history.push("/matrix");

    } catch (error) {
      console.log(error);
    }
  }

useEffect(() => {
 
}, [])
  const renderHeader = () => {
    console.log("TableQuant.renderHeader function");
    let headerElement = ['Project-Name', 'Costumer', 'File', 'Date'];

    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }

  const renderBody = () => {
    console.log("TableQuant.renderBody function");
    return projects.map((project, index) => {
      return (
        <tr key={index}>
          <td>{project.projectName}</td>
          <td>{project.costumerName}</td>
          <td>
            <button className="metrixClick" onClick={() => handleClick(project.fileName)}>
              {project.fileName}
            </button>
          </td>
          <td>{project.date}</td>
        </tr>
      )
    })
  }


  return (<>
    <Table>
      <Table.Head>
        <Table.TR>{renderHeader()}</Table.TR>
      </Table.Head>
      <Table.Body>{renderBody()}</Table.Body>
      <Table.Foot>

        {/* <button style={{margin:"auto"}}  type="submit" onClick={handleClick}>GET ACTIVE PROJECTS</button> */}

      </Table.Foot>

    </Table>
    <Margin margin="10px" direction="virtical" />

  </>
  )
}

export default TableQuant;

