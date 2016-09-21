var defaultState = {
	variants: [
		{
			id: 1,
			name: 'Grab a Snickers',
			checked: false
		},
		{
			id: 2,
			name: 'Hug a monkey',
			checked: false
		},
		{
			id: 3,
			name: 'Wash the water',
			checked: true
		}
	],
	fetching: false,
	fetched: false,
	error: null
};

export default function reducer (state = defaultState, action) {
	switch (action.type) {
		case 'todos/SET_CHECKED': {
			let newVariants = state.variants.map((todo) => {
				if (todo.id === action.payload.id) {
					todo = {...todo, checked: !todo.checked};
				}

				return todo;
			});

			state = {...state, variants: newVariants};
			break;
		}
		case 'todos/ADD': {
			let newVariants = [action.payload, ...state.variants];
			state = {...state, variants: newVariants};
			break;
		}
		case 'todos/REMOVE': {
			let newVariants = [...state.variants].filter((todo) => {
				return todo.id !== action.payload.id;
			});

			state = {...state, variants: newVariants};
			break;
		}
		default: {
			break;
		}
	}

	return state;
}
