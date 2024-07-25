//  const baseurl = 'https://mk-be-0f3c24a58a9b.herokuapp.com'
function getBaseUrl() {
    const environment = import.meta.env.VITE_APP_ENVIRONMENT || "local";
    try {
        switch (environment) {
            case 'production':
        return import.meta.env.VITE_APP_PRODUCTION_API_URL;
            case 'staging':
        return import.meta.env.VITE_APP_STAGING_API_URL;
            default:
                throw new Error(`Invalid environment: ${environment}`);
        }
    }
    catch (err) {
        console.log(err)
    }
}
export const baseurl = getBaseUrl()
export const apis = {
    // Auth
    LOGIN_API: `${baseurl}/login`,
    Register_Api: `${baseurl}/signup`,

}




