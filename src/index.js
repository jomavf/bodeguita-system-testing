const loginSuccess = require('./login-success')
const loginNotSuccess = require('./login-not-success')
const createProductSuccess = require('./create-product-success')
const createProductNotSuccess = require('./create-product-not-success');
const deleteProductSuccess = require('./delete-product-success');
const editProductNotSuccess = require('./edit-product-not-success');
const editProductSuccess = require('./edit-product-success');
const deleteProductNotSuccess = require('./delete-product-not-success');
const listProductNotSuccess = require('./list-product-not-success');
const listProductSuccess = require('./list-product-success');

(async function main() {
    let time = 150;
    let chrome = 'chrome';
    let firefox = 'firefox';

    await loginNotSuccess(chrome,time);
    await loginNotSuccess(firefox,time);

    await loginSuccess(chrome,time);
    await loginSuccess(firefox,time);
    
    await createProductNotSuccess(chrome,time);
    await createProductNotSuccess(firefox,time);

    await createProductSuccess(chrome,time);
    await createProductSuccess(firefox,time);

    await listProductSuccess(chrome,time);
    await listProductSuccess(firefox,time);

    await listProductNotSuccess(chrome,time);
    await listProductNotSuccess(firefox,time);

    await editProductNotSuccess(chrome,time);
    await editProductNotSuccess(firefox,time);

    await editProductSuccess(chrome,time);
    await editProductSuccess(firefox,time);
    
    await deleteProductNotSuccess(chrome,time); //done
    await deleteProductNotSuccess(firefox,time); //done

    await deleteProductSuccess(chrome,time); //done
    await deleteProductSuccess(firefox,time); //done
})();