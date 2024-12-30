# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

<h1>Github Avatar Finder using React</h1>

<h2>Project set up</h2>
<h5>1. create project - npm create vite@latest</h5>
<h5>2. go to project folder - cd project name</h5>
<h5>3. install all the dependencies - npm install</h5>
<h5>4. install axios- npm install axios</h5>
<h5>5. then run the project - npm run dev</h5>
<h5>2. go to project folder - cd project name</h5>

<h2>components</h2>

<h3>Avatar container component</h3>
<P>This compoennt is used hold the search box and the result avatar which will be rendered in the webpage. in this compoent used useState hook for holding the username state which setter function can be passed as the prop into the search box component .after all this the conditional rendering happen on the basis of the length of the username and the username is passed to the avatar component as prop and key so that any change in username state it will rerender the component.</P>

<h3>SearchBox component</h3>
<P>This component is used for searching the username which provide a input field for this.in this component imported the useDebounce custom hook for the debouncing purpose.</P>

<h3>Avatar component</h3>
<p>This component is used to hold the all the information about the github user avatar.in this component the actual downloading of the data happens by the username passed from avatar container component using axios the network call happens and all the loaded data is stored in an object .in this component used useState hook for holding the avatar data and the loading state .after all this the content is rendered conditionally wheather the data loaded or not if loaded then display the data otherwise display the loading component.</p>

<h3>Loading Component</h3>
<p>This component is used to display the loading state in the application if the data is not loaded .This component is used for better user interaction and gives good user experience.</p>

<h2>Hooks</h2>
<h3>useDebounce Hook</h3>
<P>This is a custom hook for the implementation of the debouncing feature in so that we can prevent the excessive network call every time we hit the key.This feature is used to make the performance better and gives less load to the server.</P>


<h2>Visit site with Netlify <a href="https://nikhil-github-avatar-finder.netlify.app">visit site</a></h2>

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
