### Installation
<pre><code>ember install <font color='#FF5722'>frost-text</font></code></pre>

<br>

### Interface
###### <font color='#2196f3'>Actions</font> - `on-input`
###### <font color='#E91E63'>Attributes</font> - `value`  
###### <font color='#4CAF50'>States (CSS)</font> - `disabled` / `error` / `readonly` / `autofocus`


<br>
#9C27B0 Context variables
#00BCD4 Event variables
### Examples
###### <font color='#9C27B0'>State instance variables</font>

###### autofocus
<pre><code>
	{{frost-text id="basic" <font color='#4CAF50'>autofocus</font>=true}}
</code></pre>

<br>

###### disabled
<pre><code>
	{{frost-text id="disabled" <font color='#4CAF50'>disabled<font>=true}}
</code></pre>

<br>

###### error
<pre><code>
	{{frost-text id="error" classNameBindings="error"}}
</code></pre>

<br>

###### read-only
<pre><code>
  {{frost-text id="read-only" <font color='#4CAF50'>readonly</font>=true value="Read only text"}}
</code></pre>

<br>

###### on-input
<pre><code>
  {{frost-text id="action" <font color='#2196f3'>on-input</font>=(action <font color='#9C27B0'>"updatePassword"</font> )}}
</code></pre>

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

##### Version History
|Date             |Version   |Changes                                        |
|-----------------|----------|-----------------------------------------------|
|Nov. 25, 2015    |1.0.0     |Adding readme file and cleaning up CSS.        |
