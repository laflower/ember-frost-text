import Ember from "ember";
import _ from "lodash/lodash";

const FrostText = Ember.TextField.extend({
	classNames: ["frost-text"],
	classNameBindings: ['isDisabled:disabled'],
	attributeBindings: [
		'isDisabled:disabled'
	],

	isDisabled: Ember.computed('states.[]', function() {
		return _.includes(this.get('states'), 'disabled');
	}),

	oninput: Ember.on("input", function() {
		if (_.isFunction(this.attrs["on-input"])) {
			this.attrs["on-input"]({id: this.get("id"), value: this.get("value")});
		}
	})
});

FrostText.reopenClass({
	positionalParams: 'states'
});

export default FrostText;

