# ADBlocker_cryptography_engineering

## Introduction

This project is about a malicious Adblocker extention. It contain a Adblocker extention and a simple server to receive the data from the extention.

The malicious functions of the Adblocker extention:

- Send the request data of users to the server onComplete

## Installation

For installation of the extention, please refer to this [link](https://hsiehjenhsuan.medium.com/%E4%B8%8A%E5%82%B3%E8%87%AA%E5%B7%B1%E7%9A%84chrome%E6%93%B4%E5%85%85%E5%8A%9F%E8%83%BD%E8%88%87%E5%81%9C%E6%AD%A2chrome%E6%93%B4%E5%85%85%E5%8A%9F%E8%83%BD%E8%87%AA%E5%8B%95%E6%9B%B4%E6%96%B0-ba56801cb5)

For setting up the server, go under the `Server` folder and run the following command:

```bash
npm install
node server.js
```

The target server for the extention is set to `http://localhost:6969`, and the port of the server is also set to `6969`.
If you want to change the server address, please go to the `background.js` file and change the `MALICIOUS_SERVER_URL` variable.

## Operation

After installation and the server is running. The extention will keep running, if the extention is enabled. Anytime a web request in completed, the extention will send the request data to the server's log.

## Setting

### manifest.json

- `background.persistent`: Set to `true` will make the extention keep running as long as it is enabled.

### background.js

- `MALICIOUS_SERVER_URL`: The target server for the extention.

### server.js

- `port`: The port of the server.
