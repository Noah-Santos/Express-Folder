$(function(){
    // assigns the link of the image to a variable when clicked
    let src;
    $(".img").click(function(){
        src = $(this).attr("src");

        // reveals the pop up image
        $(".imagePop").css("display", "flex");
        $(".image").css("display", "block");
        $(".image").attr("src", src);

        // when the user clicks, it closes the image pop up
        $(".imagePop").click(function(){
            $(".imagePop").css("display", "none");
            $(".image").css("display", "none");
        })
    })
})