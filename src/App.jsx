import "./App.css";
function App() {
  return (
    <div className="container">
      <nav>
        <img src="images/logo.png" className="logo" alt="imaged" />
        <ul>
          <li>
            <a href="temp.com">Travel Guide</a>
          </li>
          <li>
            <a href="temp.com">Famous Places</a>
          </li>
          <li>
            <a href="temp.com">Contact Us</a>
          </li>
        </ul>
        <button className="btn">
          <img src="images/icon.jpg" className="icon" alt="icon" />
          Booking
        </button>
      </nav>
      <div className="content">
        <h1>Discover Your Next :-) Adventure!</h1>
        <br/>
        <form>
          <input type="text" placeholder="Country Name" />
          <button type="submit" className="btn">
            Search
          </button>
        </form>
      </div>
      <p></p>
    </div>
  );
}
 
export default App;