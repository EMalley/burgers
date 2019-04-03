$(function () {
    $(".create-form").on("submit", function (event) {
        event.preventDefault();
        console.log($("#burger").val());
        var newBurger = {
            burger_name: $("#burger").val().trim(),
            devoured: 0
        };
        console.log(newBurger)

        $.ajax({
            url: "/api/burgers",
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log("new Burger Added");
            location.reload();
        });
    });

    $(document).on("click", ".eatburger", function () {
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
    });

    $(document).on("click", ".deleteBtn", function () {
        var id = $(this).data("id");
        $.ajax({
            type: "DELETE",
            url: "/api/burgers/" + id
        }).then(location.reload());
        console.log("Deleted Burger", id);
    })
});