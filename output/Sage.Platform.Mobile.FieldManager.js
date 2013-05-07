Ext.data.JsonP.Sage_Platform_Mobile_FieldManager({"tagname":"class","name":"Sage.Platform.Mobile.FieldManager","extends":null,"mixins":[],"alternateClassNames":["FieldManager"],"aliases":{},"singleton":true,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Sage.Platform.Mobile.FieldManager","members":{"cfg":[],"property":[{"name":"types","tagname":"property","owner":"Sage.Platform.Mobile.FieldManager","meta":{},"id":"property-types"}],"method":[{"name":"get","tagname":"method","owner":"Sage.Platform.Mobile.FieldManager","meta":{},"id":"method-get"},{"name":"register","tagname":"method","owner":"Sage.Platform.Mobile.FieldManager","meta":{},"id":"method-register"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":16,"files":[{"filename":"FieldManager.js","href":"FieldManager.html#Sage-Platform-Mobile-FieldManager"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Alternate names</h4><div class='alternate-class-name'>FieldManager</div><h4>Files</h4><div class='dependency'><a href='source/FieldManager.html#Sage-Platform-Mobile-FieldManager' target='_blank'>FieldManager.js</a></div></pre><div class='doc-contents'><p>Field Manager is a registry for field types that enables the Edit View layouts to\nsimply define <code>type: 'myFieldType'</code>.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-types' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sage.Platform.Mobile.FieldManager'>Sage.Platform.Mobile.FieldManager</span><br/><a href='source/FieldManager.html#Sage-Platform-Mobile-FieldManager-property-types' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sage.Platform.Mobile.FieldManager-property-types' class='name not-expandable'>types</a><span> : Object</span></div><div class='description'><div class='short'><p>The type map that translates string type names to constructor functions</p>\n</div><div class='long'><p>The type map that translates string type names to constructor functions</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-get' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sage.Platform.Mobile.FieldManager'>Sage.Platform.Mobile.FieldManager</span><br/><a href='source/FieldManager.html#Sage-Platform-Mobile-FieldManager-method-get' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sage.Platform.Mobile.FieldManager-method-get' class='name expandable'>get</a>( <span class='pre'>name</span> ) : Function</div><div class='description'><div class='short'>Retrieves a constructor for the given field name ...</div><div class='long'><p>Retrieves a constructor for the given field name</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : Object<div class='sub-desc'><p>Unique name of field</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Function</span><div class='sub-desc'><p>Constructor for the given field type</p>\n</div></li></ul></div></div></div><div id='method-register' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sage.Platform.Mobile.FieldManager'>Sage.Platform.Mobile.FieldManager</span><br/><a href='source/FieldManager.html#Sage-Platform-Mobile-FieldManager-method-register' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sage.Platform.Mobile.FieldManager-method-register' class='name expandable'>register</a>( <span class='pre'>name, ctor</span> )</div><div class='description'><div class='short'>Registers a field type by providing a unique name and the constructor to be called ...</div><div class='long'><p>Registers a field type by providing a unique name and the constructor to be called</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Unique string name of field, will be what is used in Edit View layouts.</p>\n</div></li><li><span class='pre'>ctor</span> : Function<div class='sub-desc'><p>Constructor function of field</p>\n</div></li></ul></div></div></div></div></div></div></div>"});