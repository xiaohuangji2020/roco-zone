/** @type {import('stylelint').Config} */

export default {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-property-sort-order-smacss',
    'stylelint-config-recommended-vue'
  ],
  plugins: [
    'stylelint-order'
  ],
};