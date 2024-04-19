import { useEffect, useState } from "react";
import "./App.css";
import { ReactCompareSlider } from "react-compare-slider";
import CardsInfo from "./components/CardsInfo";

const infoCar1 = [
  {
    id: 1,
    title: 64,
    label: "kWh",
    description: "batería",
  },
  {
    id: 2,
    title: 600,
    label: "Nm",
    description: "torque",
  },
  {
    id: 3,
    title: 320,
    label: "kW",
    description: "potencia",
  },
  {
    id: 4,
    title: 385,
    label: "km",
    description: "autonomía máxima",
  },
  {
    id: 5,
    title: 3.8,
    label: "s",
    description: "acelaración (0-100 km/h)",
  },
];

const infoCar2 = [
  {
    id: 1,
    title: 77,
    label: "kWh",
    description: "batería",
  },
  {
    id: 2,
    title: 350,
    label: "Nm",
    description: "torque",
  },
  {
    id: 3,
    title: 180,
    label: "kW",
    description: "potencia",
  },
  {
    id: 4,
    title: 520,
    label: "km",
    description: "autonomía máxima",
  },
  {
    id: 5,
    title: 6.5,
    label: "s",
    description: "acelaración (0-100 km/h)",
  },
];

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden">
      <ReactCompareSlider
        style={{ width: "100%", height: "100%" }}
        itemOne={
          <div className="relative w-full h-full">
            <img
              src="./images/car1.png"
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-90 lg:scale-[.65] 2xl:scale-100"
            />
            <img
              src="./images/car1-logo.png"
              className="w-2/3 md:w-auto absolute top-5 left-5"
            />
            <div className="absolute top-20 left-0 w-full h-20 md:px-2 lg:px-10">
              <div className="w-full grid grid-cols-3 md:grid-cols-5">
                {infoCar1.map((info) => (
                  <CardsInfo key={`car1-${info.id}`} info={info} textColor="text-gray-950"/>
                ))}
              </div>
            </div>
            <img
              src={isMobile ? "./images/car1-back-mobile.jpg" : "./images/car1-back.jpg"}
              className="w-full h-full object-cover"
            />
          </div>
        }
        itemTwo={
          <div className="relative w-full h-full bg-red-100">
            <img
              src="./images/car2.png"
              className="w-full md:w-auto absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-90 lg:scale-[.65] 2xl:scale-100"
            />
            <img
              src="./images/car2-logo.png"
              className="w-2/3 md:w-auto absolute top-5 left-5"
            />
            <div className="absolute top-20 left-0 w-full h-20  px-2 md:px-10">
              <div className="w-full grid grid-cols-3 md:grid-cols-5">
                {infoCar2.map((info) => (
                  <CardsInfo key={`car2-${info.id}`} info={info} textColor="text-white" />
                ))}
              </div>
            </div>
            <img
              src={isMobile ? "./images/car2-back-mobile.jpg" : "./images/car2-back-desktop.jpg"}
              className="w-full h-full object-cover"
            />
          </div>
        }
      />
      {/* <img
            src="./images/car1-back.jpg"
            className="object-cover w-full h-full"
          /> */}
    </div>
  );
}

export default App;
