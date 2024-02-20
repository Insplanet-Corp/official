import { _ as s } from "./WorkContentCommon-YmLVlc2S.js";
import { e as o, f as c, k as e, p as t } from "./index-w7INBIhN.js";
const _ = "/works/kmc/image_pc_01.jpg",
  i = "/works/kmc/image_mobile_01.jpg",
  m = "/works/kmc/image_pc_02.jpg",
  r = "/works/kmc/image_mobile_02.jpg",
  n = { class: "work-container" },
  a = t(
    '<div class="works-content"><img src="' +
      _ +
      '" class="only-pc"><img src="' +
      i +
      '" class="only-mobile"></div><div class="works-content"><img src="' +
      m +
      '" class="only-pc"><img src="' +
      r +
      '" class="only-mobile"></div>',
    2
  ),
  w = {
    __name: "kmc",
    setup(p) {
      return (l, k) => (o(), c("div", n, [e(s), a]));
    },
  };
export { w as default };
