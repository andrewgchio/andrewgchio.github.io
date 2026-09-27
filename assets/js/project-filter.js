/**
 * Tag filtering for the projects grid.
 *
 * Reads tags from the data-tags attribute that my-projects/block.html writes
 * onto each .pf-item wrapper (pipe-separated, so tags may contain spaces).
 * Selecting several tags is a union: a project matching ANY selected tag shows.
 *
 * Progressive enhancement: the grid renders complete and unfiltered without
 * this script, and the chip bar stays hidden until it is wired up.
 */
(function () {
  'use strict';

  function init() {
    var bar = document.querySelector('[data-pf-filter]');
    if (!bar) return;

    var items = Array.prototype.slice.call(document.querySelectorAll('.pf-item'));
    if (!items.length) return;

    var allChip = bar.querySelector('[data-pf-all]');
    var tagChips = Array.prototype.slice.call(bar.querySelectorAll('[data-pf-tag]'));
    var countEl = bar.querySelector('[data-pf-count]');
    var emptyEl = document.querySelector('[data-pf-empty]');
    var groups = Array.prototype.slice.call(document.querySelectorAll('[data-pf-group]'));

    var total = items.length;
    var selected = [];

    var records = items.map(function (el) {
      return {
        el: el,
        tags: (el.getAttribute('data-tags') || '').split('|').filter(Boolean)
      };
    });

    function matches(rec) {
      if (!selected.length) return true;
      for (var i = 0; i < selected.length; i++) {
        if (rec.tags.indexOf(selected[i]) !== -1) return true;
      }
      return false;
    }

    function apply() {
      var shown = 0;
      records.forEach(function (rec) {
        var ok = matches(rec);
        rec.el.hidden = !ok;
        if (ok) shown++;
      });

      // Hide a funding group whose projects are all filtered out, and keep its
      // count badge in step with what's actually visible.
      groups.forEach(function (g) {
        var vis = g.querySelectorAll('.pf-item:not([hidden])').length;
        g.hidden = vis === 0;
        var badge = g.querySelector('[data-pf-group-count]');
        if (badge) badge.textContent = vis;
      });

      allChip.setAttribute('aria-pressed', selected.length ? 'false' : 'true');
      tagChips.forEach(function (c) {
        c.setAttribute('aria-pressed',
          selected.indexOf(c.getAttribute('data-pf-tag')) !== -1 ? 'true' : 'false');
      });

      if (countEl) {
        countEl.textContent = selected.length
          ? 'Showing ' + shown + ' of ' + total + ' projects'
          : total + ' projects';
      }
      if (emptyEl) emptyEl.hidden = shown !== 0;
    }

    allChip.addEventListener('click', function () {
      selected = [];
      apply();
    });

    tagChips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        var tag = chip.getAttribute('data-pf-tag');
        var i = selected.indexOf(tag);
        if (i === -1) { selected.push(tag); } else { selected.splice(i, 1); }
        apply();
      });
    });

    bar.hidden = false;
    apply();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
