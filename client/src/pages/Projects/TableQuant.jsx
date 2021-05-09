import React, { useState, useEffect } from 'react';
import { Table } from '../../components/Table.component/Table';
import axios from "axios";
import styled from "styled-components";
import { Margin } from "../../components/margin/Margin";


const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
  margin:auto;
`;

const SmallText = styled.h3`
  color: #fff;
  font-weight: 500;
  font-size: 15px;
  z-index: 10;
  margin: auto;
  margin-top: 7px;
`;

const OnSubmitButton = styled.button`
  align-items:center;
  width: 100%;
  padding: 11px;
  margin-top:auto;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 5%;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(40, 78, 103);
  background: linear-gradient(
    58deg,
    rgba(40, 78, 103, 1) 35%,
    rgba(18, 45, 62, 1) 100%
  );
  &:hover {
    filter: brightness(1.03);
  }
`;

function TableQuant({ data, headings }) {
  const base = "/api/useQuant/projects";
  const q = "/active"
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


  const getActive = async () => {
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




  return (<>
    <HeaderContainer>
      <Margin margin="50px" direction="virtical" />
      <HeaderText>Projects Table</HeaderText>
      <SmallText>View All projects</SmallText>
      <Margin margin="10px" direction="virtical" />
    </HeaderContainer>
    <Table>
      <Table.Head>
        <Table.TR>{renderHeader()}</Table.TR>
      </Table.Head>
      <Table.Body>{renderBody()}</Table.Body>
      <Table.Foot>
        <Margin margin="50px" direction="virtical" />
        <OnSubmitButton type="submit" onClick={getActive}>GET ACTIVE PROJECTS</OnSubmitButton>
        <Margin margin="5px" direction="virtical" />
      </Table.Foot>
      {/* <Table.Foot><button onClick={getActive}> active projects</button></Table.Foot> */}
    </Table>

  </>
  )
}

export default TableQuant;

