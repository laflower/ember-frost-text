import Ember from "ember";
import _ from "lodash/lodash";

export default Ember.TextField.extend({
	classNames: ["frost-text"],

	oninput: Ember.on("keyUp", function(attrs) {
		if (_.isFunction(this.attrs["on-input"])) {
			this.attrs["on-input"]({id: this.get("id"), value: this.get("value")});
		}
	})
});
