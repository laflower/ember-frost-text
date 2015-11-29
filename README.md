### Installation
<pre><code>ember install <font color='#FF5722'>frost-text</font></code></pre>

<br>

### Interface
###### Key: <font color='#E91E63'>Attributes</font> - <font color='#4CAF50'>CSS</font>
###### Actions - <font color='#E91E63'>`on-input`</font>
###### Data - <font color='#E91E63'>`value`</font>
###### <font color='#E91E63'>States</font> - <font color='#E91E63'>`autofocus`</font> / <font color='#E91E63'>`disabled`</font> / <font color='#4CAF50'>`error`</font> / <font color='#E91E63'>`readonly` / 

<br>

### Examples
###### Key: <font color='#9C27B0'>Bound data (downward flow)</font> - <font color='#00BCD4'>Event data (upward flow)</font> - <font color='#2196f3'>Action closure (upward function)</font>

<br>

###### autofocus
<pre><code>{{frost-text <font color='#E91E63'>autofocus</font>=<font color='#9C27B0'>true</font>}}</code></pre>

<br>

###### disabled
<pre><code>{{frost-text <font color='#E91E63'>disabled</font>=<font color='#9C27B0'>true</font>}}</code></pre>

<br>

###### error
<pre><code>{frost-text classNameBindings="<font color='#4CAF50'>error</font>"}}</code></pre>

<br>

###### read-only
<pre><code>{{frost-text <font color='#E91E63'>readonly</font>=<font color='#9C27B0'>true</font> <font color='#E91E63'>value</font>=<font color='#9C27B0'>"Read only text"</font>}}</code></pre>

<br>

###### on-input
template.hbs
<pre><code>{{frost-text <font color='#2196f3'>on-input</font>=(action <font color='#2196f3'>"updatePassword"</font>)}}</code></pre>

controller.js
<pre><code>actions: {
  <font color='#2196f3'>updatePassword</font>(<font color='#00BCD4'>attrs</font>) {
    console.log(<font color='#00BCD4'>attrs.value</font>);
  }
}</code></pre>

<br>

### Development

##### Setup
<pre><code>git clone https://bitbucket.ciena.com/scm/nms_frost/<font color='#FF5722'>frost-text</font>.git
cd <font color='#FF5722'>frost-text</font>
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
