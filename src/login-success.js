const {Builder, By, Key, until} = require('selenium-webdriver');
const assert = require('assert');

let loginSuccess = async function loginSuccess(pBroswer,time) {
    let broswer = pBroswer

    let code = 'usuario1x'
    let password = 'clave1x'

    let driver = await new Builder().forBrowser(broswer).build();
    let wait_time = time
    let message = "Bienvenido a bodeguita"
    try {
      await driver.get('http://localhost:3000/');
      await driver.sleep(wait_time)
      await driver.findElement(By.id('code')).sendKeys(code);
      await driver.sleep(wait_time)
      await driver.findElement(By.id('password')).sendKeys(password);
      await driver.sleep(wait_time)
      await driver.findElement(By.xpath('//*[@id="save"]')).click();
      await driver.sleep(wait_time)
      let text = await driver.findElement(By.xpath('//*[@id="root"]/main/h1')).getText();
      assert.equal(message,text)
    } finally {
        await driver.quit()
    }
};
module.exports = loginSuccess;