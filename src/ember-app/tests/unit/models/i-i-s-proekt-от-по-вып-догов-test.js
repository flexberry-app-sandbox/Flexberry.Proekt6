import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-proekt-от-по-вып-догов', 'Unit | Model | i-i-s-proekt-от-по-вып-догов', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-proekt-док-смета',
    'model:i-i-s-proekt-док-услов-дог',
    'model:i-i-s-proekt-ед-измерен',
    'model:i-i-s-proekt-номенклатура',
    'model:i-i-s-proekt-объект-с-м-р',
    'model:i-i-s-proekt-от-по-вып-догов',
    'model:i-i-s-proekt-отч-о-рас-ос-мат',
    'model:i-i-s-proekt-расх-мат-в-стро',
    'model:i-i-s-proekt-сотрудники',
    'model:i-i-s-proekt-спра-должнос',
    'model:i-i-s-proekt-т-ч-смета',
    'model:справочник-контрагенты',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
