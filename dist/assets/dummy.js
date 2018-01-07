"use strict";

define('dummy/app', ['exports', 'dummy/resolver', 'ember-load-initializers', 'dummy/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('dummy/components/code-block', ['exports', 'ember-prism/components/code-block'], function (exports, _codeBlock) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _codeBlock.default;
});
define('dummy/components/code-inline', ['exports', 'ember-prism/components/code-inline'], function (exports, _codeInline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _codeInline.default;
});
define('dummy/components/ember-tether', ['exports', 'ember-tether/components/ember-tether'], function (exports, _emberTether) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberTether.default;
    }
  });
});
define('dummy/components/flexi-container', ['exports', 'flexi-layouts/components/flexi-container'], function (exports, _flexiContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flexiContainer.default;
    }
  });
});
define('dummy/components/flexi-grid', ['exports', 'flexi-layouts/components/flexi-grid'], function (exports, _flexiGrid) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flexiGrid.default;
    }
  });
});
define('dummy/components/flexi-layout', ['exports', 'flexi-layouts/components/flexi-layout'], function (exports, _flexiLayout) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flexiLayout.default;
    }
  });
});
define('dummy/controllers/application', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    tour: Ember.inject.service(),

    actions: {
      toggleHelpModal: function toggleHelpModal() {
        this.get('tour').set('modal', true);
        this.get('tour').start();
      },
      toggleHelpNonmodal: function toggleHelpNonmodal() {
        this.get('tour').set('modal', false);
        this.get('tour').start();
      }
    }
  });
});
define('dummy/data', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = [{
    id: 'intro',
    options: {
      attachTo: '.first-element bottom',
      builtInButtons: [{
        classes: 'shepherd-button-secondary cancel-button',
        text: 'Exit',
        type: 'cancel'
      }, {
        classes: 'shepherd-button-primary next-button',
        text: 'Next',
        type: 'next'
      }],
      classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
      copyStyles: false,
      title: 'Welcome to Ember Shepherd!',
      text: ['Ember Shepherd is a javascript library for guiding users through your Ember app.\n           It is an Ember addon that wraps <a href="https://github.com/HubSpot/shepherd">Shepherd</a>\n           and extends its functionality. Shepherd uses <a href="http://github.hubspot.com/tether/">Tether</a>,\n           another open source library, to position all of its steps.', 'Tether makes sure your steps never end up off screen or cropped by an\n           overflow. Try resizing your browser to see what we mean.']
    }
  }, {
    id: 'installation',
    options: {
      attachTo: '.install-element bottom',
      builtInButtons: [{
        classes: 'shepherd-button-secondary cancel-button',
        text: 'Exit',
        type: 'cancel'
      }, {
        classes: 'shepherd-button-primary back-button',
        text: 'Back',
        type: 'back'
      }, {
        classes: 'shepherd-button-primary next-button',
        text: 'Next',
        type: 'next'
      }],
      classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
      copyStyles: false,
      text: ['Installation is simple, if you are using Ember-CLI, just install like any other addon.']
    }
  }, {
    id: 'usage',
    options: {
      attachTo: '.usage-element bottom',
      builtInButtons: [{
        classes: 'shepherd-button-secondary cancel-button',
        text: 'Exit',
        type: 'cancel'
      }, {
        classes: 'shepherd-button-primary back-button',
        text: 'Back',
        type: 'back'
      }, {
        classes: 'shepherd-button-primary next-button',
        text: 'Next',
        type: 'next'
      }],
      classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
      copyStyles: false,
      text: ['To use the tour service, simply inject it into your application and use it like this example.']
    }
  }, {
    id: 'modal',
    options: {
      attachTo: {
        element: '.modal-element',
        on: 'top'
      },
      builtInButtons: [{
        classes: 'shepherd-button-secondary cancel-button',
        text: 'Exit',
        type: 'cancel'
      }, {
        classes: 'shepherd-button-primary back-button',
        text: 'Back',
        type: 'back'
      }, {
        classes: 'shepherd-button-primary next-button',
        text: 'Next',
        type: 'next'
      }],
      classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
      copyStyles: false,
      text: ['We implemented true modal functionality by disabling clicking of the rest of the page.', 'If you would like to enable modal, simply do this.get(\'tour\').set(\'modal\', true).']
    }
  }, {
    id: 'copyStyle',
    options: {
      attachTo: {
        element: '.style-copy-element',
        on: 'top'
      },
      builtInButtons: [{
        classes: 'shepherd-button-secondary cancel-button',
        text: 'Exit',
        type: 'cancel'
      }, {
        classes: 'shepherd-button-primary back-button',
        text: 'Back',
        type: 'back'
      }, {
        classes: 'shepherd-button-primary next-button',
        text: 'Next',
        type: 'next'
      }],
      classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
      copyStyles: false,
      text: ['When using a modal, most times just setting the z-index of your element to something high will\n           make it highlight. For complicated cases, where this does not work, we implemented a copyStyles option\n           that clones the element and copies its computed styles.']
    }
  }, {
    id: 'builtInButtons',
    options: {
      attachTo: '.built-in-buttons-element top',
      builtInButtons: [{
        classes: 'shepherd-button-secondary cancel-button',
        text: 'Exit',
        type: 'cancel'
      }, {
        classes: 'shepherd-button-primary back-button',
        text: 'Back',
        type: 'back'
      }, {
        classes: 'shepherd-button-primary next-button',
        text: 'Next',
        type: 'next'
      }],
      classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
      copyStyles: false,
      text: ['For the common button types, next, back, cancel, etc, we implemented Ember actions\n          that perform these actions on your tour automatically. To use them, simply include\n          in the builtInButtons array in each step.']
    }
  }, {
    id: 'disableScroll',
    options: {
      attachTo: '.disable-scroll-element top',
      builtInButtons: [{
        classes: 'shepherd-button-secondary cancel-button',
        text: 'Exit',
        type: 'cancel'
      }, {
        classes: 'shepherd-button-primary back-button',
        text: 'Back',
        type: 'back'
      }, {
        classes: 'shepherd-button-primary next-button',
        text: 'Next',
        type: 'next'
      }],
      classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
      copyStyles: false,
      text: ['When navigating the user through a tour, you may want to disable scrolling, so they\n          cannot mess up your carefully planned out, amazing tour. This is now easily achieved\n          with this.get(\'tour\').set(\'disableScroll\', true).', 'Try scrolling right now, then exit the tour and see that you can again!']
    }
  }, {
    id: 'noAttachTo',
    options: {
      builtInButtons: [{
        classes: 'shepherd-button-secondary cancel-button',
        text: 'Exit',
        type: 'cancel'
      }, {
        classes: 'shepherd-button-primary back-button',
        text: 'Back',
        type: 'back'
      }],
      classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
      copyStyles: false,
      text: ['If no attachTo is specified, the modal will appear in the center of the screen, as per the Shepherd docs.']
    }
  }];
});
define('dummy/ember-shepherd/tests/addon.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | addon');

  QUnit.test('addon/services/tour.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/services/tour.js should pass ESLint\n\n');
  });

  QUnit.test('addon/utils.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils.js should pass ESLint\n\n');
  });
});
define('dummy/ember-shepherd/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app/services/tour.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/services/tour.js should pass ESLint\n\n');
  });
});
define('dummy/ember-shepherd/tests/styles/app.stylelint-test', [], function () {
  'use strict';

  QUnit.module(' Style Lint ');
  QUnit.test('styles/app.scss should pass style lint', function (assert) {
    assert.expect(1);
    assert.ok(true, '');
  });
});
define('dummy/ember-shepherd/tests/styles/fonts.stylelint-test', [], function () {
  'use strict';

  QUnit.module(' Style Lint ');
  QUnit.test('styles/fonts.scss should pass style lint', function (assert) {
    assert.expect(1);
    assert.ok(true, '');
  });
});
define('dummy/ember-shepherd/tests/styles/prism-ghcolors.stylelint-test', [], function () {
  'use strict';

  QUnit.module(' Style Lint ');
  QUnit.test('styles/prism-ghcolors.scss should pass style lint', function (assert) {
    assert.expect(1);
    assert.ok(true, '');
  });
});
define("dummy/ember-shepherd/tests/templates.template.lint-test", [], function () {
  "use strict";
});
define('dummy/event_dispatcher', ['exports', 'ember-native-dom-event-dispatcher'], function (exports, _emberNativeDomEventDispatcher) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberNativeDomEventDispatcher.default;
    }
  });
});
define('dummy/helpers/-inject-layout', ['exports', 'flexi-layouts/helpers/-inject-layout'], function (exports, _injectLayout) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _injectLayout.default;
    }
  });
  Object.defineProperty(exports, 'injectLayout', {
    enumerable: true,
    get: function () {
      return _injectLayout.injectLayout;
    }
  });
});
define('dummy/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('dummy/initializers/export-application-global', ['exports', 'dummy/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('dummy/initializers/window-service', ['exports', 'ember-window-mock/initializers/window-service'], function (exports, _windowService) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _windowService.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _windowService.initialize;
    }
  });
});
define('dummy/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('dummy/router', ['exports', 'dummy/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {});

  exports.default = Router;
});
define('dummy/routes/application', ['exports', 'dummy/config/environment', 'dummy/data'], function (exports, _environment, _data) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    tour: Ember.inject.service(),
    disableScroll: true,
    defaults: {
      classes: 'shepherd-element shepherd-open shepherd-theme-arrows',
      scrollTo: true,
      showCancelLink: true
    },

    beforeModel: function beforeModel() {
      var tour = this.get('tour');

      tour.set('defaults', this.get('defaults'));
      tour.set('disableScroll', this.get('disableScroll'));
      tour.set('modal', true);
      tour.set('confirmCancel', false);
      tour.set('steps', _data.default);
      tour.set('requiredElements', [{
        selector: '.first-element',
        message: 'First element not found',
        title: 'Error'
      }, {
        selector: '.install-element',
        message: 'Install element not found',
        title: 'Error'
      }]);

      tour.on('cancel', function () {
        console.log('cancel');
      });
    },
    model: function model() {
      return {
        links: [{
          href: 'https://github.com/shipshapecode/ember-shepherd',
          text: 'Docs',
          type: 'href'
        }, {
          href: 'https://github.com/shipshapecode/ember-shepherd',
          text: 'GitHub',
          type: 'href'
        }, {
          href: 'https://shipshape.io',
          text: 'Ship Shape',
          type: 'href'
        }]
      };
    },
    activate: function activate() {
      if (_environment.default.environment !== 'test') {
        Ember.run.scheduleOnce('afterRender', this, function () {
          this.get('tour').start();
        });
      }
    }
  });
});
define('dummy/services/device/layout', ['exports', 'dummy/config/environment', 'flexi-layouts/services/device/layout'], function (exports, _environment, _layout) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _layout.default.extend({
    breakpoints: _environment.default.flexi.breakpoints
  });
});
define('dummy/services/tour', ['exports', 'ember-shepherd/services/tour'], function (exports, _tour) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _tour.default;
    }
  });
});
define("dummy/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "lkqiudaH", "block": "{\"symbols\":[],\"statements\":[[6,\"hbox\"],[9,\"class\",\"justify-center\"],[7],[0,\"\\n  \"],[6,\"box\"],[9,\"class\",\"col-md-5 col-xs-11 flexi-fill\"],[7],[0,\"\\n    \"],[6,\"centered\"],[7],[0,\"\\n      \"],[6,\"h1\"],[9,\"class\",\"pageTitle\"],[7],[6,\"span\"],[9,\"class\",\"ember-title\"],[7],[0,\"ember\"],[8],[0,\" Shepherd\"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"centered\"],[9,\"class\",\"first-element\"],[7],[0,\"\\n      \"],[6,\"h4\"],[7],[0,\"Guide your users through a tour of your app.\"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"centered\"],[7],[0,\"\\n      \"],[6,\"h5\"],[7],[0,\"Installation\"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"centered\"],[9,\"class\",\"install-element\"],[7],[0,\"\\n      \"],[4,\"code-block\",null,[[\"language\"],[\"bash\"]],{\"statements\":[[0,\"ember install ember-shepherd\"]],\"parameters\":[]},null],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"centered\"],[7],[0,\"\\n      \"],[6,\"h5\"],[7],[0,\"Usage\"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"centered\"],[9,\"class\",\"usage-element\"],[7],[4,\"code-block\",null,[[\"language\"],[\"javascript\"]],{\"statements\":[[0,\"//Inject the service: tour: Ember.inject.service()\\nlet tour = this.get('tour');\\ntour.set('defaults', shepherdDefaults);\\ntour.set('disableScroll', true);\\ntour.set('modal', true);\\ntour.set('requiredElements', requiredElements);\\ntour.set('steps', steps);\\n\\n// Methods to control the tour\\ntour.start();\\ntour.next();\\ntour.back();\\ntour.cancel();\"]],\"parameters\":[]},null],[8],[0,\"\\n    \"],[6,\"centered\"],[7],[0,\"\\n      \"],[6,\"h5\"],[7],[0,\"Additional Features\"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"hbox\"],[9,\"class\",\"usage-element\"],[7],[0,\"\\n      \"],[6,\"centered\"],[9,\"class\",\"panel modal-element col-sm-3 col-xs-12\"],[7],[0,\"\\n        Modal\\n      \"],[8],[0,\"\\n      \"],[6,\"centered\"],[9,\"class\",\"panel style-copy-element col-sm-3 col-xs-12\"],[7],[0,\"\\n        Style Copy\\n      \"],[8],[0,\"\\n      \"],[6,\"centered\"],[9,\"class\",\"panel built-in-buttons-element col-sm-3 col-xs-12\"],[7],[0,\"\\n        Built-in Buttons\\n      \"],[8],[0,\"\\n      \"],[6,\"centered\"],[9,\"class\",\"panel disable-scroll-element col-sm-3 col-xs-12\"],[7],[0,\"\\n        Disable Scroll\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"hbox\"],[7],[0,\"\\n      \"],[6,\"centered\"],[9,\"class\",\"text-center col-sm-3 col-xs-6\"],[7],[0,\"\\n        \"],[6,\"a\"],[9,\"href\",\"javascript:void(0)\"],[9,\"class\",\"bottomButton toggleHelpModal\"],[3,\"action\",[[19,0,[]],\"toggleHelpModal\"]],[7],[0,\"Modal Demo\"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"centered\"],[9,\"class\",\"text-center col-sm-3 col-xs-6\"],[7],[0,\"\\n        \"],[6,\"a\"],[9,\"href\",\"javascript:void(0)\"],[9,\"class\",\"bottomButton toggleHelpNonmodal\"],[3,\"action\",[[19,0,[]],\"toggleHelpNonmodal\"]],[7],[0,\"Non-modal\"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"centered\"],[9,\"class\",\"text-center col-sm-3 col-xs-6\"],[7],[0,\"\\n        \"],[6,\"a\"],[9,\"href\",\"javascript:void(0)\"],[9,\"class\",\"bottomButton\"],[9,\"href\",\"https://github.com/shipshapecode/ember-shepherd/blob/master/README.md\"],[7],[0,\"Docs\"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"centered\"],[9,\"class\",\"text-center col-sm-3 col-xs-6\"],[7],[0,\"\\n        \"],[6,\"a\"],[9,\"href\",\"javascript:void(0)\"],[9,\"class\",\"bottomButton\"],[9,\"href\",\"https://github.com/shipshapecode/ember-shepherd\"],[7],[0,\"Github\"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"centered\"],[9,\"class\",\"medium-8 columns medium-centered text-center\"],[7],[0,\"\\n      \"],[6,\"a\"],[9,\"href\",\"https://github.com/HubSpot/shepherd\"],[7],[0,\"\\n        \"],[6,\"svg\"],[9,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[9,\"version\",\"1.0\"],[9,\"style\",\"height: 330px; width: 330px; max-width: 80%;\"],[9,\"viewBox\",\"0 0 128 128\"],[7],[0,\"\\n          \"],[6,\"g\"],[7],[0,\"\\n            \"],[6,\"path\"],[9,\"style\",\"fill:#C8C7D5;fill-rule:evenodd;stroke:#C8C7D5;stroke-width:5.87337351;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none\"],[9,\"d\",\"m 64.476602,12.02253 c -1.746998,0 -3.347433,0.657731 -4.649754,1.804839 -0.822661,-0.722292 -1.879102,-1.162439 -3.059049,-1.162439 -2.579308,0 -4.680346,2.101041 -4.680345,4.680345 0,0.187347 -0.02147,0.369024 0,0.550629 -0.671413,0.140434 -1.318206,0.35031 -1.957791,0.611809 -1.679568,-2.107155 -4.038671,-3.395544 -6.668726,-3.395544 -4.759401,0 -8.693202,4.304309 -9.177146,9.819547 -2.194415,1.167023 -3.701449,3.775777 -3.701449,6.821679 1e-6,3.50355 2.01045,6.468126 4.741525,7.280536 0.249727,0.722247 0.594366,1.367255 0.978896,1.988381 -4.821807,0.890347 -9.691708,2.858651 -14.132805,5.934555 -6.564517,4.546581 -16.0963443,12.398745 -17.0694924,25.420695 8.6598614,2.498312 17.7260754,0.945137 25.4818764,-3.089639 -1.278886,9.747759 -0.651719,19.02073 2.600191,25.634828 15.232378,30.981319 53.027554,23.090169 62.465776,-1.162438 2.452022,-6.300758 2.481064,-16.593564 0.458857,-27.470258 8.986584,3.211808 19.164344,3.394502 27.929114,-1.101258 -3.46495,-12.634262 -14.38049,-18.536897 -21.71925,-21.749836 -2.26826,-0.993059 -4.567118,-1.745281 -6.882855,-2.263696 10e-7,-0.552075 -0.06868,-1.068327 -0.244724,-1.560115 2.240272,-1.429678 3.76263,-4.252811 3.76263,-7.49467 0,-1.969248 -0.583372,-3.757329 -1.529524,-5.200382 0.472713,-0.730257 0.764762,-1.604961 0.764762,-2.539011 -2e-6,-2.579302 -2.101044,-4.680345 -4.680344,-4.680345 -0.35148,-1e-6 -0.680119,0.04868 -1.009487,0.122362 -1.179596,-3.135671 -4.188937,-5.383925 -7.739393,-5.383925 -2.438803,0 -4.630621,1.075737 -6.148688,2.753143 -1.311329,-0.859325 -2.832744,-1.376571 -4.435621,-1.376571 -1.038832,0 -2.03538,0.233808 -2.967277,0.611809 -1.412677,-2.649484 -3.905176,-4.40503 -6.729907,-4.40503 z\"],[9,\"id\",\"path3788\"],[7],[8],[0,\"\\n            \"],[6,\"path\"],[9,\"style\",\"fill:#C8C7D5;fill-rule:evenodd;stroke:#C8C7D5;stroke-width:2.8195641;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none\"],[9,\"d\",\"M 124.03601,65.175285 C 120.57106,52.541025 109.67037,46.643765 102.33162,43.430826 92.16977,38.981924 81.050068,39.382179 73.286856,43.860878 78.120142,62.148557 104.57192,75.159104 124.03601,65.175285 z\"],[9,\"id\",\"path3697\"],[9,\"sodipodi:nodetypes\",\"cscc\"],[7],[8],[0,\"\\n            \"],[6,\"path\"],[9,\"id\",\"path3695\"],[9,\"d\",\"M 5.093262,72.390853 C 6.06641,59.368906 15.601955,51.515192 22.166472,46.968611 31.256246,40.673034 42.210475,38.937873 50.661284,41.834332 49.430819,60.648349 26.043136,78.434751 5.093262,72.390853 z\"],[9,\"style\",\"fill:#C8C7D5;fill-rule:evenodd;stroke:#C8C7D5;stroke-width:2.8104136;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none\"],[7],[8],[0,\"\\n            \"],[6,\"path\"],[9,\"style\",\"fill:#C8C7D5;fill-rule:evenodd;stroke:#C8C7D5;stroke-width:2.57602835ffffff10;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none\"],[9,\"d\",\"M 95.63903,93.760857 C 102.88633,75.138078 89.21093,21.576874 62.76847,21.457723 40.251424,21.35626 22.370189,72.920541 33.191684,94.930509 48.424064,125.91184 86.200808,118.01347 95.63903,93.760857 z\"],[9,\"id\",\"path3638\"],[9,\"sodipodi:nodetypes\",\"csss\"],[7],[8],[0,\"\\n            \"],[6,\"path\"],[9,\"style\",\"fill:#C8C7D5;fill-opacity:1;fill-rule:nonzero;stroke:#C8C7D5;stroke-width:2.46970391;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;stroke-dashoffset:0;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate\"],[9,\"d\",\"m 64.47414,12.010346 c -1.747001,0 -3.354101,0.679444 -4.656421,1.826552 -0.822662,-0.722291 -1.881457,-1.157674 -3.061404,-1.157674 -2.579306,0 -4.682148,2.077118 -4.682147,4.656422 0,0.187347 0.0042,0.384369 0.02573,0.565973 -0.671413,0.140434 -1.315596,0.355927 -1.955181,0.617426 -1.679569,-2.107155 -4.058727,-3.395843 -6.688782,-3.395843 -4.759402,0 -8.674541,4.2864 -9.158486,9.801638 -2.194415,1.167022 -3.730282,3.797237 -3.730282,6.843138 10e-7,3.503551 2.02825,6.442345 4.759326,7.254755 1.191105,3.444852 4.040276,5.891274 7.357659,5.891274 1.189741,1e-6 2.330453,-0.342205 3.344391,-0.900414 2.194762,2.245313 5.035345,3.601652 8.155169,3.601652 4.885245,0 9.134558,-3.309755 11.216572,-8.155168 1.56868,1.473279 3.534259,2.341073 5.685464,2.341073 1.725475,-10e-7 3.324079,-0.587206 4.707873,-1.569291 1.140011,3.573915 4.036084,6.122808 7.434838,6.122808 1.658692,0 3.200485,-0.604258 4.476338,-1.646469 0.822663,0.722291 1.881454,1.157673 3.061404,1.157673 2.579302,0 4.682148,-2.102845 4.682148,-4.682147 0,-0.552076 -0.08121,-1.077502 -0.257261,-1.569291 2.240268,-1.429678 3.756006,-4.244431 3.756006,-7.48629 0,-1.969248 -0.571685,-3.779341 -1.517837,-5.222395 0.472709,-0.730257 0.746056,-1.587106 0.746056,-2.521156 0,-2.579302 -2.07712,-4.682147 -4.65642,-4.682147 -0.351481,0 -0.699676,0.05495 -1.029044,0.128631 -1.1796,-3.135673 -4.193095,-5.376752 -7.743551,-5.376752 -2.4388,0 -4.630467,1.049558 -6.148534,2.726964 -1.311332,-0.859325 -2.822009,-1.363482 -4.424886,-1.363482 -1.03883,0 -2.026603,0.239425 -2.958499,0.617427 -1.412678,-2.649486 -3.915503,-4.424887 -6.740234,-4.424887 z\"],[9,\"id\",\"path3643\"],[7],[8],[0,\"\\n            \"],[6,\"path\"],[9,\"style\",\"fill: #323040;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:3;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate\"],[9,\"id\",\"path3183\"],[9,\"sodipodi:cx\",\"72\"],[9,\"sodipodi:cy\",\"48\"],[9,\"sodipodi:rx\",\"4\"],[9,\"sodipodi:ry\",\"4\"],[9,\"d\",\"m 76,48 a 4,4 0 1 1 -8,0 4,4 0 1 1 8,0 z\"],[9,\"transform\",\"matrix(1.4077938,0.63339841,-0.63339841,1.4077938,-19.160477,-48.663084)\"],[7],[8],[0,\"\\n            \"],[6,\"path\"],[9,\"transform\",\"matrix(0.55763261,0.25089158,-0.25089158,0.55763261,25.499182,19.393293)\"],[9,\"d\",\"m 76,48 a 4,4 0 1 1 -8,0 4,4 0 1 1 8,0 z\"],[9,\"sodipodi:ry\",\"4\"],[9,\"sodipodi:rx\",\"4\"],[9,\"sodipodi:cy\",\"48\"],[9,\"sodipodi:cx\",\"72\"],[9,\"id\",\"path3185\"],[9,\"style\",\"fill:#C8C7D5;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:3;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate\"],[9,\"sodipodi:type\",\"arc\"],[7],[8],[0,\"\\n            \"],[6,\"path\"],[9,\"transform\",\"matrix(1.4077938,0.63339841,-0.63339841,1.4077938,6.1884772,-48.714859)\"],[9,\"d\",\"m 76,48 a 4,4 0 1 1 -8,0 4,4 0 1 1 8,0 z\"],[9,\"sodipodi:ry\",\"4\"],[9,\"sodipodi:rx\",\"4\"],[9,\"sodipodi:cy\",\"48\"],[9,\"sodipodi:cx\",\"72\"],[9,\"id\",\"path3195\"],[9,\"style\",\"fill: #323040;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:3;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate\"],[9,\"sodipodi:type\",\"arc\"],[7],[8],[0,\"\\n            \"],[6,\"path\"],[9,\"sodipodi:type\",\"arc\"],[9,\"style\",\"fill:#C8C7D5;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:3;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate\"],[9,\"id\",\"path3197\"],[9,\"sodipodi:cx\",\"72\"],[9,\"sodipodi:cy\",\"48\"],[9,\"sodipodi:rx\",\"4\"],[9,\"sodipodi:ry\",\"4\"],[9,\"d\",\"m 76,48 a 4,4 0 1 1 -8,0 4,4 0 1 1 8,0 z\"],[9,\"transform\",\"matrix(0.55763261,0.25089158,-0.25089158,0.55763261,50.848137,19.341517)\"],[7],[8],[0,\"\\n            \"],[6,\"path\"],[9,\"sodipodi:nodetypes\",\"cscc\"],[9,\"id\",\"path3771\"],[9,\"d\",\"m 62.730297,104.16926 c 0.254399,-2.9405 -0.94901,-4.815282 -2.342603,-6.794659 -1.795788,-2.550619 -3.837744,-2.891339 -5.969977,-3.468996 4.306096,2.273708 7.123485,6.232355 8.31258,10.263655 z\"],[9,\"style\",\"fill: #323040;fill-rule:evenodd;stroke:#C8C7D5;stroke-width:0.91852134px;stroke-linecap:round;stroke-linejoin:round;stroke-opacity:1\"],[9,\"inkscape:connector-curvature\",\"0\"],[7],[8],[0,\"\\n            \"],[6,\"path\"],[9,\"style\",\"fill: #C8C7D5;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:3;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate\"],[9,\"d\",\"m 57.582794,99.189411 c -1.04691,0.675729 -2.670798,0.02461 -3.624766,-1.45337 -0.953969,-1.477982 -0.878544,-3.225919 0.168366,-3.901647 1.046902,-0.675725 2.670798,-0.02461 3.624764,1.453368 0.953968,1.477986 0.878539,3.225924 -0.168364,3.901649 z\"],[9,\"id\",\"path3775\"],[9,\"inkscape:connector-curvature\",\"0\"],[7],[8],[0,\"\\n            \"],[6,\"path\"],[9,\"style\",\"fill: #323040;fill-rule:evenodd;stroke:#C8C7D5;stroke-width:0.97772896px;stroke-linecap:round;stroke-linejoin:round;stroke-opacity:1\"],[9,\"d\",\"m 68.925035,104.54034 c -0.407054,-3.11525 0.785669,-5.164853 2.175787,-7.334513 1.791312,-2.795819 3.947005,-3.252955 6.187703,-3.966252 -4.473746,2.61788 -7.286107,6.958495 -8.36349,11.300765 z\"],[9,\"id\",\"path3773\"],[9,\"sodipodi:nodetypes\",\"cscc\"],[9,\"inkscape:transform-center-x\",\"-7.3416612\"],[9,\"inkscape:transform-center-y\",\"-3.1426362\"],[9,\"inkscape:connector-curvature\",\"0\"],[7],[8],[0,\"\\n            \"],[6,\"path\"],[9,\"id\",\"path3778\"],[9,\"d\",\"m 77.646616,92.972253 c 1.066673,0.637145 1.202349,2.376414 0.302854,3.882303 -0.899499,1.505885 -2.495224,2.210956 -3.561897,1.573814 -1.066667,-0.637142 -1.202345,-2.376413 -0.302849,-3.882301 0.899495,-1.505888 2.495224,-2.210957 3.561892,-1.573816 z\"],[9,\"style\",\"fill: #C8C7D5;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:3;marker:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate\"],[9,\"inkscape:transform-center-x\",\"-2.0288668\"],[9,\"inkscape:transform-center-y\",\"1.2173202\"],[9,\"inkscape:connector-curvature\",\"0\"],[7],[8],[0,\"\\n          \"],[8],[0,\"\\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/application.hbs" } });
});
define("dummy/templates/components/code-block", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "7hTcwWv6", "block": "{\"symbols\":[\"&default\"],\"statements\":[[6,\"code\"],[10,\"class\",[18,\"languageClass\"],null],[7],[11,1],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/code-block.hbs" } });
});

define('dummy/config/environment', [], function() {
  var prefix = 'dummy';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("dummy/app")["default"].create({});
}
//# sourceMappingURL=dummy.map
