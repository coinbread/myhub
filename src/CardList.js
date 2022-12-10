import React from "react";
import Card from "./Card";

const CardList = ({friends}) => {
   
    return (
        <>
            {
                friends.map((user, i) => {
                    return ( 
                        <Card
                            id = {user.id}
                            name = {user.fullname} 
                            email = {user.email} 
                            key = {i}
                        />
                    )
                })
            }
        </>
    )
} 
export default CardList;