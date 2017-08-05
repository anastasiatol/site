(function () {
    function getImagesFromServer() {
        return [{
            src: "img/food4.jpg"
        }, {
            src: "img/food4.jpg"
        }, {
            src: "img/food4.jpg"
        }, {
            src: "img/food4.jpg"
        }];
    }

    function renderGallery() {
        var images = getImagesFromServer();

        images.forEach(function (image) {
            var img = document.createElement("img");
            img.src = image.src;
            $(img).addClass("small");

            $("#gallery").append(img);
        });
    }

    $(document).ready(function () {
        //first opening application
    }
})();
