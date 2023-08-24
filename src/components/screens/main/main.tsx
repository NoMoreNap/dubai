import React from "react";
import { About } from "../../blocks/about/about";
import { Offer } from "../../blocks/offer/offer";
import s from "./main.module.css";

export function Main() {
    return (
        <section className={s.main}>
            <About />
            <Offer />
        </section>
    );
}

