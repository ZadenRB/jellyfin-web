define(["apphost", "globalize", "syncJobList", "events", "localsync", "emby-button", "paper-icon-button-light"], function(appHost, globalize, syncJobList, events, localSync) {
    "use strict";
    return function(view, params) {
        var interval, mySyncJobList = new syncJobList({
            mode: params.mode,
            enableRemoteSyncManagement: !1,
            serverId: ApiClient.serverId(),
            userId: "offline" === params.mode ? null : ApiClient.getCurrentUserId(),
            element: view.querySelector(".syncActivity"),
            mode: params.mode
        });
        view.addEventListener("viewbeforehide", function() {
            interval && (clearInterval(interval), interval = null)
        }), view.addEventListener("viewdestroy", function() {
            mySyncJobList.destroy()
        })
    }
});