import { HomePage, PostDetailPage } from '../../pages/public';
export default {
    PostDetail: {
        component: PostDetailPage,
        path: '/postdetail/:idPosting'
    },
    Home: {
        component: HomePage,
        path: '/'
    },
};