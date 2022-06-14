import { useState } from "react";
import { DeleteButton } from "../DelteteButton";
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
          <DeleteButton handleDelete={handleDelete} />
        </div>
      ))}
    </dl>
  );
};
export default Cards;
