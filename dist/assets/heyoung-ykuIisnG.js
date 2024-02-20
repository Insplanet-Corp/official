import { _ as s } from "./WorkContentCommon-YmLVlc2S.js";
import { e as o, f as c, k as n, p as i } from "./index-w7INBIhN.js";
const e = "/works/heyoung/image_pc_01.jpg",
  _ = "/works/heyoung/image_mobile_01.jpg",
  r = "/works/heyoung/image_pc_02.jpg",
  t = "/works/heyoung/image_mobile_02.jpg",
  m = "/works/heyoung/image_pc_03.jpg",
  a = "/works/heyoung/image_mobile_03.jpg",
  g = "/works/heyoung/image_pc_04.jpg",
  l = "/works/heyoung/image_mobile_04.jpg",
  p = "/works/heyoung/image_pc_05.jpg",
  y = "/works/heyoung/image_mobile_05.jpg",
  k = { class: "work-container" },
  d = i(
    '<div class="works-content"><img src="' +
      e +
      '" class="only-pc"><img src="' +
      _ +
      '" class="only-mobile"></div><div class="works-content"><img src="' +
      r +
      '" class="only-pc"><img src="' +
      t +
      '" class="only-mobile"></div><div class="works-content"><img src="' +
      m +
      '" class="only-pc"><img src="' +
      a +
      '" class="only-mobile"></div><div class="works-content"><img src="' +
      g +
      '" class="only-pc"><img src="' +
      l +
      '" class="only-mobile"></div><div class="works-content"><img src="' +
      p +
      '" class="only-pc"><img src="' +
      y +
      '" class="only-mobile"></div>',
    5
  ),
  f = {
    __name: "heyoung",
    setup(w) {
      return (u, h) => (o(), c("div", k, [n(s), d]));
    },
  };
export { f as default };
