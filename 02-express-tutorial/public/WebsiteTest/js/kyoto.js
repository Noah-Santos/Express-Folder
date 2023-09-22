$(function(){
    // calls the code every 5 seconds
    setInterval(function(){
        // gets the id of the image that is currently active and makes it hidden
        let currentActive = $(".active").attr("id");
        let currentActive2 = $(".active2").attr("id");
        $(`#${currentActive}`).removeClass("active").addClass("deactive");
        // $(`#${currentActive2}`).removeClass("active2").addClass("deactive");

        // breaks the element id into an array
        let currentActiveArray = currentActive.split("");
        // let currentActiveArray2 = currentActive2.split("");

        // changes the images accordingly
        if(currentActiveArray[currentActiveArray.length-1] == 4){
            currentActiveArray[currentActiveArray.length-1] = 1;
        }else{
            let num = currentActiveArray[currentActiveArray.length-1];
            num++
            currentActiveArray[currentActiveArray.length-1] = num;
        }
        
        // if(currentActiveArray2[currentActiveArray2.length-1] == 2){
        //     currentActiveArray2[currentActiveArray2.length-1] = 1;
        // }else{
        //     let num = currentActiveArray2[currentActiveArray2.length-1];
        //     num++
        //     currentActiveArray2[currentActiveArray2.length-1] = num;
        // }

        // sets new image to active
        let newActive = currentActiveArray.join("");
        // let newActive2 = currentActiveArray2.join("");
        $(`#${newActive}`).removeClass("deactive").addClass("active");
        // $(`#${newActive2}`).removeClass("deactive").addClass("active2");
    }, 3500);
})
