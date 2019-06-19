  const { By } = require('selenium-webdriver');
const assert = require('assert');

let loginNotSuccess = async function loginNotSuccess(driver,time,url) {
    let code = 'datos'
    let password = 'incorrectos'
    let message = "Datos inválidos"
    
    await driver.get(url);
    await driver.sleep(time)
    await driver.findElement(By.id('code')).sendKeys(code);
    await driver.sleep(time)
    await driver.findElement(By.id('password')).sendKeys(password);
    await driver.sleep(time)
    await driver.findElement(By.xpath('//*[@id="save"]')).click();
    await driver.sleep(time)
    let text = await driver.findElement(By.xpath('//*[@id="root"]/main/form/span')).getText();
    assert.equal(message,text)
};
module.exports = loginNotSuccess;