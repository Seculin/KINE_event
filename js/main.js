// Webpack
// require('../css/vendor/aos.css');
// require('../css/vendor/bootstrap-theme.min.css');
// require('../css/vendor/bootstrap.min.css');
// require('../css/main.css');

$( document ).ready(function() {
    $('.ldcc-programme-link').on('click', function() {
        rotateAngle(this);
    });

    function rotateAngle(x) {
        $("#" + x.childNodes[3].firstChild.id).toggleClass('rotateAngle');
    }
});