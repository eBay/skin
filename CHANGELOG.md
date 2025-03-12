# Skin Changelog

## 19.2.0-next.0

### Minor Changes

- [#2590](https://github.com/eBay/skin/pull/2590) [`53d8d48`](https://github.com/eBay/skin/commit/53d8d48d19fc3e85cb5f91b8357590d3e882231e) Thanks [@saiponnada](https://github.com/saiponnada)! - feat(accordion): update expansion icon

- [#2589](https://github.com/eBay/skin/pull/2589) [`a76ba1e`](https://github.com/eBay/skin/commit/a76ba1e94b1eedaffa5fa7cbcf5d0bcba95e5bf6) Thanks [@agliga](https://github.com/agliga)! - feat(button): added animation to buttons

- [#2588](https://github.com/eBay/skin/pull/2588) [`0bbe7cb`](https://github.com/eBay/skin/commit/0bbe7cb09ad4bfdbd43790e0fec9c316ba691cea) Thanks [@agliga](https://github.com/agliga)! - feat(eek): flipped EEK direction

## 19.1.1

### Patch Changes

- [`091aa98`](https://github.com/eBay/skin/commit/091aa984caac53d647c73422b6c117f89aa07284) Thanks [@agliga](https://github.com/agliga)! - fix(dropdowns): added fixed support for floatingui strategy

## 19.1.0

### Minor Changes

- [#2562](https://github.com/eBay/skin/pull/2562) [`59d2e12`](https://github.com/eBay/skin/commit/59d2e1285ca259d224d5eb017669b4e6a2171e9e) Thanks [@ArtBlue](https://github.com/ArtBlue)! - feat(tokens): added new motion tokens

- [#2560](https://github.com/eBay/skin/pull/2560) [`36bec4d`](https://github.com/eBay/skin/commit/36bec4d989747744b8c81655aba0cd94bcdb85cc) Thanks [@ArtBlue](https://github.com/ArtBlue)! - feat(tooltip): updated colors

- [#2565](https://github.com/eBay/skin/pull/2565) [`abcb849`](https://github.com/eBay/skin/commit/abcb849ac64a2280bd16b246d4917d68620c2866) Thanks [@agliga](https://github.com/agliga)! - feat(avatar): added custom fit avatar

- [#2556](https://github.com/eBay/skin/pull/2556) [`6f51583`](https://github.com/eBay/skin/commit/6f515835c71db040c5952499275a26c3280a20be) Thanks [@ArtBlue](https://github.com/ArtBlue)! - feat(badge): added new border

- [#2553](https://github.com/eBay/skin/pull/2553) [`c59f7e6`](https://github.com/eBay/skin/commit/c59f7e65cc615c9101d0b0164cfef3d5f94ec096) Thanks [@agliga](https://github.com/agliga)! - fix(list): swapped to use marker

- [#2575](https://github.com/eBay/skin/pull/2575) [`89cdc3a`](https://github.com/eBay/skin/commit/89cdc3a397b69be2471ef6676d5c2db3772b1abf) Thanks [@ArtBlue](https://github.com/ArtBlue)! - feat(marketsans): upgraded font implementing market sans v2

- [#2566](https://github.com/eBay/skin/pull/2566) [`097513e`](https://github.com/eBay/skin/commit/097513e4db11b08fbea76d1407970b659951b249) Thanks [@ArtBlue](https://github.com/ArtBlue)! - feat(layout-grid): added new component

- [#2569](https://github.com/eBay/skin/pull/2569) [`2acf205`](https://github.com/eBay/skin/commit/2acf20576135a120f4b25015f9f98238edb8291d) Thanks [@agliga](https://github.com/agliga)! - feat(link): added legal link

- [#2559](https://github.com/eBay/skin/pull/2559) [`cf2b10e`](https://github.com/eBay/skin/commit/cf2b10e17dbd4349c7ef07509161e8c4ee7e226a) Thanks [@ArtBlue](https://github.com/ArtBlue)! - feat(tokens): updated attention stroke token

### Patch Changes

- [#2563](https://github.com/eBay/skin/pull/2563) [`1b316bd`](https://github.com/eBay/skin/commit/1b316bd425f70a2b046c453e0e7b5297992321c7) Thanks [@cordeliadillon](https://github.com/cordeliadillon)! - chore: update DS name mappings

## 19.0.0

### Major Changes

- [#2540](https://github.com/eBay/skin/pull/2540) [`a21d879`](https://github.com/eBay/skin/commit/a21d879e6fb080b495c2d92fcc8e4cd9fb98f09e) Thanks [@agliga](https://github.com/agliga)! - chore: added comment to deprecated components about their removal

- [#2536](https://github.com/eBay/skin/pull/2536) [`c479ee1`](https://github.com/eBay/skin/commit/c479ee1f8d99e12f65e1c8c3b0929c145e9108ad) Thanks [@agliga](https://github.com/agliga)! - chore: remove deprecations for next major version

- [#2526](https://github.com/eBay/skin/pull/2526) [`93788e6`](https://github.com/eBay/skin/commit/93788e61c8d4e5fe75776f79c07d32dbbede25c6) Thanks [@saiponnada](https://github.com/saiponnada)! - fix(table): remove aria-pressed from table headings

- [#2541](https://github.com/eBay/skin/pull/2541) [`529af17`](https://github.com/eBay/skin/commit/529af17d8b35d4f825b5e49ec57a1e6f43b89c14) Thanks [@agliga](https://github.com/agliga)! - feat(dropdowns): added floating-ui support
  All dropdowns should be using floating-ui by default. In order to have the old non-floating ui positioning, use `--set-position` modifier on all dropdowns (such as `.menu-button__menu--set-position`)

- [#2529](https://github.com/eBay/skin/pull/2529) [`5a5a45f`](https://github.com/eBay/skin/commit/5a5a45f19ebfacd91f937c5ce8ad7482b0dcdc6b) Thanks [@agliga](https://github.com/agliga)! - feat(floating-ui): added support in date-textbox

- [#2528](https://github.com/eBay/skin/pull/2528) [`4265bed`](https://github.com/eBay/skin/commit/4265bed0dd9b9f9204af663f7dc6c64319c61ae8) Thanks [@agliga](https://github.com/agliga)! - feat(icons): added new icons and removed serveral icons

- [#2537](https://github.com/eBay/skin/pull/2537) [`b6f7744`](https://github.com/eBay/skin/commit/b6f7744ce3212c02118ee256c97aa9f889610f56) Thanks [@LuLaValva](https://github.com/LuLaValva)! - feat(combobox): remove chevron from combobox

## 18.6.0

### Minor Changes

- [#2506](https://github.com/eBay/skin/pull/2506) [`b817c49`](https://github.com/eBay/skin/commit/b817c49dae4c65c07141388bac6ee24b840b1bf6) Thanks [@agliga](https://github.com/agliga)! - feat(floating-label): updated unselected color of label

- [#2509](https://github.com/eBay/skin/pull/2509) [`d7d80cc`](https://github.com/eBay/skin/commit/d7d80cc6524ed6b9b7536715d59ab9ac66ab52f7) Thanks [@agliga](https://github.com/agliga)! - fix(alert/confirm-dialog): changed alignment to left by default and right for footer

- [#2504](https://github.com/eBay/skin/pull/2504) [`e4d7216`](https://github.com/eBay/skin/commit/e4d7216b6fde561410c2292c7aa69dbc17eba3e3) Thanks [@ArtBlue](https://github.com/ArtBlue)! - feat(icons): added new icons

- [#2508](https://github.com/eBay/skin/pull/2508) [`364355c`](https://github.com/eBay/skin/commit/364355c2d4af38e294b131766ef052dc46f4feee) Thanks [@agliga](https://github.com/agliga)! - docs(link): added disabled fake-link

- [#2513](https://github.com/eBay/skin/pull/2513) [`2e43568`](https://github.com/eBay/skin/commit/2e435680f8b4484eb9f0a74af63e6e3c132a5fbb) Thanks [@saiponnada](https://github.com/saiponnada)! - fix(progress-stepper): update incomplete step color to meet contrast

## 18.5.0

### Minor Changes

- [#2496](https://github.com/eBay/skin/pull/2496) [`66e73f8`](https://github.com/eBay/skin/commit/66e73f84f397c288c8fec0ce37d9ca2149bf50c7) Thanks [@ArtBlue](https://github.com/ArtBlue)! - feat(filter-menu): added search header

- [#2480](https://github.com/eBay/skin/pull/2480) [`207c518`](https://github.com/eBay/skin/commit/207c518a6c5a7310b251d5c7cb2ce703381a1fa0) Thanks [@agliga](https://github.com/agliga)! - feat(eek): added large size and fixed regular arrow

- [#2481](https://github.com/eBay/skin/pull/2481) [`933fb74`](https://github.com/eBay/skin/commit/933fb7412619ba844a4157537ced1aa8e4b9120f) Thanks [@agliga](https://github.com/agliga)! - feat(list): added inremental list and radio fieldset in list

- [#2495](https://github.com/eBay/skin/pull/2495) [`cb7222a`](https://github.com/eBay/skin/commit/cb7222ae4e1609adf325b72865cf95f9976a3068) Thanks [@agliga](https://github.com/agliga)! - feat(ccd): new component

- [#2483](https://github.com/eBay/skin/pull/2483) [`fef21d3`](https://github.com/eBay/skin/commit/fef21d305816fe2b1851d4e6fe11b3c8a2ea3346) Thanks [@ArtBlue](https://github.com/ArtBlue)! - feat(table): added loading state

- [#2497](https://github.com/eBay/skin/pull/2497) [`dfda4a0`](https://github.com/eBay/skin/commit/dfda4a079f2a6e2c3b2857815d522ecc37e76fca) Thanks [@saiponnada](https://github.com/saiponnada)! - feat(accordion): new component

- [#2498](https://github.com/eBay/skin/pull/2498) [`2ff5317`](https://github.com/eBay/skin/commit/2ff53171734afaa42f97719d31d062e7ef2f6daa) Thanks [@ArtBlue](https://github.com/ArtBlue)! - fix(filter-menu): fixed cascade

## 18.4.0

### Minor Changes

- [#2475](https://github.com/eBay/skin/pull/2475) [`472b280`](https://github.com/eBay/skin/commit/472b280642b38d2c2718946464f9995f54d74738) Thanks [@agliga](https://github.com/agliga)! - chore: removed unused storybook files (and percy workflow)

- [#2475](https://github.com/eBay/skin/pull/2475) [`6482514`](https://github.com/eBay/skin/commit/6482514ce5d96d1da5c57545a0a77643e452d612) Thanks [@agliga](https://github.com/agliga)! - feat(table): added frozen header, frozen column, permanent scrollbars

- [#2473](https://github.com/eBay/skin/pull/2473) [`94f4201`](https://github.com/eBay/skin/commit/94f4201440c9b7c82e436c70d9b008cbc870b550) Thanks [@ArtBlue](https://github.com/ArtBlue)! - chore(table): added thead line for scrolling, reverted table contraint

- [#2475](https://github.com/eBay/skin/pull/2475) [`201018f`](https://github.com/eBay/skin/commit/201018fa0a53bba471886745bc3800d9c729dae1) Thanks [@agliga](https://github.com/agliga)! - feat(icons): added and modified icons

- [#2475](https://github.com/eBay/skin/pull/2475) [`4d5fcdd`](https://github.com/eBay/skin/commit/4d5fcdd4020d468af7690d26d412cbb4df64b263) Thanks [@agliga](https://github.com/agliga)! - feat(list): new component

### Patch Changes

- [#2475](https://github.com/eBay/skin/pull/2475) [`0529ac5`](https://github.com/eBay/skin/commit/0529ac5f4984aa4e018db04863578b0685805640) Thanks [@agliga](https://github.com/agliga)! - feat(eek): updated size

- [#2474](https://github.com/eBay/skin/pull/2474) [`67a224b`](https://github.com/eBay/skin/commit/67a224bfe1f66550bf5496e5570f53da27ddaccb) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Add description to file preview card

## 18.3.2

### Patch Changes

- [`477a4a0`](https://github.com/eBay/skin/commit/477a4a060ad322e56183caf4eb2dc5e72452e893) Thanks [@agliga](https://github.com/agliga)! - fix: reverted eek linting issue and fixed gh paths

## 18.3.1

### Patch Changes

- [`9bb257a`](https://github.com/eBay/skin/commit/9bb257a0137e4b1424af0d580bee4aac885bb2a3) Thanks [@agliga](https://github.com/agliga)! - fix: gh mixins path

## 18.3.0

### Minor Changes

- [#2441](https://github.com/eBay/skin/pull/2441) [`ed9a37a`](https://github.com/eBay/skin/commit/ed9a37a4d9bf4e2f050a8b222045d48aceed248a) Thanks [@saiponnada](https://github.com/saiponnada)! - feat(lightbox): add divider over footer

- [#2435](https://github.com/eBay/skin/pull/2435) [`102ea39`](https://github.com/eBay/skin/commit/102ea39d6708f42a36ebaa03f667688672cb6e64) Thanks [@kentokage](https://github.com/kentokage)! - feat(file-upload): new module

- [#2446](https://github.com/eBay/skin/pull/2446) [`2ecde2f`](https://github.com/eBay/skin/commit/2ecde2f9adb5fb046404ee224a52ed044f2241a5) Thanks [@ArtBlue](https://github.com/ArtBlue)! - feat(icons): modified and added icons

- [#2440](https://github.com/eBay/skin/pull/2440) [`9ca9bd3`](https://github.com/eBay/skin/commit/9ca9bd3c8b969797189bb4b0fcc04ece37e632da) Thanks [@saiponnada](https://github.com/saiponnada)! - feat(tourtip): improve contrast of tip container

- [#2442](https://github.com/eBay/skin/pull/2442) [`d330c82`](https://github.com/eBay/skin/commit/d330c82b06107040212c6920f4b297f9c3fb0005) Thanks [@saiponnada](https://github.com/saiponnada)! - docs(tokens): add primitive token disclaimer

- [#2449](https://github.com/eBay/skin/pull/2449) [`b2dfcf1`](https://github.com/eBay/skin/commit/b2dfcf1c360dd11b652c02a4e44dce28453f6798) Thanks [@saiponnada](https://github.com/saiponnada)! - fix(button): update focus outline and offset

- [#2448](https://github.com/eBay/skin/pull/2448) [`88c1091`](https://github.com/eBay/skin/commit/88c1091c4c4f58ba8e950ff94bb5182c3cd26134) Thanks [@ArtBlue](https://github.com/ArtBlue)! - fix(icon-button): refactored and fixed focus

- [#2444](https://github.com/eBay/skin/pull/2444) [`5e59592`](https://github.com/eBay/skin/commit/5e59592ab993b33db82074ff375f2172c852e87d) Thanks [@ArtBlue](https://github.com/ArtBlue)! - feat(table): added sorting, cell types, actions, and inputs

## 18.2.4

### Patch Changes

- [`cb02ebc`](https://github.com/eBay/skin/commit/cb02ebc2ddcce3620579d4cca094d979dd59edd7) Thanks [@agliga](https://github.com/agliga)! - fix: added gh to ignore list

## 18.2.3

### Patch Changes

- [#2452](https://github.com/eBay/skin/pull/2452) [`648554e`](https://github.com/eBay/skin/commit/648554ea476f5032b1a7a0ca274a773e98ac9e83) Thanks [@agliga](https://github.com/agliga)! - fix: gh-browser updated paths to point to dist

- [`31ff6e6`](https://github.com/eBay/skin/commit/31ff6e6a90e08d529ff9c3218ade8c3a4cfd5618) Thanks [@agliga](https://github.com/agliga)! - fix: added autoprefixer ignore to carousel

## 18.2.2

### Patch Changes

- [`99e82f5`](https://github.com/eBay/skin/commit/99e82f525aabe2d7827235ec3ce411b7157450a8) Thanks [@agliga](https://github.com/agliga)! - chore: added tokens folder to published code

## 18.2.1

### Patch Changes

- [#2436](https://github.com/eBay/skin/pull/2436) [`8c7b0ea`](https://github.com/eBay/skin/commit/8c7b0ea2e685be4d5e9b6324f365a893dcc8c275) Thanks [@agliga](https://github.com/agliga)! - chore: updated which files should be published

## 18.2.0

### Minor Changes

- [#2413](https://github.com/eBay/skin/pull/2413) [`da48437`](https://github.com/eBay/skin/commit/da48437ebc038efa07f210804c7e0804cea1aacd) Thanks [@saiponnada](https://github.com/saiponnada)! - fix(fake-button): updated disabled styles

- [#2415](https://github.com/eBay/skin/pull/2415) [`9d24641`](https://github.com/eBay/skin/commit/9d24641918147eea5408c91a67d217db02988441) Thanks [@saiponnada](https://github.com/saiponnada)! - feat(education-notice): updated education background color

- [#2423](https://github.com/eBay/skin/pull/2423) [`632ccc2`](https://github.com/eBay/skin/commit/632ccc24654df15da66d75f666978617a144509f) Thanks [@ArtBlue](https://github.com/ArtBlue)! - feat(table): new module

- [#2417](https://github.com/eBay/skin/pull/2417) [`ef0418a`](https://github.com/eBay/skin/commit/ef0418a90f63612b3de763b5ead94a5aa01d022e) Thanks [@agliga](https://github.com/agliga)! - feat: chnaged to use marko run instead of jekyll

- [#2414](https://github.com/eBay/skin/pull/2414) [`ab472df`](https://github.com/eBay/skin/commit/ab472df6ae5c1f4ed32a146eaba7074a32a29e5d) Thanks [@saiponnada](https://github.com/saiponnada)! - fix(docs): improved contrast on highlighted text

### Patch Changes

- [#2426](https://github.com/eBay/skin/pull/2426) [`108f628`](https://github.com/eBay/skin/commit/108f628e649057421f25b2affc03f672026ad078) Thanks [@agliga](https://github.com/agliga)! - menu-button: added direct selector to icons

## 18.1.0

### Minor Changes

- [#2403](https://github.com/eBay/skin/pull/2403) [`a7757e5`](https://github.com/eBay/skin/commit/a7757e58f8f2fcca00f5925515779a492e30798d) Thanks [@agliga](https://github.com/agliga)! - details: updated design

- [#2402](https://github.com/eBay/skin/pull/2402) [`ba747cb`](https://github.com/eBay/skin/commit/ba747cbfa0585cd79c3f2df6251098aa517f2670) Thanks [@agliga](https://github.com/agliga)! - progress-spinner: fixed wobble

- [#2407](https://github.com/eBay/skin/pull/2407) [`2cbfe64`](https://github.com/eBay/skin/commit/2cbfe645fa0f0f06cc25ae042debb194e4ad6b71) Thanks [@agliga](https://github.com/agliga)! - feat(utility): added image disabled utility class

- [#2407](https://github.com/eBay/skin/pull/2407) [`ac4e7c0`](https://github.com/eBay/skin/commit/ac4e7c0e16c05e916069b73548bb8102d6e5241d) Thanks [@agliga](https://github.com/agliga)! - feat(icons): added and updated icons

- [#2409](https://github.com/eBay/skin/pull/2409) [`88d4f0e`](https://github.com/eBay/skin/commit/88d4f0e4a5f2cda3aeb9f5c55b0e11c5fdacae27) Thanks [@agliga](https://github.com/agliga)! - carousel: preserve /_!Y _/ comments

- [#2367](https://github.com/eBay/skin/pull/2367) [`923a83f`](https://github.com/eBay/skin/commit/923a83f4e796a2692bbaa7ca0c7ae7c1324e9f00) Thanks [@agliga](https://github.com/agliga)! - docs: updated urls to be opensource.ebay.com

- [#2406](https://github.com/eBay/skin/pull/2406) [`f151214`](https://github.com/eBay/skin/commit/f1512145fa8f67fa3d263df940858f85b9c6843c) Thanks [@ArtBlue](https://github.com/ArtBlue)! - fix(toggle-button-group): fixed buttons per row and added min layout exceptions

### Patch Changes

- [#2405](https://github.com/eBay/skin/pull/2405) [`d67e8ea`](https://github.com/eBay/skin/commit/d67e8ea906d40736e727c8d3547416f1ea5980ba) Thanks [@HenriqueLimas](https://github.com/HenriqueLimas)! - Use 100% width on input for fluid variant

- [#2373](https://github.com/eBay/skin/pull/2373) [`c09c885`](https://github.com/eBay/skin/commit/c09c885b914a23f1feb0aa12c2e78f3c9ef91255) Thanks [@cordeliadillon](https://github.com/cordeliadillon)! - docs: update Design System name mapping for modules

## 18.0.8

### Patch Changes

- [#2399](https://github.com/eBay/skin/pull/2399) [`328c541`](https://github.com/eBay/skin/commit/328c5410810c8bdf3fc92b0f4b490aa8645cf8b2) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Remove source maps

## 18.0.7

### Patch Changes

- [#2392](https://github.com/eBay/skin/pull/2392) [`781ee73`](https://github.com/eBay/skin/commit/781ee7333d23f8f92695626d57e0e9b26adef035) Thanks [@ArtBlue](https://github.com/ArtBlue)! - fix(textbox): fixed large textbox height

- [#2390](https://github.com/eBay/skin/pull/2390) [`8cc2200`](https://github.com/eBay/skin/commit/8cc2200a90325307420500e7c1ecbc38bc878b2c) Thanks [@HenriqueLimas](https://github.com/HenriqueLimas)! - color-tokens: fix foreground and background attention colors

- [#2393](https://github.com/eBay/skin/pull/2393) [`6bb280c`](https://github.com/eBay/skin/commit/6bb280c3a4a711610af1f574a1318ff8e003c367) Thanks [@ArtBlue](https://github.com/ArtBlue)! - fix(textbox): fixed textbox overlap

## 18.0.6

### Patch Changes

- [`e5db3d4`](https://github.com/eBay/skin/commit/e5db3d438354a8c8467e461b985e8fffc3492bc7) Thanks [@agliga](https://github.com/agliga)! - fix: added icon-mixins.less file for backwards compatibility

- [`b13c9ed`](https://github.com/eBay/skin/commit/b13c9ed514fbc6d8ad4da06621a0f66cd4bc4201) Thanks [@agliga](https://github.com/agliga)! - button: swapped visited link with correct color

## 18.0.5

### Patch Changes

- [`f96054b`](https://github.com/eBay/skin/commit/f96054bd337d9bee1bcc7df94077656f7435aa31) Thanks [@agliga](https://github.com/agliga)! - icon: added 48-colored icon class

- [`7266c80`](https://github.com/eBay/skin/commit/7266c8039d3bdc0ec00023fc9a033df0c7c02a1a) Thanks [@agliga](https://github.com/agliga)! - chore: removed postcss config from published version

## 18.0.4

### Patch Changes

- [#2377](https://github.com/eBay/skin/pull/2377) [`83fc78d`](https://github.com/eBay/skin/commit/83fc78d1a3d6bc3cdedec80ae320f9bc74d60959) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Use older CSS syntax

## 18.0.3

### Patch Changes

- [#2375](https://github.com/eBay/skin/pull/2375) [`e0d7948`](https://github.com/eBay/skin/commit/e0d79483ace2c1b62782d32fc8272b0a6eb07f68) Thanks [@agliga](https://github.com/agliga)! - star-rating: fixed variable to be parsed

## 18.0.2

### Patch Changes

- [`322ca60`](https://github.com/eBay/skin/commit/322ca60aab969c8c99796037e5f7a07d0324abfb) Thanks [@agliga](https://github.com/agliga)! - generate-imports: added to skip bundles in top level imports

- [#2365](https://github.com/eBay/skin/pull/2365) [`9ed42b1`](https://github.com/eBay/skin/commit/9ed42b1656cc91c59d35864f62e27c318ce0fbdc) Thanks [@agliga](https://github.com/agliga)! - menu/menu-button: changed icon--tick-16 to be icon--16

- [`3eb9f02`](https://github.com/eBay/skin/commit/3eb9f027bb7226740f4e3fef17b3b372496b0fac) Thanks [@agliga](https://github.com/agliga)! - icons: added fit icon support

## 18.0.1

### Patch Changes

- [#2361](https://github.com/eBay/skin/pull/2361) [`735ea66`](https://github.com/eBay/skin/commit/735ea66b32299793174f3eaa5fc04a1b444e3573) Thanks [@agliga](https://github.com/agliga)! - fix: added variables.less back into repo

## 18.0.0

### Major Changes

- [#2346](https://github.com/eBay/skin/pull/2346) [`9eacce0`](https://github.com/eBay/skin/commit/9eacce09ed99edd4306e97632a1e5fbdc0ab68cd) Thanks [@agliga](https://github.com/agliga)! - refactor: removed all duplicate icon classes and added icon--{nn} classes

- [#2352](https://github.com/eBay/skin/pull/2352) [`c2e6002`](https://github.com/eBay/skin/commit/c2e6002eb919c6f0325ca11de925112a6a72b5c3) Thanks [@agliga](https://github.com/agliga)! - chore: removed deprecations

- [#2356](https://github.com/eBay/skin/pull/2356) [`7554ab4`](https://github.com/eBay/skin/commit/7554ab4c6f183d6d8ca898a09b39c5b6396f0d7a) Thanks [@ArtBlue](https://github.com/ArtBlue)! - tokens: added tokens, colors, deprecations

- [#2345](https://github.com/eBay/skin/pull/2345) [`55291f6`](https://github.com/eBay/skin/commit/55291f659ace187d4b96707db84c4a54709182a2) Thanks [@ArtBlue](https://github.com/ArtBlue)! - toggle-button-group: reworked responsiveness and added equal button heights

### Minor Changes

- [#2344](https://github.com/eBay/skin/pull/2344) [`d9792aa`](https://github.com/eBay/skin/commit/d9792aabe896c594daced5d6cb44ba8e124a7a1a) Thanks [@mikehobi](https://github.com/mikehobi)! - feat(donut-chart): new module

### Patch Changes

- [#2348](https://github.com/eBay/skin/pull/2348) [`86621e8`](https://github.com/eBay/skin/commit/86621e86edc1bb419a143f964d3a63105ced0aeb) Thanks [@agliga](https://github.com/agliga)! - feat: added sass support and removed less support

## 18.0.0-next.0

### Major Changes

- [#2346](https://github.com/eBay/skin/pull/2346) [`9eacce0`](https://github.com/eBay/skin/commit/9eacce09ed99edd4306e97632a1e5fbdc0ab68cd) Thanks [@agliga](https://github.com/agliga)! - refactor: removed all duplicate icon classes and added icon--{nn} classes

- [#2352](https://github.com/eBay/skin/pull/2352) [`c2e6002`](https://github.com/eBay/skin/commit/c2e6002eb919c6f0325ca11de925112a6a72b5c3) Thanks [@agliga](https://github.com/agliga)! - chore: removed deprecations

- [#2356](https://github.com/eBay/skin/pull/2356) [`7554ab4`](https://github.com/eBay/skin/commit/7554ab4c6f183d6d8ca898a09b39c5b6396f0d7a) Thanks [@ArtBlue](https://github.com/ArtBlue)! - tokens: added tokens, colors, deprecations

- [#2345](https://github.com/eBay/skin/pull/2345) [`55291f6`](https://github.com/eBay/skin/commit/55291f659ace187d4b96707db84c4a54709182a2) Thanks [@ArtBlue](https://github.com/ArtBlue)! - toggle-button-group: reworked responsiveness and added equal button heights

### Minor Changes

- [#2344](https://github.com/eBay/skin/pull/2344) [`d9792aa`](https://github.com/eBay/skin/commit/d9792aabe896c594daced5d6cb44ba8e124a7a1a) Thanks [@mikehobi](https://github.com/mikehobi)! - feat(donut-chart): new module

### Patch Changes

- [#2348](https://github.com/eBay/skin/pull/2348) [`86621e8`](https://github.com/eBay/skin/commit/86621e86edc1bb419a143f964d3a63105ced0aeb) Thanks [@agliga](https://github.com/agliga)! - feat: added sass support and removed less support

## 17.5.0

### Minor Changes

- [#2328](https://github.com/eBay/skin/pull/2328) [`4604f45`](https://github.com/eBay/skin/commit/4604f4516923175a5088f3876d25d2a11ccddba4) Thanks [@ArtBlue](https://github.com/ArtBlue)! - feat(icons): added and modified icons

- [#2336](https://github.com/eBay/skin/pull/2336) [`800681a`](https://github.com/eBay/skin/commit/800681a98b84a78a5780ba19b8c388ac153e5359) Thanks [@agliga](https://github.com/agliga)! - fake-menu: added badge suport

- [#2329](https://github.com/eBay/skin/pull/2329) [`2ee09df`](https://github.com/eBay/skin/commit/2ee09df5676577d8f6f4530a60f07bd9e6bff49a) Thanks [@ArtBlue](https://github.com/ArtBlue)! - docs(date-textbox): added docs and story for disabled state

- [#2332](https://github.com/eBay/skin/pull/2332) [`186bd9a`](https://github.com/eBay/skin/commit/186bd9a563c99b3fde0d2aecf4e45bc1f7b79b0a) Thanks [@ArtBlue](https://github.com/ArtBlue)! - feat(toggle-button): added hover and pressed states

## 17.5.0-next.0

### Minor Changes

- [#2328](https://github.com/eBay/skin/pull/2328) [`4604f45`](https://github.com/eBay/skin/commit/4604f4516923175a5088f3876d25d2a11ccddba4) Thanks [@ArtBlue](https://github.com/ArtBlue)! - feat(icons): added and modified icons

- [#2336](https://github.com/eBay/skin/pull/2336) [`800681a`](https://github.com/eBay/skin/commit/800681a98b84a78a5780ba19b8c388ac153e5359) Thanks [@agliga](https://github.com/agliga)! - fake-menu: added badge suport

- [#2329](https://github.com/eBay/skin/pull/2329) [`2ee09df`](https://github.com/eBay/skin/commit/2ee09df5676577d8f6f4530a60f07bd9e6bff49a) Thanks [@ArtBlue](https://github.com/ArtBlue)! - docs(date-textbox): added docs and story for disabled state

- [#2332](https://github.com/eBay/skin/pull/2332) [`186bd9a`](https://github.com/eBay/skin/commit/186bd9a563c99b3fde0d2aecf4e45bc1f7b79b0a) Thanks [@ArtBlue](https://github.com/ArtBlue)! - feat(toggle-button): added hover and pressed states

## 17.4.1

### Patch Changes

- [#2322](https://github.com/eBay/skin/pull/2322) [`292c8eb`](https://github.com/eBay/skin/commit/292c8eb17db1d747c972ae9587c450ed2d6a122c) Thanks [@ArtBlue](https://github.com/ArtBlue)! - fix(icon-button): fixed primary visited link icon color

## 17.4.0

### Minor Changes

- [#2302](https://github.com/eBay/skin/pull/2302) [`a8f2c6b`](https://github.com/eBay/skin/commit/a8f2c6b3ec4db4144b7b8b19d5d585417c57830e) Thanks [@ArtBlue](https://github.com/ArtBlue)! - docs(storybook): added text spacing stories

- [#2259](https://github.com/eBay/skin/pull/2259) [`fff8608`](https://github.com/eBay/skin/commit/fff8608ccae86341b9b4115c581626d5f9cc9add) Thanks [@saiponnada](https://github.com/saiponnada)! - feat(phone-input): new module

- [#2303](https://github.com/eBay/skin/pull/2303) [`b80a893`](https://github.com/eBay/skin/commit/b80a89395f314c3728301fffe2d81cd21abb96c0) Thanks [@ArtBlue](https://github.com/ArtBlue)! - feat(icons): icon additions and modifications

- [#2306](https://github.com/eBay/skin/pull/2306) [`8cdc782`](https://github.com/eBay/skin/commit/8cdc782e52383703d3c464ab93d0ed01078483f3) Thanks [@agliga](https://github.com/agliga)! - skeleton: added on-secondary color and changed elevated to use on-secondary

- [#2312](https://github.com/eBay/skin/pull/2312) [`913f85b`](https://github.com/eBay/skin/commit/913f85be42795a7f1895c8f0a822e1148d0f87da) Thanks [@cordeliadillon](https://github.com/cordeliadillon)! - docs(progress-bar-expressive): fix noisy status updates on docs page

- [#2309](https://github.com/eBay/skin/pull/2309) [`f778dbd`](https://github.com/eBay/skin/commit/f778dbd890892a9ed2d4a36416d92ccacaebd34e) Thanks [@ArtBlue](https://github.com/ArtBlue)! - feat(icon-button): added priorities

- [#2316](https://github.com/eBay/skin/pull/2316) [`a8c1352`](https://github.com/eBay/skin/commit/a8c1352920bc10213b020c4d7fd0969bb96dd019) Thanks [@agliga](https://github.com/agliga)! - flags: updated to use sprites

## 17.4.0-next.1

### Minor Changes

- [#2316](https://github.com/eBay/skin/pull/2316) [`a8c1352`](https://github.com/eBay/skin/commit/a8c1352920bc10213b020c4d7fd0969bb96dd019) Thanks [@agliga](https://github.com/agliga)! - flags: updated to use sprites

## 17.4.0-next.0

### Minor Changes

- [#2302](https://github.com/eBay/skin/pull/2302) [`a8f2c6b`](https://github.com/eBay/skin/commit/a8f2c6b3ec4db4144b7b8b19d5d585417c57830e) Thanks [@ArtBlue](https://github.com/ArtBlue)! - docs(storybook): added text spacing stories

- [#2259](https://github.com/eBay/skin/pull/2259) [`fff8608`](https://github.com/eBay/skin/commit/fff8608ccae86341b9b4115c581626d5f9cc9add) Thanks [@saiponnada](https://github.com/saiponnada)! - feat(phone-input): new module

- [#2303](https://github.com/eBay/skin/pull/2303) [`b80a893`](https://github.com/eBay/skin/commit/b80a89395f314c3728301fffe2d81cd21abb96c0) Thanks [@ArtBlue](https://github.com/ArtBlue)! - feat(icons): icon additions and modifications

- [#2306](https://github.com/eBay/skin/pull/2306) [`8cdc782`](https://github.com/eBay/skin/commit/8cdc782e52383703d3c464ab93d0ed01078483f3) Thanks [@agliga](https://github.com/agliga)! - skeleton: added on-secondary color and changed elevated to use on-secondary

- [#2312](https://github.com/eBay/skin/pull/2312) [`913f85b`](https://github.com/eBay/skin/commit/913f85be42795a7f1895c8f0a822e1148d0f87da) Thanks [@cordeliadillon](https://github.com/cordeliadillon)! - docs(progress-bar-expressive): fix noisy status updates on docs page

- [#2309](https://github.com/eBay/skin/pull/2309) [`f778dbd`](https://github.com/eBay/skin/commit/f778dbd890892a9ed2d4a36416d92ccacaebd34e) Thanks [@ArtBlue](https://github.com/ArtBlue)! - feat(icon-button): added priorities

## 17.3.0

### Minor Changes

- [#2294](https://github.com/eBay/skin/pull/2294) [`16d681b`](https://github.com/eBay/skin/commit/16d681ba9e9480234179384cfced03dfc14d8203) Thanks [@ArtBlue](https://github.com/ArtBlue)! - feat(education-notice): use icon button

- [#2282](https://github.com/eBay/skin/pull/2282) [`5df6ffc`](https://github.com/eBay/skin/commit/5df6ffc4bf6da4d257a9c66e72b3c6b2df97296f) Thanks [@ArtBlue](https://github.com/ArtBlue)! - fix(toggle-button-group): fixed Safari image size bug and added stories

- [#2260](https://github.com/eBay/skin/pull/2260) [`7607f6d`](https://github.com/eBay/skin/commit/7607f6dd1e55d1911fefbdd4e285e241ec174f7d) Thanks [@cordeliadillon](https://github.com/cordeliadillon)! - feat(expressive-loader): new module

- [#2286](https://github.com/eBay/skin/pull/2286) [`9861294`](https://github.com/eBay/skin/commit/9861294b67b31c66e2368b75ba87a042abcc7612) Thanks [@ArtBlue](https://github.com/ArtBlue)! - feat(education-notice): new module

- [#2281](https://github.com/eBay/skin/pull/2281) [`f39fdfa`](https://github.com/eBay/skin/commit/f39fdfa8288b53fae2af7572ab1609b4d3718849) Thanks [@saiponnada](https://github.com/saiponnada)! - fix(button): prevent style changes on hover for disabled form buttons

- [#2288](https://github.com/eBay/skin/pull/2288) [`71cb87d`](https://github.com/eBay/skin/commit/71cb87d9cd1a9784b038f2419e61f3057e43f229) Thanks [@ArtBlue](https://github.com/ArtBlue)! - fix(docs): fixed responsive menu

- [#2290](https://github.com/eBay/skin/pull/2290) [`96fd3fc`](https://github.com/eBay/skin/commit/96fd3fcabbd19107250a9542cef638faa60ee346) Thanks [@cordeliadillon](https://github.com/cordeliadillon)! - refactor(progress-bar-expressive): rename expressive-loader to progress-bar-expressive

- [#2283](https://github.com/eBay/skin/pull/2283) [`71fc1e2`](https://github.com/eBay/skin/commit/71fc1e2f79be73d276de7661976ffb649af0b3de) Thanks [@ArtBlue](https://github.com/ArtBlue)! - feat(carousel): updated chevron sizes

### Patch Changes

- [#2299](https://github.com/eBay/skin/pull/2299) [`27535a9`](https://github.com/eBay/skin/commit/27535a99842079f4e429a3463b5cee73f81fd4d2) Thanks [@agliga](https://github.com/agliga)! - listbox-button: added border radius to container

## 17.3.0-next.0

### Minor Changes

- [#2294](https://github.com/eBay/skin/pull/2294) [`16d681b`](https://github.com/eBay/skin/commit/16d681ba9e9480234179384cfced03dfc14d8203) Thanks [@ArtBlue](https://github.com/ArtBlue)! - feat(education-notice): use icon button

- [#2282](https://github.com/eBay/skin/pull/2282) [`5df6ffc`](https://github.com/eBay/skin/commit/5df6ffc4bf6da4d257a9c66e72b3c6b2df97296f) Thanks [@ArtBlue](https://github.com/ArtBlue)! - fix(toggle-button-group): fixed Safari image size bug and added stories

- [#2260](https://github.com/eBay/skin/pull/2260) [`7607f6d`](https://github.com/eBay/skin/commit/7607f6dd1e55d1911fefbdd4e285e241ec174f7d) Thanks [@cordeliadillon](https://github.com/cordeliadillon)! - feat(expressive-loader): new module

- [#2286](https://github.com/eBay/skin/pull/2286) [`9861294`](https://github.com/eBay/skin/commit/9861294b67b31c66e2368b75ba87a042abcc7612) Thanks [@ArtBlue](https://github.com/ArtBlue)! - feat(education-notice): new module

- [#2281](https://github.com/eBay/skin/pull/2281) [`f39fdfa`](https://github.com/eBay/skin/commit/f39fdfa8288b53fae2af7572ab1609b4d3718849) Thanks [@saiponnada](https://github.com/saiponnada)! - fix(button): prevent style changes on hover for disabled form buttons

- [#2288](https://github.com/eBay/skin/pull/2288) [`71cb87d`](https://github.com/eBay/skin/commit/71cb87d9cd1a9784b038f2419e61f3057e43f229) Thanks [@ArtBlue](https://github.com/ArtBlue)! - fix(docs): fixed responsive menu

- [#2290](https://github.com/eBay/skin/pull/2290) [`96fd3fc`](https://github.com/eBay/skin/commit/96fd3fcabbd19107250a9542cef638faa60ee346) Thanks [@cordeliadillon](https://github.com/cordeliadillon)! - refactor(progress-bar-expressive): rename expressive-loader to progress-bar-expressive

- [#2283](https://github.com/eBay/skin/pull/2283) [`71fc1e2`](https://github.com/eBay/skin/commit/71fc1e2f79be73d276de7661976ffb649af0b3de) Thanks [@ArtBlue](https://github.com/ArtBlue)! - feat(carousel): updated chevron sizes

## 17.2.0

### Minor Changes

- [#2278](https://github.com/eBay/skin/pull/2278) [`c4af2b9`](https://github.com/eBay/skin/commit/c4af2b9552dd35986bbf9c24036b0b6c67581aa5) Thanks [@agliga](https://github.com/agliga)! - icon updates

- [#2278](https://github.com/eBay/skin/pull/2278) [`c4af2b9`](https://github.com/eBay/skin/commit/c4af2b9552dd35986bbf9c24036b0b6c67581aa5) Thanks [@agliga](https://github.com/agliga)! - ebay-signal has incorrect type size and internal padding

- [#2278](https://github.com/eBay/skin/pull/2278) [`c4af2b9`](https://github.com/eBay/skin/commit/c4af2b9552dd35986bbf9c24036b0b6c67581aa5) Thanks [@agliga](https://github.com/agliga)! - Venmo icon: Missing borders

- [#2278](https://github.com/eBay/skin/pull/2278) [`c4af2b9`](https://github.com/eBay/skin/commit/c4af2b9552dd35986bbf9c24036b0b6c67581aa5) Thanks [@agliga](https://github.com/agliga)! - flyout: update styling

- [#2278](https://github.com/eBay/skin/pull/2278) [`c4af2b9`](https://github.com/eBay/skin/commit/c4af2b9552dd35986bbf9c24036b0b6c67581aa5) Thanks [@agliga](https://github.com/agliga)! - component status alignment

- [#2278](https://github.com/eBay/skin/pull/2278) [`c4af2b9`](https://github.com/eBay/skin/commit/c4af2b9552dd35986bbf9c24036b0b6c67581aa5) Thanks [@agliga](https://github.com/agliga)! - Docs: remove focusable attribute from examples and stories

- [#2278](https://github.com/eBay/skin/pull/2278) [`c4af2b9`](https://github.com/eBay/skin/commit/c4af2b9552dd35986bbf9c24036b0b6c67581aa5) Thanks [@agliga](https://github.com/agliga)! - ebay-button: reduce width of stroke for priority=tertiary

- [#2278](https://github.com/eBay/skin/pull/2278) [`c4af2b9`](https://github.com/eBay/skin/commit/c4af2b9552dd35986bbf9c24036b0b6c67581aa5) Thanks [@agliga](https://github.com/agliga)! - feat: automatically publish skin

## 17.2.0-next.0

### Minor Changes

- [`c4af2b9`](https://github.com/eBay/skin/commit/c4af2b9552dd35986bbf9c24036b0b6c67581aa5) Thanks [@agliga](https://github.com/agliga)! - icon updates

- [`c4af2b9`](https://github.com/eBay/skin/commit/c4af2b9552dd35986bbf9c24036b0b6c67581aa5) Thanks [@agliga](https://github.com/agliga)! - ebay-signal has incorrect type size and internal padding

- [`c4af2b9`](https://github.com/eBay/skin/commit/c4af2b9552dd35986bbf9c24036b0b6c67581aa5) Thanks [@agliga](https://github.com/agliga)! - Venmo icon: Missing borders

- [`c4af2b9`](https://github.com/eBay/skin/commit/c4af2b9552dd35986bbf9c24036b0b6c67581aa5) Thanks [@agliga](https://github.com/agliga)! - flyout: update styling

- [`c4af2b9`](https://github.com/eBay/skin/commit/c4af2b9552dd35986bbf9c24036b0b6c67581aa5) Thanks [@agliga](https://github.com/agliga)! - component status alignment

- [`c4af2b9`](https://github.com/eBay/skin/commit/c4af2b9552dd35986bbf9c24036b0b6c67581aa5) Thanks [@agliga](https://github.com/agliga)! - Docs: remove focusable attribute from examples and stories

- [`c4af2b9`](https://github.com/eBay/skin/commit/c4af2b9552dd35986bbf9c24036b0b6c67581aa5) Thanks [@agliga](https://github.com/agliga)! - ebay-button: reduce width of stroke for priority=tertiary

- [`c4af2b9`](https://github.com/eBay/skin/commit/c4af2b9552dd35986bbf9c24036b0b6c67581aa5) Thanks [@agliga](https://github.com/agliga)! - feat: automatically publish skin

## 17.1.1

### Patch Changes

- [#2264](https://github.com/eBay/skin/pull/2264) [`32e58f3`](https://github.com/eBay/skin/commit/32e58f3a4c5ae1b4508cf2f283f85969b122c26f) Thanks [@agliga](https://github.com/agliga)! - Added autopublish to github

- [#2264](https://github.com/eBay/skin/pull/2264) [`32e58f3`](https://github.com/eBay/skin/commit/32e58f3a4c5ae1b4508cf2f283f85969b122c26f) Thanks [@agliga](https://github.com/agliga)! - updated changeset

A record of all notable changes are documented under [releases](https://github.com/eBay/skin/releases).

Skin releases follow [Semantic Versioning](http://semver.org):

1. MAJOR version when we make incompatible API changes,
1. MINOR version when we add functionality in a backwards-compatible manner
1. PATCH version when we make backwards-compatible bug fixes.

Please remember to always read the release notes in full before upgrading major versions!
