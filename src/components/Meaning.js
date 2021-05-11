import React from "react";
import Example from "../Example";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
    return (
        <div>
            <h3>{props.wordMeaning.partOfSpeech}</h3>
            {props.wordMeaning.definitions.map(function(definition, index) {
                return (
                    <div key={index}>
                        <p>
                            <strong>Definition: </strong>
                            {definition.definition}
                            <br />
                            <Example wordExample={definition.example} />
                            <br />
                            <Synonyms wordSynonyms={definition.synonyms} />
                        </p>
                    </div>
                )
            })}
            
            
        </div>
    )
}