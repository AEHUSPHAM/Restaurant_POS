# restaurant_pos

## Commit changes
DO NOT COMMIT STRAIT TO MAIN<br>
Commit to the feature's branch you are doing only.

## Convention
Each component name has to be Camel Case.
Each tab is equal to 4 spaces.

## Build Setup

```
# Project setup
npm install

# Compiles and hot-reloads for development
npm run serve

# Compiles and minifies for production
npm run build

# Lints and fixes files
npm run lint
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Conventions
Install npm to manage Javascript packages<br>
Naming convention and project structure please follow this guide for : https://itnext.io/how-to-structure-a-vue-js-project-29e4ddc1aeeb<br>
Functionality of each folder:
<ul>
<li>assets — Where you put any assets that are imported into your components</li>
<li>components — All the components of the projects that are not the main views</li>
<li>router — All the routes of your projects (in my case I have them in the index.js). Basically in Vue.js everything is a component. But not everything is a page. A page has a route like “/dashboard”, “/settings” or “/search”. If a component has a route it is routed.</li>
<li>views — To make the project faster to read I separate the components that are routed and put them in this folder. The components that are routed for me are more than a component since they represent pages and they have routes, I put them in “views” then when you check a page you go to this folder.</li>
</ul>

<b>Reference Document:</b><br>
_ https://stackoverflow.com/questions/58972232/what-is-the-purpose-of-main-js-app-vue-in-vue-app<br>
_ https://next.vuex.vuejs.org/<br>
