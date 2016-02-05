import { createSelector, createStructuredSelector } from 'reselect';
import moment from 'moment';

export const doingsSelector = createStructuredSelector({
  doings: state => state.doingsReducer
});

export const todayDoingsSelector = createSelector(
  doingsSelector,
  ({doings}) => ({
    doings: doings.filter(doing => {
      const today = moment();
      return moment(doing.get('date')).isSame(today, 'day')
    })
  })
);

export const groupByStatusDoingsSelector = createSelector(
  doingsSelector,
  ({doings}) => ({
    doingsDone: doings.filter(doing => doing.get('done') === true),
    doingsToDo: doings.filter(doing => doing.get('done') === false)
  })
);

export const groupByStatusTodayDoingsSelector = createSelector(
  todayDoingsSelector,
  ({doings}) => ({
    doingsDone: doings.filter(doing => doing.get('done') === true),
    doingsToDo: doings.filter(doing => doing.get('done') === false)
  })
);
