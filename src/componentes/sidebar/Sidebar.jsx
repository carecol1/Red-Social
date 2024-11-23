import "./sidebar.css";
import {
  Home as HomeIcon,
  Chat as ChatBubbleIcon,
  PlayCircleFilled as PlayCircleFilledIcon,
  Diversity3 as Diversity3Icon,
  BookmarkAdd as BookmarkAddIcon,
  Help as HelpIcon,
  Work as WorkIcon,
  School as SchoolIcon,
  CardGiftcard as CardGiftcardIcon,
  Dining as DiningIcon,
} from "@mui/icons-material";
import { Users } from "../../data";
import CloseFriend from "../closeFriend/CloseFriend";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        {/* Lista principal de elementos */}
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <HomeIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <ChatBubbleIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilledIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Diversity3Icon className="sidebarIcon" />
            <span className="sidebarListItemText">Grupos</span>
          </li>
          <li className="sidebarListItem">
            <BookmarkAddIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Preguntas</span>
          </li>
          <li className="sidebarListItem">
            <WorkIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Trabajos</span>
          </li>
          <li className="sidebarListItem">
            <SchoolIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Cursos</span>
          </li>
        </ul>

        {/* Botón para mostrar más */}
        <button className="sidebarButton">Muestrame más!</button>

        {/* Línea separadora */}
        <hr className="sidebarHr" />

        {/* Sección de regalos */}
        <p>Envía regalos a tus amigos!</p>
        <div className="sidebar2parte">
          <CardGiftcardIcon className="sidebarIconGift" />
          <DiningIcon className="sidebarIconGift" />
        </div>

        {/* Lista de amigos */}
        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
