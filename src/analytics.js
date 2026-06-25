import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-L0NSMSE49D");
};

export const trackPageView = (path) => {
  ReactGA.send({
    hitType: "pageview",
    page: path,
  });
};
