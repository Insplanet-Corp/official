import { _ as e } from "./WorkContentCommon-YmLVlc2S.js";
import { e as o, f as t, k as a, j as s } from "./index-w7INBIhN.js";
const c = "/works/paEnter/image_pc_01.jpg",
  r = "/works/paEnter/image_mobile_01.jpg",
  n = { class: "work-container" },
  _ = s(
    "div",
    { class: "works-content" },
    [
      s("img", { src: c, class: "only-pc" }),
      s("img", { src: r, class: "only-mobile" }),
    ],
    -1
  ),
  k = {
    __name: "paEnter",
    setup(i) {
      return (m, p) => (o(), t("div", n, [a(e), _]));
    },
  };
export { k as default };
