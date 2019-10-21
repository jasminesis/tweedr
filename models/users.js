var sha256 = require('js-sha256');
var SALT = "tweedr";

module.exports = (dbPoolInstance) => {

    let newUsers = (values, callback) => {


        let hashedPassword = sha256(values.password + SALT);
        const queryString = 'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *';

        const array = [
            values.username, hashedPassword
        ];

        dbPoolInstance.query(queryString, array, (err, queryResult) => {
            if (err) {
                callback(err, null);
            } else {
                if (queryResult.rows.length > 0) {
                    callback(null, queryResult.rows);

                } else {
                    callback(null, null);

                }
            }
        })
    }


    // let getLogIn = (callback) => {

    //     let requestUsername = request.body.username;
    //     let requestPassword = request.body.password;

    //     const queryString = "SELECT * FROM users WHERE username= '" + requestUsername + "'";

    //     dbPoolInstance.query(query, (err, result) => {
    //         if (err) {

    //             // invoke callback function with results after query has executed
    //             callback(err, null);

    //         } else {

    //             // invoke callback function with results after query has executed

    //             if (result.rows.length > 0) {
    //                 callback('query result: ', result.rows);


    //             } else {
    //                 callback(null, null);

    //             }
    //         }
    //     });

    // };



    // let newTweets = (callback) => {
    //     const newTweet = 'INSERT INTO tweets (content) VALUES ($1)';
    //     let values = [request.body.tweets];
    //     let tweets = [];

    //     dbPoolInstance.query(newTweet, values, (err, result) => {
    //         for (let i = 0; i < result.rows.length; i++) {
    //             tweets.push(result.rows[i]);
    //         }
    //     })
    // }

    return {
        // getLogIn: getLogIn,
        // newTweets: newTweets,
        newUsers: newUsers
    };
}