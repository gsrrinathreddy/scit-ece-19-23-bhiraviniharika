import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import {useState,useEffect} from 'react';
import axios from 'axios';


export default function Qualification(){
const [loader,setLoader] = useState(true);
    const [qualification,setQualification] = useState(null);

    const connectToServer = async  () => axios.get('http://localhost:8000/Qualification')
                                            .then(res=>{
                                        
                                                console.log(res.data);
                                                setQualification(res.data);
                                                setLoader(false)
                                            }).catch(err=>console.log(err))
useEffect(()=>{
   connectToServer();
},[])


  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', p: 3}}>
      <h1 className='mode'>Qualifications</h1>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Sree Chaitanya" src="https://image3.mouthshut.com/images/Restaurant/Photo/-33450_156740.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Sree Chaitanya Institute of Technological Sciences"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                70% CGPA
              </Typography>
              {" — Electronics and Communication Engineering"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Sri Gayatri" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0EUhbiBRcEoBWq-orHu4tSDn4SDUTXqA-KA&usqp=CAU" />
        </ListItemAvatar>
        <ListItemText
          primary="Sri Gayatri Junior College"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                85% CGPA
              </Typography>
              {" — Intermediate studies with MPC"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="The Laurel" src="https://content3.jdmagicbox.com/comp/karimnagar/dc/9999px878.x878.1235665610q2d1j8.dc/catalogue/the-laurel-high-school-karimnagar-ho-karimnagar-schools-2wyiwpv.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="The Laurel High School"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                92% CGPA
              </Typography>
              {' — Higher Secondory Education with Computer Classes'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}