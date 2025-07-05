import { mongoose } from "mongoose"
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import User from "@/app/models/userSchema"
import Payment from "@/app/models/PaymentSchema"
// import AppleProvider from 'next-auth/providers/apple'
// import FacebookProvider from 'next-auth/providers/facebook'
// import GoogleProvider from 'next-auth/providers/google'
// import EmailProvider from 'next-auth/providers/email'


export const authOptions = NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    // AppleProvider({
    //   clientId: process.env.APPLE_ID,
    //   clientSecret: process.env.APPLE_SECRET
    // }),
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_ID,
    //   clientSecret: process.env.FACEBOOK_SECRET
    // }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID,
    //   clientSecret: process.env.GOOGLE_SECRET
    // }),
    // // Passwordless / email sign in
    // EmailProvider({
    //   server: process.env.MAIL_SERVER,
    //   from: 'NextAuth.js <no-reply@example.com>'
    // }),
  ],

  pages: {
    signIn: '/auth/login',
    signUp: '/auth/signup',
  },

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider === "github") {
        try {
          // Connect to MongoDB (better to have connection established elsewhere)
          await mongoose.connect("mongodb://localhost:27017/ekchupchai");

          // Check if user exists
          const currUser = await User.findOne({ email: email });

          if (!currUser) {
            // Create new user - using profile.name or user.name instead of undefined 'name'
            const newUser = await User.create({
              name: profile.name || user.name,  // Fixed: using proper name source
              email: email,
            });

            user.name = newUser.email;
          } else {
            user.name = currUser.email;
          }

          return true;
        } catch (error) {
          console.error("SignIn error:", error);
          return false;
        }
      }
      return false; // For non-github providers
    }
  }

})

export { authOptions as GET, authOptions as POST }