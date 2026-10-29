import testData from "../../fixtures/testData.json"
describe("GET data suite", ()=>{
    it("GET-01: Get all posts", ()=>{
        const properties = ["userId", "id", "title", "body"]
        cy.request(
            "GET",
            `${testData.baseURL}/posts`
        ).then((request)=>{
            expect(request.status).to.be.eq(200)
            expect(request.body).to.have.length(100)
            request.body.forEach(element => {
                expect(element).to.have.all.keys(properties)
            });

        })
    })

    it("GET-02: Get all comments", ()=>{
        const properties = ["postId", "id", "name", "email", "body"]
        cy.request(
            "GET",
            `${testData.baseURL}/comments`
        ).then((request)=>{
            expect(request.status).to.be.eq(200)
            expect(request.body).to.have.length(500)
            request.body.forEach(element => {
                expect(element).to.have.all.keys(properties)
            });

        })
    })

    it("GET-03: Get all albums", ()=>{
        const properties = ["userId", "id", "title"]
        cy.request(
            "GET",
            `${testData.baseURL}/albums`
        ).then((request)=>{
            expect(request.status).to.be.eq(200)
            expect(request.body).to.have.length(100)
            request.body.forEach(element => {
                expect(element).to.have.all.keys(properties)
            });

        })
    })
})