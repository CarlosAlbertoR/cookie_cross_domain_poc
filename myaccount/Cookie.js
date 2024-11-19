export default class Cookie {
    static set(name, value, days = 1) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = `expires=${date.toUTCString()}`;

        // Configuración del dominio para Render
        let domain = '';
        if (location.hostname.endsWith('.onrender.com')) {
            domain = '; domain=.onrender.com'; // Solo el dominio base, sin subdominios ni esquemas
        }

        // Solo agrega SameSite=None y Secure si se usa HTTPS
        const sameSite = location.protocol === 'https:' ? '; SameSite=None; Secure' : '';

        // Construcción de la cookie
        const cookieString = `${name}=${value}; ${expires}; path=/${domain}${sameSite}`;
        console.log("Configurando cookie:", cookieString);

        try {
            document.cookie = cookieString;
            console.log("Cookie establecida:", document.cookie);
        } catch (error) {
            console.error("Error configurando la cookie:", error);
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
