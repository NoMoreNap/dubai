import React from "react";
import s from "./header.module.css";

export function Header() {
    return (
        <header className={s.header}>
            <nav className={s.nav}>
                <div className={s.title_box}>
                    <h1 className={s.title}>
                        15 Лет <br /> на рынке!
                    </h1>
                </div>
                <div className={s.image_box}>
                    <h1>Тут лого</h1>
                </div>
                <div className={s.contacts}>
                    <div className={s.logos}>
                        <img src="img/tg.svg" alt="telegram" />
                        <img src="img/wt.svg" alt="telegram" />
                    </div>
                    <h1>+7 (999) 000 00 00</h1>
                </div>
            </nav>
        </header>
    );
}
