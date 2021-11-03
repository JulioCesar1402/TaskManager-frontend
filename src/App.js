import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <b>Tasks List</b>
        </p>
      </header>
      <section className="App-section">
        <div>
          <p>Title:</p>
            <label>
              <input type="text" />
            </label>
        </div>
        <div>
          <select>
            <option value="" selected>Category</option>
            <option value="lime">Lime</option>
            <option selected value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </div>
        <div>
          <p>Description:</p>
          <label>
            <textarea/>
          </label>
        </div>
        <input type="button" value="Submit" />
        <input type="button" value="See all tasks" />
      </section>
    </div>
  );
}

export default App;
