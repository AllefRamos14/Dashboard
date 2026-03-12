import styled from "styled-components";


export const Container = styled.div`
display: grid;
width: 96%;
margin: 0 auto;
gap: 1.8rem;
grid-template-columns: 12rem auto 23rem; 
height: 100vh;

aside{
    height: 100vh;
}

main {
   
    margin-top: 1.4rem;

    h1{
color: #363949;
font-size: 30px;
font-weight: 900;
    }


}

.ContainerDivisor{
    display: flex;
    gap: 25px;
}


`;

export const Toggle = styled.div`

display: flex;
align-items: center;
justify-content: space-between;
margin-top: 1.4rem;

h2{
    color: #000;
    font-weight: 800;
    font-size: 1.8rem;
}
.danger{
    color: #ff0060;
}
`;

export const Logo = styled.div`

display: flex;
gap: 0.5rem;

img{
    /* display: block;
    width: 100%;
    object-fit: cover; */

    width: 2rem;
    height: 2rem;
}

`;

export const Close = styled.div`

padding-right: 1rem ;
display: none;


a{
    color: #363949;
}
`;

export const MenuLateral = styled.div`

display: flex;
flex-direction: column;
background-color: #fff;
box-shadow: 0 2rem 3rem rgba(132, 139, 200, 0.18);
border-radius: 15px;
height: 88vh;
position: relative;
top: 1.5rem;
transition: all 0.3s ease;

:hover{

    box-shadow: none;

}

h3{
    font-size: 1.4rem;
    font-weight: 600;
}

a{
    display: flex;
    align-items: center;
    color: #7d8da1;
    height: 3.7rem;
    gap: 1rem;
    position: relative;
    margin-left: 2rem;
    transition: all 0.3s ease;
}
a:last-child{
    position: absolute;
    bottom: 2rem;
    width: 100%;
}
a:active{
    width: 100%;
    color: #6c9bcf;
    background-color: rgba(132, 139, 200, 0.18);
    margin-left: 0;
}
a:active::before{
    content: "";
    width: 6px;
    height: 18px;
    background-color: #6c9bcf;
}
a:active span{
    color: #6c9bcf;
    margin-left: (1rem - 3px);

}
a:hover span{
    margin-left: 0.6rem;
}
.message-count{
    background-color: #ff0060;
    padding: 2px 6px;
    color: #fff;
    font-size: 11px;
    border-radius: 0.4rem;
}
span{
    font-size: 1.6rem;
    transition: all 0.3s ease;
}
`;


export const Analyse = styled.div`
display: grid;
grid-template-columns: repeat(3,1fr);
gap: 1.6rem;


/* div{
    background-color:#fff ;
    padding: 10px;
    border-radius: 2rem;
    margin-top: 17px;
    box-shadow: 0 2rem 3rem rgba(132, 139, 200, 0.18);
    cursor: pointer;
    transition: all 0.3s ease;
}

div:hover {
box-shadow: none;

} */



  background-color:#fff ;
    padding: 10px;
    border-radius: 2rem;
    margin-top: 17px;
    box-shadow: 0 2rem 3rem rgba(132, 139, 200, 0.18);
    cursor: pointer;
    transition: all 0.3s ease;
    
    height: 140px;
    width: 289px;
    display: flex;
    align-items: center;
    justify-content: center;


:hover{
        box-shadow: none;
       
       
    }
`;

export const Sales = styled.div`

circle{
    stroke: #1b9c85;
    stroke-dashoffset: -38;
    stroke-dasharray: 200;
}
`;

export const Status = styled.div`

display: flex;
align-items: center;
justify-content: space-between;


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
border-radius: 50%;
left: 30px;

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

export const Searches = styled.div`

 background-color:#fff ;
    padding: 10px;
    border-radius: 2rem;
    margin-top: 17px;
    box-shadow: 0 2rem 3rem rgba(132, 139, 200, 0.18);
    cursor: pointer;
    transition: all 0.3s ease;
    
    height: 140px;
    width: 289px;
    display: flex;
    align-items: center;
    justify-content: center;


:hover{
        box-shadow: none;
       
       
    }

    circle{
    stroke: #6c9bcf;
    stroke-dashoffset: -38;
    stroke-dasharray: 200;
}

  

`;

export const Visits = styled.div`

 background-color:#fff ;
    padding: 10px;
    border-radius: 2rem;
    margin-top: 17px;
    box-shadow: 0 2rem 3rem rgba(132, 139, 200, 0.18);
    cursor: pointer;
    transition: all 0.3s ease;
    
    height: 140px;
    width: 289px;
    display: flex;
    align-items: center;
    justify-content: center;


:hover{
        box-shadow: none;
       
       
    }


    circle{
    stroke: #ff0060;
    stroke-dashoffset: -38;
    stroke-dasharray: 200;
}

`;

export const NewUsers = styled.div`

margin-top: 20px;


h2{
    color: #363949;
    margin-bottom: 10px;
}
`;

export const ConteudoUsers = styled.div`

display: flex;
justify-content: space-evenly;
align-items: center;
text-align: center;
height: 191px;
width: 100%;
border-radius: 20px;
background-color: #fff;
 box-shadow: 0 2rem 3rem rgba(132, 139, 200, 0.18);



`;

export const User = styled.div`


img{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
    
}

 p{
    position: relative;
    bottom: 12px;
        color: #363949;
    }

`;



