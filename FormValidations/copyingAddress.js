function copyBillingToShipping(t) {
  var e = t.getFormContext(),
    i = e.getAttribute("cr955_addressfrombillingaddress");
  if (i && !0 === i.getValue()) {
    var l = e.getAttribute("cr955_billingaddressline1").getValue(),
      r = e.getAttribute("cr955_address").getValue(),
      s = e.getAttribute("cr955_addresslinebilling3").getValue(),
      g = e.getAttribute("cr955_billingpincode").getValue(),
      u = e.getAttribute("cr955_billingstate").getValue(),
      n = e.getAttribute("cr955_billingcity").getValue(),
      a = g && /^[0-9]{6}$/.test(g.toString().trim());
    (e.getAttribute("cr955_shippingaddressline1").setValue(l),
      e.getAttribute("cr955_addresslineshipping2").setValue(r),
      e.getAttribute("cr955_addresslineshipping3").setValue(s),
      e.getAttribute("cr955_shippingstate").setValue(u),
      e.getAttribute("cr955_shippingcity").setValue(n),
      a
        ? e.getAttribute("cr955_shippingpincode").setValue(g)
        : e.getAttribute("cr955_shippingpincode").setValue(null));
  } else
    (e.getAttribute("cr955_shippingaddressline1").setValue(null),
      e.getAttribute("cr955_addresslineshipping2").setValue(null),
      e.getAttribute("cr955_addresslineshipping3").setValue(null),
      e.getAttribute("cr955_shippingpincode").setValue(null),
      e.getAttribute("cr955_shippingstate").setValue(null),
      e.getAttribute("cr955_shippingcity").setValue(null));
}
