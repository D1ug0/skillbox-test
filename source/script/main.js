import "../scss/style.scss";
import "../scss/variables.scss";
import "./modules/filter/init-filter.js";
import "./modules/header/init-page-menu.js";

import { iosVhFix } from "./utils/ios-vh-fix.js";
import "./utils/prism.js";

window.addEventListener("DOMContentLoaded", () => {
  iosVhFix();
});
