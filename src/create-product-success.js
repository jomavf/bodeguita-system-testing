  const { By } = require('selenium-webdriver');
const assert = require('assert');
if(typeof require !== 'undefined') XLSX = require('xlsx')

let createProductSuccess = async function createProductSuccess(driver,time,url) {
		 
     
    let file = await XLSX.readFile("./src/data/RegistrarProductoData.xlsx")
    let sheet = file.Sheets['Hoja1']

    let web_url = sheet.B3.v
    let code = sheet.C2.v
    let password = sheet.D2.v
    let name = sheet.E2.v
    let quantity = sheet.F2.v
    let price = sheet.G2.v
    let type = sheet.H2.v
    let discount = sheet.J2.v
    let nationality = sheet.I2.v
    let message = sheet.K2.v

		await driver.get(web_url || url);
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
		// await driver.sleep(time)
		// await driver.findElement(By.id('type')).sendKeys(type);
		// await driver.sleep(time)
		// await driver.findElement(By.id('discount')).sendKeys(discount);
		// await driver.sleep(time)
		// await driver.findElement(By.id('nationality')).sendKeys(nationality);
		await driver.sleep(time)
		await driver.findElement(By.xpath('//*[@id="root"]/main/div/form/button')).click();
		await driver.sleep(time)
		let result = await driver.findElement(By.xpath('//*[@id="root"]/main/div/form/span[4]')).getText();
		await driver.sleep(time)
		assert.equal(message,result)
};
module.exports = createProductSuccess;