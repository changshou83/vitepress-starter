import DefaultTheme from 'vitepress/theme';
const Layout = DefaultTheme.Layout;
// import Layout from './layouts/Layout.vue';
// import './styles/var.css';
// import './styles/layout.css';

export default {
  // ...DefaultTheme,
  Layout,
  NotFound: DefaultTheme.NotFound,
  enhanceApp({ app, router, siteData }) {
    // 注册全局组件
    // app.use();
  },
};
