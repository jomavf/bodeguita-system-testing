  const { By } = require('selenium-webdriver');
const assert = require('assert');

let createProductNotSuccess = async function createProductNotSuccess(driver,time,url) {
	let file = await XLSX.readFile("./src/data/RegistrarProductoData.xlsx")
    let sheet = file.Sheets['Hoja1']

    let localURL = sheet.B3.v
    let code = sheet.C3.v
    let password = sheet.D3.v
    let name = sheet.E3.v
    let quantity = sheet.F3.v
    let price = sheet.G3.v
    let type = sheet.H3.v //Golosinas
    let discount = sheet.J3.v // No
    let nationality = sheet.I3.v // Peruana
    let message = sheet.K3.v
 
	await driver.get(url || localURL);
	await driver.sleep(time)
	await driver.findElement(By.id('code')).sendKeys(code);
	await driver.sleep(time)
	await driver.findElement(By.id('password')).sendKeys(password);
	await driver.sleep(time)
	await driver.findElement(By.xpath('//*[@id="save"]')).click();

	await driver.sleep(time)
	await driver.findElement(By.xpath('//*[@id="products"]')).click();
	await driver.sleep(time)
	await driver.findElement(By.xpath('//*[@id="root"]/main/div/button')).click();

	await driver.sleep(time)
	await driver.findElement(By.xpath('//*[@id="root"]/main/div/form/input[1]')).sendKeys(name);
	await driver.sleep(time)
	await driver.findElement(By.xpath('//*[@id="root"]/main/div/form/input[2]')).sendKeys(quantity);
	await driver.sleep(time)
	await driver.findElement(By.xpath('//*[@id="root"]/main/div/form/input[3]')).sendKeys(price);

	// Combobox
	await driver.sleep(time)
	let cmbs = await driver.findElements(By.name('newProductType'));
	for (let i = 0; i < cmbs.length; i++) {
		let text = await cmbs[i].getAttribute('value')
		text === type && await cmbs[i].click()
	}
	
	// Checkbox
	await driver.sleep(time)
	discount === 'Si' && await driver.findElement(By.xpath('//*[@id="root"]/main/div/form/input[4]')).click();

	//Radio button
	await driver.sleep(time)
	let radios = await driver.findElements(By.name('nationality'))
	for (let i = 0; i < radios.length; i++) {
		let text = await radios[i].getAttribute('value')
		text === nationality && await radios[i].click()
	}

	await driver.sleep(time)
	await driver.findElement(By.xpath('//*[@id="root"]/main/div/form/button')).click();
	await driver.sleep(time)
	let result = await driver.findElement(By.xpath('//*[@id="root"]/main/div/form/span[2]')).getText();
	assert.equal(message,result)
};
module.exports = createProductNotSuccess
