import "./Content.css";
import ContentTop from "../../components/ContentTop/ContentTop.jsx";
import ContentMain from "../../components/ContentMain/ContentMain.jsx";

export default function Content() {
  return (
    <div className="main-content">
      <ContentTop />
      <ContentMain />
    </div>
  );
}
