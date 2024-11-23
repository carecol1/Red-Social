import Topbar from "../../componentes/topbar/Topbar";
import Sidebar from "../../componentes/sidebar/Sidebar";
import Feed from "../../componentes/feed/Feed";
import Rightbar from "../../componentes/rightbar/Rightbar";
import "./home.css";

export default function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
}
