export class StarLine {
    constructor(stars) {
        this.stars = stars;
        let selectedRating = 0;
        let hoveredRating = 0;
        const renderRating = () => {
            const rating = hoveredRating || selectedRating;
            for (let i = 0; i < this.stars.children.length; i++) {
                this.stars.children[i].classList.toggle("starYellow", i < rating);
            }
        };

        for (let i = 0; i < 5; i++) {
            let star = document.createElement("i");
            star.classList.add("bi", "bi-star-fill");

            star.addEventListener("mouseover", () => {
                hoveredRating = i + 1;
                renderRating();
            });

            star.addEventListener("click", () => {
                selectedRating = selectedRating === i + 1 ? 0 : i + 1;
                renderRating();
            });

            this.stars.appendChild(star);
        }

        this.stars.addEventListener("mouseleave", () => {
            hoveredRating = 0;
            renderRating();
        });

        console.log("StarLine initialized");
    };
};