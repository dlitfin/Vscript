"use strict";function string_to_version(r){const t=r.match(/^([0-9]+)\.([0-9]+)(\.([^_]+))?/);if(null!==t)return{major:parseInt(t[1]),minor:parseInt(t[2]),patch:t.length>4?parseInt(t[4]):0,branch:"stable"};{const t=r.match(/^([0-9]+)\.([0-9]+)\.([0-9]+)_([^_]+)/);if(null===t)return;if(t.length<=5)return;return{major:parseInt(t[1]),minor:parseInt(t[2]),patch:parseInt(t[3]),branch:t[4]}}}function version_to_string(r){const t=`${r.major}.${r.minor}.${r.patch}`;if("stable"===r.branch)return t;let n=` (${r.branch})`;switch(r.branch){case"beta":n=" (β)";break;case"testing":n=" (α)"}return n+=void 0===r.commit?"":` (#${r.commit})`,`${t}_${r.branch}${n}`}function compare_software_versions(r,t){if(r.major>t.major)return 1;if(r.major<t.major)return-1;if(r.minor>t.minor)return 1;if(r.minor<t.minor)return-1;if(r.patch>t.patch)return 1;if(r.patch<t.patch)return-1;const n=r=>{switch(r){case"stable":return 2;case"testing":return 0}return 1},e=n(r.branch),o=n(t.branch);return e>o?1:e<o?-1:void 0===t.commit?void 0===r.commit?0:1:void 0===r.commit?-1:r.commit>t.commit?1:r.commit<t.commit?-1:0}Object.defineProperty(exports,"__esModule",{value:!0}),exports.string_to_version=string_to_version,exports.version_to_string=version_to_string,exports.compare_software_versions=compare_software_versions;