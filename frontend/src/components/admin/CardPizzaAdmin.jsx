import React from "react";

const CardPizzaAdmin = () => {
  const pizzas = [
    {
      id: "1",
      pizzaname: "pizza",
      prix: "12",
      ingredient: ["tomate", "fromage"],
    },
    {
      id: "2",
      pizzaname: "pizza2",
      prix: "15",
      ingredient: ["champignon", "mozzarella"],
    },
    {
      id: "3",
      pizzaname: "pizza3",
      prix: "19",
      ingredient: ["poivron", "olive", "jambon"],
    },
    {
      id: "3",
      pizzaname: "pizza3",
      prix: "19",
      ingredient: ["poivron", "olive", "jambon"],
    },
    {
      id: "3",
      pizzaname: "pizza3",
      prix: "19",
      ingredient: ["poivron", "olive", "jambon"],
    },{
      id: "3",
      pizzaname: "pizza3",
      prix: "19",
      ingredient: ["poivron", "olive", "jambon"],
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-6 align-middle">
      {pizzas.map((piz, index) => (
        <div key={piz.id} className="flex flex-col mb-4 border p-4 rounded-lg bg-white  shadow-md">
          <img
            className="w-full object-cover rounded-lg mb-2"
            src="https://th.bing.com/th/id/R.5dc321d3bb1e873246a9aa5bd551a900?rik=qjSFZHo4Z95YDw&riu=http%3a%2f%2fnepizzact.com%2fwp-content%2fuploads%2f2016%2f12%2fmain-image-2400x1300.jpg&ehk=MnAFuKtYjhPHA21qPL6sZCnKrwnz0fy8RGrOUnhO%2fDU%3d&risl=&pid=ImgRaw&r=0"
            alt={`Pizza ${piz.pizzaname}`}
          />
          <div className="mt-2">
            <p><strong>Nom :</strong> {piz.pizzaname}</p>
            <p><strong>Prix :</strong> {piz.prix}€</p>
            <p><strong>Ingrédients :</strong></p>
            <ul className="list-disc list-inside ml-4">
              {piz.ingredient.map((ing, idx) => (
                <li key={idx}>{ing}</li>
              ))}
            </ul>
          </div>
          <div className="flex justify-end mt-4">
            <button className="btn btn-outline text-green-600 hover:bg-green-600 hover:text-white transition-colors duration-300">
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardPizzaAdmin;
