import {
  defineNamespace,
  defineProjections,
  Model as ОтПоВыпДоговMixin
} from '../mixins/regenerated/models/i-i-s-proekt-от-по-вып-догов';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ОтПоВыпДоговMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
