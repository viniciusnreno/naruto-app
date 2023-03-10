import { Link } from 'react-router-dom';
export function Card(props) {
  return (
    <div className="max-w-sm md:w-80 w-72 rounded overflow-hidden shadow-lg mb-6">
      <img className="md:w-80 md:h-52 w-72" src={`/public/images/${props.name}.png`} />
        <div className="pl-6 pr-6 py-4">
          <div className="font-bold text-xl mb-2">{props.name.replace("_", " ")}</div>
          <p className="text-gray-700 text-base">
            <small className="text-sm"><strong className="font-medium">Objective:</strong> {props.objective}</small>
          </p>
        </div>
        <div className="pl-6 pr-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full pl-3 pr-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.village}</span>
          <span className="inline-block bg-gray-200 rounded-full pl-3 pr-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.definition}</span>
          <div className="inline-flex bg-gray-200 rounded-full p-2 mr-2 mb-2"><img className="w-4" src={`/public/images/${props.village}.png`}/></div>
        </div>
        <div className="pl-6 pr-6 pt-1 pb-5 flex">
          <Link to={`/details/${props.name}`}>
            <span href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </span>
          </Link>
        </div>
    </div>
  );
}