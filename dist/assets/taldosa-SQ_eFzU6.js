import { _ as o } from "./WorkContentCommon-YmLVlc2S.js";
import { e as a, f as e, k as t, j as s } from "./index-w7INBIhN.js";
const c = "/works/taldosa/image_pc_01.jpg",
  _ = "/works/taldosa/image_mobile_01.jpg",
  r = { class: "work-container" },
  n = s(
    "div",
    { class: "works-content" },
    [
      s("img", { src: c, class: "only-pc" }),
      s("img", { src: _, class: "only-mobile" }),
    ],
    -1
  ),
  k = {
    __name: "taldosa",
    setup(i) {
      return (m, l) => (a(), e("div", r, [t(o), n]));
    },
  };
export { k as default };
