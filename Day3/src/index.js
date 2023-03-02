import React from "react";
import ReactDOM from "react-dom/client";
import FirstModule from "./firstModule";
import SecondModule from "./secondModule";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
        <FirstModule />
        <SecondModule />
    </>
);
