# Getting Started with Comment App

This project is created during fosfer hackathon .

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Learn More

You can check my approach on [These amazing slides](https://www.canva.com/design/DAFHNsWXx-s/_624rjBuMrthvbcXJArlSw/view?utm_content=DAFHNsWXx-s&utm_campaign=designshare&utm_medium=link&utm_source=publishpresent).

# Approach

Problem Statement: Make a comment app.
Tech-Stack:
React(for creating ui)
redux and redux-toolkit(for state management)
MaterialUI( for icons and cards)
styled-componet ( for custom styling the app)
Challenges:
Make a beautiful and responsive ui.
Render list of nested comments in sorted way
Manage state of the application
Approach :
1.The first challenge is pretty intresting and fun. I have to create responsive and beautiful UI as given in the mockup file. I am using styled component , react and materialUI in the process. 2. The second challenge is core part of the application.
I have to render the nested comments. There are two approaches that are comming in my mind. The first one is naive just rendering comment one by one. but there is a catch I don't know how I will manage the nested commnets as there is no realtion between commnets.
so I came up with another approach. we are creating array of commnets with parrentId property.
parent comment will have this property set to null but child comment will have set it's parentid.
in this way I will able to rennder all the nested commnets.
As all the nested comments array are flatten.

#State mangement
I am using redux and redux tool kit for state mangement and share data between components.
