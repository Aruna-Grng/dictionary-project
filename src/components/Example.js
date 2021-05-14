import React from "react";
import "./Example.css";

export default function Example(props) {
    if (props.wordExample) {
        return (
            <div className="Example">
                <em>{props.wordExample}</em>
            </div>
        )
    } else {
        return null;
    }
}