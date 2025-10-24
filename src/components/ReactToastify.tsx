import { ToastContainer, toast } from 'react-toastify';

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";


const ReactToastify = () =>{
    const notify = () => toast('Wow so easy !');
    const customSuccessNotify1 = () => toast('🦄 Wow so easy!', {
        position: "top-center",
        type:"success",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        // transition: Bounce,
        });
        const customSuccessNotify2 = () => toast('🦄 Wow so easy!', {
            position: "top-center",
            type:"success",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            // transition: Bounce,
            });
    return (<>
        <Link href="https://fkhadra.github.io/react-toastify/introduction" target="_black"><Typography variant="h6">React Toastify</Typography></Link>
        <div className="grid place-items-center h-dvh bg-zinc-900/15">
             <Button variant='contained' color="primary" onClick={notify}>Default Notify !</Button>
             <Button variant='contained' color="primary" onClick={customSuccessNotify1}>Custom success Notify !</Button>
             <Button variant='contained' color="primary" onClick={customSuccessNotify2}>Custom success Notify !</Button>
             <ToastContainer />
           </div>
        </>)
 } 
 export default ReactToastify;