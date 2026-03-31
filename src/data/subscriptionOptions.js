export const PLAN_OPTIONS = [
    {
        id: 'arcade',
        name: 'Arcade',
        prices: {
            monthly: 9,
            yearly: 90,
        },
    },
    {
        id: 'advanced',
        name: 'Advanced',
        prices: {
            monthly: 12,
            yearly: 120,
        },
    },
    {
        id: 'pro',
        name: 'Pro',
        prices: {
            monthly: 15,
            yearly: 150,
        },
    },
];

export const ADD_ON_OPTIONS = [
    {
        id: 'online-service',
        name: 'Online service',
        description: 'Access to multiplayer games',
        prices: {
            monthly: 1,
            yearly: 10,
        },
    },
    {
        id: 'larger-storage',
        name: 'Larger storage',
        description: 'Extra 1TB cloud save',
        prices: {
            monthly: 2,
            yearly: 20,
        },
    },
    {
        id: 'customizable-profile',
        name: 'Customizable profile',
        description: 'Custom theme on your profile',
        prices: {
            monthly: 2,
            yearly: 20,
        },
    },
];

export const getBillingLabel = (isYearly) => (isYearly ? 'yearly' : 'monthly');

export const getBillingSuffix = (isYearly) => (isYearly ? 'yr' : 'mo');

export const formatPrice = (value, isYearly) => `$${value}/${getBillingSuffix(isYearly)}`;