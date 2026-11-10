import { StarLine } from "./components/star/starLine.js";

document.addEventListener("DOMContentLoaded", () => {
    const stars = document.getElementsByClassName("stars");
    for (const star of stars) {
        let starLine = new StarLine(star);
    };
});