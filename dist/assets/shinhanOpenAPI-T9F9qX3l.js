import { _ as o } from "./WorkContentCommon-YmLVlc2S.js";
import { e as i, f as e, k as c, i as a, p as t } from "./index-w7INBIhN.js";
const r = "/works/shinhanOpenAPI/image_pc_01.jpg",
  p = "/works/shinhanOpenAPI/image_mobile_01.jpg",
  _ = "/works/shinhanOpenAPI/image_pc_02.jpg",
  l = "/works/shinhanOpenAPI/image_mobile_02.jpg",
  m = "/works/shinhanOpenAPI/image_pc_03.jpg",
  g = "/works/shinhanOpenAPI/image_mobile_03.jpg",
  h = { class: "work-container" },
  d = t(
    '<div class="works-content"><img src="' +
      r +
      '" class="only-pc"><img src="' +
      p +
      '" class="only-mobile"></div><div class="works-content"><img src="' +
      _ +
      '" class="only-pc"><img src="' +
      l +
      '" class="only-mobile"></div><div class="works-content"><img src="' +
      m +
      '" class="only-pc"><img src="' +
      g +
      '" class="only-mobile"></div>',
    3
  ),
  v = {
    __name: "shinhanOpenAPI",
    props: { workData: Object },
    setup(s) {
      const n = s.workData.detail;
      return (w, O) => (
        i(), e("div", h, [c(o, { detail: a(n) }, null, 8, ["detail"]), d])
      );
    },
  };
export { v as default };
