import React from "react";
import { Link } from "react-router-dom";
import snacks from "./snacks";

const VendingMachine = () => {
    // const [snacks, setSnacks] = useState()

    const snacksInStock = snacks.filter(snack => snack.qty !== 0)
    return(
        snacksInStock.map(snack => (
            <p>Select: <Link to={`/vending/${snack.name}`}>{snack.name}</Link></p>
        )
        )
    )
}

export default VendingMachine;