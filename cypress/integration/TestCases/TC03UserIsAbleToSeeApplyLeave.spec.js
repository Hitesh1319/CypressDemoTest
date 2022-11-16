it("Login Test",function(){
    const url='https://opensource-demo.orangehrmlive.com/';
    const username ='//input[@name="username"]';
    const password ='//input[@name="password"]';
    const submitButton ='//button[@class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]'; 
    const leaveRequestApprove ='//div[@class="orangehrm-todo-list-item"]//button[@class="oxd-icon-button oxd-icon-button--success orangehrm-report-icon"]';
    const myLeave ='//a[contains(text(),"My Leave")]';
    cy.visit(url)
    cy.xpath(username).type('Admin')
    cy.xpath(password).type('admin123')
    cy.xpath(submitButton).click()
    cy.xpath(leaveRequestApprove).click()
    cy.xpath(myLeave).click()
    })