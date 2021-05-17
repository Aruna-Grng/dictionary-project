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
          <p>Open source in <a href="https://github.com/Aruna-Grng/dictionary-project" target="_blank" rel="noreferrer">Github</a> by Aruna Gurung. </p>
      </div>
    </div>
  );
}

export default App;
