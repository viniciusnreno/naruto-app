import { CharacterPreview } from '../../components/CharactersPreview'

export function Home(){
  return (
    <div className="container mx-auto text-center">
      <h1 className="text-4xl font-bold pt-4">Shaman King App</h1>
      <CharacterPreview />
    </div>
  )
}