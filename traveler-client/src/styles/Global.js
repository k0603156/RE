import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset};
    @import url('https://fonts.googleapis.com/css?family=Montserrat+Alternates:300,400|Montserrat:400,500,700&display=swap');
    * {
        box-sizing:border-box;
    }
    body {  
        min-width: ${props => props.theme.minWidth};
        background-color:${props => props.theme.bgColor};}
        color:${props => props.theme.blackColor};
        font-size:15px;
        font-family:-apple-system,'Montserrat', 'Helvetica Neue', sans-serif;
        
    #root{   
        position: relative;
        margin: 0 100px;
        overflow:hidden;
        display: flex;
        height: 100vh;
        -ms-overflow-style: none;    
    }::-webkit-scrollbar {display:none;} 
    a {
        color:${props => props.theme.blueColor};
        text-decoration:none;
    }
    input:focus{
        outline:none;
    }
`;
