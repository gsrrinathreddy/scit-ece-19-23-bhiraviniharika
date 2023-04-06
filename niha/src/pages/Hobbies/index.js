import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import {useState,useEffect} from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';

export default function Hobbies(){
const [loader,setLoader] = useState(true);
    const [hobbies,setHobbies] = useState(null);

    const connectToServer = async  () => axios.get('http://localhost:8000/Hobbies')
                                            .then(res=>{
                                        
                                                console.log(res.data);
                                                setHobbies(res.data);
                                                setLoader(false)
                                            }).catch(err=>console.log(err))
useEffect(()=>{
   connectToServer();
},[])

  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">December</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREzsdw3UCx5zDWAIWuZeL6ZUOWWzOHafIjrw&usqp=CAU',
    title: 'Reading Novels',
    
    rows: 1,
    cols: 1,
    featured: true,
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIgddICHcQtAPt2egMBq9jVZibZjOEj4S_ng&usqp=CAU',
    title: 'Gardening',

    rows: 2,
    cols: 2,
  },
  
  {
    img: 'https://www.kpu.ca/sites/default/files/Recreation/badminton-league.jpg',
    title: 'Badminton',
    
   rows: 2,
   cols: 2,
   featured: true,
    
  },
  {
    img: 'https://iheartcraftythings.com/wp-content/uploads/2021/05/Woman-DRAWING-%E2%80%93-STEP-7.jpg',
    title: 'Drawing',
    
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6fB4v2iSoKnVjAWIZyyXaOROAIf2nChqluQ&usqp=CAU',
    title: 'Listening Music',
    
    rows: 2,
    cols: 2,
  },
  
];