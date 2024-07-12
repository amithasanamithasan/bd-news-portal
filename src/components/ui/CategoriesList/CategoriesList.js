import getAllCategories from "@/utils/getAllCategories";


const CategoriesList = async () => {
    const {data:allCategories} =await getAllCategories();
    console.log(allCategories);
    return <div>
        <h1> Categories</h1> 
    </div>;
    
};

export default CategoriesList;