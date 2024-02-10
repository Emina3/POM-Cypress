class DashboardPage{
    // Web Elementleri
    constructor() {
        
    }




    // Metotlar
    verifyUrl(url) {
        cy.url().should('contain', url)
    }



}
export const dashboard = new DashboardPage()