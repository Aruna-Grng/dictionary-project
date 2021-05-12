import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function Results(props) {
    
    console.log(props.results);
    if (props.results) {
        return (
            <div className="Results">
                <section>
                    <h3>{props.results.word}</h3>
                    {props.results.phonetics.map(function(phonetic, index) {
                        return (
                            <div key={index}>
                                <Phonetics soundPhonetics={phonetic} />
                            </div>
                        )
                    })}
                </section>
                {props.results.meanings.map(function(meaning, index) {
                    return (
                        <section key={index}>
                            <Meaning wordMeaning={meaning} />
                        </section>
                    );
                })}
            </div> 
        );
    } else {
        return null;
    }
}