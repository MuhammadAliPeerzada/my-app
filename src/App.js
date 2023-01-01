import React from "react";
import Main from "./components/Main";

function App() {
  var cardArray = [
    {
      img: "https://images.unsplash.com/photo-1625231334168-35067f8853ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      title: "Ford",
      description:
      "Ford Mustang Black Color Muscle Car "
    },

    {
      img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      title: "BMW",
      description:
        "Gray BMW On Road",
    },

    {
      img: "https://images.unsplash.com/photo-1619844175408-c05947985e2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
      title: "Porche",
      description:
        "Cyan Porche On Road",
    }
  ];

  var newCardArray = cardArray.map((item) => {
    return (
      <Main
        title={item.title}
        img={item.img}
        description={item.description}
        price={item.price}
      />
    );
  });

  return (
    <>
        <div className="container-fluid my-5 d-sm-flex flex-wrap">{newCardArray}</div>
      </>
  );
}

export default App;
