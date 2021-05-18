import React from 'react';
import { Table } from '../../components/Table.component/Table';
import { Margin } from "../../components/margin/Margin";
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';




const TableQuant = ({ projects, activeProjects, updateFile }) => {
  const history = useHistory();

  const handleClick = async (fileName) => {
    console.log(fileName);
    try {
      const response = await axios.get(`/api/useQuant/fils/file/${fileName}`);
      const data = response.data[0];
      await updateFile(data)
      await history.push("/matrix")

    } catch (error) {
      console.log(error);
    }
  }


  const renderHeader = () => {
    let headerElement = ['Project-Name', 'Costumer', 'File', 'Date']

    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }

  const renderBody = () => {
    return projects.map((project, index) => {
      return (
        <tr key={index}>
          <td>{project.projectName}</td>
          <td>{project.costumerName}</td>
          <td className='opration'>
            <Link onClick={() => handleClick(project.fileName)} style={{ color: "inherit", textDecoration: "none" }} to='/'>
              {project.fileName}
            </Link>
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
        <Margin margin="50px" direction="virtical" />
        {/* <button style={{margin:"auto"}}  type="submit" onClick={handleClick}>GET ACTIVE PROJECTS</button> */}
        <Margin margin="5px" direction="virtical" />
      </Table.Foot>

    </Table>
    <Margin margin="10px" direction="virtical" />

  </>
  )
}

export default TableQuant;

