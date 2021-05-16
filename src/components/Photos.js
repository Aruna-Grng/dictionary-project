import React from "react";
import "./Photos.css";

export default function Photos(props) {
    if (props.displayPhotos) {
        return (
            <section className="Photos">
                <div className="row">
                        {props.displayPhotos.map(function (photo, index) {
                            return(
                                <div className="col-4" key={index} >  
                                    <img src={photo.src.landscape} className="img-fluid" />
                                </div>   
                            );
                        })}
                </div>
            </section>
        );
    } else {
        return null;
    }
}