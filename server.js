const AWS = require("aws-sdk");
const https = require("https");
const fs = require("fs");
var express = require("express");
var app = express();
var cors = require("cors");
app.use(cors());

app.get("/console", function (req, res) {
  var quicksight = new AWS.Service({
    apiConfig: require("./quicksight-2018-04-01.min.json"),
    region: "us-east-1",
  });

  quicksight.getSessionEmbedUrl(
     {
      AwsAccountId: '534860077983',
      EntryPoint: "/start",
      SessionLifetimeInMinutes: 600,
     // UserArn: 'arn:aws:quicksight:us-east-1:534860077983:user/default/ittreader'
      UserArn: 'arn:aws:quicksight:us-east-1:534860077983:user/AscendLogix/awsadmin'
      //  UserArn: 'arn:aws:quicksight:us-east-1:534860077983:user/AscendLogix/qsreader@ascendlogix.com'
    },
    function (err, data) {
      console.log("Errors: ");
      console.log(err);
      console.log("Response: ");
      console.log(data);
      res.send(data);
    });
});
app.get("/console", function (req, res) {
  var quicksight = new AWS.Service({
    apiConfig: require("./quicksight-2018-04-01.min.json"),
    region: "us-east-1",
  });

  quicksight.getSessionEmbedUrl(
     {
      AwsAccountId: '534860077983',
      EntryPoint: "/start",
      SessionLifetimeInMinutes: 600,
     // UserArn: 'arn:aws:quicksight:us-east-1:534860077983:user/default/ittreader'
     // UserArn: 'arn:aws:quicksight:us-east-1:534860077983:user/AscendLogix/qsreader@ascendlogix.com'
    },
    function (err, data) {
      console.log("Errors: ");
      console.log(err);
      console.log("Response: ");
      console.log(data);
      res.send(data);
    });
});


app.get("/customerchurn", function (req, res) {
  var quicksight = new AWS.Service({
    apiConfig: require("./dist/quicksight-2018-04-01.min.json"),
    region: "us-east-1",
  });

  quicksight.getDashboardEmbedUrl(
    {
      AwsAccountId: "534860077983",
      DashboardId: "f6dfb2f0-e214-4bf5-b6db-d64fcf183776",
      IdentityType: "IAM",
      SessionLifetimeInMinutes: 600,
      UndoRedoDisabled: false,
    },
    function (err, data) {
      console.log("Errors: ");
      console.log(err);
      console.log("Response: ");
      console.log(data);
      res.send(data);
    }
  );
});

app.get("/customer360", function (req, res) {
  var quicksight = new AWS.Service({
    apiConfig: require("./dist/quicksight-2018-04-01.min.json"),
    region: "us-east-1",
  });

  quicksight.getDashboardEmbedUrl(
    {
      AwsAccountId: "534860077983",
      DashboardId: "615b7e76-27e9-47f0-b24d-73fcce4c06a9",
      IdentityType: "IAM",
      SessionLifetimeInMinutes: 600,
      UndoRedoDisabled: false,
    },
    function (err, data) {
      console.log("Errors: ");
      console.log(err);
      console.log("Response: ");
      console.log(data);
      res.send(data);
    }
  );
});


app.get("/retail", function (req, res) {
  var quicksight = new AWS.Service({
    apiConfig: require("./dist/quicksight-2018-04-01.min.json"),
    region: "us-east-1",
  });

  quicksight.getDashboardEmbedUrl(
    {
      AwsAccountId: "534860077983",
      DashboardId: "899c3d83-c820-4e3a-b425-cf1896c1e487",
      IdentityType: "IAM",
      SessionLifetimeInMinutes: 600,
      UndoRedoDisabled: false,
    },
    function (err, data) {
      console.log("Errors: ");
      console.log(err);
      console.log("Response: ");
      console.log(data);
      res.send(data);
    }
  );
});

app.get("/retail-new", function (req, res) {
  var quicksight = new AWS.Service({
    apiConfig: require("./dist/quicksight-2018-04-01.min.json"),
    region: "us-east-1",
  });

  quicksight.getDashboardEmbedUrl(
    {
      AwsAccountId: "534860077983",
      DashboardId: "c2191ed7-b034-4f7f-9358-29c6e27f51ff",
      IdentityType: "IAM",
      SessionLifetimeInMinutes: 600,
      UndoRedoDisabled: false,
    },
    function (err, data) {
      console.log("Errors: ");
      console.log(err);
      console.log("Response: ");
      console.log(data);
      res.send(data);
    }
  );
});

app.get("/stockmarket", function (req, res) {
  var quicksight = new AWS.Service({
    apiConfig: require("./dist/quicksight-2018-04-01.min.json"),
    region: "us-east-1",
  });

  quicksight.getDashboardEmbedUrl(
    {
      AwsAccountId: "534860077983",
      DashboardId: "5c989536-b7ac-4d60-872c-7e51b1a1017d",
      IdentityType: "IAM",
      SessionLifetimeInMinutes: 600,
      UndoRedoDisabled: false,
    },
    function (err, data) {
      console.log("Errors: ");
      console.log(err);
      console.log("Response: ");
      console.log(data);
      res.send(data);
    }
  );
});

