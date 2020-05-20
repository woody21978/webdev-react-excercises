window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.add__btn').addEventListener('click', function () {
    let author = document.querySelector('.add__author').value,
      text = document.querySelector('.add__text').value;
    const data = {
      author: author,
      text: text
    }
    console.log(data);
  });
});