Lightspeedlet
===

Little helper for quickly switching from the front end of your site to the backend.

Create a new snippet in your current theme called `lightspeedlet.rain`, then paste the contents of [this file there](./lightspeedlet.rain).

Then open up `custom.rain` and add the following somewhere before the closing `</head>` tag.

```html
...
  {% include 'snippets/lightsppedlet.rain' %}
</head>
```


Drag [this ⚡️](javascript:void%20function(){function%20e(){var%20e=document.head.querySelector(%22%23LightspeedletShopUrl%22).getAttribute(%22content%22),t=document.head.querySelector(%22%23LightspeedletShopEdit%22);return%22index%22===t.getAttribute(%22name%22)%3Fe:e+t.getAttribute(%22content%22)}console.log(e()),window.open(e(),%22_Lightspeedlet%22)}();) into your Bookmark bar.