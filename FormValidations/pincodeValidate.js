function validateCompanyPinCode(i) {
  var t = i.getFormContext(),
    e = t.getAttribute("cr955_pincode"),
    n = t.getControl("cr955_pincode");
  if (e && n) {
    var l = e.getValue();
    if (l) {
      l = l.toString().trim();
      /^[0-9]{6}$/.test(l)
        ? n.clearNotification()
        : n.setNotification(
            "Only numbers are allowed and must be exactly 6 digits.",
          );
    } else n.clearNotification();
  }
}
