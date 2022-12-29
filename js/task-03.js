const images = [
    {
        url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: "White and Black Long Fur Cat",
    },
    {
        url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: "Orange and White Koi Fish Near Yellow Koi Fish",
    },
    {
        url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: "Group of Horses Running",
    },
];

const ulRef = document.querySelector(".gallery");
ulRef.style.gap = "30px";
ulRef.style.display = "flex";
ulRef.style.flex = "wrap";
// ulRef.style.justify - content = "center";
const markup = images.map((image) => `<li class= "items"><img  class="imgEl" src= ${image.url} alt = ${image.alt}></li>`).join("");
ulRef.insertAdjacentHTML("beforeend", markup);

// const imgRef = document.querySelectorAll("img");
// imgRef.style.height = "300px";
// imgRef.style.width = "500px";
