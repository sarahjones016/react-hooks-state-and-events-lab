import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isDark, setIsDark] = useState(false);
  const appClass = isDark ? "App dark" : "App light"
  
  function clickHandler() {
    setIsDark(!isDark);
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={clickHandler}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
