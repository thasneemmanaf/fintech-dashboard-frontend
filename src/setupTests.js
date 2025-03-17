import '@testing-library/jest-dom';

// Add window.matchMedia mock for all tests
window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
      addEventListener: function () {},
      removeEventListener: function () {},
      dispatchEvent: function () {},
      media: '',
      onchange: null,
    };
  };
