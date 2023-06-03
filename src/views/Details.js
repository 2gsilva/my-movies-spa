import React from "react";
import { useParams } from "react-router-dom";
import { DetailsItem } from "../components/DetalsItem";

export const Details = () =>{
    let { id } = useParams();
    return(
        <div>
            <DetailsItem id={id} />
        </div>
    )
}