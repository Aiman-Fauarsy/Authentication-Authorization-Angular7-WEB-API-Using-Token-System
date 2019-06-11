using System;

using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApi_Regi.Models;

namespace WebApi_Regi
{
    //Auth Service returns the user Data after the user login and send it to ApplicationOAuthProvider
    public class AuthService
    {
        public static Register GetLoginUser(string username, string password)
        {
            using (var db = new RegisterDataEntities())
            {
                var user = db.Registers.FirstOrDefault(x => x.Username == username && x.Password == password);
                return user;

            }
        }
    }
}