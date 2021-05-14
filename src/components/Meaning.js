import React from "react";
import Example from "./Example";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
    return (
        <div className="Meaning">
            <h3 className="partOfSpeech">{props.wordMeaning.partOfSpeech}</h3>
            {props.wordMeaning.definitions.map(function(definition, index) {
                return (
                    <div key={index}>
                        <div>
                            <span className="definition">{definition.definition}</span>
                            <Example wordExample={definition.example} />
                            <Synonyms wordSynonyms={definition.synonyms} />
                        </div>
                    </div>
                )
            })}
            
            
        </div>
    )
}