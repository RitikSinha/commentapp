import { CommentForm, CommentList } from "./components";
import "./app.css";
function App() {
  return (
    <div className="container">
      <CommentList />
      <CommentForm />
    </div>
  );
}

export default App;
