import { Link } from "react-router-dom";
import { CursorArrow } from "../../components/decor/CoverArt";

export function NotFoundPage() {
  return (
    <div className="sx-stage sx-center">
      <div className="sx-wrap">
        <div className="sx-paper sx-paper--grid sx-404" style={{ margin: "0 auto" }}>
          <i aria-hidden="true" className="sx-tape" style={{ top: -10, left: "50%", marginLeft: -38 }} />
          <h1>404</h1>
          <p>Halaman ini terselip entah di mana di antara tumpukan kertas…</p>
          <Link to="/" className="sx-btn">
            <span style={{ width: 18 }}><CursorArrow /></span> Kembali ke meja
          </Link>
        </div>
      </div>
    </div>
  );
}
