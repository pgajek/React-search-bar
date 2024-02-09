import "./App.css";

function App() {
  return (
    <div className="search-wrapper">
      <label htmlFor="search" className="search">
        Search Users:
      </label>
      <input type="search" id="search" />
      <div className="user-cards">
        <div className="card">
          <header className="card-header">My name</header>
          <div className="card-body">email@emailer.em</div>
        </div>
        <div className="card">
          <header className="card-header">My name</header>
          <div className="card-body">email@emailer.em</div>
        </div>
        <div className="card">
          <header className="card-header">My name</header>
          <div className="card-body">email@emailer.em</div>
        </div>
        <div className="card">
          <header className="card-header">My name</header>
          <div className="card-body">email@emailer.em</div>
        </div>
        <div className="card">
          <header className="card-header">My name</header>
          <div className="card-body">email@emailer.em</div>
        </div>
        <div className="card">
          <header className="card-header">My name</header>
          <div className="card-body">email@emailer.em</div>
        </div>
        <div className="card">
          <header className="card-header">My name</header>
          <div className="card-body">email@emailer.em</div>
        </div>
      </div>
    </div>
  );
}

export default App;
