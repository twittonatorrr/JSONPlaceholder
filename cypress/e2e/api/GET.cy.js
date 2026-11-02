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

    it("GET-04: GET all photos", ()=>{
        const properties = ["albumId", "id", "title", "url", "thumbnailUrl"]
        cy.request(
            "GET",
            `${testData.baseURL}/photos`
        ).then((resposne)=>{
            expect(resposne.status).to.be.eq(200)
            expect(resposne.body).to.have.length(5000)
            resposne.body.forEach(el=>{
                expect(el).to.have.all.keys(properties)
            })
        })
    })

    it("GET-05: GET all todos", ()=>{
        const properties = ["userId", "id", "title", "completed"]
        cy.request(
            "GET",
            `${testData.baseURL}/todos`
        ).then((response)=>{
            expect(response.status).to.be.eq(200)
            expect(response.body).to.have.length(200)
            response.body.forEach(el=>{
                expect(el).to.have.all.keys(properties)
            })
        })
    })

    it("GET-06: GET all users", ()=>{
        const properties = ["id", "name", "username", "email", "address", "phone", "website", "company"]
        cy.request(
            "GET",
            `${testData.baseURL}/users`
        ).then((response)=>{
            expect(response.status).to.be.eq(200)
            expect(response.body).to.have.length(10)
            response.body.forEach((el)=>{
                expect(el).to.have.all.keys(properties)
            })

        })
    })

    it("GET-07: GET post with id 1", ()=>{
       const properties = ["userId", "id", "title", "body"]
        cy.request(
            "GET",
            `${testData.baseURL}/posts/1`
        ).then((response)=>{
            expect(response.status).to.be.eq(200)
            expect(response.body).to.have.all.keys(properties)
        })
    })

    it("GET-08: GET post with id 100", ()=>{
       const properties = ["userId", "id", "title", "body"]
        cy.request(
            "GET",
            `${testData.baseURL}/posts/100`
        ).then((response)=>{
            expect(response.status).to.be.eq(200)
            expect(response.body).to.have.all.keys(properties)
        })
    })

    it("GET-09: GET post with id 0", ()=>{
        cy.request({
            method:"GET",
            url: `${testData.baseURL}/posts/0`,
            failOnStatusCode: false
        }).then((response)=>{
            expect(response.status).to.be.eq(404)
            expect(response.body).to.be.empty
        })
    })

    it("GET-10: GET post with id 101", ()=>{
        cy.request({
            methjod: "GET",
            url: `${testData.baseURL}/posts/101`,
            failOnStatusCode: false
        }).then((response)=>{
            expect(response.status).to.be.eq(404)
            expect(response.body).to.be.empty
        })
    })

    it("GET-11: GET post with id -1", ()=>{
        cy.request({
            methjod: "GET",
            url: `${testData.baseURL}/posts/-1`,
            failOnStatusCode: false
        }).then((response)=>{
            expect(response.status).to.be.eq(404)
            expect(response.body).to.be.empty
        })
    })

    it("GET-12: GET post with id `abc` ", ()=>{
        cy.request({
            methjod: "GET",
            url: `${testData.baseURL}/posts/abc`,
            failOnStatusCode: false
        }).then((response)=>{
            expect(response.status).to.be.eq(404)
            expect(response.body).to.be.empty
        })
    })

    it("GET-13: GET post with id 1.5 ", ()=>{
        cy.request({
            methjod: "GET",
            url: `${testData.baseURL}/posts/1.5`,
            failOnStatusCode: false
        }).then((response)=>{
            expect(response.status).to.be.eq(404)
            expect(response.body).to.be.empty
        })
    })

    it("GET-14: GET posts collection", ()=>{
        const properties = ["userId", "id", "title", "body"]
        cy.request(
            "GET",
            `${testData.baseURL}/posts`
        ).then((response)=>{
            expect(response.status).to.be.eq(200)
            expect(response.body).to.have.length(100)
            response.body.forEach(element => {
                expect(element).to.have.all.keys(properties)
            });
        })
    })

    it("GET-15: GET unknown resource", ()=>{
        cy.request({
            method: "GET",
            url: `${testData.baseURL}/unknown`,
            failOnStatusCode: false
        }).then((response)=>{
            expect(response.status).to.be.eq(404)
            expect(response.body).to.be.empty
        })
    })

    it("GET-16: GET unknown path", ()=>{
        cy.request({
            method: "GET",
            url: `${testData.baseURL}/1/unknown`,
            failOnStatusCode: false
        }).then((response)=>{
            expect(response.status).to.be.eq(404)
            expect(response.body).to.be.empty
        })
    })

    it("GET-17: GET posts by incorrect spell", ()=>{
        const properties = ["userId", "id", "title", "body"]
        cy.request({
            method: "GET",
            url: `${testData.baseURL}/POSTS`
        }).then((response)=>{
            expect(response.status).to.be.eq(200)
            expect(response.body).to.have.length(100)
            response.body.forEach(element => {
                expect(element).to.have.all.keys(properties)
            });
        })
    })

    it("GET-18: GET posts with non unused values", ()=>{
        const properties = ["userId", "id", "title", "body"]
        cy.request({
            method: "GET",
            url: `${testData.baseURL}/posts/1?unused=value`
        }).then((response)=>{
            expect(response.status).to.be.eq(200)
            expect(response.body).to.have.all.keys(properties)
        })
    })

    it("GET-19: GET post with ID 1", ()=>{
        const properties = ["userId", "id", "title", "body"]
        cy.request({
            method: "GET",
            url: `${testData.baseURL}/posts?id=1`
        }).then((response)=>{
            expect(response.status).to.be.eq(200)
            expect(response.body[0]).to.have.all.keys(properties)
            expect(response.body[0].id).to.be.eq(1)
        })
    })
})