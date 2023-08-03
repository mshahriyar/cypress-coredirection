


describe('API Testing', ()=>{
    
    it('POST requst', ()=>{
        var chars = '123456789';
        var  string1 = '';
        for(var i=0; i<3; i++){
        string1 += chars[Math.floor(Math.random() * chars.length)];
        }
    const requestBody={
         tourist_name: "shery"+string1,
         tourist_email: "shery"+string1+"@gmail.com",
         tourist_location: "London"
    }
        cy.request(
            {
                method: 'POST',
                url: 'http:/restapi.adequateshop.com/api/Tourist',
                body: requestBody
            }).then((response)=>{
            expect(response.status).to.eq(201)
            expect(response.body.tourist_name).to.eq(requestBody.tourist_name)
            expect(response.body.tourist_email).to.eq(requestBody.tourist_email)
            expect(response.body.tourist_location).to.eq(requestBody.tourist_location)

            //validate property name
            expect(response.body).has.property('tourist_email', requestBody.tourist_email)
            
        })
    })

    // it('PUT requst', ()=>{
    //     cy.request(
    //         {
    //             method: 'PUT',
    //             url: 'https://simple-books-api.glitch.me/api-clients',
    //             body: {
    //                 name: "Shery",
    //                 job: "zion"
    //             }
    //         }
    //     )
    //     .its('status')
    //     .should('equal', 200)

    // })    
})