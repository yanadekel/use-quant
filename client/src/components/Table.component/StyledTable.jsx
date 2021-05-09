import styled from 'styled-components';


export const StyledTable = styled.table`
// font-family: "Quicksand", sans-serif;
// display: flex;
// justify-content: center;
// padding: 0;
color: #4d4d4d; 
// border-collapse: collapse;
border: 3px solid rgb(40, 78, 103);
height:100%;
width:100%;
margin:auto;
// flex-direction: column;
`;

export const THead = styled.thead`
padding: 10px;
text-align: center;
background-color:rgb(40, 78, 103);
color: white;
height:10%;
width:100%;
margin:0 auto;
`;

export const TFoot = styled.tfoot`
display: block;
justify-content: center;
align-items:center;
width:100%;


`;

export const TBody = styled.tbody`
height:90%;
width:100%;
padding: 10px;
text-align: center;
`;

export const TR = styled.tr`
border: 1px solid rgb(40, 78, 103);
padding: 12px;

  &::hover:
  background-color: #ddd;
`;

export const TH = styled.th`
border: 1px solid rgb(40, 78, 103);
padding: 12px;
`;

export const TD = styled.td`
border: 1px solid rgb(40, 78, 103);
padding: 12px;

`;


