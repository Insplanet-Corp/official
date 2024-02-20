import { _ as s } from "./WorkContentCommon-YmLVlc2S.js";
import { e as o, f as c, k as t, p as e } from "./index-w7INBIhN.js";
const n = "/works/mentor/image_pc_01.jpg",
  r = "/works/mentor/image_mobile_01.jpg",
  i = "/works/mentor/image_pc_02.jpg",
  m = "/works/mentor/image_mobile_02.jpg",
  _ = "/works/mentor/image_pc_03.jpg",
  a = "/works/mentor/image_mobile_03.jpg",
  l = { class: "work-container" },
  p = e(
    '<div class="works-content"><img src="' +
      n +
      '" class="only-pc"><img src="' +
      r +
      '" class="only-mobile"></div><div class="works-content"><img src="' +
      i +
      '" class="only-pc"><img src="' +
      m +
      '" class="only-mobile"></div><div class="works-content"><img src="' +
      _ +
      '" class="only-pc"><img src="' +
      a +
      '" class="only-mobile"></div>',
    3
  ),
  b = {
    __name: "mentor",
    setup(g) {
      return (k, d) => (o(), c("div", l, [t(s), p]));
    },
  };
export { b as default };
