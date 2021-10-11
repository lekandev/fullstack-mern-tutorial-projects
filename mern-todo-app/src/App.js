import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import { TodoList } from "./TodoList";
import { EditTodo } from "./EditTodo";
import { CreateTodo } from "./CreateTodo";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Todos</Link>
          </li>
          <li>
            <Link to="/create">Create Todo</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={TodoList} />
        <Route path="/edit/:id" component={EditTodo} />
        <Route path="/create" component={CreateTodo} />
      </Switch>
    </div>
  );
}

export default App;
