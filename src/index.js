const {Builder, By, Key, until} = require('selenium-webdriver');
const assert = require('assert');


(async function example() {
    let broswer = 'firefox'
    let code = 'usuario1x'

    let name = 'test'
    let quantity = 123
    let price = 10
    let type = 'type'
    let discount = 'discount'
    let nationality = 'nationality'
    let message = 'Añadido exitosamente'


    let password = 'clave1x'
  let driver = await new Builder().forBrowser(broswer).build();
  try {
    await driver.get('http://localhost:3000/');
    await driver.sleep(2000)
    await driver.findElement(By.id('code')).sendKeys(code);
    await driver.sleep(2000)
    await driver.findElement(By.id('password')).sendKeys(password);
    await driver.sleep(2000)
    await driver.findElement(By.xpath('//*[@id="save"]')).click();
    await driver.sleep(2000)
    await driver.findElement(By.xpath('//*[@id="products"]')).click();

    await driver.sleep(2000)
    await driver.findElement(By.xpath('//*[@id="root"]/main/div/form/input[1]')).sendKeys(name);
    await driver.sleep(2000)
    await driver.findElement(By.xpath('//*[@id="root"]/main/div/form/input[2]')).sendKeys(quantity);
    await driver.sleep(2000)
    await driver.findElement(By.xpath('//*[@id="root"]/main/div/form/input[3]')).sendKeys(price);
    // await driver.sleep(2000)
    // await driver.findElement(By.id('type')).sendKeys(type);
    // await driver.sleep(2000)
    // await driver.findElement(By.id('discount')).sendKeys(discount);
    // await driver.sleep(2000)
    // await driver.findElement(By.id('nationality')).sendKeys(nationality);
    await driver.sleep(2000)
    await driver.findElement(By.xpath('//*[@id="root"]/main/div/form/button')).click();
    await driver.sleep(2000)
    let result = await driver.findElement(By.xpath('//*[@id="root"]/main/div/form/span')).getText();
    await driver.sleep(2000)
    assert.equal(message,result)
  } finally {
      console.log('YA esta ya')
  }
})();