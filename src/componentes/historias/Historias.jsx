import "./historias.css";
export default function Historias() {
  return (
    <div>
      <div className="stories">
        <div className="story">
          <img
            src="/assets/persona1.jpg"
            alt="Historia 1"
            style={{ border: "2px solid rgb(22, 22, 228)" }}
          />
          <span>tu historia</span>
        </div>
        <div className="story">
          <img src="/assets/historia2.jpg" alt="Historia 2" />
          <span>Camila</span>
        </div>
        <div className="story">
          <img src="/assets/historia3.jpg" alt="Historia 3" />
          <span>Gael</span>
        </div>
      </div>
    </div>
  );
}
