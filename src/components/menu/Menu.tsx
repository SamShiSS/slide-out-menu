import { useEffect } from "react";
import styles from "./menu.module.css";

function Menu(props: { onClickClose: () => void }) {
  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        props.onClickClose();
      }
    };
    document.addEventListener("keyup", listener);
    return () => document.removeEventListener("keyup", listener);
  }, []);

  return (
    <div className={styles.menu} id="menu">
      <div className={styles.title}>
        Menu
        <button onClick={props.onClickClose}>
          <img src="close.svg" height={20} />
        </button>
      </div>
      <div className={styles.divider}></div>
      <ul className={styles.items}>
        <li>
          <a href="#" id="homeLink">
            Home
          </a>
        </li>
        <li>
          <a href="#">Shop</a>
        </li>
        <li>
          <a href="#">About us</a>
        </li>
      </ul>
      <ul className={styles.footer}>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Track your order</a>
        </li>
        <li>
          <a href="#">Return policy</a>
        </li>
        <li>
          <a href="#">Shipping policy</a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
