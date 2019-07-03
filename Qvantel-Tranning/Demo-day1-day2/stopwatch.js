function stopWatch() {
  var startTime,
    endTime,
    running,
    duration = 0;

  this.start = function() {
    if (running) {
      throw new Error("Stop watch is already started..");
    }
    running = true;
    startTime = new Date();
  };

  this.stop = function() {
    if (!running) {
      throw new Error("Stop watch is not started..");
    }
    running = false;
    endTime = new Date();

    var seconds = endTime.getTime() - startTime.getTime() / 1000;
    duration += seconds;
  };

  this.reset = function() {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  };

  Object.defineProperty(this, "duration", {
    get: function() {
      return duration;
    }
  });
}

var s = new stopWatch();
s.start();
s.stop();
s.start();
console.log(`Duration: ${s.duration}`);
