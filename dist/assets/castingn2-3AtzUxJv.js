import { _ as s } from "./WorkContentCommon-YmLVlc2S.js";
import { e as o, f as c, k as n, p as t } from "./index-w7INBIhN.js";
const i = "/works/castingn2/image_pc_01.jpg",
  a = "/works/castingn2/image_mobile_01.jpg",
  e = "/works/castingn2/image_pc_02.jpg",
  _ = "/works/castingn2/image_mobile_02.jpg",
  r = { class: "work-container" },
  m = t(
    '<div class="works-content"><img src="' +
      i +
      '" class="only-pc"><img src="' +
      a +
      '" class="only-mobile"></div><div class="works-content"><img src="' +
      e +
      '" class="only-pc"><img src="' +
      _ +
      '" class="only-mobile"></div>',
    2
  ),
  w = {
    __name: "castingn2",
    setup(p) {
      return (l, g) => (o(), c("div", r, [n(s), m]));
    },
  };
export { w as default };
