document.addEventListener('DOMContentLoaded', function () {
  const targetUrl = 'https://v.wjx.cn/vm/YXrorAW.aspx';

  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: false,
    speed: 700,
    resistanceRatio: 0.85,
    grabCursor: true
  });

  const prevBtn = document.querySelector('.nav-prev');
  const nextBtn = document.querySelector('.nav-next');

  prevBtn.addEventListener('click', () => {
    swiper.slidePrev();
  });

  nextBtn.addEventListener('click', () => {
    if (swiper.isEnd) {
      window.location.href = targetUrl;
    } else {
      swiper.slideNext();
    }
  });

  // swiper.on('reachEnd', () => {
  //   console.log('已到最后一页');
  // });

  let touchStartX = 0;
  let touchEndX = 0;

  const swiperEl = document.querySelector('.swiper');

  swiperEl.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].clientX;
  });

  swiperEl.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].clientX;

    if (swiper.isEnd && touchStartX - touchEndX > 50) {
      window.location.href = targetUrl;
    }
  });
});