import React, { useEffect, useState } from "react";
import { ModalPrompt } from "../modals/modals";

function Stats() {
    return (
        <div className={s.stats}>
        <div className={s.info}>
            <h1 className={s.info_header}>ПРЕДЛОЖЕНИЙ</h1>
            <p className={s.info_par}>5000+</p>
        </div>
        <div className={s.info}>
            <h1 className={s.info_header}>ЯЗЫКОВ</h1>
            <p className={s.info_par}>30+</p>
        </div>
        <div className={s.info}>
            <h1 className={s.info_header}>СПЕЦИАЛИСТОВ</h1>
            <p className={s.info_par}>500+</p>
        </div>
    </div>
    )
}
import s from "./about.module.css";

export function About() {
    const [modal, setModal] = useState(false);
    const [currentWidth, setCurrentWidth] = useState(+window.innerWidth)
    const swither = (e: boolean) => {
        setModal(e)
    }
    const handleResize = () => {
        setCurrentWidth(+window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize)
    }, [])
    return (
        <div className={s.main}>
            {modal ? <ModalPrompt close={swither}/> : <></>}
            <img className={s.img} src="img/about.jpeg" alt="" />
            <div className={s.disc}>
                <div className={s.textarea}>
                    <h1 className={s.textarea_title}>Эксперты по недвижимости</h1>
                    <p>Мы понимаем, что современные люди стремятся к максимальному комфорту.</p>
                    <p>Гармоничная среда, общение с профессионалами, точная и своевременная информация, целеустремленность, надежные и удобные технологические решения, которые экономят важные для вас ресурсы.</p>
                    <p>Мы объединили все это в НАЗВАНИЕ</p>
                    <button onClick={() => {setModal(true)}} className={s.btn}>Спросить сейчас</button>
                </div>
                {currentWidth > 900 ? <Stats/> : <></>}
            </div>
            {currentWidth < 900 ? <Stats/> : <></>}
        </div>
    );
}

