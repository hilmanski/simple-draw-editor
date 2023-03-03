# STATUS

Early progress - not ready yet

# About

Simple Draw - with text and element's drag n drop feature  
Using raw HTML element, without canvas

[Try online here simple-draw-editor.vercel.app](https://simple-draw-editor.vercel.app/) or run locally

## Alternative

This project is for learning purpose only.  
You should definitely check out:

-   [TLDraw](https://beta.tldraw.com/)
-   [Excalidraw](https://excalidraw.com/)

## Usage

-   Change frame (main backgorund) -> (default setting on right side) change the detail
-   Add text anywhere -> Choose text mode on Setting, then click on frame area
-   Edit text -> double click on text
-   Same with shape
-   Sort element position by drag and drop in Elements

## Tech Stack

-   React (installed with create-react-app)
-   Jotai (state management)
-   Tailwind CSS
-   Icons from tabler-icons.io
-   Draggable
-   React DnDKit

## Dev

Run locally

```
yarn dev
```

---

## DOING

## TODO

-   Shape:: can resized by drag corner
-   text - add background and padding - add rounded radius - change to textarea for multiline
-   Shortcuts: - change setting menu - delete when select element - enable copy paste
    show below setting. Toggle B/T/S
-   Add arrow
-   Save image (export as JPEG) (HTML2Canvas js)
-   Pen Tool ? (idea: wrap it in canvas? no the whole frame, just the element)
-   Change Draggable with dndkit, as long as code stillr eadable ?

-   save progress on localStorage
-   save preset
-   save action object -> for undo/redo
    research best way for this: https://www.google.com/search?q=how+to+implement+undo+redo+action+on+reactjs&oq=how+to+implement+undo+redo+action+on+reactjs&aqs=chrome..69i57j33i10i160j33i22i29i30.6951j0j1&sourceid=chrome&ie=UTF-8

---

## DONE / Changelog

-   refactor default value: at ElementGenerator and each of XSetting useState
    must be from 1 source of truth
-   UX -> onclick element directly go to that setting

-   Shape

    -   circle and settings
    -   square and settings

-   Element order
    very important, could be ruled at "Sidebar"
    maybe there's a fature in draggable for order (but dragged on sidebar)
    save two separate object?
    research first how other people do it

-   Sidebar

    -   list element
    -   hide element
    -   remove element

-   Text

    -   edit text
    -   move text
    -   change text property (color, size, family)

-   Background/Frame
    -   change property
