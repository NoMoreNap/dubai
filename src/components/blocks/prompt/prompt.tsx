import React, { useState } from "react";
import { ModalThanks } from "../modals/modals";
import s from "./prompt.module.css";

export function Prompt() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [mail, setMail] = useState("");
    const [modal, setModal] = useState(false);
    const swithcer = (e: boolean) => {
        setModal(e);
    };
    const sendForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData();
        if (!name || !phone || !mail) {
            return alert("Заполните все поля!");
        }
        formData.append("name", name);
        formData.append("phone", phone);
        formData.append("mail", mail);
        setModal(true)
    };

    return (
        <div className={s.main}>
            <div className={s.head}>
                <h1 className={s.head_title}>Заказать консультацию</h1>
                <p className={s.head_p}>
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
            {modal ? <ModalThanks close={swithcer} /> : <></>}
        </div>
    );
}
