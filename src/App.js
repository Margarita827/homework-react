
import './App.css';
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <Weather />
      <footer>
        Coded by 
        <a href="https://github.com/Margarita827" target="_blank">
          Margarita Ibáñez
        </a>
        , open sourced on 
        <a
          href="https://github.com/Margarita827/homework-react"
          target="_blank"
        >
          GitHub
        </a>
        , and website hosted on 
        <a
          href="https://app.netlify.com/sites/fluffy-blancmange-c8e322/overview"
          target="_blank"
        >
        ,  Netlify
        </a>
      </footer>
    </div>
  );
}


