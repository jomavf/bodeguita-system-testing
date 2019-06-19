const { By } = require('selenium-webdriver');
const assert = require('assert');

let loginSuccess = async function loginSuccess(driver,time,url) {
    let code = 'usuario1x'
	let password = 'clave1x'
	let message = "Bienvenido a bodeguita"
	
	await driver.get(url);
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