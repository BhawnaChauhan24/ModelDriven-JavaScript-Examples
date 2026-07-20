async function validateGST(t) {
  var e = t.getFormContext(),
    a = e.getAttribute("cr955_gstnumber").getValue(),
    n = e.getAttribute("cr955_name").getValue();
  if (a) {
    try {
      let t = await fetch(
          "https://8e3e4202a23be350bee023fb5cae51.d6.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/5a811aab2a924ac887992823ebc2527f/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=WwQrT-niXpmjK_PplxvS6MPcBfEneGd3QxU5t_fpBv8",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ gstin: a, companyname: n }),
          },
        ),
        i = await t.json();
      if ((console.log("Flow Response:", i), "Active" === i.status))
        (Xrm.Navigation.openAlertDialog({
          text: "✅ GSTIN is valid for " + i.details,
        }),
          e.getAttribute("cr955_gststatus").setValue(8895e5),
          e.getAttribute("cr955_companyaddress").setValue(i.address));
      else {
        const t = `❌ GSTIN validation failed.\n\nEntered Company Name: ${n || "Unknown"}\nRegistered Company Name: ${i.details || "Unknown"}\n\nPlease verify the company name and try again.`;
        (await Xrm.Navigation.openAlertDialog({ text: t }),
          e.getAttribute("cr955_gststatus").setValue(889500001));
      }
    } catch (t) {
      (console.error("GST Validation Error:", t),
        Xrm.Navigation.openAlertDialog({
          text: "Error validating GSTIN. Please try again.",
        }));
    }
  }
}
