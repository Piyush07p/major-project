let chartContainer = document.querySelector('.chart_container');
let submitBtn = document.querySelector(".submit_btn");


submitBtn.addEventListener("click", (e) => {
    chartContainer.style.display = 'block';
});

async function fetchData(){
    const url = 'http://127.0.0.1:5500/jsonData.json';
    const response = await fetch(url);
    const datapoints = await response.json();
    console.log(datapoints);
}