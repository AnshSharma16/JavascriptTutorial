// Create a new Date object
const now = new Date();

// Basic Date Methods
const year = now.getFullYear(); // e.g., 2024
const month = now.getMonth() + 1; // e.g., 8 (August)
const day = now.getDate(); // e.g., 27
const dayOfWeek = now.getDay(); // e.g., 2 (Tuesday)
const hour = now.getHours(); // e.g., 14
const minute = now.getMinutes(); // e.g., 5
const second = now.getSeconds(); // e.g., 9
const millisecond = now.getMilliseconds(); // e.g., 123
const timestamp = now.getTime(); // Milliseconds since Jan 1, 1970
const timezoneOffset = now.getTimezoneOffset(); // Minutes offset from UTC

// UTC Methods
const utcYear = now.getUTCFullYear(); // e.g., 2024
const utcMonth = now.getUTCMonth() + 1; // e.g., 8
const utcDay = now.getUTCDate(); // e.g., 27
const utcHour = now.getUTCHours(); // e.g., 8
const utcMinute = now.getUTCMinutes(); // e.g., 35
const utcSecond = now.getUTCSeconds(); // e.g., 9
const utcMillisecond = now.getUTCMilliseconds(); // e.g., 123

// Locale-Specific Formatting
const usLocaleString = now.toLocaleString('en-US'); // e.g., "8/27/2024, 2:05:09 PM"
const ukLocaleString = now.toLocaleString('en-GB'); // e.g., "27/08/2024, 14:05:09"
const deLocaleString = now.toLocaleString('de-DE'); // e.g., "27.8.2024, 14:05:09"

// Date Formatting Methods
const dateString = now.toDateString(); // e.g., "Tue Aug 27 2024"
const timeString = now.toTimeString(); // e.g., "14:05:09 GMT+0530 (India Standard Time)"
const isoString = now.toISOString(); // e.g., "2024-08-27T08:35:09.123Z"
const utcString = now.toUTCString(); // e.g., "Tue, 27 Aug 2024 08:35:09 GMT"
const jsonString = now.toJSON(); // e.g., "2024-08-27T08:35:09.123Z"

// Set Methods (Change the date)
const modifiedDate = new Date(now);
modifiedDate.setFullYear(2025); // Change year to 2025
modifiedDate.setMonth(11); // Change month to December
modifiedDate.setDate(31); // Change day to 31
modifiedDate.setHours(23); // Change hour to 23 (11 PM)
modifiedDate.setMinutes(59); // Change minutes to 59
modifiedDate.setSeconds(59); // Change seconds to 59
modifiedDate.setMilliseconds(999); // Change milliseconds to 999

// Date Arithmetic (Add/Subtract Days)
const tomorrow = new Date(now);
tomorrow.setDate(now.getDate() + 1); // Add 1 day

const yesterday = new Date(now);
yesterday.setDate(now.getDate() - 1); // Subtract 1 day

// Parsing Dates
const parsedTimestamp = Date.parse("2024-08-27T14:05:09Z");
const parsedDate = new Date(parsedTimestamp);

// Date Comparison
const date1 = new Date('2024-08-27');
const date2 = new Date('2024-08-28');
const isEarlier = date1 < date2; // true
const isSameTime = date1.getTime() === date2.getTime(); // false

// Output all results
console.log(`Current Date & Time: ${now}`);
console.log(`Year: ${year}, Month: ${month}, Day: ${day}, Day of Week: ${dayOfWeek}`);
console.log(`Time: ${hour}:${minute}:${second}.${millisecond}`);
console.log(`UTC Date & Time: ${utcYear}-${utcMonth}-${utcDay} ${utcHour}:${utcMinute}:${utcSecond}.${utcMillisecond}`);
console.log(`Locale US: ${usLocaleString}`);
console.log(`Locale UK: ${ukLocaleString}`);
console.log(`Locale DE: ${deLocaleString}`);
console.log(`Formatted Date: ${dateString}`);
console.log(`Formatted Time: ${timeString}`);
console.log(`ISO String: ${isoString}`);
console.log(`UTC String: ${utcString}`);
console.log(`JSON String: ${jsonString}`);
console.log(`Modified Date: ${modifiedDate}`);
console.log(`Tomorrow: ${tomorrow}`);
console.log(`Yesterday: ${yesterday}`);
console.log(`Parsed Date from Timestamp: ${parsedDate}`);
console.log(`Date1 is earlier than Date2: ${isEarlier}`);
console.log(`Date1 and Date2 are at the same time: ${isSameTime}`);
