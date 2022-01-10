var beers = document.querySelectorAll('.produit');
var bg = document.querySelector('.bg');
let next = 0;


bg.addEventListener('mouseenter', function() {
    let y;
    for(let i=0;i<beers.length; i++){
        if (beers[i].classList.contains('current')) {
            beers[i].classList.remove('current');
            beers[i].classList.add('gauche');

            // setTimeout(() => {
            //     beers[i].classList.remove('gauche');
            //     beers[i].style.zIndex = -5
            // }, 500);

            next ++;
        }else {
            beers[i].style.zIndex = 0
        }
    }
    for(y=0;y<beers.length;y++){
        if(y === next){
            beers[y].classList.add('current');
            beers[next-2].classList.remove('gauche');
            beers[next-2].style.zIndex = -5;
        }
    }
    if ( next == 12) {
        beers[11].style.zIndex = -5;
    }
    
    if(next === 13){
        beers[0].classList.remove("gauche");
        beers[0].classList.add("current");
        next = 0;

        beers.forEach(element => {
            element.classList.remove('gauche');
        });
    }
})
