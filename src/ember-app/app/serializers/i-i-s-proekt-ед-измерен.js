import { Serializer as ЕдИзмеренSerializer } from
  '../mixins/regenerated/serializers/i-i-s-proekt-ед-измерен';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЕдИзмеренSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
