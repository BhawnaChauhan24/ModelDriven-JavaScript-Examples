function validateHSN(t) {
  var e = t.getFormContext(),
    o = e.getAttribute("cr955_hsncode").getValue();
  o && !/^\d{8}$/.test(o)
    ? e
        .getControl("cr955_hsncode")
        .setNotification("HSN Code must be exactly 8 digits.")
    : e.getControl("cr955_hsncode").clearNotification();
}
