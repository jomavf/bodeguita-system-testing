const { Builder } = require('selenium-webdriver');

class SingleDriver {
	constructor(){
		this.chrome_driver = null
		this.firefox_driver = null
	}
	async init(){
		await this.init_chrome()
		await this.init_firefox()
	}
	async init_chrome(){
		this.chrome_driver = await new Builder().forBrowser('chrome').build();
	}
	async init_firefox(){
		this.firefox_driver = await new Builder().forBrowser('firefox').build();
	}
	async quit_chrome(){
		await this.chrome_driver.quit()
	}
	async quit_firefox(){
		await this.firefox_driver.quit()
	}
}
module.exports = SingleDriver