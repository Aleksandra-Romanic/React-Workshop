import { useEffect, useState } from "react";
import booksJson from "../books.json"
import { Box, IconButton, Slide, Stack} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { CardBook } from "./CardBook";

export const Carousel = () => {

    const cardsPerPage = 6;
    const [booksArrPerPage, setBooksArrPerrPage] = useState<{ 
        image: string,
        rating: number,
        description: string,
        author: string,
        available: boolean } []>([]);
    const [slideDirection, setSlideDirection] = useState < "right" | "left" | undefined>("left");
    const [currentPage, setCurrentPage] = useState(0);

    useEffect( () => {
        setBooksArrPerrPage(booksJson.slice(currentPage * cardsPerPage, currentPage * cardsPerPage + cardsPerPage))
    }, [currentPage])

    const handleNextPage = () => {
        setSlideDirection("left");
        setCurrentPage((prevPage) => prevPage + 1);
    }

    const handlePrevPage = () => {
        setSlideDirection("right");
        setCurrentPage((prevPage) => prevPage -1);
    }


    return (
        <Stack justifyContent={"center"} marginTop={"40px"} direction={"row"} spacing={2} >

            <Box component={Stack} justifyContent={"center"}><IconButton disabled={currentPage ==0}  onClick={handlePrevPage}><NavigateBeforeIcon/>
            </IconButton></Box>

            {booksJson.map((_, index) => {
            return (
             <Box sx={{display: currentPage === index ? "block" : "none"}} >
                
                <Slide direction={slideDirection} in={currentPage == index}>
                <Stack spacing={2} direction="row">

                {booksArrPerPage.map(book => <CardBook book={book}/>)}
                </Stack>
                </Slide>
                </Box>
                )})}

                <Box component={Stack} justifyContent={"center"}><IconButton onClick={handleNextPage}
                disabled={currentPage>=Math.ceil(booksJson.length/cardsPerPage)-1}
                ><NavigateNextIcon/></IconButton></Box>
            </Stack>

    );
}
export default Carousel;