;(function(window,document,undefined){
    "use strict";
        var init = function(){
            var canvas = document.querySelector('#flowers');
            var icon_template = document.querySelector('#append-flowers-here');
            var icon_width = 40;
            var icon_height = 30;
            var the_images = [
                'images/white_flower1.png',
                'images/white_flowers2.png'
            ];

            var pickRandomImage = function(){
                var i = Math.floor( Math.random() * the_images.length );
                return the_images[i];
            };

            var total_number_of_images = 15;
            var max_height = screen.height - icon_width;
            var max_width = screen.width;

            console.log("max height: " + max_height);
            console.log("max width: " + max_width);

            var randomCoordinate = function(){
                var r = [];
                var x = Math.floor(Math.random() * max_width) - 200;
                var y = Math.floor(Math.random() * max_height) - 150;
                r = [x,y];
                return r;
            };

            var createImage = function(){
                var node = icon_template.cloneNode(true);
                var xy = randomCoordinate();
                node.removeAttribute('id');
                node.removeAttribute('hidden');
                node.style.top = xy[1] + 'px';
                node.style.left = xy[0] + 'px';
                node.style.width = 130 + 'px';
                node.style.transition = 'opacity 10s ease-in';
                node.setAttribute('src',pickRandomImage());
                canvas.appendChild(node);
            };

            for (var i = 0; i < total_number_of_images; i++){
                createImage();
            };
        };
       window.addEventListener('load',init);
})(window,document);
