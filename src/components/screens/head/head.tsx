import React from "react";
import { Content } from "../../blocks/content/content";
import s from "./head.module.css";

export function Head() {
    return (
        <section className={s.main}>
            <Content />
            <div className={s.overlay}></div>
        </section>
    );
}
