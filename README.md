### Installation
<pre><code>ember install <font color='#FF5722'>frost-text</font></code></pre>

<br>

### Interface
###### <font color='#2196f3'>Actions</font> - `on-input`
###### <font color='#E91E63'>Data (Attributes)</font> - `value`
###### <font color='#E91E63'>States (Attributes)</font> - `disabled` / `readonly` / `autofocus`
###### <font color='#4CAF50'>States (CSS)</font> - `error`

<br>

### Examples
###### <font color='#9C27B0'>Context variables</font>
###### <font color='#00BCD4'>Event variables</font>

##### autofocus
<pre><code>
  {{frost-text <font color='#E91E63'>autofocus</font>=<font color='#9C27B0'>true</font>}}
</code></pre>

<br>

##### disabled
<pre><code>
  {{frost-text <font color='#E91E63'>disabled</font>=<font color='#9C27B0'>true</font>}}
</code></pre>

<br>

##### error
<pre><code>
  {frost-text classNameBindings="<font color='#4CAF50'>error</font>"}}
</code></pre>

<br>

##### read-only
<pre><code>
  {{frost-text <font color='#E91E63'>readonly</font>=<font color='#9C27B0'>true</font> <font color='#E91E63'>value</font>=<font color='#9C27B0'>"Read only text"</font>}}
</code></pre>

<br>

##### on-input
###### template
<pre><code>
  {{frost-text <font color='#2196f3'>on-input</font>=(action <font color='#00BCD4'>"updatePassword"</font>)}}
</code></pre>

###### controller


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

#### Version History

|Version   |Changes                                        |
|----------|-----------------------------------------------|
|1.0.0 |Initial version |
|1.0.1 |Deprecating the 'errored' class in favor of 'error' |   
