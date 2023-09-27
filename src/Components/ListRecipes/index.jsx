import { useState,useEffect } from "react"
import RecipeCard from "./RecipeCard";
import "./ListRecipes.css"

const ListRecipes = () => {
    const [recipes,setRecipes] = useState([]);

    //Connecting the API
    const [url,setUrl] = useState('https:/www.themealdb.com/api/json/v1/1/search.php?s=');

    useEffect(() => {
        fetch(url).then(response => response.json()).then(data => {
            setRecipes(data.meals);
        });
    }, [url]);

    return(
        <section className="recipes-section">
            {
                recipes.map((recipe => <RecipeCard data={recipe} /> ))
            }
        </section>
    )
};

export default ListRecipes;