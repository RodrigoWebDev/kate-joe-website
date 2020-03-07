export default {
  space: Array.from(Array(11).keys()).map(x => x * 8),
  breakpoints: ["768px", "1024px"],
  colors: {
    text: "#000000",
    background: "#FFFFFF",
    primary: "#1E488F",
    muted: "#8F8F8F",
  },
  fonts: {
    body: "'Playfair Display', serif",
    heading: "'Poppins', sans-serif",
    monospace: "Menlo, monospace",
  },
  fontWeights: {
    body: 400,
    heading: 700,
  },
  sizes: {
    container: "1184px",
    containerSmall: "735px",
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  fontSizes: [14, 18, 24, 27, 32, 40, 48, 60, 72],
  text: {
    h1: {
      fontSize: 72,
      lineHeight: "98px",
    },
    h2: {
      fontSize: 60,
      lineHeight: "82px",
    },
    h3: {
      fontSize: 48,
      lineHeight: "65px",
    },
    h4: {
      fontSize: 40,
      lineHeight: "54px",
    },
    h5: {
      fontSize: 32,
      lineHeight: "44px",
    },
    h6: {
      fontSize: 27,
      lineHeight: "37px",
    },
    h7: {
      fontSize: 24,
      lineHeight: "34px",
    },
    body: {
      fontSize: 18,
      lineHeight: "22px",
      fontWeight: "body",
    },
    bodySmall: {
      fontSize: 14,
      lineHeight: "20px",
    },
  },
  styles: {
    root: {
      fontSize: 1,
      lineHeight: "body",
      fontWeight: "body",
      fontFamily: "body",
    },
    p: {
      m: 0,
      fontSize: 18,
      color: "muted",
      lineHeight: "28px",
      ":not(:last-child)": {
        mb: 4,
      },
    },
    a: {
      color: "primary",
    },
  },
  links: {
    nav: {
      textDecoration: "none",
      textTransform: "uppercase",
      fontFamily: "heading",
      color: "rgba(0, 0, 0, 0.30)",
      "&:hover": {
        color: "primary",
      },
    },
    navActive: {
      variant: "links.nav",
      color: "primary",
    },
  },
}
