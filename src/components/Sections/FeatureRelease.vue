<template>
    <div class="text-left" ref="featureReleaseContent">
      <div class="container">
        <div class="release-header">
          <h1 class="release-title">Discover What's New</h1>
          <p class="release-date">Released on August 3rd, 2023</p>
        </div>
        <div class="release-content">
          <div v-for="(feature, index) in features" :key="index" class="feature">
            <h2 class="feature-title">{{ feature.title }}</h2>
            <p class="feature-description">{{ feature.description }}</p>
          </div>
        </div>
        <div class="release-footer">
          <p class="release-conclusion">
            Stay ahead with these exciting updates. Log in to Taliup Register now and explore the new features!
          </p>
          <p class="release-support">For assistance, our support team is just a message away.</p>
          <p class="release-signature">Best regards,<br />The Taliup Team</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        features: [
          {
            title: "Single Login: Streamlined Access Made Easy",
            description:
              "Say goodbye to the need for an Owner login – now you can log in with any Employee's username and passcode assigned to a register. The app will automatically adopt the permissions of that Employee account, streamlining the login process and enhancing security.",
          },
          {
            title: "Custom Product Prices: Pricing Flexibility at Your Fingertips",
            description:
              "Creating products with custom prices is now a breeze. Simply enable the Custom Price switch when setting up a product, and you can assign any price you wish directly from the Register. It's a game-changer for businesses looking to cater to unique customer preferences and promotions.",
          },
          {
            title: "Filter Schedule by Location: Efficient Appointment Management",
            description:
              "The new Filter Schedule by Location feature allows you to view appointments for all locations or filter them by Location (MID). This level of flexibility ensures seamless appointment scheduling and organization, regardless of the number of locations you operate.",
          },
          {
            title: "Introducing Discounts: Save Big on Every Order",
            description:
              "Easily create various discounts through Taliup HQ, choosing between Percentage or Fixed Amount discounts and applying them before or after tax. Order Level Discounts make promotions a breeze. Create Custom Discounts for greater flexibility.",
          },
          {
            title: "Catalog Menu Revamp: A Cleaner Look for a Better Experience",
            description:
              "Revamped Catalog menu for easy access to all your Catalog items. This cleaner look streamlines your navigation and makes managing your catalog effortless.",
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Your unique CSS styles can go here */
  .feature-release-page {
    background-color: #f9fafc;
    min-height: 100vh;
    padding: 40px 0;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  .release-header {
    text-align: center;
    margin-bottom: 30px;
  }
  
  .release-title {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .release-date {
    font-size: 18px;
    color: #888;
  }
  
  .release-content {
    margin-top: 20px;
  }
  
  .feature {
    margin-bottom: 40px;
  }
  
  .feature-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .feature-description {
    font-size: 18px;
    color: #555;
  }
  
  .release-footer {
    margin-top: 40px;
    text-align: center;
  }
  
  .release-conclusion {
    font-size: 18px;
    margin-bottom: 20px;
  }
  
  .release-support {
    font-size: 16px;
    color: #777;
    margin-bottom: 10px;
  }
  
  .release-signature {
    font-size: 16px;
    color: #444;
  }
  </style>
  