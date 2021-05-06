import React, { useState } from "react";
import './Search.css';


export default function Search() {
    let [word, setWord] = useState(null);

    function searchWord(event) {
        event.preventDefault();
        alert(`Searching for ${word} definition...`);
    }

    function handleWordSearch(event) {
        setWord(event.target.value);
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