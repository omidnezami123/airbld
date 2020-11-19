import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import PageNotFound from "./PageNotFound";
import Order from "./Order";
import Orders from "./Orders";
import MyOrders from "./MyOrders";
import Modal from "./Modal";
import { useState } from "react";
import { addDeal, removeDeal, saveDeal } from "./fetchCalls";
import Ordered from "./Ordered";

function App() {
  const [orders, setOrders] = useState([
    {
      id: 0,
      title: "Burger 'n Fries",
      restaurant: "Dulce",
      price: "$6.99",
      description:
        "angus beef, American cheese, fried onions, and sriracha mayo all sandwiched between two sesame seed buns. oh, and some delish waffle-cut fries",
      notes: "",
      src:
        "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/2/0/TM2817_Mexi-Mac-Burgers.jpg.rend.hgtvcom.826.620.suffix/1552666964601.jpeg",
    },
    {
      id: 1,
      title: "Blueberry Acai",
      restaurant: "Sunlife Organics",
      price: "$4.99",
      description:
        "one large banana sliced, one cup of blueberries, almondmilk, all in a standard acai bowl.",
      notes: "",
      src:
        "https://choosingchia.com/jessh-jessh/uploads/2017/08/blueberry-acai-bowl-1.jpg",
    },
    {
      id: 2,
      title: "Collard Greens",
      restaurant: "Honeybird",
      price: "$1.99",
      description:
        "classic collard greens cooked low and slow, just like mama made 'em.",
      notes: "",
      src:
        "https://www.seriouseats.com/recipes/images/2017/02/20170217-vegan-collard-greens-vicky-wasik-6-1500x1125.jpg",
    },
    {
      id: 3,
      title: "Avocado Toast",
      restaurant: "Greenleaf Chopshop",
      price: "$4.99",
      description:
        "one California avocado smashed, a poached egg, and sea salt all on whole-wheat toast.",
      notes: "",
      src:
        "https://data.thefeedfeed.com/static/other/15332253445b6329807c76a.png",
    },
    {
      id: 4,
      title: "Turkey Sandwich",
      restaurant: "Nature's Brew",
      price: "$4.99",
      description:
        "free-range turkey breast, mayo, sliced avocado, lettuce, and tomato between two pieces of sourdough bread.",
      notes: "",
      src:
        "https://lh3.googleusercontent.com/9FZ1T3uK6H4mtKJAlwszGVzWdaPVdTCzwRfsCujmEckvkLPmjzZj0ISN3NgKzEed7Gzz1YXpzlVW38VSG9C1SA=w1358-h764-c-rj-v1-e365",
    },
    {
      id: 5,
      title: "Mediterranean Mezze",
      restaurant: "Cava",
      price: "$3.99",
      description:
        "a variety of appetizers from the Mediterranean, including stuffed olives, stuffed grape leaves, and hummus and whole-wheat pita.",
      notes: "",
      src:
        "https://www.easycheesyvegetarian.com/wp-content/uploads/2018/05/Easy-vegetarian-mezze-platter-4.jpg",
    },
  ]);

  function deleteOrder(orderToBeDeleted) {
    removeDeal(orderToBeDeleted.id).then(() => {
      setOrders(orders.concat(orderToBeDeleted));
    });
  }

  function editOrder(orderToBeEdited) {
    saveDeal(orderToBeEdited).then((updatedOrder) => {
      const updatedOrders = orders.map((order) => {
        if (order.id === updatedOrder.id) {
          return updatedOrder;
        } else {
          return order;
        }
      });

      setOrders(updatedOrders);
    });
  }

  function addOrder(values) {
    addDeal(values).then(() => {
      const filteredOrders = orders.filter((order) => {
        return order.id !== values.id;
      });

      setOrders(filteredOrders);
    });
  }
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true}>
          <Home />
          <Modal />
        </Route>
        <Route path="/orders" exact={true}>
          <Orders orders={orders} />
        </Route>
        <Route path="/order/:id" exact={true}>
          <Order orders={orders} addOrder={addOrder} />
        </Route>
        <Route path="/ordered/:id" exact={true}>
          <Ordered
            orders={orders}
            editOrder={editOrder}
            deleteOrder={deleteOrder}
            setOrders={setOrders}
          />
        </Route>
        <Route path="/myorders" exact={true}>
          <MyOrders />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
