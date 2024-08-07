// This file is auto-generated by @hey-api/openapi-ts

export const $Item = {
    properties: {
        name: {
            type: 'string',
            title: 'Name'
        },
        price: {
            type: 'number',
            title: 'Price'
        },
        stocked: {
            type: 'boolean',
            title: 'Stocked',
            default: false
        }
    },
    type: 'object',
    required: ['name', 'price'],
    title: 'Item'
} as const;