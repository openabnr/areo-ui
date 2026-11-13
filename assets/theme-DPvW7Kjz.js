import{n as e}from"./rolldown-runtime-DkW27tQK.js";var t;function n(){return(n=e((()=>{t=`@layer base {
  :root {
    --areo-font-sans:
      -apple-system, system-ui, 'BlinkMacSystemFont', 'Segoe UI',
      'Apple SD Gothic Neo', Arial, 'Malgun Gothic', '맑은 고딕', sans-serif;

    /* Primary */
    --areo-primary: #2190ff;
    --areo-primary-hover: #016ee9;
    --areo-primary-active: #015ec7;

    /* Outline Primary */
    --areo-outline-primary-hover: #e9f4ff;
    --areo-outline-primary-active: #c8e3ff;

    /* Destructive */
    --areo-destructive: #ff443a;
    --areo-destructive-hover: #f14037;

    /* Secondary / Neutral */
    --areo-secondary: #eeeeee;
    --areo-secondary-hover: #e2e2e2;
    --areo-secondary-active: #d6d6d6;
    --areo-secondary-foreground: #1b1b1b;
    --areo-secondary-border: #dbdbdb;
    --areo-secondary-border-hover: #acacac;
    --areo-secondary-border-active: #666666;

    --areo-surface-muted: #f6f6f6;
    --areo-surface-info: #e9f4ff;
    --areo-muted-foreground: #666666;

    --areo-border-disabled: #c9c9c9;
    --areo-text-disabled: #acacac;

    --areo-item-selected-bg: #eeeeee;
    --areo-item-selected-fg: #333333;

    --areo-switch-unchecked: #c2c2c2;
    --areo-switch-disabled-checked: #b4d2f1;

    --areo-warning: #ff8839;

    --areo-widget-head-foreground: #fff;
    --areo-widget-head-background: #354265;
    --areo-widget-head-border: #354265;
    --areo-widget-body-foreground: #333;
    --areo-widget-body-background: oklch(0.97 0 0);
    --areo-widget-body-border: #b8c1cc;

    --areo-resizable-background: #2190ff;

    /* Alert / Status Surfaces & Text */
    --areo-alert-info-bg: #e3f7eb;
    --areo-alert-info-fg: #0f2e1b;
    --areo-alert-info-icon: #237844;

    --areo-alert-success-bg: #e3effe;
    --areo-alert-success-fg: #0f2240;
    --areo-alert-success-icon: #1d63ed;

    --areo-alert-warning-bg: #fef5d1;
    --areo-alert-warning-fg: #3d2403;
    --areo-alert-warning-icon: #a1550c;
    --areo-alert-warning-btn: #9c4d13;
    --areo-alert-warning-btn-hover: #833e0c;

    --areo-alert-destructive-bg: #fee6e7;
    --areo-alert-destructive-fg: #450a0a;
    --areo-alert-destructive-icon: #cf2227;
    --areo-alert-destructive-btn: #cc2127;
    --areo-alert-destructive-btn-hover: #b01a20;
  }
}

@theme inline {
  /* Primary 계열 */
  --color-primary: var(--areo-primary, #2190ff);
  --color-primary-hover: var(--areo-primary-hover, #016ee9);
  --color-primary-active: var(--areo-primary-active, #015ec7);

  /* Outline Primary 계열 */
  --color-outline-primary-hover: var(--areo-outline-primary-hover, #e9f4ff);
  --color-outline-primary-active: var(--areo-outline-primary-active, #c8e3ff);

  /* Destructive 계열 */
  --color-destructive: var(--areo-destructive, #ff443a);
  --color-destructive-hover: var(--areo-destructive-hover, #f14037);

  /* Neutral / Secondary 계열 */
  --color-secondary: var(--areo-secondary, #eeeeee);
  --color-secondary-hover: var(--areo-secondary-hover, #e2e2e2);
  --color-secondary-active: var(--areo-secondary-active, #d6d6d6);
  --color-secondary-foreground: var(--areo-secondary-foreground, #1b1b1b);
  --color-secondary-border: var(--areo-secondary-border, #dbdbdb);
  --color-secondary-border-hover: var(--areo-secondary-border-hover, #acacac);
  --color-secondary-border-active: var(--areo-secondary-border-active, #666666);

  /* Neutral / Surface */
  --color-surface-muted: var(--areo-surface-muted, #f6f6f6);
  --color-muted-foreground: var(--areo-muted-foreground, #666666);

  /* Info Surface */
  --color-surface-info: var(--areo-surface-info, #e9f4ff);

  /* Disabled State */
  --color-border-disabled: var(--areo-border-disabled, #c9c9c9);
  --color-text-disabled: var(--areo-text-disabled, #acacac);

  /* Item Selection State */
  --color-item-selected-bg: var(--areo-item-selected-bg, #eeeeee);
  --color-item-selected-fg: var(--areo-item-selected-fg, #333333);

  /* Switch States */
  --color-switch-unchecked: var(--areo-switch-unchecked, #c2c2c2);
  --color-switch-disabled-checked: var(--areo-switch-disabled-checked, #b4d2f1);

  /* Warning / Orange State */
  --color-warning: var(--areo-warning, #ff8839);

  /* Widget */
  --color-widget-head-foreground: var(--areo-widget-head-foreground, #fff);
  --color-widget-head-background: var(--areo-widget-head-background, #354265);
  --color-widget-head-border: var(--areo-widget-head-border, #354265);
  --color-widget-body-foreground: var(--areo-widget-body-foreground, #333);
  --color-widget-body-background: var(
    --areo-widget-body-background,
    oklch(0.97 0 0)
  );
  --color-widget-body-border: var(--areo-widget-body-border, #b8c1cc);

  /* Resizable */
  --color-resizable-background: var(--areo-resizable-background, #2190ff);

  /* Alert Tokens */
  --color-alert-info-bg: var(--areo-alert-info-bg, #e3f7eb);
  --color-alert-info-fg: var(--areo-alert-info-fg, #0f2e1b);
  --color-alert-info-icon: var(--areo-alert-info-icon, #237844);

  --color-alert-success-bg: var(--areo-alert-success-bg, #e3effe);
  --color-alert-success-fg: var(--areo-alert-success-fg, #0f2240);
  --color-alert-success-icon: var(--areo-alert-success-icon, #1d63ed);

  --color-alert-warning-bg: var(--areo-alert-warning-bg, #fef5d1);
  --color-alert-warning-fg: var(--areo-alert-warning-fg, #3d2403);
  --color-alert-warning-icon: var(--areo-alert-warning-icon, #a1550c);
  --color-alert-warning-btn: var(--areo-alert-warning-btn, #9c4d13);
  --color-alert-warning-btn-hover: var(--areo-alert-warning-btn-hover, #833e0c);

  --color-alert-destructive-bg: var(--areo-alert-destructive-bg, #fee6e7);
  --color-alert-destructive-fg: var(--areo-alert-destructive-fg, #450a0a);
  --color-alert-destructive-icon: var(--areo-alert-destructive-icon, #cf2227);
  --color-alert-destructive-btn: var(--areo-alert-destructive-btn, #cc2127);
  --color-alert-destructive-btn-hover: var(
    --areo-alert-destructive-btn-hover,
    #b01a20
  );

  /* 폰트 */
  --font-sans: var(--areo-font-sans);

  /* 10px (0.625rem) / line-height: 14px (0.875rem) */
  --text-3xs: 0.625rem;
  --text-3xs--line-height: 0.875rem;

  /* 11px (0.6875rem) / line-height: 14px (0.875rem) */
  --text-2xs: 0.6875rem;
  --text-2xs--line-height: 0.875rem;

  /* 13px (0.8125rem) - 콤보박스, 조밀한 테이블 셀, 트리 뷰용 */
  --text-compact: 0.8125rem;
  --text-compact--line-height: 1.125rem; /* 18px */
}

/* PropertyTable Base Styles (Zero Specificity via :where for easy Tailwind overrides in consumer apps) */
:where(.areo-property-table) table {
  width: 100%;
  display: grid;
  border-collapse: collapse;
  overflow: visible;
}

:where(.areo-property-table) :is(thead, tbody, tr) {
  display: contents;
}

:where(.areo-property-table) :is(th, td) {
  display: flex;
  align-items: center;
  min-height: 25px;
  padding: 0 6px;
  font-size: 12px;
  position: relative;
  box-sizing: border-box;
  border-bottom: 1px solid var(--areo-secondary-border, #dbdbdb);
}

:where(.areo-property-table) :is(thead th, tbody th) {
  text-align: left;
  font-weight: 400;
  background-color: var(--areo-secondary, #eeeeee);
  border-left: 1px solid var(--areo-secondary-border, #dbdbdb);
}

:where(.areo-property-table) td {
  border-left: 1px solid var(--areo-secondary-border, #dbdbdb);
  overflow: clip;
  background-color: #ffffff;
}

:where(.areo-property-table)
  :is(
    td:first-child,
    thead th:first-child,
    tbody th:first-child,
    thead th:last-child
  ) {
  border-left: 0;
}

:where(.areo-property-table)
  :is(thead th, td)
  > :where(span:not([role='checkbox']):not(.areo-checkbox)) {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  display: block;
  width: 100%;
}

:where(.areo-property-table.is-selectable) tbody tr:hover td {
  background-color: var(--areo-surface-muted, #f6f6f6);
  cursor: pointer;
}

:where(.areo-property-table.is-selectable) tbody tr.select td {
  color: #ffffff;
  background-color: var(--areo-primary, #2190ff);
}
`})))()}export{t as n,n as t};