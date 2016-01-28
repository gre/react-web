/**
 * Copyright (c) 2015-present, Alibaba Group Holding Limited.
 * All rights reserved.
 *
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * @providesModule ReactNavigatorNavigationBarStylesAndroid
 */
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _polyfillsBuildStyleInterpolator = require('./polyfills/buildStyleInterpolator');

var _polyfillsBuildStyleInterpolator2 = _interopRequireDefault(_polyfillsBuildStyleInterpolator);

var _polyfillsMerge = require('./polyfills/merge');

// Android Material Design

var _polyfillsMerge2 = _interopRequireDefault(_polyfillsMerge);

var NAV_BAR_HEIGHT = 56;
var TITLE_LEFT = 72;
var BUTTON_SIZE = 24;
var TOUCH_TARGT_SIZE = 48;
var BUTTON_HORIZONTAL_MARGIN = 16;

var BUTTON_EFFECTIVE_MARGIN = BUTTON_HORIZONTAL_MARGIN - (TOUCH_TARGT_SIZE - BUTTON_SIZE) / 2;
var NAV_ELEMENT_HEIGHT = NAV_BAR_HEIGHT;

var BASE_STYLES = {
  Title: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'flex-start',
    height: NAV_ELEMENT_HEIGHT,
    backgroundColor: 'transparent',
    marginLeft: TITLE_LEFT
  },
  LeftButton: {
    position: 'absolute',
    top: 0,
    left: BUTTON_EFFECTIVE_MARGIN,
    overflow: 'hidden',
    height: NAV_ELEMENT_HEIGHT,
    backgroundColor: 'transparent'
  },
  RightButton: {
    position: 'absolute',
    top: 0,
    right: BUTTON_EFFECTIVE_MARGIN,
    overflow: 'hidden',
    alignItems: 'flex-end',
    height: NAV_ELEMENT_HEIGHT,
    backgroundColor: 'transparent'
  }
};

// There are 3 stages: left, center, right. All previous navigation
// items are in the left stage. The current navigation item is in the
// center stage. All upcoming navigation items are in the right stage.
// Another way to think of the stages is in terms of transitions. When
// we move forward in the navigation stack, we perform a
// right-to-center transition on the new navigation item and a
// center-to-left transition on the current navigation item.
var Stages = {
  Left: {
    Title: (0, _polyfillsMerge2['default'])(BASE_STYLES.Title, { opacity: 0 }),
    LeftButton: (0, _polyfillsMerge2['default'])(BASE_STYLES.LeftButton, { opacity: 0 }),
    RightButton: (0, _polyfillsMerge2['default'])(BASE_STYLES.RightButton, { opacity: 0 })
  },
  Center: {
    Title: (0, _polyfillsMerge2['default'])(BASE_STYLES.Title, { opacity: 1 }),
    LeftButton: (0, _polyfillsMerge2['default'])(BASE_STYLES.LeftButton, { opacity: 1 }),
    RightButton: (0, _polyfillsMerge2['default'])(BASE_STYLES.RightButton, { opacity: 1 })
  },
  Right: {
    Title: (0, _polyfillsMerge2['default'])(BASE_STYLES.Title, { opacity: 0 }),
    LeftButton: (0, _polyfillsMerge2['default'])(BASE_STYLES.LeftButton, { opacity: 0 }),
    RightButton: (0, _polyfillsMerge2['default'])(BASE_STYLES.RightButton, { opacity: 0 })
  }
};

var opacityRatio = 100;

function buildSceneInterpolators(startStyles, endStyles) {
  return {
    Title: (0, _polyfillsBuildStyleInterpolator2['default'])({
      opacity: {
        type: 'linear',
        from: startStyles.Title.opacity,
        to: endStyles.Title.opacity,
        min: 0,
        max: 1
      },
      left: {
        type: 'linear',
        from: startStyles.Title.left,
        to: endStyles.Title.left,
        min: 0,
        max: 1,
        extrapolate: true
      }
    }),
    LeftButton: (0, _polyfillsBuildStyleInterpolator2['default'])({
      opacity: {
        type: 'linear',
        from: startStyles.LeftButton.opacity,
        to: endStyles.LeftButton.opacity,
        min: 0,
        max: 1,
        round: opacityRatio
      },
      left: {
        type: 'linear',
        from: startStyles.LeftButton.left,
        to: endStyles.LeftButton.left,
        min: 0,
        max: 1
      }
    }),
    RightButton: (0, _polyfillsBuildStyleInterpolator2['default'])({
      opacity: {
        type: 'linear',
        from: startStyles.RightButton.opacity,
        to: endStyles.RightButton.opacity,
        min: 0,
        max: 1,
        round: opacityRatio
      },
      left: {
        type: 'linear',
        from: startStyles.RightButton.left,
        to: endStyles.RightButton.left,
        min: 0,
        max: 1,
        extrapolate: true
      }
    })
  };
}

var Interpolators = {
  // Animating *into* the center stage from the right
  RightToCenter: buildSceneInterpolators(Stages.Right, Stages.Center),
  // Animating out of the center stage, to the left
  CenterToLeft: buildSceneInterpolators(Stages.Center, Stages.Left),
  // Both stages (animating *past* the center stage)
  RightToLeft: buildSceneInterpolators(Stages.Right, Stages.Left)
};

module.exports = {
  General: {
    NavBarHeight: NAV_BAR_HEIGHT,
    StatusBarHeight: 0,
    TotalNavHeight: NAV_BAR_HEIGHT
  },
  Interpolators: Interpolators,
  Stages: Stages
};