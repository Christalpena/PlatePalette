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
                !recipes ? 
                <div className="not-found">
                    <img className="not-found__img" src="img/food-not-found.png" alt="food-not-found"></img>
                    <h1 className="not-found__title">SORRY, WE COULDN'T FIND ANYTHING</h1>
                </div> :
                recipes.map(((recipe,index) => <RecipeCard key={index} data={recipe} /> ))
            }
            </div>
        </section>
    )
};

export default ListRecipes;