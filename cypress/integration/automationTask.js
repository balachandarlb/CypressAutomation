/// <reference types="cypress" />

import {LoginPage} from "./Pages/LoginPage"
import {DashboardPage} from "./Pages/DashboardPage"
import { GeometricsPage } from "./Pages/GeometricsPage"

describe('toDeleteFace',function(){

    before(function(){
        cy.fixture('example').then(function(data){
            this.data = data;
        })
    })
    
    it('loginToSimScale',function(){
        const loginPage = new LoginPage();

        loginPage.navigate(this.data.url)
                .enterUserName(this.data.userName)
                .enterPassword(this.data.password)
                .verifyTitle('SimScale Dashboard - Your Simulations and Activity Overview');
    })

    it('createNewProject',function(){
        const dashboardPage = new DashboardPage();
        
        dashboardPage.newProject()
                    .projectDescription('Sample Project')
                    .projectTitle('Sample Project')
                    .createProject();
    })

    it('uploadModel', function(){ 
        const dashboardPage = new DashboardPage();

        dashboardPage.attachFileToImport(this.data.pipeModelName);

    })

    it('deleteFace', function(){ 
        const geometricsPage = new GeometricsPage();

        geometricsPage.editInCADMode()
                    .showFaces()
                    .expandFaces()
                    .selectFace('Face 20')
                    .deleteFace()
                    .selectHealingMethod('Cap')
                    .apply()
                    .verifyDeletedFace()

    })
})