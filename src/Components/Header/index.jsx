import { useNavigate } from "react-router-dom";
import "./Header.css"
import { useState } from "react";
import {BsSearchHeartFill} from "react-icons/bs"



const Header = (props) => {
    const navigate = useNavigate();
    const [searchInf,setSearchInf] = useState("");
    const [ingredient,setIngredient] = useState(['Bread','Ham','Milk','Eggs','Garlic']);

    const driveEvent = (event) =>{
        event.preventDefault();
        setSearchInf(event.target.value);
    };
    const newUrl = () =>{
        props.setUrl(`https:/www.themealdb.com/api/json/v1/1/filter.php?i=${searchInf}`)
        navigate('/');

    };

    const url = 'https:/www.themealdb.com/api/json/v1/1/search.php?s=';

    const click = () =>{
        props.setUrl(url);
        navigate('/');
    };

    const p = (e,item) => {
        props.setUrl(`https:/www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient[item]}`)
        navigate('/');
    }

    return(
        <header className="header">
            <div className="form" >
                <input className="form__search-input" type='search' placeholder='Search recipes by ingredients' onChange={driveEvent}/>
                <BsSearchHeartFill onClick={newUrl} className="form__search-btn"/>
            </div>
            <img className="header__img" src="/img/Header.jpg" alt="page-img"></img>
            <h1 className="header__title" onClick={click}>Plate Palette</h1>
            <div className="header-filter">
                {
                    ingredient.map((item,index) =>
                    <h3 onClick={(e) => p(e,index)} key={index} className="header-filter__item">{item}</h3>
                    
                    )
                }
            </div>
        </header>
    )
};


export default Header;