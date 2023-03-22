  const startSlider=()=>{
  const sliderItems=document.querySelectorAll(".slider__item"); 
  const sliderList=document.querySelector(".slider__list");
  const prevbtn=document.querySelector(".slider__arrow_left");
  const nextbtn=document.querySelector(".slider__arrow_right");
  
  let activeSlide=1;
  let position=0;
  
  const nextSlide=()=>{
   
    if (activeSlide<3){
      sliderItems[activeSlide].classList.remove("slider__item_active");
     
      position=-sliderItems[0].clientWidth*activeSlide;
      sliderList.style.transform = `translateX(${position}px)`
      activeSlide+=1;
      sliderItems[activeSlide].classList.add("slider__item_active");}

  }
  const prevSlide=()=>{

    if (activeSlide>1){
      sliderItems[activeSlide].classList.remove("slider__item_active");
     
      position=-sliderItems[0].clientWidth*(activeSlide-2);
      sliderList.style.transform = `translateX(${position}px)`
      activeSlide-=1;
      sliderItems[activeSlide].classList.add("slider__item_active");} 
  }
  prevbtn.addEventListener("click",prevSlide);
  nextbtn.addEventListener("click",nextSlide);
};

document.addEventListener("DOMContentLoaded",startSlider)
