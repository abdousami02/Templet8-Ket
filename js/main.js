

//click nav bar
var bar = document.querySelector('nav .bar');
var links = document.querySelector('nav ul');

bar.addEventListener('click', function(){
    bar.classList.toggle('active');
})

document.onclick = function(e){
    
    if(e.target !== links && e.target !== bar){
        // if(bar.classList.contains('active'))
        bar.classList.remove('active')
    }
}


let box = document.querySelector('.resp .feat');

document.querySelectorAll('.resp .select span').forEach(elem => {
    elem.addEventListener('click', function(e){
        if(e.target.classList.contains('one')){
            
            e.target.parentElement.querySelector('.active').classList.remove('active')
            e.target.classList.add('active')
           
            box.querySelector('.two').classList.remove('active')
            box.querySelector('.one').classList.add('active')


        }else if(e.target.classList.contains('two')){

            e.target.parentElement.querySelector('.active').classList.remove('active')
            e.target.classList.add('active')
           
            box.querySelector('.one').classList.remove('active')
            box.querySelector('.two').classList.add('active')

            // console.log(e.target.parentElement.parentElement.querySelector('.feat .'+two))
        };

    })
})



// star pull slid project



$(document).ready(function(){
    let slide = $('.slide')
    let max=  parseFloat(slide.parent().css('width')) - parseFloat(slide.css('width'))

    function isTouchDevice() {
        return (('ontouchstart' in window) ||
           (navigator.maxTouchPoints > 0) ||
           (navigator.msMaxTouchPoints > 0));
      }
    $(window).click(function(){
        isTouchDevice()
    })
    var enter,mov, out;
    var pos;
    var device = isTouchDevice()

    if(device == false){
        enter = 'mousedown',
        mov = 'mousemove',
        out = 'mouseup';
        function pos(ev){
            return ev.clientX
        }
    }else if(device == true){
        enter = 'touchstart',
        mov ='touchmove',
        out = 'touchend';
        function pos(ev){
            return ev.touches[0].clientX
        }
    }
    // Event.preventDefault()
    slide.on(enter,function(e){

        let zpos = pos(e);
        console.log(zpos)
        let margin = parseFloat(slide.css('marginLeft'))
        $(window).on(mov,function(e){
            let xpos = pos(e);
            let move = xpos - zpos
            slide.css({"margin-left": margin + move + 'px'});
        })
    })
    $(window).on(out,function(){

        $(window).off('mousemove')
        let ma = parseFloat(slide.css('marginLeft'))
        // console.log(max)
        if(ma > 0){ 
            // slide.css({"margin-left": '0px'});
            slide.animate({"margin-left": '0px'}, '1s')
        }
        else if(ma < max){
            slide.animate({"margin-left": max + 'px'}, '1s');
        }
    })

    
})


