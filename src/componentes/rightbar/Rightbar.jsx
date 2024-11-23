import "./rightbar.css";

export default function Rightbar({ profile }) {
  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">Contactos</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="assets/persona4.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <div className="rightbarFollowingDetails">
              <span className="rightbarFollowingRealName">Camila</span>
              <span className="rightbarFollowingUsername">@Camila123</span>
            </div>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/persona2.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <div className="rightbarFollowingDetails">
              <span className="rightbarFollowingRealName">Julio Andrade</span>
              <span className="rightbarFollowingUsername">@juli99</span>
            </div>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/persona3.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <div className="rightbarFollowingDetails">
              <span className="rightbarFollowingRealName">John Soto</span>
              <span className="rightbarFollowingUsername">@juli99</span>
            </div>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/persona5.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <div className="rightbarFollowingDetails">
              <span className="rightbarFollowingRealName">John Calle</span>
              <span className="rightbarFollowingUsername">@juli99</span>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">{<ProfileRightbar />}</div>
    </div>
  );
}
