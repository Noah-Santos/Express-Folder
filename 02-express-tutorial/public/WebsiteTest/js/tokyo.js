$(function(){
    // calls the code every 5 seconds
    setInterval(function(){
        // gets the id of the image that is currently active and makes it hidden
        let currentActive = $(".active").attr("id");
        $(`#${currentActive}`).removeClass("active").addClass("deactive");

        // breaks the element id into an array
        let currentActiveArray = currentActive.split("");

        // changes the images accordingly
        if(currentActiveArray[currentActiveArray.length-1] == 3){
            currentActiveArray[currentActiveArray.length-1] = 1;
        }else{
            let num = currentActiveArray[currentActiveArray.length-1];
            num++
            currentActiveArray[currentActiveArray.length-1] = num;
        }
        
        // sets new image to active
        let newActive = currentActiveArray.join("");
        $(`#${newActive}`).removeClass("deactive").addClass("active");
    }, 3500);
})

// // will call change function every 5 seconds
// setTimeout(change(), 5000);

// // change function
// function change(){
//     // gets elements with active class and loops through all elements in array
//     let activePhotos = document.getElementsByClassName("active");
//     for(let i=0; i<activePhotos.length; i++){
//         console.log(activePhotos);

//         // adds deactive class and removes active class
//         activePhotos[i].setAttribute("class", "deactive");
//         // activePhotos[i].classList.remove("active");

//         // creates an element to hold original array and original name
//         let image = activePhotos[i];
//         let temp = activePhotos[i].split("");

//         // determines if the image is either meiji or ginza and adjusts the end accordingly
//         if(temp[0] == "M"){
//             if(temp[temp.length-1] == 3){
//                 image[image.length-1] = 1;
//             }else{
//                 image[image.length-1] = image[image.length-1]+1;
//             }
//             let newImage = image.join("");
//             newImage.setAttribute("class", "active");
//         }

//         if(temp[0] == "G"){
//             if(temp[temp.length-1] == 2){
//                 image[image.length-1] = 1;
//             }else{
//                 image[image.length-1] = image[image.length-1]+1;
//             }
//             let newImage = image.join("");
//             newImage.setAttribute("class", "active");
//         }
//     }
// }

