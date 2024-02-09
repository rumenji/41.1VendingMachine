import React from "react";
import { useParams, Link } from "react-router-dom";
import snacks from "./snacks";

const Snack = () => {
    const params = useParams();
    console.log(params)
    const snack = snacks.filter(snack => snack.name === params.name)
    console.log(snack)
    return(
        <div>
            <h3>{snack[0].name}</h3>
            <h5>Price: ${snack[0].price}</h5>
            <h6>Quantity: {snack[0].qty}</h6>
            <Link to="/vending">Go back</Link>
        </div>
    )
}

export default Snack;