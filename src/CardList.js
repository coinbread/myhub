import React from "react";
import Card from "./Card";

const CardList = ({friends}) => {
    return (
        <>
            {friends.map((item, id) => 
                <Card id = {item.id} name = {item.fullname} email = {item.email}/>
            )}
        </>
    )
} 
export default CardList;