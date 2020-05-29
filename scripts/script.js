'use strict';
window.onload = () => {
  let bttns = document.querySelectorAll('.pnav__buton');
  let cards = document.querySelectorAll('.pcards__item');

  for (let i = 0; i < bttns.length; i++) {
    let Bdata = bttns[i].dataset.b;

    bttns[i].onclick = () => {
      for (let i = 0; i < cards.length; i++) {
        let Cdata = cards[i].dataset.c;

        if (Cdata == Bdata || Bdata == 'all') {
          let aval = cards[i].classList.contains('hidden');

          if (aval) {
            cards[i].classList.remove('hidden');
          }
        } else {
          cards[i].classList.add('hidden');
        }
      }
    };
  }
}; //window.onload;
