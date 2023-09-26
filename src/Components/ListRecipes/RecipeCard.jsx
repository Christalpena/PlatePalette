import { useNavigate } from "react-router-dom";
import "./ListRecipes.css"

const RecipeCard = (data) => {
    const { idMeal, strMeal, strMealThumb} = data.data
    const navigate = useNavigate();
    console.log(data)
    return(
        <div className="container" key={idMeal} onClick={() => {navigate(`/${idMeal}`)}}>
            <img src={strMealThumb} alt="" className="container__img" />
            <h1 className="container__title">{strMeal}</h1>
        </div>
    );
};

export default RecipeCard;