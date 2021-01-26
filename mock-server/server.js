const fs = require('fs')
const bodyParser = require('body-parser')
const jsonServer = require('json-server')
const jwt = require('jsonwebtoken')

const server = jsonServer.create()
const router = jsonServer.router('db.trade.json')
const userdb = JSON.parse(fs.readFileSync('db.users.json', 'UTF-8'))

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

const SECRET_KEY = '123456789'

const expiresIn = '1h'

var userList = [];

// Create a token from a payload
function createToken(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn })
}

// Verify the token
function verifyToken(token) {
  return jwt.verify(token, SECRET_KEY, (err, decode) => decode !== undefined ? decode : err)
}

// Check if the user exists in database
function isAuthenticated({ username, password }) {
  return userList.findIndex(user => user.username === username && user.password === password) !== -1
}

// Fix CORS
server.use(function (req, res, next) {
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    res.send();
  }
  next();
});

// Login user
server.post('/user/authenticate', (req, res) => {
  const { username, password } = req.body;

  if (isAuthenticated({ username, password }) === false) {
    const status = 401;
    const message = 'Incorrect username or password';
    res.status(status).json({ status, message });
    return
  }

  var id;
  for (var idx = 0; idx < userList.length; idx++) {
    if (userList[idx].username === username )
      id = userList[idx].id;
  }

  const token = createToken({ username, password });
  res.json({ id, username, token });
})

// Add new user to database
server.post('/user/register', (req, res) => {
  const { username, password, email } = req.body

  for (var i = 0; i < userList.length; ++i) {
    if (userList[i].username === username) {
      res.status(200);
      return;
    }
  }
  userList.push({id: userList.length + 1, username, password, email, budget: 0 });
  // fs.writeFile('db.users.json', JSON.stringify(userdb), (err) => {
  //   if (err) throw err;
  //   console.log('The user has been saved!');
  //   res.status(200).json({ username, email });
  // })
  res.status(200).json({ username, email });
  return
})

server.post('/user/recover', (req, res) => {
  const { email } = req.body
  var password = null

  for (user of userList) {
    if (user.email == email) {
      password = user.password;
      break;
    }
  }

  if (password == null) {
    console.log("No user found for email " + email);
    res.status(200).json({ success: false });
    return;
  }

  var nodemailer = require('nodemailer');

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'family.app.psb@gmail.com',
      pass: 'familyapp'
    }
  });

  var mailOptions = {
    from: 'support@familyapp.com',
    to: email,
    subject: 'Password recovery',
    text: 'Your password is: ' + password
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

  res.status(200).json({ success: true });
  return;
})

server.post('/user/addmoney', (req, res) => {
  const { moneyToAdd, id } = req.body;

  console.log(moneyToAdd, id);
  let foundUser = false;

  for (var idx = 0; idx < userList.length; idx++) {
    if (userList[idx].id === id) {
      userList[idx].budget += moneyToAdd;
      foundUser = true;

      break;
    }
  }

  if (!foundUser) {
    res.status(404);
  } else {
    res.status(200);
  }
  
  return;
});

server.get('/user/list', (req, res) => {
 res.status(200).json({userList});
 return;
})

server.use(router)

server.listen(8200, () => {
})
