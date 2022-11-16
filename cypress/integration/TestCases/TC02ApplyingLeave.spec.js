it("Login Test",function(){
    const url='https://opensource-demo.orangehrmlive.com/';
    const username ='//input[@name="username"]';
    const password ='//input[@name="password"]';
    const leaveRequestApprove ='//div[@class="orangehrm-todo-list-item"]//button[@class="oxd-icon-button oxd-icon-button--success orangehrm-report-icon"]';
    const submitButton ='//button[@class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]'; 
    const apply='//a[contains(text(),"Apply")]';
    const leaveType='[class="oxd-select-text-input"]';
    const leaveName='CAN - Bereavement';
    const fromDate='(//div[@class="oxd-date-input"]//input[@class="oxd-input oxd-input--active"])[1]';
    const applyButton='//button[@type="submit"]';
    cy.visit(url)
    cy.xpath(username).type('Admin')
    cy.xpath(password).type('admin123')
    cy.xpath(submitButton).click()
    cy.xpath(leaveRequestApprove).click()
    cy.xpath(apply).click()
    cy.get(leaveType).click()
    .get('div').contains(leaveName).click()
    cy.xpath(fromDate).type('2022-11-14')
    cy.xpath(applyButton).click()
    })