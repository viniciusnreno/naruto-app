import { CharacterCard } from '../../components/CharacterCard'
import charactersJSON from '../../assets/charactersJSON.json';

export function Home(){
  return (
    <div className="container mx-auto text-center">
      <h1 className="text-4xl font-bold mt-4 mb-9">Naruto App</h1>
      
      <div className="flex flex-wrap md:justify-between justify-center">
        {
          charactersJSON.map(char => (
            <CharacterCard name={char.name} village={char.village} objective={char.objective} slogan={char.slogan}/>)
          )
        }
      </div>



    </div>
  )
}