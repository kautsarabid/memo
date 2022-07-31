const toggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

toggle.addEventListener('click', function () {
  nav.classList.toggle('slide');
});

// const trigger = document.querySelectorAll('.list');
// const muncul = document.querySelector('.pop-up');

// // trigger.addEventListener('click', function (e) {
// //   if (e.target.className == 'list') {
// //     e.target.muncul.classList('muncul');
// //   }
// //   console.log(muncul);
// // });

// for (let i = 0; i < trigger.length; i++) {
//   trigger[i].addEventListener('click', function () {
//     muncul.classList.add('muncul');
//   });
// }

// const container = document.querySelector('.contact');

// container.addEventListener('click', function (e) {
//   if (e.target.className == 'list') {
//     muncul = thumb.src;
//   }
// });

const gallery = document.querySelectorAll('.list');
const popUp = document.querySelector('.pop-up');
const popUpImg = popUp.querySelector('img');
const close = popUp.querySelector('.close');
const shadow = document.querySelector('.shadow');
const nama = document.querySelectorAll('.list .nama');
const details = document.querySelector('.details span.nama');

const deFacebook = document.querySelector('.wrapper .det-facebook');
const deTwitter = document.querySelector('.wrapper .det-twitter');
const deInstagram = document.querySelector('.wrapper .det-instagram');

const facebook = document.querySelectorAll('.list .facebook');
const twitter = document.querySelectorAll('.list .twitter');
const instagram = document.querySelectorAll('.list .instagram');
window.onload = () => {
  for (let i = 0; i < gallery.length; i++) {
    gallery[i].addEventListener('click', () => {
      let newIndex = i;

      function preview() {
        let ambilNama = nama[newIndex].textContent;
        let pilihGambarUrl = gallery[newIndex].querySelector('img').src;
        let detailFacebook = facebook[newIndex].href;
        let detailTwitter = twitter[newIndex].href;
        let detailInstagram = instagram[newIndex].href;
        deFacebook.href = detailFacebook;
        deTwitter.href = detailTwitter;
        deInstagram.href = detailInstagram;
        popUpImg.src = pilihGambarUrl;
        details.textContent = ambilNama;
      }

      //tombol next and prev
      const prevBtn = document.querySelector('.prev');
      const nextBtn = document.querySelector('.next');

      if (newIndex == 0) {
        prevBtn.style.display = 'none';
      }
      if (newIndex >= gallery.length - 1) {
        nextBtn.style.display = 'none';
      }
      prevBtn.addEventListener('click', () => {
        newIndex--;
        if (newIndex == 0) {
          preview();
          prevBtn.style.display = 'none';
        } else {
          preview();
          nextBtn.style.display = 'block';
        }
      });
      nextBtn.addEventListener('click', () => {
        newIndex++;
        if (newIndex >= gallery.length - 1) {
          preview();
          nextBtn.style.display = 'none';
        } else {
          preview();
          prevBtn.style.display = 'block';
        }
      });

      preview();
      details.textContent.innerHtml = nama[i];
      document.querySelector('body').style.overflow = 'hidden';
      popUp.classList.add('show');
      shadow.style.display = 'block';
      shadow.addEventListener('click', () => {
        popUp.classList.remove('show');
        prevBtn.style.display = 'block';
        nextBtn.style.display = 'block';
        shadow.style.display = 'none';
        document.querySelector('body').style.overflow = 'auto';
      });

      close.addEventListener('click', () => {
        prevBtn.style.display = 'block';
        nextBtn.style.display = 'block';
        shadow.style.display = 'none';
        popUp.classList.remove('show');
        document.querySelector('body').style.overflow = 'auto';
      });
    });
  }
};
