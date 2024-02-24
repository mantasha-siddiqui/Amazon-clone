const imgs = document.querySelectorAll('.header-slider ul img') // it will extract all images that comes under ul
// and the imgs above contain an array that stores all the image elements.
// so for control buttons that's previous and next button.
const prev_btn = document.querySelector('.control_prev');
const next_btn = document.querySelector('.control_next');

let n = 0; // it means we are on the first image 

// if we put n = 1 it will display second image and so on

function changeSlide(){
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none'; // it is selecting all the images and adding the style property none so it will hide the slides
        
    }
    // so to display first image as n is 0 
    imgs[n].style.display = 'block'; // using block style image will be visible

}
changeSlide();

prev_btn.addEventListener('click', (e)=>{
    if(n > 0){
        n--;
    }else{
        n = imgs.length - 1;
    }
    changeSlide();
})

next_btn.addEventListener('click', (e)=>{
    if(n < imgs.length - 1){
        n++;
    }else{
        n = 0;
    }
    changeSlide();
})


const scrollContainer = document.querySelectorAll('.products'); // it will select all the div with product class name
// to scroll element horizontally with mouse
for (const item of scrollContainer){
    item.addEventListener('wheel', (evt)=>{
        evt.preventDefault();//to remove default feature
        item.scrollLeft += evt.deltaY;

    })
}


