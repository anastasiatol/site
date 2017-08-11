function getImagesFromServer() {
    return $.get("js/images.json");
}

//function renderGallery() {
//    getImagesFromServer().then(function (data) {
//        renderImageCollection(data);
//    })
//}
function renderGallery() {
     getImagesFromServer().then(function (data) {
        renderImageCollection(data);
        this.images = data;
    }.bind(this))
    var images = getImagesFromServer().then(function (data) {
        var images = JSON.parse(data);
        renderImageCollection(images);
    })
}

function renderImageCollection(images) {
    if (images) {
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
        },
        {
            text: "Starters",
            tag: 'starter'
        },
        {
            text: "Main Courses",
            tag: 'main'
        },
        {
            text: "Desserts",
            tag: 'dessert'
        },
        {
            text: "Show everything",
            tag: 'all'
        }];
    buttonNames.forEach(function (filter) {
        var button = document.createElement('div');
        $(button).addClass('tagButton');
        button.innerText = filter.text;
        $('.tagButtons').append(button);
        
        $(button).click(function () {
            filterByTag(filter.tag);
        });
    });
};

$(document).ready(function () {
    //first opening application
    renderTagButtons();
    renderGallery();
});

function filterByTag(tagName) {
    $("div.gallery-images").empty();
    if (tagName == 'all') {renderImageCollection(this.images)}
    else {
        var filteredImages = this.images.filter(function (foodimg) {
        return foodimg.tags.indexOf(tagName) > -1;
    });
    renderImageCollection(filteredImages);
    };
}

function search(title) {
    title = title.toLowerCase();
    $("div.gallery-images").empty();
    if (title == '') {renderImageCollection(this.images)}
    else {
        var filteredImages = this.images.filter(function (foodimg) {
            lowerTitle = foodimg.title.toLowerCase();
            return lowerTitle.indexOf(title) > -1;
        });
    };

    renderImageCollection(filteredImages);
}
    


