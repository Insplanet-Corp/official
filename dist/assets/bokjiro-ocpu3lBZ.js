import { _ as o } from "./WorkContentCommon-YmLVlc2S.js";
import { e as s, f as c, k as i, p as r } from "./index-w7INBIhN.js";
const e = "/works/bokjiro/image_pc_01.jpg",
  t = "/works/bokjiro/image_mobile_01.jpg",
  _ = "/works/bokjiro/image_pc_02.jpg",
  n = "/works/bokjiro/image_mobile_02.jpg",
  a = { class: "work-container" },
  m = r(
    '<div class="works-content"><img src="' +
      e +
      '" class="only-pc"><img src="' +
      t +
      '" class="only-mobile"></div><div class="works-content"><img src="' +
      _ +
      '" class="only-pc"><img src="' +
      n +
      '" class="only-mobile"></div>',
    2
  ),
  b = {
    __name: "bokjiro",
    setup(p) {
      return (l, k) => (s(), c("div", a, [i(o), m]));
    },
  };
export { b as default };
