describe('API Testing', () => {
    
    let authToken = null;
    var chars = '123456789';
    var  string1 = '';
    for(var i=0; i<3; i++){
    string1 += chars[Math.floor(Math.random() * chars.length)];
    }
    before("Creating accesstoken",() => {
      
        cy.request({
            method: 'POST',
            url: 'https://simple-books-api.glitch.me/api-clients',
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                clientName: "Shahriyar1",
                clientEmail: "shahriyar"+string1+"@gmail.com"
            }
        }).then((response)=>{
            authToken= response.body.accessToken;
        });

    })
    
    before("Creating order",() => {
        cy.request({
            method: 'POST',
            url: "https://simple-books-api.glitch.me/orders",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+ authToken
            },
            body: {
                bookId: 1,
                customerName: "Mitchell Goodwin"
            }

        }).then((response)=>{
            expect(response.status).to.eq(201);
            expect(response.body.created).to.eq(true);
        });

    });

    it('Fetch all order', () => {
        cy.request({
            method: 'GET',
            url: 'https://simple-books-api.glitch.me/orders/',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+ authToken
            },
            cookies:{
                'cookieName': 'mycookie'
            }
        }).then((response)=>{
            expect(response.status).to.eq(200);
            expect(response.body).has.length(1);
        })
    });
});