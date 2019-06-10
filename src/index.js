const loginSuccess = require('./login-success')
const loginNotSuccess = require('./login-not-success')
const createProductSuccess = require('./create-product-success')
const createProductNotSuccess = require('./create-product-not-success');
const deleteProductSuccess = require('./delete-product-success');
const editProductNotSuccess = require('./edit-product-not-success');
const editProductSuccess = require('./edit-product-success');

(async function main() {
    let time = 350;
    let chrome = 'chrome';
    let firefox = 'firefox';

    // await loginNotSuccess(chrome,time);
    // await loginNotSuccess(firefox,time);

    // await loginSuccess(chrome,time);
    // await loginSuccess(firefox,time);

    await createProductNotSuccess(chrome,time); //done
    // await createProductNotSuccess(firefox,time);

    await createProductSuccess(chrome,time); //done
    // await createProductSuccess(firefox,time);

    // await editProductNotSuccess(chrome,time);
    // await editProductNotSuccess(firefox,time);

    // await editProductSuccess(chrome,time);
    // await editProductSuccess(firefox,time);

    // await deleteProductSuccess(chrome,time);
})();