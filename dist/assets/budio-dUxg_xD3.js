import { _ as s } from "./WorkContentCommon-YmLVlc2S.js";
import { e as o, f as c, k as i, p as _ } from "./index-w7INBIhN.js";
const t = "/works/budio/image_pc_01.jpg",
  e = "/works/budio/image_mobile_01.jpg",
  n = "/works/budio/image_pc_02.jpg",
  r = "/works/budio/image_mobile_02.jpg",
  a = "/works/budio/image_pc_03.jpg",
  m = "/works/budio/image_mobile_03.jpg",
  l = { class: "work-container" },
  p = _(
    '<div class="works-content"><img src="' +
      t +
      '" class="only-pc"><img src="' +
      e +
      '" class="only-mobile"></div><div class="works-content"><img src="' +
      n +
      '" class="only-pc"><img src="' +
      r +
      '" class="only-mobile"></div><div class="works-content"><img src="' +
      a +
      '" class="only-pc"><img src="' +
      m +
      '" class="only-mobile"></div>',
    3
  ),
  w = {
    __name: "budio",
    setup(d) {
      return (g, b) => (o(), c("div", l, [i(s), p]));
    },
  };
export { w as default };
