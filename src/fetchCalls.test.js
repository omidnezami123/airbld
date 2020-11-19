import { createServer } from "miragejs";
import { fetchDeals, addDeal, removeDeal, saveDeal } from "./fetchCalls";

let server;

beforeEach(() => {
  server = createServer({
    routes() {
      this.namespace = "api";
      this.get("/airbld-myorders", () => {
        return {
          orders: [
            {
              id: 0,
              title: "Fried Chicken",
              restaurant: "Popeye's",
            },
            {
              id: 1,
              title: "Hot Dog",
              restaurant: "Wienerschnitzel",
            },
            {
              id: 2,
              title: "Caesar Salad",
              restaurant: "Panera",
            },
          ],
        };
      });

      this.post("/airbld-myorders", (schema, request) => {
        return Object.assign(JSON.parse(request.requestBody), { id: 3 });
      });
    },
  });
});

afterEach(() => {
  server.shutdown();
});

test("fetchDeals()", () => {
  return fetchDeals().then((orders) => {
    expect(orders).toEqual({
      orders: [
        {
          id: 0,
          title: "Fried Chicken",
          restaurant: "Popeye's",
        },
        {
          id: 1,
          title: "Hot Dog",
          restaurant: "Wienerschnitzel",
        },
        {
          id: 2,
          title: "Caesar Salad",
          restaurant: "Panera",
        },
      ],
    });
  });
});

test("addDeal()", () => {
  return addDeal({ id: 3, title: "Burger", restaurant: "Johnny Rockets" }).then(
    (order) => {
      expect(order).toEqual({
        id: 3,
        title: "Burger",
        restaurant: "Johnny Rockets",
      });
    }
  );
});

test("deleteDeal()", () => {
  removeDeal({
    id: 0,
    title: "Fried Chicken",
    restaurant: "Popeye's",
  }).then(() => {
    expect(orders).toEqual({
      orders: [
        {
          id: 1,
          title: "Hot Dog",
          restaurant: "Wienerschnitzel",
        },
        {
          id: 2,
          title: "Caesar Salad",
          restaurant: "Panera",
        },
      ],
    });
  });
});

test("saveDeal()", () => {
  saveDeal({
    id: 1,
    title: "Hot Dog on a Stick",
    restaurant: "Wienerschnitzel",
  }).then((response) => {
    expect(response).toEqual({
      id: 1,
      title: "Hot Dog on a Stick",
      restaurant: "Wienerschnitzel",
    });
  });
});
