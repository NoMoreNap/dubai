import React, { useEffect, useRef, useState } from "react";
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
                            src="img/carusel/1.webp"
                            alt=""
                        />
                    </div>
                    <div className={s.item} style={{ width: prop }}>
                        <img
                            className={s.item_img}
                            src="img/carusel/1.webp"
                            alt=""
                        />
                    </div>
                    <div className={s.item} style={{ width: prop }}>
                        <img
                            className={s.item_img}
                            src="img/carusel/1.webp"
                            alt=""
                        />
                    </div>
                    <div className={s.item} style={{ width: prop }}>
                        <img
                            className={s.item_img}
                            src="img/carusel/1.webp"
                            alt=""
                        />
                    </div>
                    <div className={s.item} style={{ width: prop }}>
                        <img
                            className={s.item_img}
                            src="img/carusel/1.webp"
                            alt=""
                        />
                    </div>
                    <div className={s.item} style={{ width: prop }}>
                        <img
                            className={s.item_img}
                            src="img/carusel/1.webp"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className={s.gallery_nav}>
                <span className={s.gallery_btn} onClick={prev}>
                    PREV
                </span>
                <span className={s.gallery_btn} onClick={next}>
                    NEXT
                </span>
            </div>
        </div>
    );
}

export function Explore() {
    const main = useRef<HTMLDivElement>(null);
    const [currentWidth, setCurrentWidth] = useState(0);
    useEffect(() => {
        if (main.current) {
            setCurrentWidth(main.current.getBoundingClientRect().width);
        }
    }, []);
    return (
        <div className={s.main}>
            <section ref={main} className={s.prompt}>
                <h1 className={s.prompt_title}>Prompt consultation</h1>
                <p className={s.prompt_p}>
                    Fill in the form and our agent will contact you shortly.
                </p>
                <button className={s.prompt_btn}>Enquire now</button>
            </section>
            <section className={s.lifestyle}>
                <div className={s.lifestyle_head}>
                    <h1 className={s.lifestyle_head__title}>LIFESTYLE</h1>
                    <p className={s.lifestyle_head__p}>
                        Wide range options for any lifestyle. Make your choice
                        with us
                    </p>
                </div>
            </section>
            {<Gallery width={currentWidth} />}
        </div>
    );
}
