import React from "react";

export default function Example(props) {
    if (props.wordExample) {
        return (
            <div>
                <em>{props.wordExample}</em>
            </div>
        )
    } else {
        return null;
    }
}