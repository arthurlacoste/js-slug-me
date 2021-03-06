(function (global) {
	'use strict';

	const slugme = function (value) {
		const rExps = [
          {re: /[\xC0-\xC6]/g, ch: 'A'},
          {re: /[\xE0-\xE6]/g, ch: 'a'},
          {re: /[\xC8-\xCB]/g, ch: 'E'},
          {re: /[\xE8-\xEB]/g, ch: 'e'},
          {re: /[\xCC-\xCF]/g, ch: 'I'},
          {re: /[\xEC-\xEF]/g, ch: 'i'},
          {re: /[\xD2-\xD6]/g, ch: 'O'},
          {re: /[\xF2-\xF6]/g, ch: 'o'},
          {re: /[\xD9-\xDC]/g, ch: 'U'},
          {re: /[\xF9-\xFC]/g, ch: 'u'},
          {re: /[\xC7-\xE7]/g, ch: 'c'},
          {re: /[\xD1]/g, ch: 'N'},
          {re: /[\xF1]/g, ch: 'n'}];

          // Converti les caractères accentués en leurs équivalent alpha
		for (let i = 0, len = rExps.length; i < len; i++)		{
			value = value.replace(rExps[i].re, rExps[i].ch);
		}

          // 1) met en bas de casse
          // 2) remplace les espace par des tirets
          // 3) enleve tout les caratères non alphanumeriques
          // 4) enlève les doubles tirets
		return value.toLowerCase()
          .replace(/\s+/g, '-')
          .replace(/[^a-z0-9-]/g, '')
          .replace(/-{2,}/g, '-');
	};

    // CommonJS and Node.js module support.
	if (typeof exports === 'undefined') {
		global.slugme = slugme;
	} else {
    // Support Node.js specific `module.exports` (which can be a function)
		if (typeof module !== 'undefined' && module.exports) {
			exports = slugme;
			module.exports = slugme;
		}
    // But always support CommonJS module 1.1.1 spec (`exports` cannot be a function)
		exports.slugme = slugme;
	}
})(this);
