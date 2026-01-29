const crypto = require('crypto');

// Polyfill crypto.getRandomValues if missing (Node < 19)
if (!crypto.getRandomValues) {
    crypto.getRandomValues = function(buffer) {
        return crypto.randomFillSync(buffer);
    };
}

// Polyfill global.crypto
if (!global.crypto) {
    global.crypto = crypto;
}
