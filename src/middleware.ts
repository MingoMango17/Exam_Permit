export {default} from "next-auth/middleware"

export const config = {
    matcher: ['/home', '/payment', '/history', '/change-password']
}