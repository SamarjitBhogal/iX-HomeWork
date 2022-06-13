const url = "https://api.artic.edu/api/v1/artworks";
const titleHeader = document.getElementById("title");
const button = document.getElementById("button");
var index = 0;
var maxIndex = 0;

async function fetchArtName() {
  // fetches the Art
  const response = await fetch(url, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(response);

  if (response.status <= 200 && response.status < 300) {
    const json = await response.json();
    return json;
  } else {
    throw new Error("status not in successful range - something went wrong");
  }
}

function renderArtName(art) {
  const data = art.data;
  maxIndex = data.length;

  button.addEventListener("click", (e) => onClick(e, art));

  const title = data[index].title;

  titleHeader.innerHTML = title;
}

function onClick(e, art) {
  if (index < maxIndex) {
    index++;
    titleHeader.innerHTML = art.data[index].title;
  } else {
    index = 0;
    titleHeader.innerHTML = art.data[index].title;
  }
}

async function run() {
  try {
    const art = await fetchArtName();
    console.log(art);
    renderArtName(art);
  } catch (err) {
    console.log(err);
  }
}

run();
