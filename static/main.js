const img = document.querySelector('.img');
const container = document.querySelector('.body');
function ipone (phone){
      img.src = phone
}

function colors (color){
     container.style.background = color;
}




//Start Gallery

{
      const sliderCounter = document.querySelector(".slider__counter");
      const focusedImage = document.querySelector(".slider__image");
      const sliderPrev = document.querySelector(".slider__prev");
      const sliderNext = document.querySelector(".slider__next");
      const sliderCaption = document.querySelector(".gallery__text");
      const sliderImages = document.querySelectorAll(".gallery__row-img");
      
      //send main data to HTML
      sliderImages[0].style.opacity = "1";
      focusedImage.setAttribute("src", sliderImages[0].getAttribute("src"));
      sliderCounter.innerHTML = `${1}/8`;
      sliderCaption.innerHTML = sliderImages[0].getAttribute("alt");
      // set counter
      let counter = parseInt(sliderCounter.innerHTML[0]);
      // Next function
      sliderNext.addEventListener("click", function () {
        if (counter < sliderImages.length) {
          sliderCounter.innerHTML = `${counter + 1}/8`;
          focusedImage.setAttribute(
            "src",
            sliderImages[counter].getAttribute("src")
          );
          sliderCaption.innerHTML = sliderImages[counter].getAttribute("alt");
      
          // change the shown image opacity
          for (let image of sliderImages) {
            image.style.opacity = "0.6";
            sliderImages[counter].style.opacity = "1";
          }
      
          counter += 1;
        }
      });
      
      // prev function
      sliderPrev.addEventListener("click", function () {
        if (counter > 1) {
          sliderCounter.innerHTML = `${counter - 1}/8`;
          focusedImage.setAttribute(
            "src",
            sliderImages[counter - 2].getAttribute("src")
          );
          sliderCaption.innerHTML = sliderImages[counter - 2].getAttribute("alt");
      
          // change the shown image opacity
          for (let image of sliderImages) {
            image.style.opacity = "0.6";
            sliderImages[counter - 2].style.opacity = "1";
          }
      
          counter -= 1;
        }
      });
      // click on each image
      for (let image of sliderImages) {
        image.addEventListener("click", function () {
          for (let i of sliderImages) {
            i.style.opacity = "0.6";
          }
          image.style.opacity = "1";
          sliderCounter.innerHTML = `${image.getAttribute("id")}/8`;
          focusedImage.setAttribute("src", image.getAttribute("src"));
          sliderCaption.innerHTML = image.getAttribute("alt");
        });
      }
      }     
//End Gallary   -----------------------------------------------------


