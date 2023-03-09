import { useParams } from 'react-router-dom';

export function CharacterInformations(){
  const { name } = useParams();
  return(
    <div>
      <h1>Page of {name}</h1>
    </div>
  );
}