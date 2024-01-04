import { Serializer as ОтПоВыпДоговSerializer } from
  '../mixins/regenerated/serializers/i-i-s-proekt-от-по-вып-догов';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ОтПоВыпДоговSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
