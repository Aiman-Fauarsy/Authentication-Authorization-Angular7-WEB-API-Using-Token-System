using Microsoft.Owin.Security;
using Microsoft.Owin.Security.OAuth;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web;
using WebApi_Regi.Models;


/// <summary>
/// ApplicationOAuthProvider is a nuged package, it checks if the user exists when ever he tries to login
/// </summary>
namespace WebApi_Regi
{
    public class ApplicationOAuthProvider : OAuthAuthorizationServerProvider
    {
        public override async Task ValidateClientAuthentication(OAuthValidateClientAuthenticationContext context)
        {
            context.Validated();
        }

        public override async Task GrantResourceOwnerCredentials(OAuthGrantResourceOwnerCredentialsContext context)
        {
            var user = AuthService.GetLoginUser(context.UserName, context.Password);

            if (user != null)
            {
                var identity = new ClaimsIdentity(context.Options.AuthenticationType);

                AuthenticationProperties data = CreateProperties(user);
                var ticket = new AuthenticationTicket(identity, data);

                context.Validated(ticket);
            }

        }

        public static AuthenticationProperties CreateProperties(Register user)
        {
            IDictionary<string, string> data = new Dictionary<string, string>
        {
            { "Username", user.Username },
            {"Id", user.Id.ToString()},
        };
            return new AuthenticationProperties(data);
        }
        public override Task TokenEndpoint(OAuthTokenEndpointContext context)
        {
            foreach (KeyValuePair<string, string> property in context.Properties.Dictionary)
            {
                context.AdditionalResponseParameters.Add(property.Key, property.Value);
            }

            return Task.FromResult<object>(null);
        }

    }
}