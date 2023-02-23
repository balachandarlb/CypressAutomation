import {GeometricsPage} from "./GeometricsPage"

export class DashboardPage{

    elements = {
        newProject: () => cy.get('#newProject'),
        projectTitle: () => cy.get('#projectTitle'),
        projectDescription: () => cy.get('#projectDescription'),
        createProject: () => cy.get('.form > .btn'),
        importDropZone: () => cy.get('.wb-import-dropzone'),
        import: () => cy.get('wb-button wb-button--md wb-button--primary')
    }

    newProject(){
        cy.get('#btn-cookie-message-accept').click({force:true});
        this.elements.newProject().click({force:true});
        return this;
    }

    projectTitle(title){
        cy.get('#btn-cookie-message-accept').click({force:true});
        this.elements.projectTitle().type(title, {force:true});
        return this;
    }

    projectDescription(description){
        cy.get('#btn-cookie-message-accept').click({force:true});
        this.elements.projectDescription().type(description, {force:true});
        return this;
    }

    createProject(){
        this.elements.createProject().click({force:true});
        return this;
    }

    attachFileToImport(modelName){
        const filePath = modelName

        this.elements.importDropZone().attachFile(filePath);
        this.elements.import().click();

        return new GeometricsPage();
    }
}
