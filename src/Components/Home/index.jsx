import "./Home.css"
import ListRecipes from "../ListRecipes";

const Home = (props) => {
    return (
        <main>
            <ListRecipes url={props.url}/>
        </main>
    );
};

export default Home;