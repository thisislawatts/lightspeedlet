function getShopAdminLink() {
    var shopDomain = document.head.querySelector('#LightspeedletShopUrl').getAttribute('content'),
        shopContent = document.head.querySelector('#LightspeedletShopEdit');
    if (shopContent.getAttribute('name') === 'index') {
        return shopDomain;
    }
    return shopDomain + shopContent.getAttribute('content');
};

console.log(getShopAdminLink());

window.open(getShopAdminLink(), '_Lightspeedlet');
