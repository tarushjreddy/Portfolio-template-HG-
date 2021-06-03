import logo from "./logo.svg";
import "./App.css";
import Header from "./header.js";
import Body from "./body.js";
import Footer from "./fotter.js";
import Projects from "./Projects";
import Experience from "./Experience";
function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Projects/>
      <Experience/>
      <Footer />
    </div>
  );
}

export default App;
