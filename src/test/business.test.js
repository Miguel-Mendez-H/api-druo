
const businessController = require("../controllers/businessController");


describe("getAll Business", () => {
  test("should return all businesses", async () => {
    const req = {};
    const res = {
      json: jest.fn(),
    };
    await businessController.getAll(req, res);
    expect(res.json).toHaveBeenCalled();
  });
});


test("should return a 400 because the register exist", async () => {
  const req = {
    body: {
      name: "negocio1",
      nit: "1234",
      mail: "test@gmail.com",
    },
  };
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn()
  };

  await businessController.create(req, res);

  expect(res.status).toHaveBeenCalledWith(400);
  expect(res.json).toHaveBeenCalled();
});

