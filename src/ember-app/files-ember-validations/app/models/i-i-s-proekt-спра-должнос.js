import {
  defineNamespace,
  defineProjections,
  Model as СпраДолжносMixin
} from '../mixins/regenerated/models/i-i-s-proekt-спра-должнос';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СпраДолжносMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
