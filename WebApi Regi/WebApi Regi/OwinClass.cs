using System;
using System.Threading.Tasks;
using Microsoft.Owin;
using Microsoft.Owin.Cors;
using Microsoft.Owin.Security.OAuth;
using Owin;

///////////////////
///Owin class 
///one of the AuthorizationServerOptions it gives the user token so it can allow him to login with his accounts,
///and he is allowed to do actions by his token
///example without the token he can't login and redirect to the page in angular project
///
[assembly: OwinStartup(typeof(WebApi_Regi.OwinClass))]

namespace WebApi_Regi
{
    public class OwinClass
    {
        public void Configuration(IAppBuilder app)
        {
            app.UseCors(CorsOptions.AllowAll);

            OAuthAuthorizationServerOptions options = new OAuthAuthorizationServerOptions
            {
                TokenEndpointPath = new PathString("/token"),
                Provider = new ApplicationOAuthProvider(),
                AccessTokenExpireTimeSpan = TimeSpan.FromMinutes(60),
                AllowInsecureHttp = true
            };

            app.UseOAuthAuthorizationServer(options);
            app.UseOAuthBearerAuthentication(new OAuthBearerAuthenticationOptions());
        }
    }
}
