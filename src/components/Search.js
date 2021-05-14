import React, { useState } from "react";
import axios from "axios";
import './Search.css';
import Results from "./Results";


export default function Search(props) {
    let [newWord, setNewWord] = useState(props.defaultKeyword);
    let [newResults, setNewResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function handleSearch(response) {
        setNewResults(response.data[0]);
    }

    function searchWord() {
        let apiUrl =`https://api.dictionaryapi.dev/api/v2/entries/en_US/${newWord}`;
        axios.get(apiUrl).then(handleSearch);
    }

    function handleSubmit(event) {
        event.preventDefault();
        searchWord();
    }

    function handleWordSearch(event) {
        setNewWord(event.target.value);
    }

    function load() {
        setLoaded(true);
        searchWord();
    }

    if (loaded) {
        return (
            <div className="Search">
                <section>
                    <form onSubmit={handleSubmit}>
                        <div className="inputBar">
                            <i className="fa fa-search" aria-hidden="true"></i>
                            <input 
                            type="search" 
                            placeholder="Enter a word..."
                            onChange={handleWordSearch}
                            />
                        </div>
                        <div className="hint">
                            suggested word: valley, bicycle, wine, coat... 
                        </div>
                    </form>
                </section>
                <Results results={newResults} />
            </div>
    );
    } else {
        load();
        return "Loading...";
    }
    
}