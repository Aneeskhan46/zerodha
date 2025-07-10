here the steps provide how we insert the data in mongoatlas  and fetch the data in database 
after creating model&schema

they are three steps ::inserting data , reading the data , fetching the data

<!-- step1 : inserting data -->

<!-- #requirng model to index.js  -->

<!-- //requiring model -->
const Holding = require("./models&schema/holding.js")



<!-- ##inserting data -->

app.get("/addHoldings", async (req, res) => {
  let tempHoldings = [
    {
      name: "BHARTIARTL",
      qty: 2,
      avg: 538.05,
      price: 541.15,
      net: "+0.58%",
      day: "+2.99%",
    },
    {
      name: "HDFCBANK",
      qty: 2,
      avg: 1383.4,
      price: 1522.35,
      net: "+10.04%",
      day: "+0.11%",
    },
    {
      name: "HINDUNILVR",
      qty: 1,
      avg: 2335.85,
      price: 2417.4,
      net: "+3.49%",
      day: "+0.21%",
    },
    
  ];

<!-- //create a variable and store data to insert -->
  tempHoldings.forEach((item) => {
    let newHolding = new Holding({
      name: item.name,
      qty: item.qty,
      avg: item.avg,
      price: item.price,
      net: item.day,
      day: item.day,
    });

    newHolding.save();
  });
  res.send("Done!");
});

<!-- and then start server , and go to browser type (localhost:portnumber/addHoldings) and then
enter it will give the response done and see the atlas , the data got inserted  -->



<!-- step 2: reading the data by sending to the route  -->

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await Holding.find({});
  res.json(allHoldings);
});



and then use thunder client or browser and  type (localhost:portnumber/allHoldings)   and 
you will get the data from the database in this route



<!-- step:3 fetching the data in dashboard(frontend) -->

<!-- requiring state and useeffect -->
import React, { useState, useEffect } from "react";
<!-- first install axios and import it  -->
<!-- it is use to connect with link which data is send -->
import axios from "axios";  


<!-- it is holding component in arrow function -->
const Holdings = () => {

<!-- write state -->
  const [allHoldings, setAllHoldings] = useState([]);

<!-- use useeffect -->  //portnumber from index.js app.listening()
  useEffect(() => {
    axios.get("http://localhost:portnumber/allHoldings").then((res) => {
      // console.log(res.data);
      setAllHoldings(res.data); /////this will insert the data in a variable
    });
  }, []);

  return (
    ....
    <!-- ....//and put variable allHoldings -->
  )


  <!-- we need to include cors , bodyparser in index.js to connect with frontend(dashboard) -->

<!-- make sure to import this -->
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());


<!-- and start the frontend and backend in two terminal  -->