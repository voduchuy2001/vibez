import axios from "axios";
window.axios = axios;

import $ from "jquery";
window.$ = window.jQuery = $;

$(".modal-toggle").on("click", function () {
    $(".gi-modal-overlay").fadeIn();
    $(".gi-modal").fadeIn();
    $("body").addClass("gi-overflow-hidden");
    $(".gi-modal .modal-dialog").addClass("gi-fadeOutUp");
    $(".gi-modal .modal-dialog").removeClass("gi-fadeInDown");
});

$(".gi-close-modal, .gi-modal-overlay").on("click", function () {
    $(".gi-modal-overlay").fadeOut();
    $(".gi-modal").fadeOut();
    $("body").removeClass("gi-overflow-hidden");
    $(".gi-modal .modal-dialog").removeClass("gi-fadeOutUp");
    $(".gi-modal .modal-dialog").addClass("gi-fadeInDown");
});

window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
