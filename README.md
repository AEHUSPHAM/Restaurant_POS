# restaurant_pos

## Commit changes
KHÔNG COMMIT THẲNG LÊN REPO CHÍNH<br>
Quy trình:
<li>Fork repo về</li>
<li>Clone repo đã fork về local</li>
<li>Push changes lên repo đã fork (không phải repo chính nhe)</li>
<li>Tạo pull requests tới repo chính</li>



## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Conventions
Nhớ cài npm để quản lý Javascript packages nha chú :v<br>
Naming convention với project structure làm theo link này: https://itnext.io/how-to-structure-a-vue-js-project-29e4ddc1aeeb<br>
Chức năng của từng folder đây nhó:
<ul>
<li>assets — Where you put any assets that are imported into your components</li>
<li>components — All the components of the projects that are not the main views</li>
<li>mixins — The mixins are the parts of javascript code that is reused in different components. In a mixin you can put any component’s methods from Vue.js they will be merged with the ones of the component that uses it.</li>
<li>router — All the routes of your projects (in my case I have them in the index.js). Basically in Vue.js everything is a component. But not everything is a page. A page has a route like “/dashboard”, “/settings” or “/search”. If a component has a route it is routed.</li>
<li>views — To make the project faster to read I separate the components that are routed and put them in this folder. The components that are routed for me are more than a component since they represent pages and they have routes, I put them in “views” then when you check a page you go to this folder.</li>
</ul>

Có 1 cái video tutorial về project structure: https://www.youtube.com/watch?v=B1e7grp2svY

<b>Lưu ý:</b><br>
_ Component để trong file .vue (Single-file component)<br>

<b>Tài liệu tham khảo:</b><br>
_ https://stackoverflow.com/questions/58972232/what-is-the-purpose-of-main-js-app-vue-in-vue-app<br>
_ https://next.vuex.vuejs.org/<br>
