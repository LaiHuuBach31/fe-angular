import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [
    {
        routeLink: 'dashboard',
        icon: 'ri-home-line',
        label: 'Dashboard'
    },
    {
        routeLink: 'product',
        icon: 'ri-store-3-line',
        label: 'Prodcts',
        items: [
            {
                routeLink: 'product/list',
                label: 'List Prodcts',
            },
            {
                routeLink: 'product/create',
                label: 'Add New Products',
            }
        ]
    },
    {
        routeLink: 'category',
        icon: 'ri-list-check-2',
        label: 'Category',
        items: [
            {
                routeLink: 'category/list',
                label: 'List Category',
            },
            {
                routeLink: 'category/create',
                label: 'Add New Category',
            }
        ]
    },
    {
        routeLink: 'item',
        icon: 'ri-list-check-2',
        label: 'Item',
        items: [
            {
                routeLink: 'item/list',
                label: 'List Item',
            },
            {
                routeLink: 'item/create',
                label: 'Add New Item',
            }
        ]
    },
    {
        routeLink: 'user',
        icon: 'ri-user-3-line',
        label: 'Users',
        items: [
            {
                routeLink: 'user/list',
                label: 'All users',
            },
            {
                routeLink: 'user/create',
                label: 'Add new user',
            }
        ]
    },
    {
        routeLink: 'roles',
        icon: 'ri-user-3-line',
        label: 'Roles',
        items: [
            {
                routeLink: 'roles/list',
                label: 'List Roles',
            },
            {
                routeLink: 'roles/create',
                label: 'Add New Roles',
            }
        ]
    },
    {
        routeLink: 'orders',
        icon: 'ri-archive-line',
        label: 'Order',
        items: [
            {
                routeLink: 'orders/list',
                label: 'Order List',
            },
            {
                routeLink: 'orders/detail',
                label: 'Order Detail',
            },
            {
                routeLink: 'orders/tracking',
                label: 'Order Tracking',
            }
        ]
    },
    {
        routeLink: 'Settings',
        icon: 'ri-home-line',
        label: 'Settings',
        expanded: false,
        items: [
            {
                routeLink: 'settings/profile',
                label: 'Profile'
            },
            {
                routeLink: 'settings/customize',
                label: 'Customize'
            }
        ]
    },
    {
        routeLink: 'banner',
        icon: 'ri-image-line',
        label: 'Banner'
    },
];