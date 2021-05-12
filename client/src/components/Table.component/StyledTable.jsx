import styled from 'styled-components';


export const StyledTable = styled.table`
color: #4d4d4d; 
border: 3px solid rgb(40, 78, 103);
min-height:400px;
width:100%;
margin:auto;
`;

export const THead = styled.thead`
padding: 10px;
text-align: center;
background-color:rgb(40, 78, 103);
color: white;
min-height:10%;
width:100%;
margin:0 auto;
`;

export const TFoot = styled.tfoot`
width:100%;
min-height:10%;
margin: 0 auto;

`;

export const TBody = styled.tbody`
min-height:80%;
width:100%;
padding: 10px;
text-align: center;
`;

export const TR = styled.tr`
border: 1px solid rgb(40, 78, 103);
padding: 12px;

  &::hover:{
    background-color:rgba(40, 78, 103,1) ;
  }
  
`;

export const TH = styled.th`
border: 1px solid rgb(40, 78, 103);
padding: 12px;
`;

export const TD = styled.td`
border: 1px solid rgb(40, 78, 103);
padding: 12px;

`;


