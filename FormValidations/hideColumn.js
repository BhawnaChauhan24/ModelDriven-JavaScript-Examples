function hideModeOfTransport(t) {
  var e = t.getFormContext();
  "Customer" === e.getAttribute("cr955_companytype").getText()
    ? e.getControl("cr955_transport").setVisible(!0)
    : e.getControl("cr955_transport").setVisible(!1);
}
