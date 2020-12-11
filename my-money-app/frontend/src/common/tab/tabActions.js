export function selectTab(tabId) {

    return {
        type: 'TAB_SELECTED',
        payload: tabId
    }
}

showTabs('tabList', 'tabDelete')
// exemplo da chamada: showTabs('tabList', 'tabDelete')
// ...tabIds vai juntar todos os parâmetros
export function showTabs(...tabIds) {

    const tabsToShow = {}

    // o "e" representa cada um que foi repassado no método
    // ao final do forEach teremos, por exemplo:
    // { tabList: true, tabDelete: true }
    tabIds.forEach(e => {tabsToShow[e] = true})

    return {
        type: 'TAB_SHOWED',
        payload: tabsToShow
    }
}