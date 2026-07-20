function titleCase(e) {
  try {
    var t = e.getEventSource(),
      a = t.getValue();
    if (a) {
      var r = a.toLowerCase().replace(/\b[a-z]/g, function (e) {
        return e.toUpperCase();
      });
      t.setValue(r);
    }
  } catch (e) {
    console.error("Title case formatting failed:", e.message);
  }
}
