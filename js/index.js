function getImagesFromServer() {
    return $.get("js/images.json");
}

function renderGallery() {
    var self = this;
    var images = getImagesFromServer().then(function (data) {
        var images = JSON.parse(data);
        renderImageCollection(images);
    })
}

function renderImageCollection(images) {
    if (images) {
        self.images = images;
        images.forEach(function (image) {
            var img = document.createElement("img");
            img.src = image.src;
            $(img).addClass("small");

            $("#gallery").append(img);
        });
    }
}

$(document).ready(function () {
    //first opening application
    renderGallery();
});

function filterByTag(event){
    //this.images
    //var filteredimages = this.images.filter
    //renderImageCollection(filteredimages)
}