/**
 * Client-side filtering for the publications list.
 *
 * Reads facets from the data-* attributes that layouts/publications/list.html
 * writes onto each .pub-filter-item wrapper. Progressive enhancement: the list
 * renders complete and unfiltered without this script, and the filter bar stays
 * hidden until we successfully wire it up.
 */
(function () {
  'use strict';

  function init() {
    var form = document.querySelector('[data-pub-filter]');
    if (!form) return;

    var items = Array.prototype.slice.call(
      document.querySelectorAll('.pub-filter-item')
    );
    if (!items.length) return;

    var textInput = form.querySelector('[data-pub-filter-text]');
    var typeSelect = form.querySelector('[data-pub-filter-type]');
    var projectSelect = form.querySelector('[data-pub-filter-project]');
    var yearSelect = form.querySelector('[data-pub-filter-year]');
    var countEl = form.querySelector('[data-pub-filter-count]');
    var clearBtn = form.querySelector('[data-pub-filter-clear]');
    var emptyEl = document.querySelector('[data-pub-filter-empty]');

    var total = items.length;

    // Cache each item's facets once rather than reading the DOM on every keystroke.
    var records = items.map(function (el) {
      return {
        el: el,
        search: (el.getAttribute('data-search') || ''),
        type: (el.getAttribute('data-type') || ''),
        year: (el.getAttribute('data-year') || ''),
        projects: (el.getAttribute('data-projects') || '')
          .split(/\s+/)
          .filter(Boolean)
      };
    });

    function currentFilters() {
      return {
        // Split on whitespace so "chio stormwater" matches items containing both.
        terms: (textInput && textInput.value ? textInput.value : '')
          .toLowerCase()
          .split(/\s+/)
          .filter(Boolean),
        type: typeSelect ? typeSelect.value : '',
        project: projectSelect ? projectSelect.value : '',
        year: yearSelect ? yearSelect.value : ''
      };
    }

    function matches(rec, f) {
      if (f.type && rec.type !== f.type) return false;
      if (f.year && rec.year !== f.year) return false;
      if (f.project && rec.projects.indexOf(f.project) === -1) return false;
      for (var i = 0; i < f.terms.length; i++) {
        if (rec.search.indexOf(f.terms[i]) === -1) return false;
      }
      return true;
    }

    function apply() {
      var f = currentFilters();
      var isFiltered = !!(f.terms.length || f.type || f.project || f.year);
      var shown = 0;

      records.forEach(function (rec) {
        var ok = matches(rec, f);
        rec.el.hidden = !ok;
        if (ok) shown++;
      });

      if (countEl) {
        countEl.textContent = isFiltered
          ? 'Showing ' + shown + ' of ' + total + ' publications'
          : total + ' publications';
      }
      if (clearBtn) clearBtn.hidden = !isFiltered;
      if (emptyEl) emptyEl.hidden = shown !== 0;
    }

    function clear() {
      if (textInput) textInput.value = '';
      if (typeSelect) typeSelect.value = '';
      if (projectSelect) projectSelect.value = '';
      if (yearSelect) yearSelect.value = '';
      apply();
      if (textInput) textInput.focus();
    }

    form.addEventListener('input', apply);
    form.addEventListener('change', apply);
    // The bar is a <form> for semantics//a11y only — never actually submit it.
    form.addEventListener('submit', function (e) {
      e.preventDefault();
    });
    if (clearBtn) clearBtn.addEventListener('click', clear);

    form.hidden = false;
    apply();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
