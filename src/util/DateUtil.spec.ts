import { formattedDate } from './DateUtil'

test('should format date string as Mon, Aug 30 2021', () => {
  const formatMePlease = '2021-08-30T21:55:26.847Z'
  expect(formattedDate(formatMePlease)).toMatch('Mon, Aug 30 2021')
})
