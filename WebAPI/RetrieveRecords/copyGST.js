function handleGSTCheckbox(e) {
  const t = e.getFormContext(),
    r = t.getAttribute("cr955_usethecompanysgstno")?.getValue(),
    n = t.getAttribute("cr955_companyname")?.getValue(),
    o = t.getAttribute("cr955_gstnumber");
  if (o)
    if (r) {
      if (!n || 0 === n.length)
        return (
          showError("Please select a company to use its GST number."),
          void o.setValue(null)
        );
      const e = n[0].id.replace("{", "").replace("}", "");
      Xrm.WebApi.retrieveRecord(
        "cr955_company",
        e,
        "?$select=cr955_gstnumber",
      ).then(
        function (e) {
          const t = e.cr955_gstnumber;
          t
            ? o.setValue(t)
            : (showError("Selected company does not have a GST number."),
              o.setValue(null));
        },
        function (e) {
          (showError("Error retrieving company GST: " + e.message),
            o.setValue(null));
        },
      );
    } else o.setValue(null);
}
