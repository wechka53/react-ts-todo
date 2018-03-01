import { connect }       from 'react-redux';
import { setVisibility } from 'actions/filter';
import Link              from 'components/Todo/Footer/Link/Link';


const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.filter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    setVisibility: () => dispatch(setVisibility(ownProps.filter))
});

export const LinkContainer = connect(mapStateToProps, mapDispatchToProps)(Link);