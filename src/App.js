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
          <Search defaultKeyword="hello" />
      </div>
    </div>
  );
}

export default App;
