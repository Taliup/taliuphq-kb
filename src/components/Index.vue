<template>
  <div class="guide-dashboard">
    <aside class="guide">
      <div class="logo-container">
        <img src="../assets/logo.png" alt="Logo" class="logo-image">
        <span class="guide-title">Knowledge Base</span>
      </div>
      <nav class="guide-nav">
        <ul class="nav-list">
          <li v-for="section in sections" :key="section.id">
            <a :href="'#' + section.id" class="nav-list-link" @click="activateSection(section)">{{ section.name }}</a>
          </li>
        </ul>
      </nav>
    </aside>

    <main class="dashboard">
      <section v-for="section in sections" :key="section.id" :id="section.id" class="content-section">
        <component :is="section.component" ref="section.componentRef"></component>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      sections: [
        {
          id: 'setting-up',
          name: 'Setting Up Tips',
          component: 'setting-up',
          isActive: true,
        },
        {
          id: 'quickbooks',
          name: 'QuickBooks Integration',
          component: 'quickbooks',
          isActive: false,
        },
        {
          id: 'employees',
          name: 'Employees',
          component: 'employees',
          isActive: false,
        },
        {
          id: 'roles-and-permissions',
          name: 'Roles and Permissions',
          component: 'roles-and-permissions',
          isActive: false,
        },
        {
          id: 'terminals',
          name: 'Terminals',
          component: 'terminals',
          isActive: false,
        },
        {
          id: 'manage-terminals',
          name: 'Manage Terminals',
          component: 'manage-terminals',
          isActive: false,
        },
        {
          id: 'timesheets',
          name: 'Timesheets',
          component: 'timesheets',
          isActive: false,
        },
        {
        id: 'catalogs',
        name: 'Catalogs',
        subSections: [
          { id: 'products', name: 'Products', component: 'products', isActive: false },
          { id: 'categories', name: 'Categories', component: 'categories', isActive: false },
          { id: 'inventory', name: 'Inventory', component: 'inventory', isActive: false },
        ],
        component: 'catalogs',
        isActive: false,
        // Add more sections here
        },
      ],
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    activateSection(section) {
      this.sections.forEach(sec => (sec.isActive = sec.id === section.id));
    },
  },
};
</script>

<style scoped>

.guide-dashboard {
  display: flex;
  min-height: 100vh;
  background-color: #f4f4f4;
}

.guide {
  position: fixed;
  height: 100%;
  min-width: 250px;
  flex: 0 0 16rem;
  padding: 2rem;
  background-color: #1f1f1f;
  color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.logo-container {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
}

.logo-image {
  height: 40px;
}

.guide-title {
  margin-left: 1rem;
  font-size: 1.25rem;
  font-weight: bold;
  color: white;
}

.guide-nav {
  margin-bottom: 2rem;
}

.nav-list {
  padding: 0;
  list-style: none;
}

.nav-list-link {
  text-decoration: none;
  color: white;
  display: block;
  padding: 0.75rem 0;
  transition: background-color 0.3s;
}

.nav-list-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.dashboard {
  margin-left: 250px;
  padding: 2rem;
}

.content-section {
  margin-bottom: 2rem;
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 2rem;
}

/* Left align all content */
.guide,
.dashboard {
  text-align: left;
}

/* Customize styles for other components as needed */
</style>
