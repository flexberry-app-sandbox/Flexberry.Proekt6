import {
  defineNamespace,
  defineProjections,
  Model as РасхМатВСтроMixin
} from '../mixins/regenerated/models/i-i-s-proekt-расх-мат-в-стро';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(РасхМатВСтроMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
