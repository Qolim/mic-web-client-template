import { BrowserRouter, Link } from "react-router-dom";
import { MicApps } from "./MicApps";

export default function App() {
  return (
    <BrowserRouter>
      <nav className="base-nav">
        <Link to="/home">HOME</Link>
        <Link to="/feature">FEATURE</Link>
      </nav>
      <MicApps />
    </BrowserRouter>
  );
}
