import { Typography } from '@mui/material';
import {useState,useEffect} from 'react';
import axios from 'axios';

export default function Aboutus(){
const [loader,setLoader] = useState(true);
    const [aboutus,setAboutus] = useState(null);

    const connectToServer = async  () => axios.get('http://localhost:8000/Aboutus')
                                            .then(res=>{
                                        
                                                console.log(res.data);
                                                setAboutus(res.data);
                                                setLoader(false)
                                            }).catch(err=>console.log(err))
useEffect(()=>{
   connectToServer();
},[])


    return(
        <>
<Typography>Name: NIHARIKA BHAIRAVI</Typography>
<Typography>Father Name: MADHU SUDHANA SWAMY BHAIRAVI</Typography>
<Typography>Mother Name: SWAPNA BHAIRAVI</Typography>
<Typography>Email: bhiraviniharika7@gmail.com</Typography>
<Typography>Phone No.: 9000938661</Typography>
        </>
        
    )
    }