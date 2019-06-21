  const { By } = require('selenium-webdriver');
const assert = require('assert');

let listProductSuccess = async function listProductSuccess( driver,time,url) {
	let file = await XLSX.readFile("./src/data/BuscarProductoData.xlsx")
    let sheet = file.Sheets['Hoja1']

	let localURL = sheet.B3.v
    let code = sheet.C3.v
    let password = sheet.D3.v
    let paraBuscar = sheet.E3.v
	let result = sheet.F3.v

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
	await driver.findElement(By.xpath('//*[@id="root"]/main/div/div/input')).sendKeys(paraBuscar);
	await driver.sleep(time)
	let size = await driver.findElements(By.xpath('//*[@id="root"]/main/div/ul/li'))
	await driver.sleep(time)
	assert.equal(true,size.length === result ? true : false)
};
module.exports = listProductSuccess