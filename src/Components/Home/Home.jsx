/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
// import React from 'react';
import Cart from "../Cart/Cart";
import "./Home.css";
import { useState, useEffect } from "react";

const Home = () => {
  const [allActors, setAllActors] = useState([]);
  const [selectedActors, setSelectedActors] = useState([]);
  const [remaining, setRemaining] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  const budget = 20000;

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setAllActors(data));
  }, []);

  const handleSelectActor = (actor) => {
    const isExits = selectedActors.find((item) => item.id === actor.id);
    let cost = actor.salary;

    if (isExits) {
      return alert("Already Exits");
    } else {
      selectedActors.forEach((item) => {
        cost = cost + item.salary;
      });

      const totalRemaining = budget - cost;
      if (cost > budget) {
        return alert("taka finish");
      } else {
        setRemaining(totalRemaining);
        setTotalCost(cost);
        const newSelectedActors = [...selectedActors, actor];
        setSelectedActors(newSelectedActors);
      }
    }
  };
  return (
    <div>
      <div className="home-container flex">
        <div className="card-container w-2/3 flex flex-wrap gap-10">
          {allActors.map((actor) => (
            <div
              key={actor.id}
              className="card w-[280px] h-[330px] space-y-[10px]"
            >
              <div className="card-img">
                <img
                  className="w-20 m-auto rounded-full"
                  src={actor.image}
                  alt=""
                />
              </div>
              <h2 className="text-white font-bold text-xl">{actor.name}</h2>
              <p>
                <small className="text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </small>
              </p>
              <div className="info text-white flex justify-between pb-2">
                <p>salary : {actor.salary} $</p>
                <p>{actor.role}</p>
              </div>
              <button
                onClick={() => handleSelectActor(actor)}
                className="bg-[aqua] p-2 rounded-md font-semibold"
              >
                Select
              </button>
            </div>
          ))}
        </div>
        <div className="cart">
          <Cart
            selectedActors={selectedActors}
            remaining={remaining}
            totalCost={totalCost}
          ></Cart>
        </div>
      </div>
    </div>
  );
};

export default Home;
