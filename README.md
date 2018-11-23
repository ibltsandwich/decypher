# DECYPHER README

## [Wiki Design Documents](https://github.com/ibltsandwich/decypher/wiki)

## Description
Decypher allows users to upload and annotate song lyrics.


## Technologies Used
Ruby on Rails backend with React-Redux frontend.

Javascript's built-in getSelection API was used for annotations.
Unforunately, the API had some shortcomings and some workarounds had to be implemented in order to get annotations working semi-properly.

## Annotations
Once a selected text is highlighted, the "Start Annotation" button will appear which, when clicked, will show the annotation form. The annotation form contains placeholder text that is equal to the highlighted portion of lyrics.
After saving, they appear as a link that will direct the user to that annotation's url.

![AnnotationForm](https://i.imgur.com/9h6CnTr.png)

