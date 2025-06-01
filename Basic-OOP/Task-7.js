const configuration = {
    // Default values
    defaultSettings: {
        language: "az",
        theme: "light",
        notifications: true,
        autosave: 10,
        fontSize: 14
    },

    userSettings: {},


    setSetting(key, value) {
       this.userSettings[key] = value
    },

    getSetting(key) {
       return this.userSettings[key] ?? this.defaultSettings[key]
    },

    resetSettings() {
        this.userSettings = {}
    },

    getAllSettings() {
        return { ...this.defaultSettings, ...this.userSettings }
    },

    exportSettings() {
       return JSON.stringify(this.userSettings)
    },

    importSettings(jsonString) {
        try {
            this.userSettings = JSON.parse(jsonString);
        } catch (e) {
            console.error("Invalid JSON", e)
        }
    }
}

configuration.setSetting("theme", "dark")
console.log(configuration.getSetting("theme"))
console.log(configuration.getSetting("language"))

const exported = configuration.exportSettings()
console.log(exported)

configuration.resetSettings()
console.log(configuration.getSetting("theme"))

configuration.importSettings(exported)
console.log(configuration.getSetting("theme"))


