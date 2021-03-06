/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit-element';
import { globalStyle } from '@clr/core/internal';
import { CdsControl } from '@clr/core/forms';
import { inputStyles } from '@clr/core/input';
import { ClarityIcons, searchIcon } from '@clr/core/icon';
import '@clr/core/icon/register.js';
import { styles as globalStyles } from './search.global.css.js';

ClarityIcons.addIcons(searchIcon);

/**
 * Search
 *
 * ```typescript
 * import '@clr/core/search/register.js';
 * ```
 *
 * ```html
 * <cds-search>
 *   <label>Search</label>
 *   <input type="search" />
 *   <cds-control-message>message text</cds-control-message>
 * </cds-search>
 * ```
 *
 * @element cds-search
 * @slot default - For projecting search input and label
 */
export class CdsSearch extends CdsControl {
  @globalStyle() protected globalStyles = globalStyles;

  protected get prefixDefaultTemplate() {
    return html`<cds-control-action readonly><cds-icon shape="search" size="18"></cds-icon></cds-control-action>`;
  }

  static get styles() {
    return [...super.styles, inputStyles];
  }
}
