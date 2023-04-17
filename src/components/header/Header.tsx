import styles from "./header.module.css";

function Header(props: { onClickMenu: () => void }) {
  return (
    <div className={styles.header}>
      Page title
      <button onClick={props.onClickMenu} id="menuBtn">
        <img src="menu.svg" height={24} />
      </button>
    </div>
  );
}

export default Header;
