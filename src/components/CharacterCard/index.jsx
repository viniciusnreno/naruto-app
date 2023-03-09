export function CharacterCard(props) {

  console.log(props)
  return (
    <div className="max-w-sm md:w-80 w-72 rounded overflow-hidden shadow-lg mb-6">
      <img className="md:w-80 md:h-52 w-72" src={`/public/${props.name}.png`} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{props.name}</div>
          <p className="text-gray-700 text-base">
            {props.objective}
            {/* {props.objective} */}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.village}</span>
        </div>
    </div>
  );
}