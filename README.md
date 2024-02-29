# React + Vite

React - Make an Online Store with React, React Router, and the FakeStore API

This exercise will use React + React Router (+ possibly Context API?)

Must Haves

Create a new folder named the following
react-ecommerce

Initialize a git repository in that folder

Learning Objectives

After completing this assignment, you should…

Define Routes in a Single Page App
Use React-Router to allow a user to browse different pages


Level 1

Use the FakeStore API as your backend to populate your store.

Use React-Router to allow browsing.


Product Browsing

Use the FakeStore API to query for products in your store.

Using React-Router, allow a user to click on a product and fetch() that products data.

Category Browsing

Use the FakeStore API to query the available categories in your store.

Allow a user to click a specific category and see all the products in that category.

Allow a user to click on a product in that category and fetch() that products data.



Level 2

Checkout Cart


Use the FakeStore API to allow a user to add a product to their cart (see the "Update a cart" entry in the docs).

View a user's cart to see the available products.


NOTE: This endpoint returns a product ID, you'll need to fetch() the product data for each product to see the details.


Can you delete content from the user's cart? (there is a mockup for this in the documentation).


UI
Render the product information using "card" layout Example
Use Styled-Components, Bulma, or Tailwind.

  
Level 9000
Can you use the React Context API to store the user's cart data locally?