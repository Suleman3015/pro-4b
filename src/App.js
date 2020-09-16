import React from "react";
import styles from "./App.module.css";
import Head from "./components/head";
import Navbar from "./components/navbar";
import Body from "./components/body";
import Body2 from "./components/body2";
import Body3 from "./components/body3";
import Footer from "./footer";

function App() {
  return (
    <div>
      <Navbar />
      <Head />
      <Body />
      <Body2 />
      <Body3 />
      <Footer />
    </div>
  );
}

export default App;
