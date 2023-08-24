import React from "react";
import { Header } from "./components/blocks/header/header";
import { Explore } from "./components/screens/Explore/explore";
import { Head } from "./components/screens/head/head";
import { Main } from "./components/screens/main/main";
import "./styles/style.css";

function App() {
    return (
        <main className="main">
            <Header/>
            <Head />
            <Main />
            <Explore/>
        </main>
    );
}

export default App;
