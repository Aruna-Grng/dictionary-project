import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./Results.css";

export default function Results(props) {
    if (props.results) {
        return (
            <div className="Results">
                <section>
                    <h2 className="searchword">{props.results.word}</h2>
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