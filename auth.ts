import NextAuth from "next-auth";
import Email from "next-auth/providers/email";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Email({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});
