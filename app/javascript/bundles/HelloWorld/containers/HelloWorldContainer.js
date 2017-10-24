import { connect } from 'react-redux'
import HelloWorld from '../components/HelloWorld'
import actions from '../models/name'

const mapStateToProps = (state) => ({ name: state.name })

export default connect(mapStateToProps, actions)(HelloWorld)
