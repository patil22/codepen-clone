import { useContext } from 'react';

//components
import Editor from './Editor';

import { Box, styled } from '@mui/material';

import { DataContext } from '../Context/Dataprovider';

const Container = styled(Box)`a
    background-color: #060606;
    height: 50vh;
    display: flex;
`

const Code = () => {

    const { html, css, js, setHtml, setCss, setJs } = useContext(DataContext);

    return (
        <Container>
            <Editor 
                language="xml"
                heading="HTML"
                value={html}
                onChange={setHtml}
                icon='/'
                color='#FF3C41'
            />
            <Editor 
                language="css"
                heading="CSS"
                value={css}
                onChange={setCss}
                icon='*'
                color='#0EBEFF'
            />
            <Editor 
                language="javascript"
                heading="JS"
                value={js}
                onChange={setJs}
                icon='( )'
                color='#FCD000'
            />
        </Container>
    )
}

export default Code;



















// import React from "react";
// import Editor from "./Editor";
// // import Box from "@mui/icons-material";
// // import {Bpx ,styled} from   "@mui/icons-material";

// import { useContext } from "react";
//  import { DataContext } from "../Context/Dataprovider";

// import Box from "@mui/material/Box";

// import styled from "@emotion/styled";

// const Container = styled(Box)`
// display : flex;
// background-color : #060606;

// `
// // height : 50vh; 


// const Code = () => {
//   const [ html,css ,js ,sethtml,setcss , setjs] = useContext(DataContext);

//   // ,css,setcss,js,setjs
//   return (
//     < Container>
     
//         <Editor  heading="HTML" icon="/"    color="#FF3C41"     value = {html}  onChange = {sethtml}
      
//            />

//         {/* value = {html} onChange = {sethtml} */}

//         <Editor heading="CSS" icon="*" color="#0EBEFF" value = {css} onChange = {setcss}   />
      
//         {/* value = {css} onChange = {setcss} */}

//         <Editor heading="JavaScript" icon="()" color="#FCD000"  value = {js} onChange = {setjs}  />

//         {/*  value = {js} onChange = {setjs} */}
    
//     </ Container>
//   );
// };

// export default Code;
  