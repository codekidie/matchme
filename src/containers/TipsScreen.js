import { connect } from 'react-redux';
import { compose, withState } from 'recompose';
import moment from 'moment';
import { bindActionCreators } from 'redux';
import { NavigationActions } from 'react-navigation';
import * as AuthStateActions from '../reducers/auth';
import * as GridStateActions from '../reducers/grid';
import TipsScreen from '../screens/TipsScreen';

export default compose(
  connect(
    state => ({
    	 tabIndex: state.grid.tabIndex,
	    tabs: state.grid.tabs,
	    data: state.grid.data,
    }),
    dispatch => ({
      authStateActions: bindActionCreators(AuthStateActions, dispatch),
      gridStateActions: bindActionCreators(GridStateActions, dispatch),
      navigate: bindActionCreators(NavigationActions.navigate, dispatch),
    }),
  ),
)(TipsScreen);
