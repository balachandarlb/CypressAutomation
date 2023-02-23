export class GeometricsPage{

    elements = {
        editInCADMode: () => cy.get('.wb-button wb-warning__button wb-button--md wb-button--primary'),
        import: () => cy.get('.wb-button wb-button--md wb-button--primary'),
        collapseIcon: () => cy.get('.wb-treeItem__collapseIconBox'),
        selectHealingMethod: () => cy.get('#root___heal_action'),
        apply: () => cy.get('span:contains("Apply")'),
        export: () => cy.get('span:contains("Export")'),
        deleteFace: () => cy.get(':nth-child(2) > .wb-operationsBar__actionsBtnGroup > :nth-child(1) > .wb-icon > svg'),
        showFaces: () => cy.get('.wb-boolean__dot')
    }

    editInCADMode(){
        cy.get('.wb-button wb-warning__button wb-button--md wb-button--primary', { timeout: 60000 }).should('be.visible');
        this.elements.editInCADMode().click();

        return this;
    }

    showFaces(){
        this.elements.showFaces().click();

        return this;
    }

    expandFaces(){
        this.elements.collapseIcon().eq(1).click();

        return this;
    }

    selectFace(face){
        cy.get('span:contains('+face+')').click();

        return this;
    }

    deleteFace(){
        this.elements.deleteFace().click();

        return this;
    }

    selectHealingMethod(healingMethod){
        this.elements.selectHealingMethod().select(healingMethod);

        return this;
    }

    apply(){
        this.elements.apply().click();

        return this;
    }

    verifyDeletedFace(face){
        cy.get('span:contains('+face+')').should('not.exist');

        return this;
    }

    export(){
        this.elements.export().click();
        cy.get('.wb-button wb-warning__button wb-button--md wb-button--primary', { timeout: 60000 }).should('be.visible');

        return this;
    }
}