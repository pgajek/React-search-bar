import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="search-wrapper">
      <label htmlFor="search" className="search">
        Search Users:
      </label>
      <input type="search" id="search" />
      <div className="user-cards">
        <Card name="Name" email="email@emailer.com" />
        <Card name="Name" email="email@emailer.com" />
        <Card name="Name" email="email@emailer.com" />
        <Card name="Name" email="email@emailer.com" />
        <Card name="Name" email="email@emailer.com" />
        <Card name="Name" email="email@emailer.com" />
        <Card name="Name" email="email@emailer.com" />
        <Card name="Name" email="email@emailer.com" />
        <Card name="Name" email="email@emailer.com" />
        <Card name="Name" email="email@emailer.com" />
        <Card name="Name" email="email@emailer.com" />
        <Card name="Name" email="email@emailer.com" />
        <Card name="Name" email="email@emailer.com" />
        <Card name="Name" email="email@emailer.com" />
      </div>
    </div>
  );
}

export default App;
