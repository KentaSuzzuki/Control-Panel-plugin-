let initTabs = [
    { tabId: "Features", label: 'Features', icon: "fa fa-star", order: 1 },
    { tabId: "Page", label: 'Page', icon: "fa fa-file-alt", order: 2 },
    { tabId: "Notifications", label: 'Notifications', icon: "fa fa-bell", order: 3 },
    { tabId: "Integrations", label: 'Integrations', icon: "fa fa-plug", order: 4 },
    { tabId: "Developer", label: 'Developer', icon: "fa fa-code", order: 5 },
]

console.log([...Object.values(initTabs[0])])