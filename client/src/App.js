import React, { useEffect, useState } from "react";
import { getMenuByDate } from "./api";
import MenuList from "./components/MenuList";

const App = () => {
  const [menu, setMenu] = useState([]);
  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const data = await getMenuByDate(today);
        setMenu(data);
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    };
    fetchMenu();
  }, [today]);

  return (
    <div>
      <h1>Today's Menu</h1>
      <MenuList menu={menu} />
    </div>
  );
};

export default App;
