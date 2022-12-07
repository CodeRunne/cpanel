const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

if(process.env.NODE_ENV !== "production") require("dotenv").config();

// Express App
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "client/build", "index.html"));
    })
}

app.get("/", (req, res) => {
    res.send('Home page')
})

// Database
const database = {
    users: [
        {
            id: "dsfs345fd",
            sessionID: "mrans4eh39n",
            username: "cyphersloops",
            email: "josephibok36@gmail.com",
            remember_me: false,
            password: "123456",
            check: false,
            verified_mail: true,
            created_at: '2022-06-03T23:00:00.000Z'
        }
    ],
    services: {
        telegram: [
            {
                id: 4332,
                service: 'telegram 0% drop members - [Super instant start][high speed]',
                rate: 0.88,
                min_order: 500,
                max_order: 25000,
                avg_time: '1 hour 24 minutes',
                description: 'Whatever purpose you buy it for e sure for you'
            },
            {
                id: 4218,
                service: 'telegram 0% drop members - [Fastest Non Drop Server]',
                rate: 1.33,
                min_order: 100,
                max_order: 30000,
                avg_time: '8 minutes',
                description: 'Whatever purpose you buy it for e sure for you'
            },
            {
                id: 4231,
                service: 'telegram mix members - [Fast & cheap][public & private]',
                rate: 0.49,
                min_order: 500,
                max_order: 18000,
                avg_time: '29 minutes',
                description: 'Whatever purpose you buy it for e sure for you'
            },
            {
                id: 4194,
                service: 'telegram members - [Auto refill 3 days][Working][HQ]',
                rate: 0.39,
                min_order: 100,
                max_order: 80000,
                avg_time: '5 hour 45 minutes',
                description: 'Whatever purpose you buy it for e sure for you'
            },
            {
                id: 4265,
                service: 'telegram members - [Only private link working][+20k/Day]',
                rate: 0.55,
                min_order: 500,
                max_order: 30000,
                avg_time: '1 hour 25 minutes',
                description: 'Whatever purpose you buy it for e sure for you'
            }
        ],
        spotify: [
            {
                id: 5352,
                service: 'spotify enhancer - [Super instant start]',
                rate: 2.21,
                min_order: 600,
                max_order: 5000,
                avg_time: '42 minutes',
                description: 'Whatever purpose you buy it for e sure for you'
            },
            {
                id: 5289,
                service: 'spotify 0% drop members - [Fastest Non Drop Server]',
                rate: 1.00,
                min_order: 1500,
                max_order: 3000,
                avg_time: '1 hour 2 minutes',
                description: 'Whatever purpose you buy it for e sure for you'
            }
        ],
        instagram: [
            {
                id: 6362,
                service: 'instagram enhancer - [instagram start server]',
                rate: 2.02,
                min_order: 700,
                max_order: 4000,
                avg_time: '1 hour 47 minutes',
                description: 'Whatever purpose you buy it for e sure for you'
            },
            {
                id: 6389,
                service: 'instagram monify - [[Super instant start]',
                rate: 1.00,
                min_order: 1500,
                max_order: 3000,
                avg_time: 'Not enough data',
                description: 'Whatever purpose you buy it for e sure for you'
            },
            {
                id: 6444,
                service: 'instagram monify - [Fastest Non Drop Server 100%]',
                rate: 5.32,
                min_order: 8500,
                max_order: 12000,
                avg_time: '1 hour 2 minutes',
                description: 'Whatever purpose you buy it for e sure for you'
            }
        ],
        twitter: [
            {
                id: 7567,
                service: 'twitter enhancer - [instagram start server]',
                rate: 6.08,
                min_order: 800,
                max_order: 12600,
                avg_time: '34 minutes',
                description: 'Whatever purpose you buy it for e sure for you'
            },
            {
                id: 7656,
                service: 'twitter monify - [Fastest Non Drop Server]',
                rate: 2.00,
                min_order: 3000,
                max_order: 30000,
                avg_time: '5 minutes',
                description: 'Whatever purpose you buy it for e sure for you'
            }
        ]
    },
    orders: [
        {
            id: 0,
            userID: 'dsfs345fd',
            category: 'telegram',
            services: 'Telegram 0% Drop Members - [Super Instant Start][High Speed]',
            link: "https://t.me/axios",
            quantity: 500,
            status: 'pending',
            charge: 20,
            averageTime: '1 hour 30 minutes'
        },
        {
            id: 1,
            userID: 'dsfs345fd',
            category: 'spotify',
            services: 'Spotify Enhancer - [Super Instant Start]',
            link: "https://t.me/axios",
            quantity: 7000,
            status: 'completed',
            charge: 523,
            averageTime: '42 hours'
        },
        {
            id: 2,
            userID: 'another user',
            category: 'instagram',
            services: 'Instagram Enhancer - [Instagram Start Server]',
            link: 6362,
            quantity: 5000,
            status: 'pending',
            charge: 34,
            averageTime: '30 minutes'
        }
    ],
    funds: [],
    mails: [],
    session: ["mrans4eh39n"]
}

