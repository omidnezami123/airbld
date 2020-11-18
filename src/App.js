import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import PageNotFound from "./PageNotFound";
import Order from "./Order";
import Orders from "./Orders";
import MyOrders from "./MyOrders";
import Modal from "./Modal";
import { useState } from "react";
import { removeDeal } from "./fetchCalls";

function App() {
  const [orders, setOrders] = useState([
    {
      id: 0,
      title: "Burger 'n Fries",
      restaurant: "Dulce",
      price: "$6.99",
    },
    {
      id: 1,
      title: "Blueberry Acai",
      restaurant: "Sunlife Organics",
      price: "$4.99",
    },
    {
      id: 2,
      title: "Collard Greens",
      restaurant: "Honeybird",
      price: "$1.99",
    },
    {
      id: 3,
      title: "Avocado Toast",
      restaurant: "Greenleaf Chopshop",
      price: "$4.99",
    },
    {
      id: 4,
      title: "Turkey Sandwich",
      restaurant: "Nature's Brew",
      price: "$4.99",
    },
    {
      id: 5,
      title: "Mediterranean Mezze",
      restaurant: "Cava",
      price: "$3.99",
    },
  ]);

  function deleteOrder(orderToBeDeleted) {
    removeDeal(orderToBeDeleted.id).then(() => {
      const filteredOrders = orders.filter((order) => {
        return order.id !== orderToBeDeleted.id;
      });

      setOrders(filteredOrders);
    });
  }

  function editIssue(issueToBeEdited, newTitle, newLabelId) {
    saveIssue({
      ...issueToBeEdited,
      title: newTitle,
      label: newLabelId,
    }).then((updatedIssue) => {
      const updatedIssues = issues.map((issue) => {
        if (issue.id === updatedIssue.id) {
          return updatedIssue;
        } else {
          return issue;
        }
      });

      setIssues(updatedIssues);
    });
  }

  function createIssue(title, labelId) {
    saveIssue({
      title: title,
      label: labelId,
    }).then((newIssue) => {
      setIssues(issues.concat(newIssue));
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
          <Orders orders={orders} setorders={setOrders} />
        </Route>
        <Route path="/order/:id" exact={true}>
          <Order orders={orders} />
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
