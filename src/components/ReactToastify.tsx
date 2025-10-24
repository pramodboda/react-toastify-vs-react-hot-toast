import { ToastContainer, toast } from 'react-toastify';

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

 const ReactToastify = () =>{
    const notify = () => toast('Wow so easy !');
    const customNotify = () => toast('🦄 Wow so easy!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        // transition: Bounce,
        });
    return (<>
        <Typography variant="h6">React Toastify</Typography>
        <div className="grid place-items-center h-dvh bg-zinc-900/15">
             <Button variant='contained' color="primary" onClick={notify}>Default Notify !</Button>
             <Button variant='contained' color="primary" onClick={customNotify}>Custom Notify !</Button>
             <ToastContainer />
           </div>
        </>)
 } 
 export default ReactToastify;