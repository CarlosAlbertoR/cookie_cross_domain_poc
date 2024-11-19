export default class Cookie {
    static set(name, value, days = 1) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // Expiry in days
        const expires = `expires=${date.toUTCString()}`;

        // Explicitly define domain for cross-subdomain sharing
        const domain = '.cross-subdomain-poc.online'; // Ensure this matches the shared root domain
        const sameSite = '; SameSite=None; Secure'; // Required for cross-site cookies in HTTPS
        const path = '; path=/'; // Accessible across the entire subdomain

        // Create and set the cookie
        const cookieString = `${name}=${value}; ${expires}; domain=${domain}${sameSite}${path}`;
        document.cookie = cookieString;

        console.log("Cookie set:", cookieString);
    }

    static get(name) {
        const nameEQ = `${name}=`;
        const cookies = document.cookie.split(';');
        for (let cookie of cookies) {
            let c = cookie.trim();
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length);
        }
        return null;
    }

    static erase(name) {
        this.set(name, '', -1); // Set cookie expiry to past
    }
}