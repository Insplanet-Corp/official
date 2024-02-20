import { _ as s } from "./WorkContentCommon-YmLVlc2S.js";
import { e as o, f as c, k as i, p as m } from "./index-w7INBIhN.js";
const _ = "/works/cosmo2/image_pc_01.jpg",
  t = "/works/cosmo2/image_mobile_01.jpg",
  e = "/works/cosmo2/image_pc_02.jpg",
  n = "/works/cosmo2/image_mobile_02.jpg",
  r = "/works/cosmo2/image_pc_03.jpg",
  a = "/works/cosmo2/image_mobile_03.jpg",
  l = { class: "work-container" },
  p = m(
    '<div class="works-content"><img src="' +
      _ +
      '" class="only-pc"><img src="' +
      t +
      '" class="only-mobile"></div><div class="works-content"><img src="' +
      e +
      '" class="only-pc"><img src="' +
      n +
      '" class="only-mobile"></div><div class="works-content"><img src="' +
      r +
      '" class="only-pc"><img src="' +
      a +
      '" class="only-mobile"></div>',
    3
  ),
  b = {
    __name: "cosmo2",
    setup(g) {
      return (k, d) => (o(), c("div", l, [i(s), p]));
    },
  };
export { b as default };
