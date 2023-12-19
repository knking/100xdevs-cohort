
// callback hell
// Function to simulate downloading data
function downloadData(callback) {
    setTimeout(function() {
        console.log("Data downloaded");
        callback("Downloaded Data");
    }, 1000);
}

// Function to simulate processing the downloaded data
function processData(data, callback) {
    setTimeout(function() {
        console.log("Data processed");
        callback("Processed " + data);
    }, 1000);
}

// Initiating the process
downloadData(function(downloadedData) {
    processData(downloadedData, function(processedData) {
        console.log("Final result: " + processedData);
    });
});


//Promises
// Function to simulate downloading data, now returns a Promise
function downloadData() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log("Data downloaded");
            resolve("Downloaded Data");
        }, 1000);
    });
}

// Function to simulate processing the downloaded data, now returns a Promise
function processData(data) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log("Data processed");
            resolve("Processed " + data);
        }, 1000);
        
    });
}

// Using Promises to handle the asynchronous operations
downloadData()
    .then(processData)
    .then(function(finalResult) {
        console.log("Final result: " + finalResult);
    })
    .catch(function(error) {
        console.error("An error occurred:", error);
    });
