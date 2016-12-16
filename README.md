# Todo App example with SN7, Vue.js and Redux

[![Build status](https://img.shields.io/travis/SenseNet/sn-vue-redux-todo-app.svg?style=flat)](https://travis-ci.org/SenseNet/sn-vue-redux-todo-app)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/b09d599538fa49e9bb1cb92df4042ada)](https://www.codacy.com/app/herflis33/sn-vue-redux-todo-app?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=SenseNet/sn-react-redux-todo-app&amp;utm_campaign=Badge_Grade)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat)](http://commitizen.github.io/cz-cli/)

This example is simple todo app built with Vue+Redux upon Sense/Net ECM which has been prepared to demonstrate how to use the new Sense/Net ECM related libraries [sn-client-js](https://github.com/SenseNet/sn-client-js)
and [sn-redux](https://github.com/SenseNet/sn-redux). 

## Quick start

```
$ git clone https://github.com/SenseNet/sn-vue-redux-todo-app.git
$ cd sn-vue-redux-todo-app
$ npm install
$ npm run dev
```

## Settings

To use this example you'll need a Sense/Net ECM portal. To connect the app with the portal set your site's url as the app's siteUrl

```
import { SetSiteUrl } from 'sn-client-js';

SetSiteUrl('https://mysite.com');
```

Go to your portal's Portal.setting (/Root/System/Settings/Portal.settings) and check the allowed origins. To get the app working you have to add the app's domain as an allowed origin so that the app can send requests to the 
portal and get or set data.

```
{
   AllowedOriginDomains: [ "localhost:13505" ]
}
```

For further information about CORS in Sense/Net ECM check [this](http://wiki.sensenet.com/Cross-origin_resource_sharing) article.

The example app uses one of the built-in TaskList Content in the default Sense/Net ECM install (/workspaces/Project/budapestprojectworkspace/Tasks). If you removed this Content and its children tasks earlier
or want to try with another TaskList change the value of the ```rootUrl``` variable in ```AddTodo.vue``` and ```App.vue``` to the chosen list's path.

The example app demonstrates not only how to fetching data but also Content creation and delete. The app doesn't provide authentication because of it's simplicity so you have to make some permission changes
in your Sense/Net ECM portal to let Visitor users adding and removing tasks from the chosen parent list.
If you are not familiar with Sense/Net's permission system check the following wiki articles:
* [Sense/Net ECM Permission System](http://wiki.sensenet.com/Permission_System)
* [How to set permissions on a content in Sense/Net ECM](http://wiki.sensenet.com/How_to_set_permissions_on_a_content)

## Related documents

* [sn-client-js API reference](http://www.sensenet.com/documentation/sn-client-js/index.html)
* [sn-redux API reference](http://www.sensenet.com/documentation/sn-redux/index.html)
* [Redux](https://github.com/reactjs/redux)
* [Getting Started with Redux](https://egghead.io/courses/getting-started-with-redux)
* [Vue.js](https://vuejs.org/)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
