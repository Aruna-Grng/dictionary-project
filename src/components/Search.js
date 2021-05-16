import React, { useState } from "react";
import axios from "axios";
import './Search.css';
import Results from "./Results";
import Photos from "./Photos";


export default function Search(props) {
    let [newWord, setNewWord] = useState(props.defaultKeyword);
    let [newResults, setNewResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleSearch(response) {
        setNewResults(response.data[0]);
    }

    function handlePicture(response) {
        console.log(response.data.photos);
        setPhotos(response.data.photos);
    }

    function searchWord() {
        let apiUrl =`https://api.dictionaryapi.dev/api/v2/entries/en_US/${newWord}`;
        axios.get(apiUrl).then(handleSearch);

        const pexelsApiKey = "563492ad6f91700001000001896266c00f8942cd82b03c0eb4474800";
        let pexelUrl =`https://api.pexels.com/v1/search?query=${newWord}&per_page=1`;
        let headers = {"Authorization" : `Bearer ${pexelsApiKey}`};
        axios.get(pexelUrl, { headers: headers }).then(handlePicture);
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
                <Photos displayPhotos= {photos} />
            </div>
    );
    } else {
        load();
        return "Loading...";
    }
    
}