import sinon from 'sinon'
import { getFirstDayOfWeek } from '../../src/utils/date'

describe('date utils', () => {
  it('should get first day of current week', () => {
    const clock = sinon.useFakeTimers(new Date('2019-12-01'))
    const firstDayOfWeek = getFirstDayOfWeek()
    expect(firstDayOfWeek.getTime()).toBe(1574640000000) // Monday November 25th
    clock.restore()
  })
})
