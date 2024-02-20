import { _ as o } from "./WorkContentCommon-YmLVlc2S.js";
import { e as s, f as c, k as e, p as t } from "./index-w7INBIhN.js";
const _ = "/works/cosmo/image_pc_01.jpg",
  i = "/works/cosmo/image_mobile_01.jpg",
  m = "/works/cosmo/image_pc_02.jpg",
  r = "/works/cosmo/image_mobile_02.jpg",
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
    __name: "cosmo",
    setup(p) {
      return (l, g) => (s(), c("div", n, [e(o), a]));
    },
  };
export { w as default };
