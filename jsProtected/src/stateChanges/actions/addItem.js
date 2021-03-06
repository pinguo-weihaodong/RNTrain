import setSource from '../setSource';

// previous state and current props
const addItem = state => {
	state.items = state.items || [];
	const newItems = [
      	...state.items,
      	{
	        key: Date.now(),
	        text: state.value,
	        complete: false
	    }
    ];
    // selector & AsyncStorage
	return setSource(newItems, state.filter, {value: ''});
};



export { addItem };