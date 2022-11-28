const routes = {
    Home: {
      path: "/",
      getComponent: () => import("../components/BaseMap/BaseMap.jsx"),
    },
    // restaurantList: {
    //   path: "/clinics",
    //   getComponent: () => import("pages/RestaurantListPage"),
    // },
  };
  
  export default routes;