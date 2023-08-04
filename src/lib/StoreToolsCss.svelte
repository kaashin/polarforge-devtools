<style>
	:global(.unlog *) {
		--jse-theme: dark;

		/* over all fonts, sizes, and colors */
		--jse-font-family-mono: consolas, menlo, monaco, 'Ubuntu Mono', 'source-code-pro', monospace;
		--jse-font-size-mono: 12px;
		--jse-font-size: 12px;
		/* --jse-font-size-text-mode-search: 80%; */
		--jse-font-size-text-mode-search: 100%;
		--jse-line-height: calc(1em + 4px);
		--jse-indent-size: calc(1em + 4px);
		--jse-color-picker-button-size: 1em;
		--jse-padding: 8px;
		--jse-text-readonly: #8d8d8d;
		--jse-text-color-inverse: #fff;
		--jse-error-color: #ee5341;
		--jse-warning-color: #fdc539;
		--jse-theme-color: #2f6dd0;
		--jse-theme-color-highlight: #467cd2;
		/* --jse-background-color: #1e1e1e; */
		--jse-background-color: var(--color-dark-100);
		/* --jse-text-color: #d4d4d4; */
		--jse-text-color: var(--color-action);

		/* main, menu, modal */
		--jse-main-border: 0px solid var(--color-action);
		/* --jse-main-border: 1px solid #4f4f4f; */
		--jse-menu-color: #fff;
		--jse-modal-background: #2f2f2f;
		--jse-menu-button-size: 32px;
		/* --jse-modal-background: var(--color-dark-200); */
		--jse-modal-overlay-background: rgba(0, 0, 0, 0.5);
		--jse-modal-code-background: #2f2f2f;
		/* --jse-modal-code-background: var(--color-dark-200); */

		/* jsoneditor modal */
		--jse-modal-theme-color: #707070;
		--jse-modal-theme-color-highlight: #646464;

		/* tooltip in text mode */
		--jse-tooltip-color: var(--jse-text-color);
		--jse-tooltip-background: #4b4b4b;
		--jse-tooltip-border: 1px solid #737373;
		--jse-tooltip-action-button-color: inherit;
		--jse-tooltip-action-button-background: #737373;

		/* panels: navigation bar, gutter, search box */
		/* --jse-panel-background: #333333; */
		--jse-panel-background: var(--color-dark-200);
		--jse-panel-background-border: 0px solid #464646;
		--jse-panel-color: var(--jse-text-color);
		/* --jse-panel-color-readonly: #737373; */
		--jse-panel-color-readonly: var(--color-dark-400);
		/* --jse-panel-border: 1px solid #3c3c3c; */
		/* --jse-panel-button-color: inherit; */
		--jse-panel-button-color: var(--color-dark-400);
		--jse-panel-button-background: transparent;
		--jse-panel-button-color-highlight: #e5e5e5;
		/* --jse-panel-button-color-highlight: var(--color-dark-300); */
		/* --jse-panel-button-background-highlight: #464646; */
		--jse-panel-button-background-highlight: var(--color-dark-300);

		/* navigation-bar */
		--jse-navigation-bar-background: var(--color-dark-200);
		/* --jse-navigation-bar-background: #656565; */
		--jse-navigation-bar-background-highlight: var(--color-dark-300);
		/* --jse-navigation-bar-background-highlight: #7e7e7e; */
		--jse-navigation-bar-dropdown-color: var(--jse-text-color);

		/* context menu */
		/* --jse-context-menu-background: #4b4b4b; */
		--jse-context-menu-background: var(--color-dark-200);
		--jse-context-menu-background-highlight: var(--color-dark-300);
		/* --jse-context-menu-background-highlight: #595959; */
		--jse-context-menu-separator-color: #595959;
		--jse-context-menu-color: var(--jse-text-color);
		/* --jse-context-menu-pointer-background: #737373; */
		--jse-context-menu-pointer-background: var(--color-dark-300);
		/* --jse-context-menu-pointer-background-highlight: #818181; */
		--jse-context-menu-pointer-background-highlight: var(--color-action);
		/* --jse-context-menu-pointer-color: var(--jse-context-menu-color); */
		--jse-context-menu-pointer-color: var(--color-text);
		--jse-context-menu-color: var(--jse-text-color-inverse);
		--jse-context-menu-color-disabled: var(--color-dark-300);
		/* --jse-context-menu-color-disabled: #9d9d9d; */
		--jse-context-menu-pointer-hover-background: var(--color-action);
		--jse-context-menu-pointer-size: calc(1em + 4px);
		--jse-context-menu-tip-background: rgba(255, 255, 255, 0.2);
		--jse-context-menu-tip-color: inherit;

		/* contents: json key and values */
		--jse-key-color: #9cdcfe;
		--jse-value-color: var(--jse-text-color);
		--jse-value-color-number: #b5cea8;
		--jse-value-color-boolean: #569cd6;
		--jse-value-color-null: #569cd6;
		--jse-value-color-string: #ce9178;
		--jse-value-color-url: #ce9178;
		--jse-delimiter-color: #949494;
		--jse-edit-outline: 1px solid var(--color-action);
		/* --jse-edit-outline: 2px solid var(--jse-text-color); */

		/* contents: selected or hovered */
		--jse-contents-background-color: transparent;
		--jse-contents-cursor: pointer;
		--jse-contents-selected-cursor: grab;
		--jse-selection-background-color: var(--color-dark-300);
		/* --jse-selection-background-color: #464646; */
		--jse-selection-background-inactive-color: var(--color-dark-200);
		/* --jse-selection-background-inactive-color: #333333; */
		/* --jse-hover-background-color: #343434; */
		--jse-hover-background-color: var(--color-dark-300);
		--jse-active-line-background-color: rgba(255, 255, 255, 0.06);
		--jse-search-match-background-color: #343434;

		/* contents: section of collapsed items in an array */
		--jse-collapsed-items-background-color: #333333;
		--jse-collapsed-items-selected-background-color: #565656;
		--jse-collapsed-items-link-color: #b2b2b2;
		--jse-collapsed-items-link-color-highlight: #ec8477;

		/* contents: highlighting of search results */
		--jse-search-match-color: #724c27;
		--jse-search-match-outline: 1px solid #966535;
		--jse-search-match-active-color: #9f6c39;
		--jse-search-match-active-outline: 1px solid #bb7f43;

		/* contents: inline tags inside the JSON document */
		--jse-tag-background: var(--color-dark-400);
		/* --jse-tag-background: #444444; */
		--jse-tag-color: #bdbdbd;

		/* contents: table */
		--jse-table-header-background: #333333;
		--jse-table-header-background-highlight: #424242;
		--jse-table-row-odd-background: rgba(255, 255, 255, 0.1);

		/* controls in modals: inputs, buttons, and `a` */
		--jse-input-background: #3d3d3d;
		--jse-input-border: var(--jse-main-border);
		--jse-button-background: #808080;
		--jse-button-background-highlight: #7a7a7a;
		--jse-button-color: #e0e0e0;
		--jse-button-secondary-background: #494949;
		--jse-button-secondary-background-highlight: #5d5d5d;
		--jse-button-secondary-background-disabled: #var(--color-dark-300);
		/* --jse-button-secondary-background-disabled: #9d9d9d; */
		--jse-button-secondary-color: var(--jse-text-color);
		--jse-a-color: #55abff;
		--jse-a-color-highlight: #4387c9;
		--jse-controls-box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.24);
		--jse-input-background-readonly: transparent;
		--jse-input-radius: 3px;
		--jse-button-primary-background: var(--jse-theme-color);
		--jse-button-primary-background-highlight: var(--jse-theme-color-highlight);
		--jse-button-primary-background-disabled: #9d9d9d;
		--jse-button-primary-color: var(--jse-text-color-inverse);

		/* messages */
		--jse-message-error-background: var(--jse-error-color);
		--jse-message-error-color: var(--jse-text-color-inverse);
		--jse-message-warning-background: #ffde5c;
		--jse-message-warning-color: var(--jse-text-color);
		--jse-message-success-background: #9ac45d;
		--jse-message-success-color: var(--jse-text-color-inverse);
		--jse-message-info-background: #4f91ff;
		--jse-message-info-color: var(--jse-text-color-inverse);
		--jse-message-action-background: rgba(255, 255, 255, 0.2);
		--jse-message-action-background-highlight: rgba(255, 255, 255, 0.3);

		/* svelte-select */
		--background: #3d3d3d;
		/* --border: 1px solid #4f4f4f; */
		--border: 1px solid var(--color-action);
		--list-background: #3d3d3d;
		/* --item-hover-bg: #505050; */
		--item-hover-bg: var(--color-dark-200);
		--multi-item-bg: #5b5b5b;
		--input-color: #d4d4d4;
		--multi-clear-bg: #8a8a8a;
		--multi-item-clear-icon-color: #d4d4d4;
		--multi-item-outline: 1px solid #696969;
		--list-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.4);

		/* color picker */
		--jse-color-picker-background: #656565;
		--jse-color-picker-border-box-shadow: #8c8c8c 0 0 0 1px;
	}
</style>
