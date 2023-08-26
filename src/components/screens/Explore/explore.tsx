import React, { useEffect, useRef, useState } from "react";
import { ModalPrompt } from "../../blocks/modals/modals";
import s from "./explore.module.css";

function Gallery(props: { width: number }) {
    const carusel = useRef<HTMLDivElement>(null);
    const { width } = props;
    const prop = (width - 80) / 3;
    const ratio = prop + 40;
    let offset = 0;
    let i = 0;
    const next = () => {
        if (carusel.current) {
            if (i === 3) return;
            i++;
            offset += ratio;
            carusel.current.style.transform = `translateX(-${offset}px)`;
        }
    };
    const prev = () => {
        if (carusel.current) {
            if (i - 1 < 0) {
                return;
            }
            i--;
            offset = ratio * i;
            console.log(i);
            carusel.current.style.transform = `translateX(-${offset}px)`;
        }
    };

    return (
        <div className={s.gallery}>
            <div className={s.window}>
                <div ref={carusel} className={s.items}>
                    <div className={s.item} style={{ width: prop }}>
                        <img
                            className={s.item_img}
                            src="img/carusel/1.jpg"
                            alt=""
                        />
                        <div className={s.item_info}>
                            <h1 className={s.item_info__title}>
                                Жизнь в центре города
                            </h1>
                        </div>
                    </div>
                    <div className={s.item} style={{ width: prop }}>
                        <img
                            className={s.item_img}
                            src="img/carusel/2.webp"
                            alt=""
                        />
                        <div className={s.item_info}>
                            <h1 className={s.item_info__title}>
                                Жилой комплекс
                            </h1>
                        </div>
                    </div>
                    <div className={s.item} style={{ width: prop }}>
                        <img
                            className={s.item_img}
                            src="img/carusel/3.jpg"
                            alt=""
                        />
                        <div className={s.item_info}>
                            <h1 className={s.item_info__title}>
                                Жизнь в Марине
                            </h1>
                        </div>
                    </div>
                    <div className={s.item} style={{ width: prop }}>
                        <img
                            className={s.item_img}
                            src="img/carusel/4.jpg"
                            alt=""
                        />
                        <div className={s.item_info}>
                            <h1 className={s.item_info__title}>
                                Собственность ближе к воде
                            </h1>
                        </div>
                    </div>
                    <div className={s.item} style={{ width: prop }}>
                        <img
                            className={s.item_img}
                            src="img/carusel/5.jpg"
                            alt=""
                        />
                        <div className={s.item_info}>
                            <h1 className={s.item_info__title}>
                                Собственность на набережной
                            </h1>
                        </div>
                    </div>
                    <div className={s.item} style={{ width: prop }}>
                        <img
                            className={s.item_img}
                            src="img/carusel/6.webp"
                            alt=""
                        />
                        <div className={s.item_info}>
                            <h1 className={s.item_info__title}>
                                Пентхаусы LUXE
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.gallery_nav}>
                <span className={s.gallery_btn} onClick={prev}>
                    НАЗАД
                </span>
                <span className={s.gallery_btn} onClick={next}>
                    ВПЕРЕД
                </span>
            </div>
        </div>
    );
}

export function Explore() {
    const main = useRef<HTMLDivElement>(null);
    const [currentWidth, setCurrentWidth] = useState(0);
    const [modal, setModal] = useState(false);
    const swither = (e: boolean) => {
        setModal(e);
    };
    useEffect(() => {
        if (main.current) {
            setCurrentWidth(main.current.getBoundingClientRect().width);
        }
    }, []);
    return (
        <div className={s.main}>
            {modal ? <ModalPrompt close={swither} /> : <></>}
            <section ref={main} className={s.prompt}>
                <h1 className={s.prompt_title}>Заказать консультацию</h1>
                <p className={s.prompt_p}>
                    Заполните форму, и наш агент свяжется с вами в ближайшее
                    время.
                </p>
                <button onClick={() => {setModal(true)}} className={s.prompt_btn}>Спросить сейчас</button>
            </section>
            <section className={s.lifestyle}>
                <div className={s.lifestyle_head}>
                    <h1 className={s.lifestyle_head__title}>ОБРАЗ ЖИЗНИ</h1>
                    <p className={s.lifestyle_head__p}>
                        Широкий выбор вариантов для любого образа жизни.
                        Сделайте свой выбор вместе с нами
                    </p>
                </div>
            </section>
            {<Gallery width={currentWidth} />}
        </div>
    );
}
