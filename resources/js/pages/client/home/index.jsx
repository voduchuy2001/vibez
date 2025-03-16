import ClientLayout from "@/layouts/client-layout";

export default function Index() {
    $(".loc-list").on("click", function () {
        var locationName = $(this).find(".gi-detail").html();
        $(".gi-location-title").html(locationName);
        $(".gi-location-title").parent().attr("title", locationName);
    });

    $(".gi-site-menu-icon").on("click", function () {
        $(".gi-mobile-menu-overlay").fadeIn();
        $(".gi-mobile-menu").addClass("gi-menu-open");
    });

    $(".gi-mobile-menu-overlay, .gi-close-menu").on("click", function () {
        $(".gi-mobile-menu-overlay").fadeOut();
        $(".gi-mobile-menu").removeClass("gi-menu-open");
    });

    return <ClientLayout>xin chao cac ban</ClientLayout>;
}
