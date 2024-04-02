export function formatToTimeAgo(date: Date) {
  const time = date.getTime();
  const now = new Date().getTime();
  const diff = Math.round((time - now) / 86400000);

  const formatter = new Intl.RelativeTimeFormat("ko");
  return formatter.format(diff, "days");
}

export function formatToWon(price: number) {
  return price.toLocaleString("ko-KR") + "원";
}
