import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

function formatTime(timeString: string, type: 'timeAgo' | 'fullDate' | 'mix' | 'date' = 'timeAgo') {

  if (timeString) {
    if (type === 'timeAgo') {
      const time = dayjs(timeString);
      return time.fromNow();
    }

    if (type === 'date') {
      const time = dayjs(timeString);
      return time.format("dddd, DD MMM YYYY    HH:MMA");
    }

    if (type === 'fullDate') {
      const time = dayjs(timeString);
      return time.format("DD MMM YYYY - HH:MMA");
    }

    if (type === 'mix') {
      const time = dayjs(timeString);
      return time.format('hh:MMa, DD MMM, YYYY ');
    }
  }
  return null
}


export { formatTime }