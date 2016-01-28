/**
 * Copyright (c) 2015-present, Alibaba Group Holding Limited.
 * All rights reserved.
 *
 * @providesModule ReactStyleSheet
 */
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _extendPropertiesWeb = require('./extendProperties.web');

var _extendPropertiesWeb2 = _interopRequireDefault(_extendPropertiesWeb);

var _reference = require('./reference');

var _reference2 = _interopRequireDefault(_reference);

var _setDefaultStyleWeb = require('./setDefaultStyle.web');

// Make React support array of style object like React Native

var _setDefaultStyleWeb2 = _interopRequireDefault(_setDefaultStyleWeb);

var _extendCreateElement2 = require('./extendCreateElement');

var _extendCreateElement3 = _interopRequireDefault(_extendCreateElement2);

var _flattenStyleWeb = require('./flattenStyle.web');

var _flattenStyleWeb2 = _interopRequireDefault(_flattenStyleWeb);

var inited = false;

var ROOT_CLASS_NAME = 'react-root';
var VIEW_CLASS_NAME = 'react-view';

var StyleSheet = {
  create: function create(styles) {
    return styles;
  },
  extendCreateElement: function extendCreateElement(React, nativeComponents) {
    (0, _extendCreateElement3['default'])(React, function (style) {
      if (!inited) {
        inited = true;
        (0, _setDefaultStyleWeb2['default'])({
          reference: _reference2['default'].getWidth(),
          rootClassName: ROOT_CLASS_NAME,
          viewClassName: VIEW_CLASS_NAME
        });
      }

      return (0, _flattenStyleWeb2['default'])(style, _extendPropertiesWeb2['default']);
    }, nativeComponents);
  },
  setReferenceWidth: _reference2['default'].setWidth,
  rootClassName: ROOT_CLASS_NAME,
  viewClassName: VIEW_CLASS_NAME
};

module.exports = StyleSheet;