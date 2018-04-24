const chalk = require('chalk');
const redis = require('redis');

const client = redis.createClient();

client.on('error', (error) => {
    console.error(`[redis]${chalk.dred('[error]')}: ${error}`);
});

async function get() {

}

async function set() {

}

async function list() {

}

module.exports = {
    get,
    set,
    list,
};