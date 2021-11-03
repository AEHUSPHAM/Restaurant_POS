# restaurant_pos

## Commit changes
KHÔNG COMMIT THẲNG VÀO main<br>
Chỉ commit vào branch của feature mình đang làm thôi nhó

## Quy ước
<li>Component khi đặt tên và khi gọi đều phải đặt tên dưới định dạng Camel Case (Viết hoa từng chữ cái đầu)</li>
<li>Một tab luôn có đơn vị là 4 spaces</li>


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
Nhớ cài npm để quản lý Javascript packages nha chú :v<br>
Naming convention với project structure làm theo link này: https://itnext.io/how-to-structure-a-vue-js-project-29e4ddc1aeeb<br>
Chức năng của từng folder đây nhó:
<ul>
<li>assets — Where you put any assets that are imported into your components</li>
<li>components — All the components of the projects that are not the main views</li>
<li>router — All the routes of your projects (in my case I have them in the index.js). Basically in Vue.js everything is a component. But not everything is a page. A page has a route like “/dashboard”, “/settings” or “/search”. If a component has a route it is routed.</li>
<li>views — To make the project faster to read I separate the components that are routed and put them in this folder. The components that are routed for me are more than a component since they represent pages and they have routes, I put them in “views” then when you check a page you go to this folder.</li>
</ul>

<b>Lưu ý:</b><br>
_ Component để trong file .vue (Single-file component)<br>

<b>Tài liệu tham khảo:</b><br>
_ https://stackoverflow.com/questions/58972232/what-is-the-purpose-of-main-js-app-vue-in-vue-app<br>
_ https://next.vuex.vuejs.org/<br>
