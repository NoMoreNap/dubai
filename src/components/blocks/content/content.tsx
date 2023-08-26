import React from "react";
import s from "./content.module.css";

export function Content() {
    return (
        <div className={s.content}>
            <h1 className={s.title}>Тут название</h1>
            <p className={s.par}>Инновационное агентство недвижимости в Дубае</p>
        </div>
    );
}
