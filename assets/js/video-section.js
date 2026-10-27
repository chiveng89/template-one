$(function () {
    // mp4 files play in an HTML5 <video>; an iframe just shows the raw file
    $('.popup-vimeo').magnificPopup({
        type: 'inline',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        callbacks: {
            elementParse: function (item) {
                var src = item.el.attr('href');
                item.src = '<div class="mfp-video-wrap">' +
                    '<video src="' + src + '" controls autoplay playsinline></video>' +
                    '</div>';
            },
            beforeClose: function () {
                this.content.find('video').each(function () {
                    this.pause();
                });
            }
        }
    });
});

// $(function () {
//     $('.popup-youtube').magnificPopup({
//         type: 'iframe',
//         mainClass: 'mfp-fade',
//         removalDelay: 160,
//         preloader: false,
//         fixedContentPos: false
//     });
// });
