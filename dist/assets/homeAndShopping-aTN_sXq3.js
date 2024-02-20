import { _ as s } from "./WorkContentCommon-YmLVlc2S.js";
import { e, f as n, k as c, j as o } from "./index-w7INBIhN.js";
const t = "/works/homeAndShopping/image_pc_01.jpg",
  _ = "/works/homeAndShopping/image_mobile_01.jpg",
  a = { class: "work-container" },
  r = o(
    "div",
    { class: "works-content" },
    [
      o("img", { src: t, class: "only-pc" }),
      o("img", { src: _, class: "only-mobile" }),
    ],
    -1
  ),
  g = {
    __name: "homeAndShopping",
    setup(i) {
      return (m, p) => (e(), n("div", a, [c(s), r]));
    },
  };
export { g as default };
