describe('Parcing Json body', () => {
    
    it('Parsing simple json response', () => {
        
        cy.request({
            method: 'GET',
            url: 'https://fakestoreapi.com/products'
        }).then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body[0].id).to.eq(1)
            expect(response.body[0].price).to.eq(109.95)
            expect(response.body[0].rating.count).to.equal(120)
        })
    });

    it.only('Parsing all the json response', () => {
        let totalprice=0;
        cy.request({
            method: 'GET',
            url: 'https://fakestoreapi.com/products',
            qs: {limit:5}
        }).then((response)=>{
            expect(response.status).to.eq(200)
            response.body.forEach(element => {
                totalprice= totalprice+element.price;
            });
            expect(totalprice).to.equal(899.23)
        })
    });

});