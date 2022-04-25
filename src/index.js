const url = "https://www.avena.dev/cms/wp-json/wp/v2/tribe_events";
const urlPosts = "https://www.avena.dev/cms/wp-json/wp/v2/posts?per_page=25";
const urlCategories = "https://www.avena.dev/cms/wp-json/wp/v2/categories?per_page=25";
const urlTags = "https://www.avena.dev/cms/wp-json/wp/v2/tags?per_page=25";


const out = document.querySelector("#eventsList");
//declaring api's

let months = ["JAN", "FEB", "MAR", "APR", "MAI",
    "JUN", "JUL", "AUG", "SEP", "OKT", "NOV", "DES"];

/*
let eventDate = new Date(event.date);
let eventMonth = eventDate.getMonth();

<p>eventDate.getDate();</p>
<p>eventDate.getMonth();</p>

<p> months[eventMonth]; </p>
*/

//declaring global values
/*
let tag = [];
let post = [];
let categories = [];
let processedPosts = "";
*/


fetch(url)
    .then((response) => response.json())
    .then((parsedData) => {
        listData(parsedData);
    })
    .catch((error) => (out.innerHTML = "Something's wrong! " + error))
    .finally(() => document.querySelector(".loader").remove());


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

