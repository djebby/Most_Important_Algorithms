// https://leetcode.com/problems/compare-version-numbers/

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  version1 = version1.split('.').map(revision => Number(revision));
  version2 = version2.split('.').map(revision => Number(revision));


  let revision1, revision2;
  for (let i = 0; i < Math.max(version1.length, version2.length); i += 1) {

    revision1 = (i < version1.length ? version1[i] : 0);
    revision2 = (i < version2.length ? version2[i] : 0);

    if (revision1 > revision2) return 1;
    else if (revision1 < revision2) return -1;

  }

  return 0;
};
