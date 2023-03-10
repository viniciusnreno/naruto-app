import charactersJSON from '../../assets/charactersJSON.json';
import { Card } from '../Card';

export function CardGroup(){
  return(
    <div className="flex flex-wrap md:justify-between justify-center">
      {
        charactersJSON.map(char => (
          <Card key={char.name} name={char.name} village={char.village} objective={char.objective} definition={char.definition}/>)
        )
      }
    </div>
  );
}