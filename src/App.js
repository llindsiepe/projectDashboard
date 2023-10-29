import "./App.css";
import Content from "./layout/Content/Content.jsx";
import Sidebar from "./layout/Sidebar/Sidebar.jsx";

export default function App() {
  return (
    <div className="app">
      <Sidebar />
      <Content />
    </div>
  );
}
