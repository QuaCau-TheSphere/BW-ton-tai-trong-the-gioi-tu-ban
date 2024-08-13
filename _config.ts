import lume from "lume/mod.ts";
import wiki from "wiki/mod.ts";
import metas from "lume/plugins/metas.ts";
import ogImages from "lume/plugins/og_images.ts";
import sitemap from "lume/plugins/sitemap.ts";
const markdown = {
  options: {
    breaks: true,
  },
};

const site = lume({
  src: "./docs",
  location: new URL("https://kiếmtiền.quảcầu.cc"),
  server: {
    open: true,
  },
}, { markdown });

site.use(wiki({
  favicon: {
    input: "assets/favicon.svg"
  }
}));
site.use(ogImages());
site.use(metas());
site.use(sitemap());

export default site;
