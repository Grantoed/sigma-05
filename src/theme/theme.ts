const colors = Object.freeze({
  ac: "var(--accent-color)",
  mbgc: "var(--main-bg-color)",
  abgc: "var(--alt-bg-color)",
  hbgc: "var(--hero-bg-color)",
  bbgc: "var(--banner-bg-color)",
  cbgc: "var(--cart-bg-color)",
  gbgc: "var(--gallery-bg-color)",
  mtc: "var(--main-title-color)",
  mtch: "var(--main-title-color-hover)",
  atc: "var(--alt-title-color)",
  atch: "var(--alt-title-color-hover)",
  tc: "var(--text-color)",
  sbc: "var(--search-bar-color)",
  buttonIcon: "var(--button-icon-color)",
  abtnc: "var(--active-btn-color)",
  dbtnc: "var(--disabled-btn-color)",
  star: "var(--star-color)",
  discount: "var(--discount-color)",
  placeholder: "var(--placeholder-color)",
  tableBorder: "var(--table-border-color)",
  error: "var(--error-color)",
  shadow: "var(--shadow-color)",
  backdrop: "var(--backdrop-color)",
});

const fonts = Object.freeze({
  tf: "var(--text-font)",
  mtf: "var(--main-title-font)",
  atf: "var(--alt-title-font)",
});

const lineHeights = Object.freeze({
  text: 1.65,
});

export const theme = {
  colors,
  fonts,
  fontSizes: [
    "15px",
    "18px",
    "20px",
    "25px",
    "30px",
    "36px",
    "38px",
    "40px",
    "50px",
    "70px",
    "82px",
  ],
  fontWeights: {
    normal: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    black: 800,
  },
  lineHeights,
  radii: {
    category: "8px",
    points: "20px",
    default: "30px",
    cart: "33px",
    searchBar: "36px",
    buttons: "16px",
    round: "50%",
  },
  size: {
    quarter: "25%",
    half: "50%",
    max: "100%",
    maxVH: "100vh",
    maxVW: "100vw",
  },
};
