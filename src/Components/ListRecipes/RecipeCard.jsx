import { useNavigate } from "react-router-dom";
import "./ListRecipes.css"

const RecipeCard = (data) => {
    const { idMeal, strMeal, strMealThumb,strTags} = data.data
    const navigate = useNavigate();
    return(
        <div className="container" key={idMeal} onClick={() => {navigate(`/${idMeal}`)}}>
            <img src={strMealThumb} alt="" className="container__img" />
            <h1 className="container__title">{strMeal}</h1>
            <hr className="line"></hr>
            <span className="container__tags">{strTags}</span>
        </div>
    );
};

export default RecipeCard;