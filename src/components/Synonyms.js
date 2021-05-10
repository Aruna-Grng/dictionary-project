import React from "react";

export default function Synonyms(props) {
    if (props.wordSynonyms) {
        return (
            <ul>
                {props.wordSynonyms.map(function(synonym, index) {
                    return <li key={index}>
                        {synonym}
                    </li>
                })}
            </ul>
        );
    } else {
        return null;
    }
}