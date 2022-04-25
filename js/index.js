const url = "https://www.avena.dev/cms/wp-json/wp/v2/tribe_events?per_page=50";
const out = document.querySelector("#eventsList");

let allPosts;
fetch(url)
    .then((response) => response.json())
    .then((parsedData) => {
        listData(parsedData);
        allPosts = parsedData;
    })
    .catch((error) => (out.innerHTML = "Something's wrong! " + error))
    .finally(() => document.querySelector(".loader").remove());


function listData(posts) {
    out.innerHTML = " ";
    posts.forEach((post) => {
        //  console.log(post.title.length, post.title);
        out.innerHTML +=
            `<div>
                <div id="dateBox">
                    <a href="detail.html?id=${post.id}">
                        <span>${post.date}</span>
                    </a>
            </div>
            <div>
                <a href="detail.html?id=${post.id}"><h3>${post.title.rendered}</h3>
                <p id="postExcerpt">${post.excerpt.rendered}</p></a>
            </div>
        </div>`;
    });
}


/* FILTER ALL EVENTS,  ALL POSTS WITH CATEGORY ID'S  */
const myAllBtn = document.querySelectorAll(".filterAll");

//console.log(myStudBtn)
for (let item of myAllBtn) {
    item.addEventListener("click", () => {
        // console.log("skal filtrere ut alle eventer", allPosts.length )
        listData(allPosts);
    })
}

/* FILTER STUDENT EVENTS,  STUDENT CAT ID = 95 */
const myStudBtn = document.querySelectorAll(".filterStudent");
//console.log(myStudBtn)
for (let item of myStudBtn) {
    item.addEventListener("click", () => {
        // console.log("skal filtrere ut studenter", allPosts.length )
        let filteredList = [];
        allPosts.forEach((post) => {
            // console.log(post.tribe_events_cat)
            if (post.tribe_events_cat.includes(95)) {
                filteredList.push(post);
            }
        })
        listData(filteredList);
    })
}

/* FILTER ANSATT EVENTS,  STUDENT CAT ID = 96  */
const myAnsattBtn = document.querySelectorAll(".filterAnsatt");
//console.log(myAnsattBtn)
for (let item of myAnsattBtn) {
    item.addEventListener("click", () => {
        // console.log("skal filtrere ut ansatte", allPosts.length )
        let filteredList = [];
        allPosts.forEach((post) => {
            // console.log(post.tribe_events_cat)
            if (post.tribe_events_cat.includes(96)) {
                filteredList.push(post);
            }
        })
        listData(filteredList);
    })
}

/* FILTER STYRET EVENTS,  STUDENT CAT ID = 97  */
const myStyretBtn = document.querySelectorAll(".filterStyret");
//console.log(myStyretBtn)
for (let item of myStyretBtn) {
    item.addEventListener("click", () => {
        // console.log("skal filtrere ut styret", allPosts.length )
        let filteredList = [];
        allPosts.forEach((post) => {
            // console.log(post.tribe_events_cat)
            if (post.tribe_events_cat.includes(97)) {
                filteredList.push(post);
            }
        })
        listData(filteredList);
// console.log(filteredList)
    })
}
