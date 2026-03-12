import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

html{
  scroll-behavior:smooth;
}

body{
  overflow-x:hidden;
  font-family:'Montserrat', sans-serif;
  background:#f6f6f9;
  color:#363949;

  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  
  transition:
    background-color 0.35s ease,
    color 0.35s ease;
}



body.dark-theme{
  background:#181a1e;
  color:#f5f7ff;
}



img{
  max-width:100%;
  display:block;
}



a{
  text-decoration:none;
  color:inherit;
}



button{
  border:none;
  background:none;
  cursor:pointer;
  font-family:inherit;
}


h1,h2,h3,h4,h5,h6,p,span,a,button,small{
  letter-spacing: normal;
  word-spacing: normal;
}



h1,h2,h3{
  word-break: break-word;
}

`;

export default GlobalStyle;