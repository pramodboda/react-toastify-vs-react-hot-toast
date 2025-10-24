import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Grid from "@mui/material/Grid";

import ReactHotToast from './components/ReactHotToast.tsx';
import ReactToastify from './components/ReactToastify.tsx';
import './App.css'

function App() {

  return (
    <>
    <Grid container>
    <Grid size={{sm:6}}><ReactHotToast/></Grid>
    <Grid size={{sm:6}}><ReactToastify/></Grid>
    </Grid>
      
      
    </>
  )
}

export default App
