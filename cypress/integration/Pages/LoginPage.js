import {DashboardPage} from "./DashboardPage"

export class LoginPage{

     elements = {
        userName: () => cy.get('#username'),
        password: () => cy.get('#password'),
    }

    navigate(url){
        cy.visit(url);
        return this;
    }

    enterUserName(userId){
        this.elements.userName().type(userId);
        return this;
    }

    enterPassword(passWord){
        this.elements.password().type(passWord+'{enter}');
        return this;
    }

    verifyTitle(titleMessage){
        cy.title().should('include', titleMessage);
        return new DashboardPage();
    }
}