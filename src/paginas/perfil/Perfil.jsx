import Historias from "../../componentes/historias/Historias";
import "./perfil.css";
import Topbar from "../../componentes/topbar/Topbar";
import Sidebar from "../../componentes/sidebar/Sidebar";
import Feed from "../../componentes/feed/Feed";
import Rightbar from "../../componentes/rightbar/Rightbar";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className={"profile ${mood}"}>
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="assets/portada.jpg"
                alt="Portada"
              />
              <img
                className="profileUserImg"
                src="assets/persona1.jpg"
                alt="Usuario"
              />
              <div className="profileInfo">
                <h4 className="profileInfoName">Karelia Guillen</h4>
                <span className="profileInfoDesc">Hello</span>
              </div>
            </div>
            <Historias />
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
