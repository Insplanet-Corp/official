import { _ as s } from "./WorkContentCommon-YmLVlc2S.js";
import { e as o, f as n, k as c, p as i } from "./index-w7INBIhN.js";
const a = "/works/shinhanPlus/image_pc_01.jpg",
  e = "/works/shinhanPlus/image_mobile_01.jpg",
  t = "/works/shinhanPlus/image_pc_02.jpg",
  _ = "/works/shinhanPlus/image_mobile_02.jpg",
  r = { class: "work-container" },
  l = i(
    '<div class="works-content"><img src="' +
      a +
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
    __name: "shinhanPlus",
    setup(m) {
      return (p, h) => (o(), n("div", r, [c(s), l]));
    },
  };
export { k as default };
