import { useState,useEffect } from "react"
import { useParams } from "react-router-dom";

import "./RecipeInf.css"


const RecipeInf = () => {
    const {RecipeId} = useParams();
    const [recipeInf, setRecipeInf] = useState('')


    useEffect(() => {
        fetch(`https:/www.themealdb.com/api/json/v1/1/lookup.php?i=${RecipeId}`).then(response => response.json()).then(data => {
            setRecipeInf(data.meals[0]);
        });
    }, []);

    const {strMeal,strMealThumb,strInstructions,strTags} = recipeInf
    return(
        <section className="container-section">
            <div className="recipe">
                <img src={strMealThumb} alt={strMeal} className="recipe__img"></img>
                <h1 className="recipe-information__title">{strMeal}</h1>
                <hr className="line" />

                <div className="recipe-information">
                    <div className="recipe-ingredients">
                        <h1>INGREDIENTS</h1>
                            <ul>
                                {Object.keys(recipeInf).map((key, index) => {
                                if (key.includes("strIngredient") && recipeInf[key]) {
                                const ingredientNumber = key.replace("strIngredient", "");
                                const measureKey = `strMeasure${ingredientNumber}`;
                                return (
                                    <li key={index}>
                                    {recipeInf[key]}: {recipeInf[measureKey]}
                                    </li>
                                );
                                }
                                return null;
                            })}
                            </ul>
                    </div>

                </div>
                <hr className="line" />
                <div className="recipe-instructions">
                        <h1>INSTRUCTIONS</h1>
                        <p>{strInstructions}</p>
                        <span>{strTags}</span>
                </div>
            </div>
        </section>
    )
};


export default RecipeInf;