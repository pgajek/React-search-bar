import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import axios from "axios";
import { useDebounce } from "./hooks/useDebounce";

function App() {
  const [cards, setCards] = useState([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const debounceSearch = useDebounce(searchValue);

  const getCards = async (name: string = "divine") => {
    if (name === "") return;
    const options = {
      method: "GET",
      url: `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/search/${name}`,
      headers: {
        "X-RapidAPI-Key": "680b1fbb7cmshc2ad2792cd374bdp104393jsne359b5a60a11",
        "X-RapidAPI-Host": "omgvamp-hearthstone-v1.p.rapidapi.com",
      },
    };

    try {
      const cards = await axios.request(options);
      setCards(cards.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCards(debounceSearch);
  }, [debounceSearch]);

  return (
    <div className="search-wrapper">
      <label htmlFor="search" className="search">
        Search Users:
      </label>
      <input
        type="search"
        id="search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <div className="user-cards">
        {cards.map((card: any, key: number) => (
          <Card key={key} name={card.name} playerClass={card.playerClass} />
        ))}
      </div>
    </div>
  );
}

export default App;
