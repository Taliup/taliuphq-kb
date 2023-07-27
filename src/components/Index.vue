<template>
  <div class="">
    <div class="side-bar">

      <div class="site-header">
        <a href="" class="site-title text-decoration-none">
          <!-- <h4 class="mb-0">Taliup HQ KB</h4> -->
          <img src="../assets/logo.png" style="height: 55px" alt="">
          <span class="mx-2 text-dark" style="font-weight: 500">
            Knowledge Base
          </span>
        </a>

        <button id="menu-button" class="site-button btn-reset" @click="showMenu">
          <i class="fas fa-bars text-accent"></i>
        </button>
      </div>

      <nav id="site-nav" class="site-nav nav-open">
        <ul class="nav-list">
          <li class="nav-list-item text-left active">
            <a href="#setting-up" class="nav-list-link w-100">Setting Up Tips</a>
          </li>
          <li class="nav-list-item text-left">
            <a href="#quickbooks" class="nav-list-link">ǪuickBooks Integration</a>
          </li>
          <li class="nav-list-item text-left">
            <a href="#employees" class="nav-list-link">Employees</a>
          </li>
          <li class="nav-list-item text-left">
            <a href="#roles-permissions" class="nav-list-link">Roles and Permissions</a>
          </li>
          <li class="nav-list-item text-left">
            <a href="#terminals" class="nav-list-link">Terminals</a>
          </li>
          <li class="nav-list-item text-left">
            <a href="#manage-terminals" class="nav-list-link">Manage Terminals</a>
          </li>
          <li class="nav-list-item text-left">
            <a href="#timesheets" class="nav-list-link">Timesheets</a>
          </li>
          <li class="nav-list-item text-left">
            <div class="d-flex flex-row justify-content-between align-items-center">
              <a href="#catalogs" class="nav-list-link">
                Catalogs
              </a>
              <i class="text-accent mx-3"
                :class="visibleCatalogs ? 'fas fa-chevron-up' : 'fas fa-chevron-down'"
               v-b-toggle.catalog-collapse></i>
            </div>

            <b-collapse id="catalog-collapse" v-model="visibleCatalogs" class="bg-white border-radius">
              <ul style="list-style-type: none">
                <li class="nav-list-item text-left">
                  <a href="#products" class="nav-list-link">Products</a>
                </li>
                <li class="nav-list-item text-left">
                  <a href="#categories" class="nav-list-link">Categories</a>
                </li>
                <li class="nav-list-item text-left">
                  <a href="#inventory" class="nav-list-link">Inventory</a>
                </li>
              </ul>
            </b-collapse>
          </li>
        </ul>
      </nav>

      <!-- <footer class="site-footer">
        <div class="text-left">
          This is a site footer.
        </div>
      </footer> -->
    </div>

    <div class="main">
      <!-- <div class="d-flex flex-row search position-relative">
        <b-input-group class="px-3">
          <template #prepend>
            <i class="fas fa-search search-icon"></i>
          </template>

          <b-form-input class="border-0 border-bottom rounded-0 search" v-model="searchTerm" placeholder="Search knowledge base" @keypress.enter="handleSearch"></b-form-input>
        </b-input-group>

        <div v-if="searchResults.length > 0" class="search-results" id="search-results">
          <ul class="search-results-list">
            <li v-for="(result, index) in searchResults" :key="index">
              <strong>{{ result.name }}</strong>:
              <ul>
                <li v-for="context in result.contexts" :key="context" v-html="context"></li>
              </ul>
            </li>
          </ul>
        </div>
      </div> -->


      <section id="setting-up" class="p-3">
        <setting-up ref="settingUpComponent"/>
      </section>

      <section id="quickbooks" class="p-3">
        <quickbooks ref="quickbooksComponent"/>
      </section>

      <section id="employees" class="p-3">
        <employees ref="employeesComponent"/>
      </section>

      <section id="roles-permissions" class="p-3">
        <roles-and-permissions ref="rolesPermissionsComponent"/>
      </section>

      <section id="terminals" class="p-3">
        <terminals ref="terminalsComponent"/>
      </section>

      <section id="manage-terminals" class="p-3">
        <manage-terminals ref="manageTerminalsComponent"/>
      </section>

      <section id="timesheets" class="p-3">
        <timesheets ref="timesheetsComponent"/>
      </section>

      <section id="catalogs" class="p-3">
        <catalogs ref="catalogsComponent"/>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  props: {
    msg: String
  },
  data() {
    return {
      searchTerm: '',
      searchResults: [],
      visibleCatalogs: false,
    }
  },
  mounted() {
    const tabHeaders = document.querySelectorAll('.nav-list-item');
    const siteNav = document.getElementById('site-nav');
    const menuButton = document.getElementById('menu-button');

    tabHeaders.forEach((header) => {
      header.addEventListener('click', () => {
        // Remove active class from all tab headers and panels
        tabHeaders.forEach((h) => h.classList.remove('active'));

        // Add active class to clicked tab header and panel
        header.classList.add('active');

        siteNav.classList.remove('nav-open');
        menuButton.ariaPressed = false;
      });
    }); 
  },

  methods: {
    showMenu(e) {
      e.preventDefault();
      const siteNav = document.getElementById('site-nav');
      const menuButton = document.getElementById('menu-button');

      if (menuButton.classList.toggle('nav-open')) {
        siteNav.classList.add('nav-open');
        menuButton.ariaPressed = true;
      } else {
        siteNav.classList.remove('nav-open');
        menuButton.ariaPressed = false;
      }
    },

    handleSearch() {
      let sections = [];

      let arr = [
        {
          name: 'Setting Up Tips',
          ref: this.$refs.settingUpComponent.$refs.settingUpContent,
        },
        {
          name: 'Quickbooks Integration',
          ref: this.$refs.quickbooksComponent.$refs.quickbooksContent,
        },
        {
          name: 'Employees',
          ref:this.$refs.employeesComponent.$refs.employeesContent,
        },
        {
          name: 'Roles And Permissions',
          ref: this.$refs.rolesPermissionsComponent.$refs.rolesPermissionsContent,
        },
        {
          name: 'Terminals',
          ref: this.$refs.terminalsComponent.$refs.terminalsContent,
        },
        {
          name: 'Manage Terminals',
          ref: this.$refs.manageTerminalsComponent.$refs.manageTerminalsContent,
        },
        {
          name: 'Timesheets',
          ref: this.$refs.timesheetsComponent.$refs.timesheetsContent,
        },
      ];

      arr.forEach(item => {
        if (item.ref) {
          let allText = this.getTextContent(item.ref);

          sections.push({
            'name': item.name,
            'content': allText,
          });
        }
      });

      if (!this.searchTerm) {
        this.searchResults = [];
        return;
      }

      const searchTerms = this.searchTerm.trim().split(/\s+/).map(term => `(?=.*\\b${term}\\b)`).join('');
      const regex = new RegExp(`${searchTerms}.*`, 'gi');

      // this.searchResults = sections.filter((section) => {
      //   return section.name.match(regex) || section.content.match(regex);
      // });

      this.searchResults = sections.reduce((results, section) => {
        const matchingTexts = this.extractContextualText(section.content, regex);
        if (matchingTexts.length > 0) {
          results.push({ name: section.name, contexts: matchingTexts });
        }
        return results;
      }, []);

      console.log(this.searchResults);
    },

    getTextContent(element) {
      let text = "";
      const nodes = element.childNodes;
      for (const node of nodes) {
        if (node.nodeType === Node.TEXT_NODE) {
          text += node.textContent.trim();
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          text += this.getTextContent(node);
        }
      }
      return text;
    },

    extractContextualText(content, regex) {
      const words = content.split(/\s+/);
      const matchingTexts = [];
      for (let i = 0; i < words.length; i++) {
        if (regex.test(words[i])) {
          let startIndex = Math.max(i - 3, 0);
          let endIndex = Math.min(i + 3, words.length - 1);

          let context = words.slice(startIndex, endIndex + 1).join(' ');
          context = context.replace(regex, '<span>$&</span>');

          console.log('matchingText for ', words[i] , ' => ', context);
          matchingTexts.push(context);
        }
      }
      

      return matchingTexts;
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search-results {
    display: block;
    position: absolute;
    left: 0;
    width: 100%;
    max-height: calc(100% - 4rem);
    overflow-y: auto;
    background-color: #fff;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12), 0 3px 10px rgba(0, 0, 0, 0.08);
}

.search-results-list {
    padding-left: 0;
    margin-bottom: 0.25rem;
    list-style: none;
    font-size: 0.875rem !important;
}

.highlight {
  background-color: yellow;
  font-weight: bold;
}

.input-group-prepend {
  display: flex;
  align-items: center;
}

.form-control:focus {
  box-shadow: none !important;
}

@media (min-width: 31.25rem) {
  .site-title {
    font-size: 1.5rem !important;
    line-height: 1.25;
  }
}

/* 1064px */
@media (min-width: 66.5rem) {
  .side-bar {
    /* width: calc((100% - 66.5rem) / 2 + 16.5rem); */
    width: 35vw !important;
    min-width: 16.5rem;
  }

  .site-nav, .site-header, .site-footer {
    width: 19.5rem !important;
  }

  .main {
    margin-left: 35vw !important;
  }
  

  .bars_button {
    display: none !important;
  }
}

/* 768px */
@media (min-width: 50rem) {
  .main {
    position: relative;
    max-width: 50rem;
    margin-left: 15.5rem;
  }

  .side-bar {
    flex-flow: column nowrap;
    position: fixed;
    width: 15.5rem;
    height: 100%;
    border-right: 1px solid #eeebee;
    align-items: flex-end;
  }

  .site-nav {
    display: block !important;
    padding-top: 3rem;
    padding-bottom: 1rem;
    overflow-y: auto;
    flex: 1 1 auto;
  }

  .site-title {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
    padding-right: 2rem !important;
    padding-left: 2rem !important;
  }

  .site-header .site-button {
    display: none !important;
  }

  .nav-list .nav-list-item .nav-list-link {
    min-height: 2rem;
    line-height: 1.5rem;
    padding-right: 2rem;
    padding-left: 2rem;
  }

  .site-footer {
    position: static !important;
    justify-self: end;
  }

  .search-results {
    top: 100%;
    width: 50rem;
    max-height: calc(100vh - 200%) !important;
  }
}

.site-header img{
  height: 40px !important;
}

.site-footer {
    padding-right: 1rem;
    padding-left: 1rem;
    position: absolute;
    bottom: 0;
    left: 0;
    padding-top: 1rem;
    padding-bottom: 1rem;
    color: #959396;
    font-size: 0.6875rem !important;
}

.site-nav, .site-header, .site-footer {
    width: 100%;
}

.site-nav {
    display: none;
}

.site-nav.nav-open {
    display: block;
}

.btn-reset {
    background: none;
    border: none;
    margin: 0;
    text-align: inherit;
    font: inherit;
    border-radius: 0;
    appearance: none;
}

.site-button {
    display: flex;
    height: 100%;
    padding: 1rem;
    align-items: center;
}

.site-header {
  width: 100%;
}

.site-header {
    display: flex;
    min-height: 3.75rem;
    align-items: center;
}

.sitenav {
  display: none;
}

.site.nav-open {
  display: block;
}

.bars_button {
  display: flex;
}

.side-bar {
    z-index: 0;
    display: flex;
    flex-wrap: wrap;
    background-color: #f5f6fa;
}

.site-title {
  padding-right: 1rem;
  padding-left: 1rem;
  flex-grow: 1;
  display: flex;
  height: 100%;
  align-items: center;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  color: #27262b;
  font-size: 1.125rem;
  border-bottom: 1px solid #eeebee;
}

.site-title img {
  height: 30px;
}

.logo {
  height: 3.75rem;
  max-height: 3.75rem;
  text-decoration: none;
  border-bottom: 1px solid #eeebee;
}

.logo a {
  height: 100%;
  display: flex;
  align-items: center;
  color: #222;
}

.search {
  height: 3.75rem;
  font-size: 14px;
}

.nav-list {
  padding: 0;
  margin-top: 0;
  margin-bottom: 0;
  list-style: none;
}

.nav-list-item {
  font-size: 14px;
  transition: 0.3s ease-in;
}

.nav-list-item.active {
  font-weight: 600;
  background-image: linear-gradient(-90deg, #ebedf5 0%, rgba(235, 237, 245, 0.8) 80%, rgba(235, 237, 245, 0) 100%);
}

.nav-list-link:hover {
  background-image: linear-gradient(-90deg, #ebedf5 0%, rgba(235, 237, 245, 0.8) 80%, rgba(235, 237, 245, 0) 100%);
}

.nav-list-link {
  text-decoration: none;
  color: #7253ed;
  display: block;
  padding: 8px 7px;
}

.text-accent {
  color: #7253ed !important;
}

.text-left {
  text-align: left;
}

section {
  min-height: 100vh;
}
</style>
