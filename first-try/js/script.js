window.addEventListener("scroll", (event) => {
    let scrollPosition = this.scrollY;
    let layers = document.getElementsByClassName("parallaxImg");
    Array.from(layers).forEach((layer) => {
        // Fetch data-speed from attribute in HTML
        let xSpeed = layer.getAttribute('data-x-speed') / 100;
        let ySpeed = layer.getAttribute('data-y-speed') / 100;
        
        // Transform data-speed to 'scroll-speed'
        let yPos = scrollPosition * ySpeed;
        let xPos = scrollPosition * xSpeed;

        // Move the layers accordingly
        layer.setAttribute('style', 'transform: translate('+ xPos +'px, ' + yPos + 'px)');
        
    });

});
window.onload = (event) => {
    let containerHeight = window.innerWidth * 0.5622254758418740849194729136164 - 6;
    document.getElementById('parallaxContainer').style.height = containerHeight + "px";
  };

window.addEventListener("resize", (event) => {
    let containerHeight = window.innerWidth * 0.5622254758418740849194729136164 - 6;
    document.getElementById('parallaxContainer').style.height = containerHeight + "px";
});