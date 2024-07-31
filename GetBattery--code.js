// Get the battery API
    // Get the battery API
    navigator.getBattery().then(function(battery) {
        battery.addEventListener('chargingchange', function(){
        console.log( 'New charging state: ', battery.charging );
        });
        battery.addEventListener('levelchange', function(){
        console.log( 'New battery level: ', battery.level * 100 + "%" );
        });
        battery.addEventListener('chargingtimechange', function(){
        console.log( 'New time left until full: ', battery.chargingTime /60, " seconds" );
        });
        battery.addEventListener('dischargingtimechange', function(){
        console.log( 'New time left until empty: ', battery.dischargingTime /60 , " minutes" );
        });
        });

// Section 1. Getting current battery level
// Get the battery API
        navigator.getBattery().then(function(battery) {
        // Battery level is between 0 and 1, so i multiply it by 100 to get percentage
        console.log("Battery level: " + battery.level * 100 + "%");
        });

// Section 2. Is battery charging?
        // Get the battery API
        navigator.getBattery().then(function(battery) {
        if (battery.charging) {
        console.log("Battery is charging");
        } else {
        console.log("Battery is discharging");
        }
        });

// Section 3. Get time left until battery is empty
        // Get the battery API
        navigator.getBattery().then(function(battery) {
        console.log( "Battery will drain in ", battery.dischargingTime / 60 , " minutes" );
        });
        
// Section 4. Get time left until battery is fully charged
        // Get the battery API
        navigator.getBattery().then(function(battery) {
        console.log( "Battery will get fully charged in ", battery.chargingTime, " seconds" );
        });
        