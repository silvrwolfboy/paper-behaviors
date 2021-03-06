/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
import '@polymer/polymer/polymer-legacy.js';
import '@polymer/paper-ripple/paper-ripple.js';

import {Polymer} from '@polymer/polymer/lib/legacy/polymer-fn.js';
import {html} from '@polymer/polymer/lib/utils/html-tag.js';

import {PaperCheckedElementBehavior} from '../paper-checked-element-behavior.js';

Polymer({
  _template: html`
    <style>
      :host #ink {
        position: absolute;
        top: -16px;
        left: -16px;
        width: 48px;
        height: 48px;
      }
    </style>

    <div id="container">
      <paper-ripple id="ink" class="circle" center></paper-ripple>
    </div>
`,

  is: 'test-radio-button',
  behaviors: [PaperCheckedElementBehavior]
});
