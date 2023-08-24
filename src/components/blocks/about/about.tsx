import React from "react";
import s from "./about.module.css";

export function About() {
    return (
        <div className={s.main}>
            <img className={s.img} src="img/about.jpeg" alt="" />
            <div className={s.disc}>
                <div className={s.textarea}>
                    <h1 className={s.textarea_title}>Real estate experts</h1>
                    <p>We understand the fact that modern people strive for maximum comfort.</p>
                    <p>A harmonious environment, communication with professionals, accurate and timely information, commitment, reliable and convenient technological solutions that save the resources that are important to them.</p>
                    <p>We have implemented all these in НАЗВАНИЕ</p>
                    <button className={s.btn}>Enquire now</button>
                </div>
                <div className={s.stats}>
                    <div className={s.info}>
                        <h1 className={s.info_header}>Offers in the Database</h1>
                        <p className={s.info_par}>5000+</p>
                    </div>
                    <div className={s.info}>
                        <h1 className={s.info_header}>LANGUAGES</h1>
                        <p className={s.info_par}>30+</p>
                    </div>
                    <div className={s.info}>
                        <h1 className={s.info_header}>SPECIALISTS</h1>
                        <p className={s.info_par}>500+</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

