import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
    if (props.wordSynonyms) {
        return (
            <div className="Synonyms">
                {props.wordSynonyms.map(function(synonym, index) {
                    return (
                        <span key={index}>
                            {synonym}
                        </span> 
                    )
                })}
            </div>
        );
    } else {
        return null;
    }
}