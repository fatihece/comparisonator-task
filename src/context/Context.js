import { createContext, useState } from "react";

export const MainContext = createContext();

const MainContextProvider = ({ children }) => {
  const [likes, setLikes] = useState([]);
  const toggleLikes = (player) => {
    likes.find((like) => like.id === player.id)
      ? setLikes(likes.filter((like) => like.id !== player.id))
      : setLikes([...likes, player]);
  };

  return (
    <MainContext.Provider value={{ likes, toggleLikes }}>
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
