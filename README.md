# Cookie Cross-Domain Proof of Concept (PoC)

## Overview

This project demonstrates a **Proof of Concept (PoC)** for implementing cross-subdomain cookies to enable seamless user authentication and state sharing between two subdomains: `myaccount` and `checkout`. The PoC was created using plain HTML, JavaScript, and a simple file structure to validate the feasibility of cross-domain cookie management.

## Project Structure

```txt
    .
├── README.md                   # Project documentation
├── checkout/                   # Files for the "Checkout" subdomain
│   ├── Cookie.js               # Utility for setting, getting, and erasing cookies
│   ├── checkAuth.js            # Script for authentication validation
│   └── index.html              # HTML file for the Checkout page
└── myaccount/                  # Files for the "My Account" subdomain
    ├── Cookie.js               # Utility for cookie management
    ├── index.html              # HTML file for the My Account page
    └── login.js                # Script for login functionality
```

## Subdomains

1. **`myaccount.cross-subdomain-poc.online`**

   - URL: [My Account](https://myaccount.cross-subdomain-poc.online)
   - Purpose: Allows users to log in and set cookies that are accessible across subdomains.

2. **`checkout.cross-subdomain-poc.online`**
   - URL: [Checkout](https://checkout.cross-subdomain-poc.online)
   - Purpose: Reads authentication cookies set by the `myaccount` subdomain to enable a seamless user experience.

## Features

- **Cross-Subdomain Cookie Management:** Implements cookies with the `SameSite=None` and `Secure` attributes to enable cross-domain sharing over HTTPS.
- **Login Simulation:** Users can log in via the `My Account` subdomain, and their state is shared with the `Checkout` subdomain.
- **Minimalist Design:** Focuses solely on the functionality to validate cross-subdomain cookie behavior.

## Setup Instructions

1. **Custom Domain Configuration:**

   - Point your domain (e.g., `cross-subdomain-poc.online`) to the deployment platform (e.g., Render or any other hosting provider).
   - Configure subdomains (`myaccount` and `checkout`) using CNAME records.

2. **Deployment:**

   - Host the `myaccount` and `checkout` directories on two separate services or subdomains.

3. **Cookie Configuration:**
   - Use the `Cookie.js` utility to set cookies with the `domain=.cross-subdomain-poc.online` attribute to enable cross-subdomain sharing.

## Demo

- **My Account:** [https://myaccount.cross-subdomain-poc.online](https://myaccount.cross-subdomain-poc.online)
- **Checkout:** [https://checkout.cross-subdomain-poc.online](https://checkout.cross-subdomain-poc.online)

For further questions or enhancements, feel free to reach out!
