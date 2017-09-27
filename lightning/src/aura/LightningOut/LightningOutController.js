({
    openTab : function(component, event, helper) {
        var workspaceAPI = component.find("workspace");
        //var sURL = '#/sObject/' + component.get("v.recordId") + '/view';
        var sURL = '#/sObject/0016A000003rlmzQAA/view';
        console.log('sURL: ' + sURL);
        console.log('workspaceAPI: ' + workspaceAPI);
        workspaceAPI.openTab({
            url: sURL,
            focus: true
        }).then(function(newTabId) {
            workspaceAPI.focusTab({
                tabId: newTabId
            });
        });
    }
})