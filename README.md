# DECYPHER README

## [Live Link](https://decypher.herokuapp.com/#/)

## [Wiki Design Documents](https://github.com/ibltsandwich/decypher/wiki)

## Description
Decypher allows users to upload and annotate song lyrics.


## Technologies Used
Ruby on Rails backend with React-Redux frontend.

Javascript's built-in getSelection API was used for annotations.
Unforunately, the API had some shortcomings and some workarounds had to be implemented in order to get annotations working properly. For example, highlighting an area and calling window.getSelection() provides you with the start and end indices of your selection, but only within the confines of the parent HTML Element.

<img src=https://i.imgur.com/RnlRpPz.png alt="getSelection" width="200"/>

Therefore, having the full lyrics in one ```<p>``` tag gives the proper indices for whatever is highlighted, but once links to the annotations are added in as ```<a>``` tags, this disrupts the API's ability to grab the proper indices. After an inserted ```<a>``` tag, the next immediate index doesn't pick up where it left off, and instead resets back to 0. The API doesn't know to ignore HTML tags and can only accurately grab selections that are confined to one set of tags.

## Annotations
The workaround here was to separate each line of the lyrics into it's own ```<div>``` tag with an id corresponding to the line number.
This way the index will always start at 0 for each line, and line numbers can be used to accurately map annotations to lyrics.

<img src="https://i.imgur.com/xKZRHAa.png" alt="AnnotationHTML" width="700"/>

Once a selected text is highlighted, the "Start Annotation" button will appear which, when clicked, will show the annotation form. The annotation form contains placeholder text that is equal to the highlighted portion of lyrics.
After saving, they appear as a link that will direct the user to that annotation's url.

<img src="https://i.imgur.com/qGS3Z9J.png" alt="AnnotationForm" width="700"/>

