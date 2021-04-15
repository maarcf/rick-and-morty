import Card from './Card';

import './CardsSection.css';

const CardsSection = ({ characters }) => {
  return(
    <main className="main-section">
      {characters.map(character => {
        return(<Card imgUrl={character.image}
        name={character.name}
        gender={character.gender}
        status={character.status}
        species={character.species}
        key={character.id}
        />)
      })}
    </main>
  )
}

export default CardsSection;