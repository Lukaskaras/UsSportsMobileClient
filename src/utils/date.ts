import moment from 'moment'

export const getFirstDayOfWeek = (): Date => moment().isoWeekday(1).toDate()

