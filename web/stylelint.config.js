/** @type {import('stylelint').Config} */

export default {
  extends: ['stylelint-config-standard', 'stylelint-config-property-sort-order-smacss'],
  plugins: [
    'stylelint-order'
  ]
};