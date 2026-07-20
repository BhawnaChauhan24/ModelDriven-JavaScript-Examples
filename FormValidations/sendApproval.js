var isDialogRunning = !1;
function confirmSendForApproval(o) {
  var e = o.getFormContext(),
    n = o.getEventArgs(),
    t = n.getSaveMode();
  if ((1 === t || 2 === t) && !isDialogRunning) {
    var i = e.getAttribute("cr955_sendforapproval");
    if (i && !0 !== i.getValue()) {
      (n.preventDefault(), (isDialogRunning = !0));
      Xrm.Navigation.openConfirmDialog({
        title: "Send for Approval",
        subtitle: "Would you like to send this to the approver?",
        text: "Click Yes to mark it for approval, or Save Draft to save without approval.",
        confirmButtonLabel: "Yes",
        cancelButtonLabel: "Save Draft",
      }).then(
        function (o) {
          (o.confirmed && (i.setValue(!0), i.setSubmitMode("always")),
            e.data.save().then(
              function () {
                (2 === t && e.ui.close(), (isDialogRunning = !1));
              },
              function (o) {
                (console.log(o.message), (isDialogRunning = !1));
              },
            ));
        },
        function (o) {
          (console.log(o.message), (isDialogRunning = !1));
        },
      );
    }
  }
}
