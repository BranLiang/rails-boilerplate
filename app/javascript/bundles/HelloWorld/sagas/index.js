// import { takeLatest } from 'redux-saga/effects'

/* ------------- Types ------------- */

/* ------------- Sagas ------------- */

/* ------------- API ------------- */

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield [
    // some sagas only receive an action
    // takeLatest(StartupTypes.STARTUP, startup),

    // some sagas receive extra parameters in addition to an action
    // takeLatest(GithubTypes.USER_REQUEST, getUserAvatar, api)
  ]
}
