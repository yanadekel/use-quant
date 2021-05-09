import React, { useState, useEffect }from 'react';
import { Table } from '../../components/Table.component/Table';
import axios from "axios";



function TableQuant({ data, headings }) {
  const base = "/api/useQuant/projects";
  const q= "/active"
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    try {
      const response = await axios.get(`${base}`);
      const data = ((response && response.data) || []);
      console.log(data)
      setProjects(data)
    } catch (error) {
      console.log(error);
    }
  };


  const getActive =async () =>{
    try {
      const response = await axios.get(`${base}${q}`);
      const data = ((response && response.data) || []);
      console.log(data)
      setProjects(data)
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(() => {
    fetchProjects();
  }, [projects]);

  const renderHeader = () => {
    let headerElement = ['Project-Name', 'Costumer', 'File','Date']
  
    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }

const renderBody = () => {
return projects.map((project,index) => {
    return (
        <tr key={index}>
            <td>{project.projectName}</td>
            <td>{project.costumerName}</td>
            <td>{project.file}</td>
            <td>{project.date}</td>
            {/* <td className='opration'>
            <Link to="/heatmap"><button onClick={()=>getHeatMap(project.heatMap)}>HeatMap Table</button></Link>
                <button onClick={() => depodit(project.account)}>Deposit</button>
            </td> */}
        </tr>
    )
})
}




  return (
    <Table>
      <Table.Head>
        <Table.TR>{renderHeader()}</Table.TR>
      </Table.Head>
      <Table.Body>{renderBody()}</Table.Body>
      <Table.Foot><button onClick={getActive}> active projects</button></Table.Foot>
    </Table>
  )
}

export default TableQuant;

