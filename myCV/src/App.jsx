import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import { CV } from "./CV/Cv";


const { hero, Education, Experience, Languages, Titulation } = CV;

function App() {
    const [showEducation, setShowEducation] = useState(true);
  return (
    <button
        className="custom-btn btn-4"
        onClick={() => setShowEducation(true)}>Education</button>
    <button
        className="custom-btn btn-4"
        onClick={() => setShowEducation(false)}>Experience</button>
    <div>
        {showEducation ? (<Education education={education} />) : (<Experience experience={experience} />)}
    </div>
    <div className="App">
     <Hero hero={hero} />
     <Education education={Education} />
     <Experience experience={Experience} />
     <More
     Languages={Languages}
     Titulation={Titulation}
     />
    </div>
   );
};

  export default App;
 

