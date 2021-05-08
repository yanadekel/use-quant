import React from 'react';
import { Table } from '../../components/Table.component/Table';
import { Link } from 'react-router-dom';

const renderHeader = () => {
  let headerElement = ['Project-Name', 'Costumer', 'File', 'Date']

  return headerElement.map((key, index) => {
    return <th key={index}>{key.toUpperCase()}</th>
  })
}

// const renderBody = () => {
// return projects.map((project,index) => {
//     return (
//         <tr key={index}>
//             <td>{project.name}</td>
//             <td>{project.details.costumer}</td>
//             <td>{project.file}</td>
//             <td>{project.date}</td>
//             <td className='opration'>
//             <Link to="/heatmap"><button onClick={()=>getHeatMap(project.heatMap)}>HeatMap Table</button></Link>
//                 {/* <button onClick={() => depodit(project.account)}>Deposit</button>
//                 <button onClick={() => withdraw(project.account)}>withDraw</button> */}
//             </td>
//         </tr>
//     )
// })
// }

const renderBody = () => {

  return (<>
    <tr>
      <td>{'yana'}</td>
      <td>{'Dekel'}</td>
      <td>{'file'}</td>
      <td>{'11/2/14'}</td>
    </tr>
    <tr>
      <td>{'yana'}</td>
      <td>{'Dekel'}</td>
      <td>{'file'}</td>
      <td>{'11/2/14'}</td>
    </tr>

  </>
  )

}





function TableQuant({ data, headings }) {
  return (
    <Table>
      <Table.Head>
        <Table.TR>{renderHeader()}</Table.TR>
      </Table.Head>
      <Table.Body>{renderBody()}</Table.Body>
      <Table.Foot></Table.Foot>
    </Table>
  )
}

export default TableQuant;

