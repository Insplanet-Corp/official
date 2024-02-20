import { _ as o } from "./WorkContentCommon-YmLVlc2S.js";
import { e, f as t, k as c, j as s } from "./index-w7INBIhN.js";
const _ = "/works/t4k/image_pc_01.jpg",
  a = "/works/t4k/image_mobile_01.jpg",
  r = { class: "work-container" },
  n = s(
    "div",
    { class: "works-content" },
    [
      s("img", { src: _, class: "only-pc" }),
      s("img", { src: a, class: "only-mobile" }),
    ],
    -1
  ),
  d = {
    __name: "t4k",
    setup(i) {
      return (m, p) => (e(), t("div", r, [c(o), n]));
    },
  };
export { d as default };
