const app = require("./server");
const supertest = require("supertest");


test("GET /industries/1", async () => {
    await supertest(app).get("/industries/1")
        .expect(200)
        .expect("Content-Type", /json/)
        .then((response) => {
            expect(response.body).toEqual({
                "id":1,
                "name":"Manufacturing",
                "headcount":1000
            })
        })
})

test("GET /industries/2", async () => {
    await supertest(app).get("/industries/2")
        .expect(200)
        .expect("Content-Type", /json/)
        .then((response) => {
            expect(response.body).toEqual({
                "id":2,
                "name":"Wholesale and retail trade",
                "headcount":2000
            })
        })
})

test("GET /industries/99", async () => {
    await supertest(app).get("/industries/99")
        .expect(200)
        .expect("Content-Type", /json/)
        .then((response) => {
            expect(response.body).toEqual({
                "id":99,
                "name":"Accounting",
                "headcount":9900
            })
        })
})