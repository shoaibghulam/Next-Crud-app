import GitHubProvider from  'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'
export const options={
    providers:[
        GitHubProvider({
            clientId:process.env.GITHUB_ID,
            clientSecret:process.env.GITHUB_SECRET
        }),
        CredentialsProvider({
            name:"Credentails",
            credentials:{
                username:{
                    label:"username",
                    type:"text",
                    placeholder:"Enter Username",
                },
                password:{
                    label:"password",
                    type:"password",
                    placeholder:"Enter Password",
                },
            },
            async authorize(credentials){
               const user={id:1,name:"Shoaib Ghulma",email:"shoaibghulam@gmail.com",username:"shoaibghulam",password:"shoaibghulam"}
                if(credentials?.username===user.username && credentials?.password === user.password){
                    return user
                }
                else{
                    return null
                }
            }

        })
    ]
}