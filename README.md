# STATUS

Early progress - not ready yet

# About

Simple Draw - with text and element's drag n drop feature  
Using raw HTML element, without canvas

[Try online here](https://simple-draw-editor.vercel.app/) or run locally

## Usage

-   Change frame (main backgorund) -> (default setting on right side) change the detail
-   Add text anywhere -> Choose text mode on Setting, then click on frame area
-   Edit text -> double click on text

## DOING

-   Show element list in FIles/Elements
    Name = text {id} -> save name in state - name could be edited (name shown in files/elements)
    delete
    hide (eye icon)

## TODO

-   add shape (SVG ?) - resizeale on drage up/down
-   text - add background and padding - add rounded radius - change to textarea for multiline
-   Shortcuts: - change setting menu - delete when select element
-   save progress on localStorage
-   save preset
-   save action object -> for undo/redo
    research best way for this: https://www.google.com/search?q=how+to+implement+undo+redo+action+on+reactjs&oq=how+to+implement+undo+redo+action+on+reactjs&aqs=chrome..69i57j33i10i160j33i22i29i30.6951j0j1&sourceid=chrome&ie=UTF-8

## Tech Stack

-   React (installed with create-react-app)
-   Jotai (state management)
-   Tailwind CSS
-   Icons from tabler-icons.io

## Dev

Run locally

```
yarn dev
```
