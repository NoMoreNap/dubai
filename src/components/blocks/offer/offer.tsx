import React, { useEffect, useRef, useState } from "react";
import s from "./offer.module.css";
export function Offer() {
    const buy = useRef<HTMLHeadingElement>(null);
    const rent = useRef<HTMLHeadingElement>(null);

    const [currentHover, setCurrentHOver] = useState("buy");
    const focuced = (e: React.SyntheticEvent<HTMLHeadingElement>) => {
        if (!(e.target instanceof HTMLHeadingElement)) {
            return;
        }
        setCurrentHOver(Object.keys(e.target.dataset)[0]);
    };
    useEffect(() => {
        switch (currentHover) {
            case "buy":
                if (buy.current && rent.current) {
                    buy.current.style.color = "#ffffff";
                    rent.current.style.color = "#ffffff6e";
                }
                break;
            case "rent":
                if (buy.current && rent.current) {
                    rent.current.style.color = "#ffffff";
                    buy.current.style.color = "#ffffff6e";
                }
                break;
        }
    });

    return (
        <div className={s.main}>
            {currentHover === "buy" ? (
                <div key={1} className={s.fade_in}>
                    <img className={s.img} src="img/offer1.jpg" alt="" />
                </div>
            ) : (
                <div key={2} className={s.fade_in}>
                    <img className={s.img} src="img/offer2.jpg" alt="" />
                </div>
            )}
            <div className={s.disc}>
                <div className={s.buttons}>
                    <h1 onMouseEnter={focuced} data-buy ref={buy}>
                        КУПИТЬ
                    </h1>
                    <h1 onMouseEnter={focuced} data-rent ref={rent}>
                        СНЯТЬ
                    </h1>
                </div>
                <p className={s.p}>
                    Обладая обширным портфолио объектов недвижимости и
                    бесчисленными предложениями, мы удовлетворим все ваши
                    потребности в недвижимости.
                </p>
            </div>
        </div>
    );
}
