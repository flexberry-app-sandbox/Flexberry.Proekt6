import { Serializer as СпрКонтрагSerializer } from
  '../mixins/regenerated/serializers/справочник-контрагенты';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СпрКонтрагSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
