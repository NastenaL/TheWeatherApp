class Clock {
  constructor(offset) {
    this.offset = offset * 1000;
  }

  getTime() {
    let date = new Date(Date.now() + this.offset),
      hours = "0" + date.getUTCHours(),
      minutes = "0" + date.getUTCMinutes(),
      seconds = "0" + date.getUTCSeconds();

    return (
      hours.substr(-2) + ":" + minutes.substr(-2) + ":" + seconds.substr(-2)
    );
  }
}
