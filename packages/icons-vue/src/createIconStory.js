/**
 * Copyright IBM Corp. 2018, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const prettier = require('prettier');

const prettierOptions = {
  parser: 'babylon',
  printWidth: 80,
  singleQuote: true,
  trailingComma: 'es5',
};

function createIconStory(info) {
  const { moduleName, outputOptions } = info;
  return `import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import ${moduleName} from '../../../${outputOptions.file}';

storiesOf('${moduleName}', module)
  .add('default', () => ({
    components: {
      icon: ${moduleName},
    },
    template: \`<icon></icon>\`,
  }))
  .add('with title', () => ({
    components: {
      icon: ${moduleName},
    },
    template: \`<icon title="${moduleName}"></icon>\`,
  }))
  .add('with aria-label and tabindex', () => ({
    components: {
      icon: ${moduleName},
    },
    template: \`<icon aria-label="${moduleName}" tabindex="0"></icon>\`,
  }))
  .add('with event handler', () => ({
    components: {
      icon: ${moduleName},
    },
    template: \`<icon v-on:click="action"></icon>\`,
    methods: {
      action: action('clicked'),
    },
  }))
  .add('with custom classes', () => ({
    components: {
      icon: ${moduleName},
    },
    template: \`<icon class="custom classes" :class="'dynamic classes_2'"></icon>\`,
  }));`;
}

module.exports = createIconStory;
