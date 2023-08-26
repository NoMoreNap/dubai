import React, { useEffect, useRef, useState } from "react";
import { Prompt } from "../../blocks/prompt/prompt";
import s from "./insights.module.css";

function Cards(props: { width: number }) {
    const [active, setActive] = useState(1);
    const cards = useRef<HTMLDivElement>(null);

    const { width } = props;
    const swither = (e: React.MouseEvent) => {
        if (!(e.target instanceof HTMLDivElement) || !e.target.dataset.id) {
            return;
        }

        setActive(+e.target.dataset.id);
    };
    if (cards.current) {
        const ratio = width * (active - 1);
        cards.current.style.transform = `translateX(-${ratio}px)`;
    }

    useEffect(() => {
        const nav = document.querySelector(`.${s.nav}`) as HTMLDivElement;

        switch (active) {
            case 1: {
                const curSpans = nav.querySelectorAll("span");
                curSpans.forEach((el) => {
                    el.classList.remove(s.active);
                });
                curSpans[0].classList.add(s.active);
                break;
            }
            case 2: {
                const curSpans = nav.querySelectorAll("span");
                curSpans.forEach((el) => {
                    el.classList.remove(s.active);
                });
                curSpans[1].classList.add(s.active);
                break;
            }
            case 3: {
                const curSpans = nav.querySelectorAll("span");
                curSpans.forEach((el) => {
                    el.classList.remove(s.active);
                });
                curSpans[2].classList.add(s.active);
                break;
            }
        }
    });
    return (
        <section className={s.cards}>
            <div className={s.window}>
                <div ref={cards} className={s.items}>
                    <div style={{ width }} className={s.item}>
                        <img
                            className={s.item_img}
                            src="img/cards/1.jpg"
                            alt=""
                        />
                        <div className={s.item_content}>
                            <h1 className={s.item_content__title}>
                                ОБРАТНАЯ СВЯЗЬ
                            </h1>
                            <p className={s.item_content__p}>
                                Слушайте обратную связь от наших агентов по
                                недвижимости и будьте в курсе событий на рынке
                                недвижимости Дубая: последние новости, советы
                                экспертов и многое другое.
                            </p>
                        </div>
                    </div>
                    <div style={{ width }} className={s.item}>
                        <img
                            className={s.item_img}
                            src="img/cards/2.jpg"
                            alt=""
                        />
                        <div className={s.item_content}>
                            <h1 className={s.item_content__title}>ПОДБОКИ</h1>
                            <p className={s.item_content__p}>
                                Мы найдем дом вашей мечты в Дубае с помощью
                                нашей подборки объектов недвижимости,
                                подобранных в соответствии с различными стилями
                                жизни и бюджетами.
                            </p>
                        </div>
                    </div>
                    <div style={{ width }} className={s.item}>
                        <img
                            className={s.item_img}
                            src="img/cards/3.jpg"
                            alt=""
                        />
                        <div className={s.item_content}>
                            <h1 className={s.item_content__title}>
                                БЫТЬ ВКУРСЕ
                            </h1>
                            <p className={s.item_content__p}>
                                Будьте в курсе последних тенденций и событий на
                                рынке недвижимости Дубая. Благодаря информации и
                                советам отраслевых экспертов мы являемся
                                ценным ресурсом для всех, кто интересуется
                                рынком недвижимости Дубая.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={swither} className={s.nav}>
                <div data-id="1" className={s.nav_wrapper}>
                    <span className={s.nav_item}></span>
                </div>
                <div data-id="2" className={s.nav_wrapper}>
                    <span className={s.nav_item}></span>
                </div>
                <div data-id="3" className={s.nav_wrapper}>
                    <span className={s.nav_item}></span>
                </div>
            </div>
        </section>
    );
}

export function Insights() {
    const main = useRef<HTMLDivElement>(null);
    const [currentWidth, setCurrentWidth] = useState(0);
    useEffect(() => {
        if (main.current) {
            setCurrentWidth(main.current.getBoundingClientRect().width);
        }
    }, []);
    return (
        <div className={s.main}>
            <section ref={main} className={s.head}>
                <h1 className={s.head_title}>
                    Экспертная информация о недвижимости
                </h1>
                <p className={s.head_p}>
                    Откройте для себя инсайдерские знания о недвижимости Дубая
                    от наших агентов: экспертный анализ и подробную информацию о
                    городе и его рынке недвижимости.
                </p>
            </section>
            {<Cards width={currentWidth} />}
            {<Prompt/>}
        </div>
    );
}
