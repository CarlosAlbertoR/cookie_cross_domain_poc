export default class Cookie {
    static set(name, value, days = 1) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = `expires=${date.toUTCString()}`;

        // Configura el dominio como el dominio raíz común para Render
        const domain = '; domain=.onrender.com';

        // Configura SameSite y Secure si estás usando HTTPS
        const sameSite = location.protocol === 'https:' ? '; SameSite=None; Secure' : '';

        // Configurar la cookie
        const cookieString = `${name}=${value}; ${expires}; path=/${domain}${sameSite}`;
        console.log("Configurando cookie:", cookieString);

        document.cookie = cookieString;
        console.log("Cookie establecida:", document.cookie);
    }

    static get(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i].trim();
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    static erase(name) {
        this.set(name, '', -1);
    }
}
