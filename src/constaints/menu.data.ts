const MENU_DATA = [

    {
        id: 1,
        title:"Bảng điều khiển",
        icon: "fas fa-house-user",
        routeName:'dash',
        subItem: []
    },
    {
        id: 2,
        title:"Tài khoản",
        icon: "icon fas fa-user",
        routeName:'account',
        subItem: []
    },
    {
        id: 3,
        title:"Công việc",
        routeName:'list',
        icon: "fas fa-calendar",
        subItem: [
            {
                id:1,
                path:'',
                name: "Danh sách"
            },
            {
                id:2,
                path:'',
                name: "Thêm mới"
            }
        ]
    },
];

export default MENU_DATA;