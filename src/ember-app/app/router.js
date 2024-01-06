import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-proekt-док-смета-l');
  this.route('i-i-s-proekt-док-смета-e',
  { path: 'i-i-s-proekt-док-смета-e/:id' });
  this.route('i-i-s-proekt-док-смета-e.new',
  { path: 'i-i-s-proekt-док-смета-e/new' });
  this.route('i-i-s-proekt-док-услов-дог-l');
  this.route('i-i-s-proekt-док-услов-дог-e',
  { path: 'i-i-s-proekt-док-услов-дог-e/:id' });
  this.route('i-i-s-proekt-док-услов-дог-e.new',
  { path: 'i-i-s-proekt-док-услов-дог-e/new' });
  this.route('i-i-s-proekt-ед-измерен-l');
  this.route('i-i-s-proekt-ед-измерен-e',
  { path: 'i-i-s-proekt-ед-измерен-e/:id' });
  this.route('i-i-s-proekt-ед-измерен-e.new',
  { path: 'i-i-s-proekt-ед-измерен-e/new' });
  this.route('i-i-s-proekt-номенклатура-l');
  this.route('i-i-s-proekt-номенклатура-e',
  { path: 'i-i-s-proekt-номенклатура-e/:id' });
  this.route('i-i-s-proekt-номенклатура-e.new',
  { path: 'i-i-s-proekt-номенклатура-e/new' });
  this.route('i-i-s-proekt-объект-с-м-р-l');
  this.route('i-i-s-proekt-объект-с-м-р-e',
  { path: 'i-i-s-proekt-объект-с-м-р-e/:id' });
  this.route('i-i-s-proekt-объект-с-м-р-e.new',
  { path: 'i-i-s-proekt-объект-с-м-р-e/new' });
  this.route('i-i-s-proekt-от-по-вып-догов-l');
  this.route('i-i-s-proekt-от-по-вып-догов-e',
  { path: 'i-i-s-proekt-от-по-вып-догов-e/:id' });
  this.route('i-i-s-proekt-от-по-вып-догов-e.new',
  { path: 'i-i-s-proekt-от-по-вып-догов-e/new' });
  this.route('i-i-s-proekt-отч-о-рас-ос-мат-l');
  this.route('i-i-s-proekt-отч-о-рас-ос-мат-e',
  { path: 'i-i-s-proekt-отч-о-рас-ос-мат-e/:id' });
  this.route('i-i-s-proekt-отч-о-рас-ос-мат-e.new',
  { path: 'i-i-s-proekt-отч-о-рас-ос-мат-e/new' });
  this.route('i-i-s-proekt-расх-мат-в-стро-l');
  this.route('i-i-s-proekt-расх-мат-в-стро-e',
  { path: 'i-i-s-proekt-расх-мат-в-стро-e/:id' });
  this.route('i-i-s-proekt-расх-мат-в-стро-e.new',
  { path: 'i-i-s-proekt-расх-мат-в-стро-e/new' });
  this.route('i-i-s-proekt-сотрудники-l');
  this.route('i-i-s-proekt-сотрудники-e',
  { path: 'i-i-s-proekt-сотрудники-e/:id' });
  this.route('i-i-s-proekt-сотрудники-e.new',
  { path: 'i-i-s-proekt-сотрудники-e/new' });
  this.route('i-i-s-proekt-спр-контраг-l');
  this.route('i-i-s-proekt-спр-контраг-e',
  { path: 'i-i-s-proekt-спр-контраг-e/:id' });
  this.route('i-i-s-proekt-спр-контраг-e.new',
  { path: 'i-i-s-proekt-спр-контраг-e/new' });
  this.route('i-i-s-proekt-спра-должнос-l');
  this.route('i-i-s-proekt-спра-должнос-e',
  { path: 'i-i-s-proekt-спра-должнос-e/:id' });
  this.route('i-i-s-proekt-спра-должнос-e.new',
  { path: 'i-i-s-proekt-спра-должнос-e/new' });
  this.route('i-i-s-proekt-т-ч-смета-l');
  this.route('i-i-s-proekt-т-ч-смета-e',
  { path: 'i-i-s-proekt-т-ч-смета-e/:id' });
  this.route('i-i-s-proekt-т-ч-смета-e.new',
  { path: 'i-i-s-proekt-т-ч-смета-e/new' });
});

export default Router;
