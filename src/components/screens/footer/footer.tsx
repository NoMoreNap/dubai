import React from "react";
import s from "./footer.module.css";

export function Footer() {
    return <footer className={s.footer}>
        <div className={s.head}>
            <div className={s.head_logo}>Тут логотип</div>
            <h1>КОНТАКТЫ</h1>
        </div>
        <div className={s.info}>
            Тут информация и контакты
        </div>
    </footer>;
}
