function handleCustomerPricingTabVisibility(e) {
  var t = e.getFormContext(),
    i = t.ui.getFormType(),
    s = t.ui.tabs.get("Manage_Customer_Pricing");
  if (1 !== i) {
    var r = t.data.entity.getId();
    r
      ? ((r = r.replace("{", "").replace("}", "")),
        Xrm.WebApi.retrieveRecord(
          "cr955_company",
          r,
          "?$select=cr955_status,cr955_companytype",
        ).then(
          function (e) {
            889500002 === e.cr955_status && 889500001 === e.cr955_companytype || 889500002 === e.cr955_companytype ? s.setVisible(!0) : s.setVisible(!1);
          },
          function (e) {
            (console.error("Failed to retrieve approval status: ", e.message),
              s.setVisible(!1));
          },
        ))
      : s.setVisible(!1);
  } else s.setVisible(!1);
}
