const {Builder, By, Key, until} = require('selenium-webdriver');
const assert = require('assert');

let deleteProductNotSuccess = async function deleteProductNotSuccess(pBroswer,time) {
    let broswer = pBroswer

    let code = 'usuario1x'
    let password = 'clave1x'
    
    let message = 'Seleccione un producto porfavor'
    let paraBuscar = "Galleta Casino coco"

    let driver = await new Builder().forBrowser(broswer).build();
    let wait_time = time
    try {
      await driver.get('http://localhost:3000/');
      await driver.sleep(wait_time)
      await driver.findElement(By.id('code')).sendKeys(code);
      await driver.sleep(wait_time)
      await driver.findElement(By.id('password')).sendKeys(password);
      await driver.sleep(wait_time)
      await driver.findElement(By.xpath('//*[@id="save"]')).click();
      await driver.sleep(wait_time)
      await driver.findElement(By.xpath('//*[@id="products"]')).click();
      await driver.sleep(wait_time)
      await driver.findElement(By.xpath('//*[@id="root"]/main/div/div/input')).sendKeys(paraBuscar);
      await driver.sleep(wait_time)
      await driver.findElement(By.xpath('//*[@id="root"]/main/div/button[2]')).click();
      await driver.sleep(wait_time)
      let result = await driver.findElement(By.xpath('//*[@id="root"]/main/div/span')).getText();
      await driver.sleep(wait_time)
      assert.equal(message,result)
    } finally {
        await driver.quit()
    }
};
module.exports = deleteProductNotSuccess