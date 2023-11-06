let multiplier = 1;
// multiplier = 1;
window.addEventListener("scroll", (event) => {
    let scrollPosition = window.scrollY;
    const layers = document.getElementsByClassName('shatter');
    Array.from(layers).forEach((layer) => {
        let xSpeed = layer.getAttribute('data-x-speed') / 100;
        let ySpeed = layer.getAttribute('data-y-speed') / 100;

        
        let yPos = (scrollPosition * ySpeed * multiplier).toFixed(0);
        let xPos = (scrollPosition * xSpeed * multiplier).toFixed(0);
        let zPos = (xPos * yPos) / 50;

        let rotateSpeed = 45 + .25 * scrollPosition * (xPos / 800);

        if(zPos < 0) { zPos = zPos * -1; }

        if(scrollPosition == 0) {
            layer.setAttribute("style", 'transform: translate3d(' + xPos + 'px, ' + yPos + 'px, 0) rotate(' + rotateSpeed + 'deg); box-shadow: 0');    

        }
        else {
            layer.setAttribute("style", 'transform: perspective(1600px) translate3d(' + xPos + 'px, ' + yPos + 'px, '+ zPos +'px) rotate(' + rotateSpeed + 'deg); box-shadow: 0px 0px 15px rgba(0,0,0,.2)');
        }
        

        console.log(multiplier);
    });
    


});

