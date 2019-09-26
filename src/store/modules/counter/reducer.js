import reducerFactory from '../../reducerFactory'
import { increment, decrement } from './types'

const INITIAL_STATE = {
  number: 0
}

const handlers = {}

handlers[increment().type] = state => ({ number: state.number + 1 })
handlers[decrement().type] = state => ({ number: state.number - 1 })

export default reducerFactory(INITIAL_STATE, handlers)
