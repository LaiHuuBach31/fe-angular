import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [
    {
        routeLink: 'dashboard',
        icon: 'ri-home-line',
        label: 'Dashboard'
    },
    {
        routeLink: 'product',
        icon: 'ri-shirt-line',
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
        routeLink: 'color',
        icon: 'ri-palette-line',
        label: 'Color',
        items: [
            {
                routeLink: 'color/list',
                label: 'List Color',
            },
            {
                routeLink: 'color/create',
                label: 'Add New Color',
            }
        ]
    },
    {
        routeLink: 'size',
        icon: 'ri-font-size-2',
        label: 'Size',
        items: [
            {
                routeLink: 'size/list',
                label: 'List Size',
            },
            {
                routeLink: 'size/create',
                label: 'Add New Size',
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
        routeLink: 'image',
        icon: 'ri-file-image-line',
        label: 'Image',
        items: [
            {
                routeLink: 'image/list',
                label: 'All images',
            },
            {
                routeLink: 'image/create',
                label: 'Add new image',
            }
        ]
    },
    {
        routeLink: 'token',
        icon: 'ri-token-swap-line',
        label: 'Token',
        items: [
            {
                routeLink: 'token/list',
                label: 'All tokens',
            },
            // {
            //     routeLink: 'token/create',
            //     label: 'Add new token',
            // }
        ]
    },
    {
        routeLink: 'variantproduct',
        icon: 'ri-product-hunt-line',
        label: 'Variant Product',
        items: [
            {
                routeLink: 'variantproduct/list',
                label: 'All variant',
            },
            {
                routeLink: 'variantproduct/create',
                label: 'Add new variant product',
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
        routeLink: 'carts',
        icon: 'ri-shopping-cart-line',
        label: 'Cart',
        items: [
            {
                routeLink: 'carts/list',
                label: 'List Carts',
            },
            {
                routeLink: 'carts/create',
                label: 'Add New Cart',
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
   
    
];