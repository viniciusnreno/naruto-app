import { useParams } from 'react-router-dom';
import { Header } from '../../components/Header';
import charactersJSON from '../../assets/charactersJSON.json';

export function CharacterInformations(){
  const { name } = useParams();
  function getData(){
    return charactersJSON.find(char => char.name === name);
  }
  return(
    <>
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="w-full lg:w-8/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">{name.replace('_',' ')}</h1>
            <p className="font-normal text-base leading-6 text-gray-600 ">
              {
                getData().about
              }
            </p>
          </div>
          <div className="w-full lg:w-5/12 ">
            <img className="w-full h-64" src={`/public/images/${name}.png`} alt={name} />
          </div>
        </div>
      </div>
    </>
  );
}