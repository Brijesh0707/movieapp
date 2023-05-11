import "./App.css";
// import { AppContext } from './context'
import { Global } from './context'
import Search from "./Search"
import Movie from "./Movies"

const Home = () => {
    // const name = useContext(AppContext)
    const name = Global();
  return (
    <>
    <section id="main4">
    <Search></Search>
    <Movie></Movie>
    </section>
    </>
  )
}

export default Home