import { http, HttpResponse } from 'msw'

import {
  GetOrderDetailsParams,
  GetOrderDetailsResponse,
} from '../get-order-details'

export const getOrderDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+1 123-456-7890',
    },
    status: 'pending',
    createdAt: '2022-01-01T12:00:00Z',
    totalInCents: 8000,
    orderItems: [
      {
        id: 'order-item-1',
        priceInCents: 1000,
        quantity: 2,
        product: {
          name: 'Margherita Pizza',
        },
      },
      {
        id: 'order-item-2',
        priceInCents: 2000,
        quantity: 3,
        product: {
          name: 'Pepperoni Pizza',
        },
      },
    ],
  })
})
