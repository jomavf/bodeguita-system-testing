const {Builder, By, Key, until} = require('selenium-webdriver');
const assert = require('assert');

let listProductSuccess = async function listProductSuccess(pBroswer,time) {
    let broswer = pBroswer

    let code = 'usuario1x'
    let password = 'clave1x'
    let message = 'Seleccione un producto porfavor'
    let paraBuscar = "Galleta Casino Clásica"

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
      let size = await driver.findElements(By.xpath('//*[@id="root"]/main/div/ul/li'))
      await driver.sleep(wait_time)
      assert.equal(true,size.length > 0 ? true : false)
    } finally {
        await driver.quit()
    }
};
module.exports = listProductSuccess