import React from "react";
import { Header } from "./components/blocks/header/header";
import { Explore } from "./components/screens/Explore/explore";
import { Footer } from "./components/screens/footer/footer";
import { Head } from "./components/screens/head/head";
import { Insights } from "./components/screens/insights/insights";
import { Main } from "./components/screens/main/main";
import "./styles/style.css";

function App() {
    return (
        <main className="main">
            <Header/>
            <Head />
            <Main />
            <Explore/>
            <Insights/>
            <Footer/>
        </main>
    );
}

export default App;
