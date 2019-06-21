  const { By } = require('selenium-webdriver');
const assert = require('assert');

let loginNotSuccess = async function loginNotSuccess(driver,time,url) {
    let file = await XLSX.readFile("./src/data/IniciarSesionData.xlsx")
    let sheet = file.Sheets['Hoja1']

    let localURL = sheet.B3.v
    let code = sheet.C3.v
    let password = sheet.D3.v
    let message = sheet.E3.v
    
    await driver.get(url || localURL);
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