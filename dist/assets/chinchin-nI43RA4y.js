import { _ as s } from "./WorkContentCommon-YmLVlc2S.js";
import { e as c, f as o, k as i, p as n } from "./index-w7INBIhN.js";
const _ = "/works/chinchin/image_pc_01.jpg",
  t = "/works/chinchin/image_mobile_01.jpg",
  e = "/works/chinchin/image_pc_02.jpg",
  r = "/works/chinchin/image_mobile_02.jpg",
  a = "/works/chinchin/image_pc_03.jpg",
  m = "/works/chinchin/image_mobile_03.jpg",
  l = { class: "work-container" },
  p = n(
    '<div class="works-content"><img src="' +
      _ +
      '" class="only-pc"><img src="' +
      t +
      '" class="only-mobile"></div><div class="works-content"><img src="' +
      e +
      '" class="only-pc"><img src="' +
      r +
      '" class="only-mobile"></div><div class="works-content"><img src="' +
      a +
      '" class="only-pc"><img src="' +
      m +
      '" class="only-mobile"></div>',
    3
  ),
  v = {
    __name: "chinchin",
    setup(g) {
      return (h, k) => (c(), o("div", l, [i(s), p]));
    },
  };
export { v as default };
