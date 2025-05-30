import { motion } from "framer-motion";
import FooterClient from "../../components/Users/FooterClient";
import HeaderUser from "../../components/Users/HeaderUser";

const PizzaCard = ({ title, date, imageUrl }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="bg-white rounded-xl shadow-md p-4 flex items-center gap-4"
  >
    <img
      className="w-20 h-20 object-cover rounded-lg"
      src={imageUrl}
      alt={title}
    />
    <div>
      <h3 className="text-base font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-500">{date}</p>
    </div>
  </motion.div>
);

const UserHome = () => {
  const pizzaImage =
    "https://th.bing.com/th/id/R.5dc321d3bb1e873246a9aa5bd551a900?rik=qjSFZHo4Z95YDw&riu=http%3a%2f%2fnepizzact.com%2fwp-content%2fuploads%2f2016%2f12%2fmain-image-2400x1300.jpg&ehk=MnAFuKtYjhPHA21qPL6sZCnKrwnz0fy8RGrOUnhO%2fDU%3d&risl=&pid=ImgRaw&r=0";

  const pizzaHistory = [
    { title: "Pizza Margherita", date: "12 mai 2024" },
    { title: "Pizza 4 Fromages", date: "18 mai 2024" },
    { title: "Pizza Végétarienne", date: "25 mai 2024" },
    { title: "Pizza Pepperoni", date: "28 mai 2024" },
  ];

  return (
    <div className="bg-gradient-to-br from-[#f0f4f8] to-[#dbe5ed] min-h-screen flex flex-col pt-14">
      <HeaderUser />

      <main className="flex-grow px-4 md:px-12 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-6 shadow-lg flex flex-col items-center"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                🍕 Pizza commandée
              </h2>
              <img
                src={pizzaImage}
                alt="pizza"
                className="rounded-xl w-full max-w-sm shadow-md"
              />
              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold text-gray-700">
                  Pizza Reine
                </h3>
                <p className="text-sm text-gray-500">
                  Commandée le 30 mai 2025
                </p>
              </div>
              <button className="mt-6 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-xl shadow">
                Recommander 🍽️
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl p-6 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              📜 Historique des commandes
            </h2>
            <div className="space-y-4 max-h-[500px] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
              {pizzaHistory.map((item, index) => (
                <PizzaCard
                  key={index}
                  title={item.title}
                  date={item.date}
                  imageUrl={pizzaImage}
                />
              ))}
            </div>
            <div className="flex justify-end mt-4">
              <button className="btn btn-outline text-green-600 hover:bg-green-600 hover:text-white transition-colors duration-300">
                See more...
              </button>
            </div>
          </motion.div>
          
        </div>

        {/* ➤ Section Promotion corrigée */}
        {/* ➤ Section Promotion corrigée avec prix */}
        <div className="mt-9 bg-white rounded-xl shadow-md p-4">
          <p className="text-2xl font-bold text-gray-800 mb-6 text-start">
            Promotion
          </p>

          <div className="carousel w-full">
            {/* Slide 1 */}
            <div id="slide1" className="carousel-item relative w-full h-64">
              <img
                src={pizzaImage}
                className="w-full h-full object-cover rounded-xl"
                alt="Promotion 1"
              />
              {/* Bloc prix */}
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2 rounded-b-xl">
                <p>
                  <span className="line-through mr-2">15.00€</span>
                  <span className="text-green-400 font-bold">12.00€</span>
                </p>
              </div>
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>

            {/* Slide 2 */}
            <div id="slide2" className="carousel-item relative w-full h-64">
              <img
                src={pizzaImage}
                className="w-full h-full object-cover rounded-xl"
                alt="Promotion 2"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2 rounded-b-xl">
                <p>
                  <span className="line-through mr-2">17.00€</span>
                  <span className="text-green-400 font-bold">13.50€</span>
                </p>
              </div>
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>

            {/* Slide 3 */}
            <div id="slide3" className="carousel-item relative w-full h-64">
              <img
                src={pizzaImage}
                className="w-full h-full object-cover rounded-xl"
                alt="Promotion 3"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2 rounded-b-xl">
                <p>
                  <span className="line-through mr-2">14.00€</span>
                  <span className="text-green-400 font-bold">11.00€</span>
                </p>
              </div>
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>

            {/* Slide 4 */}
            <div id="slide4" className="carousel-item relative w-full h-64">
              <img
                src={pizzaImage}
                className="w-full h-full object-cover rounded-xl"
                alt="Promotion 4"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2 rounded-b-xl">
                <p>
                  <span className="line-through mr-2">16.50€</span>
                  <span className="text-green-400 font-bold">13.00€</span>
                </p>
              </div>
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <button className="btn btn-outline text-green-600 hover:bg-green-600 hover:text-white transition-colors duration-300">
              See more...
            </button>
          </div>
        </div>
      </main>

      <FooterClient />
    </div>
  );
};

export default UserHome;
