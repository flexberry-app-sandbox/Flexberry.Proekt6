'use strict';

define('ember-app/tests/acceptance/flexberry/i-i-s-proekt-\u0434\u043E\u043A-\u0441\u043C\u0435\u0442\u0430-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s proekt док смета l');

  (0, _qunit.test)('testing i-i-s-proekt-док-смета-l', function (assert) {
    var _this = this;

    visit('/i-i-s-proekt-док-смета-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-proekt-\u0434\u043E\u043A-\u0443\u0441\u043B\u043E\u0432-\u0434\u043E\u0433-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s proekt док услов дог l');

  (0, _qunit.test)('testing i-i-s-proekt-док-услов-дог-l', function (assert) {
    var _this = this;

    visit('/i-i-s-proekt-док-услов-дог-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-proekt-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440\u0435\u043D-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s proekt ед измерен l');

  (0, _qunit.test)('testing i-i-s-proekt-ед-измерен-l', function (assert) {
    var _this = this;

    visit('/i-i-s-proekt-ед-измерен-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-proekt-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s proekt номенклатура l');

  (0, _qunit.test)('testing i-i-s-proekt-номенклатура-l', function (assert) {
    var _this = this;

    visit('/i-i-s-proekt-номенклатура-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-proekt-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441-\u043C-\u0440-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s proekt объект с м р l');

  (0, _qunit.test)('testing i-i-s-proekt-объект-с-м-р-l', function (assert) {
    var _this = this;

    visit('/i-i-s-proekt-объект-с-м-р-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-proekt-\u043E\u0442-\u043F\u043E-\u0432\u044B\u043F-\u0434\u043E\u0433\u043E\u0432-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s proekt от по вып догов l');

  (0, _qunit.test)('testing i-i-s-proekt-от-по-вып-догов-l', function (assert) {
    var _this = this;

    visit('/i-i-s-proekt-от-по-вып-догов-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-proekt-\u043E\u0442\u0447-\u043E-\u0440\u0430\u0441-\u043E\u0441-\u043C\u0430\u0442-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s proekt отч о рас ос мат l');

  (0, _qunit.test)('testing i-i-s-proekt-отч-о-рас-ос-мат-l', function (assert) {
    var _this = this;

    visit('/i-i-s-proekt-отч-о-рас-ос-мат-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-proekt-\u0440\u0430\u0441\u0445-\u043C\u0430\u0442-\u0432-\u0441\u0442\u0440\u043E-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s proekt расх мат в стро l');

  (0, _qunit.test)('testing i-i-s-proekt-расх-мат-в-стро-l', function (assert) {
    var _this = this;

    visit('/i-i-s-proekt-расх-мат-в-стро-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-proekt-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s proekt сотрудники l');

  (0, _qunit.test)('testing i-i-s-proekt-сотрудники-l', function (assert) {
    var _this = this;

    visit('/i-i-s-proekt-сотрудники-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-proekt-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440\u0430\u0433-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s proekt спр контраг l');

  (0, _qunit.test)('testing i-i-s-proekt-спр-контраг-l', function (assert) {
    var _this = this;

    visit('/i-i-s-proekt-спр-контраг-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-proekt-\u0441\u043F\u0440\u0430-\u0434\u043E\u043B\u0436\u043D\u043E\u0441-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s proekt спра должнос l');

  (0, _qunit.test)('testing i-i-s-proekt-спра-должнос-l', function (assert) {
    var _this = this;

    visit('/i-i-s-proekt-спра-должнос-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-proekt-\u0442-\u0447-\u0441\u043C\u0435\u0442\u0430-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s proekt т ч смета l');

  (0, _qunit.test)('testing i-i-s-proekt-т-ч-смета-l', function (assert) {
    var _this = this;

    visit('/i-i-s-proekt-т-ч-смета-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application-offline.js should pass ESLint\n\n');
  });

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-proekt-\u0434\u043E\u043A-\u0441\u043C\u0435\u0442\u0430-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-proekt-\u0434\u043E\u043A-\u0441\u043C\u0435\u0442\u0430-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-proekt-\u0434\u043E\u043A-\u0441\u043C\u0435\u0442\u0430-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-proekt-\u0434\u043E\u043A-\u0441\u043C\u0435\u0442\u0430-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-proekt-\u0434\u043E\u043A-\u0441\u043C\u0435\u0442\u0430-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-proekt-\u0434\u043E\u043A-\u0441\u043C\u0435\u0442\u0430-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-proekt-\u0434\u043E\u043A-\u0443\u0441\u043B\u043E\u0432-\u0434\u043E\u0433-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-proekt-\u0434\u043E\u043A-\u0443\u0441\u043B\u043E\u0432-\u0434\u043E\u0433-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-proekt-\u0434\u043E\u043A-\u0443\u0441\u043B\u043E\u0432-\u0434\u043E\u0433-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-proekt-\u0434\u043E\u043A-\u0443\u0441\u043B\u043E\u0432-\u0434\u043E\u0433-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-proekt-\u0434\u043E\u043A-\u0443\u0441\u043B\u043E\u0432-\u0434\u043E\u0433-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-proekt-\u0434\u043E\u043A-\u0443\u0441\u043B\u043E\u0432-\u0434\u043E\u0433-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-proekt-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440\u0435\u043D-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-proekt-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440\u0435\u043D-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-proekt-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440\u0435\u043D-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-proekt-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440\u0435\u043D-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-proekt-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440\u0435\u043D-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-proekt-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440\u0435\u043D-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-proekt-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-proekt-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-proekt-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-proekt-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-proekt-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-proekt-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-proekt-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441-\u043C-\u0440-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-proekt-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441-\u043C-\u0440-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-proekt-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441-\u043C-\u0440-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-proekt-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441-\u043C-\u0440-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-proekt-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441-\u043C-\u0440-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-proekt-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441-\u043C-\u0440-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-proekt-\u043E\u0442-\u043F\u043E-\u0432\u044B\u043F-\u0434\u043E\u0433\u043E\u0432-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-proekt-\u043E\u0442-\u043F\u043E-\u0432\u044B\u043F-\u0434\u043E\u0433\u043E\u0432-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-proekt-\u043E\u0442-\u043F\u043E-\u0432\u044B\u043F-\u0434\u043E\u0433\u043E\u0432-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-proekt-\u043E\u0442-\u043F\u043E-\u0432\u044B\u043F-\u0434\u043E\u0433\u043E\u0432-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-proekt-\u043E\u0442-\u043F\u043E-\u0432\u044B\u043F-\u0434\u043E\u0433\u043E\u0432-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-proekt-\u043E\u0442-\u043F\u043E-\u0432\u044B\u043F-\u0434\u043E\u0433\u043E\u0432-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-proekt-\u043E\u0442\u0447-\u043E-\u0440\u0430\u0441-\u043E\u0441-\u043C\u0430\u0442-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-proekt-\u043E\u0442\u0447-\u043E-\u0440\u0430\u0441-\u043E\u0441-\u043C\u0430\u0442-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-proekt-\u043E\u0442\u0447-\u043E-\u0440\u0430\u0441-\u043E\u0441-\u043C\u0430\u0442-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-proekt-\u043E\u0442\u0447-\u043E-\u0440\u0430\u0441-\u043E\u0441-\u043C\u0430\u0442-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-proekt-\u043E\u0442\u0447-\u043E-\u0440\u0430\u0441-\u043E\u0441-\u043C\u0430\u0442-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-proekt-\u043E\u0442\u0447-\u043E-\u0440\u0430\u0441-\u043E\u0441-\u043C\u0430\u0442-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-proekt-\u0440\u0430\u0441\u0445-\u043C\u0430\u0442-\u0432-\u0441\u0442\u0440\u043E-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-proekt-\u0440\u0430\u0441\u0445-\u043C\u0430\u0442-\u0432-\u0441\u0442\u0440\u043E-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-proekt-\u0440\u0430\u0441\u0445-\u043C\u0430\u0442-\u0432-\u0441\u0442\u0440\u043E-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-proekt-\u0440\u0430\u0441\u0445-\u043C\u0430\u0442-\u0432-\u0441\u0442\u0440\u043E-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-proekt-\u0440\u0430\u0441\u0445-\u043C\u0430\u0442-\u0432-\u0441\u0442\u0440\u043E-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-proekt-\u0440\u0430\u0441\u0445-\u043C\u0430\u0442-\u0432-\u0441\u0442\u0440\u043E-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-proekt-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-proekt-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-proekt-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-proekt-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-proekt-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-proekt-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-proekt-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440\u0430\u0433-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-proekt-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440\u0430\u0433-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-proekt-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440\u0430\u0433-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-proekt-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440\u0430\u0433-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-proekt-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440\u0430\u0433-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-proekt-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440\u0430\u0433-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-proekt-\u0441\u043F\u0440\u0430-\u0434\u043E\u043B\u0436\u043D\u043E\u0441-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-proekt-\u0441\u043F\u0440\u0430-\u0434\u043E\u043B\u0436\u043D\u043E\u0441-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-proekt-\u0441\u043F\u0440\u0430-\u0434\u043E\u043B\u0436\u043D\u043E\u0441-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-proekt-\u0441\u043F\u0440\u0430-\u0434\u043E\u043B\u0436\u043D\u043E\u0441-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-proekt-\u0441\u043F\u0440\u0430-\u0434\u043E\u043B\u0436\u043D\u043E\u0441-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-proekt-\u0441\u043F\u0440\u0430-\u0434\u043E\u043B\u0436\u043D\u043E\u0441-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-proekt-\u0442-\u0447-\u0441\u043C\u0435\u0442\u0430-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-proekt-\u0442-\u0447-\u0441\u043C\u0435\u0442\u0430-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-proekt-\u0442-\u0447-\u0441\u043C\u0435\u0442\u0430-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-proekt-\u0442-\u0447-\u0441\u043C\u0435\u0442\u0430-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-proekt-\u0442-\u0447-\u0441\u043C\u0435\u0442\u0430-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-proekt-\u0442-\u0447-\u0441\u043C\u0435\u0442\u0430-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/index.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-proekt-\u0434\u043E\u043A-\u0441\u043C\u0435\u0442\u0430-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-proekt-\u0434\u043E\u043A-\u0441\u043C\u0435\u0442\u0430-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-proekt-\u0434\u043E\u043A-\u0441\u043C\u0435\u0442\u0430-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-proekt-\u0434\u043E\u043A-\u0441\u043C\u0435\u0442\u0430-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-proekt-\u0434\u043E\u043A-\u0443\u0441\u043B\u043E\u0432-\u0434\u043E\u0433-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-proekt-\u0434\u043E\u043A-\u0443\u0441\u043B\u043E\u0432-\u0434\u043E\u0433-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-proekt-\u0434\u043E\u043A-\u0443\u0441\u043B\u043E\u0432-\u0434\u043E\u0433-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-proekt-\u0434\u043E\u043A-\u0443\u0441\u043B\u043E\u0432-\u0434\u043E\u0433-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-proekt-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440\u0435\u043D-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-proekt-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440\u0435\u043D-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-proekt-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440\u0435\u043D-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-proekt-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440\u0435\u043D-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-proekt-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-proekt-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-proekt-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-proekt-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-proekt-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441-\u043C-\u0440-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-proekt-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441-\u043C-\u0440-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-proekt-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441-\u043C-\u0440-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-proekt-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441-\u043C-\u0440-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-proekt-\u043E\u0442-\u043F\u043E-\u0432\u044B\u043F-\u0434\u043E\u0433\u043E\u0432-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-proekt-\u043E\u0442-\u043F\u043E-\u0432\u044B\u043F-\u0434\u043E\u0433\u043E\u0432-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-proekt-\u043E\u0442-\u043F\u043E-\u0432\u044B\u043F-\u0434\u043E\u0433\u043E\u0432-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-proekt-\u043E\u0442-\u043F\u043E-\u0432\u044B\u043F-\u0434\u043E\u0433\u043E\u0432-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-proekt-\u043E\u0442\u0447-\u043E-\u0440\u0430\u0441-\u043E\u0441-\u043C\u0430\u0442-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-proekt-\u043E\u0442\u0447-\u043E-\u0440\u0430\u0441-\u043E\u0441-\u043C\u0430\u0442-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-proekt-\u043E\u0442\u0447-\u043E-\u0440\u0430\u0441-\u043E\u0441-\u043C\u0430\u0442-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-proekt-\u043E\u0442\u0447-\u043E-\u0440\u0430\u0441-\u043E\u0441-\u043C\u0430\u0442-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-proekt-\u0440\u0430\u0441\u0445-\u043C\u0430\u0442-\u0432-\u0441\u0442\u0440\u043E-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-proekt-\u0440\u0430\u0441\u0445-\u043C\u0430\u0442-\u0432-\u0441\u0442\u0440\u043E-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-proekt-\u0440\u0430\u0441\u0445-\u043C\u0430\u0442-\u0432-\u0441\u0442\u0440\u043E-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-proekt-\u0440\u0430\u0441\u0445-\u043C\u0430\u0442-\u0432-\u0441\u0442\u0440\u043E-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-proekt-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-proekt-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-proekt-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-proekt-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-proekt-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440\u0430\u0433-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-proekt-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440\u0430\u0433-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-proekt-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440\u0430\u0433-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-proekt-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440\u0430\u0433-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-proekt-\u0441\u043F\u0440\u0430-\u0434\u043E\u043B\u0436\u043D\u043E\u0441-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-proekt-\u0441\u043F\u0440\u0430-\u0434\u043E\u043B\u0436\u043D\u043E\u0441-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-proekt-\u0441\u043F\u0440\u0430-\u0434\u043E\u043B\u0436\u043D\u043E\u0441-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-proekt-\u0441\u043F\u0440\u0430-\u0434\u043E\u043B\u0436\u043D\u043E\u0441-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-proekt-\u0442-\u0447-\u0441\u043C\u0435\u0442\u0430-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-proekt-\u0442-\u0447-\u0441\u043C\u0435\u0442\u0430-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-proekt-\u0442-\u0447-\u0441\u043C\u0435\u0442\u0430-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-proekt-\u0442-\u0447-\u0441\u043C\u0435\u0442\u0430-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-proekt-\u0434\u043E\u043A-\u0441\u043C\u0435\u0442\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-proekt-\u0434\u043E\u043A-\u0441\u043C\u0435\u0442\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-proekt-\u0434\u043E\u043A-\u0443\u0441\u043B\u043E\u0432-\u0434\u043E\u0433.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-proekt-\u0434\u043E\u043A-\u0443\u0441\u043B\u043E\u0432-\u0434\u043E\u0433.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-proekt-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440\u0435\u043D.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-proekt-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440\u0435\u043D.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-proekt-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-proekt-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-proekt-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441-\u043C-\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-proekt-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441-\u043C-\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-proekt-\u043E\u0442-\u043F\u043E-\u0432\u044B\u043F-\u0434\u043E\u0433\u043E\u0432.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-proekt-\u043E\u0442-\u043F\u043E-\u0432\u044B\u043F-\u0434\u043E\u0433\u043E\u0432.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-proekt-\u043E\u0442\u0447-\u043E-\u0440\u0430\u0441-\u043E\u0441-\u043C\u0430\u0442.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-proekt-\u043E\u0442\u0447-\u043E-\u0440\u0430\u0441-\u043E\u0441-\u043C\u0430\u0442.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-proekt-\u0440\u0430\u0441\u0445-\u043C\u0430\u0442-\u0432-\u0441\u0442\u0440\u043E.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-proekt-\u0440\u0430\u0441\u0445-\u043C\u0430\u0442-\u0432-\u0441\u0442\u0440\u043E.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-proekt-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-proekt-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-proekt-\u0441\u043F\u0440\u0430-\u0434\u043E\u043B\u0436\u043D\u043E\u0441.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-proekt-\u0441\u043F\u0440\u0430-\u0434\u043E\u043B\u0436\u043D\u043E\u0441.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-proekt-\u0442-\u0447-\u0441\u043C\u0435\u0442\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-proekt-\u0442-\u0447-\u0441\u043C\u0435\u0442\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/translations.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/translations.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-proekt-\u0434\u043E\u043A-\u0441\u043C\u0435\u0442\u0430-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-proekt-\u0434\u043E\u043A-\u0441\u043C\u0435\u0442\u0430-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-proekt-\u0434\u043E\u043A-\u0441\u043C\u0435\u0442\u0430-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-proekt-\u0434\u043E\u043A-\u0441\u043C\u0435\u0442\u0430-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-proekt-\u0434\u043E\u043A-\u0443\u0441\u043B\u043E\u0432-\u0434\u043E\u0433-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-proekt-\u0434\u043E\u043A-\u0443\u0441\u043B\u043E\u0432-\u0434\u043E\u0433-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-proekt-\u0434\u043E\u043A-\u0443\u0441\u043B\u043E\u0432-\u0434\u043E\u0433-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-proekt-\u0434\u043E\u043A-\u0443\u0441\u043B\u043E\u0432-\u0434\u043E\u0433-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-proekt-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440\u0435\u043D-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-proekt-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440\u0435\u043D-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-proekt-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440\u0435\u043D-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-proekt-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440\u0435\u043D-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-proekt-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-proekt-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-proekt-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-proekt-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-proekt-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441-\u043C-\u0440-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-proekt-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441-\u043C-\u0440-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-proekt-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441-\u043C-\u0440-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-proekt-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441-\u043C-\u0440-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-proekt-\u043E\u0442-\u043F\u043E-\u0432\u044B\u043F-\u0434\u043E\u0433\u043E\u0432-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-proekt-\u043E\u0442-\u043F\u043E-\u0432\u044B\u043F-\u0434\u043E\u0433\u043E\u0432-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-proekt-\u043E\u0442-\u043F\u043E-\u0432\u044B\u043F-\u0434\u043E\u0433\u043E\u0432-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-proekt-\u043E\u0442-\u043F\u043E-\u0432\u044B\u043F-\u0434\u043E\u0433\u043E\u0432-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-proekt-\u043E\u0442\u0447-\u043E-\u0440\u0430\u0441-\u043E\u0441-\u043C\u0430\u0442-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-proekt-\u043E\u0442\u0447-\u043E-\u0440\u0430\u0441-\u043E\u0441-\u043C\u0430\u0442-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-proekt-\u043E\u0442\u0447-\u043E-\u0440\u0430\u0441-\u043E\u0441-\u043C\u0430\u0442-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-proekt-\u043E\u0442\u0447-\u043E-\u0440\u0430\u0441-\u043E\u0441-\u043C\u0430\u0442-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-proekt-\u0440\u0430\u0441\u0445-\u043C\u0430\u0442-\u0432-\u0441\u0442\u0440\u043E-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-proekt-\u0440\u0430\u0441\u0445-\u043C\u0430\u0442-\u0432-\u0441\u0442\u0440\u043E-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-proekt-\u0440\u0430\u0441\u0445-\u043C\u0430\u0442-\u0432-\u0441\u0442\u0440\u043E-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-proekt-\u0440\u0430\u0441\u0445-\u043C\u0430\u0442-\u0432-\u0441\u0442\u0440\u043E-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-proekt-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-proekt-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-proekt-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-proekt-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-proekt-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440\u0430\u0433-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-proekt-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440\u0430\u0433-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-proekt-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440\u0430\u0433-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-proekt-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440\u0430\u0433-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-proekt-\u0441\u043F\u0440\u0430-\u0434\u043E\u043B\u0436\u043D\u043E\u0441-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-proekt-\u0441\u043F\u0440\u0430-\u0434\u043E\u043B\u0436\u043D\u043E\u0441-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-proekt-\u0441\u043F\u0440\u0430-\u0434\u043E\u043B\u0436\u043D\u043E\u0441-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-proekt-\u0441\u043F\u0440\u0430-\u0434\u043E\u043B\u0436\u043D\u043E\u0441-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-proekt-\u0442-\u0447-\u0441\u043C\u0435\u0442\u0430-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-proekt-\u0442-\u0447-\u0441\u043C\u0435\u0442\u0430-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-proekt-\u0442-\u0447-\u0441\u043C\u0435\u0442\u0430-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-proekt-\u0442-\u0447-\u0441\u043C\u0435\u0442\u0430-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-proekt-\u0434\u043E\u043A-\u0441\u043C\u0435\u0442\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-proekt-\u0434\u043E\u043A-\u0441\u043C\u0435\u0442\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-proekt-\u0434\u043E\u043A-\u0443\u0441\u043B\u043E\u0432-\u0434\u043E\u0433.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-proekt-\u0434\u043E\u043A-\u0443\u0441\u043B\u043E\u0432-\u0434\u043E\u0433.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-proekt-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440\u0435\u043D.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-proekt-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440\u0435\u043D.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-proekt-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-proekt-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-proekt-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441-\u043C-\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-proekt-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441-\u043C-\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-proekt-\u043E\u0442-\u043F\u043E-\u0432\u044B\u043F-\u0434\u043E\u0433\u043E\u0432.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-proekt-\u043E\u0442-\u043F\u043E-\u0432\u044B\u043F-\u0434\u043E\u0433\u043E\u0432.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-proekt-\u043E\u0442\u0447-\u043E-\u0440\u0430\u0441-\u043E\u0441-\u043C\u0430\u0442.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-proekt-\u043E\u0442\u0447-\u043E-\u0440\u0430\u0441-\u043E\u0441-\u043C\u0430\u0442.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-proekt-\u0440\u0430\u0441\u0445-\u043C\u0430\u0442-\u0432-\u0441\u0442\u0440\u043E.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-proekt-\u0440\u0430\u0441\u0445-\u043C\u0430\u0442-\u0432-\u0441\u0442\u0440\u043E.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-proekt-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-proekt-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-proekt-\u0441\u043F\u0440\u0430-\u0434\u043E\u043B\u0436\u043D\u043E\u0441.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-proekt-\u0441\u043F\u0440\u0430-\u0434\u043E\u043B\u0436\u043D\u043E\u0441.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-proekt-\u0442-\u0447-\u0441\u043C\u0435\u0442\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-proekt-\u0442-\u0447-\u0441\u043C\u0435\u0442\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/translations.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/translations.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-proekt-\u0434\u043E\u043A-\u0441\u043C\u0435\u0442\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-proekt-\u0434\u043E\u043A-\u0441\u043C\u0435\u0442\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-proekt-\u0434\u043E\u043A-\u0443\u0441\u043B\u043E\u0432-\u0434\u043E\u0433.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-proekt-\u0434\u043E\u043A-\u0443\u0441\u043B\u043E\u0432-\u0434\u043E\u0433.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-proekt-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440\u0435\u043D.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-proekt-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440\u0435\u043D.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-proekt-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-proekt-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-proekt-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441-\u043C-\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-proekt-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441-\u043C-\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-proekt-\u043E\u0442-\u043F\u043E-\u0432\u044B\u043F-\u0434\u043E\u0433\u043E\u0432.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-proekt-\u043E\u0442-\u043F\u043E-\u0432\u044B\u043F-\u0434\u043E\u0433\u043E\u0432.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-proekt-\u043E\u0442\u0447-\u043E-\u0440\u0430\u0441-\u043E\u0441-\u043C\u0430\u0442.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-proekt-\u043E\u0442\u0447-\u043E-\u0440\u0430\u0441-\u043E\u0441-\u043C\u0430\u0442.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-proekt-\u0440\u0430\u0441\u0445-\u043C\u0430\u0442-\u0432-\u0441\u0442\u0440\u043E.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-proekt-\u0440\u0430\u0441\u0445-\u043C\u0430\u0442-\u0432-\u0441\u0442\u0440\u043E.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-proekt-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-proekt-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-proekt-\u0441\u043F\u0440\u0430-\u0434\u043E\u043B\u0436\u043D\u043E\u0441.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-proekt-\u0441\u043F\u0440\u0430-\u0434\u043E\u043B\u0436\u043D\u043E\u0441.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-proekt-\u0442-\u0447-\u0441\u043C\u0435\u0442\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-proekt-\u0442-\u0447-\u0441\u043C\u0435\u0442\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-proekt-\u0434\u043E\u043A-\u0441\u043C\u0435\u0442\u0430-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-proekt-\u0434\u043E\u043A-\u0441\u043C\u0435\u0442\u0430-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-proekt-\u0434\u043E\u043A-\u0441\u043C\u0435\u0442\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-proekt-\u0434\u043E\u043A-\u0441\u043C\u0435\u0442\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-proekt-\u0434\u043E\u043A-\u0443\u0441\u043B\u043E\u0432-\u0434\u043E\u0433-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-proekt-\u0434\u043E\u043A-\u0443\u0441\u043B\u043E\u0432-\u0434\u043E\u0433-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-proekt-\u0434\u043E\u043A-\u0443\u0441\u043B\u043E\u0432-\u0434\u043E\u0433.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-proekt-\u0434\u043E\u043A-\u0443\u0441\u043B\u043E\u0432-\u0434\u043E\u0433.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-proekt-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440\u0435\u043D-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-proekt-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440\u0435\u043D-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-proekt-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440\u0435\u043D.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-proekt-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440\u0435\u043D.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-proekt-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-proekt-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-proekt-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-proekt-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-proekt-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441-\u043C-\u0440-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-proekt-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441-\u043C-\u0440-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-proekt-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441-\u043C-\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-proekt-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441-\u043C-\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-proekt-\u043E\u0442-\u043F\u043E-\u0432\u044B\u043F-\u0434\u043E\u0433\u043E\u0432-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-proekt-\u043E\u0442-\u043F\u043E-\u0432\u044B\u043F-\u0434\u043E\u0433\u043E\u0432-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-proekt-\u043E\u0442-\u043F\u043E-\u0432\u044B\u043F-\u0434\u043E\u0433\u043E\u0432.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-proekt-\u043E\u0442-\u043F\u043E-\u0432\u044B\u043F-\u0434\u043E\u0433\u043E\u0432.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-proekt-\u043E\u0442\u0447-\u043E-\u0440\u0430\u0441-\u043E\u0441-\u043C\u0430\u0442-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-proekt-\u043E\u0442\u0447-\u043E-\u0440\u0430\u0441-\u043E\u0441-\u043C\u0430\u0442-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-proekt-\u043E\u0442\u0447-\u043E-\u0440\u0430\u0441-\u043E\u0441-\u043C\u0430\u0442.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-proekt-\u043E\u0442\u0447-\u043E-\u0440\u0430\u0441-\u043E\u0441-\u043C\u0430\u0442.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-proekt-\u0440\u0430\u0441\u0445-\u043C\u0430\u0442-\u0432-\u0441\u0442\u0440\u043E-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-proekt-\u0440\u0430\u0441\u0445-\u043C\u0430\u0442-\u0432-\u0441\u0442\u0440\u043E-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-proekt-\u0440\u0430\u0441\u0445-\u043C\u0430\u0442-\u0432-\u0441\u0442\u0440\u043E.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-proekt-\u0440\u0430\u0441\u0445-\u043C\u0430\u0442-\u0432-\u0441\u0442\u0440\u043E.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-proekt-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-proekt-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-proekt-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-proekt-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-proekt-\u0441\u043F\u0440\u0430-\u0434\u043E\u043B\u0436\u043D\u043E\u0441-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-proekt-\u0441\u043F\u0440\u0430-\u0434\u043E\u043B\u0436\u043D\u043E\u0441-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-proekt-\u0441\u043F\u0440\u0430-\u0434\u043E\u043B\u0436\u043D\u043E\u0441.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-proekt-\u0441\u043F\u0440\u0430-\u0434\u043E\u043B\u0436\u043D\u043E\u0441.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-proekt-\u0442-\u0447-\u0441\u043C\u0435\u0442\u0430-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-proekt-\u0442-\u0447-\u0441\u043C\u0435\u0442\u0430-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-proekt-\u0442-\u0447-\u0441\u043C\u0435\u0442\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-proekt-\u0442-\u0447-\u0441\u043C\u0435\u0442\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-proekt-\u0434\u043E\u043A-\u0441\u043C\u0435\u0442\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-proekt-\u0434\u043E\u043A-\u0441\u043C\u0435\u0442\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-proekt-\u0434\u043E\u043A-\u0443\u0441\u043B\u043E\u0432-\u0434\u043E\u0433.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-proekt-\u0434\u043E\u043A-\u0443\u0441\u043B\u043E\u0432-\u0434\u043E\u0433.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-proekt-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440\u0435\u043D.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-proekt-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440\u0435\u043D.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-proekt-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-proekt-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-proekt-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441-\u043C-\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-proekt-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441-\u043C-\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-proekt-\u043E\u0442-\u043F\u043E-\u0432\u044B\u043F-\u0434\u043E\u0433\u043E\u0432.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-proekt-\u043E\u0442-\u043F\u043E-\u0432\u044B\u043F-\u0434\u043E\u0433\u043E\u0432.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-proekt-\u043E\u0442\u0447-\u043E-\u0440\u0430\u0441-\u043E\u0441-\u043C\u0430\u0442.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-proekt-\u043E\u0442\u0447-\u043E-\u0440\u0430\u0441-\u043E\u0441-\u043C\u0430\u0442.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-proekt-\u0440\u0430\u0441\u0445-\u043C\u0430\u0442-\u0432-\u0441\u0442\u0440\u043E.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-proekt-\u0440\u0430\u0441\u0445-\u043C\u0430\u0442-\u0432-\u0441\u0442\u0440\u043E.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-proekt-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-proekt-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-proekt-\u0441\u043F\u0440\u0430-\u0434\u043E\u043B\u0436\u043D\u043E\u0441.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-proekt-\u0441\u043F\u0440\u0430-\u0434\u043E\u043B\u0436\u043D\u043E\u0441.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-proekt-\u0442-\u0447-\u0441\u043C\u0435\u0442\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-proekt-\u0442-\u0447-\u0441\u043C\u0435\u0442\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('models/\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-proekt-\u0434\u043E\u043A-\u0441\u043C\u0435\u0442\u0430-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-proekt-\u0434\u043E\u043A-\u0441\u043C\u0435\u0442\u0430-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-proekt-\u0434\u043E\u043A-\u0441\u043C\u0435\u0442\u0430-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-proekt-\u0434\u043E\u043A-\u0441\u043C\u0435\u0442\u0430-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-proekt-\u0434\u043E\u043A-\u0441\u043C\u0435\u0442\u0430-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-proekt-\u0434\u043E\u043A-\u0441\u043C\u0435\u0442\u0430-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-proekt-\u0434\u043E\u043A-\u0443\u0441\u043B\u043E\u0432-\u0434\u043E\u0433-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-proekt-\u0434\u043E\u043A-\u0443\u0441\u043B\u043E\u0432-\u0434\u043E\u0433-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-proekt-\u0434\u043E\u043A-\u0443\u0441\u043B\u043E\u0432-\u0434\u043E\u0433-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-proekt-\u0434\u043E\u043A-\u0443\u0441\u043B\u043E\u0432-\u0434\u043E\u0433-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-proekt-\u0434\u043E\u043A-\u0443\u0441\u043B\u043E\u0432-\u0434\u043E\u0433-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-proekt-\u0434\u043E\u043A-\u0443\u0441\u043B\u043E\u0432-\u0434\u043E\u0433-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-proekt-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440\u0435\u043D-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-proekt-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440\u0435\u043D-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-proekt-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440\u0435\u043D-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-proekt-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440\u0435\u043D-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-proekt-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440\u0435\u043D-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-proekt-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440\u0435\u043D-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-proekt-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-proekt-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-proekt-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-proekt-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-proekt-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-proekt-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-proekt-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441-\u043C-\u0440-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-proekt-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441-\u043C-\u0440-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-proekt-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441-\u043C-\u0440-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-proekt-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441-\u043C-\u0440-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-proekt-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441-\u043C-\u0440-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-proekt-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441-\u043C-\u0440-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-proekt-\u043E\u0442-\u043F\u043E-\u0432\u044B\u043F-\u0434\u043E\u0433\u043E\u0432-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-proekt-\u043E\u0442-\u043F\u043E-\u0432\u044B\u043F-\u0434\u043E\u0433\u043E\u0432-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-proekt-\u043E\u0442-\u043F\u043E-\u0432\u044B\u043F-\u0434\u043E\u0433\u043E\u0432-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-proekt-\u043E\u0442-\u043F\u043E-\u0432\u044B\u043F-\u0434\u043E\u0433\u043E\u0432-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-proekt-\u043E\u0442-\u043F\u043E-\u0432\u044B\u043F-\u0434\u043E\u0433\u043E\u0432-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-proekt-\u043E\u0442-\u043F\u043E-\u0432\u044B\u043F-\u0434\u043E\u0433\u043E\u0432-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-proekt-\u043E\u0442\u0447-\u043E-\u0440\u0430\u0441-\u043E\u0441-\u043C\u0430\u0442-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-proekt-\u043E\u0442\u0447-\u043E-\u0440\u0430\u0441-\u043E\u0441-\u043C\u0430\u0442-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-proekt-\u043E\u0442\u0447-\u043E-\u0440\u0430\u0441-\u043E\u0441-\u043C\u0430\u0442-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-proekt-\u043E\u0442\u0447-\u043E-\u0440\u0430\u0441-\u043E\u0441-\u043C\u0430\u0442-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-proekt-\u043E\u0442\u0447-\u043E-\u0440\u0430\u0441-\u043E\u0441-\u043C\u0430\u0442-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-proekt-\u043E\u0442\u0447-\u043E-\u0440\u0430\u0441-\u043E\u0441-\u043C\u0430\u0442-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-proekt-\u0440\u0430\u0441\u0445-\u043C\u0430\u0442-\u0432-\u0441\u0442\u0440\u043E-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-proekt-\u0440\u0430\u0441\u0445-\u043C\u0430\u0442-\u0432-\u0441\u0442\u0440\u043E-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-proekt-\u0440\u0430\u0441\u0445-\u043C\u0430\u0442-\u0432-\u0441\u0442\u0440\u043E-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-proekt-\u0440\u0430\u0441\u0445-\u043C\u0430\u0442-\u0432-\u0441\u0442\u0440\u043E-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-proekt-\u0440\u0430\u0441\u0445-\u043C\u0430\u0442-\u0432-\u0441\u0442\u0440\u043E-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-proekt-\u0440\u0430\u0441\u0445-\u043C\u0430\u0442-\u0432-\u0441\u0442\u0440\u043E-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-proekt-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-proekt-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-proekt-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-proekt-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-proekt-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-proekt-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-proekt-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440\u0430\u0433-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-proekt-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440\u0430\u0433-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-proekt-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440\u0430\u0433-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-proekt-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440\u0430\u0433-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-proekt-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440\u0430\u0433-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-proekt-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440\u0430\u0433-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-proekt-\u0441\u043F\u0440\u0430-\u0434\u043E\u043B\u0436\u043D\u043E\u0441-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-proekt-\u0441\u043F\u0440\u0430-\u0434\u043E\u043B\u0436\u043D\u043E\u0441-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-proekt-\u0441\u043F\u0440\u0430-\u0434\u043E\u043B\u0436\u043D\u043E\u0441-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-proekt-\u0441\u043F\u0440\u0430-\u0434\u043E\u043B\u0436\u043D\u043E\u0441-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-proekt-\u0441\u043F\u0440\u0430-\u0434\u043E\u043B\u0436\u043D\u043E\u0441-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-proekt-\u0441\u043F\u0440\u0430-\u0434\u043E\u043B\u0436\u043D\u043E\u0441-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-proekt-\u0442-\u0447-\u0441\u043C\u0435\u0442\u0430-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-proekt-\u0442-\u0447-\u0441\u043C\u0435\u0442\u0430-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-proekt-\u0442-\u0447-\u0441\u043C\u0435\u0442\u0430-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-proekt-\u0442-\u0447-\u0441\u043C\u0435\u0442\u0430-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-proekt-\u0442-\u0447-\u0441\u043C\u0435\u0442\u0430-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-proekt-\u0442-\u0447-\u0441\u043C\u0435\u0442\u0430-l.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/application-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-proekt-\u0434\u043E\u043A-\u0441\u043C\u0435\u0442\u0430-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-proekt-\u0434\u043E\u043A-\u0441\u043C\u0435\u0442\u0430-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-proekt-\u0434\u043E\u043A-\u0441\u043C\u0435\u0442\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-proekt-\u0434\u043E\u043A-\u0441\u043C\u0435\u0442\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-proekt-\u0434\u043E\u043A-\u0443\u0441\u043B\u043E\u0432-\u0434\u043E\u0433-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-proekt-\u0434\u043E\u043A-\u0443\u0441\u043B\u043E\u0432-\u0434\u043E\u0433-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-proekt-\u0434\u043E\u043A-\u0443\u0441\u043B\u043E\u0432-\u0434\u043E\u0433.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-proekt-\u0434\u043E\u043A-\u0443\u0441\u043B\u043E\u0432-\u0434\u043E\u0433.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-proekt-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440\u0435\u043D-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-proekt-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440\u0435\u043D-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-proekt-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440\u0435\u043D.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-proekt-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440\u0435\u043D.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-proekt-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-proekt-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-proekt-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-proekt-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-proekt-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441-\u043C-\u0440-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-proekt-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441-\u043C-\u0440-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-proekt-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441-\u043C-\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-proekt-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441-\u043C-\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-proekt-\u043E\u0442-\u043F\u043E-\u0432\u044B\u043F-\u0434\u043E\u0433\u043E\u0432-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-proekt-\u043E\u0442-\u043F\u043E-\u0432\u044B\u043F-\u0434\u043E\u0433\u043E\u0432-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-proekt-\u043E\u0442-\u043F\u043E-\u0432\u044B\u043F-\u0434\u043E\u0433\u043E\u0432.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-proekt-\u043E\u0442-\u043F\u043E-\u0432\u044B\u043F-\u0434\u043E\u0433\u043E\u0432.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-proekt-\u043E\u0442\u0447-\u043E-\u0440\u0430\u0441-\u043E\u0441-\u043C\u0430\u0442-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-proekt-\u043E\u0442\u0447-\u043E-\u0440\u0430\u0441-\u043E\u0441-\u043C\u0430\u0442-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-proekt-\u043E\u0442\u0447-\u043E-\u0440\u0430\u0441-\u043E\u0441-\u043C\u0430\u0442.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-proekt-\u043E\u0442\u0447-\u043E-\u0440\u0430\u0441-\u043E\u0441-\u043C\u0430\u0442.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-proekt-\u0440\u0430\u0441\u0445-\u043C\u0430\u0442-\u0432-\u0441\u0442\u0440\u043E-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-proekt-\u0440\u0430\u0441\u0445-\u043C\u0430\u0442-\u0432-\u0441\u0442\u0440\u043E-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-proekt-\u0440\u0430\u0441\u0445-\u043C\u0430\u0442-\u0432-\u0441\u0442\u0440\u043E.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-proekt-\u0440\u0430\u0441\u0445-\u043C\u0430\u0442-\u0432-\u0441\u0442\u0440\u043E.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-proekt-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-proekt-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-proekt-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-proekt-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-proekt-\u0441\u043F\u0440\u0430-\u0434\u043E\u043B\u0436\u043D\u043E\u0441-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-proekt-\u0441\u043F\u0440\u0430-\u0434\u043E\u043B\u0436\u043D\u043E\u0441-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-proekt-\u0441\u043F\u0440\u0430-\u0434\u043E\u043B\u0436\u043D\u043E\u0441.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-proekt-\u0441\u043F\u0440\u0430-\u0434\u043E\u043B\u0436\u043D\u043E\u0441.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-proekt-\u0442-\u0447-\u0441\u043C\u0435\u0442\u0430-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-proekt-\u0442-\u0447-\u0441\u043C\u0435\u0442\u0430-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-proekt-\u0442-\u0447-\u0441\u043C\u0435\u0442\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-proekt-\u0442-\u0447-\u0441\u043C\u0435\u0442\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('services/offline-globals.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/offline-globals.js should pass ESLint\n\n');
  });

  QUnit.test('services/store.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/store.js should pass ESLint\n\n');
  });
});
define('ember-app/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    Ember.run(application, 'destroy');
  }
});
define('ember-app/tests/helpers/ember-i18n/test-helpers', ['ember-i18n/test-support/-private/t', 'ember-i18n/test-support/-private/assert-translation'], function (_t2, _assertTranslation2) {
  'use strict';

  // example usage: find(`.header:contains(${t('welcome_message')})`)
  Ember.Test.registerHelper('t', function (app, key, interpolations) {
    return (0, _t2.default)(app.__container__, key, interpolations);
  });

  // example usage: expectTranslation('.header', 'welcome_message');
  Ember.Test.registerHelper('expectTranslation', function (app, element, key, interpolations) {
    var text = (0, _t2.default)(app.__container__, key, interpolations);

    (0, _assertTranslation2.default)(element, key, text);
  });
});
define('ember-app/tests/helpers/ember-prop-types', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.createComponent = createComponent;

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  var VERSION = Ember.VERSION;


  /**
   * Determine if we are on a version of Ember that includes Glimmer 2
   * @returns {Boolean} whether or not we are on Glimmer 2
   */
  function isGlimmer2() {
    var _VERSION$split = VERSION.split('.'),
        _VERSION$split2 = _slicedToArray(_VERSION$split, 2),
        major = _VERSION$split2[0],
        minor = _VERSION$split2[1];

    return parseInt(major) > 1 && parseInt(minor) > 9;
  }

  /**
   * Programitcally instantiate instance of component class
   * @param {Ember.Component} component - component class to instantiate
   * @returns {Ember.Component} instance of component class
   */
  function createComponent(component) {
    if (isGlimmer2()) {
      return component.create({ renderer: {} });
    }

    return component.create();
  }
});
define('ember-app/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember-app/tests/helpers/start-app', 'ember-app/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Ember.RSVP.resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };
});
define('ember-app/tests/helpers/start-app', ['exports', 'ember-app/app', 'ember-app/config/environment', 'ember-flexberry/test-support'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = Ember.merge({}, _environment.default.APP);
    attributes.autoboot = true;
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('ember-app/tests/test-helper', ['ember-app/app', 'ember-app/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('ember-app/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('acceptance/flexberry/i-i-s-proekt-\u0434\u043E\u043A-\u0441\u043C\u0435\u0442\u0430-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-proekt-\u0434\u043E\u043A-\u0441\u043C\u0435\u0442\u0430-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-proekt-\u0434\u043E\u043A-\u0443\u0441\u043B\u043E\u0432-\u0434\u043E\u0433-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-proekt-\u0434\u043E\u043A-\u0443\u0441\u043B\u043E\u0432-\u0434\u043E\u0433-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-proekt-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440\u0435\u043D-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-proekt-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440\u0435\u043D-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-proekt-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-proekt-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-proekt-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441-\u043C-\u0440-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-proekt-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441-\u043C-\u0440-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-proekt-\u043E\u0442-\u043F\u043E-\u0432\u044B\u043F-\u0434\u043E\u0433\u043E\u0432-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-proekt-\u043E\u0442-\u043F\u043E-\u0432\u044B\u043F-\u0434\u043E\u0433\u043E\u0432-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-proekt-\u043E\u0442\u0447-\u043E-\u0440\u0430\u0441-\u043E\u0441-\u043C\u0430\u0442-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-proekt-\u043E\u0442\u0447-\u043E-\u0440\u0430\u0441-\u043E\u0441-\u043C\u0430\u0442-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-proekt-\u0440\u0430\u0441\u0445-\u043C\u0430\u0442-\u0432-\u0441\u0442\u0440\u043E-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-proekt-\u0440\u0430\u0441\u0445-\u043C\u0430\u0442-\u0432-\u0441\u0442\u0440\u043E-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-proekt-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-proekt-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-proekt-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440\u0430\u0433-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-proekt-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440\u0430\u0433-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-proekt-\u0441\u043F\u0440\u0430-\u0434\u043E\u043B\u0436\u043D\u043E\u0441-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-proekt-\u0441\u043F\u0440\u0430-\u0434\u043E\u043B\u0436\u043D\u043E\u0441-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-proekt-\u0442-\u0447-\u0441\u043C\u0435\u0442\u0430-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-proekt-\u0442-\u0447-\u0441\u043C\u0435\u0442\u0430-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-proekt-\u0434\u043E\u043A-\u0441\u043C\u0435\u0442\u0430-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-proekt-\u0434\u043E\u043A-\u0441\u043C\u0435\u0442\u0430-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-proekt-\u0434\u043E\u043A-\u0441\u043C\u0435\u0442\u0430-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-proekt-\u0434\u043E\u043A-\u0441\u043C\u0435\u0442\u0430-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-proekt-\u0434\u043E\u043A-\u0443\u0441\u043B\u043E\u0432-\u0434\u043E\u0433-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-proekt-\u0434\u043E\u043A-\u0443\u0441\u043B\u043E\u0432-\u0434\u043E\u0433-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-proekt-\u0434\u043E\u043A-\u0443\u0441\u043B\u043E\u0432-\u0434\u043E\u0433-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-proekt-\u0434\u043E\u043A-\u0443\u0441\u043B\u043E\u0432-\u0434\u043E\u0433-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-proekt-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440\u0435\u043D-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-proekt-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440\u0435\u043D-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-proekt-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440\u0435\u043D-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-proekt-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440\u0435\u043D-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-proekt-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-proekt-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-proekt-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-proekt-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-proekt-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441-\u043C-\u0440-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-proekt-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441-\u043C-\u0440-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-proekt-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441-\u043C-\u0440-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-proekt-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441-\u043C-\u0440-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-proekt-\u043E\u0442-\u043F\u043E-\u0432\u044B\u043F-\u0434\u043E\u0433\u043E\u0432-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-proekt-\u043E\u0442-\u043F\u043E-\u0432\u044B\u043F-\u0434\u043E\u0433\u043E\u0432-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-proekt-\u043E\u0442-\u043F\u043E-\u0432\u044B\u043F-\u0434\u043E\u0433\u043E\u0432-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-proekt-\u043E\u0442-\u043F\u043E-\u0432\u044B\u043F-\u0434\u043E\u0433\u043E\u0432-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-proekt-\u043E\u0442\u0447-\u043E-\u0440\u0430\u0441-\u043E\u0441-\u043C\u0430\u0442-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-proekt-\u043E\u0442\u0447-\u043E-\u0440\u0430\u0441-\u043E\u0441-\u043C\u0430\u0442-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-proekt-\u043E\u0442\u0447-\u043E-\u0440\u0430\u0441-\u043E\u0441-\u043C\u0430\u0442-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-proekt-\u043E\u0442\u0447-\u043E-\u0440\u0430\u0441-\u043E\u0441-\u043C\u0430\u0442-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-proekt-\u0440\u0430\u0441\u0445-\u043C\u0430\u0442-\u0432-\u0441\u0442\u0440\u043E-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-proekt-\u0440\u0430\u0441\u0445-\u043C\u0430\u0442-\u0432-\u0441\u0442\u0440\u043E-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-proekt-\u0440\u0430\u0441\u0445-\u043C\u0430\u0442-\u0432-\u0441\u0442\u0440\u043E-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-proekt-\u0440\u0430\u0441\u0445-\u043C\u0430\u0442-\u0432-\u0441\u0442\u0440\u043E-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-proekt-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-proekt-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-proekt-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-proekt-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-proekt-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440\u0430\u0433-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-proekt-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440\u0430\u0433-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-proekt-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440\u0430\u0433-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-proekt-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440\u0430\u0433-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-proekt-\u0441\u043F\u0440\u0430-\u0434\u043E\u043B\u0436\u043D\u043E\u0441-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-proekt-\u0441\u043F\u0440\u0430-\u0434\u043E\u043B\u0436\u043D\u043E\u0441-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-proekt-\u0441\u043F\u0440\u0430-\u0434\u043E\u043B\u0436\u043D\u043E\u0441-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-proekt-\u0441\u043F\u0440\u0430-\u0434\u043E\u043B\u0436\u043D\u043E\u0441-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-proekt-\u0442-\u0447-\u0441\u043C\u0435\u0442\u0430-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-proekt-\u0442-\u0447-\u0441\u043C\u0435\u0442\u0430-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-proekt-\u0442-\u0447-\u0441\u043C\u0435\u0442\u0430-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-proekt-\u0442-\u0447-\u0441\u043C\u0435\u0442\u0430-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-proekt-\u0434\u043E\u043A-\u0441\u043C\u0435\u0442\u0430-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-proekt-\u0434\u043E\u043A-\u0441\u043C\u0435\u0442\u0430-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-proekt-\u0434\u043E\u043A-\u0443\u0441\u043B\u043E\u0432-\u0434\u043E\u0433-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-proekt-\u0434\u043E\u043A-\u0443\u0441\u043B\u043E\u0432-\u0434\u043E\u0433-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-proekt-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440\u0435\u043D-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-proekt-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440\u0435\u043D-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-proekt-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-proekt-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-proekt-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441-\u043C-\u0440-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-proekt-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441-\u043C-\u0440-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-proekt-\u043E\u0442-\u043F\u043E-\u0432\u044B\u043F-\u0434\u043E\u0433\u043E\u0432-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-proekt-\u043E\u0442-\u043F\u043E-\u0432\u044B\u043F-\u0434\u043E\u0433\u043E\u0432-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-proekt-\u043E\u0442\u0447-\u043E-\u0440\u0430\u0441-\u043E\u0441-\u043C\u0430\u0442-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-proekt-\u043E\u0442\u0447-\u043E-\u0440\u0430\u0441-\u043E\u0441-\u043C\u0430\u0442-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-proekt-\u0440\u0430\u0441\u0445-\u043C\u0430\u0442-\u0432-\u0441\u0442\u0440\u043E-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-proekt-\u0440\u0430\u0441\u0445-\u043C\u0430\u0442-\u0432-\u0441\u0442\u0440\u043E-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-proekt-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-proekt-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-proekt-\u0441\u043F\u0440\u0430-\u0434\u043E\u043B\u0436\u043D\u043E\u0441-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-proekt-\u0441\u043F\u0440\u0430-\u0434\u043E\u043B\u0436\u043D\u043E\u0441-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-proekt-\u0442-\u0447-\u0441\u043C\u0435\u0442\u0430-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-proekt-\u0442-\u0447-\u0441\u043C\u0435\u0442\u0430-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-proekt-\u0434\u043E\u043A-\u0441\u043C\u0435\u0442\u0430-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-proekt-\u0434\u043E\u043A-\u0441\u043C\u0435\u0442\u0430-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-proekt-\u0434\u043E\u043A-\u0441\u043C\u0435\u0442\u0430-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-proekt-\u0434\u043E\u043A-\u0441\u043C\u0435\u0442\u0430-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-proekt-\u0434\u043E\u043A-\u0443\u0441\u043B\u043E\u0432-\u0434\u043E\u0433-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-proekt-\u0434\u043E\u043A-\u0443\u0441\u043B\u043E\u0432-\u0434\u043E\u0433-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-proekt-\u0434\u043E\u043A-\u0443\u0441\u043B\u043E\u0432-\u0434\u043E\u0433-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-proekt-\u0434\u043E\u043A-\u0443\u0441\u043B\u043E\u0432-\u0434\u043E\u0433-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-proekt-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440\u0435\u043D-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-proekt-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440\u0435\u043D-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-proekt-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440\u0435\u043D-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-proekt-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440\u0435\u043D-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-proekt-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-proekt-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-proekt-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-proekt-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-proekt-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441-\u043C-\u0440-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-proekt-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441-\u043C-\u0440-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-proekt-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441-\u043C-\u0440-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-proekt-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441-\u043C-\u0440-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-proekt-\u043E\u0442-\u043F\u043E-\u0432\u044B\u043F-\u0434\u043E\u0433\u043E\u0432-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-proekt-\u043E\u0442-\u043F\u043E-\u0432\u044B\u043F-\u0434\u043E\u0433\u043E\u0432-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-proekt-\u043E\u0442-\u043F\u043E-\u0432\u044B\u043F-\u0434\u043E\u0433\u043E\u0432-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-proekt-\u043E\u0442-\u043F\u043E-\u0432\u044B\u043F-\u0434\u043E\u0433\u043E\u0432-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-proekt-\u043E\u0442\u0447-\u043E-\u0440\u0430\u0441-\u043E\u0441-\u043C\u0430\u0442-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-proekt-\u043E\u0442\u0447-\u043E-\u0440\u0430\u0441-\u043E\u0441-\u043C\u0430\u0442-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-proekt-\u043E\u0442\u0447-\u043E-\u0440\u0430\u0441-\u043E\u0441-\u043C\u0430\u0442-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-proekt-\u043E\u0442\u0447-\u043E-\u0440\u0430\u0441-\u043E\u0441-\u043C\u0430\u0442-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-proekt-\u0440\u0430\u0441\u0445-\u043C\u0430\u0442-\u0432-\u0441\u0442\u0440\u043E-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-proekt-\u0440\u0430\u0441\u0445-\u043C\u0430\u0442-\u0432-\u0441\u0442\u0440\u043E-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-proekt-\u0440\u0430\u0441\u0445-\u043C\u0430\u0442-\u0432-\u0441\u0442\u0440\u043E-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-proekt-\u0440\u0430\u0441\u0445-\u043C\u0430\u0442-\u0432-\u0441\u0442\u0440\u043E-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-proekt-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-proekt-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-proekt-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-proekt-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-proekt-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440\u0430\u0433-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-proekt-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440\u0430\u0433-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-proekt-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440\u0430\u0433-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-proekt-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440\u0430\u0433-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-proekt-\u0441\u043F\u0440\u0430-\u0434\u043E\u043B\u0436\u043D\u043E\u0441-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-proekt-\u0441\u043F\u0440\u0430-\u0434\u043E\u043B\u0436\u043D\u043E\u0441-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-proekt-\u0441\u043F\u0440\u0430-\u0434\u043E\u043B\u0436\u043D\u043E\u0441-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-proekt-\u0441\u043F\u0440\u0430-\u0434\u043E\u043B\u0436\u043D\u043E\u0441-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-proekt-\u0442-\u0447-\u0441\u043C\u0435\u0442\u0430-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-proekt-\u0442-\u0447-\u0441\u043C\u0435\u0442\u0430-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-proekt-\u0442-\u0447-\u0441\u043C\u0435\u0442\u0430-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-proekt-\u0442-\u0447-\u0441\u043C\u0435\u0442\u0430-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-proekt-\u0434\u043E\u043A-\u0441\u043C\u0435\u0442\u0430-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-proekt-\u0434\u043E\u043A-\u0441\u043C\u0435\u0442\u0430-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-proekt-\u0434\u043E\u043A-\u0443\u0441\u043B\u043E\u0432-\u0434\u043E\u0433-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-proekt-\u0434\u043E\u043A-\u0443\u0441\u043B\u043E\u0432-\u0434\u043E\u0433-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-proekt-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440\u0435\u043D-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-proekt-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440\u0435\u043D-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-proekt-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-proekt-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-proekt-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441-\u043C-\u0440-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-proekt-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441-\u043C-\u0440-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-proekt-\u043E\u0442-\u043F\u043E-\u0432\u044B\u043F-\u0434\u043E\u0433\u043E\u0432-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-proekt-\u043E\u0442-\u043F\u043E-\u0432\u044B\u043F-\u0434\u043E\u0433\u043E\u0432-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-proekt-\u043E\u0442\u0447-\u043E-\u0440\u0430\u0441-\u043E\u0441-\u043C\u0430\u0442-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-proekt-\u043E\u0442\u0447-\u043E-\u0440\u0430\u0441-\u043E\u0441-\u043C\u0430\u0442-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-proekt-\u0440\u0430\u0441\u0445-\u043C\u0430\u0442-\u0432-\u0441\u0442\u0440\u043E-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-proekt-\u0440\u0430\u0441\u0445-\u043C\u0430\u0442-\u0432-\u0441\u0442\u0440\u043E-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-proekt-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-proekt-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-proekt-\u0441\u043F\u0440\u0430-\u0434\u043E\u043B\u0436\u043D\u043E\u0441-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-proekt-\u0441\u043F\u0440\u0430-\u0434\u043E\u043B\u0436\u043D\u043E\u0441-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-proekt-\u0442-\u0447-\u0441\u043C\u0435\u0442\u0430-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-proekt-\u0442-\u0447-\u0441\u043C\u0435\u0442\u0430-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B-test.js should pass ESLint\n\n');
  });
});
define('ember-app/tests/unit/controllers/i-i-s-proekt-\u0434\u043E\u043A-\u0441\u043C\u0435\u0442\u0430-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-proekt-док-смета-e', 'Unit | Controller | i-i-s-proekt-док-смета-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-proekt-\u0434\u043E\u043A-\u0441\u043C\u0435\u0442\u0430-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-proekt-док-смета-l', 'Unit | Controller | i-i-s-proekt-док-смета-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-proekt-\u0434\u043E\u043A-\u0443\u0441\u043B\u043E\u0432-\u0434\u043E\u0433-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-proekt-док-услов-дог-e', 'Unit | Controller | i-i-s-proekt-док-услов-дог-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-proekt-\u0434\u043E\u043A-\u0443\u0441\u043B\u043E\u0432-\u0434\u043E\u0433-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-proekt-док-услов-дог-l', 'Unit | Controller | i-i-s-proekt-док-услов-дог-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-proekt-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440\u0435\u043D-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-proekt-ед-измерен-e', 'Unit | Controller | i-i-s-proekt-ед-измерен-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-proekt-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440\u0435\u043D-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-proekt-ед-измерен-l', 'Unit | Controller | i-i-s-proekt-ед-измерен-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-proekt-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-proekt-номенклатура-e', 'Unit | Controller | i-i-s-proekt-номенклатура-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-proekt-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-proekt-номенклатура-l', 'Unit | Controller | i-i-s-proekt-номенклатура-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-proekt-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441-\u043C-\u0440-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-proekt-объект-с-м-р-e', 'Unit | Controller | i-i-s-proekt-объект-с-м-р-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-proekt-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441-\u043C-\u0440-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-proekt-объект-с-м-р-l', 'Unit | Controller | i-i-s-proekt-объект-с-м-р-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-proekt-\u043E\u0442-\u043F\u043E-\u0432\u044B\u043F-\u0434\u043E\u0433\u043E\u0432-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-proekt-от-по-вып-догов-e', 'Unit | Controller | i-i-s-proekt-от-по-вып-догов-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-proekt-\u043E\u0442-\u043F\u043E-\u0432\u044B\u043F-\u0434\u043E\u0433\u043E\u0432-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-proekt-от-по-вып-догов-l', 'Unit | Controller | i-i-s-proekt-от-по-вып-догов-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-proekt-\u043E\u0442\u0447-\u043E-\u0440\u0430\u0441-\u043E\u0441-\u043C\u0430\u0442-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-proekt-отч-о-рас-ос-мат-e', 'Unit | Controller | i-i-s-proekt-отч-о-рас-ос-мат-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-proekt-\u043E\u0442\u0447-\u043E-\u0440\u0430\u0441-\u043E\u0441-\u043C\u0430\u0442-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-proekt-отч-о-рас-ос-мат-l', 'Unit | Controller | i-i-s-proekt-отч-о-рас-ос-мат-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-proekt-\u0440\u0430\u0441\u0445-\u043C\u0430\u0442-\u0432-\u0441\u0442\u0440\u043E-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-proekt-расх-мат-в-стро-e', 'Unit | Controller | i-i-s-proekt-расх-мат-в-стро-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-proekt-\u0440\u0430\u0441\u0445-\u043C\u0430\u0442-\u0432-\u0441\u0442\u0440\u043E-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-proekt-расх-мат-в-стро-l', 'Unit | Controller | i-i-s-proekt-расх-мат-в-стро-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-proekt-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-proekt-сотрудники-e', 'Unit | Controller | i-i-s-proekt-сотрудники-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-proekt-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-proekt-сотрудники-l', 'Unit | Controller | i-i-s-proekt-сотрудники-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-proekt-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440\u0430\u0433-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-proekt-спр-контраг-e', 'Unit | Controller | i-i-s-proekt-спр-контраг-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-proekt-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440\u0430\u0433-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-proekt-спр-контраг-l', 'Unit | Controller | i-i-s-proekt-спр-контраг-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-proekt-\u0441\u043F\u0440\u0430-\u0434\u043E\u043B\u0436\u043D\u043E\u0441-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-proekt-спра-должнос-e', 'Unit | Controller | i-i-s-proekt-спра-должнос-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-proekt-\u0441\u043F\u0440\u0430-\u0434\u043E\u043B\u0436\u043D\u043E\u0441-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-proekt-спра-должнос-l', 'Unit | Controller | i-i-s-proekt-спра-должнос-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-proekt-\u0442-\u0447-\u0441\u043C\u0435\u0442\u0430-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-proekt-т-ч-смета-e', 'Unit | Controller | i-i-s-proekt-т-ч-смета-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-proekt-\u0442-\u0447-\u0441\u043C\u0435\u0442\u0430-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-proekt-т-ч-смета-l', 'Unit | Controller | i-i-s-proekt-т-ч-смета-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/models/i-i-s-proekt-\u0434\u043E\u043A-\u0441\u043C\u0435\u0442\u0430-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-proekt-док-смета', 'Unit | Model | i-i-s-proekt-док-смета', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-proekt-док-смета', 'model:i-i-s-proekt-док-услов-дог', 'model:i-i-s-proekt-ед-измерен', 'model:i-i-s-proekt-номенклатура', 'model:i-i-s-proekt-объект-с-м-р', 'model:i-i-s-proekt-от-по-вып-догов', 'model:i-i-s-proekt-отч-о-рас-ос-мат', 'model:i-i-s-proekt-расх-мат-в-стро', 'model:i-i-s-proekt-сотрудники', 'model:i-i-s-proekt-спра-должнос', 'model:i-i-s-proekt-т-ч-смета', 'model:справочник-контрагенты', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-proekt-\u0434\u043E\u043A-\u0443\u0441\u043B\u043E\u0432-\u0434\u043E\u0433-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-proekt-док-услов-дог', 'Unit | Model | i-i-s-proekt-док-услов-дог', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-proekt-док-смета', 'model:i-i-s-proekt-док-услов-дог', 'model:i-i-s-proekt-ед-измерен', 'model:i-i-s-proekt-номенклатура', 'model:i-i-s-proekt-объект-с-м-р', 'model:i-i-s-proekt-от-по-вып-догов', 'model:i-i-s-proekt-отч-о-рас-ос-мат', 'model:i-i-s-proekt-расх-мат-в-стро', 'model:i-i-s-proekt-сотрудники', 'model:i-i-s-proekt-спра-должнос', 'model:i-i-s-proekt-т-ч-смета', 'model:справочник-контрагенты', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-proekt-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440\u0435\u043D-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-proekt-ед-измерен', 'Unit | Model | i-i-s-proekt-ед-измерен', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-proekt-док-смета', 'model:i-i-s-proekt-док-услов-дог', 'model:i-i-s-proekt-ед-измерен', 'model:i-i-s-proekt-номенклатура', 'model:i-i-s-proekt-объект-с-м-р', 'model:i-i-s-proekt-от-по-вып-догов', 'model:i-i-s-proekt-отч-о-рас-ос-мат', 'model:i-i-s-proekt-расх-мат-в-стро', 'model:i-i-s-proekt-сотрудники', 'model:i-i-s-proekt-спра-должнос', 'model:i-i-s-proekt-т-ч-смета', 'model:справочник-контрагенты', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-proekt-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-proekt-номенклатура', 'Unit | Model | i-i-s-proekt-номенклатура', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-proekt-док-смета', 'model:i-i-s-proekt-док-услов-дог', 'model:i-i-s-proekt-ед-измерен', 'model:i-i-s-proekt-номенклатура', 'model:i-i-s-proekt-объект-с-м-р', 'model:i-i-s-proekt-от-по-вып-догов', 'model:i-i-s-proekt-отч-о-рас-ос-мат', 'model:i-i-s-proekt-расх-мат-в-стро', 'model:i-i-s-proekt-сотрудники', 'model:i-i-s-proekt-спра-должнос', 'model:i-i-s-proekt-т-ч-смета', 'model:справочник-контрагенты', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-proekt-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441-\u043C-\u0440-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-proekt-объект-с-м-р', 'Unit | Model | i-i-s-proekt-объект-с-м-р', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-proekt-док-смета', 'model:i-i-s-proekt-док-услов-дог', 'model:i-i-s-proekt-ед-измерен', 'model:i-i-s-proekt-номенклатура', 'model:i-i-s-proekt-объект-с-м-р', 'model:i-i-s-proekt-от-по-вып-догов', 'model:i-i-s-proekt-отч-о-рас-ос-мат', 'model:i-i-s-proekt-расх-мат-в-стро', 'model:i-i-s-proekt-сотрудники', 'model:i-i-s-proekt-спра-должнос', 'model:i-i-s-proekt-т-ч-смета', 'model:справочник-контрагенты', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-proekt-\u043E\u0442-\u043F\u043E-\u0432\u044B\u043F-\u0434\u043E\u0433\u043E\u0432-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-proekt-от-по-вып-догов', 'Unit | Model | i-i-s-proekt-от-по-вып-догов', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-proekt-док-смета', 'model:i-i-s-proekt-док-услов-дог', 'model:i-i-s-proekt-ед-измерен', 'model:i-i-s-proekt-номенклатура', 'model:i-i-s-proekt-объект-с-м-р', 'model:i-i-s-proekt-от-по-вып-догов', 'model:i-i-s-proekt-отч-о-рас-ос-мат', 'model:i-i-s-proekt-расх-мат-в-стро', 'model:i-i-s-proekt-сотрудники', 'model:i-i-s-proekt-спра-должнос', 'model:i-i-s-proekt-т-ч-смета', 'model:справочник-контрагенты', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-proekt-\u043E\u0442\u0447-\u043E-\u0440\u0430\u0441-\u043E\u0441-\u043C\u0430\u0442-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-proekt-отч-о-рас-ос-мат', 'Unit | Model | i-i-s-proekt-отч-о-рас-ос-мат', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-proekt-док-смета', 'model:i-i-s-proekt-док-услов-дог', 'model:i-i-s-proekt-ед-измерен', 'model:i-i-s-proekt-номенклатура', 'model:i-i-s-proekt-объект-с-м-р', 'model:i-i-s-proekt-от-по-вып-догов', 'model:i-i-s-proekt-отч-о-рас-ос-мат', 'model:i-i-s-proekt-расх-мат-в-стро', 'model:i-i-s-proekt-сотрудники', 'model:i-i-s-proekt-спра-должнос', 'model:i-i-s-proekt-т-ч-смета', 'model:справочник-контрагенты', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-proekt-\u0440\u0430\u0441\u0445-\u043C\u0430\u0442-\u0432-\u0441\u0442\u0440\u043E-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-proekt-расх-мат-в-стро', 'Unit | Model | i-i-s-proekt-расх-мат-в-стро', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-proekt-док-смета', 'model:i-i-s-proekt-док-услов-дог', 'model:i-i-s-proekt-ед-измерен', 'model:i-i-s-proekt-номенклатура', 'model:i-i-s-proekt-объект-с-м-р', 'model:i-i-s-proekt-от-по-вып-догов', 'model:i-i-s-proekt-отч-о-рас-ос-мат', 'model:i-i-s-proekt-расх-мат-в-стро', 'model:i-i-s-proekt-сотрудники', 'model:i-i-s-proekt-спра-должнос', 'model:i-i-s-proekt-т-ч-смета', 'model:справочник-контрагенты', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-proekt-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-proekt-сотрудники', 'Unit | Model | i-i-s-proekt-сотрудники', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-proekt-док-смета', 'model:i-i-s-proekt-док-услов-дог', 'model:i-i-s-proekt-ед-измерен', 'model:i-i-s-proekt-номенклатура', 'model:i-i-s-proekt-объект-с-м-р', 'model:i-i-s-proekt-от-по-вып-догов', 'model:i-i-s-proekt-отч-о-рас-ос-мат', 'model:i-i-s-proekt-расх-мат-в-стро', 'model:i-i-s-proekt-сотрудники', 'model:i-i-s-proekt-спра-должнос', 'model:i-i-s-proekt-т-ч-смета', 'model:справочник-контрагенты', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-proekt-\u0441\u043F\u0440\u0430-\u0434\u043E\u043B\u0436\u043D\u043E\u0441-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-proekt-спра-должнос', 'Unit | Model | i-i-s-proekt-спра-должнос', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-proekt-док-смета', 'model:i-i-s-proekt-док-услов-дог', 'model:i-i-s-proekt-ед-измерен', 'model:i-i-s-proekt-номенклатура', 'model:i-i-s-proekt-объект-с-м-р', 'model:i-i-s-proekt-от-по-вып-догов', 'model:i-i-s-proekt-отч-о-рас-ос-мат', 'model:i-i-s-proekt-расх-мат-в-стро', 'model:i-i-s-proekt-сотрудники', 'model:i-i-s-proekt-спра-должнос', 'model:i-i-s-proekt-т-ч-смета', 'model:справочник-контрагенты', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-proekt-\u0442-\u0447-\u0441\u043C\u0435\u0442\u0430-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-proekt-т-ч-смета', 'Unit | Model | i-i-s-proekt-т-ч-смета', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-proekt-док-смета', 'model:i-i-s-proekt-док-услов-дог', 'model:i-i-s-proekt-ед-измерен', 'model:i-i-s-proekt-номенклатура', 'model:i-i-s-proekt-объект-с-м-р', 'model:i-i-s-proekt-от-по-вып-догов', 'model:i-i-s-proekt-отч-о-рас-ос-мат', 'model:i-i-s-proekt-расх-мат-в-стро', 'model:i-i-s-proekt-сотрудники', 'model:i-i-s-proekt-спра-должнос', 'model:i-i-s-proekt-т-ч-смета', 'model:справочник-контрагенты', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('справочник-контрагенты', 'Unit | Model | справочник-контрагенты', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-proekt-док-смета', 'model:i-i-s-proekt-док-услов-дог', 'model:i-i-s-proekt-ед-измерен', 'model:i-i-s-proekt-номенклатура', 'model:i-i-s-proekt-объект-с-м-р', 'model:i-i-s-proekt-от-по-вып-догов', 'model:i-i-s-proekt-отч-о-рас-ос-мат', 'model:i-i-s-proekt-расх-мат-в-стро', 'model:i-i-s-proekt-сотрудники', 'model:i-i-s-proekt-спра-должнос', 'model:i-i-s-proekt-т-ч-смета', 'model:справочник-контрагенты', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/routes/i-i-s-proekt-\u0434\u043E\u043A-\u0441\u043C\u0435\u0442\u0430-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-proekt-док-смета-e', 'Unit | Route | i-i-s-proekt-док-смета-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-proekt-\u0434\u043E\u043A-\u0441\u043C\u0435\u0442\u0430-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-proekt-док-смета-l', 'Unit | Route | i-i-s-proekt-док-смета-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-proekt-\u0434\u043E\u043A-\u0443\u0441\u043B\u043E\u0432-\u0434\u043E\u0433-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-proekt-док-услов-дог-e', 'Unit | Route | i-i-s-proekt-док-услов-дог-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-proekt-\u0434\u043E\u043A-\u0443\u0441\u043B\u043E\u0432-\u0434\u043E\u0433-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-proekt-док-услов-дог-l', 'Unit | Route | i-i-s-proekt-док-услов-дог-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-proekt-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440\u0435\u043D-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-proekt-ед-измерен-e', 'Unit | Route | i-i-s-proekt-ед-измерен-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-proekt-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440\u0435\u043D-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-proekt-ед-измерен-l', 'Unit | Route | i-i-s-proekt-ед-измерен-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-proekt-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-proekt-номенклатура-e', 'Unit | Route | i-i-s-proekt-номенклатура-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-proekt-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-proekt-номенклатура-l', 'Unit | Route | i-i-s-proekt-номенклатура-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-proekt-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441-\u043C-\u0440-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-proekt-объект-с-м-р-e', 'Unit | Route | i-i-s-proekt-объект-с-м-р-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-proekt-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441-\u043C-\u0440-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-proekt-объект-с-м-р-l', 'Unit | Route | i-i-s-proekt-объект-с-м-р-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-proekt-\u043E\u0442-\u043F\u043E-\u0432\u044B\u043F-\u0434\u043E\u0433\u043E\u0432-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-proekt-от-по-вып-догов-e', 'Unit | Route | i-i-s-proekt-от-по-вып-догов-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-proekt-\u043E\u0442-\u043F\u043E-\u0432\u044B\u043F-\u0434\u043E\u0433\u043E\u0432-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-proekt-от-по-вып-догов-l', 'Unit | Route | i-i-s-proekt-от-по-вып-догов-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-proekt-\u043E\u0442\u0447-\u043E-\u0440\u0430\u0441-\u043E\u0441-\u043C\u0430\u0442-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-proekt-отч-о-рас-ос-мат-e', 'Unit | Route | i-i-s-proekt-отч-о-рас-ос-мат-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-proekt-\u043E\u0442\u0447-\u043E-\u0440\u0430\u0441-\u043E\u0441-\u043C\u0430\u0442-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-proekt-отч-о-рас-ос-мат-l', 'Unit | Route | i-i-s-proekt-отч-о-рас-ос-мат-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-proekt-\u0440\u0430\u0441\u0445-\u043C\u0430\u0442-\u0432-\u0441\u0442\u0440\u043E-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-proekt-расх-мат-в-стро-e', 'Unit | Route | i-i-s-proekt-расх-мат-в-стро-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-proekt-\u0440\u0430\u0441\u0445-\u043C\u0430\u0442-\u0432-\u0441\u0442\u0440\u043E-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-proekt-расх-мат-в-стро-l', 'Unit | Route | i-i-s-proekt-расх-мат-в-стро-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-proekt-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-proekt-сотрудники-e', 'Unit | Route | i-i-s-proekt-сотрудники-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-proekt-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-proekt-сотрудники-l', 'Unit | Route | i-i-s-proekt-сотрудники-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-proekt-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440\u0430\u0433-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-proekt-спр-контраг-e', 'Unit | Route | i-i-s-proekt-спр-контраг-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-proekt-\u0441\u043F\u0440-\u043A\u043E\u043D\u0442\u0440\u0430\u0433-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-proekt-спр-контраг-l', 'Unit | Route | i-i-s-proekt-спр-контраг-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-proekt-\u0441\u043F\u0440\u0430-\u0434\u043E\u043B\u0436\u043D\u043E\u0441-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-proekt-спра-должнос-e', 'Unit | Route | i-i-s-proekt-спра-должнос-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-proekt-\u0441\u043F\u0440\u0430-\u0434\u043E\u043B\u0436\u043D\u043E\u0441-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-proekt-спра-должнос-l', 'Unit | Route | i-i-s-proekt-спра-должнос-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-proekt-\u0442-\u0447-\u0441\u043C\u0435\u0442\u0430-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-proekt-т-ч-смета-e', 'Unit | Route | i-i-s-proekt-т-ч-смета-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-proekt-\u0442-\u0447-\u0441\u043C\u0435\u0442\u0430-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-proekt-т-ч-смета-l', 'Unit | Route | i-i-s-proekt-т-ч-смета-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-proekt-\u0434\u043E\u043A-\u0441\u043C\u0435\u0442\u0430-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-proekt-док-смета', 'Unit | Serializer | i-i-s-proekt-док-смета', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-proekt-док-смета', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-proekt-док-смета', 'model:i-i-s-proekt-док-услов-дог', 'model:i-i-s-proekt-ед-измерен', 'model:i-i-s-proekt-номенклатура', 'model:i-i-s-proekt-объект-с-м-р', 'model:i-i-s-proekt-от-по-вып-догов', 'model:i-i-s-proekt-отч-о-рас-ос-мат', 'model:i-i-s-proekt-расх-мат-в-стро', 'model:i-i-s-proekt-сотрудники', 'model:i-i-s-proekt-спра-должнос', 'model:i-i-s-proekt-т-ч-смета', 'model:справочник-контрагенты', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-proekt-\u0434\u043E\u043A-\u0443\u0441\u043B\u043E\u0432-\u0434\u043E\u0433-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-proekt-док-услов-дог', 'Unit | Serializer | i-i-s-proekt-док-услов-дог', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-proekt-док-услов-дог', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-proekt-док-смета', 'model:i-i-s-proekt-док-услов-дог', 'model:i-i-s-proekt-ед-измерен', 'model:i-i-s-proekt-номенклатура', 'model:i-i-s-proekt-объект-с-м-р', 'model:i-i-s-proekt-от-по-вып-догов', 'model:i-i-s-proekt-отч-о-рас-ос-мат', 'model:i-i-s-proekt-расх-мат-в-стро', 'model:i-i-s-proekt-сотрудники', 'model:i-i-s-proekt-спра-должнос', 'model:i-i-s-proekt-т-ч-смета', 'model:справочник-контрагенты', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-proekt-\u0435\u0434-\u0438\u0437\u043C\u0435\u0440\u0435\u043D-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-proekt-ед-измерен', 'Unit | Serializer | i-i-s-proekt-ед-измерен', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-proekt-ед-измерен', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-proekt-док-смета', 'model:i-i-s-proekt-док-услов-дог', 'model:i-i-s-proekt-ед-измерен', 'model:i-i-s-proekt-номенклатура', 'model:i-i-s-proekt-объект-с-м-р', 'model:i-i-s-proekt-от-по-вып-догов', 'model:i-i-s-proekt-отч-о-рас-ос-мат', 'model:i-i-s-proekt-расх-мат-в-стро', 'model:i-i-s-proekt-сотрудники', 'model:i-i-s-proekt-спра-должнос', 'model:i-i-s-proekt-т-ч-смета', 'model:справочник-контрагенты', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-proekt-\u043D\u043E\u043C\u0435\u043D\u043A\u043B\u0430\u0442\u0443\u0440\u0430-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-proekt-номенклатура', 'Unit | Serializer | i-i-s-proekt-номенклатура', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-proekt-номенклатура', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-proekt-док-смета', 'model:i-i-s-proekt-док-услов-дог', 'model:i-i-s-proekt-ед-измерен', 'model:i-i-s-proekt-номенклатура', 'model:i-i-s-proekt-объект-с-м-р', 'model:i-i-s-proekt-от-по-вып-догов', 'model:i-i-s-proekt-отч-о-рас-ос-мат', 'model:i-i-s-proekt-расх-мат-в-стро', 'model:i-i-s-proekt-сотрудники', 'model:i-i-s-proekt-спра-должнос', 'model:i-i-s-proekt-т-ч-смета', 'model:справочник-контрагенты', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-proekt-\u043E\u0431\u044A\u0435\u043A\u0442-\u0441-\u043C-\u0440-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-proekt-объект-с-м-р', 'Unit | Serializer | i-i-s-proekt-объект-с-м-р', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-proekt-объект-с-м-р', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-proekt-док-смета', 'model:i-i-s-proekt-док-услов-дог', 'model:i-i-s-proekt-ед-измерен', 'model:i-i-s-proekt-номенклатура', 'model:i-i-s-proekt-объект-с-м-р', 'model:i-i-s-proekt-от-по-вып-догов', 'model:i-i-s-proekt-отч-о-рас-ос-мат', 'model:i-i-s-proekt-расх-мат-в-стро', 'model:i-i-s-proekt-сотрудники', 'model:i-i-s-proekt-спра-должнос', 'model:i-i-s-proekt-т-ч-смета', 'model:справочник-контрагенты', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-proekt-\u043E\u0442-\u043F\u043E-\u0432\u044B\u043F-\u0434\u043E\u0433\u043E\u0432-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-proekt-от-по-вып-догов', 'Unit | Serializer | i-i-s-proekt-от-по-вып-догов', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-proekt-от-по-вып-догов', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-proekt-док-смета', 'model:i-i-s-proekt-док-услов-дог', 'model:i-i-s-proekt-ед-измерен', 'model:i-i-s-proekt-номенклатура', 'model:i-i-s-proekt-объект-с-м-р', 'model:i-i-s-proekt-от-по-вып-догов', 'model:i-i-s-proekt-отч-о-рас-ос-мат', 'model:i-i-s-proekt-расх-мат-в-стро', 'model:i-i-s-proekt-сотрудники', 'model:i-i-s-proekt-спра-должнос', 'model:i-i-s-proekt-т-ч-смета', 'model:справочник-контрагенты', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-proekt-\u043E\u0442\u0447-\u043E-\u0440\u0430\u0441-\u043E\u0441-\u043C\u0430\u0442-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-proekt-отч-о-рас-ос-мат', 'Unit | Serializer | i-i-s-proekt-отч-о-рас-ос-мат', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-proekt-отч-о-рас-ос-мат', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-proekt-док-смета', 'model:i-i-s-proekt-док-услов-дог', 'model:i-i-s-proekt-ед-измерен', 'model:i-i-s-proekt-номенклатура', 'model:i-i-s-proekt-объект-с-м-р', 'model:i-i-s-proekt-от-по-вып-догов', 'model:i-i-s-proekt-отч-о-рас-ос-мат', 'model:i-i-s-proekt-расх-мат-в-стро', 'model:i-i-s-proekt-сотрудники', 'model:i-i-s-proekt-спра-должнос', 'model:i-i-s-proekt-т-ч-смета', 'model:справочник-контрагенты', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-proekt-\u0440\u0430\u0441\u0445-\u043C\u0430\u0442-\u0432-\u0441\u0442\u0440\u043E-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-proekt-расх-мат-в-стро', 'Unit | Serializer | i-i-s-proekt-расх-мат-в-стро', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-proekt-расх-мат-в-стро', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-proekt-док-смета', 'model:i-i-s-proekt-док-услов-дог', 'model:i-i-s-proekt-ед-измерен', 'model:i-i-s-proekt-номенклатура', 'model:i-i-s-proekt-объект-с-м-р', 'model:i-i-s-proekt-от-по-вып-догов', 'model:i-i-s-proekt-отч-о-рас-ос-мат', 'model:i-i-s-proekt-расх-мат-в-стро', 'model:i-i-s-proekt-сотрудники', 'model:i-i-s-proekt-спра-должнос', 'model:i-i-s-proekt-т-ч-смета', 'model:справочник-контрагенты', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-proekt-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-proekt-сотрудники', 'Unit | Serializer | i-i-s-proekt-сотрудники', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-proekt-сотрудники', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-proekt-док-смета', 'model:i-i-s-proekt-док-услов-дог', 'model:i-i-s-proekt-ед-измерен', 'model:i-i-s-proekt-номенклатура', 'model:i-i-s-proekt-объект-с-м-р', 'model:i-i-s-proekt-от-по-вып-догов', 'model:i-i-s-proekt-отч-о-рас-ос-мат', 'model:i-i-s-proekt-расх-мат-в-стро', 'model:i-i-s-proekt-сотрудники', 'model:i-i-s-proekt-спра-должнос', 'model:i-i-s-proekt-т-ч-смета', 'model:справочник-контрагенты', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-proekt-\u0441\u043F\u0440\u0430-\u0434\u043E\u043B\u0436\u043D\u043E\u0441-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-proekt-спра-должнос', 'Unit | Serializer | i-i-s-proekt-спра-должнос', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-proekt-спра-должнос', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-proekt-док-смета', 'model:i-i-s-proekt-док-услов-дог', 'model:i-i-s-proekt-ед-измерен', 'model:i-i-s-proekt-номенклатура', 'model:i-i-s-proekt-объект-с-м-р', 'model:i-i-s-proekt-от-по-вып-догов', 'model:i-i-s-proekt-отч-о-рас-ос-мат', 'model:i-i-s-proekt-расх-мат-в-стро', 'model:i-i-s-proekt-сотрудники', 'model:i-i-s-proekt-спра-должнос', 'model:i-i-s-proekt-т-ч-смета', 'model:справочник-контрагенты', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-proekt-\u0442-\u0447-\u0441\u043C\u0435\u0442\u0430-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-proekt-т-ч-смета', 'Unit | Serializer | i-i-s-proekt-т-ч-смета', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-proekt-т-ч-смета', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-proekt-док-смета', 'model:i-i-s-proekt-док-услов-дог', 'model:i-i-s-proekt-ед-измерен', 'model:i-i-s-proekt-номенклатура', 'model:i-i-s-proekt-объект-с-м-р', 'model:i-i-s-proekt-от-по-вып-догов', 'model:i-i-s-proekt-отч-о-рас-ос-мат', 'model:i-i-s-proekt-расх-мат-в-стро', 'model:i-i-s-proekt-сотрудники', 'model:i-i-s-proekt-спра-должнос', 'model:i-i-s-proekt-т-ч-смета', 'model:справочник-контрагенты', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/\u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('справочник-контрагенты', 'Unit | Serializer | справочник-контрагенты', {
    // Specify the other units that are required for this test.
    needs: ['serializer:справочник-контрагенты', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-proekt-док-смета', 'model:i-i-s-proekt-док-услов-дог', 'model:i-i-s-proekt-ед-измерен', 'model:i-i-s-proekt-номенклатура', 'model:i-i-s-proekt-объект-с-м-р', 'model:i-i-s-proekt-от-по-вып-догов', 'model:i-i-s-proekt-отч-о-рас-ос-мат', 'model:i-i-s-proekt-расх-мат-в-стро', 'model:i-i-s-proekt-сотрудники', 'model:i-i-s-proekt-спра-должнос', 'model:i-i-s-proekt-т-ч-смета', 'model:справочник-контрагенты', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/config/environment', [], function() {
  var prefix = 'ember-app';
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

require('ember-app/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
