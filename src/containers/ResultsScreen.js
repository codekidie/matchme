import { connect } from 'react-redux';
import { compose, withState } from 'recompose';
import moment from 'moment';
import { bindActionCreators } from 'redux';
import { NavigationActions } from 'react-navigation';
import * as AuthStateActions from '../reducers/auth';

import ResultsScreen from '../screens/ResultsScreen';

export default compose(
 connect(
    state => ({

    }),
    dispatch => ({
      authStateActions: bindActionCreators(AuthStateActions, dispatch),
      navigate: bindActionCreators(NavigationActions.navigate, dispatch),
    }),
  ),
)(ResultsScreen);
