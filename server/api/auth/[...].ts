import GithubProvider from "@auth/core/providers/github"
import type { AuthConfig } from "@auth/core/types"
import { NuxtAuthHandler } from "#auth"
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import {db} from '../../utils/db'
import type { Adapter } from "@auth/core/adapters";

const runtimeConfig = useRuntimeConfig()


// export const authOptions: AuthConfig= {
//   adapter: DrizzleAdapter(db),
//   trustHost: true,
//   secret: runtimeConfig.authJs.secret,
//   providers: [
//     GithubProvider({
//       clientId: runtimeConfig.github.clientId,
//       clientSecret: runtimeConfig.github.clientSecret
//     })
//   ],
//   callbacks: {
//     async jwt({ token, user, session }) {
//       console.log("jwt callback", { token, user, session })
//       return token
//     }
//   }
// }

export const authOptions = {
  adapter: DrizzleAdapter(db) as Adapter,
  session: {
    strategy: "jwt",
  },
  trustHost: true,
  secret: runtimeConfig.authJs.secret,
  providers: [
    GithubProvider({
      clientId: runtimeConfig.github.clientId,
      clientSecret: runtimeConfig.github.clientSecret
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      const dbUser = await db.query.users.findFirst({
        where: (users, { eq }) => eq(users.email, token.email!),
      });

      if (!dbUser) {
        throw new Error("no user with email found");
      }

      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        picture: dbUser.image,
      };
    },
    async session({ token, session }) {
      if (token) {
        session.user = {
          id: token.id as string,
          name: token.name,
          email: token.email,
          image: token.picture,
        };
      }

      return session;
    },
  },
} satisfies AuthConfig;

export default NuxtAuthHandler(authOptions, runtimeConfig)

// export default NextAuth({
//   adapter: DrizzleAdapter(db),
//   trustHost: true,
//   secret: runtimeConfig.authJs.secret,
//   providers: [
//     GithubProvider({
//       clientId: runtimeConfig.github.clientId,
//       clientSecret: runtimeConfig.github.clientSecret
//     })
//   ]
// })