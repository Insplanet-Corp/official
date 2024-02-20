import { _ as s } from "./WorkContentCommon-YmLVlc2S.js";
import { e as n, f as o, k as i, p as a } from "./index-w7INBIhN.js";
const c = "/works/shinhanPlusMain/image_pc_01.jpg",
  e = "/works/shinhanPlusMain/image_mobile_01.jpg",
  t = "/works/shinhanPlusMain/image_pc_02.jpg",
  _ = "/works/shinhanPlusMain/image_mobile_02.jpg",
  r = { class: "work-container" },
  l = a(
    '<div class="works-content"><img src="' +
      c +
      '" class="only-pc"><img src="' +
      e +
      '" class="only-mobile"></div><div class="works-content"><img src="' +
      t +
      '" class="only-pc"><img src="' +
      _ +
      '" class="only-mobile"></div>',
    2
  ),
  k = {
    __name: "shinhanPlusMain",
    setup(m) {
      return (p, h) => (n(), o("div", r, [i(s), l]));
    },
  };
export { k as default };
