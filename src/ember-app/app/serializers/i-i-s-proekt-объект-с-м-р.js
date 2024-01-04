import { Serializer as ОбъектСМРSerializer } from
  '../mixins/regenerated/serializers/i-i-s-proekt-объект-с-м-р';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ОбъектСМРSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
