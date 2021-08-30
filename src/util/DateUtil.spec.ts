import { formattedDate } from './DateUtil'

test('should format August 12, 2021 as Thu, Aug 12', () => {
  const formatMePlease = '2021-08-30T21:55:26.847Z'
  expect(formattedDate(formatMePlease)).toMatch('Mon, Aug 30 2021')
})
