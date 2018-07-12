import helpers from '../helpers';

/*
 * action types
 */

export const ITEMS_IS_LOADING = 'ITEMS_IS_LOADING';
export const RECEIVE_ITEMS = 'RECEIVE_ITEMS';
export const ITEMS_HAS_ERRORED = 'ITEMS_HAS_ERRORED';


/*
 * action creators
 */

export const itemsIsLoading = bool => ({
  type: ITEMS_IS_LOADING,
  isLoading: bool,
});

export const receiveItems = items => ({
  type: RECEIVE_ITEMS,
  items,
});

export const itemsHasErrored = bool => ({
  type: ITEMS_HAS_ERRORED,
  hasErrored: bool,
});

export const getItems = (url, query) => dispatch => {
  dispatch(itemsIsLoading(true));
  return helpers.fetchAllData(url, query)
    .then(response => {
      dispatch(itemsIsLoading(false));
      return response;
    })
    .then(response => {
      response = response.data.length ? response.data : [];
      dispatch(receiveItems(response));
    })
    .catch(() => dispatch(itemsHasErrored(true)));
};