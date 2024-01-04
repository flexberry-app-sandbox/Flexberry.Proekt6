import {
  defineProjections,
  Model as СпрКонтрагMixin
} from '../mixins/regenerated/models/справочник-контрагенты';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СпрКонтрагMixin, {
});

defineProjections(Model);

export default Model;
