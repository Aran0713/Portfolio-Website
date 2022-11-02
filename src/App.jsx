import Intro from "./Components/intro/intro";
import About from "./Components/about/about";
import TechnologiesList from "./Components/technologiesList/technologiesList";
import Contact from "./Components/contact/contact";

const App = () => {
  return (
    <div> 
      <Intro/>
      <About/>
      <TechnologiesList/>
      <Contact></Contact>
    </div>
  )

};

export default App;
