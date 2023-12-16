const carouselConfig: any = {
  type: 'loop',
  gap: '2rem',
  drag: 'free',
  arrows: false,
  pagination: false,
  perPage: 5,
  focus: 'center',
  breakpoints: {
    1420: {
      perPage: 4,
      gap: '1.5rem',
    },
    1235: {
      perPage: 3,
      gap: '1.3rem',
    },
    900: {
      perPage: 2,
      // gap: '2px',
    },
    800: {
      perPage: 2,
      gap: '13rem',
    },
  },
  autoScroll: {
    pauseOnHover: false,
    pauseOnFocus: false,
    rewind: false,
    speed: 1,
  },
};

export default carouselConfig;
