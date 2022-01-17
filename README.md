#DOM Challenges 3 with ReactJS

< p > <a href="https://hyeranpark99.github.io/Group7_Assignment8/">Click Here</a> for website link < p >

    <h2>Goal:</h2>
    This is another exercise to further demonstrate an understanding of HTML, CSS, JS, DOM manipulation, and handling user events with ReactJS.This is also an opportunity to for improving organization in a React application.
        
    < h2 > Direction:</h2 >

    You'll be re-doing part of the functionality of the DOM Challenges III (grid/row/column/color) assignment, but with Create-React-App this time around. Instead of directly using the DOM API, you'll be managing state(hint: the currently selected color and the grid), writing methods within the class instead of standalone functions, and passing down bounded - event handlers to be fired off in the children components that have event listeners on them(note: since`this` will be bound in a parent, then any child component that receives the bound function as a passed down prop will be able to impact[perform calculations / operations relevant to the parent]the parent component).The MVP(minimum viable product) features can be achieved with four components: App.jsx, Table.jsx, TableCell.jsx, TableRow.jsx, where App.jsx is a stateful, class component and the other three components are purely presentational components.The MVP features are: a user can add a row, a user can add a column, and a user can select a color to change a single cell via click.As a user, I can add a row, add a column, select a color from a dropdown menu of colors, and click on individual cells to color in the cell.Stretch and optional features will be recreating the entirety(clear the grid, fill the grid, fill uncolored cells, etc) of DOM Challenges III, but in ReactJS.There should be a dedicated and individual feature branch for each function you plan on writing as well as a dedicated and individual feature branch for each component you write out.

Use this time to also do two things.
Navigate to this extension for Google Chrome and install it: https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en. This shows you the root React components that were rendered on the page, as well as the subcomponents that they ended up rendering. By selecting one of the components in the tree, you can inspect and edit its current props and state in the panel on the right. In the breadcrumbs you can inspect the selected component, the component that created it, the component that created that one, and so on. If you inspect a React element on the page using the regular Elements tab, then switch over to the React tab, that element will be automatically selected in the React tree.
Deploy this to GitHub Pages.Please refer to this link for guidance on this: https://codeburst.io/deploy-react-to-github-pages-to-create-an-amazing-website-42d8b09cd4d 
    (debug as necessary)

        < h2 > Assignment:</h2 >
            Complete the following user stories(bold denotes an MVP / mandatory feature, whereas italics denotes a stretch / optional feature):
As a user, I can:
add rows to the grid
add columns to the grid
remove rows from the grid
remove columns from the grid
select a color from a dropdown menu of colors
click on a single cell, changing its color to the currently selected color
fill all uncolored cells with the currently selected color
fill all cells with the currently selected color
clear all cells / restore all cells to their original / initial color
click and hold(mouseover) from a single cell(start) to a different cell(end) such that all affected / hovered - over cells from start to end change to the currently selected color

