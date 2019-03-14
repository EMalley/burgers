$(function () {
    $(".create-form").on("submit", function (event) {
        event.preventDefault();
        var newBurger = {
            burger_name: $("#newburger").val().trim(),
            devoured: 0
        };

        $.ajax({
            url: "/api/burgers",
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log("new Burger Added");
            location.reload();
        });
    });

    $(document).on("click", ".eatburger", function (event) {
        var id = $(this).data("id");
        var devouredState = { devoured: 1 };

        $.ajax({
            url: "/api/burgers/" + id,
            type: "PUT",
            data: devouredState
        }).then(function () {
            console.log("Devoured Burger");
            location.reload()
        });
        $.ajax({
            type: "DELETE",
            url: "/api/burgers/" + id
        }).then(location.reload());
    });
});