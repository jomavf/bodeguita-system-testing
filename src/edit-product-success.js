  const { By } = require('selenium-webdriver');
const assert = require('assert');

let editProductSuccess = async function editProductSuccess(driver,time,url) {
    let file = await XLSX.readFile("./src/data/EditarProductoData.xlsx")
    let sheet = file.Sheets['Hoja1']

    let localURL = sheet.B2.v  
    let code = sheet.C2.v
    let password = sheet.D2.v
    let name = sheet.E2.v
    let quantity = sheet.F2.v
    let price = sheet.G2.v
    let type = sheet.H2.v
    let nationality = sheet.I2.v
    let discount = sheet.J2.v
    let message = sheet.K2.v
     
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
    await driver.findElement(By.xpath('//*[@id="root"]/main/div/ul/li[1]/button[1]')).click();

    await driver.sleep(time)
    await driver.findElement(By.xpath('//*[@id="root"]/main/div/form/input[1]')).clear();
    await driver.sleep(time)
    await driver.findElement(By.xpath('//*[@id="root"]/main/div/form/input[1]')).sendKeys(name);
    await driver.sleep(time)
    await driver.findElement(By.xpath('//*[@id="root"]/main/div/form/input[2]')).clear();
    await driver.sleep(time)
    await driver.findElement(By.xpath('//*[@id="root"]/main/div/form/input[2]')).sendKeys(quantity);
    await driver.sleep(time)
    await driver.findElement(By.xpath('//*[@id="root"]/main/div/form/input[3]')).clear();
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
    let result = await driver.findElement(By.xpath('//*[@id="root"]/main/div/form/span[4]')).getText();
    await driver.sleep(time)
    assert.equal(message,result)
};
module.exports = editProductSuccess