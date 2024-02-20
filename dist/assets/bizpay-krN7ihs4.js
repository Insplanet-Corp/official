import { _ as s } from "./WorkContentCommon-YmLVlc2S.js";
import { e as o, f as c, k as i, p as a } from "./index-w7INBIhN.js";
const e = "/works/bizpay/image_pc_01.jpg",
  t = "/works/bizpay/image_mobile_01.jpg",
  _ = "/works/bizpay/image_pc_02.jpg",
  r = "/works/bizpay/image_mobile_02.jpg",
  n = { class: "work-container" },
  p = a(
    '<div class="works-content"><img src="' +
      e +
      '" class="only-pc"><img src="' +
      t +
      '" class="only-mobile"></div><div class="works-content"><img src="' +
      _ +
      '" class="only-pc"><img src="' +
      r +
      '" class="only-mobile"></div>',
    2
  ),
  b = {
    __name: "bizpay",
    setup(m) {
      return (l, g) => (o(), c("div", n, [i(s), p]));
    },
  };
export { b as default };
