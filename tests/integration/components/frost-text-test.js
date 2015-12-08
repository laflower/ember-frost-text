/* jshint expr:true */
import Ember from 'ember';
import { expect, assert } from 'chai';
import {
  describeComponent,
  it
  } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'frost-text',
  'Integration: FrostTextComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#frost-text}}
      //     template content
      //   {{/frost-text}}
      // `);

      this.render(hbs`{{frost-text}}`);
      expect(this.$()).to.have.length(1);
    });
    it('action is fired on input', function() {
      this.set('input', false);
      this.on('test-action', function() {this.set('input', true); });

      this.render(hbs`{{frost-text id="action" on-input=(action "test-action")}}`);
      Ember.run(()=> {
        $('#action').focus().val("Blah").focusout();
      });
      assert.isTrue(this.get('input'), 'confirmed');
    });
  }
);
