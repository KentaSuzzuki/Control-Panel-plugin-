<template>
  <div class="dashboard">
    <header class="dashboard-header">
      <h1>Dashboard</h1>
    </header>
    
    <div class="dashboard-content">
      <div class="stats-grid">
        <div class="stat-card">
          <h3>Total Users</h3>
          <p class="stat-number">1,234</p>
        </div>
        <div class="stat-card">
          <h3>Active Sessions</h3>
          <p class="stat-number">567</p>
        </div>
        <div class="stat-card">
          <h3>Revenue</h3>
          <p class="stat-number">$12,345</p>
        </div>
        <div class="stat-card">
          <h3>Orders</h3>
          <p class="stat-number">89</p>
        </div>
      </div>
      
      <div class="action-buttons">
        <button class="btn btn-primary" @click="goToDragging">Dragging</button>
        <button class="btn btn-secondary">Export Data</button>
        <button class="btn btn-success">Add User</button>
        <button class="btn btn-warning">Notifications</button>
        <button class="btn btn-info" @click="goToSettings">Settings</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardView',
  methods: {
    goToSettings() {
      this.$router.push('/settings')
    },
    goToDragging() {
      this.$router.push('/dragging')
    }
  }
}
</script>

<style scoped>
.dashboard {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
}

.dashboard-header {
  text-align: center;
  margin-bottom: 40px;
}

.dashboard-header h1 {
  color: white;
  font-size: 2.5rem;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.dashboard-content {
  max-width: 1200px;
  margin: 0 auto;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.stat-card {
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  text-align: center;
  transition: transform 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
}

.stat-card h3 {
  color: #666;
  margin: 0 0 15px 0;
  font-size: 1.1rem;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  margin: 0;
}

.action-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
}

.btn {
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 120px;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

.btn-primary {
  background: #007bff;
  color: white;
}

.btn-secondary {
  background: #6c757d;
  color: white;
}

.btn-success {
  background: #28a745;
  color: white;
}

.btn-warning {
  background: #ffc107;
  color: #212529;
}

.btn-info {
  background: #17a2b8;
  color: white;
}

@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
  
  .action-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .btn {
    width: 100%;
    max-width: 300px;
  }
}
</style> 