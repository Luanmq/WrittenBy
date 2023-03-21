import "../Home/Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/Button/Button.js";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="home_body">
        <Button variant="default" text="Criar conta" />
      </div>
    </div>
  );
}
