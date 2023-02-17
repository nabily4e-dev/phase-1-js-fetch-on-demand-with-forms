const init = () => {
    const inputForm = document.querySelector("form");
    inputForm.addEventListener("submit", (event) => {
        event.preventDefault();
        console.log(event.target);
    });
};

document.addEventListener("DOMContentLoaded", init);
