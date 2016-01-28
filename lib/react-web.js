/**
 * Copyright (c) 2015-present, Alibaba Group Holding Limited.
 * All rights reserved.
 *
 * @providesModule ReactWeb
 */
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ReactStyleSheet = require('ReactStyleSheet');

// proxy origin react createElement

var _ReactStyleSheet2 = _interopRequireDefault(_ReactStyleSheet);

_ReactStyleSheet2['default'].extendCreateElement(_react2['default'], [
// whitelist all Native Components (to only override `style` of these)
require('ReactActivityIndicator'), require('ReactDrawerLayout'), require('ReactImage'), require('ReactListView'), require('ReactModal'), require('ReactNavigator'), require('ReactPicker'), require('ReactProgressView'), require('ReactScrollView'), require('ReactSegmentedControl'), require('ReactSlider'), require('ReactSwitch'), require('ReactTabBar'), require('ReactText'), require('ReactTextInput'), require('ReactToast'), require('ReactTouchable'), require('ReactTouchableHighlight'), require('ReactTouchableOpacity'), require('ReactTouchableWithoutFeedback'), require('ReactView'), require('ReactViewPager')]);

var ReactWeb = _extends(Object.defineProperties({}, {
  ActivityIndicatorIOS: {
    // Components

    get: function get() {
      return require('ReactActivityIndicator');
    },
    configurable: true,
    enumerable: true
  },
  DatePickerIOS: {
    get: function get() {
      return null;
    },
    configurable: true,
    enumerable: true
  },
  DrawerLayoutAndroid: {
    get: function get() {
      return require('ReactDrawerLayout');
    },
    configurable: true,
    enumerable: true
  },
  Image: {
    get: function get() {
      return require('ReactImage');
    },
    configurable: true,
    enumerable: true
  },
  ListView: {
    get: function get() {
      return require('ReactListView');
    },
    configurable: true,
    enumerable: true
  },
  Modal: {
    get: function get() {
      return require('ReactModal');
    },
    configurable: true,
    enumerable: true
  },
  Navigator: {
    get: function get() {
      return require('ReactNavigator');
    },
    configurable: true,
    enumerable: true
  },
  PickerIOS: {
    get: function get() {
      return require('ReactPicker');
    },
    configurable: true,
    enumerable: true
  },
  ProgressViewIOS: {
    get: function get() {
      return require('ReactProgressView');
    },
    configurable: true,
    enumerable: true
  },
  ScrollView: {
    get: function get() {
      return require('ReactScrollView');
    },
    configurable: true,
    enumerable: true
  },
  SegmentedControlIOS: {
    get: function get() {
      return require('ReactSegmentedControl');
    },
    configurable: true,
    enumerable: true
  },
  SliderIOS: {
    get: function get() {
      return require('ReactSlider');
    },
    configurable: true,
    enumerable: true
  },
  Switch: {
    get: function get() {
      return require('ReactSwitch');
    },
    configurable: true,
    enumerable: true
  },
  SwitchAndroid: {
    get: function get() {
      return require('ReactSwitch');
    },
    configurable: true,
    enumerable: true
  },
  SwitchIOS: {
    get: function get() {
      return require('ReactSwitch');
    },
    configurable: true,
    enumerable: true
  },
  TabBarIOS: {
    get: function get() {
      return require('ReactTabBar');
    },
    configurable: true,
    enumerable: true
  },
  Text: {
    get: function get() {
      return require('ReactText');
    },
    configurable: true,
    enumerable: true
  },
  TextInput: {
    get: function get() {
      return require('ReactTextInput');
    },
    configurable: true,
    enumerable: true
  },
  ToastAndroid: {
    get: function get() {
      return require('ReactToast');
    },
    configurable: true,
    enumerable: true
  },
  Touchable: {
    get: function get() {
      return require('ReactTouchable');
    },
    configurable: true,
    enumerable: true
  },
  TouchableHighlight: {
    get: function get() {
      return require('ReactTouchableHighlight');
    },
    configurable: true,
    enumerable: true
  },
  TouchableOpacity: {
    get: function get() {
      return require('ReactTouchableOpacity');
    },
    configurable: true,
    enumerable: true
  },
  TouchableWithoutFeedback: {
    get: function get() {
      return require('ReactTouchableWithoutFeedback');
    },
    configurable: true,
    enumerable: true
  },
  View: {
    get: function get() {
      return require('ReactView');
    },
    configurable: true,
    enumerable: true
  },
  ViewPagerAndroid: {
    get: function get() {
      return require('ReactViewPager');
    },
    configurable: true,
    enumerable: true
  },
  Alert: {

    // APIs

    get: function get() {
      return require('ReactAlert');
    },
    configurable: true,
    enumerable: true
  },
  AlertIOS: {
    get: function get() {
      return require('ReactAlert');
    },
    configurable: true,
    enumerable: true
  },
  Animated: {
    get: function get() {
      return require('ReactAnimated');
    },
    configurable: true,
    enumerable: true
  },
  AppRegistry: {
    get: function get() {
      return require('ReactAppRegistry');
    },
    configurable: true,
    enumerable: true
  },
  AsyncStorage: {
    get: function get() {
      return require('ReactAsyncStorage');
    },
    configurable: true,
    enumerable: true
  },
  Dimensions: {
    get: function get() {
      return require('ReactDimensions');
    },
    configurable: true,
    enumerable: true
  },
  Easing: {
    get: function get() {
      return require('ReactEasing');
    },
    configurable: true,
    enumerable: true
  },
  InteractionManager: {
    get: function get() {
      return require('ReactInteractionManager');
    },
    configurable: true,
    enumerable: true
  },
  PanResponder: {
    get: function get() {
      return require('ReactPanResponder');
    },
    configurable: true,
    enumerable: true
  },
  PixelRatio: {
    get: function get() {
      return require('ReactPixelRatio');
    },
    configurable: true,
    enumerable: true
  },
  StyleSheet: {
    get: function get() {
      return require('ReactStyleSheet');
    },
    configurable: true,
    enumerable: true
  },
  NativeModules: {

    // Plugins

    get: function get() {
      return require('ReactNativeModules');
    },
    configurable: true,
    enumerable: true
  },
  Platform: {
    get: function get() {
      return require('ReactPlatform');
    },
    configurable: true,
    enumerable: true
  },
  processColor: {
    get: function get() {
      return require('ReactProcessColor');
    },
    configurable: true,
    enumerable: true
  }
}), _react2['default']);

module.exports = ReactWeb;