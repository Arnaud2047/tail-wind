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

image_array = [
    'èimage/AAAABXzGwavBQ4vsAhpljRhSZZ7o0UPrZRYf2cz5fcwwJ9aP2-bMG5Jnx_Nx_TGI6439FBLkqWnFBztxcXA6Y0RmjBVcys5DqgbVp29YWXDEYgkP244ZTuMlMiz2_1Dv.jpg',
    'image/AAAABSu23BFDCOWqfyRrnOhHpsiADF4TvFHaSwAehhScTI41IaubjJlaeiLWX3BBvZBdd70ktBfyFS4cttzi6TRLqovGHAVInv3JUrWxX46eaJnycl7hb9tGZLJenVV7.jpg',
   
    'image/maxresdefault (3).jpg',
]

function get_ramdom_image(){
    random_index = Math.floor(Math.random() * image_array.length);

    selected_images = image_array[random_index]
    document.getElementById('pp').scr = `./image${selected_images}`
}