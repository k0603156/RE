import {
    ProfilePage,
    PostPage,
    PostsPage,
    MainPage
} from '../../pages/private';
export default {
    Profile: {
        component: ProfilePage,
        path: '/user/profile'
    },
    Posts: {
        component: PostsPage,
        path: '/user/posts'
    },
    Post:{
        component: PostPage,
        path: '/user/posts/:idPost'
    },
    Main: {
        component: MainPage,
        path: '/main'
    },
};