// Users Route
app.get('/users', (req, res) => {
    res.send(database.users);
});

// Session Route
app.get('/user-session', (req, res) => {
    res.send(database.session);
});

// Register user route
app.post("/register", (req, res) => {
    // Database
    const { users, session } = database;

    const { username, email, password } = req.body;

    // Existing User
    const existingUser = users.find(user => user.email === email && user.password === password);

    if(!existingUser) {
        // Remove previous session
        session.pop();

        // Create new user session
        session.push(Math.random().toString(36).slice(2));

        // Fetch user session
        const [ userSession ] = session;

        users.push({
            id: Math.random().toString(36).slice(2),
            sessionID: userSession,
            username,
            email,
            password,
            verified_mail: false,
            created_at: new Date().toISOString()
        });
        

        const user = {
            id: users[users.length - 1].id,
            sessionID: session[0],
            username,
            email,
            verified_mail: false
        }

        console.log({ status: "success", user });

        res.send({ status: "success", user });
    } else 
        res.status(404).send({status: 'failed', message: 'User already exists'});
})

// Login user router
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    // Database
    let { users } = database;

    const existingUser = users.find(user => user.username === username && user.password === password);

    if(existingUser) {
        const { id, sessionID, username, email, verified_mail } = existingUser;

        const user = {
            id,
            sessionID,
            username,
            email,
            verified_mail
        }

        const data = {
            status: 'success',
            user
        };

        res.send(data);
    } else
        res.send({ status: 'invalid', message: 'Username or Password is invalid' });
});


// Auth route
app.post('/auth/:token', (req, res) => {
    const { token } = req.params;
    const { session, users } = database;

    const sessionExists = session[0] === token;

    if(sessionExists) {
        const existingUser = users.find(user => user.sessionID === token);

        const { id, sessionID, username, email, verified_mail } = existingUser;

        const user = {
            id,
            sessionID,
            username,
            email,
            verified_mail
        }

        res.status(200).send({ user });
    } else
        res.status(404).send("User does not exist");
});

// Logout
app.get("/logout", (req, res) => {
    let { session } = database;

    session = [].concat([]);

    if(session.length === 0)
        res.status(200).send({ status: "success" });
});

// Add funds
app.post("dashboard/add-funds", (req, res) => {
    const { paymentMethod, amount } = req.body;
    const { users } = database;
    console.log(req.body)
});


//Services Routes 
app.get("/services", (req, res) => {
    const { services } = database;

    res.send(services);
}); 

app.post("/services/:category", (req, res) => {
    let { category } = req.params;
    const { services } = database;

    if(category === "all") 
        res.send(services);

    const servicesCategory = {[category]: services[category]};

    if(servicesCategory)
        res.send(servicesCategory);
})

// Orders

// Show all orders
app.get("/orders", (req, res) => {
    const { orders } = database;

    res.send(orders);
})

// Book orders
app.post("/dashboard/book-order", (req, res) => {
    const { userID, category, services, link, averageTime, quantity, charge } = req.body;
    
    // Database
    const { orders } = database; 
    const validateData = [userID, category, services, link, averageTime, quantity, charge].every(value => Boolean(value));

    if(validateData) {
        const newOrder = {
            id: Math.random().toString(36).slice(2),
            userID, 
            category, 
            services, 
            link, 
            averageTime, 
            quantity, 
            charge,  
            status: 'pending',
            created_at: new Date().toISOString()
        };

        console.log(newOrder, "order")

        orders.push(newOrder);

        res.send({ status: 'success', newOrder });
    } else {
        res.send({ status: 'error' });
    }
 });

// Get user order
app.get("/dashboard/:userID", (req, res) => {
    const { userID } = req.params;
    const { orders } = database;

    const userOrders = orders.filter(order => order.userID === userID);

    res.send({ status: 'success', data: userOrders });
})

app.post("/dashboard/:status", (req, res) => {
    let { status } = req.params;
    const { userID } = req.body;
    const { orders } = database;
    let filterOrdersByStatus;

    if(status === "in progress")
        status = "in_progress"; 

    filterOrdersByStatus = 
        orders
            .filter(order => order.userID === userID)
            .filter(order => order.status === status);


    if(status === "all") 
        filterOrdersByStatus = orders.filter(order => order.userID === userID);

    if(filterOrdersByStatus)
        res.send({status: 'success', data: filterOrdersByStatus});
});

// Port
app.listen(port, error => {
    if(error) throw error;

    console.log("Server running on port " + port);
});
