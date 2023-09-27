import { useState,useEffect } from "react"
import RecipeCard from "./RecipeCard";
import "./ListRecipes.css"

const ListRecipes = (props) => {
    const [recipes,setRecipes] = useState([]);

    //Connecting the API


    useEffect(() => {
        fetch(props.url).then(response => response.json()).then(data => {
            setRecipes(data.meals);
        });
    }, [props.url]);

    return(
        <section className="recipes-section">
            {
                !recipes ? "LOADING" :
                recipes.map((recipe => <RecipeCard data={recipe} /> ))
            }
        </section>
    )
};

export default ListRecipes;