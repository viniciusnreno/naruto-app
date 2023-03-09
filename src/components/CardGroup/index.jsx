import charactersJSON from '../../assets/charactersJSON.json';
import { CharacterCard } from '../Card';

export function CardGroup(){
  return(
    <div className="flex flex-wrap md:justify-between justify-center">
      {
        charactersJSON.map(char => (
          <CharacterCard key={char.name} name={char.name} village={char.village} objective={char.objective} definition={char.definition}/>)
        )
      }
    </div>
  );
}