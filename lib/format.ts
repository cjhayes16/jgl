import moment, { MomentInput } from "moment";

// 将时间戳转换成时间字符串
export function formatTimestampToDate(
  timestamp: MomentInput,
  formatter = "YYYY-MM-DD HH:mm:ss"
) {
  return moment(timestamp).format(formatter);
}

/**
 * 将时间字符串转换成时间戳
 * @param {String} date 时间格式，例如2023-06-01 02:00:00
 * @returns {Number} 返回时间戳，例如1689264000000
 */
export function formatDateToTimestamp(date: MomentInput) {
  return moment(date).valueOf();
}