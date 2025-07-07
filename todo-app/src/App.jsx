import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import Head from "./Components/Heading";
import HeroSection from "./Components/HeroSection";
import Footer from "./Components/Footer";
// frontend/src/App.js
import React, { useEffect } from "react";
import axios from "axios";

function App() {

  return (
    <>
      <Head></Head>
      <HeroSection></HeroSection>
      <Footer></Footer>
    </>
  );
}

export default App;
