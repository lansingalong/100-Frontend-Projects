function wordCount(str){

return str.split(" ").length

}

$("#text").on("keydown",function(event){

    // runs when text changes ("on keydown")

  var str = $("#text").val()
  var count = wordCount(str)
  var counter = $("#counter")

  counter.text(count)

})
