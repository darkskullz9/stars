export class StarLine {
    constructor(stars) {
        this.stars = stars;
        for (let i = 0; i < 5; i++) {
            let star = document.createElement("i");
            star.classList.add("bi", "bi-star-fill");

            star.addEventListener("mouseover", () => {
                let left = star.previousElementSibling;
                while (left) {
                    left.classList.add("starYellow");
                    left = left.previousElementSibling;
                }
                star.classList.add("starYellow");
            });

            star.addEventListener("mouseout", () => {
                let parent = star.parentElement;
                for (let child of parent.children) {
                    child.classList.remove("starYellow");
                }
            })

            this.stars.appendChild(star);
        }
        console.log("StarLine initialized");
    };
};