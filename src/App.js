import './App.css';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="App-header">       
          <h1>Dictionary</h1>
          <h2>Search for a word...</h2>
        </div>
          <Search defaultKeyword="bird" />
          <p>Open source code in <a href="https://github.com/Aruna-Grng/dictionary-project" target="_blank" rel="noreferrer">Github</a> by Aruna Gurung and hosted on <a href="https://frosty-borg-2148a2.netlify.app/" target="_blank" rel="noreferrer">Netlify</a>. </p>
      </div>
    </div>
  );
}

export default App;
