import "./App.css";
import { Card } from "./components/Card";
import { users } from "./data/users";

function App() {
  return (
    <>
      <header>
        <h1>Array function magic</h1>
        <button>All</button>
        <button>Women</button>
        <button>Men</button>
        <button>By name</button>
        <button>By age</button>
      </header>
      <main>
        <section className="card-list">
          {users.map((user) => {
            return <Card key={user.email} user={user} />;
          })}
        </section>
      </main>
    </>
  );
}

export default App;
