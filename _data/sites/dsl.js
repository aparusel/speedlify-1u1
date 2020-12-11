module.exports = {
	name: "Dsl", // optional, falls back to object key
	description: "Dsl",
	options: {
		frequency: 60 * 23, // (in minutes), 23 hours
	},
	urls: [
    "https://dsl.1und1.de/",
    "https://dsl.1und1.de/dsl-verfuegbarkeit-check",
    "https://dsl.1und1.de/dsl-tarife",
    "https://dsl.1und1.de/wlan-hardware"
	]
};
