import React from "react";
import PropCalls from "./UI-Frontend/Props/PropCalls";
import PropCards from "./UI-Frontend/Props/PropCards";
import StateCall from "./UI-Frontend/State/StateCall";
import StateCard from "./UI-Frontend/State/StateCard";

const App = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center p-10 bg-gray-100">
      {/* <PropCalls name="Samith" skills="Software developer" /> */}
      {/* <PropCards
        title="Frappuccino"
        price={12}
        rate={4.8}
        category="Cold Coffee"
        image="https://i.pinimg.com/736x/2c/48/93/2c4893842beb0a3712b53fab8e1bb3e5.jpg"
        decs="A flavourful Frappuccino blended beverage with creamy texture."
      />

      <PropCards
        title="Strawberry Latte"
        price={7}
        rate={4.5}
        category="Fruit Drink"
        image="https://i.pinimg.com/736x/7f/d1/85/7fd1850e20c00d8ef133306f4f6a5491.jpg"
        decs="Sweet strawberry flavor mixed with fresh milk."
      />

      <PropCards
        title="Matcha Latte"
        price={10}
        rate={4.9}
        category="Japanese Tea"
        image="https://i.pinimg.com/736x/1e/26/01/1e26017af5dfaa1305cba28b02f4671a.jpg"
        decs="Premium matcha with smooth milk and a rich taste."
      />

      <PropCards
        title="Caramel Macchiato"
        price={15}
        rate={5.0}
        category="Coffee"
        image="https://i.pinimg.com/736x/95/a0/75/95a075b0358a40be21cc680face06721.jpg"
        decs="Espresso with caramel sauce and creamy milk."
      /> */}

      {/* <StateCall/> */}

      <StateCard/>
    </div>
  );
};

export default App;
