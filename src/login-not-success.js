const {Builder, By, Key, until} = require('selenium-webdriver');
const assert = require('assert');

let loginNotSuccess = async function loginNotSuccess(pBroswer,time) {
    let broswer = pBroswer
    let code = 'datos'
    let password = 'incorrectos'

    let driver = await new Builder().forBrowser(broswer).build();
    let wait_time = time
    let message = "Datos inválidos"
    try {
      await driver.get('http://localhost:3000/');
      await driver.sleep(wait_time)
      await driver.findElement(By.id('code')).sendKeys(code);
      await driver.sleep(wait_time)
      await driver.findElement(By.id('password')).sendKeys(password);
      await driver.sleep(wait_time)
      await driver.findElement(By.xpath('//*[@id="save"]')).click();
      await driver.sleep(wait_time)
      let text = await driver.findElement(By.xpath('//*[@id="root"]/main/form/span')).getText();
      assert.equal(message,text)
    } finally {
        await driver.quit()
    }
};
module.exports = loginNotSuccess;