Ext.data.JsonP.v2_appendix_amd({"guide":"<h1>AMD - Define and Declare</h1>\n<div class='toc'>\n<p><strong>Contents</strong></p>\n<ol>\n<li><a href='#!/guide/v2_appendix_amd-section-1'>Define</a></li>\n<li><a href='#!/guide/v2_appendix_amd-section-2'>Declare</a></li>\n</ol>\n</div>\n\n<p>Argos-SDK uses Dojo's AMD loader system for defining modules, declaring \"classes\" and loading said modules.</p>\n\n<p>AMD stands for Asynchronous Module Definition which means that you define all your parts into separate files and when your page loads it loads asynchronously only the modules it needs to display that page.</p>\n\n<p>Concretely you get:</p>\n\n<ul>\n<li>Automatic dependent components being loaded first, no more \"Oh, you need to include this script before that script...\";</li>\n<li>Faster loading as the loader runs asynch and handles all the tricky queuing and waiting;</li>\n<li>Away from giant objects like <code>dojo</code> or <code>$</code> that contain a myriad of functions; and</li>\n<li>Easier to locate usage, with explicit dependencies you can quickly call up what modules are in use.</li>\n</ul>\n\n\n<h2 id='v2_appendix_amd-section-1'>Define</h2>\n\n<p>All modules will be wrapped in a <code>define()</code> statement. For the purposes of argos-template it will always use the following skeleton:</p>\n\n<pre><code>define( /*Path To File*/ , \n['Array of dependencies to require'], function(\n/*the returned object of each dependency*/\n) {\nreturn {}; // the object that this module defines, to then be required in other modules\n});\n</code></pre>\n\n<p>An example:</p>\n\n<pre><code>define('Sage/Platform/Mobile/Format', [\n    'dojo/_base/lang',\n    'dojo/string'\n], function(\n    lang,\n    string,\n) {\n    return lang.setObject('<a href=\"#!/api/Sage.Platform.Mobile.Format\" rel=\"Sage.Platform.Mobile.Format\" class=\"docClass\">Sage.Platform.Mobile.Format</a>', { ... });\n});\n</code></pre>\n\n<p>At first glance the paths don't quite look like paths, you can setup shortcuts to your folder structure in your <code>index-dev.html</code> file to point to libraries or setup a namespace etc.</p>\n\n<p>Breaking this down, this file should will be loaded from: <code>../../argos-sdk/src/Format.js'.\nIt see's that it requires the two files: 'lang.js' and 'string.js' from the dojo library so it goes and loads those, and their dependencies (and so on), once</code>lang<code>and</code>string<code>are loaded and initialized then our</code>Format` module is started and is passed in the result of those two files into the function.</p>\n\n<p>Now we are within the <code>{ }</code> which can be considered \"private\". Things defined here are only ran once during the loading process and if the return object does not expose them they are no longer accessible.</p>\n\n<p>In this case we are returning a global object with some various properties. So if another module adds this <code>Format</code> module as a dependency the object that is passed to their function will be the object <code><a href=\"#!/api/Sage.Platform.Mobile.Format\" rel=\"Sage.Platform.Mobile.Format\" class=\"docClass\">Sage.Platform.Mobile.Format</a></code>.</p>\n\n<p>It is important to note that the loader only initializes each module once and it passes the references to any module that needs it.</p>\n\n<h2 id='v2_appendix_amd-section-2'>Declare</h2>\n\n<p>The example above used <code>lang.setObject()</code> to set a global object, however, in most cases you will use <code>declare</code> which sets up a factory-like class where you would use the <code>new</code> keyword to create instances of.</p>\n\n<p>Meaning if you have this:</p>\n\n<pre><code>define('Mobile/Template/Views/Account/List', [\n    'dojo/_base/declare',\n    'dojo/string',\n    'Sage/Platform/Mobile/List'\n], function(\n    declare,\n    string,\n    List\n) {\n    return declare('Mobile.Template.Views.Account.List', [List], {\n        // Localization\n        titleText: 'Accounts',\n\n        //Templates\n        itemTemplate: new Simplate([\n            '&lt;h3&gt;{%= $.AccountName %}&lt;/h3&gt;'\n        ]),\n\n        //View Properties\n        id: 'account_list',\n        detailView: 'account_detail',\n        insertView: 'account_edit',\n        querySelect: [\n            'AccountName'\n        ],\n        resourceKind: 'accounts',\n\n        formatSearchQuery: function(searchQuery) {\n            return string.substitute('AccountName like \"%${0}%\"', [\n                this.escapeSearchQuery(searchQuery.toUpperCase())\n            ]);\n        }\n    });\n});\n</code></pre>\n\n<p>Then when you require (as a dependency) in another module you need to use <code>new</code>, or refer to the <code>prototype</code>:</p>\n\n<pre><code>define('Mobile/Template/ApplicationModule', [\n    Mobile/Template/Views/Account/List\n], function(AccountList) {\n\nvar viewInstance = new AccountList();\nvar accountListTitle = AccountList.prototype.titleText;\n\n});\n</code></pre>\n","title":"AMD - Define and Declare"});