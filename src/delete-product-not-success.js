const { By } = require('selenium-webdriver');
const assert = require('assert');

let deleteProductNotSuccess = async function deleteProductNotSuccess(driver,time,url) {
    let file = await XLSX.readFile("./src/data/EliminarProductoData.xlsx")
    let sheet = file.Sheets['Hoja1']

    let localURL = sheet.B3.v
    let code = sheet.C3.v
    let password = sheet.D3.v
    let paraBuscar = sheet.E3.v
    let confirmation = sheet.F3.v
    let message = sheet.G3.v

     
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
    await driver.findElement(By.xpath('//*[@id="root"]/main/div/button[2]')).click();
    await driver.sleep(time)

    //if confirmacion == si .. delete -> comprobar msg | confirmacion == no .. no delete -> comprobar msg
    let buttonNo = await driver.findElement(By.xpath('//*[@id="root"]/main/div/div[2]/section[2]/button[1]'))
    await driver.sleep(time)
    
    let buttonSi = await driver.findElement(By.xpath('//*[@id="root"]/main/div/div[2]/section[2]/button[2]'))
    await driver.sleep(time)

    confirmation === 'Si' && await buttonSi.click(); 
    await driver.sleep(time)

    confirmation === 'No' && await buttonNo.click(); 
    await driver.sleep(time)

    let result = await driver.findElement(By.xpath('//*[@id="root"]/main/div/span')).getText();
    assert.equal(message,result)
};
module.exports = deleteProductNotSuccess