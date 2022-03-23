module.exports = {
    theme: {
      screens: {
     
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
    
      }
    }
}


function ScrollRight (){
    document.getElementById('m').scrollLeft += 200;
};
function ScrollLeft  (){
    document.getElementById('m').scrollLeft -= 200;
};

        // Getting video element using jQuery
        var video = $("#video");
  
        // Check if video is ready to play
        $(video).on('canplay', function () {
            $(video).mouseenter(function () {
                $(this).get(0).play();
            }).mouseleave(function () {
                $(this).get(0).pause();
            })
        });