app.get("/insurance", function (req, res) {
  var quicksight = new AWS.Service({
    apiConfig: require("./quicksight-2018-04-01.min.json"),
    region: "us-east-1",
  });

  quicksight.getDashboardEmbedUrl(
    {
      AwsAccountId: "534860077983",
      DashboardId: "ca6f22d1-29db-4fe1-ae54-8509f3256f5d",
      IdentityType: "IAM",
      SessionLifetimeInMinutes: 600,
      UndoRedoDisabled: false,
    },
    function (err, data) {
      console.log("Errors: ");
      console.log(err);
      console.log("Response: ");
      console.log(data);
      res.send(data);
    }
  );
});

app.get("/cricket", function (req, res) {
  var quicksight = new AWS.Service({
    apiConfig: require("./dist/quicksight-2018-04-01.min.json"),
    region: "us-east-1",
  });

  quicksight.getDashboardEmbedUrl(
    {
      AwsAccountId: "534860077983",
      DashboardId: "ab08c3ec-055f-4c37-983c-4573387fa6e5",
      IdentityType: "IAM",
      SessionLifetimeInMinutes: 600,
      UndoRedoDisabled: false,
    },
    function (err, data) {
      console.log("Errors: ");
      console.log(err);
      console.log("Response: ");
      console.log(data);
      res.send(data);
    }
  );
});

app.get("/cricket-new", function (req, res) {
  var quicksight = new AWS.Service({
    apiConfig: require("./dist/quicksight-2018-04-01.min.json"),
    region: "us-east-1",
  });

  quicksight.getDashboardEmbedUrl(
    {
      AwsAccountId: "534860077983",
      DashboardId:"b1cc4792-1f13-4b9a-9608-36d873f07ba9",
      IdentityType: "IAM",
      SessionLifetimeInMinutes: 600,
      UndoRedoDisabled: false,
    },
    function (err, data) {
      console.log("Errors: ");
      console.log(err);
      console.log("Response: ");
      console.log(data);
      res.send(data);
    }
  );
});

app.get("/new-retail", function (req, res) {
  var quicksight = new AWS.Service({
    apiConfig: require("./dist/quicksight-2018-04-01.min.json"),
    region: "us-east-1",
  });

  quicksight.getDashboardEmbedUrl(
    {
      AwsAccountId: "534860077983",
      DashboardId: "1290c6a8-be9d-40b5-bddc-44349b16cd7e",
      IdentityType: "IAM",
      SessionLifetimeInMinutes: 600,
      UndoRedoDisabled: false,
    },
    function (err, data) {
      console.log("Errors: ");
      console.log(err);
      console.log("Response: ");
      console.log(data);
      res.send(data);
    }
  );
});


app.get("/testing-cricket", function (req, res) {
  var quicksight = new AWS.Service({
    apiConfig: require("./dist/quicksight-2018-04-01.min.json"),
    region: "us-east-1",
  });

  quicksight.getDashboardEmbedUrl(
    {
      AwsAccountId: "534860077983",
      DashboardId:"5114e74b-9817-4ee5-bac8-85563d04e5b5",
      IdentityType: "IAM",
      SessionLifetimeInMinutes: 600,
      UndoRedoDisabled: false,
    },
    function (err, data) {
      console.log("Errors: ");
      console.log(err);
      console.log("Response: ");
      console.log(data);
      res.send(data);
    }
  );
});


app.get("/lastest-db", function (req, res) {
  var quicksight = new AWS.Service({
    apiConfig: require("./dist/quicksight-2018-04-01.min.json"),
    region: "us-east-1",
  });

  quicksight.getDashboardEmbedUrl(
    {
      AwsAccountId: "534860077983",
      DashboardId:"8f4a405c-a5be-4806-a894-8bcc0c31676c",
      IdentityType: "IAM",
      SessionLifetimeInMinutes: 600,
      UndoRedoDisabled: false,
    },
    function (err, data) {
      console.log("Errors: ");
      console.log(err);
      console.log("Response: ");
      console.log(data);
      res.send(data);
    }
  );
});


/*
app.get('/console', function(req, res){
   var quicksight = new AWS.Service({
      apiConfig: require('./quicksight-2018-04-01.min.json'),
      region: 'us-east-1'
});

    {
      AwsAccountId: '534860077983',
      EntryPoint: "",
      SessionLifetimeInMinutes: 600,
      UserArn: 'arn:aws:quicksight:us-east-1:534860077983:user/default/ittreader'
    },
    function (err, data) {
      console.log("Errors: ");
      console.log(err);
      console.log("Response: ");
      console.log(data);
      res.send(data);
    });
});
*/
var key = fs.readFileSync("/etc/letsencrypt/live/api.ittstar.store/privkey.pem");
var cert = fs.readFileSync("/etc/letsencrypt/live/api.ittstar.store/fullchain.pem");
var options = {
  key: key,
  cert: cert,
};

var server = https.createServer(options, app);

server.listen(3000, () => {
  console.log("server starting on port : " + 3000);
});
//app.listen(3000);
