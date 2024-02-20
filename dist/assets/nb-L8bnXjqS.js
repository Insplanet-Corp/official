import { _ as s } from "./WorkContentCommon-YmLVlc2S.js";
import { e as o, f as c, k as n, p as e } from "./index-w7INBIhN.js";
const t = "/works/nb/image_pc_01.jpg",
  _ = "/works/nb/image_mobile_01.jpg",
  i = "/works/nb/image_pc_02.jpg",
  r = "/works/nb/image_mobile_02.jpg",
  a = { class: "work-container" },
  m = e(
    '<div class="works-content"><img src="' +
      t +
      '" class="only-pc"><img src="' +
      _ +
      '" class="only-mobile"></div><div class="works-content"><img src="' +
      i +
      '" class="only-pc"><img src="' +
      r +
      '" class="only-mobile"></div>',
    2
  ),
  b = {
    __name: "nb",
    setup(p) {
      return (l, g) => (o(), c("div", a, [n(s), m]));
    },
  };
export { b as default };
