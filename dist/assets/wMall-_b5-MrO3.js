import { _ as s } from "./WorkContentCommon-YmLVlc2S.js";
import { e as o, f as c, k as a, p as e } from "./index-w7INBIhN.js";
const t = "/works/wMall/image_pc_01.jpg",
  _ = "/works/wMall/image_mobile_01.jpg",
  i = "/works/wMall/image_pc_02.jpg",
  l = "/works/wMall/image_mobile_02.jpg",
  r = { class: "work-container" },
  n = e(
    '<div class="works-content"><img src="' +
      t +
      '" class="only-pc"><img src="' +
      _ +
      '" class="only-mobile"></div><div class="works-content"><img src="' +
      i +
      '" class="only-pc"><img src="' +
      l +
      '" class="only-mobile"></div>',
    2
  ),
  k = {
    __name: "wMall",
    setup(m) {
      return (p, g) => (o(), c("div", r, [a(s), n]));
    },
  };
export { k as default };
