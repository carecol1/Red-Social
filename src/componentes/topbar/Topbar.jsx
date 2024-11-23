import "./topbar.css";
import {
  Search as SearchIcon,
  Person3 as Person3Icon,
  Message as MessageIcon,
  Notifications as NotificationIcon,
} from "@mui/icons-material";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Red Social</span>
      </div>
      <div className="topbarCenter"></div>
      <div className="searchbar">
        <SearchIcon className="searchIcon" />
        <input placeholder="Buscar" className="searchInput" />
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Inicio</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person3Icon />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <MessageIcon />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <NotificationIcon />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/persona1.jpg" alt="" className="topbarImg" />
      </div>
    </div>
  );
}
