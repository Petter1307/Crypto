import { useState } from "react";
const Cards = ({ cards, setCards }) => {
  const [selected, setSelected] = useState();
  const handleClick = (ev) => {
    setSelected(ev.currentTarget.id);
  };
  const handleDelete = (ev) => {
    const elem = ev.currentTarget.parentElement.id;
    setCards(cards.filter((item) => item.name !== elem));
    console.log(elem);
  };
  return (
    <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
      {cards.map((card, i) => (
        <div
          key={i}
          id={card.name}
          className={`bg-white overflow-hidden shadow rounded-lg border-solid ${
            selected === card.name ? "border-purple-800 border-4" : ""
          } cursor-pointer`}
          onClick={handleClick}
        >
          <div className="px-4 py-5 sm:p-6 text-center">
            <dt className="text-sm font-medium text-gray-500 truncate">
              {card.name}
            </dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">
              {card.value == 0 ? "~" : card.value}
            </dd>
          </div>
          <div className="w-full border-t border-gray-200"></div>
          <button
            onClick={handleDelete}
            className="flex items-center justify-center font-medium w-full bg-gray-100 px-4 py-4 sm:px-6 text-md text-gray-500 hover:text-gray-600 hover:bg-gray-200 hover:opacity-20 transition-all focus:outline-none"
          >
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#718096"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            Delete
          </button>
        </div>
      ))}
    </dl>
  );
};
export default Cards;
