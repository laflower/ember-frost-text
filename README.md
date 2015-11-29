### Installation
<pre><code>ember install frost-text</code></pre>

<br>

### Interface <font size=3><font color='#E91E63'>`ATTRIBUTES`</font> - <font color='#4CAF50'>`CSS`</font></font>
###### Actions - <font color='#E91E63'>`on-input`</font>
###### Data - <font color='#E91E63'>`value`</font>
###### States - <font color='#E91E63'>`autofocus`</font> / <font color='#E91E63'>`disabled`</font> / <font color='#4CAF50'>`error`</font> / <font color='#E91E63'>`readonly`</font>

<br>

### Examples <font size=2><font color='#FF9800'>EMBER KEYWORDS</font> - <font color='#9C27B0'>BOUND ATTRIBUTES <font size=1>(downward flow)</font><font color='#673AB7'>BOUND DATA  <font size=1>(downward flow)</font></font> - <font color='#2196f3'>ACTION CLOSURE <font size=1>(upward flow)</font></font> - <font color='#00BCD4'>EVENT DATA <font size=1>(upward flow)</font></font></font>
###### autofocus
<pre><code>{{frost-text <font color='#E91E63'>autofocus</font>=<font color='#673AB7'>true</font>}}</code></pre>

<br>

###### disabled
<pre><code>{{frost-text <font color='#E91E63'>disabled</font>=<font color='#673AB7'>true</font>}}</code></pre>

<br>

###### error
_controller.js_
<pre><code><font color='#9C27B0'>isError</font>: <font color='#673AB7'>true</font></code></pre>

_template.hbs_
<pre><code>{frost-text <font color='#FF9800'>classNameBindings</font>="<font color='#9C27B0'>isError</font>:<font color='#4CAF50'>error</font>"}}</code></pre>

<br>

###### read-only
<pre><code>{{frost-text <font color='#E91E63'>readonly</font>=<font color='#673AB7'>true</font> <font color='#E91E63'>value</font>=<font color='#673AB7'>"Read only text"</font>}}</code></pre>

<br>

###### on-input
_template.hbs_
<pre><code>{{frost-text <font color='#E91E63'>on-input</font>=(<font color='#FF9800'>action</font> <font color='#2196f3'>"updatePassword"</font>)}}</code></pre>

_controller.js_
<pre><code><font color='#FF9800'>actions</font>: {
  <font color='#2196f3'>updatePassword</font>(<font color='#00BCD4'>attrs</font>) {
    console.log(<font color='#00BCD4'>attrs.value</font>);
  }
}</code></pre>

<br>

### Development

##### Setup
<pre><code>git clone https://bitbucket.ciena.com/scm/nms_frost/frost-text.git
cd frost-text
npm install && bower install
</code></pre>

<br>

##### Development server
A dummy application for development is available under frost-text/tests/dummy.
To run the server run `ember server` from the root of the project and visit the app at http://localhost:4200

<br>

##### Tests
Run `ember test` from the root of the project to execute the test suite and output code coverage

<br>

### Version History

|Version |Changes |
|--------|--------|
|1.0.0   |Initial version |
|1.0.1   |Deprecating the 'errored' class in favor of 'error' |   
