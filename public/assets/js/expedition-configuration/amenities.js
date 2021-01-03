//    $("[data-delete]").on("click", function () {
//        const amenityId = $(this).data("amenity-id");
//        console.log(amenityId);
//        $.ajax(`/api/delete/amenity/${amenityId}`, {
//            type: "DELETE"
//        }).then((result) => {
//            setTimeout(function () { location.reload(true); console.log(result) }, 5000);
//        }).catch(err => console.log(err));
//    });

document.querySelectorAll('[data-add]').forEach((el) => {
  el.addEventListener('click', async function () {
    const amenityId = this.dataset.amenityId
    await fetch(`/api/add/amenity/${amenityId}`, {
      method: 'POST'
    })
    setTimeout(function () {
      location.reload()
    }, 100)
  })
})

//    $("[data-finalize]").on("click", function () {
//        $.ajax(`/api/amenity/finalize`, {
//            type: "POST"
//        }).then((result) => {
//            setTimeout(function () { location.reload(true); console.log(result) }, 5000);
//        }).catch(err => console.log(err));
//    });
