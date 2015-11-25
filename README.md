### Installation
<pre><code>ember install <font color='#FF5722'>frost-text</font></code></pre>

<br>

### Interface
###### <font color='#2196f3'>Actions</font> - `oninput`
###### <font color='#4CAF50'>States (CSS)</font> - `disabled` / `errored` / `read-only`


<br>

### Examples
###### <font color='#9C27B0'>State instance variables</font>

###### default
<pre><code>
&lt;div&gt;
	{{frost-text id="basic"}}
&lt;/div&gt;
</code></pre>

<br>

###### disabled
<pre><code>
&lt;div&gt;
	{{frost-text id="disabled" disabled=true}}
&lt;div&gt;
</code></pre>

<br>

###### errored
<pre><code>
&lt;div&gt;
	{{frost-text id="errored" classNameBindings="errored"}}
&lt;/div&gt;
</code></pre>

<br>

###### read-only
<pre><code>
&lt;div&gt;
  {{frost-text id="read-only" readonly=true class="read-only" value="Read only text"}}
&lt;/div&gt;
</code></pre>

<br>

###### oninput
<pre><code>
&lt;div&gt;
  {{frost-text id="action" on-input=(action "text" )}}
&lt;/div&gt;
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
<table style="width:100%">
	<tr>
    <th>Date</th>
    <th>Version</th>
    <th>Changes</th>
  </tr>
	<tr>
    <td>Nov. 25, 2015</td>
    <td>1.0.0</td>		
    <td>Adding readme file and cleaning up CSS.</td>
  </tr>
  <tr>
    <td></td>
    <td></td>		
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>		
    <td></td>
  </tr>
</table>
