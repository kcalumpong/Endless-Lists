import Ember from 'ember';
import Moment from 'moment';

export function formatDate(params){
    // return Moment(params[0]).fromNow();
    return Moment(params[0]).format('YYYY-MM-DD');
}

export default Ember.Helper.helper(formatDate);