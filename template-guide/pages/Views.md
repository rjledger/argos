Argos-SDK is built around the concept of Views with each View type designed to present the user data in the most functional manner. Each of the given View types are tightly bound to the format of data they represent: List View for listing multiple items, Detail View for displaying many properties of a single entity and Edit View for editing those properties. These base Views can be extended to provide specific purposes such as using the Edit View to create a login page, or the List View for a settings page.

##View
Every view derives from the base View class which includes the following components:   

* Toolbar setup, and custom Toolbar items
* Transition events
* Widget Template
* Setting the Titlebar text
* Basic Refresh logic
* Unique Id property

While the list seems short you get a fully functioning transition system with navigation history and context, any number of customizable toolbars with toolbar items, base markup and id setup, and a mechanism for refreshing the view when required.

####Properties
```javascript
id: '', // Must be unique to entire application. It is used to register and reference the view
titleText: '', // Default text to show in the Title bar
security: '', // can be used to determine if user has access - implementation left up to product
options: {}, // the data passed to the view from the previous view
refreshRequired: false, // during transition if this is true it will cause the view to refresh
widgetTemplate: Simplate, // the views HTML markup
domNode: HTMLNode, // all views are Dijits and domNode refers to the topmost container element defined in widgetTemplate
tools: {} // toolbars and their item definitions
```

###Functions
```javascript
createToolLayout(); // Defines this.tools
startup(); // Called after View has been added to DOM
initConnects(); // Called after startup, all connections should be defined here
refreshRequiredFor(options); // Called before transition, sets refreshRequired and is passed the show options from the previous view
refresh(); // Called during transition if refreshRequired is true
show(options, transitionOptions); // called to transition to this view, options is set to views option property and transitionOptions is passed to the transition manager
```