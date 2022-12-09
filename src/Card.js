import React from 'react';

const Card = ({ id, name, email }) => {
    return (
        <div className='bg-light-blue dib br3 pa3 ma2 grow shadow-5'> 
            <img alt='Personal' src={`https://robohash.org/${id}?200*200`} />
            <div>
                <h2> {name}</h2>
                <p> {email} </p>
            </div>
        </div>
    );
}

export default Card;