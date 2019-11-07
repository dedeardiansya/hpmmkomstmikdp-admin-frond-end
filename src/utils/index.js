export function getDate(stamp) {
  return new Date( stamp._seconds * 1000 + Math.round(stamp._nanoseconds / 1000000) )
}
