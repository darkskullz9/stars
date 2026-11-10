export class StarLine {
    constructor(stars) {
        this.stars = stars;
        for (let i = 0; i < 5; i++) {
            let star = document.createElement("i");
            star.classList.add("bi", "bi-star-fill");
            this.stars.appendChild(star);
        }
        console.log("StarLine initialized");
    };
};