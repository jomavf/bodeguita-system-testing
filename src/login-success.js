const { By } = require('selenium-webdriver');
const assert = require('assert');

let loginSuccess = async function loginSuccess(driver,time,url) {
    let file = await XLSX.readFile("./src/data/IniciarSesionData.xlsx")
    let sheet = file.Sheets['Hoja1']

    let localURL = sheet.B2.v
    let code = sheet.C2.v
    let password = sheet.D2.v
    let message = sheet.E2.v
	
	await driver.get(url || localURL);
	await driver.sleep(time)
	await driver.findElement(By.id('code')).sendKeys(code);
	await driver.sleep(time)
	await driver.findElement(By.id('password')).sendKeys(password);
	await driver.sleep(time)
	await driver.findElement(By.xpath('//*[@id="save"]')).click();
	await driver.sleep(time)
	let text = await driver.findElement(By.xpath('//*[@id="root"]/main/h1')).getText();
	assert.equal(message,text)
};
module.exports = loginSuccess;