import Mixin from '@ember/object/mixin';
import $ from 'jquery';

export let Serializer = Mixin.create({
  getAttrs: function () {
    let parentAttrs = this._super();
    let attrs = {
      едИзмерен: { serialize: 'odata-id', deserialize: 'records' },
      номенклатура: { serialize: 'odata-id', deserialize: 'records' },
      объектСМР: { serialize: 'odata-id', deserialize: 'records' },
      спрКонтраг: { serialize: 'odata-id', deserialize: 'records' },
      тЧСмета: { serialize: false, deserialize: 'records' }
    };

    return $.extend(true, {}, parentAttrs, attrs);
  },
  init: function () {
    this.set('attrs', this.getAttrs());
    this._super(...arguments);
  }
});
