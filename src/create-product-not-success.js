const {Builder, By, Key, until} = require('selenium-webdriver');
const assert = require('assert');

let createProductNotSuccess = async function createProductNotSuccess(pBroswer,time) {
    let broswer = pBroswer

    let file = await XLSX.readFile("./src/data/RegistrarProductoData.xlsx")
    let sheet = file.Sheets['Hoja1']

    let url = sheet.B3.v
    let code = sheet.C3.v
    let password = sheet.D3.v

    let name = sheet.E3.v
    let quantity = sheet.F3.v
    let price = sheet.G3.v
    let type = sheet.H3.v
    let discount = sheet.J3.v
    let nationality = sheet.I3.v
    
    let message = sheet.K3.v

    let driver = await new Builder().forBrowser(broswer).build();
    let wait_time = time
    try {
      await driver.get(url);
      await driver.sleep(wait_time)
      await driver.findElement(By.id('code')).sendKeys(code);
      await driver.sleep(wait_time)
      await driver.findElement(By.id('password')).sendKeys(password);
      await driver.sleep(wait_time)
      await driver.findElement(By.xpath('//*[@id="save"]')).click();

      await driver.sleep(wait_time)
      await driver.findElement(By.xpath('//*[@id="products"]')).click();
      await driver.sleep(wait_time)
      await driver.findElement(By.xpath('//*[@id="root"]/main/div/button')).click();

      await driver.sleep(wait_time)
      await driver.findElement(By.xpath('//*[@id="root"]/main/div/form/input[1]')).sendKeys(name);
      await driver.sleep(wait_time)
      await driver.findElement(By.xpath('//*[@id="root"]/main/div/form/input[2]')).sendKeys(quantity);
      await driver.sleep(wait_time)
      await driver.findElement(By.xpath('//*[@id="root"]/main/div/form/input[3]')).sendKeys(price);
      // await driver.sleep(wait_time)
      // await driver.findElement(By.id('type')).sendKeys(type);
      // await driver.sleep(wait_time)
      // await driver.findElement(By.id('discount')).sendKeys(discount);
      // await driver.sleep(wait_time)
      // await driver.findElement(By.id('nationality')).sendKeys(nationality);
      await driver.sleep(wait_time)
      await driver.findElement(By.xpath('//*[@id="root"]/main/div/form/button')).click();
      await driver.sleep(wait_time)
      let result = await driver.findElement(By.xpath('//*[@id="root"]/main/div/form/span[2]')).getText();
      assert.equal(message,result)
    } finally {
        await driver.quit()
    }
};
module.exports = createProductNotSuccess
