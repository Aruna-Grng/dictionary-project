import React, { useState } from "react";
import axios from "axios";
import './Search.css';


export default function Search() {
    let [newWord, setNewWord] = useState(null);

    function handleSearch(response) {
        console.log(response.data);
    }

    function searchWord(event) {
        event.preventDefault();

        let apiUrl =`https://api.dictionaryapi.dev/api/v2/entries/en_US/${newWord}`;
        axios.get(apiUrl).then(handleSearch);
    }

    function handleWordSearch(event) {
        setNewWord(event.target.value);
    }

    return (
        <div className="Search">
            <form onSubmit={searchWord}>
                <div>
                    <i className="fa fa-search" aria-hidden="true"></i>
                    <input 
                    type="search" 
                    placeholder="Enter a word..."
                    onChange={handleWordSearch}
                    style={{ width: 300 }}
                    />
                </div>
            </form>
        </div>
    );
}