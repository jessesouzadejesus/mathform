const images = document.querySelectorAll("img");

images.forEach((image) => {
    image.addEventListener("mouseover", () => {
        image.nextElementSibling.classList.add("overlay");
    });

    image.addEventListener("mouseout", () => {
        image.nextElementSibling.classList.remove("overlay");
    });
});

images.forEach((image) => {
    image.addEventListener("mouseover", () => {
        image.nextElementSibling.classList.add("potencia");
    });

    image.addEventListener("mouseout", () => {
        image.nextElementSibling.classList.remove("potencia");
    });
});

images.forEach((image) => {
    image.addEventListener("mouseover", () => {
        image.nextElementSibling.classList.add("logaritmo");
    });

    image.addEventListener("mouseout", () => {
        image.nextElementSibling.classList.remove("logaritmo");
    });
});

images.forEach((image) => {
    image.addEventListener("mouseover", () => {
        image.nextElementSibling.classList.add("exercicios");
    });

    image.addEventListener("mouseout", () => {
        image.nextElementSibling.classList.remove("exercicios");
    });
});