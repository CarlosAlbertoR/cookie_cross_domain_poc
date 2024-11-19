export default class Cookie {
    static set(name, value, days = 1) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = `expires=${date.toUTCString()}`;

        // Configurar SameSite=None y Secure si HTTPS
        const sameSite = location.protocol === 'https:' ? '; SameSite=None; Secure' : '';

        // Configurar la cookie en el subdominio checkout
        let domain = 'checkout-n13j.onrender.com';
        let cookieString = `${name}=${value}; ${expires}; path=/; domain=${domain}${sameSite}`;
        console.log("Configurando cookie en el subdominio checkout:", cookieString);

        try {
            document.cookie = cookieString;
            console.log("Cookie establecida en el subdominio checkout:", document.cookie);
        } catch (error) {
            console.error("Error configurando la cookie en el subdominio checkout:", error);
        }

        // Configurar la cookie en el subdominio myaccount
        domain = 'myaccount-09w5.onrender.com';
        cookieString = `${name}=${value}; ${expires}; path=/; domain=${domain}${sameSite}`;
        console.log("Configurando cookie en el subdominio myaccount:", cookieString);

        try {
            document.cookie = cookieString;
            console.log("Cookie establecida en el subdominio myaccount:", document.cookie);
        } catch (error) {
            console.error("Error configurando la cookie en el subdominio myaccount:", error);
        }
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
        this.set(name, '', -1);
    }
}