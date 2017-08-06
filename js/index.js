function getImagesFromServer() {
    return $.get("js/images.json");
}

function renderGallery() {
    getImagesFromServer().then(function (data) {
        renderImageCollection(data);
    })
}

function renderImageCollection(images) {
    if (images) {
        this.images = images;
        images.forEach(function (image) {
            var img = document.createElement("img");
            img.src = image.src;
            $(img).addClass("small");

            $(".gallery-images").append(img);
        });
    }
}

function renderTagButtons() {
    var buttonNames = [
        {
            text: 'Bellorussian cuisine',
            tag: "bel"
        }, 
        {
            text: 'Italian cuisine',
            tag: 'ital'
        }, 
        {
            text: "Japanese cuisine",
            tag: 'jap'
        }];
    buttonNames.forEach(function (filter) {
        var button = document.createElement('div');
        $(button).addClass('tagButton');
        button.innerText = filter.text;
        $('.tagButtons').append(button);

        $(button).click(function () {
            filterByTag(filter.tag);
        })
    })
}

$(document).ready(function () {
    //first opening application
    renderTagButtons();
    renderGallery();
});

function filterByTag(tagName) {
    var galleryElement = $(".gallery-images");
    if (galleryElement) {
        $(galleryElement).remove();
    };
    //this.images
    //var filteredimages = this.images.filter
    //renderImageCollection(filteredimages)
}
