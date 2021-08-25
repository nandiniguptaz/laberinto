function openDoor(field) {
    var y = $(field).find(".thumb");
    var x = y.attr("class");
    if (y.hasClass("thumbOpened")) {
        y.removeClass("thumbOpened");
    }
    else {
        $(".thumb").removeClass("thumbOpened");
        y.addClass("thumbOpened");
    }
}
/*
function showQues(field) {
    display = "this is your question";
} */
/*
const targetDiv = document.getElementById("lefttext");
const btn = document.getElementById("d1");
function func1(field) {
    if(targetDiv.style.display != "none"){
        targetDiv.style.display = "none";
    }

};

*/



let els = document.getElementsByClassName('step');
let steps = [];
Array.prototype.forEach.call(els, (e) => {
  steps.push(e);
  e.addEventListener('click', (x) => {
    progress(x.target.id);
  });
});

/*
function progress(stepNum) {
  let p = stepNum * 30;
  document.getElementsByClassName('percent')[0].style.width = `${p}%`;
  steps.forEach((e) => {
    if (e.id === stepNum) {
      e.classList.add('selected');
      e.classList.remove('completed');
    }
    if (e.id < stepNum) {
      e.classList.add('completed');
    }
    if (e.id > stepNum) {
      e.classList.remove('selected', 'completed');
    }
  });
}

*/
