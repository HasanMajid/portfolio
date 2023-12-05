import "./app.scss";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div>
      <section id="main-section">
        <Navbar/>
      </section>
      <section>Hero</section>
      <section>Parallax</section>
      <section>Services</section>
      <section>Parallax</section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section>contact</section>
    </div>
  );
}

export default App;
