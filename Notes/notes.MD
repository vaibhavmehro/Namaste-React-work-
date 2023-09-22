Types of CSS Used
*Normal Native CSS
*scss
*inline CSS
*Component library : Material UI , Base UI , Ant , Chakra
*Styled Components
*Tailwind CSS Framework


-> Never Use the seperate bundlers or lazy method of import under the main APP layout or other component because it will render again and again. 
->In the tailwind css we can give the expact px in the square bracket of the property.
->lazy method of loading is on demand loading which react does not allow and suspend the change so we use suspense keyword method.
->Props drilling is the process by which we add the props from parents to its child to make the changes in the very lowest children. 
->Redux is used to handle the data layer and to manage the data.The modification of the element in the redux store is done by the reducer function. 
-> When we call the add item of menu it dispatches the action which calls the reducer function which update the slice of the redux store and item get added to the cart which is there in the redux store.