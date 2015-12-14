var todoConstants = require('./constants');

module.exports = {
	addTodo: function(text) {
		this.dispatch(todoConstants.ADD_TODO, {text: text});
	},

	toggleTodo: function(id) {
		this.dispatch(todoConstants.TOGGLE_TODO, {id: id});
	},

	clearTodos: function() {
		this.dispatch(todoConstants.CLEAR_TODOS);
	}
}
