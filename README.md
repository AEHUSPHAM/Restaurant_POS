# restaurant_pos

## Design documents
Design documents are stored in the `documents` folder.

## Important notes
<ul>
<li>We are using Vue 3, Bootstrap v5.0.2, jQuery 3.5.1, so pay attention to the framework version when looking for documents</li>
<li>DO NOT use the relative path like "./file" or "../../file" to import a file, use the "@" alias which refers to the src folder. For example, "@/components/Menu.vue"</li>
<li>Tutorial for vue-router in Vue 3: https://www.vuemastery.com/blog/vue-router-a-tutorial-for-vue-3/</li>
<li>The routes are configured in "@/router/index.js"</li>
<li>Each component's name has to be camel case , e.g., MyComponent, ...</li>
<li>Each variable's name should be lowercase with underscore e.g., my_var, my_var_2, ...</li>
<li>Each function's/method's name should be camel case with lowercase first letter, e.g., myFunction, ...</li>
<li>Each tab is equal to 4 spaces.</li>
</ul>

## Build Setup

```
# Installs required Node packages
npm install

# Compiles and hot-reloads for development
npm run serve

# Compiles and minifies for production
npm run build

# Lints and fixes files
npm run lint
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## Project Structure
<ul>
<li>assets — Where you put any assets that are imported into your components</li>
<li>components — All the components of the projects that are not the main views</li>
<li>router — All the routes of your projects (in my case I have them in the index.js). Basically in Vue.js everything is a component. But not everything is a page. A page has a route like “/dashboard”, “/settings” or “/search”. If a component has a route it is routed.</li>
</ul>
 

## References
- https://itnext.io/how-to-structure-a-vue-js-project-29e4ddc1aeeb<br>
- https://stackoverflow.com/questions/58972232/what-is-the-purpose-of-main-js-app-vue-in-vue-app<br>
- https://next.vuex.vuejs.org/<br>
- https://www.vuemastery.com/blog/vue-router-a-tutorial-for-vue-3/<br>
