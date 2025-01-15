import barIco from "../../../public/assets/start.png";
export function Header() {
  return (
    <div id="main-header">
      <h1 className="header">Pokémon</h1>
      <img
        style={{ padding: 0, margin: 0 }}
        src={barIco}
        width="3%"
        alt="logo"
      />
    </div>
  );
}
