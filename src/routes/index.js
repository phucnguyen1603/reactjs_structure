import { loginPage, publicPage, protectedPage } from "../constants/routeConstant";
import loginContainer from "../containers/loginContainer";
import publicContainer from "../containers/publicContainer";
import protectedContainer from "../containers/protectedContainer";

const routes = [
    {
        path: loginPage,
        component: loginContainer,
        private: false,
    },
    {
        path: publicPage,
        component: publicContainer,
        private: false,
    },
    {
        path: protectedPage,
        component: protectedContainer,
        private: true,
    },
    // {
    //     path: "/tacos",
    //     component: Tacos,
    //     routes: [
    //         {
    //             path: "/tacos/bus",
    //             component: Bus
    //         },
    //         {
    //             path: "/tacos/cart",
    //             component: Cart
    //         }
    //     ]
    // }
];

export default routes;
