# CSS Image Board Grid Creator

> Easy image board creation with user customisation

Simply add your images to the folder /images, open up index.html and click the images on your site customise the layout!

or create your own folder and simply change the location of the folder const in app.js.

You can find my example website over at www.mattmccherry.com/imageboard.html.

To setup on your server make sure you .htaccess gives access to the folder for example.

1. Create the file .htaccess in the folder with the images.
2. Insert

> Options +Indexes
RewriteRule ^$ - [F]

This will make the folder browserable for the AJAX request.