const { By } = require('selenium-webdriver');
const assert = require('assert');

let deleteProductNotSuccess = async function deleteProductNotSuccess(driver,time,url) {
    let code = 'usuario1x'
    let password = 'clave1x'
    
    let message = 'Seleccione un producto porfavor'
    let paraBuscar = "Galleta Casino coco"

     
    await driver.get(url);
    await driver.sleep(time)
    await driver.findElement(By.id('code')).sendKeys(code);
    await driver.sleep(time)
    await driver.findElement(By.id('password')).sendKeys(password);
    await driver.sleep(time)
    await driver.findElement(By.xpath('//*[@id="save"]')).click();
    await driver.sleep(time)
    await driver.findElement(By.xpath('//*[@id="products"]')).click();
    await driver.sleep(time)
    await driver.findElement(By.xpath('//*[@id="root"]/main/div/div/input')).sendKeys(paraBuscar);
    await driver.sleep(time)
    await driver.findElement(By.xpath('//*[@id="root"]/main/div/button[2]')).click();
    await driver.sleep(time)
    let result = await driver.findElement(By.xpath('//*[@id="root"]/main/div/span')).getText();
    await driver.sleep(time)
    assert.equal(message,result)
};
module.exports = deleteProductNotSuccess