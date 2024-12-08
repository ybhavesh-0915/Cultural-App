const tooltip = document.getElementById("tooltip");
const states = document.getElementById("stateData")
const capital = document.getElementById("capitalData")
const areas = document.querySelectorAll("area");
areas.forEach(area => {
    area.addEventListener("mouseover", (event) => {
        var name = event.target.getAttribute("alt");
        name = name.split(",")
        states.innerHTML = `State: ${name[0]}`;
        capital.innerHTML = `Capital: ${name[1]}`;
        tooltip.style.display = "block";
        tooltip.style.left = `${event.pageX + 10}px`;
        tooltip.style.top = `${event.pageY + 10}px`;
    });

    area.addEventListener("mousemove", (event) => {
        tooltip.style.left = `${event.pageX + 10}px`;
        tooltip.style.top = `${event.pageY + 10}px`;
    });

    area.addEventListener("mouseout", () => {
        tooltip.style.display = "none";
    });
});

const toggleFunction = (element)=>{
    element.getAttribute('display') === 'false' ? element.setAttribute('display' , 'true') : element.setAttribute('display' , 'false');
}