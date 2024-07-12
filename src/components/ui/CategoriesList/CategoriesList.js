import getAllCategories from "@/utils/getAllCategories";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";


const CategoriesList = async () => {
    const {data:allCategories} =await getAllCategories();
    console.log(allCategories);
    return (
        <Box className="mt-6 bg-green-200  py-0">
            <Typography variant="h6">Categories</Typography>
            <Divider></Divider>
            <Stack rowGap={1} sx={{mt :"2.5"}} >
               {
                allCategories.map(category=>(
                  <Button variant="outlined"
                  key={category.id}>
 
                  <Link href={`/categories/news?category=${category.title}`}>{category.title.toLowerCase()}</Link>
                  </Button>
                ))}; 
                </Stack>
        </Box>
    );
};

export default CategoriesList;