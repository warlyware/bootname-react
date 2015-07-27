import AppEventEmitter from './AppEventEmitter';
import AppDispatcher from '../dispatcher'
import Actions from '../constants'



let _entry = {"id":2,"entry_type":"Verb","description":"What's a good verb to describe the action to change something to use the Flux one directional flow from Facdbook?\r\n\r\nNeeded variations\r\nWith Flux\r\nWithout Flux\r\nHas been converted to Flux\r\n","end_time":null,"name_constraints":"","created_at":"2015-07-27T19:08:29.540Z","updated_at":"2015-07-27T19:08:31.171Z","user_id":1,"deleted_at":null,"selected_name":null,"title":"Change something to use the Flux flow","code":"79084361-change-something-to-use-the-flux-flow","public":true,"premium":true,"promotional_code":null,"rewards":null,"token":"tok_6geG4KgNTOK9W2","reward_for_winner":100,"reward_for_voters":70,"standard_voting":true,"email":null,"users_notified_at":null,"balances_processed_at":null};

class EntryStoreEmitter extends AppEventEmitter {
  get(entryCode) {
    return _entry;
  }
}

let EntryStore = new EntryStoreEmitter();

AppDispatcher.register(action => {
  switch (action.actionType) {
    case Actions.RECEIVE_ENTRY:
      _entry = action.payload;
      EntryStore.emitChange();
      break;

    default:
  }
})

export default EntryStore;
