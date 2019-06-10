const {Builder, By, Key, until} = require('selenium-webdriver');
const assert = require('assert');

let editProductNotSuccess = async function editProductNotSuccess(pBroswer,time) {
    let broswer = pBroswer

    let code = 'usuario1x'
    let password = 'clave1x'

    let name = ''
    let quantity = 100
    let price = 69
    // let type = 'type'
    // let discount = 'discount'
    // let nationality = 'nationality'
    
    let message = 'Rellenar este campo correctamente'

    let driver = await new Builder().forBrowser(broswer).build();
    let wait_time = time
    try {
      await driver.get('http://localhost:3000/');
      await driver.sleep(wait_time)
      await driver.findElement(By.id('code')).sendKeys(code);
      await driver.sleep(wait_time)
      await driver.findElement(By.id('password')).sendKeys(password);
      await driver.sleep(wait_time)
      await driver.findElement(By.xpath('//*[@id="save"]')).click();
      await driver.sleep(wait_time)
      await driver.findElement(By.xpath('//*[@id="products"]')).click();

      await driver.sleep(wait_time)
      await driver.findElement(By.xpath('//*[@id="root"]/main/div/ul/li[1]/button[1]')).click();

      await driver.sleep(wait_time)
      await driver.findElement(By.xpath('//*[@id="root"]/main/div/form/input[1]')).clear();
      await driver.sleep(wait_time)
      await driver.findElement(By.xpath('//*[@id="root"]/main/div/form/input[1]')).sendKeys(name);
      await driver.sleep(wait_time)
      await driver.findElement(By.xpath('//*[@id="root"]/main/div/form/input[2]')).clear();
      await driver.sleep(wait_time)
      await driver.findElement(By.xpath('//*[@id="root"]/main/div/form/input[2]')).sendKeys(quantity);
      await driver.sleep(wait_time)
      await driver.findElement(By.xpath('//*[@id="root"]/main/div/form/input[3]')).clear();
      await driver.sleep(wait_time)
      await driver.findElement(By.xpath('//*[@id="root"]/main/div/form/input[3]')).sendKeys(price);

      await driver.sleep(wait_time)
      await driver.findElement(By.xpath('//*[@id="root"]/main/div/form/button')).click();
      await driver.sleep(wait_time)
      let result = await driver.findElement(By.xpath('//*[@id="root"]/main/div/form/span[1]')).getText();
      await driver.sleep(wait_time)
      assert.equal(message,result)
    } finally {
        await driver.quit()
    }
};
module.exports = editProductNotSuccess