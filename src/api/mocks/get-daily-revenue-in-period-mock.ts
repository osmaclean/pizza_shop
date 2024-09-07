import { http, HttpResponse } from 'msw'

import { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    { date: '01/01/2024', receipt: 2000 },
    { date: '02/01/2024', receipt: 777 },
    { date: '03/01/2024', receipt: 1997 },
    { date: '04/01/2024', receipt: 987 },
    { date: '05/01/2024', receipt: 897 },
    { date: '06/01/2024', receipt: 1097 },
    { date: '07/01/2024', receipt: 57 },
  ])
})
