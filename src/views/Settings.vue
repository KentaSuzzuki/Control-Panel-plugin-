<template>
  <div class="settings">
    <header class="settings-header">
      <button class="back-btn" @click="goBack">
        ← Back to Dashboard
      </button>
      <h1>Settings</h1>
    </header>
    
    <div class="settings-content">
      <div class="settings-section">
        <h2>General Settings</h2>
        <div class="setting-item">
          <label>
            <input type="checkbox" v-model="settings.notifications">
            Enable Notifications
          </label>
        </div>
        <div class="setting-item">
          <label>
            <input type="checkbox" v-model="settings.darkMode">
            Dark Mode
          </label>
        </div>
        <div class="setting-item">
          <label>Language:</label>
          <select v-model="settings.language">
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
          </select>
        </div>
      </div>
      
      <div class="settings-section">
        <h2>Account Settings</h2>
        <div class="setting-item">
          <label>Email:</label>
          <input type="email" v-model="settings.email" placeholder="Enter your email">
        </div>
        <div class="setting-item">
          <label>Username:</label>
          <input type="text" v-model="settings.username" placeholder="Enter username">
        </div>
        <div class="setting-item">
          <button class="btn btn-primary" @click="saveSettings">Save Settings</button>
        </div>
      </div>
      
      <div class="settings-section">
        <h2>About</h2>
        <p>Dashboard App v1.0.0</p>
        <p>Simple and clean dashboard interface</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SettingsView',
  data() {
    return {
      settings: {
        notifications: true,
        darkMode: false,
        language: 'en',
        email: 'user@example.com',
        username: 'admin'
      }
    }
  },
  methods: {
    goBack() {
      this.$router.push('/')
    },
    saveSettings() {
      alert('Settings saved successfully!')
    }
  }
}
</script>

<style scoped>
.settings {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
}

.settings-header {
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  gap: 20px;
}

.back-btn {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.back-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

.settings-header h1 {
  color: white;
  font-size: 2.5rem;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.settings-content {
  max-width: 800px;
  margin: 0 auto;
}

.settings-section {
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  margin-bottom: 30px;
}

.settings-section h2 {
  color: #333;
  margin: 0 0 20px 0;
  font-size: 1.5rem;
  border-bottom: 2px solid #f0f0f0;
  padding-bottom: 10px;
}

.setting-item {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 15px;
}

.setting-item label {
  font-weight: 600;
  color: #555;
  min-width: 120px;
}

.setting-item input[type="text"],
.setting-item input[type="email"],
.setting-item select {
  flex: 1;
  padding: 10px;
  border: 2px solid #e0e0e0;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.setting-item input[type="text"]:focus,
.setting-item input[type="email"]:focus,
.setting-item select:focus {
  outline: none;
  border-color: #667eea;
}

.setting-item input[type="checkbox"] {
  margin-right: 10px;
  transform: scale(1.2);
}

.btn {
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary {
  background: #007bff;
  color: white;
}

.btn-primary:hover {
  background: #0056b3;
  transform: translateY(-2px);
}

.settings-section p {
  color: #666;
  margin: 10px 0;
}

@media (max-width: 768px) {
  .settings-header {
    flex-direction: column;
    text-align: center;
  }
  
  .setting-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
  
  .setting-item label {
    min-width: auto;
  }
}
</style> 