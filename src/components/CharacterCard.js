import React from 'react'

const CharacterCard = ({character}) => {
    return (
        <div>
            {console.log(character.name)}
            <p>{character.gender}</p>
            <p>{character.name}</p>
            <p>{character.gender}</p>
        </div>
    )
}

export default CharacterCard
