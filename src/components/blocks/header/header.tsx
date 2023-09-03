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
                        <a
                            href="https://t.me/EVGENICH777NEW"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src="img/tg.svg" alt="telegram" />
                        </a>
                        <a
                            href="https://clck.ru/35ZYDL"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src="img/wt.svg" alt="telegram" />
                        </a>
                    </div>
                    <h1>+971 50 339 8680</h1>
                </div>
            </nav>
        </header>
    );
}
