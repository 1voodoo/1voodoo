console.log('I second page');
const container = document.getElementById('elem');
const btnAll = document.querySelectorAll('.btn');
// добавить класс и удалить этот же класс у других элемнтах
for (var i = 0; i < btnAll.length; i++) {
    btnAll[i].onclick = function (event) {
        removeClass();
        if (event) {
            this.classList.add("active");
        }
    }
}
function removeClass(){
  for (var i = 0; i < btnAll.length; i++) {
    btnAll[i].classList.remove('active');
  }
}
