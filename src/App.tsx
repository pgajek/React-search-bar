import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const [searchValue, setSearchValue] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";

  const getUsers = async () => {
    const users = await axios.get(url);

    setUsers(users.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="search-wrapper">
      <label htmlFor="search" className="search">
        Search Users:
      </label>
      <input type="search" id="search" value={searchValue} />
      <div className="user-cards">
        {users.map((user: any, key: number) => (
          <Card key={key} name={user.name} email={user.email} />
        ))}
      </div>
    </div>
  );
}

export default App;
