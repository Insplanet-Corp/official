import { _ as o } from "./WorkContentCommon-YmLVlc2S.js";
import { e as a, f as e, k as c, j as s } from "./index-w7INBIhN.js";
const t = "/works/mmaa/image_pc_01.jpg",
  _ = "/works/mmaa/image_mobile_01.jpg",
  m = { class: "work-container" },
  r = s(
    "div",
    { class: "works-content" },
    [
      s("img", { src: t, class: "only-pc" }),
      s("img", { src: _, class: "only-mobile" }),
    ],
    -1
  ),
  k = {
    __name: "mmaa",
    setup(n) {
      return (i, p) => (a(), e("div", m, [c(o), r]));
    },
  };
export { k as default };
