import React from "react";
import s from "./footer.module.css";

export function Footer() {
    return (
        <footer className={s.footer}>
            <div className={s.head}>
                <div className={s.head_logo}>Тут логотип</div>
                <h1>КОНТАКТЫ</h1>
            </div>
            <div className={s.info}>
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
                <div className={s.map}>
                    <h1 className={s.title}>Marina Gate 1 tower, 13 oficce</h1>
                    <iframe
                        className={s.ya}
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3A62217d974d4515905dd93a87c278e29b39f03580b4021fab0a89b43c7c3591ad&amp;source=constructor"
                        width="537"
                        height="245"
                        frameBorder="0"
                    ></iframe>
                </div>
            </div>
        </footer>
    );
}
