import { c as create_ssr_component, g as add_attribute, j as escape, v as validate_component } from "../../chunks/index.js";
const wave_bg = "/_app/immutable/assets/wave_bg.dc33a62e.webp";
const dawn_bg = "/_app/immutable/assets/dawn-sky-bg.b858c1e6.webp";
const Login_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".form-group.svelte-1lm7xhy.svelte-1lm7xhy{margin-bottom:1rem}.form-label.svelte-1lm7xhy.svelte-1lm7xhy{font-weight:bold;margin-bottom:0.5rem}.form-input.svelte-1lm7xhy.svelte-1lm7xhy{width:280px;padding:0.5rem;font-size:1rem;border-radius:4px;border:1px solid #ccc;box-sizing:border-box}.form-button.svelte-1lm7xhy.svelte-1lm7xhy{padding:0.5rem 1rem;font-size:1rem;border-radius:4px;background-color:#007bff;color:#fff;border:none;cursor:pointer}.form-group.svelte-1lm7xhy input.svelte-1lm7xhy{color:#000}.form-group.svelte-1lm7xhy.svelte-1lm7xhy{display:flex;flex-direction:column}@media(min-width: 576px){.form-label.svelte-1lm7xhy.svelte-1lm7xhy{margin-bottom:0;margin-right:1rem}.form-input.svelte-1lm7xhy.svelte-1lm7xhy{flex-grow:1}}@media(min-width: 768px){.form-input.svelte-1lm7xhy.svelte-1lm7xhy{width:400px}}@media(min-width: 992px){.form-input.svelte-1lm7xhy.svelte-1lm7xhy{width:400px}}",
  map: null
};
const Login = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email = "";
  let password = "";
  let confirmPassword = "";
  $$result.css.add(css$1);
  return `<form><div class="form-group svelte-1lm7xhy"><label class="form-label svelte-1lm7xhy" for="email">Adresse email:</label>
		<input class="form-input svelte-1lm7xhy" type="email" id="email" placeholder="Entrez votre adresse email" required${add_attribute("value", email, 0)}></div>

	<div class="form-group svelte-1lm7xhy"><label class="form-label svelte-1lm7xhy" for="password">Mot de passe:</label>
		<input class="form-input svelte-1lm7xhy" type="password" id="password" placeholder="Entrez votre mot de passe" required${add_attribute("value", password, 0)}></div>

	<div class="form-group svelte-1lm7xhy"><label class="form-label svelte-1lm7xhy" for="confirmPassword">Confirmer le mot de passe:</label>
		<input class="form-input svelte-1lm7xhy" type="password" id="confirmPassword" placeholder="Répétez votre mot de passe" required${add_attribute("value", confirmPassword, 0)}></div>

	<button class="form-button svelte-1lm7xhy" type="submit">Envoyer</button>
</form>`;
});
const Banner_svelte_svelte_type_style_lang = "";
const css = {
  code: ".banner.svelte-159td9n.svelte-159td9n{position:relative;display:flex;align-items:center;justify-content:center;width:100%;background-image:var(--background);background-size:cover;color:#fff;overflow:hidden}.banner.small-height.svelte-159td9n.svelte-159td9n{min-height:200px}.banner.hight-height.svelte-159td9n.svelte-159td9n{min-height:500px}.banner.svelte-159td9n h1.svelte-159td9n{font-size:30px;text-align:center;position:relative;z-index:1}.banner.svelte-159td9n h2.svelte-159td9n{text-align:center;margin-bottom:50px}",
  map: null
};
const Banner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { background = "url(chemin_vers_l_image)" } = $$props;
  let { bannerTitleH1 = "" } = $$props;
  let { bannerTitleH2 = "" } = $$props;
  let { height = "smaller" } = $$props;
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  if ($$props.bannerTitleH1 === void 0 && $$bindings.bannerTitleH1 && bannerTitleH1 !== void 0)
    $$bindings.bannerTitleH1(bannerTitleH1);
  if ($$props.bannerTitleH2 === void 0 && $$bindings.bannerTitleH2 && bannerTitleH2 !== void 0)
    $$bindings.bannerTitleH2(bannerTitleH2);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  $$result.css.add(css);
  return `<section class="${[
    "banner svelte-159td9n",
    (height == "smaller" ? "small-height" : "") + " " + (height == "larger" ? "hight-height" : "")
  ].join(" ").trim()}" style="${"--background: " + escape(background, true)}">${bannerTitleH1 ? `<h1 class="svelte-159td9n">${escape(bannerTitleH1)}</h1>` : `<h2 class="svelte-159td9n">${escape(bannerTitleH2)}</h2>
		${validate_component(Login, "Login").$$render($$result, {}, {}, {})}`}

</section>`;
});
const Intersection_svelte_svelte_type_style_lang = "";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-t32ptj_START -->${$$result.title = `<title>Home</title>`, ""}<meta name="description" content="Svelte demo app"><!-- HEAD_svelte-t32ptj_END -->`, ""}

${validate_component(Banner, "Banner").$$render(
    $$result,
    {
      background: `url(${wave_bg})`,
      bannerTitleH1: "Scribe : Gérez vos factures et devis en toute simplicité",
      height: "smaller"
    },
    {},
    {}
  )}



${validate_component(Banner, "Banner").$$render(
    $$result,
    {
      background: `url(${dawn_bg})`,
      bannerTitleH2: "Veuillez remplir le formulaire ci-dessous.",
      height: "larger"
    },
    {},
    {}
  )}`;
});
export {
  Page as default
};
