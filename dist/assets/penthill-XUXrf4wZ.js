import { _ as e } from "./WorkContentCommon-YmLVlc2S.js";
import { e as o, f as t, k as c, j as s } from "./index-w7INBIhN.js";
const n = "/works/penthill/image_pc_01.jpg",
  _ = "/works/penthill/image_mobile_01.jpg",
  a = { class: "work-container" },
  r = s(
    "div",
    { class: "works-content" },
    [
      s("img", { src: n, class: "only-pc" }),
      s("img", { src: _, class: "only-mobile" }),
    ],
    -1
  ),
  k = {
    __name: "penthill",
    setup(i) {
      return (l, m) => (o(), t("div", a, [c(e), r]));
    },
  };
export { k as default };
