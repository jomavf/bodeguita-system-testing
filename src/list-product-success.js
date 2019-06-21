  const { By } = require('selenium-webdriver');
const assert = require('assert');

let listProductSuccess = async function listProductSuccess( driver,time,url) {

    let file = await XLSX.readFile("./src/data/BuscarProductoData.xlsx")
    let sheet = file.Sheets['Hoja1']

    let localURL = sheet.B2.v
    let code = sheet.C2.v
    let password = sheet.D2.v
    let paraBuscar = sheet.E2.v
    let result = sheet.F2.v

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
    // Aqui se verifica si es que existe mas de 0 etiquetas <li>
    assert.equal(true,size.length >= result ? true : false)
};
module.exports = listProductSuccess