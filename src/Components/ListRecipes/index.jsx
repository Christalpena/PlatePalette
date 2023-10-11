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
        <section>
            <div  className="recipes-section">
            {
                !recipes ? "LOADING" :
                recipes.map(((recipe,index) => <RecipeCard key={index} data={recipe} /> ))
            }
            </div>
        </section>
    )
};

export default ListRecipes;