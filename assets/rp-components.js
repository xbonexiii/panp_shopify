/* ============================================================
   MEDIA_GAS_01 — 記事テンプレート（article.column）専用スクリプト
   適用対象: templates/article.column.json のみ
   ============================================================ */

(function () {
  var fades = document.querySelectorAll('.rp-fade');
  if (!fades.length) return;

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('rp-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    fades.forEach(function (el) { observer.observe(el); });
  } else {
    /* フォールバック: IntersectionObserver 未対応環境では即表示 */
    fades.forEach(function (el) { el.classList.add('rp-visible'); });
  }
})();
