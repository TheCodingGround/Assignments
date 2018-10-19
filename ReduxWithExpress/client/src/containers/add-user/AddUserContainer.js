import { connect } from 'react-redux'
import AddUser from './AddUser'
import { addUser } from '../../redux/user'
import { isSavingUser, userSaved } from '../../redux/user'
import userActions from '../../redux/user/actions'

const mapStateToProps = (state) => ({
    isSaving: isSavingUser(state),
    isSaved: userSaved(state),
    id: state.user.id,
})

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (user) => dispatch(addUser(user)),
    reset: () => dispatch({ type: userActions.RESET })
})

export default connect(mapStateToProps, mapDispatchToProps)(AddUser)