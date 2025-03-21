// Write cool JS here!!
let bigImage = document.getElementById('big');

let thumb1 = document.getElementById('thumb1');
let thumb2 = document.getElementById('thumb2');
let thumb3 = document.getElementById('thumb3');
let thumb4 = document.getElementById('thumb4');
let thumb5 = document.getElementById('thumb5');
let thumb6 = document.getElementById('thumb6');
let thumb7 = document.getElementById('thumb7');
let thumb8 = document.getElementById('thumb8');
let thumb9 = document.getElementById('thumb9');

thumb1.addEventListener('click', function (event) {
    let bigImageUrl = bigImage.src;
    let smallImageUrl = thumb1.src;

    bigImage.src = smallImageUrl;
    thumb1.src = bigImageUrl;
});

thumb2.addEventListener('click', function (event) {
    let bigImageUrl = bigImage.src;
    let smallImageUrl = thumb2.src;

    bigImage.src = smallImageUrl;
    thumb2.src = bigImageUrl;
});

thumb3.addEventListener('click', function (event) {
    let bigImageUrl = bigImage.src;
    let smallImageUrl = thumb3.src;

    bigImage.src = smallImageUrl;
    thumb3.src = bigImageUrl;
});

thumb4.addEventListener('click', function (event) {
    let bigImageUrl = bigImage.src;
    let smallImageUrl = thumb4.src;

    bigImage.src = smallImageUrl;
    thumb4.src = bigImageUrl;
});

thumb5.addEventListener('click', function (event) {
    let bigImageUrl = bigImage.src;
    let smallImageUrl = thumb5.src;

    bigImage.src = smallImageUrl;
    thumb5.src = bigImageUrl;
});

thumb6.addEventListener('click', function (event) {
    let bigImageUrl = bigImage.src;
    let smallImageUrl = thumb6.src;

    bigImage.src = smallImageUrl;
    thumb6.src = bigImageUrl;
});

thumb7.addEventListener('click', function (event) {
    let bigImageUrl = bigImage.src;
    let smallImageUrl = thumb7.src;

    bigImage.src = smallImageUrl;
    thumb7.src = bigImageUrl;
});

thumb8.addEventListener('click', function (event) {
    let bigImageUrl = bigImage.src;
    let smallImageUrl = thumb8.src;

    bigImage.src = smallImageUrl;
    thumb8.src = bigImageUrl;
});

thumb9.addEventListener('click', function (event) {
    let bigImageUrl = bigImage.src;
    let smallImageUrl = thumb9.src;

    bigImage.src = smallImageUrl;
    thumb9.src = bigImageUrl;
});