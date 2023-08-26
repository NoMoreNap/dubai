import React, { useEffect, useState, useRef } from "react";
import s from "./modals.module.css";
const URL = 'https://bayonetta.ru/feedback/api.php'
function Success() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
        >
            <path
                d="M21.4297 53.6114L41.9121 76.4289L90.0011 22.8574"
                stroke="white"
            ></path>
            <rect
                x="0.5"
                y="0.5"
                width="99"
                height="99"
                stroke="url(#paint0_radial_1169_13484)"
            ></rect>
            <defs>
                <radialGradient
                    id="paint0_radial_1169_13484"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(50 50) rotate(136.66) scale(34.8649 112.198)"
                >
                    <stop stopColor="white"></stop>
                    <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                </radialGradient>
            </defs>
        </svg>
    );
}


export function ModalThanks(props: {
    close: (e: boolean) => void;
    close_all?: (e: boolean) => void;
}) {
    const { close, close_all } = props;
    const overlay = useRef<HTMLDivElement>(null);
    useEffect(() => {
        window.addEventListener("click", (e: MouseEvent) => {
            if (overlay.current === e.target) {
                close(false);
                if (close_all) {
                    close_all(false)
                }
            }
        });
    }, []);
    return (
        <div ref={overlay} className={s.main}>
            <div className={s.window}>
                {<Success />}
                <div className={s.content}>
                    <h1 className={s.content_title}>Спасибо!</h1>
                    <p className={s.content_p}>
                        Скоро с вами свяжется один из наших сотрудников.
                    </p>
                    <button
                        onClick={() => {
                            close(false);
                            if (close_all) close_all(false);
                        }}
                        className={s.content_btn}
                    >
                        ЗАКРЫТЬ
                    </button>
                </div>
            </div>
        </div>
    );
}
export function ModalPrompt(props: {
    close: (e: boolean) => void;
}): JSX.Element {
    const { close } = props;
    const overlay = useRef<HTMLDivElement>(null);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [mail, setMail] = useState("");
    const [modal, setModal] = useState(false);
    const swithcer = (e: boolean) => {
        setModal(e);
    };
    const sendForm = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData();
        if (!name || !phone || !mail) {
            return alert("Заполните все поля!");
        }
        formData.append("name", name);
        formData.append("phone", phone);
        formData.append("mail", mail);
        await fetch(URL, {
            method: 'POST',
            body: formData
        }).then(res => console.log(res))
        setModal(true);
    };

    useEffect(() => {
        window.addEventListener("click", (e: MouseEvent) => {
            if (overlay.current === e.target) {
                close(false);
                setModal(false);
            }
        });
    }, []);

    return (
        <div ref={overlay} className={s.main}>
            {modal ? (
                <ModalThanks close={swithcer} close_all={close} />
            ) : (
                <div className={s.main_p}>
                    <div className={s.head_p}>
                        <h1 className={s.head_p_title}>
                            Заказать консультацию
                        </h1>
                        <p className={s.head_p_p}>
                            Заполните форму ниже, и наш агент свяжется с вами в
                            ближайшее время
                        </p>
                    </div>
                    <form onSubmit={sendForm} className={s.form}>
                        <input
                            className={s.form_input}
                            onInput={(e: React.FormEvent<HTMLInputElement>) => {
                                setName((e.target as HTMLInputElement).value);
                            }}
                            type="text"
                            pattern="^[А-Яа-яЁёa-zA-Z\s]+$"
                            required
                            placeholder="Введите имя"
                        />
                        <input
                            className={s.form_input}
                            onInput={(e: React.FormEvent<HTMLInputElement>) => {
                                setPhone((e.target as HTMLInputElement).value);
                            }}
                            type="tel"
                            pattern="\+?[0-9]{6,12}"
                            required
                            placeholder="Введите телефон"
                        />
                        <input
                            className={s.form_input}
                            onInput={(e: React.FormEvent<HTMLInputElement>) => {
                                setMail((e.target as HTMLInputElement).value);
                            }}
                            type="email"
                            required
                            placeholder="Введите почту"
                        />
                        <button className={s.form_btn}>Отправить</button>
                    </form>
                </div>
            )}
        </div>
    );
}
