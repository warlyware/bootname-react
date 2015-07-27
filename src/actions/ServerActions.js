import AppDispatcher from '../dispatcher'
import Actions from '../constants'


export default {
  receiveEntry(payload) {
    AppDispatcher.dispatch({
      actionType: Actions.RECEIVE_ENTRY,
      payload: payload
    });
  }
}
