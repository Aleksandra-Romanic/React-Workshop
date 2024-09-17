
import { Box, Stack, Typography } from "@mui/material";
import yellowStar from "../assets/yellowStar.svg";
import greenDot from "../assets/greenDot.svg";


type Book = {
  image: string,
  rating: number,
  description: string,
  author: string,
  available: boolean
}

export const CardBook = ({book}:{book:Book}) => {
    return (

      <Stack sx={{marginTop:10,marginLeft:10,width:"204px"}} direction={"column"}>
       
        <Stack  direction={"row"}>
          <Box  borderRadius={"8px"} sx={{marginRight:-10,width:"130px",height:"240px",background: "#EEEEEE",zIndex:1}}/>
          <Box sx={{zIndex:2,marginTop:"10px"}} borderRadius={"8px"}><img src={book.image}/></Box>
        </Stack>

       <Stack  sx={{marginTop:"12px"}}direction={"row"}> 
        <img src={yellowStar} width={"18px"} height={"18px"}/>
        <Typography  sx={{marginLeft:"6px"}}fontWeight={"bold"}>{book.rating}</Typography>
        <Typography sx={{opacity:0.5}} >/</Typography>
        <Typography sx={{opacity:0.5}}>5</Typography>
        <Typography sx={{opacity:0.5,marginLeft:"5px", marginBottom:"10px"}}>(2 ratings)</Typography>
       </Stack>
       
       
       <Typography sx={{fontFamily: "Neue Haas Unica W1G", fontSize: "16px", fontWeight:"400", lineHeight:"18px", textAlign:"left", marginBottom:"8px"
       }}>{book.description}</Typography>
       <Typography sx={{fontFamily: "Neue Haas Unica W1G", fontSize: "14px", fontWeight:"350", lineHeight:"18px", textAlign:"left", marginBottom:"17px"
       }} >{book.author}</Typography>

      <Box sx={{background: "#F7FCF4",width:"93px",height:"28px"}} borderRadius={"8px"}>
       
        <Stack direction={"row"}>
          <img src={greenDot}/>
          <Typography  sx={{ marginLeft:"8px"}}color="#65B32E">{book.available ? "available" : "unavailable"}</Typography>
        </Stack>
      </Box>
        
        </Stack>
    );


    
}




