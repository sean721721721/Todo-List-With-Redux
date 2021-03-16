import { createStore } from 'redux';

const INITIAL_STATE = {
  data: [
  	{title: 'Get up early', done: false},
    {title: 'Have Breakfast', done: false},
    {title: 'Start coding', done: false}
	]
	// data: [
	// 	'javascipt',
	// 	'css',
	// 	'html'
	// ]
}

function tasks(state = INITIAL_STATE, action) {
	console.log(action.task)
  switch (action.type) {
    case 'ADD_TASK':
			return {
				...state,
				data: [...state.data, action.task]
			}
		case 'REMOVE_TASK':
			return {
				...state,
				data: [...action.tasks]
			}
		default:
			return state;
  }
}

const store = createStore(tasks);

export default store;