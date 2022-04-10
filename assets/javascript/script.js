var timeBlock = document.getElementById("timeBlock");
var saveBtn = document.getElementById("save");

saveBtn.addEventListener("click", function(event) {
    var timeBlock = {
        timeBlock: timeBlock.value,
        saveBtn: saveBtn.value
    }
});