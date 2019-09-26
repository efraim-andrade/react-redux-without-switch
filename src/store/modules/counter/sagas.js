import { put, takeLatest, all } from 'redux-saga/effects'

import { increment, decrement } from './types'

const delay = ms => new Promise(res => setTimeout(res, ms))

export function* incrementAsync() {
  yield delay(2000)
  yield put(increment())
}

export function* decrementAsync() {
  yield delay(2000)
  yield put(decrement())
}

export default all([
  takeLatest('INCREMENT', incrementAsync),
  takeLatest('DECREMENT', incrementAsync)
])
