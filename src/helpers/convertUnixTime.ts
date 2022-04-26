function convertUnixTime(unixTimestamp: number) {
  const date = new Date(unixTimestamp * 1000);
  const hours = date.getHours();
  const minutes = '0' + date.getMinutes();

  const formattedTime = hours + ':' + minutes.substr(-2);

  return formattedTime;
}

export default convertUnixTime;
