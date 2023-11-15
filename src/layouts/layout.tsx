import Box from '@mui/material/Box';
import * as React from 'react';
import Header from "../components/Header";

type LayoutProps = {
    children?: React.ReactNode;
  };

const ButtonAppBar: React.FC<LayoutProps> = ({children}) =>{
  return (
    <>
    <Header />
    <Box sx={{mt: 10}}>
    {children}
    </Box>
    </>
  );
}

export default ButtonAppBar;