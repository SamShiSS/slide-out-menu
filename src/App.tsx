import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";

function App() {
  return (
    <>
      <Header
        onClickMenu={() => {
          document.getElementById("menu")!.style.width = "50%";
          document.getElementById("homeLink")!.focus();
        }}
      />

      <Menu
        onClickClose={() => {
          document.getElementById("menu")!.style.width = "0%";
          document.getElementById("menuBtn")!.focus();
        }}
      />
    </>
  );
}

export default App;
