const url = "https://www.avena.dev/cms/wp-json/wp/v2/tribe_events";
const urlPosts = "https://www.avena.dev/cms/wp-json/wp/v2/posts?per_page=25";
const urlCategories = "https://www.avena.dev/cms/wp-json/wp/v2/categories?per_page=25";
const urlTags = "https://www.avena.dev/cms/wp-json/wp/v2/tags?per_page=25";

let out = document.querySelector("#eventsList");

let months = ["JAN", "FEB", "MAR", "APR", "MAI",
    "JUN", "JUL", "AUG", "SEP", "OKT", "NOV", "DES"]

let tag = [];
let post = [];
let category = [];
let date = [];

let studentBtn = document.querySelector("#studentBtn");
let ansattBtn = document.querySelector("#ansattBtn");
let styretBtn = document.querySelector("#styretBtn");
document.querySelector("body").onload = startProcess();

/*
let eventDate = new Date(event.date);
let eventMonth = eventDate.getMonth();

<p>eventDate.getDate();</p>
<p>eventDate.getMonth();</p>

<p> months[eventMonth]; </p>
*/

studentBtn.addEventListener("click", function () {
    filterTest();
});
ansattBtn.addEventListener("click", function () {
    filterTest();
});
styretBtn.addEventListener("click", function () {
    filterTest();
});


// List all eventer, for alle roller og tider
function listData(events) {
    events.forEach((event) => {
        console.log(event.title);

        out.innerHTML += `<div id="posts" class="displayDate">
            <a href="detail.html?id=${event.id}">
                <span id="outputMonths">${event.date}</span>
            </a>
        </div>
    <div>
        <h2><a href="detail.html?id=${event.id}">${event.title.rendered}</a></h2>
        <p>${event.excerpt.rendered}</p>
        <p>${event.tribe_events_cat}</p>
</div>
</div>`;
    });
}

function filterTest() {
    startProcess(event.target.id);
}
