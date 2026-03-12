import styled from "styled-components";


export const Status = styled.div`

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
  min-width: 0;



`;

export const Info = styled.div`

h3{
color: #363949;
margin-left: 0.6rem;
font-size: 1rem;
}
h1{

color: #363949;
}
`;

export const Progress = styled.div`
 position: relative;
  width: 92px;
  height: 92px;
  flex-shrink: 0;

svg{
    width: 7rem;
    height: 7rem;
    

    circle{
        fill: none;
        stroke-width: 10;
        stroke-linecap: round;
        transform: translate(5px, 5px);
        
    }
}

`;

export const Percentage = styled.div`

position: absolute;
top: -3px;
left: 25px;
display: flex;
align-items: center;
justify-content: center;
height: 100%;
height: 100%;


p{
    color: #000;
    
}


`;